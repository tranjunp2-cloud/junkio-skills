# Motion recipes

Rule of thumb: **one hero moment, one scroll behaviour, one hover language.**
More than that reads as noise. Durations: UI feedback 150–250ms, reveals
500–900ms, ambient loops ≥ 8s.

Always wrap motion:

```js
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduce) { /* animations */ }
```

```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; }
}
```

### Static mode (`?static`) — required

Full-page screenshots never scroll, so scroll reveals stay hidden, typewriters are caught
mid-way and loops are frozen at random frames. Every page supports `?static`, which shows
the final state: no hidden start states, no pinning, no loops, typewriters complete.

```js
const STATIC = new URLSearchParams(location.search).has('static');
const reduce = STATIC || matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduce) { /* all GSAP / observers / loops */ }
```

Static mode hides real animation bugs, so step 5 also takes one viewport screenshot without it.

GSAP (free incl. plugins) via CDN, pinned version:

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
```

---

## Hero moments

**Masked line reveal** (editorial, swiss, luxury)
```js
// wrap each line in <span class="line"><span>text</span></span>; .line { overflow: hidden; display: block }
gsap.from('.hero .line > span', { yPercent: 110, duration: .9, ease: 'power3.out', stagger: .08 });
```

**Split letters** (kinetic, brutalist)
```js
document.querySelectorAll('[data-split]').forEach(el => {
  el.innerHTML = [...el.textContent].map(c => `<span class="ch">${c === ' ' ? '&nbsp;' : c}</span>`).join('');
  el.setAttribute('aria-label', el.textContent);
});
gsap.from('[data-split] .ch', { y: '0.6em', opacity: 0, rotate: 8, duration: .6, ease: 'back.out(2)', stagger: .025 });
```
Gotchas: `aria-label` only counts on an element with a role (put it on the `h1`/`a`, or add an sr-only copy and `aria-hidden` the split spans).
Splitting into inline-block spans breaks a parent's `background-clip: text` — apply the fill to each `.ch`.
Clipped fills and tight line-height cut off stacked diacritics (Vietnamese ắ, ễ) — add vertical padding to the spans and test with the brief's real language.

**Outline ↔ fill text** (kinetic, brutalist, swiss numerals)
```css
/* plain -webkit-text-stroke draws inner contour overlaps on variable fonts */
.outline { color: var(--bg); -webkit-text-stroke: 2px var(--ink); paint-order: stroke fill; } /* stroke = 2× visible width */
.outline.is-filled { color: var(--ink); transition: color .3s; }
```

**Bento assemble** (bento, isometric)
```js
gsap.from('.tile', { scale: .9, opacity: 0, y: 24, duration: .7, ease: 'power3.out', stagger: { each: .06, from: 'center' } });
```

**Typewriter terminal** (terminal)
```js
// Final text lives in the HTML (works without JS, for screen readers and ?static); JS replays it.
// Give the visual terminal aria-hidden="true" plus a sibling sr-only description or role="img" + aria-label.
async function type(el, ms = 45) {
  const text = el.textContent; el.textContent = '';
  for (const c of text) { el.textContent += c; await new Promise(r => setTimeout(r, ms)); }
}
```

**Aurora field** (glass) — pure CSS
```css
.aurora { position: absolute; inset: -20%; filter: blur(80px); opacity: .55;
  background: radial-gradient(40% 40% at 30% 30%, var(--accent), transparent 70%),
              radial-gradient(35% 35% at 70% 60%, var(--accent-2), transparent 70%);
  animation: drift 20s ease-in-out infinite alternate; }
@keyframes drift { to { transform: translate3d(6%, -4%, 0) rotate(12deg); } }
```

## Scroll behaviours

**Batch reveal** (any)
```js
// gsap.from inside onEnter flashes content visible → hidden → animated. Set first, then animate to.
gsap.registerPlugin(ScrollTrigger);
gsap.set('[data-reveal]', { y: 32, opacity: 0 });
ScrollTrigger.batch('[data-reveal]', { start: 'top 85%', once: true,
  onEnter: els => gsap.to(els, { y: 0, opacity: 1, duration: .7, ease: 'power2.out', stagger: .08 }) });
