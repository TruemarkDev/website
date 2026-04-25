# Phase 2 — Convert static pages from React islands to `.astro`

Blocked on: Phase 1 audit.

## Goal

For each page classified **static-safe** in the Phase 1 audit, replace the `client:only="react"` mount with inline `.astro` markup. Result: zero React JS shipped for that page.

## Suggested order (lowest risk first)

1. `/resume/*` — almost certainly pure content
2. `/technologies/*` — marketing copy + icons
3. `/services/*` — marketing copy
4. `/hire/resources` — depends on audit
5. Hand-built case studies (`/case-studies/flexonet`, `/case-studies/trivia-day`) — likely pure composition

## How (per page)

1. Open the React component (`src/components/PagesReact/<area>/<Page>.jsx`).
2. Open its Astro mount (`src/pages/<area>/<page>.astro`).
3. Translate JSX into `.astro` template:
   - `className=` → `class=`
   - JSX `{condition && <X />}` works as-is
   - React `<Image />` from any shim → Astro `<Image />` from `astro:assets`, or plain `<img>` if not yet migrated
   - Imports from `'gatsby'` (`Link`, `navigate`) → plain `<a href>` and `window.location` (or just remove — it's a static page)
4. Replace the `<Page client:only="react" />` line in the Astro page with the translated markup, OR move it into a partial under `src/components/<area>/<Page>.astro` and use that.
5. Delete the now-unused `.jsx` file.
6. Run `pnpm build` and `pnpm dev`, visually verify the page.

## Image handling during conversion

- Use `<Image />` from `astro:assets` for content images. For images currently referenced as `/images/...` strings, use `resolveImage()` from `src/lib/image-resolver.ts` (already implemented). Pattern: see `src/components/BlogPost/RelatedPosts.astro`.
- For images you can statically import (i.e., the path is known at build time, not coming from frontmatter), prefer `import foo from '../../assets/images/...'` directly — simpler than the resolver.

## Done when

- All static-safe pages from the Phase 1 audit are converted.
- `pnpm build` is green; bundle size shrinks (verify with `ls -lh dist/_astro/*.js | wc -l` before/after).
- No `client:only="react"` directives remain on pages that are pure markup.

## Not in scope

- Pages classified as **interactive** or **mixed** — those need targeted island work, not wholesale conversion.
- Theme components used by these pages (header, footer, blog tiles) — that's Phase 3.
