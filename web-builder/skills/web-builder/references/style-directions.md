# Style directions

Each direction is a complete point of view, not a colour swap. `scripts/pick-style.js`
parses the `## \`id\` — Name` headings and the `Tags:` line, so keep that format.

Palettes are starting points: keep the roles, adjust hues to the brief. All default
`muted` values pass 4.5:1 on both `bg` and `surface`; after changing any hue, re-check with
`node scripts/check-contrast.js <fg> <bg>`. `accent` is a fill colour — check the text placed on it too.

Font names are Google Fonts unless noted. Before using one, confirm it covers the brief's
language (e.g. Vietnamese diacritics: the font's CSS from `fonts.googleapis.com/css2?family=…`
must contain a `/* vietnamese */` block). If not, use the listed script-safe alternative.

---

## `bento` — Bento Grid
Tags: saas, product, app, tech, ai, startup, dashboard, friendly, modern
- **Palette:** bg `#F4F3EF` · surface `#FFFFFF` · ink `#111111` · muted `#6B6B6B` · accent `#FF5B2E` · accent-2 `#2E6BFF`
- **Type:** Space Grotesk (display, 600) / Inter Tight (body). Ratio 1.25.
- **Layout signature:** hero is itself a bento — headline tile spanning 2×2 surrounded by tiles holding a live number, a mini product UI, a quote. Tiles have different sizes, radius 24px, 12px gaps.
- **Motion:** tiles assemble in a staggered scale-up on load; on scroll a second bento fills cell by cell; hover tilts tiles 2° and lifts shadow.
- **Avoid:** equal-size tiles (that is just a card grid).

## `editorial` — Editorial Magazine
Tags: media, blog, agency, culture, fashion, writing, studio, premium, story
- **Palette:** bg `#FAF7F2` · surface `#F0EBE3` · ink `#1A1714` · muted `#70685F` · accent `#B3261E` · accent-2 `#1F3A5F`
- **Type:** Fraunces or Playfair Display (display, high contrast, italic for emphasis) / Source Serif 4 or Newsreader (body). Ratio 1.414.
- **Layout signature:** 12-column grid with an oversized serif headline breaking across columns, drop cap on the intro, captions and folios in small caps, thin rules between sections.
- **Motion:** headline words rise from a mask line by line; images reveal with a clip-path wipe; minimal hover (underline grows).
- **Avoid:** rounded cards, gradients, emoji.

## `brutalist` — Neo-Brutalist
Tags: developer, tool, indie, bold, youth, creator, startup, loud, playful
- **Palette:** bg `#FFFDF5` · surface `#FFE14D` · ink `#000000` · muted `#3A3A3A` · accent `#FF4FD8` · accent-2 `#3DF5A6`
- **Type:** Archivo Black or Bricolage Grotesque 800 (display) / IBM Plex Mono or Space Mono (body). Ratio 1.5.
- **Layout signature:** thick 3px black borders, hard 6px offset shadows with no blur, blocks deliberately misaligned, stickers rotated −4°…6°.
- **Motion:** buttons press down into their shadow on hover; marquee ticker band; elements snap in (no easing longer than 200ms, `steps()` allowed).
- **Avoid:** soft shadows, subtle greys, thin fonts.

## `glass` — Aurora Glass
Tags: ai, fintech, crypto, web3, futuristic, premium, tech, night, app
- **Palette:** bg `#07070C` · surface `rgba(255,255,255,0.06)` · ink `#F5F5FA` · muted `#9A9AB0` · accent `#7CF2FF` · accent-2 `#B88CFF`
- **Type:** Sora or Manrope (display) / Inter (body) + JetBrains Mono for data. Ratio 1.333.
- **Layout signature:** slow-moving aurora blobs behind frosted panels (`backdrop-filter: blur(24px)`, 1px inner border at 12% white); hero product UI floats in perspective.
- **Motion:** blobs drift on a 20s loop; cursor-follow spotlight on panels; numbers count up when visible.
- **Avoid:** the generic purple→blue gradient on a white page — glass needs a dark field.

## `swiss` — Swiss International
Tags: corporate, consulting, architecture, finance, b2b, minimal, serious, clean, institution
- **Palette:** bg `#FFFFFF` · surface `#F2F2F2` · ink `#0A0A0A` · muted `#6D6D6D` · accent `#E30613` · accent-2 `#0A0A0A`
- **Type:** Inter Tight or Helvetica-like (display 700, tight tracking −0.03em) / same family body. Ratio 1.618.
- **Layout signature:** strict visible grid, flush-left ragged-right text, huge numerals as section markers (01, 02…), one red element per screen.
- **Motion:** precise, linear-ish: lines draw across the grid, text slides 24px with `power2.out`; no bounce.
- **Avoid:** centred layouts, decoration that is not typographic.

## `retro` — Retro Y2K / 70s Warm
Tags: food, drink, cafe, coffee, restaurant, bar, lifestyle, music, event, festival, fun, nostalgic, consumer
- **Palette:** bg `#FFF1DC` · surface `#FFD6A5` · ink `#3B1F0E` · muted `#845537` · accent `#E8562A` · accent-2 `#2F7D6D`
- **Type:** Shrikhand or Righteous (display) / DM Sans or Work Sans (body). Ratio 1.333.
- **Layout signature:** sunburst / wavy stripe shapes framing the hero, pill buttons, grain overlay at 6% opacity, rounded chunky illustrations from SVG.
- **Motion:** sun rays rotate slowly; wavy SVG paths morph; elements bounce in with `back.out(1.7)`.
- **Avoid:** flat corporate blue, thin line icons.