```

**Horizontal type scrub** (kinetic)
```js
gsap.to('.marquee-track', { xPercent: -50, ease: 'none',
  scrollTrigger: { trigger: '.marquee', start: 'top bottom', end: 'bottom top', scrub: true } });
```

**Pinned story** (isometric, bento, editorial long-form)
```js
const tl = gsap.timeline({ scrollTrigger: { trigger: '.story', start: 'top top', end: '+=200%', pin: true, scrub: 1 } });
tl.from('.step-1', { opacity: 0 }).from('.step-2', { opacity: 0 }).from('.step-3', { opacity: 0 });
```
Disable pinning under 768px — use a simple batch reveal instead.

**SVG stroke draw** (organic, isometric)
```js
document.querySelectorAll('path[data-draw]').forEach(p => {
  const len = p.getTotalLength(); p.style.strokeDasharray = len; p.style.strokeDashoffset = len;
  gsap.to(p, { strokeDashoffset: 0, duration: 1.4, ease: 'power2.inOut', scrollTrigger: { trigger: p, start: 'top 80%' } });
});
```

**Count-up numbers** (glass, bento, swiss)
```js
document.querySelectorAll('[data-count]').forEach(el => {
  const o = { v: 0 };
  gsap.to(o, { v: +el.dataset.count, duration: 1.6, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true },
    onUpdate: () => el.textContent = Math.round(o.v).toLocaleString() });
});
```

## Hover languages

| Direction | Hover |
|---|---|
| brutalist | `transform: translate(4px,4px); box-shadow: 2px 2px 0 #000` |
| bento | `rotateX/rotateY` ≤ 3° following cursor, shadow deepens |
| glass | radial spotlight via `--mx/--my` custom props set on `pointermove` |
| editorial, swiss | underline grows `background-size: 0 1px → 100% 1px` |
| kinetic | magnetic button: translate toward cursor ≤ 12px, spring back |
| luxury | slow colour shift 400ms, no movement |
| terminal | inverted "selection" block (`background: var(--ink); color: var(--bg)`) + caret after link text |
| organic | hand-drawn squiggle underline (SVG `background-image`) + 2px lift on pills |
| isometric | connector to the hovered callout highlights in accent, block raises 4px on its z-axis |
| playful, retro | squash `scale(1.04, .96)` on press, bounce back |

Kinetic's magnetic buttons + custom cursor count as one hover language. Custom cursors:
gate on `matchMedia('(pointer: fine)')`, keep hidden until the first `pointermove`, never hide the native cursor on touch.

**Magnetic button**
```js
document.querySelectorAll('[data-magnetic]').forEach(b => {
  b.addEventListener('pointermove', e => { const r = b.getBoundingClientRect();
    gsap.to(b, { x: (e.clientX - r.left - r.width / 2) * .25, y: (e.clientY - r.top - r.height / 2) * .25, duration: .3 }); });
  b.addEventListener('pointerleave', () => gsap.to(b, { x: 0, y: 0, duration: .5, ease: 'elastic.out(1, .4)' }));
});
```

## Performance
- Animate only `transform`, `opacity`, `clip-path`, `filter` (sparingly).
- Set initial hidden states from JS (`gsap.set` / `gsap.from`, or a class added by JS) so the page is readable without JS.
- Texture/grain overlays: `position: absolute; inset: 0` on a `position: relative` body, not `position: fixed` — fixed layers leave a seam in full-page screenshots.
- Kill ScrollTriggers on route change in SPAs (`ScrollTrigger.getAll().forEach(t => t.kill())` or `gsap.context().revert()`).
