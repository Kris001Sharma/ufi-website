SLICE 00 — Project Lock / Baseline
Objective

Prepare the existing codebase so subsequent AI agents don't destroy previously completed work.

Implement
inspect current project
identify framework
identify routing
identify component structure
identify assets
identify existing design tokens
identify existing pages
identify reusable components
establish project structure
create UFI_PROJECT_CONTRACT.md
create IMPLEMENTATION_STATE.md
remove obvious prototype-only artefacts only where safe
establish development/build commands
Do NOT
redesign the website
rewrite everything
optimize SEO
optimize performance
change the visual language
Validation

Developer must report:

Exit condition

The project can be safely modified by another AI agent without requiring it to rediscover the entire codebase.

SLICE 01 — Design System + Site Shell

This is where we establish the physical architecture of the website.

Implement
UFI colors
typography
spacing
container widths
buttons
cards
badges
navigation
footer
responsive breakpoints
mobile navigation
CTA system
global transitions
accessibility primitives

Use the existing UFI visual identity as the baseline rather than replacing it.

The earlier design already established a blue/yellow industrial palette and typography system using Sora/Hanken Grotesk/JetBrains Mono.

Validation

Test:

mobile
tablet
desktop
navigation
keyboard navigation
contrast
no layout overflow
Exit condition

Every subsequent page can be assembled using the same primitives.

No page-specific design system should emerge.

SLICE 02 — Homepage V1

This is the first major visible milestone.

The homepage should become something you can actually show the client.

Implement only the homepage.

Suggested structure:

But don't overload it.

The homepage should answer:

Who are you?

What do you manufacture?

Why should I trust you?

What industries do you serve?

Why is your furniture different?

How do I contact you?

Important

Do not implement every future SEO feature here.

Do not build the blog.

Do not build 20 location pages.

Do not build the chatbot.

Do not build WhatsApp automation.

Do not build the entire product catalogue.

Validation

The test is primarily:

Can a stranger understand UFI within 10 seconds?

And:

Can a mobile user reach a product or enquiry within a few interactions?

Exit condition

Client can look at the homepage and say:

"Yes, this represents UFI."

That is much more important at this stage than a Lighthouse score of 98.

SLICE 03 — Category Experience

Now we build the reusable category-page engine.

This is where your requested visual treatment becomes important.

The five business priorities are already defined in the project source:

Departmental Store Furniture
School & Institutional Furniture
Hospital Furniture
Office Furniture
Home Furniture.
Don't build five independent pages.

Build:

with category data.

Then feed:

into it.

Hero

Each category gets:

unique hero image
category-specific product imagery
gradient treatment
category title
description
CTA
breadcrumb
Then:
Why this comes now

This establishes the actual content architecture of UFI.

It is more important than SEO.

Because later SEO simply works on top of this structure.

SLICE 04 — Product Architecture

Now create the product system.

This is probably the most important architectural slice after categories.

Build reusable:
Product model

Something conceptually like:

The exact implementation depends on the current stack.

Critical rule

Data drives the page.

Not:

with duplicated markup.

Instead:

This is the point where the site becomes scalable.

SLICE 05 — Representative Product Pages

Don't populate every product immediately.

Take one representative product from each major category.

For example:

Only use products actually confirmed by UFI.

Then test the complete product experience.

Exit condition

If five representative products work beautifully, scaling the catalogue becomes data entry rather than redesign.

That is exactly the kind of leverage we want.

SLICE 06 — Manufacturing + Trust

Now build UFI's strongest differentiation.

The project already identifies the manufacturing story and 9-step treatment process as an important differentiator.

This slice includes:

Manufacturing
factory
materials
fabrication
treatment
powder coating
quality control
Trust
established year
Made in Nepal positioning
manufacturing location
real projects
certifications if verified
warranty if verified
customer/client proof if verified
Very important

Resolve the process discrepancy before this slice is considered complete.

The existing code and the current website have different representations of the process.

One authoritative version must win.

SLICE 07 — Conversion System

Now make the website commercially functional.

Implement:

Quote
Enquiry
WhatsApp
Contact
Form

Keep the initial form simple.

For B2B:

Additional information can be progressive.

The original project already planned Google Apps Script lead capture and WhatsApp redirect, so these should be treated as implementation requirements rather than new architectural ideas.

SLICE 08 — Mobile + UX Hardening

This is deliberately before SEO.

Because now there is enough website to properly test.

