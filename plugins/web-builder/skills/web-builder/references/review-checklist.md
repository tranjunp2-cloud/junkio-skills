# Review checklist

Review from screenshots (see SKILL.md step 5 for capture commands), not from code alone.
Items marked *(script)* cannot be seen in a still image — verify them with a short Playwright
script or in a real browser. Mark each item pass/fail; fix all fails and re-capture.

## Distinctiveness
- [ ] Could this page belong to a different product with only the text changed? If yes → strengthen the layout signature.
- [ ] The direction card's layout signature is visible in the first screen (desktop and mobile — on mobile at least a recognisable part of it) and repeated lower down.
- [ ] No rule from `anti-slop-rules.md` is broken.

## Hierarchy
- [ ] Squint test: the headline, then the primary CTA, are the first two things you see.
- [ ] Exactly one primary CTA style; secondary actions look secondary.
- [ ] Section rhythm varies (dense / airy / full-bleed), no three same-looking sections in a row.

## Responsive
- [ ] No horizontal scroll at 390px; nothing clipped or overlapping.
- [ ] Display type scales with `clamp()`; hero headline fits in ≤ 4 lines on mobile.
- [ ] Tap targets ≥ 44×44px; nav works on mobile (menu opens, closes, traps nothing) *(script)*.
- [ ] Absolutely positioned annotations/captions do not collide with content at 390px (make them static captions under ~720px).
- [ ] Pinned / horizontal scroll effects are disabled or simplified on small screens.

## Accessibility
- [ ] Body text contrast ≥ 4.5:1, large text ≥ 3:1 (check muted text and text on images).
- [ ] Visible `:focus-visible` styles on every link/button; keyboard can reach the CTA.
- [ ] One `<h1>`, logical heading order, landmarks (`header`, `main`, `footer`, `nav`).
- [ ] Images have `alt`; decorative SVG has `aria-hidden="true"`; split-text keeps `aria-label`.
- [ ] `prefers-reduced-motion` respected, and `?static` shows the complete final state.

## Performance & polish
- [ ] Fonts: ≤ 2 families (a mono for data/labels may be the second), ≤ 4 weight/style files, `display=swap`, fallbacks set.
- [ ] Images sized (`width`/`height` or `aspect-ratio`), lazy below the fold.
- [ ] Every font in use covers the page's language (no fallback glyphs mid-word).
- [ ] No console errors *(script)*.
- [ ] Animated mode (without `?static`) settles into the same final state — viewport screenshot after load and after scrolling.
- [ ] Favicon and `<title>`/meta description set.
- [ ] Hover, focus and active states exist and match the direction's hover language.
