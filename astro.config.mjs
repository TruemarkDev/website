import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import redirectsList from './src/lib/redirects.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const redirects = Object.fromEntries(
  redirectsList.map((r) => [
    r.fromPath,
    { status: r.isPermanent ? 301 : 302, destination: r.toPath },
  ])
);

export default defineConfig({
  site: 'https://www.truemark.com.np',
  prefetch: { defaultStrategy: 'hover' },
  integrations: [react(), mdx(), sitemap()],
  redirects,
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
  },
  vite: {
    define: {
      // Replacing the whole `process.env` object breaks SSR for code paths that
      // do `const env = process.env; env.NODE_ENV` (the rebind escapes the
      // define replacement). Replace specific reads instead.
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV ?? 'production'
      ),
    },
    resolve: {
      alias: {
        // theme-internal aliases (referenced by remaining components inside src/theme/)
        '@components': path.join(__dirname, 'src/theme/components'),
        '@assets': path.join(__dirname, 'src/theme/assets'),
        '@constants': path.join(__dirname, 'src/theme/constants'),
        '@services': path.join(__dirname, 'src/theme/services'),
        '@utils': path.join(__dirname, 'src/theme/utils'),
        // main-app aliases
        assets: path.join(__dirname, 'src/assets'),
        images: path.join(__dirname, 'src/assets/images'),
        components: path.join(__dirname, 'src/components'),
        constants: path.join(__dirname, 'src/constants'),
        services: path.join(__dirname, 'src/services'),
        utils: path.join(__dirname, 'src/utils'),
        providers: path.join(__dirname, 'src/providers'),
        src: path.join(__dirname, 'src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
          loadPaths: [path.join(__dirname, 'node_modules')],
          silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'legacy-js-api', 'if-function', 'slash-div', 'function-units'],
        },
      },
    },
  },
});