Audit:
mobile navigation
touch targets
swipe galleries
sticky CTA
forms
category cards
product cards
hero behaviour
scroll interactions
animation
loading states
error states
keyboard navigation
reduced motion
Test devices

At minimum:

Exit condition

The site should feel like a mobile-first product, not a desktop website squeezed into a phone.

SLICE 09 — Visual / Content Polish

Only after the structure works do we do the "WOW" pass.

This is where we refine:

image composition
typography rhythm
transitions
micro-interactions
scroll reveals
hover behaviour
image treatments
category differentiation
empty states
loading states
visual hierarchy

This separation is important.

Otherwise AI agents tend to spend enormous effort making one component beautiful while the overall information architecture is unfinished.

SLICE 10 — V1 Launch Hardening

At this point:

Stop.

Do not immediately start SEO.

Deploy the website.

This is your first actual production milestone.

The user can:

visit
browse
understand UFI
browse categories
browse products
enquire
contact
use WhatsApp
view manufacturing information

That fulfills your primary objective.

8. Only NOW does SEO become the next layer

This is where I agree strongly with you.

SEO should now become an overlay, not the foundation of the product.

SLICE 11 — Technical SEO Foundation

Now implement:

titles
descriptions
canonical URLs
sitemap
robots
Open Graph
structured data
breadcrumbs
semantic improvements
image metadata
Search Console
analytics verification

Notice that some of these things were architectural considerations from Slice 01, but the actual optimization happens now.

SLICE 12 — Search / AEO Content

Then:

The existing project plan already identifies keyword research and competitor intelligence as foundational SEO work.

But now we can do it against a real website, instead of designing theoretical pages.

That is a much better workflow.

SLICE 13 — Local Search

Then:

Google Business Profile
NAP consistency
NepalYP correction
reviews
photos
local signals
local content
directory cleanup

The original project documentation identified the incorrect NepalYP classification and weak GBP presence as major gaps.

This is now an optimization/visibility project rather than something blocking website completion.

SLICE 14 — Performance Engineering

Only once the final visual system is stable.

Then optimize:

This ordering matters.

If you optimize before the UI stabilizes, you're going to optimize assets/components that may later change.

SLICE 15 — Growth Layer

Finally:

content
GBP posting
reviews
YouTube
Pinterest
LinkedIn
Hamrobazar
backlinks
tender content
WhatsApp automation
catalogue lead magnets
ads

These already appear in the broader project strategy as later visibility/lead-generation activities.

12. And I would add one extremely important instruction

Every slice gets:

CHANGE BUDGET

The agent should be told:

"Prefer modifying existing architecture over introducing new architecture."

And:

"Do not refactor unrelated code during this slice."

And:

"If you discover an unrelated architectural problem, record it under Known Issues instead of fixing it opportunistically."

This single rule will prevent a huge amount of AI drift.

13. Another rule: "No silent redesign"

For every slice:

Preserve all previously approved visual behaviour unless the current slice explicitly requires modification.

So if Slice 02 approved the homepage:

Slice 04 must not decide:

"I think the hero would look better if..."

and redesign the homepage.

It can improve a shared component only if necessary for the current slice, and if that affects an approved page, it must report it.

14. The validation model should also change

Don't use:

"Let's audit the entire website after every prompt."

That becomes exhausting.

Instead:

Slice validation
Functional

Does it work?

Visual

Does it match the approved design?

Responsive

Does it work across required viewports?

Accessibility

Does the interaction remain accessible?

Regression

Did it break anything previously approved?

Scope

Did the agent modify anything it wasn't supposed to?

That last one is very important for AI development.

15. Quantifiable exit criteria

Every slice should have 3–8 measurable acceptance criteria.

Not 40.

For example, Slice 03:

That's enough.

16. I would also introduce a "golden paths" test

Instead of testing everything every time, maintain about 5 golden journeys.

Journey 1 — Retail buyer
Journey 2 — School buyer
Journey 3 — Hospital buyer
Journey 4 — General visitor
Journey 5 — Mobile

After every major slice, these journeys must remain functional.

That's far more useful than doing a 100-point audit after every change.

17. What I would NOT do yet

Based on your priority, I would explicitly move these out of the immediate website build:

Later
extensive keyword research
blog
location landing pages
backlinks
directory campaign
AI-search monitoring
Google Merchant
WhatsApp API bot
automated catalogue delivery
extensive schema
Google review widget
sophisticated analytics dashboards
aggressive performance optimization
ad campaigns

