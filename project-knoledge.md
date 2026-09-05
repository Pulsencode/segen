# SEGEN Healthcare Website — Project Specification

**Working language:** English
**Architecture:** Static HTML5 + Tailwind CSS (CLI build) + Vanilla JavaScript
**Final localization:** Performed only after English content/layout approval

This file is the single source of truth for any AI assistant or developer working on this project. Read this before making changes.

---

## 1. Project Overview

**Company:** Segen Healthcare
**Tagline:** HEALTHCARE RECRUITMENT
**Webpage heading:** SEGEN
**Production domain:** `https://segenhealthcare.de`

SEGEN Healthcare Recruitment connects qualified nurses from India with hospitals, nursing homes, and other healthcare facilities in Germany.

### Core positioning

Treat these as the canonical facts about the company. Reference them where needed; don't restate them in full paragraph form on every page.

- 6+ years of experience in international healthcare recruitment.
- 500+ nurses successfully placed in Germany.
- Indian-German team covering both sides of the process.
- Own German Language Academy in India.
- Supports recruitment, selection, professional recognition, visa processing, documentation, coordination, and entry into Germany.
- Supports individual placements and larger recruitment requirements.

### Mission

To connect the right healthcare professionals with the right employers and create successful, long-term professional relationships.

### Brand message

**Professional Nurses. Strong German Language Skills. Reliable Connections between India and Germany.**

---

## 2. Logo

The logo's flowing ribbon elements reference the Indian and German flag colors, symbolizing the connection between the two countries; an airplane icon signals international mobility and relocation. Typography and layout are meant to convey trust and professionalism.

Do not recreate, redraw, recolor, or substitute the approved logo files, and don't fake a variant with CSS filters when a purpose-built file exists.

---

## 3. Tech Stack

| Layer | Choice |
|---|---|
| Markup | Plain HTML5 — no React/Vue |
| Styling | Tailwind CSS, compiled via the **Tailwind CLI** |
| Scripting | Vanilla JavaScript — shared nav/footer injection and the WhatsApp button widget (see Section 8) |
| Data / Backend | None — fully static site, no contact form |
| Hosting | GitHub Pages |

### 3.1 Tailwind build

Tailwind CSS is compiled with the **Tailwind CLI** into a single purged, minified stylesheet — not loaded via the runtime CDN script. This keeps the CSS payload small (better load time and Lighthouse/SEO scores) while remaining fully static: the CLI only runs locally or in CI to produce `css/styles.css`; GitHub Pages serves plain files with no Node runtime in production.

```
npx tailwindcss -i css/input.css -o css/styles.css --minify
```

```html
<link rel="stylesheet" href="/css/styles.css">
```

`tailwind.config.js` defines the brand color and font extensions (Section 4).

### Hard constraints

- No database, backend API, server-side rendering, PHP, or Node/Express backend.
- No contact form and no form backend/endpoint of any kind — see Section 8 for the WhatsApp alternative.
- Every page must work as a static file served by GitHub Pages.
- Keep dependencies minimal; no additional frameworks or bundlers beyond what's specified here unless explicitly requested.

---

## 4. Brand Guidelines

### Typography

- **Font:** Brandon Grotesque Regular, from local files under `/assets/fonts/`. Do not substitute with Google Fonts. Use `font-display: swap`.

```css
@font-face {
  font-family: 'Brandon Grotesque';
  src: url('/assets/fonts/BrandonGrotesque-Regular.woff2') format('woff2'),
       url('/assets/fonts/BrandonGrotesque-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

### Color Palette

| Color | Hex | Suggested usage |
|---|---|---|
| Navy | `#031A38` | Primary text, dark backgrounds, header/footer |
| Orange | `#EA6422` | Primary CTA, accents, highlights |
| Green | `#027B3E` | Secondary accent, success states |
| Yellow | `#F8BA12` | Highlights and attention elements |
| Red | `#C91E24` | Alerts, secondary emphasis |

`tailwind.config.js`:

```js
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        'segen-navy': '#031A38',
        'segen-orange': '#EA6422',
        'segen-green': '#027B3E',
        'segen-yellow': '#F8BA12',
        'segen-red': '#C91E24',
      },
      fontFamily: {
        brandon: ['"Brandon Grotesque"', 'sans-serif'],
      },
    },
  },
}
```

### Logo Files

Approved variants under `/assets/images/`: `logo-main-white` (dark backgrounds), `logo-main-blue` (light backgrounds). Inspect the directory for actual filenames/extensions before use.

---

## 5. Naming Conventions

