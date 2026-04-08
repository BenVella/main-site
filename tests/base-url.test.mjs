import assert from 'node:assert/strict';
import { readFileSync, readdirSync, rmSync } from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { before, describe, test } from 'node:test';

const repoRoot = path.resolve(import.meta.dirname, '..');
const distDir = path.join(repoRoot, 'dist');

function readBuiltFile(...segments) {
  return readFileSync(path.join(distDir, ...segments), 'utf8');
}

function collectHtmlFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      return collectHtmlFiles(fullPath);
    }

    return entry.name.endsWith('.html') ? [fullPath] : [];
  });
}

before(() => {
  rmSync(distDir, { recursive: true, force: true });

  const result = spawnSync('npm', ['run', 'build'], {
    cwd: repoRoot,
    encoding: 'utf8',
    env: {
      ...process.env,
      SITE_BASE_PATH: '/preview',
    },
  });

  assert.equal(
    result.status,
    0,
    `Expected preview-base build to succeed.\nSTDOUT:\n${result.stdout}\nSTDERR:\n${result.stderr}`,
  );
});

describe('BASE_URL build output', () => {
  test('prefixes homepage title thumbnails and project artwork with the configured base path', () => {
    const homepage = readBuiltFile('index.html');
    const projectsIndex = readBuiltFile('projects', 'index.html');
    const projectDetail = readBuiltFile('projects', 'cloud-save-platform-go-aws', 'index.html');

    assert.match(homepage, /src="\/preview\/images\/projects\/Hero_Banner_Lemmings-1920x1080-1\.jpg"/);
    assert.match(homepage, /data-title-id="lemmings"/);

    assert.match(projectsIndex, /href="\/preview\/projects\/cloud-save-platform-go-aws"/);
    assert.match(projectsIndex, /src="\/preview\/images\/projects\/cloud-save-platform\.svg"/);

    assert.match(projectDetail, /src="\/preview\/images\/projects\/cloud-save-platform\.svg"/);
  });

  test('prefixes shared layout assets and navigation with the configured base path', () => {
    const homepage = readBuiltFile('index.html');

    assert.match(homepage, /href="\/preview\/assets\/favicon\.svg"/);
    assert.match(homepage, /content="https:\/\/www\.bennetvella\.com\/preview\/og-image\.svg"/);
    assert.match(homepage, /href="\/preview\/about"/);
    assert.match(homepage, /href="\/preview\/blog"/);
    assert.match(homepage, /href="\/preview\/contact"/);
  });

  test('does not emit missing-slash BASE_URL joins in generated HTML', () => {
    const htmlFiles = collectHtmlFiles(distDir);
    const brokenJoinPattern = /\/preview(?:about|assets|blog|contact|images|og-image|projects)\b/;

    htmlFiles.forEach((filePath) => {
      const html = readFileSync(filePath, 'utf8');

      assert.doesNotMatch(html, brokenJoinPattern, `Found broken BASE_URL join in ${path.relative(repoRoot, filePath)}`);
    });
  });
});
