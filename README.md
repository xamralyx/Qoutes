# DailySpark Quotes

A lightweight Vite + React app to shuffle, favorite, and share inspiring quotes. Deployed to GitHub Pages.

## Features
- Shuffle through a curated list of quotes
- Copy or share using the Web Share API with fallbacks
- Simple favorites and category components
- Offline support via Service Worker (base-path aware)

## Quick start

```bash
git clone https://github.com/xamralyx/Qoutes.git
cd Qoutes
npm install
npm run dev
```

## Testing

```bash
npm test -- --run
```

## Build

```bash
npm run build
```

## Deployment
This repo deploys via GitHub Actions to GitHub Pages. Vite `base` is set to `/Qoutes/` in `vite.config.js`.

Live site (once Pages is enabled): https://xamralyx.github.io/Qoutes/

## Accessibility
- Copy/Share actions announce status via an aria-live region.
- Buttons include proper `aria-pressed` and labels.

## Security & Privacy
- No tracking runs by default. If you enable Plausible/GA, see `src/utils/analytics.js`.
