# Phase 6 — Port `getSchemaOrgJSONLD` rich-snippet payload

## Goal

Emit JSON-LD structured data on every page so Google can render rich snippets (logo, breadcrumbs, organization, blog posting). Currently `BaseLayout.astro` covers OG/Twitter cards but does not emit a Schema.org JSON-LD payload. The blog post route (`src/pages/blog/[...slug].astro`) already emits a `BlogPosting` schema inline — that pattern is the template.

## Why

The original Gatsby site had a `getSchemaOrgJSONLD` helper that emitted `Organization`, `WebSite`, `BreadcrumbList`, and per-page schema types. Removing it during migration regressed the search-result presentation (no sitelinks search box, no logo on SERP, no breadcrumbs).

## How

1. Find the original implementation. Check the source repo `truemark_blog` (or git history if it was vendored). Likely lives in `src/utils/seo.js` or similar.
2. Port to a TypeScript helper at `src/lib/jsonld.ts` exporting `siteJsonLd()`, `breadcrumbJsonLd(path)`, etc.
3. Inject into `BaseLayout.astro` `<head>` via `<script type="application/ld+json" set:html={JSON.stringify(payload)}></script>`. Use the same pattern as the blog post page.
4. Validate with [Google Rich Results Test](https://search.google.com/test/rich-results) on a few representative URLs.

## Done when

- Homepage emits `Organization` + `WebSite` JSON-LD.
- Inner pages emit `BreadcrumbList`.
- Blog posts continue emitting `BlogPosting` (already done).
- Rich Results Test passes for: homepage, a service page, a blog post, a case study.

## Not in scope

- `Product`/`Service` schemas for individual service pages — nice-to-have follow-up.
