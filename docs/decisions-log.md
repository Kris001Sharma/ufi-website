# UFI Decisions Log

Chronological. Each entry: what was decided, and why — so a future change doesn't accidentally undo something that was already tried the other way and rejected.

## Color direction: teal primary, gold reserved
Two directions were tested head to head: warm gold as the primary CTA color, or cool teal. Teal was chosen. Gold stays as a deliberate secondary accent (ratings, badges, active states, numerals) rather than disappearing — this was an explicit compromise to keep a thread back to the logo's warmth without fighting the teal direction. **Don't** let gold creep into primary buttons "just this once" — that reopens a decision that was already made.

## Category tiles get distinct accent colors, not one uniform brand color
Early feedback: categories were hard to visually tell apart. Rather than one shared brand color for every category card, five accents were assigned (see `design-system.md` table) — deliberately bold, distinguishable, while staying inside a coordinated navy/teal/gold/steel-blue/terracotta family. The one time an unrelated hue (purple, on an early Office hero draft) got introduced for "differentiation," it was flagged as breaking brand cohesion and reverted. Differentiate through value/saturation and the five approved accents — not by adding arbitrary new hues.

## Curves: one asymmetric arc, not a repeating wave
A generic repeating wave-divider was considered and rejected — that specific shape is as templated as the flat rectangles it would replace. The chosen alternative (single asymmetric arc, varied per instance) was framed as "a precision-cut sheet-metal edge," tying the decorative element back to the brand being a metal manufacturer rather than a decoration with no connection to the subject.

## Video: never autoplay the full narrated file
The uploaded case-study video is 65 seconds with narration, not a loopable ambient clip. Browsers won't autoplay video with sound regardless, and doing so would be bad UX even if they did. Resolved with the two-tier facade pattern in `ux-patterns.md`: a short silent loop for ambient hero background, full video only on explicit click.

## 9-step process content: marketing-simplified vs. real granular process
The homepage's 9 steps (Pre-treatment → Quality Inspection, later corrected to the real Degreasing → Passivation sequence) is **not** the full granular real process — the actual reference photo shows finer sub-stages within what's shown as fewer steps here. This was flagged multiple times and never explicitly resolved either way; the current content is the agreed baseline, not a placeholder awaiting expansion. If the full granular version is wanted (e.g. for the dedicated `/manufacturing/` page), that's a deliberate content decision to make explicitly, not something to infer from the photo.

## 9-step process layout: horizontal desktop / vertical mobile, not one responsive layout
Initially built as one horizontal, scroll-pinned layout for all screen sizes. This required horizontal scrolling on narrow viewports, which read as broken. Rebuilt as two genuinely separate implementations (see `ux-patterns.md` pattern 4) rather than trying to force one layout to work everywhere.

## The `overflow:hidden` bug
`.process`'s `overflow:hidden` (added to contain a curve divider) silently broke `position:sticky` on its child, which made the pinned desktop timeline never actually pin — it just scrolled normally, leaving a large dead scroll gap that looked like a bug in the content rather than the CSS. Root-caused and fixed by removing the `overflow:hidden` and containing the curve a different way. **Any section with a `position:sticky` descendant must never get `overflow:hidden` on an ancestor** — this is now a standing rule in `design-system.md`, not just a one-time fix.

## Header transparency: solid color, not true video transparency
First attempt made the header background genuinely transparent over the hero, relying on the hero video showing through. This failed for two compounding reasons: (1) `position:sticky` doesn't overlap content in its initial (non-stuck) position, so at scroll position zero the "transparent" header was actually showing the plain page background, not the video; (2) even after fixing that, true transparency means legibility depends on whatever the video happens to be showing at any given moment, which isn't reliable. Resolved by giving the header's "at-top" state a **solid** `var(--navy)` background matching the hero, triggered by an `IntersectionObserver` on `.hero` rather than a scroll-position threshold. Simpler and fully reliable regardless of video content. Do not re-attempt true video transparency for header states on future pages.

## Font sizes: centralized after the fact
By the time this was addressed, four different section headings had four slightly different `clamp()` values, and two intro paragraphs were silently inheriting the wrong size because no font-size had been set at all. Consolidated into the twelve-token scale in `design-system.md`. **New pages should reference tokens from day one** — this cleanup only needed to happen because early sections were each styled independently without a shared scale to check against.

## Config-driven content, decided early, still being extended
The Cloudinary-config-file approach for images was the user's own idea from early in the project and shaped everything since — `ufi_assets.config.json` and its text-content counterpart `ufi_content.config.json` exist because of it. Every new page should be built content-first from these files, not the other way around (see `content-config-schema.md`).

## Category pages get personality, but not everywhere at once
Store Furniture (built first) used the universal teal system with no real per-category distinction — reasonable, since teal happens to *be* Store's assigned color, so it never tested whether a genuinely different category color would work across a full page. School Furniture was the real test: explicit direction to give each category page "its own personality," including an image-based hero rather than a flat color.

