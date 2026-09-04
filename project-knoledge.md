# Project Knowledge --- Segen Healthcare Website

This file is the single source of truth for any AI assistant or
developer working on this project. Read this before making changes.

------------------------------------------------------------------------

## 1. Project Overview

**Company:** Segen Healthcare\
**Tagline:** HEALTHCARE PERSONALVERMITTLUNG\
**Webpage heading:** SEGEN\
**Production domain:** `https://segenhealthcare.de`

SEGEN Healthcare Personalvermittlung specializes in connecting qualified
nurses from India with hospitals, nursing homes, and other healthcare
facilities in Germany.

### Core positioning

-   More than **6 years of experience** in international healthcare
    recruitment.
-   More than **500 nurses successfully placed** in healthcare
    facilities across Germany.
-   Strong **Indian-German team** with an understanding of both sides of
    the recruitment process.
-   Own **German Language Academy in India**.
-   Supports candidates and employers through recruitment, selection,
    professional recognition (`Anerkennung`), visa processing,
    documentation, coordination, and entry into Germany.
-   Supports both individual placements and larger recruitment
    requirements.

### Mission

To connect the right healthcare professionals with the right employers
and create successful, long-term professional relationships.

### Brand message

**Professional Nurses. Strong German Language Skills. Reliable
Connections between India and Germany.**

------------------------------------------------------------------------

## 2. About the Company / Logo

The Segen Healthcare logo represents the journey of skilled healthcare
professionals from India to Germany through a clean, modern, and
meaningful visual identity.

The flowing ribbon elements inside the letters are inspired by the
Indian and German flag colors, symbolizing the connection between the
two countries. A subtle airplane icon integrated into the design
represents international mobility, career opportunities, and seamless
relocation.

The bold, contemporary typography conveys trust, professionalism, and
reliability, while the clean layout reflects the company's commitment to
quality healthcare recruitment.

Overall, the logo communicates global healthcare recruitment,
cross-border opportunities, and a trusted bridge connecting Indian
talent with Germany's healthcare sector.

------------------------------------------------------------------------

## 3. Tech Stack

  Layer            Choice
  ---------------- ------------------------------
  Markup           Plain HTML5 --- no React/Vue
  Styling          Tailwind CSS
  Scripting        Vanilla JavaScript
  Data / Backend   None --- fully static site
  Hosting          GitHub Pages

### Hard constraints

-   Tailwind is loaded via CDN:
    `<script src="https://cdn.tailwindcss.com"></script>`
-   No Node build step, npm install, or compiled CSS pipeline is
    required.
-   No database, backend API, server-side rendering, PHP, or
    Node/Express backend.
-   Every page must work as a static file served by GitHub Pages.
-   Keep dependencies minimal.
-   Do not introduce additional frameworks or bundlers unless explicitly
    requested.

------------------------------------------------------------------------

## 4. Brand Guidelines

### Typography

-   **Font:** Brandon Grotesque Regular across the entire site.
-   Font files are part of the project and will be present under
    `/assets/fonts/`.
-   Always use the supplied local font files.
-   Do not replace Brandon Grotesque with Google Fonts or another font
    unless explicitly instructed.
-   Use `font-display: swap`.

Example:

``` css
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

  Color    Hex         Suggested usage
  -------- ----------- -----------------------------------------------
  Navy     `#031A38`   Primary text, dark backgrounds, header/footer
  Orange   `#EA6422`   Primary CTA, accents, highlights
  Green    `#027B3E`   Secondary accent, success states
  Yellow   `#F8BA12`   Highlights and attention elements
  Red      `#C91E24`   Alerts, secondary emphasis

Tailwind CDN configuration:

