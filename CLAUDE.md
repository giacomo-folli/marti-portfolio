# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Production build → ./dist
npm run preview   # Preview production build locally
npm run lint      # ESLint check
```

No test suite is configured.

## Deployment

Pushes to `master` automatically deploy to GitHub Pages via `.github/workflows/deploy.yml`. The site is served under the `/marti-portfolio/` base path, which is set in `vite.config.js`. All asset URLs in page components must use this prefix (e.g. `/marti-portfolio/assets/img1.png`).

## Architecture

This is a single-page React app with no router — navigation is pure state managed in `App.jsx`. The `currentPage` string (`'home' | 'portfolio' | 'about' | 'contact'`) drives both which page component renders and the visual state of the notebook shell.

**Shell vs. pages:** `NotebookLayout` (the notebook metaphor wrapper) is always mounted. It renders the right-side tab strip and switches between two visual states — `is-cover` (dark leather look, home page) and `is-open` (cream paper look, inner pages). Page content is injected as `children` and re-keyed on navigation to trigger the CSS fade-in animation.

**Page components** live in `src/pages/`. Each inner page (`Portfolio`, `About`, `Contact`) receives `onNavigate` and `currentPage` and renders `PageHeader` at the top for in-page navigation back to the logo/home.

**Styling:** All design tokens (colors, fonts, tab sizing) are CSS custom properties defined in `src/index.css`. Component-level styles are co-located `.css` files. The three fonts are Fraunces (serif headings), Inter (body), and Space Mono (`.mono` utility class for labels/captions). `App.css` is intentionally empty — do not put styles there.

**Public assets** (`/public/assets/`) are referenced with absolute paths including the base prefix. `src/assets/` is for assets imported directly into JS/JSX.
