# Build Time Scan

## Objective

Review the current Astro site and GitHub Pages workflow for safe opportunities to reduce build time without increasing deployment risk.

## Scan Findings

- The site is already structurally small:
  - static Astro output
  - a small page set under `src/pages/`
  - project data stored locally in `src/features/projects/service.ts`
  - a small MDX blog collection loaded from local files
- The Astro config is simple:
  - `output: 'static'`
  - integrations limited to MDX and sitemap
  - Tailwind handled through the Vite plugin
- The GitHub Actions workflow is also simple, but has a few likely inefficiencies:
  - uses `npm install` instead of a lockfile-based install path
  - does not enable dependency caching in `actions/setup-node`
  - runs `actions/configure-pages@v5` before dependency installation, which is probably not a major cost but is not on the critical path for dependency restore
- No package manager lockfile is currently present in the repository, so deterministic and faster CI installs via `npm ci` are not available yet.
- Local build timing could not be measured in this environment because `node` and `npm` are not installed in the sandbox.

## Candidate Areas For Planning

- Introduce a committed `package-lock.json` and switch CI from `npm install` to `npm ci`.
- Enable npm dependency caching in `actions/setup-node`.
- Review step ordering in the workflow to keep dependency restore and build on the critical path.
- Confirm whether any Astro integration or page pattern creates avoidable duplicate collection reads, though current site scale suggests minimal gains there.
