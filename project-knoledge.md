# SEGEN Healthcare Website — Production-Ready Project Specification

**Document status:** Approved development specification
**Working language:** English
**Architecture:** Static HTML5 + Tailwind CSS CDN + Vanilla JavaScript
**Final localization:** Performed only after English content/layout approval

This file is the single source of truth for any AI assistant or developer working on this project. Read this before making changes.

---

## 1. Project Overview

**Company:** Segen Healthcare
**Tagline:** HEALTHCARE RECRUITMENT
**Webpage heading:** SEGEN
**Production domain:** `https://segenhealthcare.de`

SEGEN Healthcare Recruitment specializes in connecting qualified nurses from India with hospitals, nursing homes, and other healthcare facilities in Germany.

### Core positioning

- More than **6 years of experience** in international healthcare recruitment.
- More than **500 nurses successfully placed** in healthcare facilities across Germany.
- Strong **Indian-German team** with an understanding of both sides of the recruitment process.
- Own **German Language Academy in India**.
- Supports candidates and employers through recruitment, selection, professional recognition, visa processing, documentation, coordination, and entry into Germany.
- Supports both individual placements and larger recruitment requirements.

### Mission

To connect the right healthcare professionals with the right employers and create successful, long-term professional relationships.

### Brand message

**Professional Nurses. Strong German Language Skills. Reliable Connections between India and Germany.**

---

## 2. About the Company / Logo

The Segen Healthcare logo represents the journey of skilled healthcare professionals from India to Germany through a clean, modern, and meaningful visual identity.

The flowing ribbon elements inside the letters are inspired by the Indian and German flag colors, symbolizing the connection between the two countries. A subtle airplane icon integrated into the design represents international mobility, career opportunities, and seamless relocation.

The bold, contemporary typography conveys trust, professionalism, and reliability, while the clean layout reflects the company's commitment to quality healthcare recruitment.

Overall, the logo communicates global healthcare recruitment, cross-border opportunities, and a trusted bridge connecting Indian talent with Germany's healthcare sector.

---

## 3. Tech Stack

| Layer | Choice |
|---|---|
| Markup | Plain HTML5 — no React/Vue |
| Styling | Tailwind CSS |
| Scripting | Vanilla JavaScript |
| Data / Backend | None — fully static site |
| Hosting | GitHub Pages |

### Hard constraints

- Tailwind is loaded via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- No Node build step, npm install, or compiled CSS pipeline is required.
- No database, backend API, server-side rendering, PHP, or Node/Express backend.
- Every page must work as a static file served by GitHub Pages.
- Keep dependencies minimal.
- Do not introduce additional frameworks or bundlers unless explicitly requested.

---

## 4. Brand Guidelines

### Typography

- **Font:** Brandon Grotesque Regular across the entire site.
- Font files are part of the project and will be present under `/assets/fonts/`.
- Always use the supplied local font files.
- Do not replace Brandon Grotesque with Google Fonts or another font unless explicitly instructed.
- Use `font-display: swap`.

Example:

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

Tailwind CDN configuration:

```html
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
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
</script>
```

Keep this configuration identical across every page.

### Logo Files

Approved logo files are already present in the project directory under `/assets/images/`.

Expected variants:

- `logo-main-white` — for dark backgrounds.
- `logo-main-blue` — for light backgrounds.

When implementation starts, inspect the directory and use the actual existing filename and extension.

Do not recreate, redraw, recolor, or substitute an approved logo. Do not use CSS filters to fake a logo variant when a purpose-built file exists.

---

## 5. Naming Conventions

Use clean, predictable, SEO-friendly, web-friendly naming.

### General rules

- Lowercase names.
- Use **kebab-case** for multi-word URLs, folders, files, IDs, and custom CSS classes.
- Hyphens are the preferred word separator.
- Avoid spaces, underscores in URLs, uppercase filenames, vague filenames, and keyword stuffing.
- JavaScript variables/functions use `camelCase`.
- JavaScript constants use `UPPER_SNAKE_CASE`.
- Git branches: `feature/short-description`.
- Commit messages use imperative mood, e.g. `Add services section`.

Examples:

