# Anti-slop rules

Hard constraints. If a rule conflicts with an explicit user request or an
existing brand, the user/brand wins — say so in the delivery note.

## Composition
1. The hero must not be "centred headline + subline + two buttons + gradient blob" unless the direction explicitly calls for centring (e.g. `luxury`). Prefer asymmetry, split layouts, oversized type or a product visual that carries the screen.
2. No section of three identical icon cards. If content is a list of features, vary the form: numbered rows, a bento, a comparison, a single feature told in depth.
3. Alternate section density: at least one dense section and one near-empty "breathing" section per page.
4. Repeat the direction's layout signature at least twice on the page.
5. Max content width is a choice, not `max-w-7xl mx-auto` everywhere — use full-bleed moments.

## Colour
6. No purple-to-blue (or pink-to-purple) gradient as the main accent unless the direction specifies it.
7. One accent dominates; the second accent is a spice — e.g. a status dot, one illustration colour, numerals or a hover state — never a second button colour.
8. Text contrast ≥ 4.5:1 for body, ≥ 3:1 for large display text. Check muted grey on tinted backgrounds.
9. Dark mode only when the project or user asks; then it is designed (own surface/ink values), never `filter: invert`.

## Typography
10. Never default to Inter/Roboto/Arial for display type unless the direction says so (`swiss` may).
11. Use a modular scale (the direction's ratio) for headings and body; the hero display size may jump outside the scale and is ≥ 3× body on desktop, with a `clamp()` floor of ~2.5rem on mobile.
12. Line length 55–75 characters for body copy. Set `text-wrap: balance` on headings, `pretty` on paragraphs.
13. Tight tracking on large display (−0.02 to −0.04em), loose tracking only on small uppercase labels. With tight line-height, check that diacritics (ắ, ễ, Ö) are not clipped.

## Copy
14. Banned phrases: "Unlock", "Unleash", "Elevate", "Seamless", "Revolutionize", "Empower", "In today's fast-paced world", "Look no further", "Take it to the next level", "Supercharge".
15. Headlines say something specific to this product (a number, a concrete outcome, a point of view).
16. No fake logos of real companies, no invented testimonials attributed to real people. Use clearly placeholder names or the user's real content.
17. Buttons describe the action ("Book a tasting", "Install the CLI"), not "Get started" / "Learn more" twice. For developer tools the primary CTA may be a copyable command block.

## Detail
18. Icons from one family, one stroke weight. No emoji as UI icons.
19. Consistent radius scale (pick 2 values max) and spacing scale (4 or 8px base).
20. Every interactive element has hover, focus-visible and active states.
21. Images have explicit dimensions/aspect-ratio (no layout shift) and meaningful `alt`.
22. Footer is designed too: not just a grey row of links.

## Content gaps
23. Missing contact details, prices or names → use an obviously fake placeholder (`hello@example.com`, "Studio Name") and list every placeholder in the delivery note.
