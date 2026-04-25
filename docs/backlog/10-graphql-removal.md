# Phase 10 — Remove all Gatsby GraphQL usage

## Goal

Eliminate every `useStaticQuery`, `StaticQuery`, and `graphql\`...\`` call site so `src/lib/gatsby-shim.tsx` can drop those exports (final step of Phase 4).

## Status

**Done so far** (one half-day session):
- Stale templates purged: `src/templates/` directory removed entirely (`blog-post.jsx`, `job.jsx`, `case-study.jsx`, `project.jsx` — the last was an empty file). Aliases dropped from `astro.config.mjs` + `tsconfig.json`.
- Stale theme templates removed: `src/theme/templates/blog-post.jsx`, `src/theme/templates/blog-list.tsx`.
- `src/components/GraphqlFragments/FragmentList.jsx` and the now-empty directory deleted.
- `src/components/Blog/Section/RelatedPostsSection.jsx` deleted (replaced by `RelatedPosts.astro`).
- PagesReact graphql exports stripped: `services/digital-marketing.jsx` and `hire/resources.jsx` no longer import from `'gatsby'` — the `data` prop was already being fed correctly from the Astro page frontmatter, so the `pageQuery` exports were dead code.
- CV components (`Template.jsx`, `FetchedDataTemplete.jsx`, `section/otherExp.jsx`) — gatsby imports were entirely unused; removed. `<Link to="">` in `otherExp.jsx` switched to `<a href="#">`.
- `pnpm build` green, 130 pages.

**Remaining** (blocked on other phases — see below).

## Context

The `graphql` template tag is **already a no-op** — the literal is preserved as a string but never executed. So removing it is mechanical. The real work is replacing `useStaticQuery` callers with prop-fed data. The pattern is established by the already-migrated components (`BlogSection`, `BlogList`, `BlogIndexHeader`, `BlogMegaMenu` via `TopMenu`): the Astro page fetches data in frontmatter, passes it as a prop, the React component reads from props instead of calling `useStaticQuery`.

## Inventory (snapshot — re-verify with `git grep` before starting)

### Stale templates — delete outright after verifying zero callers

```bash
git grep "templates/blog-post\|templates/job\|templates/case-study\|theme/templates/blog\|GraphqlFragments/FragmentList"
```

If only the files themselves match, delete:

- `src/templates/blog-post.jsx`
- `src/templates/job.jsx`
- `src/templates/case-study.jsx`
- `src/theme/templates/blog-post.jsx`
- `src/theme/templates/blog-list.tsx`
- `src/components/GraphqlFragments/FragmentList.jsx`
- `src/components/Blog/Section/RelatedPostsSection.jsx` (replaced by `src/components/BlogPost/RelatedPosts.astro`)

### Blog consumers — handled by Phase 3.4 (REMAINING)

Don't refactor these in place. Phase 3.4 rewrites them as `.astro`, which deletes the GraphQL usage as a side effect:

- `src/components/Blog/Section/BlogSection.jsx`
- `src/components/Blog/SearchList/BlogSearchList.jsx` (the one exception that genuinely needs to stay React — interactive filter state — but it should take initial blog data via props)
- `src/components/Menu/Blog/BlogNav.jsx`
- `src/components/Menu/Header/BlogMegaMenu.jsx`
- `src/theme/components/Blog/BlogNav.tsx`

### PagesReact consumers — handled by Phase 2

- `src/components/PagesReact/services/digital-marketing.jsx`
- `src/components/PagesReact/hire/resources.jsx`

Convert pages to `.astro` per Phase 2; the GraphQL call goes away.

### CV/Resume — net-new work

Three files, no current Phase covers them:

- `src/components/CV/Template.jsx`
- `src/components/CV/FetchedDataTemplete.jsx`
- `src/components/CV/section/otherExp.jsx`

Steps:

1. Inspect what each `useStaticQuery` returns. Likely a YAML file under `src/content/` or a hard-coded data import.
2. In `src/pages/resume/*.astro`, load the equivalent (`getEntry('authors', id)` or `import data from '../../content/cv/foo.yml'`).
3. Pass as a prop to the React island.
4. Refactor the component: replace `const data = useStaticQuery(...)` with destructured props. Delete the `graphql` literal.

Alternative: convert the resume pages to `.astro` entirely as part of Phase 2 — this is probably cheaper than refactoring the React side.

### Theme helper — handled by Phase 3

- `src/theme/utils/pluginData.ts` (the helper that wraps `useStaticQuery`)

Goes away when `src/theme/` is removed.

## Final cleanup

Once `git grep useStaticQuery` returns only `src/lib/gatsby-shim.tsx` itself:

1. Remove `useStaticQuery`, `StaticQuery`, and the `graphql` export from `src/lib/gatsby-shim.tsx`.
2. Run `pnpm build` — confirm no consumer broke.
3. This is the same commit as the rest of Phase 4.

## Effort estimate

- Stale-template purge: ~2 hours.
- CV refactor (or `.astro` rewrite): ~3-4 hours.
- PagesReact two pages: ~1 hour (folded into Phase 2).
- Blog consumers: no extra effort beyond Phase 3.4.
- Final shim cleanup: ~30 min.

**Total net-new outside other phases: ~half a day.**

## Done when

- `git grep "useStaticQuery\|StaticQuery"` returns zero hits in `src/`.
- `git grep "graphql\\\`"` returns zero hits in `src/`.
- The shim no longer exports those symbols.
- `pnpm build` is green.
