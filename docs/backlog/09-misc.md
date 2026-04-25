# Phase 9 — Miscellaneous follow-ups

Small items that don't justify a phase of their own.

## 9.1 Browser-based regression audit

Most React components currently mount as `client:only="react"`, so they only render on the client. Before treating the migration as "done":

- Run `pnpm dev` and walk every route in the browser.
- Watch for empty sections — these usually indicate a component still relying on `useStaticQuery` (which returns empties via the shim) instead of receiving data as props.
- Cross-reference with the props-driven components already migrated: `BlogSection`, `BlogList`, `BlogIndexHeader`/`BlogIndexSliderSection`, `BlogMegaMenu` (via `TopMenu`). Anything else rendering empty needs the same treatment — fetch in Astro frontmatter, pass via props.

This overlaps with Phase 1 (the audit) and Phase 3.4 (replacing blog list components). Bake it into those.

## 9.2 Reading time honors frontmatter overrides

`src/pages/blog/[...slug].astro` computes reading time from raw MDX body via the `reading-time` package. The original Gatsby site allowed posts to override this via a frontmatter field (e.g., `readingTime: "8 min read"`).

If editorial wants control:

1. Add `readingTime: z.string().optional()` to the blog schema in `src/content.config.ts`.
2. In `[...slug].astro`, prefer `data.readingTime` over the computed value:
   ```ts
   const minutes = data.readingTime
     ? { text: data.readingTime }
     : readingTime(entry.body || '');
   ```

Tiny change; only worth doing if someone actually asks.

## 9.3 Stale legacy templates — DONE

`src/templates/blog-post.jsx` and `RelatedPostsSection.jsx` are gone. `git grep "templates/blog-post\|RelatedPostsSection"` returns hits only in `docs/backlog/`, never in `src/`. The live blog post route is `src/pages/blog/[...slug].astro` + `src/components/BlogPost/RelatedPosts.astro`.
