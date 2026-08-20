Only one slice is active at a time.

The existence of later slices does not authorize the current development agent to implement them early.

3. Current Product Baseline

The production repository is a **static HTML/CSS/JavaScript site** — no framework, no build system, no package manager.

- **Framework**: None (vanilla HTML5 + CSS3 + ES5 JavaScript)
- **Rendering model**: Server-rendered static HTML pages
- **Routing**: File-based static routes (one HTML file per page)
- **Package manager**: None for the site itself (`.kilo/` is Kilo runtime, not site dependencies)
- **Build command**: None
- **Dev command**: None (open HTML files directly in browser)
- **Lint/Test/Type-check commands**: None exist

The existing prototype establishes:

UFI blue/yellow industrial visual direction;
engineered-metal hero;
responsive navigation;
trust bar;
category bento grid;
dark manufacturing/process section;
product/category imagery;
Request Quote CTA;
technical overlays;
subtle interaction;
a WebGL hero animation.

The prototype is static HTML/Tailwind and is not proof of the production repository's framework.

The production repository has been inspected. The actual stack is documented in this slice's baseline report.

4. Preserve

Unless the current slice explicitly requires change, preserve:

UFI visual identity;
engineered/manufacturing positioning;
mobile-first intent;
category-first structure;
product-led navigation;
Request Quote intent;
manufacturing story;
B2B/institutional emphasis;
premium but practical visual language.

Do not redesign these merely because another style is personally preferred.

5. Known Prototype Defects / Actual Baseline Issues

Treated as defects/placeholders rather than project truth:

missing `ufi_hero_poster_v2.jpg` (referenced in meta tags and video poster, file does not exist in repo);
missing `UFI_manufacturing.html` (linked in shared footer but file does not exist);
placeholder phone mismatch: project source records `+977-9855001201`, website uses `+977-9855053857`;
placeholder email: `info@ufi.com.np` never appears in current HTML (email remains unconfirmed);
obsolete copyright year: none found (footer uses dynamic 2026);
# links: none found in current HTML;
incomplete production routes: `manufacturing` page missing;
prototype external images: many category images use same Cloudinary placeholder URL;
unverified coating claims: 9-step process content is simplified marketing framing per `decisions-log.md`;
incomplete 9-step process: real facility has more granular sub-stages than the 9-step version shown;
unused config files: `ufi_content.config.json` and `ufi_assets.config.json` exist but are not wired into any HTML page;
empty form action: contact form has `data-submit-target=""` with no backend endpoint;
About page timeline: 2 of 4 entries are placeholders pending client confirmation;
About page Director's Note: quote is draft pending Chandra Shekhar's sign-off;
Projects page testimonials: marked "pending review-collection outreach";
Store Furniture hero: uses image-based hero pattern now (retrofitted per decisions-log), matching other categories.

The project source records +977-9855001201 as the UFI phone number. Email remains unconfirmed.

6. Current Category Model

Do not add products or specifications without confirmed UFI information.

7. Content Risks

The prototype contains technical claims including:

60–80 micron coating thickness;
200°C curing;
"outlasts standard liquid paints by decades";
"unbreakable polymer bond."

These require UFI confirmation before production use.

The complete nine-step powder-coating process is also not yet fully verified.

8. Slice 00 — Project Lock / Baseline
Objective

Understand and stabilize the actual repository before product/UI refinement.

Actual Findings

- **Framework**: None (vanilla HTML5 + CSS3 + ES5 JavaScript)
- **Pages**: 9 HTML files at repo root
- **Shared chrome**: `ufi_shared.css` (design tokens, nav, footer, buttons, curve dividers) + `ufi_components.js` (shared nav/footer injection, header state, scroll-reveal, video modal)
- **Styling**: CSS custom properties (`:root` tokens); no Tailwind, no preprocessor
- **Assets**: Local videos (`ufi_hero_story_loop.mp4`, `ufi_case_study_full.mp4`, `ufi_tank_process_v2.webp`), local PNG logos, Cloudinary CDN for product/category images
- **Content config**: `ufi_content.config.json` and `ufi_assets.config.json` exist but are **not wired into any HTML page** — content is hardcoded in templates
- **Integrations**: Google Fonts (Hanken Grotesk, Source Serif 4, IBM Plex Mono), WhatsApp (`wa.me`), Google Maps embed, Facebook/TikTok social links
- **Forms**: Contact form on `UFI_contact.html` — plain HTML, no backend (`data-submit-target` placeholder)
- **Analytics**: None found
- **Build/Deploy**: No build system; no package.json; presumably static file hosting
- **Environment vars**: None
- **Tests**: None
- **Lint/Type-check**: None

