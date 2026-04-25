# Phase 1 audit results — `src/components/PagesReact/*`

Surveyed by static code analysis (greps for `useState`, `useEffect`, `useRef`, `onClick/onChange/onSubmit`, `window./document.`, `useStaticQuery`) on the **page-body shell** of each file. Every page-body shell is pure JSX composition that imports interactive child components — so every shell is a candidate for `.astro` conversion. Interactivity lives one level down (`EstimateForm`, `Faq`, `TestimonialSection`, etc.) and stays as React islands inside the new `.astro` shell.

## Classification

| File | Status | Page-body interactivity | Notes |
|---|---|---|---|
| `case-studies/flexonet.jsx` | **Static-safe** | None | Pure composition. Child components handle visuals only. |
| `case-studies/trivia-day.jsx` | **Static-safe** | None | Pure composition. |
| `hire/resources.jsx` | **Static-safe** | None | Composes `EstimateForm` (interactive island), `BlogSection` (data-driven), and other static sections. |
| `resume/anil/index.jsx` | **Static-safe** | None | Hard-coded profile object passed to `FetchedDataTemplete`. |
| `resume/mausam/index.jsx` | **Static-safe** | None | Same shape as anil. |
| `resume/parash-ojha/index.jsx` | **Static-safe** | None | Same shape as anil. |
| `resume/prabin/index.jsx` | **Static-safe** | None | Same shape as anil. |
| `resume/prakash/index.jsx` | **Interactive** | `useState` + `useEffect` + `fetch` | Calls `PortfolioApi.fetchOne('poudelprakash')` on mount, shows a loader, then merges the response into the profile. Genuine runtime interactivity — keep as React island. Switch from `client:only="react"` to `client:visible` if SSR-safe (probably is — SSR will render the loader and hydration replaces with real data). |
| `services/design.jsx` | **Static-safe** | None | |
| `services/digital-marketing.jsx` | **Static-safe** | None | |
| `services/maintenance/tests.jsx` | **Static-safe** | None | |
| `services/maintenance/upgrade.jsx` | **Static-safe** | None | |
| `technologies/gatsby-js.jsx` | **Static-safe** | None | |
| `technologies/react-js.jsx` | **Static-safe** | None | |
| `technologies/ruby-on-rails.jsx` | **Static-safe** | None | |
| `technologies/spree.jsx` | **Static-safe** | None | |
| `technologies/upgrade-your-application.jsx` | **Static-safe** | None | |

**Summary**: 16 of 17 are static-safe shells. Only `resume/prakash/index.jsx` has runtime fetch + loading state.

## Caveat about child components

Each static-safe shell composes interactive children. When you convert a shell to `.astro`, those children either:

- **Stay as React islands** — mount them inside the `.astro` page with `client:visible` (or `client:idle`/`client:only` if SSR-incompatible). Examples spotted in imports: `EstimateForm`, `Faq` (likely accordion), `TestimonialSection` (carousel?), `BlogSection` (already React, fed via props).
- **Could become `.astro` themselves** — pure presentational ones like `HeroSectionTemplate`, `UIUXDesignApproach`, `WhyChooseUs`, `OurTools`, etc. Convert opportunistically when touching them; not required for Phase 2.

## Recommended Phase 2 batch order

1. **Technologies pages** — least cross-dependency, safe first batch (`gatsby-js`, `react-js`, `ruby-on-rails`, `spree`, `upgrade-your-application`).
2. **Services pages** — `design`, `digital-marketing`, `maintenance/tests`, `maintenance/upgrade`.
3. **Resume pages** (the static four) — `anil`, `mausam`, `parash-ojha`, `prabin`. Leave `prakash` as React island.
4. **Hire** — `resources`. Has `BlogSection` + `EstimateForm` islands inside.
5. **Hand-built case studies** — `flexonet`, `trivia-day`. Largest pages, save for last.

## Already-known interactive islands to preserve as-is

These should stay React (or become smaller React islands) regardless of which shell they live in:

- `EstimateForm` (form state, submission)
- `BlogSection` / `BlogList` / search UI (until Phase 3.4 replaces with `.astro` equivalents)
- `Faq` accordions
- `Layout/Layout.jsx` is a passthrough — not actually interactive — but other shells import `Layout` directly. The new `.astro` pages should use `BaseLayout.astro` instead.
- `prakash` resume page (the only genuine page-level interactivity)
