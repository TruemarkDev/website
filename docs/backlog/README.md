# Migration Backlog

Tasks for continuing the Gatsby → Astro migration. Pick any item; they're scoped to be independently shippable. Read `CLAUDE.md` first for repo context.

The overall direction: incremental migration, not a wholesale rewrite. Chrome moves to `.astro`, interactive bits stay as React islands, the `gatsby-shim` layer eventually gets deleted.

## Status snapshot

| Phase | Status |
|---|---|
| 5 — Image pipeline | Started: `src/lib/image-resolver.ts` exists, `RelatedPosts.astro` and `404.astro` migrated. Rest pending. |
| 1 — `PagesReact/*` audit | Pending |
| 2 — Static page conversion | Pending (blocked on 1) |
| 3 — Move chrome out of `src/theme/` | Pending |
| 4 — Delete `gatsby-shim` | Blocked on 3 |
| 6 — Port `getSchemaOrgJSONLD` | Pending |
| 7 — Sitemap + `robots.txt` | Pending |
| 8 — Auth0 routes | Pending decision (likely drop) |
| 9 — Misc follow-ups | Pending |
| 10 — Remove Gatsby GraphQL usage | Pending (overlaps with 2, 3, 4) |

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