Required Work

The implementation agent must:
inspect the repository;
identify the actual framework;
identify the package manager;
identify build/dev commands;
identify routing;
identify application entry points;
identify page structure;
identify component structure;
identify styles/design tokens;
identify asset pipeline;
identify deployment configuration;
identify existing tests;
identify environment-variable handling;
identify analytics/tracking;
identify forms/integrations;
identify reusable code;
identify obvious prototype artefacts;
verify that the project contract exists;
update this implementation-state document.
Do Not

The agent must not:
redesign the website;
rewrite the application without need;
implement SEO campaigns;
add new product pages;
add business claims;
add unnecessary dependencies;
perform unrelated refactors;
perform broad performance optimization;
replace the existing architecture simply because another architecture is preferred.
Exit Condition

A future development agent must be able to understand:
how the application runs (open HTML in browser, no build step);
what framework it uses (none — vanilla static HTML/CSS/JS);
where pages/routes live (root-level .html files);
where components live (`ufi_components.js` for shared nav/footer; inline `<style>` per page);
where styles live (`ufi_shared.css` for site chrome + tokens; page-specific `<style>` blocks);
where assets live (root-level media files + Cloudinary CDN URLs);
how data currently flows (content is hardcoded in HTML, not driven by config files);
what integrations exist (Google Fonts, WhatsApp, Google Maps, social links);
what is reusable (`ufi_components.js`, `ufi_shared.css`, design-system.md tokens);
what is prototype-only (missing manufacturing page, unused config files, placeholder images);
what should not be changed casually (design tokens, nav structure, existing content).

9. Slice Status
Slice	Status	Notes
00 — Project Lock / Baseline	✓ Validated	Baseline documented
01 — Design System + Site Shell	☐ Not started	
02 — Homepage V1	☐ Not started	
03 — Category Experience	☐ Not started	
04 — Product Architecture	☐ Not started	
05 — Representative Product Pages	☐ Not started	
06 — Manufacturing + Trust	☐ Not started	
07 — Conversion System	☐ Not started	
08 — Mobile + UX Hardening	☐ Not started	
09 — Visual / Content Polish	☐ Not started	
10 — V1 Launch Hardening	☐ Not started	
11 — Technical SEO Foundation	☐ Not started	
12 — Search / AEO Content	☐ Not started	
13 — Local Search	☐ Not started	
14 — Performance Engineering	☐ Not started	
15 — Growth Layer	☐ Not started	

Allowed states:

☐ Not started
◐ In progress
✓ Implemented
✓ Validated
⚠ Blocked

A slice becomes ✓ Validated only after implementation and independent validation.

10. Known Issues
High Priority
missing `UFI_manufacturing.html` page (footer link leads to 404);
wiring content config into HTML pages (ufi_content.config.json / ufi_assets.config.json are unused);
phone number mismatch between project source (+977-9855001201) and website (+977-9855053857);
missing `ufi_hero_poster_v2.jpg` (video poster fallback absent);
verify complete 9-step powder-coating process with UFI;
verify technical coating claims (thickness, curing temp, durability) with UFI.
Medium Priority
replace repeated Cloudinary placeholder image URLs with real category photography;
establish image optimization strategy (local vs CDN, formats, sizes);
confirm analytics/tracking requirements;
finalize production routing (clean URLs vs current flat filenames).
Deferred
large-scale SEO content;
AEO content strategy;
local landing pages;
backlink strategy;
advanced performance optimization;
growth automation.

11. Current Decisions
Decision 01 — Product Experience First

Visible UI, content, structure, navigation and conversion take priority over extensive SEO/AEO/performance optimization.