``` html
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

Approved logo files are already present in the project directory under
`/assets/images/`.

Expected variants:

-   `logo-main-white` --- for dark backgrounds.
-   `logo-main-blue` --- for light backgrounds.

When implementation starts, inspect the directory and use the actual
existing filename and extension.

Do not recreate, redraw, recolor, or substitute an approved logo. Do not
use CSS filters to fake a logo variant when a purpose-built file exists.

------------------------------------------------------------------------

## 5. Naming Conventions

Use clean, predictable, SEO-friendly, web-friendly naming.

### General rules

-   Lowercase names.
-   Use **kebab-case** for multi-word URLs, folders, files, IDs, and
    custom CSS classes.
-   Hyphens are the preferred word separator.
-   Avoid spaces, underscores in URLs, uppercase filenames, vague
    filenames, and keyword stuffing.
-   JavaScript variables/functions use `camelCase`.
-   JavaScript constants use `UPPER_SNAKE_CASE`.
-   Git branches: `feature/short-description`.
-   Commit messages use imperative mood, e.g. `Add services section`.

Examples:

-   `healthcare-recruitment.jpg`
-   `hero-section`
-   `contact-form.js`
-   `segen-healthcare-team.jpg`

### URL strategy

Use clean directory URLs rather than exposing `.html`.

Production URLs:

-   Home: `/`
-   About: `/ueber-uns/`
-   Services: `/leistungen/`
-   Contact: `/kontakt/`

Because production is German-only, final public slugs use natural German
wording. Use ASCII-safe spellings where required, such as `ueber-uns`
instead of `über-uns`.

Each public directory contains an `index.html`.

------------------------------------------------------------------------

## 6. Pages / Site Map

The site has exactly four public pages unless explicitly expanded.

  Page       Production URL   Source file
  ---------- ---------------- --------------------------
  Home       `/`              `/index.html`
  About      `/ueber-uns/`    `/ueber-uns/index.html`
  Services   `/leistungen/`   `/leistungen/index.html`
  Contact    `/kontakt/`      `/kontakt/index.html`

Do not create additional public pages without instruction.

The employer-focused **For Healthcare Facilities** content belongs
primarily within the Home and Services pages rather than requiring a
separate page at this stage.

------------------------------------------------------------------------

## 7. Language Workflow

### Development stage

**English is the working website language during development.**

-   Build and finalize page structure, layout, visible copy, CTA labels,
    forms, and development SEO copy in English.
-   Use `<html lang="en">` while the development version contains
    English content.
-   Do not maintain duplicate English and German page trees during
    development.
-   Do not mix English and German randomly within the same development
    page.

### Final production stage

**The final production website will be German only.**

Only after the English website content and layout are approved:

1.  Translate/localize all user-facing content into German.
2.  Translate navigation, headings, paragraphs, buttons, forms,
    validation messages, image alt text, footer text, and other UI copy.
3.  Replace development SEO titles and meta descriptions with final
    German SEO copy.
4.  Change `<html lang="en">` to `<html lang="de">`.
5.  Verify that no unintended English content remains.
6.  Publish only the German version to production.

Do not translate the website to German prematurely during normal
development unless explicitly requested.

Because production is German-only, `hreflang` is not required at launch.
Add it only if a genuine second production language is introduced later.

------------------------------------------------------------------------

## 8. Navigation Bar & Footer

Every page uses the same navigation bar and footer.

Because this is a plain static site with no templating engine:

-   Copy the nav/footer markup consistently into every page.
-   Do not inject shared navigation/footer markup using JavaScript
    `fetch()` or `innerHTML`.
-   Do not use PHP, SSI, or server-side includes.
-   Any nav/footer change must be applied to all four pages in the same
    change.
-   Only the active/current-page state should differ.

### Development navigation

-   Home
-   About
-   Services
-   Contact
-   Primary CTA: `Contact Us` or another approved CTA

Final German navigation labels will be applied during the final
localization stage.

### Footer

Recommended footer content:

-   Logo
-   `HEALTHCARE PERSONALVERMITTLUNG`
-   Short SEGEN description
-   Contact details
-   Quick links
-   Copyright
-   Social links if provided

Do not invent missing phone numbers, email addresses, physical
addresses, social URLs, or legal details.

------------------------------------------------------------------------

## 9. Approved Source Facts for Website Copy

The following facts are approved for use in page content:

-   SEGEN has more than 6 years of experience in international
    healthcare recruitment.
-   SEGEN has successfully placed more than 500 nurses in Germany.
-   SEGEN recruits qualified and motivated nurses from India for
    healthcare institutions in Germany.
-   SEGEN works with hospitals, nursing homes, care facilities, and
    other healthcare providers in Germany.
-   SEGEN has a team consisting of Indian and German professionals.
-   SEGEN operates its own German Language Academy in India.
-   Professional nursing qualifications are combined with German
    language preparation.
-   SEGEN supports candidates through interviews, recruitment,
    selection, `Anerkennung`, visa processing, documentation,
    coordination, and entry into Germany.
-   SEGEN can support both individual candidates and larger recruitment
    requirements.
-   SEGEN cooperates with a telc examination centre in India.
-   After completing B2-level German training, candidates can receive
    timely examination appointments, **subject to examination-centre
    availability**.

### Accuracy rule

Do not strengthen, exaggerate, or remove qualifications from these
claims.

In particular:

-   Never claim telc examination appointments are guaranteed.
-   Never change `500+` or `6+ years` to a larger number unless updated
    information is provided.
-   Do not invent certifications, partnerships, placement guarantees,
    success rates, processing times, salary figures, or legal claims.

------------------------------------------------------------------------

## 10. Page Content --- English Development Version

This is the approved working copy for development. It can be refined
during review, but developers should not replace it with invented
marketing claims.

### 10.1 Home

#### SEO title --- development

`SEGEN Healthcare | Nurses from India for Germany`

#### Meta description --- development

`SEGEN connects qualified nurses from India with healthcare facilities in Germany, supported by 6+ years of experience and 500+ successful placements.`

#### H1 / Hero

**SEGEN**\
**Healthcare Recruitment Between India and Germany**

Qualified nurses. Strong German language preparation. Professional
support throughout the journey.

SEGEN Healthcare Personalvermittlung connects qualified and motivated
nurses from India with hospitals, nursing homes, and other healthcare
facilities in Germany.

With more than 6 years of experience, 500+ successful nurse placements,
and a strong Indian-German team, we support employers and candidates
throughout the recruitment journey.

**Primary CTA:** `Find Qualified Nurses`\
**Secondary CTA:** `Explore Our Services`

#### Trust / statistics

**6+ Years**\
Experience in international healthcare recruitment.

**500+ Nurses**\
Successfully placed in healthcare facilities across Germany.

**India + Germany**\
An experienced Indian-German team supporting both sides of the process.

**German Language Academy**\
Our own academy in India supports candidates with German language
preparation.

#### Intro section

### Your Partner for International Healthcare Recruitment

We understand the requirements of healthcare employers in Germany as
well as the journey of international nursing professionals.

From recruitment and candidate selection to professional recognition,
visa processing, documentation, and entry into Germany, SEGEN provides
structured and personal support throughout the process.

#### Services preview

### Our Services

**Nurse Recruitment**\
We recruit qualified and motivated nurses from India for healthcare
institutions in Germany.

**Hospital & Nursing Home Placement**\
We connect nurses with suitable hospitals, nursing homes, and care
facilities across Germany.

**Anerkennung Support**\
We provide guidance and support throughout the professional recognition
process in Germany.

**Visa Processing Support**\
We assist candidates with required documentation and provide guidance
throughout the German visa application process.

**Documentation & Coordination**\
We support candidates and employers with documentation and coordination
throughout the recruitment process.

**Personal Support**\
We guide candidates from the initial recruitment stage through their
journey to Germany.

**CTA:** `Explore All Services`

#### Language section

### German Language Preparation

A key part of SEGEN's approach is continuous German language
development.

Through our own German Language Academy in India, candidates are
supported in developing the language skills needed for their
professional journey in Germany.

SEGEN also cooperates with a telc examination centre in India. After
candidates complete their B2-level German training, this can help them
access timely examination appointments, subject to examination-centre
availability.

By combining professional nursing qualifications with German language
proficiency, we help candidates prepare for communication with patients,
colleagues, and employers in Germany.

#### Employer section

### For Healthcare Facilities

Are you looking for qualified and motivated nurses for your healthcare
facility?

SEGEN supports hospitals, nursing homes, and other healthcare providers
in Germany with the professional recruitment and placement of qualified
nursing professionals from India.

Our strong team in India enables us to manage recruitment, candidate
coordination, and preparation efficiently for both individual placements
and larger recruitment requirements.

**CTA:** `Discuss Your Staffing Requirements`

#### Why SEGEN

### Why Choose SEGEN?

More than 6 years of experience. 500+ successful nurse placements. A
strong team in India and Germany.

SEGEN combines professional recruitment, German language preparation,
and personal support to create reliable connections between qualified
nurses from India and healthcare employers in Germany.

**CTA:** `About SEGEN`

------------------------------------------------------------------------

### 10.2 About

#### SEO title --- development

`About SEGEN | Healthcare Recruitment India to Germany`

#### Meta description --- development

`Learn about SEGEN Healthcare Personalvermittlung, an Indian-German healthcare recruitment team with 6+ years of experience and 500+ nurse placements.`

#### H1

**About SEGEN**

#### Intro

### Your Trusted Healthcare Recruitment Partner

SEGEN Healthcare Personalvermittlung is an experienced healthcare
recruitment company specializing in connecting qualified nurses from
India with healthcare institutions in Germany.

With more than 6 years of experience and 500+ successful nurse
placements, we understand the needs of both healthcare employers and
international nursing professionals.

#### Indian-German team

### Two Countries. One Shared Goal.

Our team consists of Indian and German professionals, enabling us to
communicate effectively with candidates and employers and understand the
needs and expectations of both sides.

This cross-border structure helps us coordinate recruitment and
candidate preparation between India and Germany with a clear
understanding of the professional journey.

#### Language academy

### Preparation Starts in India

A key advantage of SEGEN is our own German Language Academy in India.

This allows us to identify and recruit professionally qualified nurses
while supporting them in developing strong German language skills before
beginning their professional journey in Germany.

By combining professional nursing qualifications with good German
language proficiency, we help candidates prepare for communication with
patients, colleagues, and employers and for the German healthcare
environment.

#### Experience

### Experience That Connects

**6+ Years of Experience**\
International healthcare recruitment between India and Germany.

**500+ Successful Placements**\
Nurses placed in hospitals, nursing homes, and other healthcare
facilities across Germany.

**Indian-German Team**\
Professional coordination and communication across both countries.

**Own German Language Academy**\
Structured language preparation for candidates in India.

#### Mission

### Our Mission

To connect the right healthcare professionals with the right employers
and create successful, long-term professional relationships.

**SEGEN --- Professional Nurses. Strong German Language Skills. Reliable
Connections between India and Germany.**

------------------------------------------------------------------------

### 10.3 Services

#### SEO title --- development

`Healthcare Recruitment Services | SEGEN`

#### Meta description --- development

`Explore SEGEN's nurse recruitment, placement, Anerkennung, visa, documentation and candidate support services between India and Germany.`

