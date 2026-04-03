#!/usr/bin/env node

import { randomUUID } from 'node:crypto';
import { appendFileSync, readFileSync } from 'node:fs';

const RELEASE_TAG_PREFIX = process.env.RELEASE_TAG_PREFIX ?? 'rel';
const RELEASE_ID_LENGTH = Number.parseInt(process.env.RELEASE_ID_LENGTH ?? '8', 10);
const RELEASE_DATE = process.env.RELEASE_DATE ?? new Date().toISOString().slice(0, 10).replaceAll('-', '');

const packageJson = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
const siteVersion = process.env.SITE_VERSION ?? packageJson.version;

const releaseId = randomUUID().replaceAll('-', '').slice(0, Math.max(4, RELEASE_ID_LENGTH));
const releaseTag = `${RELEASE_TAG_PREFIX}/${RELEASE_DATE}-${releaseId}`;
const buildTimestamp = new Date().toISOString();

const output = [
  `site_version=${siteVersion}`,
  `release_tag=${releaseTag}`,
  `build_timestamp=${buildTimestamp}`,
  `release_tag_prefix=${RELEASE_TAG_PREFIX}`,
  `release_id_length=${Math.max(4, RELEASE_ID_LENGTH)}`,
  `release_date=${RELEASE_DATE}`,
].join('\n');

if (process.env.GITHUB_OUTPUT) {
  appendFileSync(process.env.GITHUB_OUTPUT, `${output}\n`, 'utf8');
} else {
  process.stdout.write(`${output}\n`);
}
