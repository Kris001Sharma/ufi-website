UFI Project Contract

Project: Universal Furniture Industries (UFI) — Website Refinement & Digital Growth
Domain: ufichitwan.com
Role: Permanent project source of truth
Status: Active

1. Purpose

This is the compact, permanent source of truth for the UFI website refinement process. It preserves verified business context, approved design direction, architectural principles, content-truth rules, and AI-development safety rules.

It is not a task backlog. Individual implementation slices define what the development agent is allowed to change.

2. Core Principle

The primary objective is to build and progressively improve a beautiful, credible, useful, mobile-first UFI website.

Validation is a gate, not the destination.

Never allow validation, SEO, AEO, or performance work to replace or unnecessarily delay the current product implementation.

3. Verified Business Context
Business: Universal Furniture Industries (UFI)
Location: Bharatpur-07, Srijana Tole, Chitwan, Nepal
Established: 1990 (2047 B.S.)
Phone recorded in project source: +977-9855001201
Phone currently deployed on live site: +977-9855053857
Website: ufichitwan.com
Manager recorded in project source: Chandra Shekhar
Team size recorded in project source: 11–15 employees

Source: UFI project instructions.

The project source describes the previous website as live but effectively non-functional for lead generation and records the decision to rebuild it. This is historical project context and must not be assumed to describe today's live state without verification.

4. Business Priority

The stated business categories, in priority order, are:

Departmental Store Furniture — store display racks, show racks, VIP racks
School & Institutional Furniture — desks, chairs, benches
Hospital Furniture — beds, stitched chairs, stools, ward furniture
Office Furniture — work desks, office chairs, workstations
Home Furniture — metal sofas, tables

Departmental Store Furniture is the primary category; Home Furniture is the lowest-priority/B2C-adjacent category.

5. Strategic Positioning

Position UFI primarily as a Nepal-based manufacturer of durable metal and institutional/commercial furniture solutions.

The site should communicate:

manufacturing capability;
institutional/commercial expertise;
metal-based construction;
durability and reliability;
the UFI powder-coating process;
local manufacturing in Nepal;
credible service for institutional buyers.

A “Made in Nepal / built for Nepal” positioning may be developed where wording is confirmed and natural.

Do not invent certifications, warranties, customer names, project quantities, standards, technical specifications, or performance claims.

6. Manufacturing Truth

The current design direction uses “The UFI Standard: 9-Step Powder Coating” as a major differentiator.

The prototype currently shows:

Degreasing & Cleaning
Phosphating Treatment
High-Temp Curing

and includes claims concerning adhesion, corrosion resistance, coating thickness, curing temperature, and long-term durability.

The prototype also exposes 60–80 Microns, 200°C, “outlasts standard liquid paints by decades,” and “unbreakable polymer bond.” These are not automatically approved business facts. They must be confirmed by UFI before being used as factual marketing claims.

The complete authoritative nine-step process is still a verification item.

7. Visual / Brand Direction

The current prototype establishes an industrial-premium visual direction:

deep UFI blue;
yellow/gold accent;
light neutral surfaces;
dark industrial sections;
strong geometric typography;
high-contrast product imagery;
restrained borders;
bento/grid category presentation;
technical-detail styling;
subtle motion.

The prototype uses Sora, Hanken Grotesk, JetBrains Mono and Material Symbols and defines a blue/yellow token system.

Existing design direction includes an engineered-metal hero, category bento grid, manufacturing/process section, technical overlays, product imagery, responsive navigation and Request Quote CTA.

Refine and consolidate this direction; do not arbitrarily replace it.

8. Mobile-First Rule

Mobile is a first-class experience, not a reduced desktop version.

Every new component must account for:

touch-friendly controls;
readable typography;
clear hierarchy;
compact visible CTAs;
accessible navigation;
swipe-friendly galleries where appropriate;
no horizontal overflow;
responsive imagery;
sensible animation intensity;
slow-connection behaviour;
reduced-motion support;
loading, error and empty states.

Desktop may enhance the composition, but desktop must not be the design source that mobile merely inherits.

9. Content Truth Rules

Never invent:

product specifications or dimensions;
load capacities;
certifications;
warranties;
coating thickness or curing values;
corrosion-resistance durations;
customer names;
project quantities;
testimonials;
awards;
production capacity;
delivery guarantees;
geographic service coverage;
technical standards.

If information is missing, use confirmed information, an explicit placeholder, or a confirmation note.

10. DO NOT INVENT — Production Violations Already Found

The following patterns have been observed in the current production build and are explicitly prohibited:

Never present a testimonial as real without written client confirmation per quote.
  Observed: testimonials on the homepage are marked “pending review-collection outreach (Milestone 1).”

Never reuse one placeholder image across multiple distinct products/categories.
  Observed: the same Cloudinary placeholder image URL is used across multiple product cards and category tiles. Log a missing asset in Known Issues instead of duplicating an existing image.

Never leave internal asset-key strings (e.g. "products.x.stage") in user-facing alt text, copy, or metadata.
  Observed: several product image alt attributes contain internal config-style keys such as products.metal_sofa.stage, products.delivery_bed.stage, etc.

