# UFI Design System

Source of truth: `UFI_homepage.html`. Every value below is pulled directly from that file's `:root` block and component rules — if the two ever disagree, the shipped CSS wins and this doc is stale and needs updating.

## Color

| Token | Value | Role |
|---|---|---|
| `--navy` | `#000a1e` | Structural — nav, dark section backgrounds, body headings |
| `--navy-soft` | `#0c1c34` | Reserved secondary dark tone |
| `--teal` | `#006a6a` | Primary interactive accent — every solid CTA, links, active states |
| `--teal-deep` | `#004f4f` | Teal hover state |
| `--gold` | `#FBB03D` | Secondary accent, used sparingly — ratings, badges, active timeline numbers, "Primary" tag. Sampled directly from the real logo file, not a generated Material tone |
| `--canvas` | `#FDFCFB` | Warm off-white page background |
| `--stage` | `#F3F4F6` | Cool grey — reserved backdrop for product photography so items of any native color sit on one consistent, non-clashing surface |
| `--ink` | `#001A35` | Body text on light backgrounds |
| `--ink-soft` | `#4b5c68` | Secondary body text on light backgrounds |
| `--ink-dim` | `#b7c2cc` | Secondary text on dark backgrounds |
| `--line` | `#e4e2dd` | Hairline borders |

**Category accent colors:** Store `#006a6a` (teal, reuses primary), School `#FBB03D` (gold, reuses secondary), Hospital `#3E6690` (steel blue), Office `#5b6b76` (slate), Home `#C1694F` (terracotta). These five are the *only* place hue varies by category — everything else in the system stays inside navy/teal/gold.

Originally scoped to the homepage quick-cat cards only. Extended to full category pages starting with School Furniture: each category page now uses its assigned color to drive **selection-state** UI on that page — active filter tab, selected swatch/size, border-hover states. This is deliberately narrower than it sounds. Two things stay constant regardless of category:
- **`btn-solid` (the actual call-to-action fill) stays teal everywhere**, even on a gold-personality page. Category color drives *mood and selection feedback*, not the "click this to act" signal — mixing those would erode the one color users learn means "go."
- **`--stage` (the product photography backdrop) never changes per category.** It exists specifically so the catalog reads as one consistent system across categories; tinting it per page would undo that on purpose.

**Category hero images:** each category hero should be image-based (not a flat color), with a warm, category-tinted `linear-gradient` scrim over it — not the same navy tone reused everywhere. The scrim runs left-to-right (dark behind the text, translucent toward the far side) rather than a flat uniform dark overlay, specifically so the photo stays visible, not just present. See `.hero-scrim` in `UFI_school_furniture.html` for the reference implementation. Store Furniture predates this pattern and still uses a flat color hero — worth revisiting to match, not a rule that page is exempt from.

**Rule:** no new hue gets introduced without updating this table first. The one time that rule was broken (an early draft used purple on the Office category hero) it was flagged and reverted — see `decisions-log.md`.

## Typography

Fonts, loaded via Google Fonts:
- **Hanken Grotesk** (400/500/600/700/800) — all UI text, headings, body
- **Source Serif 4** (italic 500) — reserved for heritage/warmth moments on the About page: the Vision/Mission statements and the Director's Note pull-quote. Not used on category pages or the homepage beyond the single "Trusted since 1990" emphasis. The About page is the one exception where this font appears multiple times; site-wide it remains sparingly deployed.
- **IBM Plex Mono** (500/600) — numerals only: the 9-step process numbers, stat figures. Signals "engineered/spec-sheet precision" by contrast against the humanist sans everywhere else.

Type scale — every font-size in the site is one of these tokens (see `:root`):

```
--fs-h1      clamp(2rem, 4.6vw, 3.1rem)     hero headline only
--fs-h2      clamp(1.5rem, 3vw, 2.2rem)     every section heading
--fs-h2-sm   clamp(1.25rem, 2.4vw, 1.7rem)  compact pinned heading (desktop process section)
--fs-h3      1.05rem                        card / tile / step titles
--fs-h3-sm   .88rem                         small card titles (dense grids)
--fs-lead    .92rem                         intro paragraph under a section heading
--fs-lead-sm .8rem                          intro paragraph, space-constrained
--fs-body    .86rem                         card & caption description text
--fs-sm      .78rem                         footer meta, small captions
--fs-xs      .72rem                         eyebrow labels, tiny sub-labels
--fs-xxs     .68rem                         compact eyebrow
--fs-btn     .92rem                         buttons
```

New page, new section: pick the token that matches the *role* (is this a section heading? a card title? an eyebrow?) — never write a new `font-size: N.Nrem` inline. If none of the twelve roles fit, that's a signal the layout needs a new token added here first, not a one-off value buried in a component rule.

## Layout

- Content container: `.wrap`, `max-width: 1220px`, `padding: 0 1.75rem`. Every section's content sits inside this — nothing goes narrower on its own (that was a real bug: the desktop process section briefly had its own 980px cap nested inside `.wrap` and had to be removed).
- Breakpoints in actual use: `420, 520, 560, 640, 820, 880` (max-width, mobile-first overrides) and `900` (min-width, desktop-only features switch on here — this is the one breakpoint that matters most, since it's where the 9-step process swaps its entire layout, not just resizes).
- Section rhythm: dark (navy) and light (canvas/white) sections alternate — Hero (dark) → Quick Categories (light) → About (light) → Process (dark) → Collage (light) → Footer (dark). New pages should keep this alternation; it's what makes the curve dividers (below) read as intentional rather than decorative.

## Signature components

**Curve dividers.** One asymmetric SVG arc (not a repeating wave — that reads as a generic template flourish) sits at the bottom of a section, filled with the *next* section's background color, so the seam between dark and light sections reads as a cut edge rather than a hard rectangle. Four in use on the homepage, each a distinct control-point variant of the same idea — never copy-paste the identical path twice in a row. Only placed at dark/light contrast boundaries, not between two same-colored sections.

**Glassmorphic cards.** `background: rgba(255,255,255,.6)`, `backdrop-filter: blur(14px)`, `border: 1px solid rgba(255,255,255,.75)`, subtle shadow, a 3px top accent bar in the category's color. Sits over a very faint radial teal/gold wash (`.quickcats` background) — glassmorphism needs something underneath to actually blur, a flat card on a flat background isn't glassmorphic, it's just translucent.

**Scroll-reveal.** `[data-reveal]` + `IntersectionObserver`, fade-up on first intersection, `.in-view` class added once and never removed. Respects `prefers-reduced-motion` globally (see `ux-patterns.md`).

**Video facade.** Hero background is a short, silent, looping clip (never the full narrated video — browsers won't autoplay sound anyway, and no one wants a case-study film blasting on page load). The full narrated video only loads into the DOM when "Watch the Manufacturing Story" is clicked, and is destroyed (element removed, not just hidden) on close so it stops buffering immediately.

## What NOT to do

- Don't introduce a hue outside the category-accent table.
- Don't write a literal `font-size` value — use a token.
- Don't add a curve divider between two sections of the same color.
- Don't use the serif font a second place.
- Don't use `overflow: hidden` on a section that contains a `position: sticky` descendant — it silently breaks sticky positioning. This caused a real, hard-to-diagnose bug (see `decisions-log.md`).
