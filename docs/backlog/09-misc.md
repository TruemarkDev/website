# Open follow-ups

## Browser regression audit

Many React islands still mount as `client:only="react"` and the build won't catch empty-state bugs there. Before calling the migration fully shipped, walk the live site:

- `pnpm dev`, then click through each top-level route.
- Watch for empty sections — usually a component that hasn't been wired to receive props from Astro frontmatter.
- The props-driven examples to mirror are `BlogSection`, `BlogList`, `BlogIndexHeader` / `BlogIndexSliderSection`, and `BlogMegaMenu` (via `TopMenu`).

## Reading-time frontmatter override

`src/pages/blog/[...slug].astro` always computes reading time from the raw MDX body. The original Gatsby site let posts override it via frontmatter. Only worth doing if editorial asks.

```ts
// src/content.config.ts (blog schema)
readingTime: z.string().optional(),

// src/pages/blog/[...slug].astro
const minutes = data.readingTime
  ? { text: data.readingTime }
  : readingTime(entry.body || '');
```