- `healthcare-recruitment.jpg`
- `hero-section`
- `contact-form.js`
- `segen-healthcare-team.jpg`

### URL strategy

Use clean directory URLs rather than exposing `.html`.

Production URLs:

- Home: `/`
- About: `/about/`
- Services: `/services/`
- Contact: `/contact/`

During development, use English public slugs. Any localized production slugs will be decided only during the final localization stage.

Each public directory contains an `index.html`.

---

## 6. Pages / Site Map

The main marketing site has four pages. In addition, include Privacy Policy and Legal Notice template pages for legal/footer navigation.

| Page | Production URL | Source file |
|---|---|---|
| Home | `/` | `/index.html` |
| About | `/about/` | `/about/index.html` |
| Services | `/services/` | `/services/index.html` |
| Contact | `/contact/` | `/contact/index.html` |

Do not create additional public pages without instruction.

The employer-focused **For Healthcare Facilities** content belongs primarily within the Home and Services pages rather than requiring a separate page at this stage.

---

## 7. Language Workflow

### Development and approval stage

English is the only website language during development and review.

- Build and approve structure, layout, visible copy, CTA labels, forms, validation messages, image alt text, and SEO copy in English.
- Use `<html lang="en">` while the website contains English content.
- Do not maintain duplicate language trees during development.
- Do not mix localized copy into the English development pages.
- Do not translate the site prematurely.

### Final localization stage

Only after the English website is fully approved:

1. Translate/localize all user-facing website content.
2. Localize navigation, headings, body copy, CTAs, forms, validation messages, alt text, footer copy, and legal templates.
3. Replace development SEO titles and descriptions with approved localized SEO copy.
4. Apply the correct final HTML language attribute.
5. Confirm the final production URL/slugs before launch.
6. Verify there is no unintended development-language copy remaining.
7. Complete a final client/legal review of the Privacy Policy and Legal Notice.

Do not create a second production language unless explicitly requested.

---

## 8. Navigation Bar & Footer

Every page uses the same navigation bar and footer.

Because this is a plain static site with no templating engine:

- Copy the nav/footer markup consistently into every page.
- Do not inject shared navigation/footer markup using JavaScript `fetch()` or `innerHTML`.
- Do not use PHP, SSI, or server-side includes.
- Any nav/footer change must be applied to all four pages in the same change.
- Only the active/current-page state should differ.

### Development navigation

- Home
- About
- Services
- Contact
- Primary CTA: `Contact Us` or another approved CTA

Localized navigation labels will be handled during the final localization stage.

### Footer

Recommended footer content:

- Logo
- `HEALTHCARE RECRUITMENT`
- Short SEGEN description
- Contact details: `+91 6235 123 456` and `info@segenhealthcare.com`
- Do not display an office address unless a verified address is supplied later
- Quick links
- Privacy Policy and Legal Notice links
- Copyright
- Social media icons must remain visible; destination URLs may stay as clearly marked development placeholders until verified links are supplied by the client

Do not invent additional contact details, physical addresses, social URLs, or legal/company-registration details.

---

## 9. Approved Source Facts for Website Copy

The following facts are approved for use in page content:

- SEGEN has more than 6 years of experience in international healthcare recruitment.
- SEGEN has successfully placed more than 500 nurses in Germany.
- SEGEN recruits qualified and motivated nurses from India for healthcare institutions in Germany.
- SEGEN works with hospitals, nursing homes, care facilities, and other healthcare providers in Germany.
- SEGEN has a team consisting of Indian and German professionals.
- SEGEN operates its own German Language Academy in India.
- Professional nursing qualifications are combined with German language preparation.
- SEGEN supports candidates through interviews, recruitment, selection, professional recognition, visa processing, documentation, coordination, and entry into Germany.
- SEGEN can support both individual candidates and larger recruitment requirements.
- SEGEN cooperates with a telc examination centre in India.
- After completing B2-level German training, candidates can receive timely examination appointments, **subject to examination-centre availability**.

### Accuracy rule

Do not strengthen, exaggerate, or remove qualifications from these claims.

In particular:

