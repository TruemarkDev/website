# Phase 8 — Port Auth0 routes (only if needed)

## Goal

Decide whether to port the original `account.js` and `callback.js` Auth0 routes from the legacy Gatsby site, then either port them or formally drop them.

## Current state

- The original site had `/account` and `/callback` routes wired to Auth0.
- They were **not ported** in the initial migration because Auth0 was effectively unused.
- No login UI is visible on the current site.

## Decision needed

Before any code work: confirm with stakeholders whether authentication is on the roadmap.

- **If no**: close this task. Optionally remove any stale Auth0 references from `package.json`, env samples, and config.
- **If yes**: continue below.

## If porting

1. Astro's static-site model doesn't support Auth0's redirect-callback flow at static-build time — you'll need either:
   - Astro SSR mode + an adapter (Vercel/Netlify/Node) for `/callback`, OR
   - A client-side-only Auth0 flow using `@auth0/auth0-react` mounted as a `client:only="react"` island. State stays in `localStorage` / `sessionStorage`. No SSR.
2. Recreate `/account` as an Astro page with a React island that fetches the user profile from Auth0.
3. Recreate `/callback` similarly — the island handles the token exchange and redirects.
4. Add the relevant `PUBLIC_AUTH0_*` env vars to `.env.sample` and CLAUDE.md.

## Done when

- Either: this task is closed with a note that auth is out of scope, OR
- `/account` and `/callback` exist, the login flow round-trips successfully, and a logged-in user can see their profile.