#### H1

**Our Services**

#### Intro

### From Recruitment to Entry into Germany

SEGEN supports nursing professionals and healthcare employers through
the different stages of international healthcare recruitment.

Our Indian-German team coordinates the process between both countries
and provides structured, personal support.

#### Service 1

### Nurse Recruitment

We recruit qualified and motivated nurses from India for hospitals,
nursing homes, and other healthcare institutions in Germany.

#### Service 2

### Hospital & Nursing Home Placement

We connect suitable nursing professionals with hospitals, nursing homes,
care facilities, and other healthcare providers across Germany.

#### Service 3

### Candidate Selection & Coordination

We support interviews, recruitment, candidate selection, and
coordination between candidates and employers.

Our strong team in India allows us to support individual placements as
well as larger recruitment requirements.

#### Service 4

### German Language Preparation

Through our own German Language Academy in India, we support candidates
in developing German language skills for their professional journey.

Professional qualifications and language preparation are combined to
help candidates prepare for communication with patients, colleagues, and
employers in Germany.

#### Service 5

### Anerkennung Process

We provide guidance and support throughout the professional recognition
(`Anerkennung`) process in Germany.

#### Service 6

### Visa Processing Support

We assist candidates with the required documentation and provide
guidance throughout the German visa application process and preparation
for entry into Germany.