- Never claim telc examination appointments are guaranteed.
- Never change `500+` or `6+ years` to a larger number unless updated information is provided.
- Do not invent certifications, partnerships, placement guarantees, success rates, processing times, salary figures, or legal claims.

---

## 10. Page Content — English Development Version

This is the approved working copy for development. It can be refined during review, but developers should not replace it with invented marketing claims.

### 10.1 Home

**SEO title (development):** `SEGEN Healthcare | Nurses from India for Germany`

**Meta description (development):** `SEGEN connects qualified nurses from India with healthcare facilities in Germany, supported by 6+ years of experience and 500+ successful placements.`

#### H1 / Hero

**SEGEN**
**Healthcare Recruitment Between India and Germany**

Qualified nurses. Strong German language preparation. Professional support throughout the journey.

SEGEN Healthcare Recruitment connects qualified and motivated nurses from India with hospitals, nursing homes, and other healthcare facilities in Germany.

With more than 6 years of experience, 500+ successful nurse placements, and a strong Indian-German team, we support employers and candidates throughout the recruitment journey.

**Primary CTA:** `Find Qualified Nurses`
**Secondary CTA:** `Explore Our Services`

#### Trust / statistics

- **6+ Years** — Experience in international healthcare recruitment.
- **500+ Nurses** — Successfully placed in healthcare facilities across Germany.
- **India + Germany** — An experienced Indian-German team supporting both sides of the process.
- **German Language Academy** — Our own academy in India supports candidates with German language preparation.

#### Intro section

**Your Partner for International Healthcare Recruitment**

We understand the requirements of healthcare employers in Germany as well as the journey of international nursing professionals.

From recruitment and candidate selection to professional recognition, visa processing, documentation, and entry into Germany, SEGEN provides structured and personal support throughout the process.

#### Services preview

**Our Services**

- **Nurse Recruitment** — We recruit qualified and motivated nurses from India for healthcare institutions in Germany.
- **Hospital & Nursing Home Placement** — We connect nurses with suitable hospitals, nursing homes, and care facilities across Germany.
- **Professional Recognition Support** — We provide guidance and support throughout the professional recognition process in Germany.
- **Visa Processing Support** — We assist candidates with required documentation and provide guidance throughout the German visa application process.
- **Documentation & Coordination** — We support candidates and employers with documentation and coordination throughout the recruitment process.
- **Personal Support** — We guide candidates from the initial recruitment stage through their journey to Germany.

**CTA:** `Explore All Services`

#### Language section

**German Language Preparation**

A key part of SEGEN's approach is continuous German language development.

Through our own German Language Academy in India, candidates are supported in developing the language skills needed for their professional journey in Germany.

SEGEN also cooperates with a telc examination centre in India. After candidates complete their B2-level German training, this can help them access timely examination appointments, subject to examination-centre availability.

By combining professional nursing qualifications with German language proficiency, we help candidates prepare for communication with patients, colleagues, and employers in Germany.

#### Employer section

**For Healthcare Facilities**

Are you looking for qualified and motivated nurses for your healthcare facility?

SEGEN supports hospitals, nursing homes, and other healthcare providers in Germany with the professional recruitment and placement of qualified nursing professionals from India.

Our strong team in India enables us to manage recruitment, candidate coordination, and preparation efficiently for both individual placements and larger recruitment requirements.

**CTA:** `Discuss Your Staffing Requirements`

#### Why SEGEN

**Why Choose SEGEN?**

More than 6 years of experience. 500+ successful nurse placements. A strong team in India and Germany.

SEGEN combines professional recruitment, German language preparation, and personal support to create reliable connections between qualified nurses from India and healthcare employers in Germany.

**CTA:** `About SEGEN`

---

### 10.2 About

**SEO title (development):** `About SEGEN | Healthcare Recruitment India to Germany`

**Meta description (development):** `Learn about SEGEN Healthcare Recruitment, an Indian-German healthcare recruitment team with 6+ years of experience and 500+ nurse placements.`

#### H1

**About SEGEN**

#### Intro

**Your Trusted Healthcare Recruitment Partner**

SEGEN Healthcare Recruitment is an experienced healthcare recruitment company specializing in connecting qualified nurses from India with healthcare institutions in Germany.