They remain on the roadmap.

They just don't get to interfere with V1.

18. What absolutely cannot wait

There are only a few things I would insist on from the beginning:

Architecture
clean routes
reusable components
data-driven products/categories
responsive design
semantic HTML
Content integrity
no invented claims
no fake specs
no fake testimonials
no prototype phone numbers
no obsolete copyright information
no contradictory manufacturing information
Basic technical foundations
production build
correct deployment
HTTPS
sensible URLs
basic metadata architecture
analytics hooks
UX
mobile-first
functional navigation
working CTAs
working enquiry/contact mechanism

Everything else can evolve.

19. This also changes how we should use Stitch

This is particularly important given your workflow.

Stitch should no longer be treated as the website itself.

It is your visual exploration/prototyping layer.

The process becomes:

Your existing Stitch design already gives us good visual material for the category cards and manufacturing experience.

We should extract the design language from Stitch, not continuously ask Stitch to regenerate the entire website.

20. The most important strategic change

Your previous project roadmap said:

Milestone 1 — Digital Foundation → Milestone 2 — Website Live → Milestone 3 — Visibility & Lead Generation.

I would now refine that into:

MILESTONE A — Product Experience

Result:

A beautiful, functional, deployable UFI website.

MILESTONE B — Discoverability

Result:

Google and AI systems understand UFI.

MILESTONE C — Growth

Result:

More people discover UFI and more visitors become leads.

21. And I would add one fourth milestone

This wasn't as explicit in the original plan, but I think it is important:

MILESTONE D — Continuous Optimization

This is where:

Core Web Vitals
CTR
search rankings
conversion rates
WhatsApp enquiries
quote submissions
category performance
product performance

become meaningful.

Not before.

22. Your north-star metric also needs to change temporarily

During website construction, don't measure:

"Are we ranking?"

That's premature.

For V1:

Primary metric

Can the intended customer understand, navigate and enquire?

Then after launch:

SEO phase

Can search engines discover and understand the website?

Then:

Growth phase

Are qualified people finding UFI?

Then:

Business phase

Are those people generating enquiries and sales opportunities?

That's a much cleaner progression.

23. My recommended order, finally

If I were managing the AI dev team myself, I would issue prompts in exactly this sequence:

Slice	Objective	Deliverable	Validation
00	Lock project	Source-of-truth + architecture	Build + repo audit
01	Design system	Shell + responsive primitives	Visual/responsive
02	Homepage	Complete homepage V1	UX + regression
03	Categories	Reusable category engine	5 categories
04	Products	Product architecture	Data-driven rendering
05	Product examples	5 representative products	Golden paths
06	Trust	Manufacturing + credibility	Content accuracy
07	Conversion	Quote/contact/WhatsApp	End-to-end enquiry
08	Mobile UX	Hardening	Real viewport tests
09	WOW polish	Micro-interactions	UX/regression
10	Launch	Production V1	Deployment checklist
11	Technical SEO	Search foundation	Search Console tests
12	AEO/content	Search-answer layer	Query validation
13	Local	GBP/NAP/local discovery	Local search baseline
14	Performance	CWV optimization	PSI/Lighthouse
15	Growth	SERP/lead generation	Monthly metrics
24. And one final principle I strongly recommend
Never let the AI agent decide what the next slice is.

You decide.

The agent gets:

"Implement Slice 04."

It does Slice 04.

It validates Slice 04.

It reports Slice 04.

It stops.

Then we review the result.

Then I give you:

Slice 05 implementation prompt

based on the actual state of the code.

That gives us a controlled loop:

This is much safer than trying to create the "perfect master prompt" upfront.

And it also solves the biggest problem you mentioned: drift.

The master strategy tells us where we're going.

UFI_PROJECT_CONTRACT.md tells the agent what must remain true.

IMPLEMENTATION_STATE.md tells it where we are.

The slice prompt tells it what it is allowed to do right now.

The validation tells us whether that slice actually worked.

That is the architecture I would use for this project.

So I recommend we do not give the development team the previous exhaustive SEO/UX prompt at all. We should replace it with this phased execution system, and then generate Slice 00's exact implementation prompt first. Once Slice 00 is completed and validated, we move to Slice 01, and so on. This also aligns with the original project's intent to use visible milestone checkpoints rather than a black-box development process.