# Migration Backlog

Tasks for continuing the Gatsby → Astro migration. Pick any item; they're scoped to be independently shippable. Read `CLAUDE.md` first for repo context.

The overall direction: incremental migration, not a wholesale rewrite. Chrome moves to `.astro`, interactive bits stay as React islands, and Gatsby compatibility shims stay deleted.

## Status snapshot

| Phase | Status |
|---|---|
| 5 — Image pipeline | Started: `src/lib/image-resolver.ts` exists, `RelatedPosts.astro` and `404.astro` migrated. Rest pending. |
| 1 — `PagesReact/*` audit | Done — see `01-audit-results.md` |
| 2 — Static page conversion | Done — 16 of 17 PagesReact converted; only `resume/prakash` remains (interactive) |
| 3 — Move chrome out of `src/theme/` | **Done.** 3.4 (blog components) + 3.1/3.2 (TopMenu.astro + Footer.astro) complete. FormCTASection stays React (interactive form). |
| 4 — Delete `gatsby-shim` | **Done.** `gatsby` imports, Vite alias, shim file, and `imageToShape` are removed. |
| 6 — Port `getSchemaOrgJSONLD` | Done |
| 7 — Sitemap + `robots.txt` | Done |
| 8 — Auth0 routes | Pending decision (likely drop) |
| 9 — Misc follow-ups | Pending |
| 10 — Remove Gatsby GraphQL usage | **Done.** Zero `graphql`, `useStaticQuery`, or `StaticQuery` usage. |
| 11 — View Transitions | **Done.** `<ClientRouter>` in BaseLayout; `transition:persist` on chrome; `fade` on `<main>`; hover prefetch; NProgress + theme wired to transition events. |

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

- Phase 3.4 done: `BlogSection`, `BlogList`, `BlogIndexHeader` rewritten as `.astro` consuming page-frontmatter data via `BlogCard.astro`. Used by `index.astro`, `services/digital-marketing.astro`, `hire/resources.astro`, `blog/index.astro`. Index page slider/subscribe pieces stay as React islands inside the `.astro` shell.
- Theme prune: `@truemark/gatsby-theme-effortless-blog` Vite alias deleted from `astro.config.mjs`. `src/theme/index.js` removed. Dead theme files deleted (`BlogList`, `BlogToc`, `Section/BlogSection`, `Section/Blogs`, `BlogIndexHeader/BlogIndexHeader`, `Blog/BlogSearchList`, `layout`, `utils/pluginData`, `utils/blogMetaData`). Theme tree down from 72 → 60 files.
- React-side dead code purge: `src/components/Blog/Section/BlogSection.jsx`, `Blog/Section/FeaturedDMBlogs.jsx`, `Blog/SearchList/`, `Menu/Blog/`, `Menu/Header/BlogMegaMenu.jsx` all deleted (zero callers after Phase 3.4 + shim-import switchover).
- Theme imports unified to direct paths: `BlogToc.jsx`, `JobPostBody.jsx`, `TopMenu.jsx` now import `ButtonWithModal`/`BlogMegaMenu` from `src/theme/components/...` directly instead of the package alias.

## View Transitions — maximising benefit

`<ClientRouter>` is live and hover prefetch is enabled. The transitions are smooth for the static `.astro` pages. To get the most out of them:

1. **Phase 3.1–3.3 (chrome rewrite) first** — `TopMenu.jsx`, `Footer.jsx`, `FormCTASection.jsx` are currently `client:only="react"` islands. During a transition the browser swaps the `<main>` content while the persisted chrome holds steady — but the chrome itself is still rendered entirely client-side, so there's a blank flash on first paint. Rewriting them as `.astro` (with small interactive sub-islands for the mobile menu toggle, theme switcher, form submit) eliminates that flash and lets the `transition:name` animations work properly.
2. **SSR-promote section islands** — each marketing-page section (HeroSection, Faq, TestimonialSection, etc.) is `client:only="react"`. Promoting to `client:visible` or no directive gives Astro HTML to paint during the swap instead of an empty slot. See bisect instructions below.

## SSR-promote: DONE

All section islands have been promoted from `client:only="react"` to `client:visible` (SSR + lazy hydrate on scroll). Three libraries caused SSR failures and their consuming components stay `client:only`:

| Component | Library | Pages |
|---|---|---|
| `TestimonialSection` | `react-slick` | index, technologies/*, services/digital-marketing |
| `ResultSection` | `react-slick` | case-studies/flexonet, trivia-day |
| `TraineeTestimonialSection` | `react-slick` | trainee |
| `ContactPageBody` | `react-phone-input-2` | contact |
| `FetchedDataTemplete` / `CVTemplate` | `react-slick` (via CV sections) | resume/* |

All other sections (hero, FAQ, stats, process, project planning, etc.) now SSR their HTML on first paint and hydrate lazily when scrolled into view.