#### Service 7

### Documentation & Coordination

We support candidates and employers with documentation and coordination
throughout the recruitment process.

#### Service 8

### Personal Support

We guide candidates from the initial recruitment stage through their
journey to Germany.

#### Healthcare facilities section

### For Healthcare Facilities

Are you looking for qualified and motivated nurses?

SEGEN supports hospitals, nursing homes, and other healthcare providers
in Germany with professional recruitment and placement of qualified
nursing professionals from India.

With more than 6 years of experience, a strong Indian-German team, and
our own German Language Academy in India, we are positioned to manage
candidate recruitment, coordination, and preparation efficiently.

With 500+ nurses already successfully placed in Germany, we have the
experience and infrastructure to support both individual staffing needs
and larger recruitment requirements.

**CTA:** `Discuss Your Staffing Requirements`

------------------------------------------------------------------------

### 10.4 Contact

#### SEO title --- development

`Contact SEGEN | Healthcare Recruitment`

#### Meta description --- development

`Contact SEGEN Healthcare Personalvermittlung about recruiting qualified nurses from India or beginning a nursing career journey to Germany.`

#### H1

**Contact SEGEN**

#### Intro

### Let's Talk

Whether you are a healthcare facility looking for qualified nurses or a
nursing professional interested in a career journey to Germany, our team
is ready to assist.

