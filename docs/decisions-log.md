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