Never publish a canonical URL, NAP field, or contact number not confirmed against the NAP master record.
  Observed: two phone numbers are in circulation (+977-9855001201 from project source, +977-9855053857 from live site). Neither is confirmed as the NAP master.
  Observed: canonical URLs in the live site use clean paths (e.g. /about/, /store-furniture/) while the actual deployed files use flat filenames (UFI_about.html, UFI_store_furniture.html).

Never publish technical manufacturing claims (coating thickness, curing temperature, durability statements) without explicit written client confirmation.
  Observed: the live site contains 9-step process copy and durability claims that have not been verified against the real facility process.

11. Information Architecture

The long-term structure should support:

Exact production routes must be established from the actual repository during Slice 00.

12. Data-Driven Architecture

Categories and products should ultimately be data-driven rather than duplicated page implementations.

Conceptually:

Use the simplest maintainable architecture supported by the actual repository. Do not introduce infrastructure without a concrete need.

13. Prototype Reality

The attached Pasted text.txt is a static HTML/Tailwind prototype. It contains Tailwind CDN usage, Google fonts, Material Symbols, inline configuration, external image URLs and inline WebGL code.

Therefore, do not infer that the production repository is React/Next.js from this prototype. Slice 00 must inspect the actual repository and establish the real stack, routing, build system, asset pipeline and component architecture.

14. Known Prototype Placeholders

The prototype contains placeholder or incomplete production values:

+977 123 456 789
info@ufi.com.np
© 2024
# links
prototype external image URLs
incomplete destinations

These are defects/placeholders, not project truth.

The project source records +977-9855001201 as the UFI phone number. Email remains unconfirmed.

15. SEO / AEO Philosophy

Search visibility is a major strategic goal, but it does not block completion of the core product experience.

The long-term objective is strong visibility for UFI searches in Chitwan and wider Nepal across Maps, website results, directories and relevant social/search surfaces.

The project explicitly rejects guaranteeing a fixed #1 ranking and instead targets measurable progress and multiple first-page appearances.

Build early architectural foundations such as clean URLs, semantic structure, metadata capability, accessible content structure and image alt-text capability.

Defer extensive optimization work until the core website is usable:

large-scale keyword expansion;
location landing pages;
extensive AEO content;
backlink campaigns;
directory campaigns;
growth experiments.
16. Performance Philosophy

Performance matters, but optimization follows product stability.

Do not prematurely optimize UI that is still being redesigned.

The existing prototype includes a WebGL hero animation; any production decision about it must consider actual performance cost.

17. Conversion Philosophy

Visitors must be able to:

browse categories;
inspect products;
request a quote;
send an enquiry;
contact UFI;
reach WhatsApp where available.

The project specifically identifies Google Apps Script enquiry capture and WhatsApp redirect as intended mechanisms.

Keep enquiry forms short and mobile-friendly.

18. Engineering Rules

Prefer:

small components;
single-responsibility functions;
descriptive names;
immutable inputs where practical;
reusable primitives;
typed models;
semantic HTML;
minimal dependencies;
free/low-cost services where suitable.

Avoid:

duplicated page implementations;
giant components;
unnecessary abstractions;
speculative infrastructure;
repeated hard-coded values;
hidden side effects;
unrelated refactors;
dependency additions without need.

Modify existing architecture before inventing new architecture.

If an unrelated problem is discovered, record it instead of silently fixing it unless it blocks the current slice.

19. AI Development Rules

Every implementation agent must:

Read this document first.
Read IMPLEMENTATION_STATE.md second.
Inspect the actual repository.
Work only within the current slice.
Preserve approved previous work.
Never invent business facts.
Never silently redesign unrelated areas.
Prefer existing architecture.
Run relevant tests/build/validation.
Report changed files, results and unresolved issues.
Stop when the slice is complete.
20. Documentation Rule

Permanent project documentation is intentionally limited to:

UFI_PROJECT_CONTRACT.md
IMPLEMENTATION_STATE.md

Do not create a separate document for every page, component, audit or slice unless a genuine durable need appears.

21. Pending Business Questions

Recorded project questions still requiring confirmation include:

geographic service area;
enquiry ownership/process;
availability of product photography beyond 3D renders;
domain/hosting ownership;
government tender participation;
current CRM/inquiry process;
desired three-month success definition;
3D asset formats;
list of satisfied clients for review requests.

Source: project instructions.

Do not make implementation assumptions that depend on these questions without marking them as assumptions.

22. Source Priority

When information conflicts:

current confirmed client information;
current approved implementation decisions;
this project contract;
current repository;
attached planning documents;
older prototypes/Stitch output;
AI inference.

If conflict cannot be resolved, do not guess. Record it for confirmation.

23. Definition of Approved

A feature, page, visual direction or interaction is approved only after explicit project-owner confirmation.

Existing code is not automatically approved.
Stitch output is not automatically approved.
Previous AI output is not automatically approved.

24. Final Rule

Protect the product, protect the truth, protect approved design, and change only what the current slice requires.
