# truemark_boot — Astro migration of truemark_blog

## What works
- `pnpm install && pnpm build` produces a static site (130 pages, 467 images optimised through Sharp).
- `pnpm dev` runs the Astro dev server.
- Bootstrap 5.2.3 + the original SCSS tree, FontAwesome, React component tree, MDX content collections, Disqus snippet — all preserved.

## Layout
- `astro.config.mjs` — Vite path aliases mirror the original `gatsby-plugin-root-import` map. SCSS `loadPaths` includes `node_modules` so `@import 'bootstrap/scss/...';` works without the legacy `~` prefix.
- `src/lib/gatsby-shim.tsx` — drop-in replacement for the `gatsby` package. Provides `Link`, `navigate`, `graphql` (no-op tag), `useStaticQuery`, `StaticQuery`. The static-query data returns site metadata plus empty `edges`/`categories` so theme components render without crashing during SSR. Wire real data in at the page level (Astro frontmatter) and pass through props.
- `src/lib/site-metadata.ts` — static replacement for Gatsby's `siteMetadata` (including addresses + social URLs).
- `src/lib/redirects.mjs` — original redirect list, consumed by Astro's `redirects` config.
- `src/theme/` — vendored copy of `@truemark/gatsby-theme-effortless-blog` (was a private GitLab package). Re-exported via `src/theme/index.js`. Vite aliases `@truemark/gatsby-theme-effortless-blog` here.
- `src/components/Layout/Layout.jsx` — turned into a passthrough; the chrome (header, footer, SEO/meta tags) lives in `src/layouts/BaseLayout.astro`.

## Content
- Collections live under `src/content/`: `blog/`, `case-studies/`, `jobs/`, `projects/`, `trainee-programs/`, `authors/`. Schemas in `src/content/config.ts`.
- Frontmatter `slug:` was renamed to `customSlug:` everywhere — Astro reserves `slug` for its auto-generated value.
- Job slug fields were normalised to `<parent-folder>-<filename>` to satisfy Astro's uniqueness rule.

## Images (matches the truemark_blog_2026 example)
- All site images live under `public/images/` and are served as static files.
- All frontmatter image fields (`featuredImage`, `bgImage`, `ownerImage`, `companyLogo`, author `avatar`) and every markdown-body image reference were rewritten from relative `../../assets/images/...` paths to absolute `/images/...` URLs.
- Content-collection schemas declare these as `z.string()` — no Astro `image()` helper, no relative-path math, no Sharp transforms on user-content images.
- Legacy React components still expect a Gatsby-shaped `featuredImage.childImageSharp.resize.src`. `imageToShape(url)` in `src/lib/blog-data.ts` wraps a string into that shape so components keep rendering without edits.
- `src/assets/images/` is preserved so any `import x from 'assets/images/...'` statements in JSX continue to resolve via the Vite alias.
- One folder containing a space (`Top-12-...-at Truemark`) was hyphenated to keep markdown image syntax happy.

## Pages
| Route | Astro file | Notes |
|-------|-----------|-------|
| `/` | `src/pages/index.astro` | Pulls `featured` blogs via content collection. |
| `/blog/` | `src/pages/blog/index.astro` | Lists all blog posts. |
| `/blog/[customSlug]/` | `src/pages/blog/[...slug].astro` | Individual blog post + Disqus snippet (gated on `PUBLIC_DISQUS_SHORTNAME`). |
| `/jobs/[customSlug]/` | `src/pages/jobs/[...slug].astro` | |
| `/case-studies/[customSlug]/` | `src/pages/case-studies/[...slug].astro` | MDX with the original CaseStudy section components used as MDX shortcodes. |
| `/about, /contact, /careers, /portfolio, /terms, /trainee, /404` | direct Astro pages | |
| `/services/...`, `/technologies/...`, `/resume/...`, `/hire/resources` | Astro pages that mount the original `.jsx` page body as a `client:only="react"` island (copies live at `src/components/PagesReact/...`). |
| `/case-studies/flexonet`, `/case-studies/trivia-day` | The hand-built React case-study pages, mounted as islands. |

## Gatsby APIs that were replaced
| Gatsby | Replacement |
|--------|-------------|
| `gatsby-plugin-image`, `<GatsbyImage>`, `getImage`, `childImageSharp` | Components are fed objects shaped `{ childImageSharp: { resize: { src, width, height } } }` from the Astro frontmatter so legacy components keep working. The single `<GatsbyImage>` site (`PortfolioItem.jsx`) was downgraded to `<img src>`. |
| `gatsby-plugin-google-analytics` (`trackCustomEvent`) | Thin `gtag` forwarder in `src/services/tracker.js` and `src/theme/services/tracker.ts`. Wire up real GA at your leisure. |
| `gatsby-source-filesystem`, `gatsby-transformer-remark`, `gatsby-transformer-yaml` | Astro content collections. |
| `gatsby-plugin-mdx`, `MDXProvider` | `@astrojs/mdx`. |
| `gatsby-plugin-manifest`, `gatsby-plugin-robots-txt`, `gatsby-plugin-sitemap` | Manifest/favicon copied to `public/`; sitemap integration is wired but disabled in `astro.config.mjs` until route reduction stabilises. Robots.txt isn't generated yet — drop a `public/robots.txt` when ready. |
| `node:events` (used by `eventEmitter.js`) | Tiny browser-friendly emitter (no node polyfill needed). |

## Things to do next
1. **Audit individual pages in the browser.** Most components are mounted as `client:only="react"`, so they only render on the client. Run `pnpm dev` and walk each route — anything that depended on Gatsby's GraphQL data (search lists, mega-menu blog tiles, related posts) currently sees empty arrays and renders empty sections. To populate them, fetch data in the Astro page frontmatter and pass it as props instead of relying on the shim's `useStaticQuery` empties.
2. **`@truemark/gatsby-theme-effortless-blog/BlogIndexHeader` + `BlogList`** read blog data via `useStaticQuery`. Wire them by passing the data as props (similar to how `BlogSection` already accepts a `blogs` prop).
3. **SEO / `<head>`** — `BaseLayout.astro` covers OG/Twitter cards. The original `getSchemaOrgJSONLD` JSON-LD payload isn't emitted yet; port it into `BaseLayout.astro` if you need rich snippets.
4. **Sitemap & robots** — re-enable `@astrojs/sitemap` once routing is finalised. Drop a static `public/robots.txt` for now if you need crawlers to behave.
5. **Trim islands** — many islands could be promoted from `client:only` to `client:visible` (or even fully static) once they're verified to be SSR-safe. `client:only` works but ships more JS than necessary.
6. **Authentication routes** — `account.js` and `callback.js` from the original site weren't ported (Auth0 was unused). Add them back if needed.
7. **Reading time** — currently computed from raw MDX body via the `reading-time` package; matches the Gatsby behaviour but ignores frontmatter overrides.
8. **`gatsby-plugin-nprogress`** — top-of-page progress bar isn't wired. Astro view transitions or a small custom listener would be the closest equivalent if you want it back.
