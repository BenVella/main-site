# Staging Subpath Deployment Implementation

## Objective

Review the current Astro and GitHub Pages deployment setup and identify a safe way to preview changes before they reach the live custom-domain site, using a `/staging/` subpath on the same GitHub Pages site.

## Current State

- The site is a static Astro build with `output: 'static'` in `astro.config.mjs`.
- The production site is hard-coded as `https://www.bennetvella.com` in `astro.config.mjs`.
- The build already supports a configurable base path through `SITE_BASE_PATH`, which is relevant if previews are hosted under a subpath instead of a separate domain.
- The current GitHub Actions workflow in `.github/workflows/deploy.yml` deploys on every push to `main`.
- The workflow publishes directly to the `github-pages` environment and does not define any preview or staging environment.
- `public/CNAME` indicates the repository is preserving a custom domain for the live site, so any preview solution should avoid interfering with that production mapping.
- Existing project wiki notes describe only a single production deployment path.
- The layout and route components already rely on `import.meta.env.BASE_URL` for most internal links and assets, which means a `/staging/` build is structurally compatible with the existing site.
- `src/layouts/BaseLayout.astro` builds canonical and social URLs from `siteConfig.siteUrl`, which is currently fixed to the production domain and would be incorrect for staging output unless made environment-aware.
- `public/robots.txt` hard-codes the production sitemap URL, so copying it unchanged into staging would advertise the production sitemap from the preview path.
- A single GitHub Pages site can serve content at both `/` and `/staging/` if the published artifact contains both sets of built files.

## Target State

- The live site stays at `https://www.bennetvella.com/` and is updated only from `main`.
- A staging version is available at `https://www.bennetvella.com/staging/` and is updated only from `develop`.
- Production and staging files coexist in the published Pages output without overwriting each other.
- Pull requests are validated with build checks before merge.
- Staging metadata avoids presenting itself as the canonical production site.

## Recommended Approach

- Keep one GitHub Pages site and use path-based environments rather than separate Pages sites.
- Build production with `SITE_BASE_PATH=/` and publish to the artifact root.
- Build staging with `SITE_BASE_PATH=/staging/` and publish into a `staging/` folder in the artifact.
- Add a pull request workflow that runs `npm install`, `astro check`, and `npm run build` without deploying.
- Make site metadata environment-aware so staging can emit `/staging/` canonicals and optionally `noindex`.

## Why This Approach

- It matches GitHub Pages’ one-site-per-repository constraint.
- It keeps the current hosting model and custom domain intact.
- It gives you a stable public preview path before promoting changes to the root site.
- It avoids introducing another host or another repository just for staging.

## Files Likely To Change

- `.github/workflows/deploy.yml`
- `.github/workflows/preview.yml`
- `astro.config.mjs`
- `src/site.config.ts`
- `src/layouts/BaseLayout.astro`
- `public/robots.txt`
- `docs/wiki/site-overview.md`

## Workflow Design

1. Production deploy:
   - Trigger on push to `main`.
   - Build the site with `SITE_BASE_PATH=/`.
   - Publish the built files to the root of the Pages artifact.
2. Staging deploy:
   - Trigger on push to `develop`.
   - Build the site with `SITE_BASE_PATH=/staging/`.
   - Publish the built files into a `staging/` folder while preserving the current production root files.
3. PR validation:
   - Trigger on `pull_request`.
   - Run `astro check` and a production-style build.
   - Do not deploy.

## Metadata And SEO Plan

- Replace the fixed production site URL with environment-aware configuration for production and staging builds.
- Generate canonical and Open Graph URLs from the active site URL and base path rather than a single hard-coded production constant.
- Decide whether staging should include:
  - a `noindex` robots meta tag, and
  - a staging-specific `robots.txt` behavior or omission of sitemap references from the staging output.
- Preserve the production `public/CNAME` behavior for the root site only.

## Current Repo Considerations

- Astro `base` can already be set with `SITE_BASE_PATH`, so production can build with `/` and staging can build with `/staging/`.
- The repo currently has only a single deployment workflow, so publishing both root and `staging/` paths will require either:
  - a workflow that preserves existing root files when updating `staging/`, or
  - separate artifact assembly before a single Pages deploy.
- Because the production site uses a custom domain through `public/CNAME`, the staging preview would be publicly visible at `https://www.bennetvella.com/staging/` rather than at a separate subdomain.
- If SEO isolation matters, staging should likely emit `noindex` and avoid production canonicals.

## Risks Or Assumptions

- GitHub Pages still serves only one Pages site per repository, so staging under `/staging/` is a second path on the same public site, not a private or separate environment.
- Production and staging artifacts must coexist without overwriting each other, which makes workflow design more delicate than the current single-build deploy.
- If staging content shares the production domain, search engines may crawl it unless metadata and robots handling are adjusted deliberately.
- If `develop` is allowed to diverge too far from `main`, staging deployment logic may need to preserve compatibility with the current production artifact format.

## Validation Approach

- Confirm `main` deploys update only the root site and do not remove `/staging/`.
- Confirm `develop` deploys update only `/staging/` and do not affect the root site.
- Confirm `import.meta.env.BASE_URL` paths work correctly in both `/` and `/staging/` builds.
- Confirm canonical, Open Graph, and sitemap-related outputs no longer point staging pages at the live root by mistake.
- Confirm pull requests run validation checks without publishing.

## Implementation Outline

1. Split deployment logic so root and `/staging/` builds can coexist in the published artifact.
2. Add environment-aware site metadata for production and staging.
3. Add PR validation workflow and document the new promotion model.
4. Validate both branch flows as far as the local environment allows.

## Implementation Progress

- Moved the task record from `docs/plan/` to `docs/impl/`.
- Reworked deployment around a shared `gh-pages` branch:
  - `main` deploys the root site
  - `develop` deploys into `staging/`
- Added a pull request validation workflow for `npm run check` plus both production and staging builds.
- Updated layout metadata to use `Astro.site` and emit `noindex, nofollow` on staging builds.
- Updated project wiki notes with the new deployment model and the required GitHub Pages branch setting.

## Validation Notes

- Local validation could not be completed in this environment because `node` and `npm` are not installed.
- CI is expected to validate the workflow behavior once pushed to GitHub.
