# Bennet Vella Site

This repository now hosts a static Astro portfolio and blog intended for GitHub Pages.

## Stack

- Astro with static output
- Tailwind CSS v4
- MDX blog content
- GitHub Pages deployment via Actions

## Local commands

```bash
npm install
npm run dev
npm run build
```

## Deployment notes

- The custom domain is preserved through `public/CNAME`.
- The build is static only. There is no SSR adapter and no API runtime.
- `SITE_BASE_PATH` defaults to `/`. Change it in CI only if the site is ever deployed under a repository subpath instead of the current custom domain.
- Production deployments generate an annotated Git tag in the format `rel/YYYYMMDD-shortUuid` (for example, `rel/20260403-1a2b3c4d`).
- Site semantic versioning is sourced from `package.json` (`0.1.0` currently) and exposed at build time via `PUBLIC_SITE_VERSION`.
- Release tag format stays flexible through `RELEASE_TAG_PREFIX`, `RELEASE_ID_LENGTH`, `RELEASE_DATE`, and `SITE_VERSION` overrides in CI.
