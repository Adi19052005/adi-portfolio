# Aditya Solunke — portfolio

Initial Next.js App Router portfolio, created in an otherwise empty workspace from the supplied identity brief and two supplied photographs.

## Creative direction: The Systems Behind the Story

A dark editorial field guide following curiosity into a working system and then into something useful to other people. The portfolio links backend and cloud engineering to technical education through a repeating sequence: question → model → build → explain.

Palette tokens: ink `#111318`, graphite `#1B2028`, mist `#E5E7EA`, slate `#A5ABB5`, electric iris `#8C9EFF`, signal mint `#B9F4D0`, and divider `#343A44`. Display type uses Space Grotesk, body type uses Inter, and project metadata uses IBM Plex Mono; system fallbacks keep content readable if remote font loading is unavailable. Georgia provides a restrained editorial contrast for selected statements.

The Jean-Christophe Suzanne reference informed the concise, role-led introduction and work-first confidence. The Sarthak Sharma reference informed the chapter-led narrative, restrained motion control, and stronger project storytelling. Neither reference's exact assets or implementation have been copied. The portfolio uses accessible project-flow diagrams rather than adding unsubstantiated 3D or shader effects.

Narrative sequence: question (hero) → through-line → project systems → learning loop → current JAPFA Comfeed India NAPS Trainee Backend Developer role → cloud and DevOps curiosity → observation beyond the terminal → connect. The layout uses one long, server-rendered page with anchor navigation so visitors can scan or follow the sequence.

## Run locally

Install dependencies with `npm install`, then run `npm run dev`. `npm run typecheck` checks the JavaScript and JSX with TypeScript's `checkJs`; `npm run build` creates a production build. The build skips ESLint because no ESLint configuration is included.

## Before publishing

- Set `NEXT_PUBLIC_SITE_URL` to the real production origin to enable the canonical URL and sitemap reference.
- Verify current role dates/responsibilities, education details, publication links, project status, and any public audience metrics before adding them.
- The exact Self-Healing MLOps repository URL is not confirmed; its card temporarily links to the GitHub profile.
- Supply project screenshots/diagrams and a resume if desired; the two original personal photos remain preserved alongside the processed hero cut-out and generated cloud illustration.
- Set a direct URL to the Self-Healing MLOps repository once confirmed.

The hero image is a grayscale grain-art cut-out made from the supplied café portrait, loaded with Next Image priority and responsive sizes. A transparent cloud/DevOps illustration supports the infrastructure-interest chapter. The second portrait is below the fold and lazy-loaded by default. Content is server rendered; an opt-in motion switch controls a subtle signal trace and image drift, with reduced-motion support. No loading screen, animation runtime, WebGL, contact form, analytics, or invented domain is included. Project components use JavaScript/JSX with JSDoc types; that keeps Next's build independent from TypeScript package discovery while retaining a separate type check.
