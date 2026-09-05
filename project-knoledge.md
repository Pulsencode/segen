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
| Scripting | Vanilla JavaScript |
| Data / Backend | None — fully static site |
| Form handling | Third-party form endpoint (see 3.3) |
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

### 3.2 Navigation/footer templating (optional)

Nav and footer markup is copied by hand into every page (Section 8). For a site that will be edited often, **Eleventy (11ty)** is a reasonable option: it supports includes/partials while still outputting plain static HTML — no server, no database, same GitHub Pages deployment. The manual-copy approach is equally valid for a small, infrequently-edited site.

### 3.3 Contact form backend

Static hosting has no server for the form to submit to. Use a third-party form endpoint — **Formspree**, **Getform**, or **Web3Forms** (free tiers available) — via a simple `action` URL, no backend code required. Pick a provider before building the Contact page markup.

### Hard constraints

- No database, backend API, server-side rendering, PHP, or Node/Express backend.
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
| About | `/about/` | `/about/index.html` |
| Services | `/services/` | `/services/index.html` |
| Contact | `/contact/` | `/contact/index.html` |
| Privacy Policy | `/privacy-policy/` | `/privacy-policy/index.html` |
| Legal Notice | `/legal/` | `/legal/index.html` |

No additional public pages without instruction. Employer-focused "For Healthcare Facilities" content lives within Home and Services, not a separate page.

---

## 7. Language Workflow

**Development:** English only. `<html lang="en">`. No duplicate language trees, no premature translation.

**Final localization (after English approval):** translate all user-facing content and legal templates; replace SEO titles/descriptions with localized copy; set the final HTML `lang` attribute; confirm final slugs; verify no leftover English copy; complete client/legal review of Privacy Policy and Legal Notice.

Do not create a second production language unless explicitly requested. See Section 11.3 for `hreflang` planning ahead of localization.

---

## 8. Navigation Bar & Footer

Same nav/footer markup copied into every page (no JS `fetch()`/`innerHTML` injection, no PHP/SSI). Any change is applied to all pages together; only the active-page state differs. See Section 3.2 for an optional templating approach.

**Nav:** Home / About / Services / Contact, primary CTA `Contact Us`.

**Footer:** Logo, `HEALTHCARE RECRUITMENT`, short description, phone `+91 6235 123 456`, email `info@segenhealthcare.com`, quick links, Privacy Policy + Legal Notice links, copyright, social icons (placeholder URLs until the client supplies real ones). No office address until verified.

Do not invent contact details, addresses, social URLs, or legal/registration details.

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

Recruitment is a trust-driven category. These elements are recommended alongside the core pages:

- **Testimonials / success stories:** 2–3 short, anonymized quotes from placed nurses or partner facilities, placed on Home and/or About. Quotes must be real and client-supplied — keep as a clearly marked placeholder until they're provided; never fabricate them.
- **WhatsApp contact button:** for an India-facing audience this typically outperforms the contact form for first-touch inquiries. Add as a persistent floating button or on the Contact page, using the approved phone number (`+91 6235 123 456`), pending client confirmation that WhatsApp is monitored on that number.
- **Process timeline graphic:** a simple visual — Recruitment → Language Training → Recognition → Visa → Placement — on the Services page, replacing or accompanying the flat list of 8 services (Section 11.2) to make the multi-step journey easier to scan.

These present the approved facts more visually; they don't introduce new claims.

---

## 11. Page Content — English Development Version

Full section-by-section copy (hero text, CTAs, service descriptions) lives in the actual page files. This spec defines structure and reference points rather than duplicating every paragraph, so the spec and the live copy don't drift out of sync.

- **Home:** Hero + stats (Section 9 facts) → Services preview (Section 11.2) → Language section → "For Healthcare Facilities" employer section → Why SEGEN.
- **About:** Intro → Indian-German team → Language academy → Experience stats (Section 9 facts) → Mission.
- **Services:** Intro → 8 services (Section 11.2) → "For Healthcare Facilities" section. Consider the process-timeline graphic (Section 10) here instead of, or alongside, the flat list.
- **Contact:** Intro → Employer CTA (`Send an Enquiry`) → Candidate CTA (`Contact Us`) → form (Name, Email, Phone, "I am a: Nursing Professional / Healthcare Employer", Subject, Message, privacy consent, `Send Message`) → contact details.

