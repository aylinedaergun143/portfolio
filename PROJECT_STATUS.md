# Project Status

## Runtime and completed routes

- The current implementation is a dependency-free static site in `dist/`; there is no active Next.js/Tailwind source tree.
- Serve `dist/` as the web root at `http://127.0.0.1:3000`. Never open generated HTML through `file://`; root-relative styles, assets, and routes require an HTTP server.
- Completed routes:
  - `/`
  - `/about/`
  - `/work/commencium/`
  - `/work/stitch/`
  - `/work/pingu/`
  - `/work/pinty/`
  - `/work/bank-of-trust/`

## Homepage

- Structure: shared header/navigation, editorial hero, About and Selected Experience overview, Selected Work, and contact/footer.
- Selected Work order is Commencium, Stitch, Pingu, Pinty, Bank of Trust. Each image and title links to its internal case-study route.
- Project cards reuse the hero asset from the corresponding case study. Their existing 4:3 frames use `object-fit: cover` with project-specific desktop/mobile positioning so every frame remains full bleed.

## Case studies

- All pages use the shared case-study shell: header, hero, sticky section navigation, editorial content sections, next-project navigation, and footer.
- **Commencium:** Goals, Problem, Process, Research, Insights, Ideation, Development, Testing, UI System, Mobile, Desktop, Prototype, AI Tools. The final prototype area contains only centered Mobile App Prototype and Desktop App Prototype headings with equal clickable QR codes; it uses the exact hero gradient, forms two columns on desktop, and stacks on mobile.
- **Stitch:** Problem Statement, System, Process, Insights, Ideation, Development, UI System, Mobile, Tracker, Scenarios, Emergency, Video & Prototype. The final section contains only equal clickable Video and Prototype QR codes on `#D3EAFF`, side by side on desktop and stacked on mobile.
- **Pingu:** Problem Statement, Goals, Process, Insights, Ideation, Wireframes, UI System, Final UI, Video. Final UI has populated Mobile App Features and Smartwatch App Features in matching editorial feature grids. The centered Video heading and clickable QR share one axis on `#DDE8FF`.
- **Pinty:** Problem Statement, Goals, Process, Research, Ideation, Wireframes, UI System, Final UI, Video & Prototype. Ideation and UI System use seamless horizontal image loops. Final UI has five editorial mobile features. The final two-QR section uses `#EAFDB5`.
- **Bank of Trust:** Process, Literature, Key Features, Benchmark, Research, Persona, Architecture, Main Features, Dashboard, Invest, Finances, Transfer, Pay & Share. Persona contains only the `Persona` heading and the large responsive `persona1.jpg` visual.

## Reusable implementation

- `dist/styles/tokens.css`: shared color, type, spacing, radius, and layout variables.
- `dist/styles/layout.css`: shared header, navigation, containers, homepage, Selected Work, and footer rules.
- `dist/styles/case-study.css`: common case-study hero, sticky navigation, section introductions, editorial layouts, feature patterns, and next-project treatment.
- `dist/styles/scroll-reveal.css` plus `dist/scripts/scroll-reveal.js`: shared one-time reveal behavior.
- Project-only adjustments belong in `commencium.css`, `stitch.css`, `pingu.css`, `pinty.css`, or `bank-of-trust.css`; avoid changing shared CSS for a single-project request.
- Reused HTML patterns include `.container`, `.case-hero`, `.case-nav`, `.case-section`, `.section-intro`, editorial feature grids/cards, marquee tracks, QR closing panels, and `.next-project`.
- `dist/scripts/stitch-scenario.js` is specific to Stitch's scenario interaction.

## Assets

- Production assets live under `dist/projects/<project-slug>/` for `commencium`, `stitch`, `pingu`, `pinty`, and `bank-of-trust`.
- Root folders such as `pingu visuals/`, `pinty visuals/`, and `bank of trust visuals/` are source/drop folders. Copy approved assets into the matching production folder before referencing them from a page.
- Preserve exact filenames and case. Paths in production HTML should be web paths such as `/projects/pingu/...`, never local filesystem paths.

## Styling and interaction conventions

- Keep the shared editorial typography, white content backgrounds, generous vertical spacing, and responsive container widths unless a section has an established project accent background.
- Case-study mockups use fixed visual stages with `object-fit: contain` to preserve full artwork and normalize apparent size. Homepage project heroes use `object-fit: cover` to fill their frames.
- Editorial feature grids use three columns on desktop, two on tablet, and one on mobile unless a section already has a more specific approved arrangement.
- Scroll reveals fade upward by roughly 16px over about 600ms and run once. `prefers-reduced-motion` removes reveal and marquee motion.
- Seamless image loops duplicate the track, keep consistent gaps, pause on desktop hover, preserve image aspect ratios, and remain manually scrollable without animation when reduced motion is requested.
- Clickable QR codes preserve a 1:1 ratio, remain large enough to scan, open external destinations in a new tab, and use `rel="noopener noreferrer"`. Raw destination URLs are not shown in the UI.
- Keep project-specific edits scoped to the requested section and verify via the HTTP route at desktop, tablet, and mobile widths.