- Lowercase, kebab-case for URLs/folders/files/IDs/CSS classes.
- `camelCase` for JS variables/functions, `UPPER_SNAKE_CASE` for JS constants.
- Git branches: `feature/short-description`. Commits: imperative mood (e.g. `Add services section`).
- Clean directory URLs, no `.html` exposed: `/`, `/about/`, `/services/`, `/contact/`, each with its own `index.html`.
- English slugs during development; localized slugs decided at final localization.

---

## 6. Pages / Site Map

| Page | Production URL | Source file |
|---|---|---|
| Home | `/` | `/index.html` |
| About | `/about/` | `/about.html` |
| Services | `/services/` | `/services/index.html` |
| Contact | `/contact/` | `/contact/index.html` |
| Privacy Policy | `/privacy-policy/` | `/privacy-policy/index.html` |
| Legal Notice | `/legal/` | `/legal/index.html` |

> **Flag:** the About source file (`/about.html`) doesn't follow the directory + `index.html` pattern used by every other page, and Section 5 requires clean URLs via a directory `index.html`. Confirm whether this should be `/about/index.html` instead, or whether a redirect/rewrite is planned for `/about/`.

No additional public pages without instruction. Employer-focused "For Healthcare Facilities" content lives within Home and Services, not a separate page.

---

## 7. Language Workflow

**Development:** English only. `<html lang="en">`. No duplicate language trees, no premature translation.

**Final localization (after English approval):** translate all user-facing content and legal templates; replace SEO titles/descriptions with localized copy; set the final HTML `lang` attribute; confirm final slugs; verify no leftover English copy; complete client/legal review of Privacy Policy and Legal Notice.

Do not create a second production language unless explicitly requested. See Section 12.3 for `hreflang` planning ahead of localization.

---

## 8. Navigation, Footer & WhatsApp Button (site-wide)

The nav bar, footer, and the floating WhatsApp button are shared across every page and are injected via vanilla JavaScript rather than copy-pasted into each HTML file.

### 8.1 Shared nav/footer via JS partials

- Nav and footer markup live once, in `partials/nav.html` and `partials/footer.html`.
- Every page includes empty mount points and a shared script:

```html
<div id="site-nav"></div>
<!-- page content -->
<div id="site-footer"></div>
<script src="/js/include-partials.js"></script>
```

- `js/include-partials.js` fetches each partial and injects it via `innerHTML` into its mount point, then sets the active nav-link state for the current page (e.g. by comparing `location.pathname`).
- This still counts as "fully static" — the partials are plain static HTML files served by GitHub Pages, and the fetch happens client-side with no backend involved.
- **Local development caveat:** `fetch()` of local files fails when a page is opened directly via `file://`. Run a simple local static server when developing (e.g. `npx serve` or `python -m http.server`) so the partials load correctly.
- Any nav/footer content change is made once, in the partial files, and applies to every page automatically. Only the active-page highlight differs per page, handled by the script, not by manual edits.

**Nav:** Home / About / Services / Contact, primary CTA `Contact Us`.

**Footer:** Logo, `HEALTHCARE RECRUITMENT`, short description, phone `+91 6235 123 456`, email `info@segenhealthcare.com`, quick links, Privacy Policy + Legal Notice links, copyright, social icons (placeholder URLs until the client supplies real ones). No office address until verified.

Do not invent contact details, addresses, social URLs, or legal/registration details.

### 8.2 Floating WhatsApp button

A persistent floating WhatsApp button appears on every page, bottom-right corner, and is the site's primary direct-contact mechanism (there is no contact form — see Section 3).