With more than 6 years of experience and 500+ successful nurse placements, we understand the needs of both healthcare employers and international nursing professionals.

#### Indian-German team

**Two Countries. One Shared Goal.**

Our team consists of Indian and German professionals, enabling us to communicate effectively with candidates and employers and understand the needs and expectations of both sides.

This cross-border structure helps us coordinate recruitment and candidate preparation between India and Germany with a clear understanding of the professional journey.

#### Language academy

**Preparation Starts in India**

A key advantage of SEGEN is our own German Language Academy in India. This allows us to identify and recruit professionally qualified nurses while supporting them in developing strong German language skills before beginning their professional journey in Germany.

By combining professional nursing qualifications with good German language proficiency, we help candidates prepare for communication with patients, colleagues, and employers and for the German healthcare environment.

#### Experience

**Experience That Connects**

- **6+ Years of Experience** — International healthcare recruitment between India and Germany.
- **500+ Successful Placements** — Nurses placed in hospitals, nursing homes, and other healthcare facilities across Germany.
- **Indian-German Team** — Professional coordination and communication across both countries.
- **Own German Language Academy** — Structured language preparation for candidates in India.

#### Mission

**Our Mission**

To connect the right healthcare professionals with the right employers and create successful, long-term professional relationships.

**SEGEN — Professional Nurses. Strong German Language Skills. Reliable Connections between India and Germany.**

---

### 10.3 Services

**SEO title (development):** `Healthcare Recruitment Services | SEGEN`

**Meta description (development):** `Explore SEGEN's nurse recruitment, placement, professional recognition, visa, documentation and candidate support services between India and Germany.`

#### H1

**Our Services**

#### Intro

**From Recruitment to Entry into Germany**

SEGEN supports nursing professionals and healthcare employers through the different stages of international healthcare recruitment.

Our Indian-German team coordinates the process between both countries and provides structured, personal support.

#### Service 1 — Nurse Recruitment

We recruit qualified and motivated nurses from India for hospitals, nursing homes, and other healthcare institutions in Germany.

#### Service 2 — Hospital & Nursing Home Placement

We connect suitable nursing professionals with hospitals, nursing homes, care facilities, and other healthcare providers across Germany.

#### Service 3 — Candidate Selection & Coordination

We support interviews, recruitment, candidate selection, and coordination between candidates and employers.

Our strong team in India allows us to support individual placements as well as larger recruitment requirements.

#### Service 4 — German Language Preparation

Through our own German Language Academy in India, we support candidates in developing German language skills for their professional journey.

Professional qualifications and language preparation are combined to help candidates prepare for communication with patients, colleagues, and employers in Germany.

#### Service 5 — Professional Recognition Process

We provide guidance and support throughout the professional recognition process in Germany.

#### Service 6 — Visa Processing Support

We assist candidates with the required documentation and provide guidance throughout the German visa application process and preparation for entry into Germany.

#### Service 7 — Documentation & Coordination

We support candidates and employers with documentation and coordination throughout the recruitment process.

#### Service 8 — Personal Support

We guide candidates from the initial recruitment stage through their journey to Germany.

#### Healthcare facilities section

**For Healthcare Facilities**

Are you looking for qualified and motivated nurses?

SEGEN supports hospitals, nursing homes, and other healthcare providers in Germany with professional recruitment and placement of qualified nursing professionals from India.

With more than 6 years of experience, a strong Indian-German team, and our own German Language Academy in India, we are positioned to manage candidate recruitment, coordination, and preparation efficiently.

With 500+ nurses already successfully placed in Germany, we have the experience and infrastructure to support both individual staffing needs and larger recruitment requirements.

**CTA:** `Discuss Your Staffing Requirements`

---

### 10.4 Contact

**SEO title (development):** `Contact SEGEN | Healthcare Recruitment`

**Meta description (development):** `Contact SEGEN Healthcare Recruitment about recruiting qualified nurses from India or beginning a nursing career journey to Germany.`

#### H1

**Contact SEGEN**

#### Intro

**Let's Talk**

Whether you are a healthcare facility looking for qualified nurses or a nursing professional interested in a career journey to Germany, our team is ready to assist.

