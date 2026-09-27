# PCBOD — Publish Hardware Like Software

PCBOD means **Printed Circuit Boards On Demand**. This repository contains the public concept/marketing website for a marketplace where electronics creators could publish production-ready PCB products, buyers order physical variants, manufacturing is coordinated through partners, and creators earn royalties without carrying inventory.

> **Concept-data disclaimer:** This repository currently represents PCBOD's public concept/marketing website. Marketplace transactions, manufacturing workflows, creator payouts, and other operational systems shown in the interface are conceptual unless explicitly implemented.

## Website purpose

The site is designed to make the PCBOD operating model clear in the first few moments of a visit and then progressively explain:

`problem → PCBOD model → marketplace → creator flow → protected manufacturing files → manufacturing/revisions → creator economics → future`

All product listings and sample economics are explicitly labeled as concept examples. The site does **not** include checkout, authentication, databases, real PCB uploads, DFM, order management, payout systems, fake reviews, fake metrics, or fake live production activity.

## Stack

- Next.js App Router
- React
- TypeScript (strict)
- Tailwind CSS
- Static export for GitHub Pages
- Custom SVG/CSS PCB visuals; no stock-photo dependency

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation scripts

```bash
npm run typecheck
npm run lint
npm run build
```

A successful production build writes the static export to `out/`.

## Project structure

```text
app/                  routes + metadata
components/layout/    public header/footer
components/marketing/ storytelling sections + interactions
components/marketplace/ concept listing/product components
components/pcb/       custom technical PCB illustrations
data/                 explicitly labeled concept product data
docs/                 PRD, architecture, design, rules, phases, memory
public/               static assets
.github/workflows/    GitHub Pages deployment
```

## Design philosophy

The visual system combines an engineering catalog, PCB fabrication documentation, restrained ecommerce and industrial product UI. The site uses warm technical-paper surfaces, graphite typography, solder-mask green and restrained copper accents. PCB traces, vias, board IDs, revision labels and grids are structural motifs rather than decoration.

The website intentionally avoids generic gradient SaaS visuals, excessive glassmorphism, fake testimonials, fake statistics, synthetic product photography and claims of automation that do not exist.

## GitHub Pages deployment

The repository includes `.github/workflows/deploy-pages.yml`.

1. Push the repository to GitHub using `main` as the default branch.
2. In **Settings → Pages**, select **GitHub Actions** as the source if GitHub has not already selected it.
3. Push to `main` or manually run the workflow.
4. The Next.js configuration automatically applies the repository base path during GitHub Actions builds, so a project site such as `https://USERNAME.github.io/REPOSITORY/` resolves assets and routes correctly.

## Planning documents

The finalized planning package is preserved under `docs/` and remains the product source of truth for any future full marketplace implementation.
