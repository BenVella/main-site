import fs from 'node:fs';
import path from 'node:path';

const publishDir = path.resolve(process.argv[2] || process.cwd());
const stagingDir = path.join(publishDir, 'staging');
const previewDataDir = path.join(stagingDir, '_preview-data');
const manifestPath = path.join(stagingDir, 'previews.json');

fs.mkdirSync(stagingDir, { recursive: true });

const entries = fs.existsSync(previewDataDir)
  ? fs
      .readdirSync(previewDataDir)
      .filter((fileName) => fileName.endsWith('.json'))
      .map((fileName) => {
        const entryPath = path.join(previewDataDir, fileName);
        const entry = JSON.parse(fs.readFileSync(entryPath, 'utf8'));
        const prNumber = Number(entry.prNumber);
        const previewPathSegment = entry.previewPathSegment || `pr-${prNumber}`;

        return {
          prNumber,
          branchName: entry.branchName,
          title: entry.title || '',
          label: `${entry.branchName} · PR #${prNumber}`,
          previewPathSegment,
          url: `/staging/${previewPathSegment}/`,
          updatedAt: entry.updatedAt || new Date(0).toISOString(),
        };
      })
      .filter((entry) => Number.isFinite(entry.prNumber) && entry.branchName)
      .sort((left, right) => right.prNumber - left.prNumber)
  : [];

fs.writeFileSync(manifestPath, `${JSON.stringify(entries, null, 2)}\n`);
