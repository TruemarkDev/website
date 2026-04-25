# Gatsby-era and non-Astro cleanup

Status: completed on 2026-04-25.

This audit was created from repository searches on 2026-04-25. It separates true
migration debt from intentional Gatsby service-page content.

Completion summary:

- Removed the unused React SEO files and `react-helmet`.
- Removed `src/theme/`, its Vite aliases, `theme-ui`, and `@reach/router`.
- Moved the still-used blog menu/header styles and React islands into normal
  `src/components`, `src/assets/css`, and `src/services` paths.
- Replaced the stale `PortfolioItem` Gatsby image shim with direct `<img>`
  rendering.
- Replaced non-Astro public env reads with `import.meta.env.PUBLIC_*`.
- Replaced all `client:only="react"` usages with SSR-capable `client:load` or
  `client:visible` islands, adding SSR fallbacks around browser-only inputs and
  slider components.
- Verified `pnpm build` succeeds.

## Search baseline

No active `gatsby` imports, Gatsby GraphQL queries, `useStaticQuery`,
`StaticQuery`, `childImageSharp`, or `gatsby-plugin-image` imports were found in
`src/`.

Remaining hits fall into these buckets:

- intentional Gatsby service/product content under
  `src/pages/technologies/gatsby-js.astro`, `src/components/Gatsby/`,
  `src/components/TopProjects/GatsbyJSProjects.jsx`, menu/footer links, icons,
  and related SCSS.
- migration comments and replacement shims such as `src/lib/site-metadata.ts`,
  `src/services/tracker.js`, `src/theme/services/tracker.ts`, and blog image
  compatibility styles.
- legacy React/theme surfaces that still ship as islands or compatibility code.

## Phase 1: Remove stale Gatsby compatibility code

- Replace the local `getImage` helper and commented `<GatsbyImage>` block in
  `src/components/Portfolio/PortfolioItem.jsx` with the current plain-image
  path directly.
- Keep `.gatsby-resp-image-*` and `.gatsby-code-button` styles only while
  legacy Markdown content still emits or references those classes. Once content
  rendering is confirmed clean, remove the duplicated selectors from:
  - `src/assets/css/pages/_blog-post.scss`
  - `src/assets/css/components/_blog-post.scss`
  - `src/assets/css/components/_theme-blog.scss`
  - `src/theme/assets/css/layouts/_blog-details.scss`
- Decide whether the intentionally public Gatsby service page still belongs in
  the site. If it does, leave the Gatsby content references alone; if not,
  remove `/technologies/gatsby-js/` and its menu/footer/form option entries in a
  separate content change.

## Phase 2: Retire legacy SEO/theme React code

- Confirm `src/components/SEO/SiteMetaData/SiteMetaData.jsx`,
  `src/components/SEO/getSchemaOrgJSONLD.jsx`,
  `src/components/SEO/getJobSchemaOrgJSONLD.jsx`, `src/components/SEO/og.jsx`,
  and `src/components/SEO/twitterCard.jsx` are unused now that
  `BaseLayout.astro` and `src/lib/jsonld.ts` own metadata.
- Delete the unused SEO React files after confirmation, then remove
  `react-helmet` if the only remaining consumer is the theme switcher.
- Replace `src/components/ThemeSwitcher/ThemeSwitcher.jsx`'s `Helmet` usage with
  a small client script or Astro-owned `<html data-theme>` update, then remove
  `react-helmet` from `package.json`.
- Audit `src/theme/gatsby-plugin-theme-ui/index.js`, `src/theme/theme.ts`, and
  the `theme-ui` dependency. If no runtime import remains, remove the shim and
  dependency.
- Check `@reach/router`; no imports were found in `src/`, so it is a candidate
  for dependency removal after `pnpm build`.

## Phase 3: Convert avoidable `client:only="react"` islands

Build output cannot fully validate `client:only` islands, so convert these in
small batches with browser checks:

- Static or mostly static sections:
  - `src/pages/services/digital-marketing.astro`
  - `src/pages/trainee.astro`
  - `src/pages/case-studies/flexonet.astro`
  - `src/pages/case-studies/trivia-day.astro`
  - `src/pages/technologies/gatsby-js.astro`
  - `src/pages/technologies/spree.astro`
  - `src/pages/technologies/react-js.astro`
  - `src/pages/index.astro`
- Resume pages:
  - `src/pages/resume/anil.astro`
  - `src/pages/resume/mausam.astro`
  - `src/pages/resume/parash-ojha.astro`
  - `src/pages/resume/prabin.astro`
  - `src/pages/resume/prakash.astro`
- Shared chrome or interactive islands to keep React only if stateful:
  - `src/layouts/BaseLayout.astro` (`FormCTASection`)
  - `src/components/Footer/Footer.astro` (`ButtonWithModal`, `ThemeSwitcher`)
  - `src/components/Blog/BlogIndexHeader.astro` (`BlogIndexSliderSection`)
  - `src/components/Menu/Header/TopMenu.astro` (`BlogMegaMenu`)
  - `src/pages/contact.astro` (`ContactPageBody`)

Preferred order: promote pure display islands to `.astro` first, change
SSR-compatible interactive components from `client:only` to `client:visible` or
`client:load` second, and leave modal/form/menu state in React until equivalent
Astro markup plus small client scripts are ready.

## Phase 4: Remove `src/theme/` aliases and remaining vendored theme surface

Remaining files under `src/theme/` are mostly modal/form, blog-menu, blog-card,
and SCSS support code. Cleanup path:

- Move reusable form/modal islands into `src/components/` with normal app
  aliases or relative imports.
- Move remaining blog menu/card islands into `src/components/Blog/` or convert
  display-only pieces to `.astro`.
- Replace theme-internal aliases in `astro.config.mjs`
  (`@components`, `@assets`, `@constants`, `@services`, `@utils`) after the
  moved files no longer import them.
- Delete empty `src/theme/` directories and the theme SCSS imports only after a
  production build and browser pass.

## Phase 5: Normalize environment access

The active services still use non-Astro env names:

- `src/services/api/LucidHireApi.js`: `process.env.LUCID_HIRE_API_URL`
- `src/services/api/CrmApi.js`: `process.env.CRM_API_URL`,
  `CRM_CONTACT_FORM_ID`, `CRM_QUOTE_FORM_ID`, `CRM_ESTIMATION_FORM_ID`
- legacy SEO code: `process.env.WEBSITE_URL`

Replace runtime browser-facing reads with `import.meta.env.PUBLIC_*` names that
match `.env.sample`, then remove any no-longer-needed `vite.define` allowances
beyond `process.env.NODE_ENV`.

## Verification checklist

- `pnpm build`
- browser pass over converted routes from `09-misc.md`
- inspect generated HTML for metadata, theme attribute, and modal/form behavior
- confirm removed dependencies disappear from `pnpm-lock.yaml`
