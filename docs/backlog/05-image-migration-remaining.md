# Phase 5 — Image migration (remaining work)

## What's already done

- `src/lib/image-resolver.ts` — `resolveImage(legacyPath)` maps `/images/...` strings to ESM-imported `ImageMetadata` from `src/assets/images/`. Returns `null` for unknown paths so callers can fall back.
- `src/components/BlogPost/RelatedPosts.astro` — uses `<Image />` + `resolveImage()` for blog thumbnails.
- `src/pages/404.astro` — uses a static `import` + `<Image />`.
- `src/assets/images/` already mirrors `public/images/` (~329MB, 1083 files), populated proactively during the initial migration. Two top-level files (`startup.jpg`, `page-header-bg.jpg`) were missing and have been copied across.

## What's NOT done

The remaining work has three independent tracks. Each is shippable on its own.

---

### 5.1 Migrate other `.astro` consumers as they're added

Currently only `RelatedPosts.astro` and `404.astro` reference `/images/...` in `.astro` files. As Phase 2 (static page conversion) and Phase 3 (chrome migration) progress, every new `.astro` file that renders an image should:

- Use `<Image />` from `astro:assets`.
- Either `import` the asset directly (preferred when path is static) or call `resolveImage(stringPath)` (when path comes from frontmatter or props).
- Provide explicit `widths` + `sizes` for responsive images. See `RelatedPosts.astro` for the pattern.

No standalone task here — bake into Phases 2-3.

---

### 5.2 Migrate React-island consumers (the hard one)

Components in `src/theme/` and `src/components/PagesReact/` consume images in two shapes:

- Plain string URLs (`<img src={featuredImage} />`)
- Gatsby-shaped objects (`featuredImage.childImageSharp.resize.src`) — wrapped via `imageToShape(url)` in `src/lib/blog-data.ts`

Both currently work because `public/images/` files are served as-is. Once `public/images/` is deleted (5.3), those references break.

**Approach**: use Astro's `getImage()` helper at the page-frontmatter level (server-side) to compute optimized URLs, then pass those URLs as props into the React island. The React side stays a string-URL consumer, but the string is now an optimized `/_astro/foo.<hash>.webp` URL.

```ts
// in an Astro page frontmatter
import { getImage } from 'astro:assets';
import { resolveImage } from '../lib/image-resolver';

const meta = await resolveImage(post.featuredImage);
const optimized = meta ? await getImage({ src: meta, width: 800, format: 'webp' }) : null;
// pass optimized.src into the React island as a prop
```

**Subtasks**:
1. Identify every React island that renders images. Start with: blog tiles, `BlogList`, `BlogIndexHeader`, mega-menu blog tiles, `PagesReact/case-studies/*`, `PagesReact/services/*`.
2. For each, lift the image rendering up: have the Astro page resolve and optimize, pass the resulting URL string in as a prop, and have the React component render `<img src={prop} />`.
3. Update `imageToShape` callers to either skip the wrapping (pass strings directly) or wrap the optimized URL.
4. After all consumers are converted, delete `imageToShape`.

Most of this work overlaps with Phase 3 (replacing React islands with `.astro` components). If a component is going to be rewritten in `.astro` anyway, skip the `getImage()` step for it.

---

### 5.3 Delete `public/images/` and reclaim 330MB

Blocked on: 5.1 + 5.2 fully complete.

**Pre-flight check**:

```bash
git grep "/images/"
```

If this returns zero hits in code (only matches in `src/assets/images/...` paths or content frontmatter, both of which are fine), proceed.

**Steps**:

1. Confirm content collection schemas (`src/content.config.ts`) — fields like `featuredImage` are still `z.string()`. Decide:
   - **Option A (minimal change)**: keep `z.string()`, but consumers must always go through `resolveImage()`. Frontmatter strings stay as `/images/...`. Simpler diff.
   - **Option B (idiomatic)**: switch to `image()` helper from `astro:content`. Requires updating every frontmatter file (~67 blog posts + case studies + jobs + projects + trainee programs) so paths are relative to the markdown file (e.g., `../../assets/images/blogs/foo/bar.jpg`). More invasive but unlocks `<Image src={data.featuredImage} />` directly.
   - Recommend Option A for the first pass; Option B as a follow-up if/when value is clear.
2. Delete `public/images/` (`rm -rf public/images`).
3. `pnpm build` — confirm 130 pages still build.
4. `pnpm dev` — visual smoke test of homepage, blog post (with hero), blog list, case study, jobs.
5. Commit. The diff should show 330MB of files deleted and tooling otherwise unchanged.

## Image best practices (apply to every new `<Image />` / `<Picture />`)

Follow these defaults when adding image rendering anywhere in the codebase:

- **LCP / above-the-fold images**: `loading="eager"` + `fetchpriority="high"` + `decoding="async"`. Below-the-fold: `loading="lazy"` + `decoding="async"`. Astro never auto-detects LCP — you have to pick.
- **Multi-format**: prefer `<Picture src={img} formats={['avif', 'webp']} />` over `<Image />` for content photos. Avif is ~30% smaller than webp at equal quality, browsers fall back automatically. Use `<Image />` only for SVG/single-format cases.
- **Responsive sizing**: always pass `widths` + `sizes`. `widths` should reflect actual rendered widths at breakpoints, not arbitrary numbers. Hero/full-width: `[640, 960, 1280, 1920]`. Sidebar/card: `[200, 400, 600]`. Provide `sizes` matching your CSS.
- **Quality**: default 80 is fine for content photos. Drop to `quality={65}` on thumbnails — invisible quality loss, ~30% smaller files.
- **Fixed-size images** (avatars, icons, logos with known display size): use `densities={[1, 2]}` for retina variants instead of `widths`.
- **CLS prevention**: `<Image />` with imported `ImageMetadata` auto-sets `width`/`height`. When passing optimized URLs into a React island via `getImage()`, also pass `width`/`height` as props and render them on the `<img>` — otherwise CLS returns.
- **SVG**: pass through `<Image />` (Astro 6 supports it). For reused UI icons, prefer `import Icon from './foo.svg'; <Icon />` so they inline as components and accept `currentColor`.
- **Remote images**: configure `image.remotePatterns` in `astro.config.mjs` and use `inferSize: true` on `<Image />` so dimensions come from the network response. None today.

Reference implementations: `src/components/BlogPost/RelatedPosts.astro` (`<Picture />`, lazy, low quality, responsive widths) and `src/pages/404.astro` (`<Image />`, eager LCP, high priority).

## Why this is split into three tracks

- 5.1 is incremental and rides along with Phases 2-3.
- 5.2 is the actual unblock: until React islands stop reaching for `/images/...` strings that resolve via `public/`, you can't delete `public/images/`.
- 5.3 is a single mechanical commit once 5.2 is done.

## Not in scope

- Migrating MDX-body image references (e.g., `![alt](/images/blogs/foo.jpg)` inside markdown). Astro's MDX integration can resolve those if they're rewritten as relative imports, but it's a separate cleanup. Currently they work because `public/images/` exists; they break when 5.3 completes. Plan for a content-rewrite pass at the same time as 5.3, OR keep `public/images/` for content-body images only and delete the rest.
