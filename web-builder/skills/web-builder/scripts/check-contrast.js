#!/usr/bin/env node
// WCAG 2.x contrast ratio between colour pairs.
//
// Usage:
//   check-contrast.js <fg> <bg> [<fg> <bg> ...]     e.g. check-contrast.js 86A38E 0B0F0C "#fff" "#4E6A2F"
//
// Prints the ratio and AA verdicts (4.5:1 body text, 3:1 large text / UI). Exits 1 if any pair fails body AA.

function parseHex(input) {
  let hex = String(input).trim().replace(/^#/, '');
  if (hex.length === 3) hex = [...hex].map(c => c + c).join('');
  if (!/^[0-9a-f]{6}$/i.test(hex)) throw new Error(`Not a hex colour: "${input}"`);
  return [0, 2, 4].map(i => parseInt(hex.slice(i, i + 2), 16) / 255);
}

function luminance(rgb) {
  const [r, g, b] = rgb.map(c => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function ratio(fg, bg) {
  const [hi, lo] = [luminance(parseHex(fg)), luminance(parseHex(bg))].sort((a, b) => b - a);
  return (hi + 0.05) / (lo + 0.05);
}

const pairs = process.argv.slice(2);
if (!pairs.length || pairs.length % 2) {
  console.error('Usage: check-contrast.js <fg> <bg> [<fg> <bg> ...]');
  process.exit(2);
}

let failed = false;
try {
  for (let i = 0; i < pairs.length; i += 2) {
    const r = ratio(pairs[i], pairs[i + 1]);
    const body = r >= 4.5 ? 'pass' : 'FAIL';
    const large = r >= 3 ? 'pass' : 'FAIL';
    if (r < 4.5) failed = true;
    console.log(`${pairs[i]} on ${pairs[i + 1]}: ${r.toFixed(2)}:1  body ${body} · large/UI ${large}`);
  }
} catch (err) {
  console.error(`check-contrast: ${err.message}`);
  process.exit(2);
}
process.exit(failed ? 1 : 0);
