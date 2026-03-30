# Site Overview

## Purpose

This repository contains the static Astro source for `www.bennetvella.com`.

The site is intended to serve as a professional portfolio and blog, with:

- a portfolio-focused homepage
- project case study pages
- an MDX-backed blog
- static contact links

## Stack

- Astro
- Tailwind CSS v4
- MDX
- GitHub Pages via GitHub Actions

## Hosting Constraints

- Static output only
- No SSR
- No API routes
- No serverless or backend runtime requirements
- Custom domain preserved through `public/CNAME`

## Content Structure

- `src/pages/` defines routes
- `src/layouts/` contains the site shell
- `src/components/` contains shared UI pieces
- `src/features/projects/service.ts` contains typed project data
- `src/features/blog/content/` contains blog posts in Markdown or MDX
- `public/` contains static assets copied directly into the build

## Deployment

The GitHub Pages workflow is defined in `.github/workflows/deploy.yml`.

Pull request validation is defined in `.github/workflows/preview.yml`.

The build expects:

- Node.js 20 in CI
- `npm install`
- `npm run build`

The site is currently configured for the custom domain `https://www.bennetvella.com`.

Deployment behavior:

- `main` deploys the production site at `/`
- `develop` deploys a staging build at `/staging/`
- production and staging are published together on the `gh-pages` branch
- staging pages emit `noindex, nofollow` metadata to reduce accidental indexing

Build configuration:

- production uses `SITE_BASE_PATH=/`
- staging uses `SITE_BASE_PATH=/staging/`
- `SITE_URL` controls the base site URL used for generated metadata

Operational note:

- GitHub Pages should be configured to publish from the `gh-pages` branch at the repository root for this workflow to take effect.
