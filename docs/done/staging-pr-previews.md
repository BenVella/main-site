# Staging PR Previews

## Summary

Added manifest-driven pull request previews under `/staging/pr-<number>/` and a staging-only selector in the shared header.

## What Changed

- `develop` still publishes the shared staging site at `/staging/`
- same-repository pull requests now publish previews at `/staging/pr-<number>/`
- preview metadata is written into `staging/_preview-data/` on `gh-pages`
- `staging/previews.json` is rebuilt on every staging deploy, PR deploy, and PR cleanup
- the header fetches `previews.json` on staging pages and shows `branch-name · PR #<number>` options
- closed pull requests remove their preview folder immediately

## Operational Notes

- forked pull requests remain validation-only for safety
- the staging deploy preserves `pr-*` preview folders instead of deleting them
- the selector keeps the current relative route when switching between staging and a PR preview when the route exists in both builds
