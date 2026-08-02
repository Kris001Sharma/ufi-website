# UFI Content Config Schema

Two files, same key convention, used together:

- **`ufi_assets.config.json`** — every image and video. `publicId` (Cloudinary) or `youtubeId`, never a hardcoded URL.
- **`ufi_content.config.json`** — every piece of copy that describes a specific item: category names, descriptions, the 9-step process text, trust markers, stats, company details.

Both are keyed so a template can pull `categories.store_furniture` from content config and `home.sector.store_furniture` from asset config for the same card and get everything it needs — name, description, accent color, and image — without a single hardcoded string in the HTML.

## Why two files instead of one

Images and text change on different schedules and by different people. A photographer delivering new product shots edits `ufi_assets.config.json`. Someone correcting a product description edits `ufi_content.config.json`. Neither needs to touch the other file, and neither needs to touch a template.

## Naming convention

`page.section.element` for page-specific content (`home.trust_markers`, `home.stats`), or a flat namespace for content reused across multiple pages (`categories.store_furniture`, `company`) — since a category's name and description show up on the homepage, its own category page, and eventually product pages, it doesn't belong to any one page's namespace.

## Rule for building a new page

Before writing a single line of copy into a template: check whether it already exists in `ufi_content.config.json` (a category name, the company phone number, a trust marker). If it exists, reference it. If it's genuinely new content specific to one page, add it to the config file first, under a key matching the page it belongs to, then reference it from the template. The template should end up closer to a rendering function than a document with content baked into it.

## What still needs to be added as pages get built

- `categories.*.products` — once real SKUs exist per category (name, price tier, spec line, gallery), following the `products.gondola_rack.*` pattern already sketched in `ufi_assets.config.json`.
- `pages.about.*`, `pages.projects.*`, `pages.contact.*` — content for the pages in `site-architecture.md` that don't exist yet. Don't pre-fill these with placeholder text now; add them when each page is actually built, with real content.
- A `sitemap.*` or `nav.*` entry once category pages are live, so the shared nav/footer can generate real hrefs from config instead of the current `#collage` anchors.
