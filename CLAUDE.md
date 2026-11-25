# tushitj.github.io

Personal site built with Astro and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`. Pages source must be set to "GitHub Actions".

- `npm run dev` for local preview (drafts visible), `npm run build` to build `dist/`.
- Pages: `src/pages/` (home, `resume`, `notes/`). Layout: `src/layouts/Base.astro`. Styles: `src/styles/global.css` (design V "Synthesis": color tokens on `:root`).
- Notes: `src/content/notes/<slug>/index.md`, with photos in the same folder, referenced as `./photo.jpg`. Front matter schema is in `src/content.config.ts`; `draft: true` keeps a note out of production.
- Fonts are self-hosted via Fontsource packages imported in `Base.astro`.
- Static files served as-is (favicon, OG image) live in `public/`.

## Workflow

- **Use the `modern-web-guidance` skill before any HTML, CSS, or client-side JS change**, and follow its disclosure step.
- Never commit to `main` directly: work on a new branch, push it, and the owner reviews and merges the PR on GitHub.
