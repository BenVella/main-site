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
