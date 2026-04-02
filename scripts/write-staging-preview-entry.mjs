import fs from 'node:fs';
import path from 'node:path';

const publishDir = path.resolve(process.argv[2] || process.cwd());
const prNumber = Number(process.env.PR_NUMBER);
const branchName = process.env.PR_BRANCH_NAME || '';
const title = process.env.PR_TITLE || '';

if (!Number.isFinite(prNumber)) {
  throw new Error('PR_NUMBER must be set to a numeric pull request number.');
}

if (!branchName) {
  throw new Error('PR_BRANCH_NAME must be set to the source branch name.');
}

const previewPathSegment = `pr-${prNumber}`;
const previewDataDir = path.join(publishDir, 'staging', '_preview-data');
const previewEntryPath = path.join(previewDataDir, `${previewPathSegment}.json`);

fs.mkdirSync(previewDataDir, { recursive: true });
fs.writeFileSync(
  previewEntryPath,
  `${JSON.stringify(
    {
      prNumber,
      branchName,
      title,
      previewPathSegment,
      updatedAt: new Date().toISOString(),
    },
    null,
    2,
  )}\n`,
);
