# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **pnpm**.

- `pnpm dev` — Astro dev server (alias: `pnpm start`)
- `pnpm build` — static build (~130 pages, Sharp image optimisation)
- `pnpm preview` — preview the built site
- `pnpm format` — Prettier over `src/**/*.{js,jsx,ts,tsx,astro}`
- `pnpm astro -- <cmd>` — pass-through to the Astro CLI (e.g. `pnpm astro check`)

There is no test runner and no lint script configured.

## Architecture

This is an **Astro 6 / React 19 migration of a former Gatsby site** (`truemark_blog`). Most of the original Gatsby/React component tree has been preserved verbatim and made to run under Astro via shims and Vite path aliases. Read `MIGRATION_NOTES.md` for the authoritative migration log — it documents what was rewritten and what remains to do.

### Shim layer (the load-bearing pieces)

- `src/lib/gatsby-shim.tsx` — drop-in replacement for the `gatsby` package. Exports `Link`, `navigate`, `graphql` (no-op tag), `useStaticQuery`, `StaticQuery`. `useStaticQuery` returns site metadata plus **empty** `edges`/`categories`, so theme components that depended on Gatsby GraphQL render empty unless real data is passed via props from the Astro page frontmatter.
- `src/lib/site-metadata.ts` — replaces Gatsby `siteMetadata`.
- `src/lib/redirects.mjs` — original redirect map; consumed by `astro.config.mjs` and converted into Astro's `redirects` config.
- `src/theme/` — vendored copy of the private `@truemark/gatsby-theme-effortless-blog` package, re-exported via `src/theme/index.js`. The Vite alias in `astro.config.mjs` points the old package name here.
- `src/components/Layout/Layout.jsx` — now a passthrough; real chrome (header, footer, SEO/meta) lives in `src/layouts/BaseLayout.astro`.

### Vite aliases

`astro.config.mjs` defines extensive aliases that mirror the original `gatsby-plugin-root-import` map: `assets`, `images`, `components`, `constants`, `services`, `templates`, `utils`, `providers`, `src`, plus theme-internal `@components`, `@assets`, `@constants`, `@services`, `@utils`. SCSS `loadPaths` includes `node_modules` so `@import 'bootstrap/scss/...';` works without the legacy `~`. `tsconfig.json` mirrors a subset of these as TS path mappings.

### Content collections

Live under `src/content/` (`blog/`, `case-studies/`, `jobs/`, `projects/`, `trainee-programs/`, `authors/`); schemas in `src/content.config.ts`.

- Frontmatter `slug:` was renamed to `customSlug:` everywhere (Astro reserves `slug`).
- Job slugs are normalised to `<parent-folder>-<filename>` for uniqueness.
- All image fields (`featuredImage`, `bgImage`, `ownerImage`, `companyLogo`, author `avatar`) and markdown-body image refs use absolute `/images/...` URLs pointing into `public/images/`. Schemas declare them as `z.string()` — no `image()` helper, no Sharp transforms on user content.
- Legacy React components still expect Gatsby-shaped `featuredImage.childImageSharp.resize.src`. `imageToShape(url)` in `src/lib/blog-data.ts` wraps a string into that shape.

### Pages and islands

Astro pages under `src/pages/` handle routing. Many marketing pages (`/services/...`, `/technologies/...`, `/resume/...`, `/hire/resources`, the hand-built `/case-studies/flexonet`, `/case-studies/trivia-day`) mount the original `.jsx` page body as a **`client:only="react"` island**, with copies kept under `src/components/PagesReact/...`. This works but ships more JS than necessary — promote to `client:visible` or static once verified SSR-safe.

Content-driven routes:
- `/blog/[...slug].astro` — Disqus snippet gated on `PUBLIC_DISQUS_SHORTNAME`.
- `/jobs/[...slug].astro`, `/case-studies/[...slug].astro` (MDX with CaseStudy section components used as MDX shortcodes).

### Gatsby → Astro replacement table

See `MIGRATION_NOTES.md` for the full mapping. Highlights: `gatsby-plugin-image` → legacy components fed Gatsby-shaped objects from frontmatter; `gatsby-plugin-google-analytics` → thin `gtag` forwarder in `src/services/tracker.js` and `src/theme/services/tracker.ts`; sitemap integration is wired but **disabled** in `astro.config.mjs` until routing stabilises; no `robots.txt` is generated.

## Environment variables

`.env.sample` lists the public env vars (all `PUBLIC_*`, exposed to the client): `PUBLIC_CONTACT_API_URL`, `PUBLIC_LUCID_HIRE_API_URL`, `PUBLIC_CRM_API_URL`, `PUBLIC_CRM_CONTACT_FORM_ID`, `PUBLIC_CRM_QUOTE_FORM_ID`, `PUBLIC_CRM_ESTIMATION_FORM_ID`, `PUBLIC_DISQUS_SHORTNAME`.

## Gotchas

- The `vite.define` block replaces **specific reads** of `process.env.NODE_ENV` rather than the whole `process.env` object — replacing the whole object breaks SSR for code that does `const env = process.env; env.NODE_ENV`.
- `useStaticQuery` returns empties; components like `BlogIndexHeader`, `BlogList`, mega-menu blog tiles, related posts, and search lists need data passed in as props from the Astro page (see `BlogSection`'s `blogs` prop for the pattern).
- SCSS deprecation warnings are silenced (`import`, `global-builtin`, `color-functions`, `legacy-js-api`, `if-function`, `slash-div`, `function-units`) — don't try to "fix" the warnings without a coordinated Bootstrap/SCSS upgrade.
