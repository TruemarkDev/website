import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { visit } from 'unist-util-visit';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ASSETS_ROOT = path.resolve(__dirname, '../assets/images');

// Rewrites markdown image URLs that point at `/images/...` (the legacy
// `public/images/` location) to a relative path resolving to
// `src/assets/images/...`. Astro's MDX integration treats relative image
// paths as ESM imports — so after rewriting, Vite + astro:assets bundle
// and fingerprint them. Authors can keep writing `![alt](/images/blogs/foo.jpg)`
// in markdown without thinking about ../../ paths.
export default function remarkImagePaths() {
  return (tree, file) => {
    const mdPath = file?.history?.[0] ?? file?.path;
    if (!mdPath) return;
    const mdDir = path.dirname(mdPath);
    visit(tree, 'image', (node) => {
      if (!node.url || !node.url.startsWith('/images/')) return;
      const target = path.join(ASSETS_ROOT, node.url.slice('/images/'.length));
      const rel = path.relative(mdDir, target);
      node.url = rel.startsWith('.') ? rel : `./${rel}`;
    });
  };
}
