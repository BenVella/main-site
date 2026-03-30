# Agent Workflow Contract

This repository hosts a static Astro portfolio and blog for `www.bennetvella.com`.

Agents working in this repository must follow a strict three-phase workflow with explicit user confirmation between phases.
If the user explicitly requests direct implementation, agents may bypass scan and plan and proceed straight to implementation.

## Phase 1: Scan

- Read this `AGENTS.md` first.
- Read the relevant files for the requested task before proposing changes.
- Identify the affected areas of the Astro site, including:
  - `src/pages/`
  - `src/layouts/`
  - `src/components/`
  - `src/features/`
  - `public/`
  - `.github/workflows/`
  - `docs/plan/`
  - `docs/impl/`
  - `docs/done/`
  - `docs/wiki/`
- If supporting documentation does not exist yet for the task, create it in `docs/plan/` during or immediately after the scan.
- Do not implement changes during the scan phase.
- At the end of scan, report findings and stop for explicit user approval before moving to planning.

## Phase 2: Plan

- Create or update a task-specific plan document in `docs/plan/`.
- The plan must be concrete, scoped, and human-readable.
- Include:
  - objective
  - current state
  - target state
  - files likely to change
  - risks or assumptions
  - validation approach
- Do not implement changes during the plan phase.
- At the end of planning, present the plan summary and stop for explicit user approval before moving to implementation.

## Phase 3: Implementation

- When implementation begins, move the task document from `docs/plan/` to `docs/impl/` and update it with implementation progress.
- When implementation is completed, move the task document from `docs/impl/` to `docs/done/` so completed work is clearly separated from active implementation records.
- Make the agreed changes only after the user approves the plan, unless the user explicitly requested direct implementation.
- Keep implementation notes concise and relevant.
- Update `docs/wiki/` only for durable project knowledge, not temporary task chatter.
- Validate the result as far as the environment allows.
- Summarize outcomes, limitations, and follow-up items at the end.
- Include a suggested git commit message after each implementation summary, but do not create a commit unless explicitly asked.

## Repository Context

- This is a static Astro site. Keep it GitHub Pages friendly.
- Do not add SSR, Astro adapters requiring server hosting, API routes, serverless handlers, databases, or backend runtime dependencies.
- Keep routes and assets compatible with `import.meta.env.BASE_URL`.
- Preserve custom domain support through `public/CNAME`.
- Prefer simple, maintainable content and architecture over feature expansion.
- The portfolio content should stay professional, concise, and easy to update.

## Documentation Rules

- `docs/plan/` contains proposed work that has not started implementation.
- `docs/impl/` contains active implementation records.
- `docs/done/` contains completed implementation records.
- `docs/wiki/` contains stable reference material about the site.
- All docs in those folders must be Markdown and human-readable.
- Keep documentation current when making meaningful structural changes.
