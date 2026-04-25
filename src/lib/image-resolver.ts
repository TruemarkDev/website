import type { ImageMetadata } from "astro";

// Maps legacy `/images/...` URLs (originally served from `public/images/`) to
// ESM-imported assets under `src/assets/images/`. Files in `src/assets/` go
// through `astro:assets` and get hashed + optimized; files in `public/` are
// served as-is. The two trees currently mirror each other, so this resolver
// lets `.astro` consumers opt into the optimized path without touching content
// frontmatter (which still uses `/images/...` strings).
//
// `resolveImage` returns `ImageMetadata` (or `null`) — use it when you want
// width/height/format. `resolveUrl` returns just the fingerprinted URL string
// suitable for `<img src>` and falls back to the original path so unknown
// inputs survive instead of vanishing.
const imageLoaders = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/**/*.{jpg,jpeg,png,webp,avif,gif}",
);

export async function resolveImage(
  legacyPath: string | undefined | null,
): Promise<ImageMetadata | null> {
  if (!legacyPath) return null;
  const key = legacyPath.replace(/^\/images\//, "/src/assets/images/");
  const loader = imageLoaders[key];
  if (!loader) return null;
  const mod = await loader();
  return mod.default;
}

export async function resolveUrl(
  legacyPath: string | undefined | null,
): Promise<string | undefined> {
  return (await resolveImage(legacyPath))?.src ?? legacyPath ?? undefined;
}