## `luxury` — Quiet Luxury
Tags: hotel, restaurant, real-estate, jewelry, beauty, fashion, wine, spa, premium, elegant, high-end
- **Palette:** bg `#0F0E0C` · surface `#1A1815` · ink `#EDE6D8` · muted `#8E8576` · accent `#C8A96A` · accent-2 `#EDE6D8`
- **Type:** Cormorant Garamond (display, light, wide tracking on labels) / Jost or Montserrat 300 (body). Ratio 1.5.
- **Layout signature:** generous negative space, full-bleed photography with slow Ken Burns, labels in letter-spaced uppercase 0.3em, hairline gold rules.
- **Motion:** everything slow (0.9–1.4s, `power3.out`); images scale from 1.08 to 1; text fades with slight blur-out.
- **Avoid:** more than one CTA per screen, bright colours, bold weights.

## `playful` — Playful Clay
Tags: kids, education, community, nonprofit, health, consumer, app, friendly, fun
- **Palette:** bg `#FDF6FF` · surface `#FFFFFF` · ink `#2B2440` · muted `#746D8B` · accent `#7B61FF` · accent-2 `#FFB938`
- **Type:** Nunito or Baloo 2 (display 800) / Nunito (body). Ratio 1.25.
- **Layout signature:** soft 3D "clay" shapes (layered radial gradients + inner shadows), blobs as section dividers, speech-bubble testimonials, big rounded radius (32px).
- **Motion:** shapes float with gentle yoyo; buttons squash on press; confetti burst on primary CTA click.
- **Avoid:** sharp corners, dense text blocks.

## `terminal` — Terminal / Dev Console
Tags: developer, api, infra, cli, open-source, security, tool, technical, hacker
- **Palette:** bg `#0B0F0C` · surface `#111A14` · ink `#D6F5DE` · muted `#86A38E` · accent `#3DFF8A` · accent-2 `#FFB454`
- **Type:** JetBrains Mono or IBM Plex Mono (everything), Space Grotesk allowed for the hero only. Ratio 1.2.
- **Layout signature:** hero is a working terminal that types the install command and shows output; sections styled as panes with title bars; ASCII dividers.
- **Primary CTA:** a copyable command block (`$ npm i -g …` + copy button) instead of a button.
- **Mobile:** stack pane rows, hide secondary columns, `overflow-wrap: anywhere` only on URLs/hashes; keep at least the terminal's first lines inside the first screen.
- **Motion:** typewriter with blinking caret; scanline flicker on load (one-off); copy-button success tick.
- **Avoid:** stock "code on laptop" images; neon overload — one green, one amber.

## `organic` — Organic Natural
Tags: wellness, food, coffee, tea, bakery, farm, sustainability, eco, skincare, outdoor, calm, craft
- **Palette:** bg `#F3EFE6` · surface `#E6DFCF` · ink `#2C3324` · muted `#575E4C` · accent `#4E6A2F` · accent-2 `#C7743E`
- **Type:** Gloock or DM Serif Display (display) / Karla or Outfit (body). Ratio 1.333. Script-safe (Vietnamese etc.): Fraunces / Be Vietnam Pro.
- **Layout signature:** irregular blob-masked images (asymmetric `clipPathUnits="objectBoundingBox"` paths, e.g. `M.08,.32 C.02,.12 .28,.0 .5,.04 C.76,.08 .98,.22 .95,.5 C.92,.8 .7,.98 .44,.95 C.18,.92 .14,.6 .08,.32Z` — never near-circles), paper texture, hand-drawn SVG underlines and arrows, asymmetric two-column story sections.
- **Motion:** SVG strokes draw on scroll; images drift slightly with parallax (≤ 40px); leaves/petals not allowed — keep it restrained.
- **Avoid:** pure white, neon, heavy drop shadows.

## `kinetic` — Kinetic Typography
Tags: agency, portfolio, event, music, launch, creative, bold, art, studio
- **Palette:** bg `#0D0D0D` · surface `#1C1C1C` · ink `#F2F2F2` · muted `#9A9A9A` · accent `#D4FF3A` · accent-2 `#FF3A5E`
- **Type:** Unbounded 800 or Anton (display) / Inter (body); Clash Display via Fontshare if external CSS is allowed. Ratio 1.618, hero type ≥ 14vw.
- **Layout signature:** type is the visual — giant words that scroll horizontally, split, outline/fill swap; minimal imagery revealed inside letterforms.
- **Motion:** hero: letter-by-letter split reveal · scroll: scrubbed horizontal text · hover: magnetic buttons + custom cursor that grows over links (one hover language). Gate the cursor on `(pointer: fine)` and hide it until the first pointer move.
- **Outline/fill:** use the text-stroke recipe in `motion-recipes.md` — plain `-webkit-text-stroke` shows inner contour lines on variable fonts.
- **Avoid:** small headlines, stock photos.

## `isometric` — Isometric / Diagrammatic
Tags: logistics, platform, infra, saas, b2b, data, process, explainer, systems
- **Palette:** bg `#EEF2F7` · surface `#FFFFFF` · ink `#0F1B2D` · muted `#5B6B82` · accent `#2563EB` · accent-2 `#14B8A6`
- **Type:** Plus Jakarta Sans (display 700) / Plus Jakarta Sans (body) + IBM Plex Mono labels. Ratio 1.25.
- **Layout signature:** isometric SVG scene (blocks, connectors, data packets) explaining how the product works; dotted-grid background; labelled callouts with leader lines.
- **Motion:** packets travel along connectors; scene builds layer by layer on scroll; callouts pop with a short delay chain.
- **Avoid:** generic hero illustration with people; decorative isometry that explains nothing.