Get in touch with SEGEN Healthcare Recruitment.

#### Employers

**For Healthcare Facilities**

Are you looking for qualified nurses from India for your hospital, nursing home, or healthcare facility?

Contact our team to discuss your current or future staffing requirements.

**CTA:** `Send an Enquiry`

#### Candidates

**For Nursing Professionals**

Are you a qualified nurse in India interested in a professional journey to Germany?

Contact our team to learn more about the recruitment and placement process.

**CTA:** `Contact Us`

#### Contact form

Recommended fields:

- Name
- Email Address
- Phone Number
- I am a: `Nursing Professional` / `Healthcare Employer`
- Subject
- Message
- Privacy consent checkbox
- Submit button: `Send Message`

#### Contact details

Use these client-supplied contact details:

- **Phone:** +91 6235 123 456
- **Email:** info@segenhealthcare.com
- **Office address:** Do not display an office address until a clear, verified address is supplied by the client.
- **Social media:** Keep the social media icons in the interface. During development, links may use clearly marked placeholders. Replace them with verified client URLs before launch.

Do not invent additional phone numbers, email addresses, addresses, opening hours, social URLs, company-registration details, or legal information.

---

### 10.5 Privacy Policy & Legal Notice Templates

> **Important:** These pages are development templates only. They must be completed with verified client information and reviewed for legal compliance before production.

Create two English development-stage template pages:

#### Privacy Policy — `/privacy-policy/`

Keep a clearly marked template with sections for:

- Data controller / responsible company details
- Contact information
- Information collected through the contact form
- Purpose and legal basis for processing
- Cookies / analytics, only if actually used
- Third-party services, only if actually used
- Data retention
- User/data-subject rights
- International data transfers, if applicable
- Contact for privacy requests
- Last updated date

Use the supplied email `info@segenhealthcare.com` and phone `+91 6235 123 456` where appropriate. Do not add an office address until one is verified. Do not invent legal claims, registration details, privacy practices, or compliance statements. Clearly label unresolved legal content as requiring client/legal review before publication.

#### Legal Notice — `/legal/`

Keep a clearly marked English template with placeholders for legally required business information, including:

- Company/legal entity name
- Authorized representative
- Registration details, if applicable
- Tax/VAT details, if applicable
- Regulatory/supervisory information, if applicable
- Phone: `+91 6235 123 456`
- Email: `info@segenhealthcare.com`
- Office/address details: pending verification; do not invent or display an unverified address
- Disclaimer/legal text requiring client/legal review

The footer on every page must link to both template pages. These templates are structural development content only and must be reviewed and completed with verified client/legal information before production.

---

## 11. SEO Guidelines

The site is fully static, so SEO metadata must be hand-coded into every page.

### Development SEO

During English development:

- Use `<html lang="en">`.
- Use the English development titles and descriptions defined in Section 10.
- These are working SEO descriptions for development and review.

### Final localization SEO

After the English site is approved, localize SEO titles, descriptions, language metadata, and final public URLs during the final localization stage.

### Required on every production page

- Unique `<title>`.
- Unique meta description.
- Canonical URL.
- Viewport tag.
- Open Graph title.
- Open Graph description.
- Open Graph image.
- Open Graph URL.
- Open Graph type.
- Twitter Card metadata where used.
- Favicon.
- One clear `<h1>`.
- Semantic HTML.
- Descriptive image `alt` text.
- Descriptive internal anchor text.

### Canonical URLs

- Home: `https://segenhealthcare.de/`
- About: `https://segenhealthcare.de/about/`
- Services: `https://segenhealthcare.de/services/`
- Contact: `https://segenhealthcare.de/contact/`

Use the non-`www` HTTPS domain consistently unless the hosting configuration is explicitly changed.

### Site-wide SEO files

Root files:

- `sitemap.xml`
- `robots.txt`

`sitemap.xml` must list all public production pages.

`robots.txt` should allow normal crawling and reference: `https://segenhealthcare.de/sitemap.xml`

### Performance

- Use `font-display: swap`.
- Compress and appropriately size images.
- Avoid unnecessarily large assets.
- Prefer SVG for suitable logos/icons when an approved SVG exists.
- Avoid unnecessary JavaScript and dependencies.