Get in touch with SEGEN Healthcare Personalvermittlung.

#### Employers

### For Healthcare Facilities

Are you looking for qualified nurses from India for your hospital,
nursing home, or healthcare facility?

Contact our team to discuss your current or future staffing
requirements.

**CTA:** `Send an Enquiry`

#### Candidates

### For Nursing Professionals

Are you a qualified nurse in India interested in a professional journey
to Germany?

Contact our team to learn more about the recruitment and placement
process.

**CTA:** `Contact Us`

#### Contact form

Recommended fields:

-   Name
-   Email Address
-   Phone Number
-   I am a: `Nursing Professional` / `Healthcare Employer`
-   Subject
-   Message
-   Privacy consent checkbox
-   Submit button: `Send Message`

### Contact details

Use only verified contact information supplied by the project owner.

Do not invent:

-   Phone number
-   Email address
-   Office address
-   Opening hours
-   Social media links

Placeholders may be used during development but must be clearly marked
as placeholders and removed before production.

------------------------------------------------------------------------

## 11. SEO Guidelines

The site is fully static, so SEO metadata must be hand-coded into every
page.

### Development SEO

During English development:

-   Use `<html lang="en">`.
-   Use the English development titles and descriptions defined in
    Section 10.
-   These are working SEO descriptions for development and review.

### Production SEO

Before production:

-   Convert all SEO titles and descriptions to high-quality German.
-   Change every page to `<html lang="de">`.
-   Verify canonical URLs use the final German production paths.
-   Do not leave English SEO metadata on the German production site.

### Required on every production page

-   Unique `<title>`.
-   Unique meta description.
-   Canonical URL.
-   Viewport tag.
-   Open Graph title.
-   Open Graph description.
-   Open Graph image.
-   Open Graph URL.
-   Open Graph type.
-   Twitter Card metadata where used.
-   Favicon.
-   One clear `<h1>`.
-   Semantic HTML.
-   Descriptive image `alt` text.
-   Descriptive internal anchor text.

### Canonical URLs

-   Home: `https://segenhealthcare.de/`
-   About: `https://segenhealthcare.de/ueber-uns/`
-   Services: `https://segenhealthcare.de/leistungen/`
-   Contact: `https://segenhealthcare.de/kontakt/`

Use the non-`www` HTTPS domain consistently unless the hosting
configuration is explicitly changed.

### Site-wide SEO files

Root files:

-   `sitemap.xml`
-   `robots.txt`

`sitemap.xml` must list all public production pages.

`robots.txt` should allow normal crawling and reference:

`https://segenhealthcare.de/sitemap.xml`

### Performance

