# Migration Backlog

Tasks for continuing the Gatsby → Astro migration. Pick any item; they're scoped to be independently shippable. Read `CLAUDE.md` first for repo context.

The overall direction: incremental migration, not a wholesale rewrite. Chrome moves to `.astro`, interactive bits stay as React islands, the `gatsby-shim` layer eventually gets deleted.

## Status snapshot

| Phase | Status |
|---|---|
| 5 — Image pipeline | Started: `src/lib/image-resolver.ts` exists, `RelatedPosts.astro` and `404.astro` migrated. Rest pending. |
| 1 — `PagesReact/*` audit | Done — see `01-audit-results.md` |
| 2 — Static page conversion | Done — 16 of 17 PagesReact converted; only `resume/prakash` remains (interactive) |
| 3 — Move chrome out of `src/theme/` | Pending |
| 4 — Delete `gatsby-shim` | Blocked on 3 |
| 6 — Port `getSchemaOrgJSONLD` | Done |
| 7 — Sitemap + `robots.txt` | Done |
| 8 — Auth0 routes | Pending decision (likely drop) |
| 9 — Misc follow-ups | Pending |
| 10 — Remove Gatsby GraphQL usage | Mostly done; remainder blocked on 3.4 |

Backlog files:

- [`01-pages-react-audit.md`](01-pages-react-audit.md)
- [`02-convert-static-pages.md`](02-convert-static-pages.md)
- [`03-move-chrome-out-of-theme.md`](03-move-chrome-out-of-theme.md)
- [`04-delete-gatsby-shim.md`](04-delete-gatsby-shim.md)
- [`05-image-migration-remaining.md`](05-image-migration-remaining.md)
- [`06-seo-jsonld.md`](06-seo-jsonld.md)
- [`07-sitemap-robots.md`](07-sitemap-robots.md)
- [`08-auth-routes.md`](08-auth-routes.md)
- [`09-misc.md`](09-misc.md)
- [`10-graphql-removal.md`](10-graphql-removal.md)

## Already done (don't redo)

- Props-driven data flow for `BlogSection`, `BlogList`, `BlogIndexHeader`/`BlogIndexSliderSection`, `BlogMegaMenu` (via `TopMenu`). They no longer rely on the shim's empty `useStaticQuery`.
- Live blog post route uses `src/components/BlogPost/RelatedPosts.astro`. Legacy `templates/blog-post.jsx` and `RelatedPostsSection.jsx` are no longer referenced (see 9.3 to delete).
- Image resolver (`src/lib/image-resolver.ts`) + first two `.astro` consumers migrated to `<Image />` / `<Picture />`.
- Stale templates purged (`src/templates/` removed entirely, `src/theme/templates/blog-*` removed, `GraphqlFragments/`, `RelatedPostsSection.jsx`).
- PagesReact + CV components no longer import from `'gatsby'` for graphql/StaticQuery (Phase 10 partial).
- `@astrojs/sitemap` enabled (`astro.config.mjs`); `dist/sitemap-index.xml` + `dist/sitemap-0.xml` generated; `public/robots.txt` points to it.
- `Organization` + `WebSite` + `BreadcrumbList` JSON-LD emitted from `BaseLayout.astro` via `src/lib/jsonld.ts`. Blog post route still emits `BlogPosting` inline (composes correctly with the layout payload).
- Domain renamed `truemark.dev` → `truemark.com.np` across config, site metadata, content links, social-share URLs, robots.txt, JSON-LD. (`handbook.truemark.dev` left intact — separate subdomain.)
- Phase 1 audit done: `01-audit-results.md` classifies all 17 `PagesReact` files. 16/17 are static-safe; only `resume/prakash` has runtime state (fetch + loader).
- Phase 2 done: 16 page shells converted from `client:only="react"` to `.astro`. Resume profile data moved into `src/data/resume/*.js`. Children mount as per-section React islands inside each `.astro` page (still `client:only="react"` — see follow-up below). `src/components/PagesReact/` now contains only `resume/prakash/index.jsx`. `pnpm build` green, 130 pages.

## Known follow-up: SSR-promote per-island components

After Phase 2, each section (HeroSection, Faq, TestimonialSection, etc.) is mounted as `client:only="react"`. They could SSR (drop the directive entirely or use `client:visible`) but at least one component throws "Element type is invalid: ... but got: object" during SSR — likely a deep dependency that touches `window`/`document` at module scope or has a default-vs-named export mismatch. Bisecting which component is failing would unlock zero-JS rendering for genuinely static sections (most marketing copy components). Worth a focused half-day. Not blocking anything.