Reason:

The website needs to become a useful, credible product before optimization can create meaningful value.

Decision 02 — Validation Is a Gate

Validation exists to verify implementation.

It is not the project's end goal.

The developer must not spend the current slice primarily on auditing or reporting when implementation remains incomplete.

Decision 03 — Slice Isolation

Each AI developer prompt implements one bounded slice.

The agent must stop when that slice is complete.

Future roadmap items are context only and do not authorize early implementation.

Decision 04 — No Silent Redesign

Previously approved areas are not redesigned during unrelated work.

If a shared dependency makes a change unavoidable, the agent must report:

what changed;
why it changed;
which approved area was affected.
Decision 05 — Minimal Documentation

Only the following are permanent project documentation:

UFI_PROJECT_CONTRACT.md
IMPLEMENTATION_STATE.md

Additional documentation requires a demonstrated long-term need.

Decision 06 — No Invention

Missing business information must be:

confirmed;
explicitly marked as pending;
or represented by a clearly identified placeholder.

Never fill a business-information gap with plausible AI-generated content.

Decision 07 — Existing Architecture First

The implementation agent must understand and extend the existing architecture before introducing a new architecture.

A rewrite is not justified merely because a different stack or pattern is considered cleaner.

Decision 08 — Static HTML Baseline

The production site is static HTML/CSS/JS with no framework or build system. Do not introduce a framework, build step, or package manager unless a future slice explicitly requires it.

12. Golden User Journeys

These journeys become the core regression paths once the relevant functionality exists.

Journey A — Retail / Store Buyer
Journey B — School Buyer
Journey C — Hospital Buyer
Journey D — Trust Visitor
Journey E — Mobile Buyer

Once functionality exists, these journeys must remain functional after every major slice.

13. Slice Completion Rule

A slice may be marked ✓ Validated only when:

the requested implementation is complete;
all slice-specific acceptance criteria pass;
relevant tests/build checks pass;
relevant responsive checks pass;
previously approved golden journeys are not broken;
no out-of-scope work has been silently introduced;
unresolved issues are recorded;
the implementation state is updated.

A slice should not be considered complete merely because:

the code compiles;
an AI agent reports success;
a visual screenshot looks acceptable;
an audit report has been generated.

Implementation must actually satisfy the slice objective.

14. Validation Philosophy

Validation should be proportional to the current slice.

For UI slices

Validate:

desktop layout;
mobile layout;
touch interaction;
responsive breakpoints;
visual hierarchy;
accessibility basics;
interaction states;
no unintended overflow;
no regression in previously approved areas.
For architecture slices

Validate:

build;
routes;
imports;
types;
reusable component behaviour;
existing functionality.
For integration slices

Validate:

happy path;
failure path;
loading state;
empty state;
mobile interaction;
actual integration result where possible.
For later SEO/performance slices

Use measurable technical checks appropriate to those slices.

Do not introduce a comprehensive Lighthouse/SEO audit into every UI implementation slice unless specifically required.

15. Scope Control

Every implementation slice must have three boundaries:

If an agent discovers something interesting outside the current scope:

do not implement it automatically;
record it as a known issue if important;
continue with the current slice.

The only exception is a defect that genuinely blocks completion of the current slice.

16. Regression Protection

Every completed slice must preserve the behaviour already approved in previous slices.

Before marking a slice complete, the developer should ask:

Did I modify anything outside the slice?
Did I change an approved visual without authorization?
Did I break an existing route?
Did I introduce a new dependency?
Did I change business copy without confirmation?
Did I introduce a new external service?
Did I alter mobile behaviour unintentionally?
Did I create a performance regression?
Did I change an existing integration?

If yes, either fix it or explicitly report it.

17. Repository Cleanliness

The development team should leave the repository cleaner than it found it.

This means:

remove genuinely obsolete code discovered during the current slice;
avoid duplicate implementations;
use meaningful names;
preserve predictable folder structure;
keep components reasonably small;
avoid unnecessary dependencies;
avoid temporary debugging artefacts.

However:

Repository cleanliness does not authorize unrelated refactoring.

