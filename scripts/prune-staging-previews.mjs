import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

function collectPreviewCandidates(stagingDir) {
  const candidates = new Map();
  const previewDataDir = path.join(stagingDir, '_preview-data');

  if (fs.existsSync(previewDataDir)) {
    for (const fileName of fs.readdirSync(previewDataDir)) {
      if (!fileName.endsWith('.json')) {
        continue;
      }

      const metadataPath = path.join(previewDataDir, fileName);
      const entry = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
      const prNumber = Number(entry.prNumber);
      const previewPathSegment = entry.previewPathSegment || `pr-${prNumber}`;

      if (!Number.isFinite(prNumber) || !previewPathSegment) {
        continue;
      }

      candidates.set(previewPathSegment, {
        prNumber,
        previewPathSegment,
        metadataPath,
        previewDir: path.join(stagingDir, previewPathSegment),
      });
    }
  }

  if (fs.existsSync(stagingDir)) {
    for (const entry of fs.readdirSync(stagingDir, { withFileTypes: true })) {
      if (!entry.isDirectory()) {
        continue;
      }

      const previewMatch = entry.name.match(/^pr-(\d+)$/);

      if (!previewMatch) {
        continue;
      }

      const previewPathSegment = entry.name;
      const existingCandidate = candidates.get(previewPathSegment);

      candidates.set(previewPathSegment, {
        prNumber: existingCandidate?.prNumber ?? Number(previewMatch[1]),
        previewPathSegment,
        metadataPath: existingCandidate?.metadataPath,
        previewDir: path.join(stagingDir, previewPathSegment),
      });
    }
  }

  return [...candidates.values()];
}

async function fetchPullRequestStates({ repository, token, prNumbers, fetchImpl = globalThis.fetch }) {
  if (prNumbers.length === 0) {
    return new Map();
  }

  if (!repository) {
    throw new Error('GITHUB_REPOSITORY must be set when preview entries exist.');
  }

  if (!token) {
    throw new Error('GITHUB_TOKEN must be set when preview entries exist.');
  }

  const results = await Promise.all(
    prNumbers.map(async (prNumber) => {
      const response = await fetchImpl(`https://api.github.com/repos/${repository}/pulls/${prNumber}`, {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${token}`,
          'User-Agent': 'staging-preview-pruner',
          'X-GitHub-Api-Version': '2022-11-28',
        },
      });

      if (response.status === 404) {
        return [prNumber, 'closed'];
      }

      if (!response.ok) {
        const body = await response.text();
        throw new Error(`Failed to fetch PR #${prNumber}: ${response.status} ${body}`);
      }

      const payload = await response.json();
      return [prNumber, payload.state];
    }),
  );

  return new Map(results);
}

export async function pruneStagingPreviews({
  publishDir,
  repository = process.env.GITHUB_REPOSITORY,
  token = process.env.GITHUB_TOKEN,
  fetchImpl = globalThis.fetch,
} = {}) {
  const resolvedPublishDir = path.resolve(publishDir || process.cwd());
  const stagingDir = path.join(resolvedPublishDir, 'staging');
  const candidates = collectPreviewCandidates(stagingDir);
  const prNumbers = [...new Set(candidates.map((candidate) => candidate.prNumber).filter(Number.isFinite))];
  const pullRequestStates = await fetchPullRequestStates({ repository, token, prNumbers, fetchImpl });
  const removedPreviewSegments = [];

  for (const candidate of candidates) {
    if (pullRequestStates.get(candidate.prNumber) === 'open') {
      continue;
    }

    if (candidate.previewDir) {
      fs.rmSync(candidate.previewDir, { recursive: true, force: true });
    }

    if (candidate.metadataPath) {
      fs.rmSync(candidate.metadataPath, { force: true });
    }

    removedPreviewSegments.push(candidate.previewPathSegment);
  }

  return removedPreviewSegments.sort();
}

async function main() {
  const removedPreviewSegments = await pruneStagingPreviews({
    publishDir: process.argv[2],
  });

  if (removedPreviewSegments.length > 0) {
    console.log(`Removed closed previews: ${removedPreviewSegments.join(', ')}`);
  }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  await main();
}
