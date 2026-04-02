import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { after, test } from 'node:test';

import { pruneStagingPreviews } from '../scripts/prune-staging-previews.mjs';

const tempDirs = [];

after(() => {
  for (const tempDir of tempDirs) {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
});

function makeTempPublishDir() {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'staging-preview-prune-'));
  tempDirs.push(tempDir);
  return tempDir;
}

function writeJson(filePath, value) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

test('removes closed preview metadata and directories while keeping open previews', async () => {
  const publishDir = makeTempPublishDir();
  const stagingDir = path.join(publishDir, 'staging');

  writeJson(path.join(stagingDir, '_preview-data', 'pr-10.json'), {
    prNumber: 10,
    branchName: 'feature/closed-preview',
    previewPathSegment: 'pr-10',
  });
  writeJson(path.join(stagingDir, '_preview-data', 'pr-11.json'), {
    prNumber: 11,
    branchName: 'feature/open-preview',
    previewPathSegment: 'pr-11',
  });

  fs.mkdirSync(path.join(stagingDir, 'pr-10'), { recursive: true });
  fs.mkdirSync(path.join(stagingDir, 'pr-11'), { recursive: true });
  fs.mkdirSync(path.join(stagingDir, 'pr-12'), { recursive: true });

  const seenRequests = [];
  const removedPreviewSegments = await pruneStagingPreviews({
    publishDir,
    repository: 'ben/example',
    token: 'test-token',
    fetchImpl: async (url, options) => {
      seenRequests.push({ url, options });

      const prNumber = Number(url.split('/').at(-1));
      const state = prNumber === 11 ? 'open' : 'closed';

      return {
        ok: true,
        status: 200,
        async json() {
          return { state };
        },
      };
    },
  });

  assert.deepEqual(removedPreviewSegments, ['pr-10', 'pr-12']);
  assert.equal(fs.existsSync(path.join(stagingDir, '_preview-data', 'pr-10.json')), false);
  assert.equal(fs.existsSync(path.join(stagingDir, '_preview-data', 'pr-11.json')), true);
  assert.equal(fs.existsSync(path.join(stagingDir, 'pr-10')), false);
  assert.equal(fs.existsSync(path.join(stagingDir, 'pr-11')), true);
  assert.equal(fs.existsSync(path.join(stagingDir, 'pr-12')), false);
  assert.deepEqual(
    seenRequests.map(({ url }) => url).sort(),
    [
      'https://api.github.com/repos/ben/example/pulls/10',
      'https://api.github.com/repos/ben/example/pulls/11',
      'https://api.github.com/repos/ben/example/pulls/12',
    ],
  );
  assert.equal(seenRequests[0].options.headers.Authorization, 'Bearer test-token');
});
