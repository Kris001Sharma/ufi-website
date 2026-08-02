# UFI Site Architecture

## URL structure

```
/                       Homepage (live)
/store-furniture/       Category — Store & Supermarket Furniture (PRIMARY)
/school-furniture/      Category — School & Institutional Furniture
/hospital-furniture/    Category — Hospital Furniture
/office-furniture/      Category — Office Furniture
/home-furniture/        Category — Home Furniture
/manufacturing/         The 9-step powder coating process, in full — the homepage
                         section is a teaser; this page is the complete, authoritative version
/projects/               Installations / case studies (department stores, schools,
                         hospitals supplied)
/about/                  Company story, heritage, facility
/contact/                Inquiry form, map, direct contact details
```

Flat, one level deep, no `/products/store-furniture/` nesting. Matches how people actually search ("school desk manufacturer Nepal," not "products school desk Nepal") and keeps every category two clicks from anywhere on the site.

Product detail pages (individual SKUs like the Gondola Rack configurator built earlier) live under their category: `/store-furniture/double-sided-gondola-rack/`. Not building these until the category pages exist — a product page's design should extend its category page's, not invent its own pattern.

## Every page shares

- Same `<header>`, same nav links, same footer, copy-pasted from `UFI_homepage.html` — not reinvented per page. If nav needs to change, it changes once and gets copied to every page, or (better, once there's a build step) becomes a real shared include instead of six copies drifting apart the way the font-sizes did before centralization.
- Same transparent-header-on-hero pattern *only* on pages with a full-bleed hero (category pages, homepage). Content pages (About, Contact) can skip the hero video and just use the solid header from the top — no need to force a hero onto a page that doesn't need one.
- Same curve-divider rule: only at dark/light section boundaries, one per boundary.
- Same `data-reveal` scroll-in pattern for every section below the fold.

## Category page template

This is the one template that gets reused five times (Store, School, Hospital, Office, Home). Structure, in order:

1. **Nav** (shared)
2. **Category hero** — shorter than the homepage hero (no need for the full narrative video loop per category); category name, one-line positioning, a still image or short loop specific to that category. Curve divider at the bottom.
3. **Sub-category filter strip** — e.g. Store Furniture: Gondola Racks / Wall Racks / VIP Display / Custom Fixtures. Reuses the quick-cat card visual language (glassmorphic, color-coded — but all five tiles share *this category's* single accent color here, not the five different category colors from the homepage).
4. **Product grid** — cards on the `--stage` cool-grey backdrop (per `design-system.md`), consistent lighting/angle across every product regardless of category. Each card: name, one-line spec, star rating, price-on-request CTA.
5. **Featured product spotlight** — one flagship product gets the full configurator treatment (drag-to-rotate, finish/size selectors) built for the Gondola Rack earlier in this project. Not every product needs this — just the category's best-seller or highest-margin item.
6. **Institutional/bulk CTA strip** — "Supplying [schools/hospitals/stores] across Chitwan? Get volume pricing."
7. **Curve divider → Footer** (shared)

## Content pages (About, Manufacturing, Projects, Contact)

Looser template — these aren't repeating a grid pattern five times, so less rigid structure is fine. What they must still share: nav, footer, curve-divider rule, typography tokens, `data-reveal` on every section. Manufacturing specifically should reuse the *exact* 9-step component (vertical mobile / horizontal-desktop-with-photo split) already built — don't rebuild it, extend the homepage's version into its own full page with more detail per step (this is the natural place to eventually show the full granular real process from the tank reference photo, once that content question gets resolved — see `decisions-log.md`).

## Internal linking

- Homepage → all 5 category pages (quick-cat strip + collage tiles, already live)
- Homepage → Manufacturing (the "Watch the Manufacturing Story" video CTA area is also a natural link point once `/manufacturing/` exists)
- Every category page → the other 4 (via the same nav + a "you might also need" strip, not built yet)
- Footer → everything, on every page (already structured for this — the sitemap columns just need real `href`s instead of `#anchor` once each page exists)
- Nav "Products" currently anchors to `#collage` on the homepage — once category pages exist, this should become a dropdown or mega-menu linking the five real URLs instead of an anchor.

## What this doc doesn't cover

Pixel-level layout for each page — that's built when each page is actually built, following `design-system.md` and `ux-patterns.md`, not speced in advance here. This doc exists so the *shape* of the site and how pages relate is decided once, not re-decided per page.