- Implemented as part of the same shared footer partial (or its own small partial/script) so it appears everywhere automatically, consistent with 8.1.
- Fixed position, bottom-right, standard WhatsApp icon, using the approved phone number `+91 6235 123 456` via a `https://wa.me/916235123456` link.
- Pending client confirmation that WhatsApp is actively monitored on that number before launch.
- Should remain visible but not obstruct page content on mobile (e.g. respect safe-area insets, don't overlap footer CTAs).

---

## 9. Approved Source Facts

- 6+ years of experience in international healthcare recruitment.
- 500+ nurses successfully placed in Germany.
- Recruits qualified, motivated nurses from India for hospitals, nursing homes, and other healthcare providers in Germany.
- Indian-German team.
- Own German Language Academy in India, combining nursing qualifications with German language preparation.
- Supports interviews, recruitment, selection, professional recognition, visa processing, documentation, coordination, and entry into Germany.
- Supports individual candidates and larger recruitment requirements.
- Cooperates with a telc examination centre in India; after B2-level training, candidates can get timely exam appointments **subject to examination-centre availability** (never guaranteed).

**Accuracy rule:** never strengthen, exaggerate, or drop these qualifiers. Never raise `500+` or `6+ years` without updated information. Don't invent certifications, partnerships, guarantees, success rates, processing times, salary figures, or legal claims.

---

## 10. Conversion & Trust Elements

Recruitment is a trust-driven category. These elements are recommended alongside the core pages (the WhatsApp button itself is a decided, site-wide requirement — see Section 8.2):

- **Testimonials / success stories:** 2–3 short, anonymized quotes from placed nurses or partner facilities, placed on Home and/or About. Quotes must be real and client-supplied — keep as a clearly marked placeholder until they're provided; never fabricate them.
- **Process timeline graphic:** a simple visual — Recruitment → Language Training → Recognition → Visa → Placement — on the Services page, replacing or accompanying the flat list of 8 services (Section 11.2) to make the multi-step journey easier to scan.
- **Geometric background accents:** subtle low-opacity SVG shapes (circles, diagonal lines, ribbon-inspired forms echoing the logo) behind the hero and select section breaks, in brand colors — used sparingly so they don't compete with copy.
- **Icon-and-text card row below the hero:** a compact 4-card strip restating the Section 9 stats (years of experience, nurses placed, Indian-German team, language academy) with a Tabler-style line icon per card, instead of a plain stats paragraph.

These present the approved facts more visually; they don't introduce new claims.

---

## 11. Page Content — English Development Version

Full section-by-section copy (hero text, CTAs, service descriptions) lives in the actual page files. This spec defines structure and reference points rather than duplicating every paragraph, so the spec and the live copy don't drift out of sync.

- **Home:** Hero (with geometric background accent, Section 10) + icon-and-text stats card row (Section 9 facts, Section 10) → Services preview (Section 11.2) → Language section → "For Healthcare Facilities" employer section → Why SEGEN.
- **About:** Intro → Indian-German team → Language academy → Experience stats (Section 9 facts) → Mission.
- **Services:** Intro → 8 services (Section 11.2) → "For Healthcare Facilities" section. Consider the process-timeline graphic (Section 10) here instead of, or alongside, the flat list.
- **Contact:** Intro → Employer CTA (`Send an Enquiry` — opens WhatsApp, see Section 8.2) → Candidate CTA (`Contact Us` — opens WhatsApp) → contact details (phone, email). No contact form on this page; the floating WhatsApp button (site-wide) and the direct phone/email details are the only contact paths.

SEO titles/descriptions per page (development stage):

| Page | Title | Description |
|---|---|---|
| Home | SEGEN Healthcare \| Nurses from India for Germany | SEGEN connects qualified nurses from India with healthcare facilities in Germany, supported by 6+ years of experience and 500+ successful placements. |
| About | About SEGEN \| Healthcare Recruitment India to Germany | Learn about SEGEN Healthcare Recruitment, an Indian-German healthcare recruitment team with 6+ years of experience and 500+ nurse placements. |
| Services | Healthcare Recruitment Services \| SEGEN | Explore SEGEN's nurse recruitment, placement, professional recognition, visa, documentation and candidate support services between India and Germany. |
| Contact | Contact SEGEN \| Healthcare Recruitment | Contact SEGEN Healthcare Recruitment about recruiting qualified nurses from India or beginning a nursing career journey to Germany. |

### 11.1 Privacy Policy & Legal Notice templates

Development-stage English templates only, to be completed with verified client/legal information before production.

**Privacy Policy (`/privacy-policy/`):** data controller details, contact info, purpose/legal basis for any data processing, cookies/analytics (only if used), third-party services (only if used — note that the WhatsApp button hands off to Meta/WhatsApp, which processes messages under its own privacy terms; this should be disclosed even though there's no on-site form), retention, data-subject rights, **international data transfers — must explicitly address that candidate data may move between India and Germany, a GDPR trigger requiring its own clause, not boilerplate**, privacy contact, last-updated date. There is no contact-form data-collection clause needed, since the site has no form.

**Legal Notice (`/legal/`):** legal entity name, authorized representative, registration/tax details (if applicable), regulatory info (if applicable), phone/email (approved values), address (pending verification — do not display), disclaimer requiring legal review.

Footer links to both pages from every page.

### 11.2 Services list

1. Nurse Recruitment
2. Hospital & Nursing Home Placement
3. Candidate Selection & Coordination
4. German Language Preparation
5. Professional Recognition Process
6. Visa Processing Support
7. Documentation & Coordination
8. Personal Support

This is the canonical list — reference it rather than restating full descriptions in multiple places.

---

## 12. SEO Guidelines

### Required on every production page

Unique `<title>` and meta description, canonical URL, viewport tag, Open Graph title/description/image/URL/type, Twitter Card metadata where used, favicon, one `<h1>`, semantic HTML, descriptive alt text, descriptive internal anchor text.

### Canonical URLs

`https://segenhealthcare.de/`, `/about/`, `/services/`, `/contact/` — non-`www` HTTPS consistently.

### Site-wide files

`sitemap.xml` (lists all public pages) and `robots.txt` (allows normal crawling, references the sitemap).

### 12.1 Structured data and hreflang

- **Schema.org JSON-LD** (`Organization` + `LocalBusiness` types) on Home, using only the approved facts (name, description, phone, email — no address until verified). Helps search engines parse the business correctly ahead of ranking for German queries.
- **`hreflang` planning:** decide the URL pattern for the German version now (e.g. `/de/` subdirectory vs. root-domain swap) so the English site's URL structure doesn't need reworking once localization happens. Add `hreflang` tags once both languages exist.

### Performance

`font-display: swap`; compressed/appropriately sized images; SVG for logos/icons where available (including geometric background accents, Section 10 — SVG keeps them lightweight); avoid unnecessary JS/dependencies beyond the shared-partials and WhatsApp-button scripts (Section 8); the Tailwind CLI build (Section 3.1) for a small CSS payload.

**SEO note on JS-injected nav/footer:** since nav and footer links are injected client-side, verify with a crawl tool (or GitHub Pages' rendering) that search engines can still discover internal links. If this becomes a concern, consider server-rendering the nav/footer HTML at build time instead of runtime `fetch()`, while keeping the single-source-of-truth partial files.

---

## 13. Project Structure

```text
/
├── index.html
├── about/index.html
├── services/index.html
├── contact/index.html
├── privacy-policy/index.html
├── legal/index.html
├── sitemap.xml
├── robots.txt
├── partials/
│   ├── nav.html
│   └── footer.html          # includes the floating WhatsApp button markup
├── css/
│   ├── input.css        # Tailwind directives, compiled by the CLI
│   └── styles.css       # generated, purged, minified output
├── js/
│   ├── include-partials.js  # fetches & injects nav/footer, sets active link
│   └── main.js
├── assets/
│   ├── fonts/            # Brandon Grotesque files
│   ├── images/           # approved logos, favicon, other images
│   └── icons/             # WhatsApp icon, etc.
├── tailwind.config.js
└── PROJECT_KNOWLEDGE.md
```

> Note: this tree still shows `about/index.html`, matching the clean-URL convention in Section 5 — see the flag in Section 6 about `/about.html`.

---

## 14. Rules for Any AI / Developer

1. Read this file before making project changes.
2. Keep the site static; no database/backend/PHP/React/Vue unless explicitly requested.
3. No contact form, anywhere on the site — the floating WhatsApp button (Section 8.2) and direct phone/email are the only contact paths.
4. Build CSS via the Tailwind CLI (Section 3.1), not the CDN script.
5. Keep custom CSS limited to font loading and cases Tailwind can't handle.
6. Use Brandon Grotesque and the approved logo files from the project; never recreate or alter them.
7. Use only the approved brand palette unless instructed otherwise.
8. Preserve `HEALTHCARE RECRUITMENT` and `SEGEN` exactly where required.
9. Nav and footer (including the WhatsApp button) live once in `partials/` and are injected via `js/include-partials.js` on every page (Section 8.1) — never copy-paste nav/footer markup into individual page files, and never let a page's nav/footer drift from the shared partials.
10. Use lowercase kebab-case naming and clean URLs.
11. English only during development; translate only after explicit approval, then only into German for production.
12. Use `https://segenhealthcare.de` as the canonical domain.
13. Never invent facts, contact details, stats, guarantees, certifications, partnerships, processing times, or legal claims. Preserve qualifiers like "subject to examination-centre availability." Keep `6+ years` / `500+` unless updated.
14. Every production page needs complete, unique SEO metadata plus the JSON-LD block on Home (Section 12.1).
15. Keep `sitemap.xml`, `robots.txt`, nav, internal links, and canonical URLs in sync with the site structure.
16. Meaningful alt text, semantic HTML, responsive layout across mobile/tablet/desktop.
17. Any testimonials (Section 10) must be real, client-supplied quotes — never fabricated.
18. Geometric background accents (Section 10) stay subtle and SVG-based — used on the hero and select section breaks, not on every section.
19. The WhatsApp button (Section 8.2) must not launch until the client confirms the number is monitored; use a clearly marked placeholder state if needed before that confirmation.