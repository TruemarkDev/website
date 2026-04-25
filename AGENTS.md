# AGENTS.md

Startup guidance for Codex and other coding agents working in this repository.

## Read First

1. `CLAUDE.md` - canonical project guidance and migration rules.
2. `docs/backlog/README.md` - current Gatsby to Astro migration status.
3. `package.json` - scripts and dependency versions.
4. `astro.config.mjs` - Astro integrations, redirects, aliases, SCSS settings.
5. `src/content.config.ts` - content collection schemas and loader rules.

Before editing, run `git status --short` and preserve any existing user changes.

## Project Shape

This is `truemark_boot`, an Astro 6 / React 19 migration of the former Gatsby
`truemark_blog` site. The migration is incremental. Do not start broad rewrites
unless explicitly asked.

Core direction:

- New static components should be `.astro`.
- Keep React only for genuinely interactive islands such as forms, search,
  Disqus, and menu interactions.
- Do not add new code to `src/theme/`; it is legacy migration surface.
- Prefer moving chrome, SEO, and layout work into `BaseLayout.astro` and Astro
  partials.
- Gatsby compatibility shims have been removed. Do not import from `gatsby`.
- For new images, prefer `astro:assets` with `src/lib/image-resolver.ts`.

## Commands

Package manager: `pnpm`.

- `pnpm dev` or `pnpm start` - Astro dev server.
- `pnpm build` - static build.
- `pnpm preview` - preview built site.
- `pnpm format` - Prettier over `src/**/*.{js,jsx,ts,tsx,astro}`.
- `pnpm astro -- <cmd>` - pass-through to Astro CLI.

There is no configured test runner or lint script.

## Migration Notes

- Content lives under `src/content/`; schemas are in `src/content.config.ts`.
- Frontmatter uses `customSlug`, not `slug`.
- Blog and portfolio image data is passed as plain `/images/...` strings.
- Many older pages are now `.astro` shells with per-section React islands.
- Pass real data from Astro pages instead of relying on Gatsby GraphQL behavior.
- SCSS deprecation warnings are intentionally silenced. Do not spend time
  changing Bootstrap/SCSS import patterns unless asked.

## Current Backlog Focus

Use `docs/backlog/README.md` as source of truth. At the time this file was
created, completed work included static page conversion, blog list/section
conversion, sitemap/robots, JSON-LD, GraphQL usage removal, and view
transitions. Remaining high-value work included moving header/footer/SEO chrome
out of React/theme code and continuing the image pipeline migration.