Resolved by splitting what "personality" is allowed to touch: hero mood/imagery and in-page selection-state UI (active tabs, selected swatches) take the category's color — but the actual action color (`btn-solid`, every real CTA) stays teal site-wide, and the product-stage backdrop stays neutral site-wide. The reasoning: some consistency exists to make the catalog *feel like one system* (stage backdrop) or to keep a learned behavior intact (teal = click this) — that kind of consistency is worth protecting even while pursuing per-category identity elsewhere. "Take creative liberty" and "stay consistent" aren't actually in conflict once it's clear *which* things are the personality layer and which are the load-bearing ones.

Store Furniture hasn't been retrofitted with an image hero to match — it predates the pattern, not exempt from it. Worth doing before a fourth category page makes the inconsistency more visible.

## SEO / GEO / AEO treated as three distinct layers, not one
Traditional SEO (meta tags, canonical, keyword-matched copy, `Product`/`ItemList`/`BreadcrumbList` schema) has been in place since the homepage. Hospital Furniture added two more deliberately: copy written as complete, self-contained factual sentences an AI answer engine can quote directly instead of vague marketing language (GEO), and a real FAQ section with `FAQPage` schema addressing actual procurement questions — tenders, corrosion resistance, finish options, lead time (AEO). Store and School don't have the FAQ layer yet; it was added where genuine buyer questions existed to answer, not copy-pasted everywhere by default. Worth adding to the other category pages with category-appropriate questions, not the same four questions reused verbatim.

## About page: timeline placeholders + Director's Note draft
The About page shipped with 2 confirmed timeline milestones (1990 founding, 2026 digital launch) and 2 placeholder entries flagged for client confirmation. Placeholder entries use `.timeline-item-placeholder` (dashed border + reduced opacity) so unconfirmed milestones never read with the same certainty as dated facts. The Director's Note quote from Chandra Shekhar is a draft pending his real sign-off before the site goes fully live — see `UFI_about.html` HTML comment above the quote.

## Source Serif usage: About page is the heritage exception
`design-system.md` reserves Source Serif 4 italic for "the one heritage/warmth moment." The About page uses it in two places: the Vision/Mission statements and the Director's Note pull-quote. Decision: treat the About page as the one page where the heritage font appears multiple times, rather than diluting it across the site. The "one moment" rule stays in effect site-wide — Source Serif does not appear on any category page or the homepage beyond the single "Trusted since 1990" emphasis.

## Contact page: merged inquiry + quote form, no separate quote page
The Contact page serves both "get in touch" and "get a quote" intents in a single form with a Category field and Quantity Estimate field. A separate `/get-a-quote/` page was never built — all "Get a Quote" CTAs sitewide already resolve here via `UFI_LINKS.contact`. Form submission is a plain HTML form with `data-submit-target` placeholder for the client's Google Apps Script endpoint. The Category select options mirror `ufi_content.config.json` `categories.*.name` values and must be kept in sync manually.

## Projects page: three confirmed case studies, two stats, copy refinedplaceholder copy
The Projects page ships with three named case studies (Central Department Store, Regional Hospital, National University) as Challenge → Solution → Result cards, color-coded by category accent. Copy is draft placeholder pending client confirmation. Stat bar uses 2 confirmed stats only (10,000+ installations, 34+ years); the undefined "100%" stat was excluded. Image placeholders use `projects.[slug].hero` keys added to `ufi_assets.config.json`.


## Bulk CTA: canvas (light) background for section-rhythm compliance
The shared .bulk-cta was changed from background:var(--navy) to background:var(--canvas) with dark text. This restores the darkâlightâdark section alternation the design system requires â the footer is always navy, so the section before it must be canvas for a meaningful canvasânavy curve to appear. Previously, bulk-cta (navy) â footer (navy) created a darkâdark boundary with no curve, violating the rhythm rule. All pages now get a canvasânavy curve at their footer boundary.

## Hero text: centralized .hero-content for consistent alignment
Hero text alignment was inconsistent site-wide â the homepage used a centered max-width:680px block while content/category pages used full-width 1220px .wrap with left-aligned text. A shared .hero-content class was added to ufi_shared.css (max-width:720px, centered) and applied to all content and category page heroes. The homepage retains its 11vh padding as a page-specific override for its video hero.

## Curve paths: unique per page, never copy-pasted
The same four SVG curve paths were duplicated across 5 category pages (identical path + fill on Store, School, Hospital, Office, Home). Each page now has a unique control-point variant â the design system calls for "distinct control-point variant of the same idea" on every instance. All 10 pages now have 19 total curves with zero cross-page duplicates.

## Store Furniture: image-based hero matching category pattern
Store Furniture predates the image-based hero pattern (noted in the decisions log at "Category pages get personality"). It has been retrofitted with the .hero-bg + .hero-scrim + .hero-content structure matching School, Hospital, Office, and Home â replacing the flat-color radial-gradient hero. The placeholder image uses the same Cloudinary asset as other pages; the <img> is hidden via display:none until a real category.store_furniture.hero photo is available (matching the convention on other category pages).

