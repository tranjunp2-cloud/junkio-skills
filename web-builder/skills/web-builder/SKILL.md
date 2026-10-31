---
name: web-builder
description: Build websites and landing pages that look art-directed instead of AI-generated. Picks a distinct, non-repeating visual direction (bento, editorial, brutalist, glass, retro, swiss, luxury, playful...), then builds, animates and self-reviews the page with screenshots. Use when the user asks to build, design, redesign or "make prettier" a website, landing page, homepage, portfolio, product or marketing page — or says the result looks generic, boring or like every other AI site.
argument-hint: "[brief] [--style <direction>] [--stack html|react|next] [--variants N]"
license: MIT
---

# Web Builder

## Scope and routing

Use this skill for websites, web UI, responsive layouts and browser interactions. For an existing page edit, apply only the relevant steps; do not choose a new art direction or rebuild unrelated sections. If the task only embeds an existing video, preserve the page design and use the video playback reference from the sibling video-builder package when available. Rendering a film, changing narration or retiming captions belongs to video-builder; HTML video compositions are not websites.

Turn a brief into a website that a designer would sign. The enemy is the
"default AI site": centered hero, purple gradient, three feature cards, Inter
everywhere, nothing that could not belong to any other product.

## Arguments

- `brief` — what the site is for. If missing, ask for: product/subject, audience, the one action a visitor should take.
- `--style <id>` — force a direction from `references/style-directions.md`. Default: picked by `scripts/pick-style.js`.
- `--stack` — `html` (single file, default when no project exists), `react`, or `next`. When a project already exists, use its stack and its components; never introduce a second UI library.
- `--variants N` — build N pages in N different directions so the user can choose (max 4).
- `--no-record` — do not record the direction in history (test runs, demos).

## Workflow

Follow the steps in order. Do not skip step 2 — it is what makes results differ.

### 1. Read the brief and the project

- Extract: subject, audience, tone (3 adjectives), primary call to action, real content you have (names, numbers, copy, images), and the page's language/script.
- Missing facts (email, prices, names): use obvious placeholders and list them in the delivery note — never invent believable real-looking ones.
- If inside a codebase, look for existing tokens (Tailwind config, CSS variables, theme files) and components. An existing brand overrides the direction's palette and fonts; the direction then only drives layout, motion and composition.

### 2. Choose an art direction

```bash
node ${CLAUDE_SKILL_DIR}/scripts/pick-style.js --brief "<industry + audience + 3 tone adjectives, in English>"
# options: --count N  --exclude id1,id2  --list
```

With `--style`, skip the script but still write the card. The script suggests directions that fit the brief's mood and avoids the ones
used most recently (history kept in `~/.web-builder/history.json`). Read the
chosen entry in `references/style-directions.md` and write a short
**direction card** before any code:

```
Direction: <name>
Why it fits: <one sentence tied to the brief>
Palette: <4–6 hex values with roles: bg, surface, ink, muted, accent, accent-2>
Type: <display font> / <body font> (+ mono if needed), scale ratio
Layout signature: <the one compositional move people will remember>
Motion: <1 hero moment + 1 scroll behaviour + hover language>
```

Show the card to the user in one short block, then continue without waiting
unless they asked to approve directions first. In non-interactive runs, put the card in the delivery report.
If you change any palette hue, re-check text pairs with `node ${CLAUDE_SKILL_DIR}/scripts/check-contrast.js <fg> <bg> ...`.
Confirm every chosen font covers the page's language; otherwise use the direction's script-safe alternative.

### 3. Build

- Write real, specific copy from the brief. No lorem ipsum, no "Unlock the power of", no "Seamless", no fake testimonials attributed to real people.
- Define the palette and type as tokens first (CSS custom properties or Tailwind theme), then use only tokens.
- Implement the layout signature in the hero and echo it at least once lower on the page — that repetition is what makes a page feel designed.
- Sections: only what the brief needs. Typical: hero → proof → how/what → detail → CTA → footer. Vary section rhythm (full-bleed, split, dense grid, quiet single line) instead of stacking identical blocks.
- Images: use provided assets; otherwise use CSS/SVG compositions, gradients, patterns or typographic art. Generated imagery (`ai-artist`, `ai-multimodal`) is optional — use it for project builds when available, skip it for single-file `html` output unless the user asks.
- Dark mode only when the project or user asks for it.
- Fonts: load from Google Fonts or the project's font setup; always set fallbacks.

Read `references/anti-slop-rules.md` before writing markup. Treat every rule as a hard constraint.

### 4. Animate

Pick recipes from `references/motion-recipes.md` that match the direction's motion line.
Use GSAP when available or the stack already has it (if the `gsap-*` skills are installed, follow them); otherwise CSS + IntersectionObserver.
Always honour `prefers-reduced-motion`, and always implement the `?static` mode described there — step 5 depends on it.

### 5. Self-review with screenshots

- Capture with any browser tool (Playwright, `agent-browser`, `chrome-devtools`, Claude in Chrome). With Playwright:
  ```bash
  npx -y playwright screenshot --viewport-size=1440,900 --full-page --wait-for-timeout=2000 "file:///abs/index.html?static" desktop.png
  npx -y playwright screenshot --viewport-size=390,844  --full-page --wait-for-timeout=2000 "file:///abs/index.html?static" mobile.png
  npx -y playwright screenshot --viewport-size=1440,900 --wait-for-timeout=3000 "file:///abs/index.html" desktop-animated.png
  ```
- Tall full-page images get downscaled when viewed and small defects disappear. Review them in viewport-height slices (e.g. `ffmpeg -i desktop.png -vf "crop=iw:900:0:900*N" slice-N.png`) or per-section element screenshots.
- Look at the images — do not review from code alone. Check items marked *(script)* in the checklist with a short browser script.
- Run through `references/review-checklist.md`. Fix every failed item, re-capture, repeat until the checklist passes.
- If installed, `web-design-guidelines` or `ui-ux-pro-max` may be used as an additional review pass; they are optional.

### 6. Deliver

Report: direction card, files created, how to open/run it, the screenshots, and
any placeholders left in the copy. Then, unless `--no-record` was given, record the
direction so the next run differs:

```bash
node ${CLAUDE_SKILL_DIR}/scripts/pick-style.js --record <direction-id>
```

## Variants mode

With `--variants N`, run `pick-style.js --count N`, build each variant in its own
file/route (`variant-<id>.html` or `/variants/<id>`), and finish with a
side-by-side summary: one line per variant on what makes it different.
Variants must differ in layout signature, not just colour.

## Optional integrations

Use these when present; never require them:

| If available | Use it for |
|---|---|
| `ui-ux-pro-max` | extra palette / font-pairing lookup for the chosen direction |
| `gsap-*` skills | correct GSAP, ScrollTrigger and timeline usage |
| `ui-styling` / shadcn in project | component primitives in React stacks |
| `ai-artist`, `ai-multimodal` | generated hero or section imagery |
| browser automation skills | screenshots for step 5 |
