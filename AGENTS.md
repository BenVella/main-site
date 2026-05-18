# Repository Agent Notes

This repository contains the Astro source for `www.bennetvella.com`.

## Repo Contents

- `src/`: pages, layouts, components, styles, and content-backed site features
- `public/`: static assets copied directly into the build
- `.github/workflows/`: deployment and validation workflows
- `docs/`: planning, implementation, completed task records, stable wiki notes, and the active `docs/todo.md` backlog

## Working Rules

- Keep the site GitHub Pages friendly and static-only.
- Preserve compatibility with `import.meta.env.BASE_URL`.
- Do not hardcode root-relative internal links or `public/` asset URLs like `/projects/...` or `/images/...` in Astro pages or components.
- Build internal routes and `public/` asset references from `import.meta.env.BASE_URL`.
- Store feature data for `public/` assets as base-agnostic relative fragments when practical, and prepend `import.meta.env.BASE_URL` at the render layer.
- Preserve the custom-domain setup through `public/CNAME`.
- Present a suggested commit message with each alteration summary.
- Run `npm run check` and relevant automated tests locally (for this repo, at minimum `npm test`) before finalizing agent-authored changes.
- Keep `docs/todo.md` up to date as changes land: remove, mark, or revise completed items in the same change set that concludes them.

## Git Rules

- Git read operations are allowed.
- Ask for permission before any Git write operation, including commit, push, pull, merge, rebase, checkout, reset, stash, tag, or branch deletion.
