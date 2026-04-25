# Phase 1 — Audit `src/components/PagesReact/*`

## Goal

Produce a checklist of every page under `src/components/PagesReact/` (currently: `case-studies/`, `hire/`, `resume/`, `services/`, `technologies/`) classified as:

- **Static-safe** — no `useState`/`useEffect`, no event handlers, no browser APIs. Candidate for full conversion to `.astro`.
- **Interactive** — has forms, modals, dropdowns, scroll listeners, etc. Stays as a React island; switch the mount from `client:only="react"` to `client:visible` or `client:idle` if SSR-safe.
- **Mixed** — most of the page is static markup with one or two interactive bits. Split: outer shell becomes `.astro`, the interactive part stays as a small island.

## Why

Marketing pages currently mount the original `.jsx` page body as `client:only="react"`. They ship the entire React runtime and component tree to the browser for pages that are mostly static content. Converting them to `.astro` strips ~40-100KB of JS per page. See CLAUDE.md "Pages and islands" for context.

## How

For each page in `src/components/PagesReact/**/*.jsx`:

1. Read the file.
2. Look for: `useState`, `useEffect`, `useRef`, `onClick`/`onChange`/`onSubmit`, `window.`, `document.`, `localStorage`, `IntersectionObserver`, imports from `react-hook-form` / form libraries / animation libraries.
3. Classify and note which features land where.
4. Cross-reference with the corresponding Astro page in `src/pages/` to confirm how it's mounted.

## Output

A markdown table in this directory: `01-audit-results.md`. Columns: page path, classification, interactive features (if any), conversion notes.

## Done when

- Every `.jsx` file under `src/components/PagesReact/` is classified.
- The output file is committed.

## Not in scope

Actually converting any page — that's Phase 2.
