# Open follow-ups

## Browser regression audit (hydration-only)

A programmatic scan of `dist/` came back clean — no broken serializations, no empty `<main>` blocks, no missing JS/CSS refs, no template leaks. The remaining risk lives at hydration time: a React island that imports cleanly and serializes valid props but crashes when it mounts.

To check that residual:

- `pnpm dev`, then click through each top-level route.
- Open the console and watch for hydration errors, especially on pages with `client:only="react"` islands (mega-menu, blog list, case-study sections, resume pages, contact).
- Empty sections that show in the browser but not in the build output usually mean a component is silently throwing during render.
