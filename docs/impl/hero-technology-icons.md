# Hero Technology Icons

Official SVGs for the hero technology strip now live in:

`public/assets/technology-icons/official/`

Current staged official candidates:

- `unity.svg`
- `perforce.svg`
- `git.svg`
- `docker.svg`
- `dotnet.svg`
- `go.svg`
- `windmill.svg`
- `csharp.svg`
- `steam.png` (active for Steam badge)

Current gaps or review-only cases:

- `java.svg` now uses an open-source, Java-brand-style cup/glyph treatment for the badge with a trademark disclaimer shown in the skills dialog and footer.
- `mulesoft.svg` now uses an open-source MuleSoft-style mark treatment for the badge with a trademark disclaimer shown in the skills dialog and footer.

Implementation notes:

- The hero strip keeps rendering the current letter badges until an `iconFile` value is set on the matching entry in `src/features/home/content.ts`.
- The component already resolves icon files through `technologyIconDirectory`, so the public path stays compatible with `import.meta.env.BASE_URL`.
- Keep the SVGs static and self-contained. Do not rely on scripts, external stylesheets, or remote assets.
- Review candidates are visible at `src/pages/hero-icon-review.astro` before any homepage swap is made.
