# Implementation: Tailwind Rich Prose Build Fix

## Objective

Restore successful `npm run build` execution by replacing the invalid Tailwind v4 prose heading style usage without changing the intended typography for prose content.

## Current State

- The build fails while processing [`src/styles/global.css`](/Users/ben/projects/main-site/src/styles/global.css).
- `.rich-prose` uses `@apply prose-headings:display-face`.
- `display-face` is a custom CSS class, not a Tailwind utility, so Tailwind v4 rejects it.
- `.rich-prose` is consumed by the blog post template and the About page, so the failure blocks both local builds and GitHub Pages deployment.

## Target State

- The site builds successfully under the existing Astro and Tailwind v4 setup.
- Prose headings inside `.rich-prose` continue using the Fraunces display font or an equivalent intended heading style.
- The fix stays static-site compatible and does not expand scope beyond the styling/build issue.

## Files Changed

- `src/styles/global.css`
- `docs/impl/build-tailwind-rich-prose-fix.md`

## Risks Or Assumptions

- Tailwind v4 utility behavior is the root cause, not a dependency-install mismatch.
- Replacing the invalid `@apply` with direct CSS selectors is likely the lowest-risk fix.
- A styling-only fix could slightly change specificity or inheritance for prose headings, so rendered typography should be checked after the build passes.

## Validation Approach

- Update the prose heading styling to a Tailwind-compatible pattern.
- Run `npm run build`.
- Confirm the build completes without the `Cannot apply unknown utility class \`prose-headings:display-face\`` error.
- If the build passes, verify that `.rich-prose` pages still render with the intended heading font by inspecting the relevant templates and resulting CSS behavior.

## Implementation Notes

- Removed `prose-headings:display-face` from `.rich-prose` because Tailwind v4 cannot `@apply` a variant-wrapped custom CSS class.
- Added a direct `.rich-prose :is(h1, h2, h3, h4, h5, h6)` rule to preserve the Fraunces heading font without relying on an unsupported Tailwind utility composition.

## Validation Results

- Attempted local `npm run build`, but validation could not complete in this environment because neither `node` nor `npm` is installed in the shell.
- The code change removes the exact invalid Tailwind candidate that caused the CI failure: `prose-headings:display-face`.
- Follow-up validation still recommended in a Node-enabled environment or CI run.