SEO titles/descriptions per page (development stage):

| Page | Title | Description |
|---|---|---|
| Home | SEGEN Healthcare \| Nurses from India for Germany | SEGEN connects qualified nurses from India with healthcare facilities in Germany, supported by 6+ years of experience and 500+ successful placements. |
| About | About SEGEN \| Healthcare Recruitment India to Germany | Learn about SEGEN Healthcare Recruitment, an Indian-German healthcare recruitment team with 6+ years of experience and 500+ nurse placements. |
| Services | Healthcare Recruitment Services \| SEGEN | Explore SEGEN's nurse recruitment, placement, professional recognition, visa, documentation and candidate support services between India and Germany. |
| Contact | Contact SEGEN \| Healthcare Recruitment | Contact SEGEN Healthcare Recruitment about recruiting qualified nurses from India or beginning a nursing career journey to Germany. |

### 11.1 Privacy Policy & Legal Notice templates

Development-stage English templates only, to be completed with verified client/legal information before production.

**Privacy Policy (`/privacy-policy/`):** data controller details, contact info, data collected via the contact form, purpose/legal basis, cookies/analytics (only if used), third-party services (only if used), retention, data-subject rights, **international data transfers — must explicitly address that candidate data may move between India and Germany, a GDPR trigger requiring its own clause, not boilerplate**, privacy contact, last-updated date.

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

### 11.3 Structured data and hreflang

- **Schema.org JSON-LD** (`Organization` + `LocalBusiness` types) on Home, using only the approved facts (name, description, phone, email — no address until verified). Helps search engines parse the business correctly ahead of ranking for German queries.
- **`hreflang` planning:** decide the URL pattern for the German version now (e.g. `/de/` subdirectory vs. root-domain swap) so the English site's URL structure doesn't need reworking once localization happens. Add `hreflang` tags once both languages exist.

### Performance

`font-display: swap`; compressed/appropriately sized images; SVG for logos/icons where available; avoid unnecessary JS/dependencies; the Tailwind CLI build (Section 3.1) for a small CSS payload.

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
├── css/
│   ├── input.css        # Tailwind directives, compiled by the CLI
│   └── styles.css       # generated, purged, minified output
├── js/
│   └── main.js
├── assets/
│   ├── fonts/            # Brandon Grotesque files
│   ├── images/           # approved logos, favicon, other images
│   └── icons/
├── tailwind.config.js
└── PROJECT_KNOWLEDGE.md
```

---

## 14. Rules for Any AI / Developer

1. Read this file before making project changes.
2. Keep the site static; no database/backend/PHP/React/Vue unless explicitly requested.
3. Build CSS via the Tailwind CLI (Section 3.1), not the CDN script.
4. Keep custom CSS limited to font loading and cases Tailwind can't handle.
5. Use Brandon Grotesque and the approved logo files from the project; never recreate or alter them.
6. Use only the approved brand palette unless instructed otherwise.
7. Preserve `HEALTHCARE RECRUITMENT` and `SEGEN` exactly where required.
8. Keep navigation and footer structurally synchronized across all pages.
9. Use lowercase kebab-case naming and clean URLs.
10. English only during development; translate only after explicit approval, then only into German for production.
11. Use `https://segenhealthcare.de` as the canonical domain.
12. Never invent facts, contact details, stats, guarantees, certifications, partnerships, processing times, or legal claims. Preserve qualifiers like "subject to examination-centre availability." Keep `6+ years` / `500+` unless updated.
13. Every production page needs complete, unique SEO metadata plus the JSON-LD block on Home (Section 11.3).
14. Keep `sitemap.xml`, `robots.txt`, nav, internal links, and canonical URLs in sync with the site structure.
15. Meaningful alt text, semantic HTML, responsive layout across mobile/tablet/desktop.
16. Any testimonials (Section 10) must be real, client-supplied quotes — never fabricated.