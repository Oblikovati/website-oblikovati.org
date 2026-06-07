# Oblikovati — Website

Marketing / landing site for **Oblikovati**, the open-source parametric,
feature-based mechanical CAD application. Built as a static site with
**Vite + React + Tailwind CSS** and deployable to any static host.

## Requirements

- Node.js 18+ and npm.

## Develop

```bash
npm install      # install dependencies
npm run dev      # start the Vite dev server (http://localhost:5173)
```

## Build

```bash
npm run build    # produce a static, deployable bundle in dist/
npm run preview  # serve the built dist/ locally to verify the production build
```

The `npm run build` step writes a fully static site to `dist/` with no runtime
backend — just HTML, CSS, JS and the SVG assets.

## Deploy

Deploy the contents of `dist/` to any static host:

- **GitHub Pages** — push `dist/` (or use an action) to the Pages branch.
- **Netlify** — build command `npm run build`, publish directory `dist`.
- **Cloudflare Pages** — build command `npm run build`, output directory `dist`.

No environment variables or server-side configuration are required.

## Project structure

```
.
├── index.html                 # HTML entry; fonts + meta
├── vite.config.js             # Vite + React plugin
├── tailwind.config.js         # theme tokens (colors, fonts, motion)
├── postcss.config.js          # Tailwind + Autoprefixer
├── public/                    # static assets served as-is
│   ├── favicon.svg
│   └── logo.svg
└── src/
    ├── main.jsx               # React entry
    ├── App.jsx                # page composition + skip link
    ├── index.css              # Tailwind layers + base/component styles
    ├── components/            # one component per section / primitive
    └── data/                  # site links, feature/FAQ copy
```

## License

This website's source is provided under **Apache-2.0** (see `LICENSE`).

The Oblikovati application is licensed under GPL-2.0; its public automation API
is licensed under Apache-2.0.

> Autodesk® Inventor®, SolidWorks®, and Siemens NX® are trademarks of their
> respective owners and are referenced for identification only. Oblikovati is
> not affiliated with or endorsed by them.
