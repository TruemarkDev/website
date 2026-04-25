# Phase 7 — Re-enable sitemap and add `robots.txt`

## Goal

Make the site crawlable: emit a valid `sitemap-index.xml` + per-collection sitemaps, and serve a `robots.txt` that points at it.

## Current state

- `@astrojs/sitemap` is installed and wired in `astro.config.mjs` but **commented out / disabled** until routing stabilises (CLAUDE.md note).
- No `robots.txt` is generated. `public/robots.txt` does not exist.

## How

### 7.1 Re-enable sitemap

1. Uncomment / re-enable the `sitemap()` integration in `astro.config.mjs`.
2. Configure `site:` in `astro.config.mjs` to the canonical production URL (`https://www.truemark.dev`) — required for the sitemap to emit absolute URLs.
3. Use `filter` to exclude any draft routes (e.g., `/admin`, `/preview`, dev-only paths) if they exist.
4. Run `pnpm build` and inspect `dist/sitemap-index.xml` + child sitemaps. Verify all 130 routes are listed once with correct canonical URLs.

### 7.2 Add `robots.txt`

Create `public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://www.truemark.dev/sitemap-index.xml
```

Files in `public/` are served as-is, so this is a one-file change.

### 7.3 Verify

- `curl https://www.truemark.dev/robots.txt` after deploy → returns the file.
- `curl https://www.truemark.dev/sitemap-index.xml` → returns valid XML.
- Submit to Google Search Console.

## Done when

- `dist/sitemap-index.xml` exists after build.
- `public/robots.txt` exists and points at the sitemap.
- A representative URL from the sitemap loads (no 404s from stale entries).