Clean only what is relevant to the current implementation slice or what directly blocks it.

18. Asset Rules

The production website should progressively move away from prototype-only external assets.

When replacing assets:

prefer owned UFI imagery where available;
use optimized production formats;
preserve appropriate image quality;
provide meaningful alt text;
avoid loading large images before they are needed;
do not hotlink third-party images without an intentional reason;
do not use AI-generated or stock imagery as factual representations of UFI facilities/products without clearly treating them as illustrative.

If an image is a placeholder, it should be clearly identifiable as such during development.

19. Content Implementation Rules

When implementing content:

Confirmed content

May be used directly.

Unconfirmed content

Must be marked as:

or handled through an implementation placeholder.

Marketing copy

May improve clarity and persuasion, but must not create unsupported factual claims.

The developer may improve wording around confirmed facts without changing their meaning.

20. Contact / Enquiry State

The final enquiry experience should support the project's conversion goal.

The project source identifies:

Google Apps Script enquiry capture;
WhatsApp redirect;
short B2B enquiry forms.

These should be implemented only when their requirements are explicitly activated by the relevant slice.

Do not prematurely build complex CRM functionality.

21. SEO / Search State

SEO work is intentionally deferred beyond the initial product-building phases.

Current state:

However, implementation slices should avoid creating obvious SEO problems.

For example:

do not create meaningless URLs;
do not make important content inaccessible;
do not build inaccessible navigation;
do not use images instead of semantic text where text is required;
do not knowingly create duplicate routes.
22. Performance State

Current status:

Optimization intentionally deferred.

During current UI development, only prevent obvious performance mistakes such as:

unnecessarily huge assets;
repeated expensive rendering;
uncontrolled animation loops;
loading every page asset immediately;
unnecessary third-party scripts.

Detailed performance optimization belongs to the dedicated Performance Engineering slice.

23. Accessibility State

Accessibility is not a separate late-stage excuse to rebuild the interface.

Basic accessibility must be preserved during every slice:

semantic HTML;
keyboard accessibility where applicable;
visible focus states;
appropriate labels;
meaningful alt text;
sufficient contrast;
reduced-motion support;
touch targets appropriate for mobile;
logical heading hierarchy.

A dedicated accessibility hardening pass may occur later.

24. Current Active Slice Protocol

When a development agent receives a slice prompt, it must begin with:

The agent must not jump directly into implementation based only on the user prompt.

25. Developer Handoff Format

At the end of each slice, the implementation agent must report:

Then stop.

Do not automatically begin the next slice.

26. Change Log
2026-08-19
Created controlled slice-based implementation strategy.
Established UFI_PROJECT_CONTRACT.md as permanent project source of truth.
Established IMPLEMENTATION_STATE.md as compact execution memory.
Set Slice 00 as the first implementation task.
Prioritized product/UI/content experience before extensive SEO/AEO/performance work.
Identified prototype placeholders.
Identified unverified manufacturing claims.
Established golden user journeys.
Established slice completion and regression rules.
Established strict scope-control and no-silent-redesign rules.
2026-08-19
Slice 00 baseline completed.
Identified actual framework: vanilla static HTML/CSS/JS (no build system, no package manager).
Documented 9 user-facing routes across 9 HTML files.
Documented shared chrome: ufi_shared.css + ufi_components.js.
Documented unused config files (ufi_content.config.json, ufi_assets.config.json).
Documented prototype artefacts and placeholder values.
Documented missing manufacturing page and missing hero poster image.
Marked Slice 00 as ✓ Validated.
27. Final Execution Rule

Implement the current slice completely. Validate it proportionally. Preserve what is already approved. Record what is unknown. Do not drift into future work. Then stop.




-------------------------------------------------------------

UFI Website — Implementation State

Last updated: 2026-08-20
Slice: 00 — Project Lock / Baseline

1. What Is Live Today

The production site is a static HTML/CSS/JavaScript site with no framework, build system, or package manager. It is served as flat files.

