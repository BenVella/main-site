#!/usr/bin/env sh
set -eu

# Serve the Astro site locally on the loopback interface.
npm run dev -- --host 127.0.0.1
