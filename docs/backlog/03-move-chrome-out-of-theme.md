# Phase 3 — Move chrome out of `src/theme/`

## Goal

Stop using the vendored `src/theme/` (former `@truemark/gatsby-theme-effortless-blog` package) for site chrome. Reimplement header, footer, SEO, and blog list components as `.astro` files under `src/layouts/` and `src/components/`. Keep small interactive bits as React islands where genuinely needed.

## Why

`src/theme/` is a React tree wired up via the `gatsby-shim`. It depends on `useStaticQuery` returning empties (CLAUDE.md note), forcing every consumer to pass data via props anyway. It's ~40% of the JS shipped to the browser for chrome alone. Once chrome is gone, Phase 4 (delete the shim) becomes possible.

## Subtasks

### 3.1 Site header / nav

- Create `src/layouts/partials/SiteHeader.astro`.
- Port markup from the theme's header component(s) — find via `grep -rn "Header\|Nav" src/theme/`.
- For the mega-menu: if it has hover/keyboard interactivity, extract that into a small React (or Svelte/vanilla) island, e.g. `src/components/Header/MegaMenu.tsx`, mounted with `client:visible`.
- Wire `<SiteHeader />` into `src/layouts/BaseLayout.astro`. Remove whatever theme import is currently rendering the header.

### 3.2 Site footer

- Create `src/layouts/partials/SiteFooter.astro`.
- Port markup. Footers are usually pure content — no island needed.
- Wire into `BaseLayout.astro`.

### 3.3 SEO / meta

- `BaseLayout.astro` already handles `<title>`, `description`, `og:*`, `twitter:*` per CLAUDE.md. Verify nothing in `src/theme/` still injects head content via `react-helmet` or similar — `grep -rn "Helmet\|<head" src/theme/`.
- If anything does, port it into `BaseLayout.astro` and delete from theme.

### 3.4 Blog list / index components

These currently use `useStaticQuery` (which returns empties via the shim) and need data passed in as props. The pattern is already established by `src/components/BlogPost/RelatedPosts.astro`.

Components to replace:
- `BlogIndexHeader` (used in `src/pages/blog/index.astro` as `client:only="react"`)
- `BlogList` (used in `src/pages/blog/index.astro`)
- Blog tiles inside the mega-menu (if any)
- Search list / search box
- Related posts — already done

For each:
1. Find current usage: `grep -rn "<BlogIndexHeader\|<BlogList" src/`.
2. Create `.astro` equivalent under `src/components/Blog/`.
3. Take blog data as props; the calling page already does `getCollection('blog')` and passes via `getAllBlogsForSection()` (`src/lib/blog-data.ts`).
4. Use `<Image />` + `resolveImage()` for thumbnails — pattern in `RelatedPosts.astro`.
5. Update the page to render the new `.astro` component instead of the React island.

### 3.5 Misc theme components

After 3.1-3.4, run `grep -rln "from.*theme\|@truemark/gatsby-theme" src/` and convert remaining consumers one by one.

## Done when

- `BaseLayout.astro` renders header + footer without importing from `src/theme/`.
- Blog index, blog post, and any other content-driven pages render lists/cards via `.astro` components, not React islands.
- The only React islands left are genuinely stateful (forms, Disqus, search, mega-menu interactive bit).
- `pnpm build` is green; visual diff vs. the current site shows no regressions.

## Not in scope

- Deleting `src/theme/` itself or the shim — that's Phase 4.