Pages live:
- Homepage (index.html) — hero, category tiles, trust section, 9-step manufacturing process, category collage, testimonials, closing CTA, footer
- 5 category pages — hero, product cards, featured product spotlight, FAQ, closing CTA, footer
  - UFI_store_furniture.html
  - UFI_school_furniture.html
  - UFI_hospital_furniture.html
  - UFI_office_furniture.html
  - UFI_home_furniture.html
- UFI_about.html — company story, vision/mission, 9-step process, journey timeline, director note, footer
- UFI_projects.html — case studies, stat bar, bulk CTA, footer
- UFI_contact.html — inquiry form, contact details, map, WhatsApp CTA, footer

Shared chrome:
- ufi_shared.css — design tokens, base styles, nav, footer, buttons, curve dividers, scroll-reveal
- ufi_components.js — shared nav/footer injection, header state, mobile menu toggle, scroll-reveal observer, video modal

2. Architecture

Framework: None (vanilla HTML5 + CSS3 + ES5 JavaScript)
Rendering: Static server-rendered HTML
Routing: File-based (one .html file per route)
Package manager: None
Build command: None
Dev command: Open HTML files in browser
Lint/Test/Type-check: None exist

3. Integrations

- Google Fonts: Hanken Grotesk, Source Serif 4, IBM Plex Mono
- WhatsApp: wa.me/9779855053857
- Google Maps: embedded iframe on contact page
- Social: Facebook, TikTok links in footer
- Form: plain HTML form with empty data-submit-target placeholder (no backend wired)
- Analytics: None found

4. Asset Pipeline

- Local assets: ufi_logo_nav.png, ufi_logo_lg.png, ufi_hero_story_loop.mp4, ufi_case_study_full.mp4, ufi_tank_process_v2.webp
- Remote images: Cloudinary CDN (devkrish cloud) for product and category imagery
- Image optimization: None beyond Cloudinary auto-format/compression
- Missing asset: ufi_hero_poster_v2.jpg referenced in meta tags and video poster but not present in repo

5. Known Issues (live, not fixed)

Canonical/URL structure mismatch
- Canonical tags use clean paths (/about/, /store-furniture/) while actual deployed files are flat filenames (UFI_about.html, UFI_store_furniture.html).

Sitewide text-encoding bug (mojibake em-dashes)
- HTML files contain â€" in place of proper em-dashes (—) in meta descriptions, copy, and comments.

Alt text with leaked internal asset keys
- Product image alt attributes contain internal config-style keys such as products.metal_sofa.stage, products.delivery_bed.stage. These must not appear in user-facing alt text.

Duplicate placeholder product images
- The same Cloudinary placeholder image URL is used across multiple distinct products and categories (e.g. hospital, office, school, home categories all reference the same image ID).

Two conflicting phone numbers in circulation
- Project source: +977-9855001201
- Live site: +977-9855053857
- Both appear in production. Neither is confirmed as the NAP master.

Unverified testimonial authenticity
- Homepage testimonials carry the comment: "Real testimonials pending review-collection outreach (Milestone 1)."

Site not indexed under current content
- Google shows a 2020 snapshot. Current site content is not reflected in search index.

NepalYP listing
- Existing NepalYP listing is miscategorized, unverified, and locked.

Missing manufacturing page
- Footer links to UFI_manufacturing.html which does not exist. No standalone manufacturing page is approved in the IA.

Missing hero poster image
- ufi_hero_poster_v2.jpg is referenced in OG/Twitter meta tags and video poster attributes but is absent from the repo.

Content config unused
- ufi_content.config.json and ufi_assets.config.json exist but are not wired into any HTML page.

6. Slice Match

The live site's actual functionality most closely matches the intended Slice 02–03 range:
- Homepage and category pages are visually built and functional
- Manufacturing/process section exists on the About page
- Contact form exists but has no backend
- No product detail pages, no data-driven architecture, no CMS

Work should resume from Slice 04 (Product Architecture) or Slice 07 (Conversion System) depending on priority, not from Slice 01.

7. Decisions

- Do not resolve phone number, email, or URL structure without client input.
- Do not replace placeholder images without real photography.
- Do not publish unverified manufacturing claims.
- Do not invent testimonials, certifications, or specifications.


-----------------------------------------------------------------------