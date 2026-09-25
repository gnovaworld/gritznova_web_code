# GRITZNOVA — Premium React Frontend

A production-style React + Vite frontend for GRITZNOVA, designed from the supplied visual references and company brief. It intentionally uses the visual language as inspiration without copying another company's exact branding, text, or layout.

## Included
- Responsive sticky navigation + mobile menu
- Premium dark/light engineering aesthetic with GRITZNOVA accent red
- Hero architecture visualization built in React/SVG
- Solutions, Products, Services, Technology, Why GRITZNOVA, Process, Industries, Security, About, Stats, CTA and Contact sections
- Interactive product selector
- Interactive service selector
- Scroll reveal animations and moving technology ticker
- Contact form validation + frontend success state
- Back-to-top button
- SEO metadata
- Accessible buttons, labels and semantic sections
- Supplied GRITZNOVA logo asset
- Supplied screenshots stored under `src/assets/reference-*.png` for future design reference

## Run locally

Requirements: Node.js 18+ recommended.

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Contact form
This package is frontend-only as requested. The form validates and shows a success state but does not send data to a server. Connect the submit handler in `src/App.jsx` to your backend, Formspree, Resend, EmailJS, or another approved email/API service when the backend is ready.

## Main structure

```text
src/
  assets/
    logo.png
    logo-source.png
    reference-hero.png
    reference-process.png
    reference-solutions.png
    reference-products.png
    reference-services.png
  data/
    content.js
  components/
  App.jsx
  main.jsx
  styles.css
index.html
package.json
README.md
```

The components directory is reserved for further extraction as the site grows; the current implementation keeps the first delivery easy to inspect and customize from one main React page.
