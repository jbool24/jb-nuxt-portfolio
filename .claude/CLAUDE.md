# CLAUDE.md — Justin B Personal Portfolio

## Project Overview

Personal portfolio site for **Justin Bellero** built with Nuxt 3.
Currently on the `nuxt3-migration` branch, migrating from Nuxt 2 (Options API + Vuex) to Nuxt 3 (Composition API + Pinia).

## Repository Structure

```
/
├── assets/sass/          # SCSS stylesheets (site.scss, namari theme)
├── components/           # Auto-imported Vue components
│   ├── TheFooter.vue
│   ├── TheNavbar.vue
│   └── sections/         # Page section components (AboutMe, Brands, IndexHero, Technologies)
├── composables/          # Shared Composition API logic (useSlideshow)
├── layouts/              # Nuxt layouts (default, full-page)
├── middleware/           # Route middleware (navbar.global.ts)
├── pages/                # File-based routing
│   └── portfolio/        # Portfolio index + [portfolio].vue dynamic route
├── plugins/              # Nuxt plugins (scroll-reveal.ts)
├── public/               # Static assets (fonts, images, favicon, vendor CSS)
├── slideshows/           # Slideshow components (hciCollege, rebelrobinson, watchourown)
├── stores/               # Pinia stores (navbar.ts)
└── nuxt.config.ts
```

## Tech Stack

| Concern | Tool |
|---|---|
| Framework | Nuxt 3 (`^3.13.0`) |
| Language | TypeScript + Vue 3 Composition API |
| State | Pinia (`@pinia/nuxt`) |
| Styling | SCSS + Tailwind CSS (`@nuxtjs/tailwindcss`) |
| Animations | animate.css, ScrollReveal (`scrollreveal`) |
| Analytics | Google Analytics via `nuxt-gtag` |
| Linting | ESLint flat config (`eslint.config.mjs`) + Prettier |
| Deployment | Netlify (`yarn generate` → static) |
| Templates | Pug (template lang in `.vue` files) |

## Development Commands

```bash
# Install dependencies
yarn install

# Serve with hot reload at localhost:3000
yarn dev

# Build for production (SSR)
yarn build

# Generate static site (used by Netlify)
yarn generate

# Preview production build
yarn start

# Lint
yarn lint

# Clean Nuxt cache/artifacts
yarn clean
```

## Component Organization

Components are auto-imported by Nuxt 3 with no prefix required:

| Directory | Contents |
|---|---|
| `components/` | `TheFooter`, `TheNavbar` — global layout components |
| `components/sections/` | `AboutMe`, `Brands`, `IndexHero`, `Technologies` — page sections |
| `composables/` | `useSlideshow` — keyboard/click-driven slideshow state |
| `stores/` | `useNavbarStore` — mobile nav open/close state (Pinia) |

## Deployment

Deployed to **Netlify** via static generation. Configuration in `netlify.toml`:
- Build command: `yarn generate`
- No serverless functions (removed during Nuxt 3 migration)

## Dev Container

The `.devcontainer/devcontainer.json` configures a Node 24 container with:
- Claude Code, Vue Volar, ESLint, Tailwind CSS extensions pre-installed
- GitHub Copilot explicitly disabled
- Custom CA certificates mounted from host
- Port 3000 forwarded for dev server
- Claude config (`~/.claude`) bind-mounted from host

## Slash Commands

### User-level skills (always available)

| Command | Purpose |
|---|---|
| `/test` | Run the full test suite and produce a structured pass/fail report with coverage |
| `/audit` | Security audit — secrets scan, `yarn audit`, OWASP Top 10 review, findings report |
| `/debug` | Systematic 6-step debugging: reproduce → isolate → hypothesize → verify → fix → confirm |
| `/hotfix` | Emergency fix workflow: branch from `main`, diagnose, fix, test, commit `[BUGFIX]`, PR |
| `/quality-control` | Full pre-merge pipeline: format → test → docs sync → commit hygiene → MR prep |

### Plugin commands (from installed marketplace plugins)

| Command | Purpose |
|---|---|
| `/commit` | Stage and create a git commit |
| `/commit-push-pr` | Commit, push branch, and open a GitHub PR in one flow |
| `/clean-gone` | Delete local branches whose remote has been deleted |
| `/code-review` | Review a pull request using `gh pr diff` |
| `/review-pr` | Comprehensive PR review using 6 specialized agents (comments, tests, error handling, types, quality, simplification) |
| `/feature-dev` | Guided 7-phase feature development: explore → clarify → design → implement → QA |
| `/frontend-design` | Build distinctive, production-grade UI components — avoids generic aesthetics |
| `/simplify` | Simplify recently modified code for clarity and maintainability without changing behavior |

**For this project, skills will use:**
- Lint command: `yarn lint`
- Build/generate: `yarn generate`
- Dependency audit: `yarn audit`
- Commit prefix conventions: `[ADD]`, `[BUGFIX]`, `[CHORE]`, `[CLEAN]`, `[DOCS]`, `[PREPARE]`, `[REFACTOR]`, `[RELEASE]` — `[FEATURE]` is for PR titles only

## Coding Conventions

The `.claude/rules/` directory contains enforced conventions (auto-loaded):

1. **`01-type-organization.md`** — Use `~/` path alias for cross-directory imports; types in `types/{domain}/`; `import type` for type-only imports; no barrel exports for types
2. **`02-interface-driven-design.md`** — External dependencies wrapped in composables (`useXxx`); components never call SDKs or APIs directly; server-side data access in `server/utils/`
3. **`03-test-driven-development.md`** — Vitest + `@nuxt/test-utils`; prioritize testing composables, utils, and server routes; TDD encouraged for logic, not required for presentational components
