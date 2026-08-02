# UFI UX Patterns

Reusable interaction mechanics already built and working in `UFI_homepage.html`. When a new page needs one of these behaviors, reuse the pattern below — don't design a new one that does the same job differently.

## 1. Scroll-reveal (fade-up on first view)

```html
<div data-reveal>...</div>
```
```css
[data-reveal]{ opacity:0; transform:translateY(18px); transition:opacity .6s ease, transform .6s ease; }
[data-reveal].in-view{ opacity:1; transform:translateY(0); }
```
One shared `IntersectionObserver` (threshold `0.15`) adds `.in-view` the first time an element enters the viewport, then stops observing it — it never re-hides. Default for any section-level block below the fold. Not for individual list items inside a section (that gets noisy); apply it to the section/grid container, not each card.

**When to skip it:** anything above the fold on load (hero content uses its own one-time CSS `@keyframes rise` staggered animation instead, since it should play immediately, not wait for a scroll trigger).

## 2. Curve dividers

One asymmetric SVG arc per dark/light section boundary, filled with the *next* section's color, positioned `absolute; bottom:-1px` inside a `position:relative` parent. See `design-system.md` for the visual rule (never a repeating wave, never identical path twice, never between two same-colored sections). The parent section must **not** have `overflow:hidden` if it also contains a `position:sticky` element (see pattern 5) — those two requirements conflicted once already and broke a whole section's pinning.

## 3. Video facade (never autoplay the heavy asset)

Two-tier pattern, used for any long-form video:
1. A short (under 10s), silent, compressed loop plays automatically as ambient background — muted, loop, playsinline.
2. The full video only gets injected into the DOM (`mount.innerHTML = '<video ...>'`) when the user explicitly clicks a "watch" trigger, and the element is fully removed (not just hidden) on close, stopping playback/buffering immediately.

This is the only acceptable way to put video content behind a click on this site — never a plain `<a href="video.mp4">` and never an autoplaying full-length clip.

## 4. Mobile/desktop divergence (two real implementations, not one responsive compromise)

The 9-step process is the reference case: mobile gets a normal-flow vertical timeline (`IntersectionObserver` per step, accumulates active state top to bottom); desktop/landscape (`min-width:900px`) gets an entirely different horizontal, scroll-pinned timeline anchored to a real photo. These are two separate DOM blocks toggled with `display:none`/`block` at the breakpoint, each with its own JS, gated by `matchMedia`. 

**Use this pattern when** a layout genuinely needs to *behave* differently by breakpoint (not just resize) — e.g. an interaction that only makes sense with a pinned scroll region on a tall desktop viewport would feel broken or claustrophobic on a phone. Don't reach for this by default; most sections should just be one responsive layout. Reach for it when reflowing the same DOM can't produce the right experience on both.

## 5. Scroll-pinned progress (the mechanic behind the desktop timeline)

```js
var rect = wrap.getBoundingClientRect();
var progress = clamp((-rect.top) / (wrap.offsetHeight - window.innerHeight), 0, 1);
```
A tall wrapper (`height: N vh`) holds a `position:sticky` inner element; scroll position through the tall wrapper maps to a 0–1 progress value that drives which step is active. Requires: the wrapper's ancestor chain must have no `overflow:hidden` (breaks sticky — this bit us once, see `decisions-log.md`), and the wrapper's height should be tuned so there's minimal "dead" scroll after the last step activates before the section releases (190vh worked for 9 steps; recalculate for a different step count, don't just reuse 190vh blindly).

## 6. Header state (solid, not true transparency)

The header does **not** rely on the hero video showing through a transparent nav — that was tried and proved unreliable (see `decisions-log.md`). Instead: `header.at-top` gets a solid `var(--navy)` background (matching the hero), toggled via `IntersectionObserver` watching whether `.hero` is still in view. Any new page with a hero should reuse this exact mechanism, not re-attempt true transparency.

## 7. Config-driven content, not hardcoded strings

Every image and its accompanying text (name, alt text, description) is meant to live in a config file, not inline in the template — see `content-config-schema.md`. When building a new page, pull content from config rather than writing product names/descriptions directly into HTML, even if it feels faster in the moment. The category page template especially will be populated almost entirely from config once real product data exists.

## 8. FAQ accordion (AEO — answer text always in the DOM)

```html
<div class="faq-item">
  <button class="faq-q" aria-expanded="false"><span>Question text</span><svg>...</svg></button>
  <div class="faq-a"><p>Answer text.</p></div>
</div>
```
`.faq-a` is collapsed with `max-height:0; overflow:hidden`, expanded via a `.open` class toggle on click — the answer `<p>` is always present in the HTML source, never injected by JS and never `display:none`. This matters specifically for answer-engine crawlers (AI Overviews, Perplexity, voice assistants): content that only exists after a JS interaction is unreliable to crawl, content that's in the DOM but visually collapsed is not. Pair with `FAQPage` JSON-LD listing the same questions/answers verbatim — see `UFI_hospital_furniture.html` for the reference implementation. Introduced there because hospital buyers have real recurring procurement questions (tenders, corrosion resistance, lead times); add this section to a category page when genuine buyer questions exist for it, not as a default on every page.

## Accessibility baseline (non-negotiable on every page)

- Every animated/motion pattern above has a `prefers-reduced-motion: reduce` fallback that shows the end-state immediately, no exceptions.
- Interactive elements (timeline nodes, video triggers, nav toggle) are real `<button>`s with `aria-label`s, not styled `<div>`s.
- Focus states are never removed without a replacement.