-   Use `font-display: swap`.
-   Compress and appropriately size images.
-   Avoid unnecessarily large assets.
-   Prefer SVG for suitable logos/icons when an approved SVG exists.
-   Avoid unnecessary JavaScript and dependencies.

------------------------------------------------------------------------

## 12. Project Structure

``` text
/
├── index.html
├── ueber-uns/
│   └── index.html
├── leistungen/
│   └── index.html
├── kontakt/
│   └── index.html
├── sitemap.xml
├── robots.txt
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── fonts/
│   │   ├── ...existing Brandon Grotesque font files
│   ├── images/
│   │   ├── ...existing approved SEGEN logo files
│   │   ├── favicon.ico
│   │   └── ...other images
│   └── icons/
└── PROJECT_KNOWLEDGE.md
```

Tailwind itself is not a local project file. It is loaded through the
CDN script in each page.

------------------------------------------------------------------------

## 13. Rules for Any AI / Developer

1.  Read this file before making project changes.
2.  Keep the site static.
3.  Do not introduce a database, backend, PHP, server-side framework,
    React, Vue, or another frontend framework unless explicitly
    requested.
4.  Use Tailwind CSS utilities for normal styling.
5.  Keep custom CSS limited to font loading and cases Tailwind cannot
    reasonably handle.
6.  Use Brandon Grotesque from the project files.
7.  Use approved logo files already present in the project.
8.  Do not recreate or alter brand logos without explicit instruction.
9.  Use only the approved brand palette unless explicitly instructed
    otherwise.
10. Preserve `HEALTHCARE PERSONALVERMITTLUNG` and `SEGEN` exactly where
    those brand elements are required.
11. Keep navigation and footer structurally synchronized across all four
    pages.
12. Use lowercase kebab-case naming and clean URLs.
13. Use English for website development content.
14. Do not translate development pages to German unless explicitly
    requested.
15. At the final localization stage, convert the approved English site
    completely to German.
16. Final production must be German only and use `<html lang="de">`.
17. Use `https://segenhealthcare.de` as the canonical production domain.
18. Do not publish unintended English pages or metadata to production.
19. Do not invent company facts, contact details, statistics,
    guarantees, certifications, partnerships, processing times, or legal
    claims.
20. Preserve qualifiers such as
    `subject to examination-centre availability`.
21. Keep the approved `6+ years` and `500+` claims unless updated
    information is provided.
22. Every production page must contain complete, unique SEO metadata.
23. Keep `sitemap.xml`, `robots.txt`, navigation, internal links, and
    canonical URLs synchronized with the public site structure.
24. Ensure images have meaningful alt text and pages use semantic HTML.
25. Keep the site responsive and usable on mobile, tablet, and desktop.
26. Maintain a clean, professional, trustworthy visual style suitable
    for a healthcare recruitment company.

------------------------------------------------------------------------

## 14. Open Items / To Confirm

-   [ ] Verified phone number.
-   [ ] Verified public email address.
-   [ ] Verified office/address details.
-   [ ] Social media links, if they should appear.
-   [ ] Exact existing font filenames/extensions in the repository.
-   [ ] Exact existing logo filenames/extensions in the repository.
-   [ ] Favicon and preferred social-sharing image.
-   [ ] Final English copy approval.
-   [ ] Final German localization after English approval.
-   [ ] Final German SEO titles and meta descriptions.
-   [ ] Privacy Policy / legal pages and legally required German website
    information, if applicable. These are not included in the current
    four-page content because source details have not yet been provided.

### Resolved

-   Naming: lowercase, descriptive kebab-case with hyphens.
-   Clean production URLs.
-   Primary domain: `https://segenhealthcare.de`.
-   English is the development language.
-   German is the final production language.
-   Production uses `<html lang="de">`.
-   Font files are present in the project.
-   Approved logo files are present in the project.
-   Tailwind CSS is loaded via CDN.
-   No build step is required.
-   Four main pages: Home, About, Services, Contact.
-   Employer-focused healthcare-facility content is incorporated into
    Home and Services.
-   Core source facts and English development copy are documented in
    this file.
-   Static `sitemap.xml` and `robots.txt` are required.