---

## 12. Project Structure

```text
/
├── index.html
├── about/
│   └── index.html
├── services/
│   └── index.html
├── contact/
│   └── index.html
├── privacy-policy/
│   └── index.html
├── legal/
│   └── index.html
├── sitemap.xml
├── robots.txt
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── fonts/
│   │   └── ...existing Brandon Grotesque font files
│   ├── images/
│   │   ├── ...existing approved SEGEN logo files
│   │   ├── favicon.ico
│   │   └── ...other images
│   └── icons/
└── PROJECT_KNOWLEDGE.md
```

Tailwind itself is not a local project file. It is loaded through the CDN script in each page.

---

## 13. Rules for Any AI / Developer

1. Read this file before making project changes.
2. Keep the site static.
3. Do not introduce a database, backend, PHP, server-side framework, React, Vue, or another frontend framework unless explicitly requested.
4. Use Tailwind CSS utilities for normal styling.
5. Keep custom CSS limited to font loading and cases Tailwind cannot reasonably handle.
6. Use Brandon Grotesque from the project files.
7. Use approved logo files already present in the project.
8. Do not recreate or alter brand logos without explicit instruction.
9. Use only the approved brand palette unless explicitly instructed otherwise.
10. Preserve `HEALTHCARE RECRUITMENT` and `SEGEN` exactly where those brand elements are required.
11. Keep navigation and footer structurally synchronized across all main pages.
12. Use lowercase kebab-case naming and clean URLs.
13. Use English for website development content.
14. Do not translate development pages to German unless explicitly requested.
15. Handle translation/localization only after the approved English site is complete.
16. Final production must be German only and use the final localized language attribute.
17. Use `https://segenhealthcare.de` as the canonical production domain.
18. Ensure production pages and metadata match the approved final localization.
19. Do not invent company facts, contact details, statistics, guarantees, certifications, partnerships, processing times, or legal claims.
20. Preserve qualifiers such as `subject to examination-centre availability`.
21. Keep the approved `6+ years` and `500+` claims unless updated information is provided.
22. Every production page must contain complete, unique SEO metadata.
23. Keep `sitemap.xml`, `robots.txt`, navigation, internal links, and canonical URLs synchronized with the public site structure.
24. Ensure images have meaningful alt text and pages use semantic HTML.
25. Keep the site responsive and usable on mobile, tablet, and desktop.
26. Maintain a clean, professional, trustworthy visual style suitable for a healthcare recruitment company.

---

## 14. Open Items / To Confirm

- [x] Phone number supplied: `+91 6235 123 456`.
- [x] Public email supplied: `info@segenhealthcare.com`.
- [ ] Office/address details: not clear/verified; do not display an address.
- [ ] Social media URLs pending from client. Keep the social icons in place with development placeholders until links are supplied.
- [ ] Exact existing font filenames/extensions in the repository.
- [ ] Exact existing logo filenames/extensions in the repository.
- [ ] Favicon and preferred social-sharing image.
- [ ] Final English copy approval.
- [ ] Final localization after English approval.
- [ ] Final localized SEO titles and meta descriptions.
- [ ] Privacy Policy and Legal Notice: template pages are required now; final legal content/details require client/legal review before production.

### Resolved

- Naming: lowercase, descriptive kebab-case with hyphens.
- Clean production URLs.
- Primary domain: `https://segenhealthcare.de`.
- English is the development language.
- German is the final production language.
- Production uses the final localized language attribute.
- Font files are present in the project.
- Approved logo files are present in the project.
- Tailwind CSS is loaded via CDN.
- No build step is required.
- Four main pages: Home, About, Services, Contact.
- Employer-focused healthcare-facility content is incorporated into Home and Services.
- Core source facts and English development copy are documented in this file.
- Static `sitemap.xml` and `robots.txt` are required.
- Phone: `+91 6235 123 456`.
- Email: `info@segenhealthcare.com`.
- No office address will be displayed until verified.
- Social media icons remain in the UI; verified URLs will be added when received from the client.
- Privacy Policy and Legal Notice template pages are part of the development structure.