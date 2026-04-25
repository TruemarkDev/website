# Phase 4 — Delete the `gatsby-shim` layer

Blocked on: Phase 3 (chrome moved out of theme).

## Goal

Remove all migration scaffolding: `src/lib/gatsby-shim.tsx`, `imageToShape`, the `gatsby` Vite alias, the theme alias, and (if fully unused) `src/theme/`.

## Why

Pure migration tax. Every component that imports from `'gatsby'` is going through a fake module. Every legacy component that consumes images is going through a fake `childImageSharp` shape. Removing both simplifies the codebase and reduces the cognitive load for new contributors.

## Pre-flight checks

Run all of these and confirm zero results before touching anything:

```bash
git grep "from 'gatsby'"
git grep "gatsby-shim"
git grep "imageToShape"
git grep "@truemark/gatsby-theme-effortless-blog"
git grep "useStaticQuery\|StaticQuery"
git grep "from.*src/theme"
```

If any of these return hits, the consumer needs to be migrated first (typically via Phase 3).

## Steps

1. Delete `src/lib/gatsby-shim.tsx`.
2. Delete `imageToShape` from `src/lib/blog-data.ts`. Anywhere it was called, the caller should now pass `featuredImage` strings directly to `<Image />` via `resolveImage()` (or refactor the consumer to take `ImageMetadata` directly).
3. Edit `astro.config.mjs`:
   - Remove the `gatsby` Vite alias.
   - Remove the `@truemark/gatsby-theme-effortless-blog` alias.
   - Remove theme-internal aliases (`@components`, `@assets`, `@constants`, `@services`, `@utils`) if no remaining consumer uses them.
4. If `src/theme/` is fully unused (verify with `git grep "src/theme"`), delete the directory.
5. Update `tsconfig.json` to drop the corresponding path mappings.
6. Update `CLAUDE.md` to reflect the new state — specifically the "Shim layer" and "Vite aliases" sections.
7. `pnpm build` and `pnpm dev` — visual smoke test of homepage, a blog post, a job listing, a case study, and the contact form.

## Done when

- All grep checks above return zero.
- `pnpm build` produces 130 pages (or the current count) with no errors.
- CLAUDE.md no longer describes the shim as load-bearing.

## Risk notes

- This is the riskiest single phase because the blast radius covers everything that was historically Gatsby-shaped. Doing it in a feature branch with thorough manual QA is wise.
- If something breaks late and rollback is needed, `git revert` should be clean — there are no DB migrations or external state changes here.
