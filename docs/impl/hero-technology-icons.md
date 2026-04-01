# Hero Technology Icons

Official SVGs for the hero technology strip now live in:

`public/assets/technology-icons/official/`

Current staged official candidates:

- `git.svg`
- `docker.svg`
- `dotnet.svg`
- `windmill.svg`
- `csharp.svg`
- `steam.png`

Current gaps or review-only cases:

- `unity.svg` is intentionally not staged yet because Unity's current trademark guidance is restrictive for portfolio-style logo use.
- `perforce.svg` is not staged yet.
- `go.svg` is not staged yet.
- `java.svg` is not staged yet.
- `mulesoft.svg` is not staged because a clean current official SVG source did not surface in this pass.

Implementation notes:

- The hero strip keeps rendering the current letter badges until an `iconFile` value is set on the matching entry in `src/features/home/content.ts`.
- The component already resolves icon files through `technologyIconDirectory`, so the public path stays compatible with `import.meta.env.BASE_URL`.
- Keep the SVGs static and self-contained. Do not rely on scripts, external stylesheets, or remote assets.
- Review candidates are visible at `src/pages/hero-icon-review.astro` before any homepage swap is made.