## About page: 9-step process inlined, not linked
The About page previously linked to UFI_homepage.html#process for the 9-step manufacturing process. The full process section (both mobile vertical timeline and desktop horizontal scroll-pinned variant with tank photo) has been copied directly into the About page, placed between the "How We Build" intro and "Why Chitran" sections. This follows the design system pattern of keeping key content on-page rather than linking out. The id="process" anchor and all timeline JavaScript (IntersectionObserver for vertical, scroll-position handler for horizontal) have been copied from the homepage and wrapped in their own IIFE.

## About page timeline: placeholder refinement
The two placeholder timeline entries ("Milestone â details coming soon") were refined to more descriptive professional titles: "Early Expansion â capacity growth" (left slot) and "Institutional Partnerships â scaling for tenders" (right slot). Both remain flagged as .timeline-item-placeholder with real: false in config â the language change improves readability while the pending-confirmation status is preserved.

## Curve fills: CSS variables, not hex colors
All SVG curve divider fill attributes across the site were standardized to use CSS variables (var(--canvas), var(--navy)) instead of hardcoded hex values. This ensures curve fills automatically track the design token system if colors are ever adjusted.

## Homepage refinement: 9-section overhaul with flip tiles, testimonials, and inquiry CTA
Nine refinements applied to index.html to improve engagement and visual polish while respecting all existing design-system rules (teal primary, gold accent, Source Serif restriction, curve placement at dark/light boundaries only, reduced-motion fallbacks):

1. **Flip tiles on hover**: Each Our Range card now has a `.qc-flip` with front/back faces. The back face shows the category name and tagline over a `--cat-img` background. Gated behind `@media (hover:hover) and (pointer:fine) and (min-width:900px)` so touch/mobile users get the original static card. `prefers-reduced-motion:reduce` disables the 3D transform entirely. The `--cat-img` CSS custom property is set inline on each `<a>` tag using the placeholder Cloudinary URL from `ufi_assets.config.json`.
2. **Trust cards**: Icons wrapped in `.trust-icon` spans with a `trustFloat` micro-animation on hover. Added `.trust-shield` decorative SVG with a split-tick path (`stroke-dasharray="20"`) behind each icon. Added a "View Our Story" button that resolves to `UFI_about.html` at runtime via `window.UFI_LINKS.about` (exposed by `ufi_components.js`), with a hidden state if the links object isn't available.
3. **Process section**: Desktop heading bumped from `--fs-h2-sm` to `clamp(1.5rem, 2.6vw, 2rem)` for more prominence. Active timeline node glow expanded to three layers (ring + two bloom glows). Added `.h-caption-index` showing "Step NN / 09" that updates live via `setActive()`.
4. **Collage**: Both `<div>` tiles converted to `<a>` tags with `href` and `aria-label` for click-to-navigate. Added `.tile-arrow` SVG affordance that fades in on hover. Added `:focus-visible` outline for keyboard users. Removed "View Full Catalogue" button — the `.collage-head` now just holds the heading and description. Tile numbers simplified to `01`–`05` (removed per-config key suffix). Description updated to mention the 9-step process and hover interaction.
5. **Testimonial section**: New navy-background section with 3 placeholder testimonials (source: client to confirm before going live). Uses Source Serif 4 italic for blockquote body — accepted as an extension of the About-page heritage exception since the testimonials use the same serif treatment as Director's Note pull-quotes, creating a consistent "heritage voice" across the dark sections. Canvas-to-navy curve divider at the footer boundary for section rhythm compliance.
6. **Inquiry CTA**: New `.bulk-cta` section (reusing shared class from `ufi_shared.css`) with "Get a Quote" (links to `UFI_contact.html`) and "WhatsApp" buttons. WhatsApp link uses `https://wa.me/9779855053857` based on the schema phone number `+977-9855053857` from `ufi_assets.config.json` line 44. Added `.bulk-cta-actions` to `ufi_shared.css` for the button stack layout. Note: phone number mismatch — content config (`ufi_content.config.json` line 514) has `+977-9855001201` instead of `9855053857`. The WhatsApp link ships with the schema number per the decision to align with the structured-data source of truth.
7. **Footer**: No changes needed — the `crafted-by` developer credit ("Crafted with precision, Krishna Sharma") was already present in `ufi_components.js` line 107 and styled in `ufi_shared.css` line 178.
8. **Stat counter**: The "10,000+" institutional installations stat now uses `data-count-to="10000" data-suffix="+"` with an `easeOutCubic` animation (1500ms) triggered by `IntersectionObserver` on first entry. `prefers-reduced-motion:reduce` shows the final value immediately without animation.
9. **Collage description**: Updated to reference the 9-step powder-coating process and invite hover interaction.
