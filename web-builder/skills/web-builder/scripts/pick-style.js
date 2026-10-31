#!/usr/bin/env node
// Suggest art directions for a brief, avoiding recently used ones.
// Directions are parsed from ../references/style-directions.md (single source of truth).
//
// Usage:
//   pick-style.js --brief "coffee roastery shop" [--count 3] [--exclude retro,organic]
//   pick-style.js --list
//   pick-style.js --record bento
//
// History: ~/.web-builder/history.json (override with WEB_BUILDER_HISTORY).

const fs = require('fs');
const os = require('os');
const path = require('path');

const DIRECTIONS_FILE = path.join(__dirname, '..', 'references', 'style-directions.md');
const HISTORY_FILE = process.env.WEB_BUILDER_HISTORY || path.join(os.homedir(), '.web-builder', 'history.json');
const HISTORY_LIMIT = 20;
const RECENT_WINDOW = 4; // directions used in the last N runs get penalised

function parseArgs(argv) {
  const args = { count: 1, exclude: [] };
  for (let i = 0; i < argv.length; i++) {
    const key = argv[i];
    const next = () => argv[++i];
    if (key === '--brief') args.brief = next() || '';
    else if (key === '--count') args.count = Math.max(1, Math.min(4, parseInt(next(), 10) || 1));
    else if (key === '--exclude') args.exclude = (next() || '').split(',').map(s => s.trim()).filter(Boolean);
    else if (key === '--record') args.record = next();
    else if (key === '--list') args.list = true;
    else if (key === '--help' || key === '-h') args.help = true;
  }
  return args;
}

// Each direction starts with "## `id` — Name" followed by a "Tags:" line.
function loadDirections() {
  const md = fs.readFileSync(DIRECTIONS_FILE, 'utf8');
  const directions = [];
  const re = /^## `([a-z0-9-]+)` — (.+)$\n^Tags: (.+)$/gm;
  let m;
  while ((m = re.exec(md))) {
    directions.push({ id: m[1], name: m[2].trim(), tags: m[3].split(',').map(t => t.trim().toLowerCase()) });
  }
  if (!directions.length) throw new Error(`No directions parsed from ${DIRECTIONS_FILE}`);
  return directions;
}

function readHistory() {
  try {
    const data = JSON.parse(fs.readFileSync(HISTORY_FILE, 'utf8'));
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function writeHistory(history) {
  fs.mkdirSync(path.dirname(HISTORY_FILE), { recursive: true });
  fs.writeFileSync(HISTORY_FILE, JSON.stringify(history.slice(-HISTORY_LIMIT), null, 2));
}

function tokenize(text) {
  return (text || '').toLowerCase().split(/[^a-z0-9-]+/).filter(w => w.length > 1);
}

// Score = tag matches (prefix match so "developers" hits "developer")
//         − recency penalty + small random jitter so ties rotate.
function score(direction, words, recent) {
  const matches = direction.tags.filter(tag => words.some(w => w.startsWith(tag) || tag.startsWith(w))).length;
  const recentIndex = recent.lastIndexOf(direction.id);
  const penalty = recentIndex === -1 ? 0 : 3 + (recentIndex / Math.max(1, recent.length)) * 2;
  return { ...direction, matches, score: matches * 2 - penalty + Math.random() };
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const directions = loadDirections();

  if (args.help) {
    console.log(fs.readFileSync(__filename, 'utf8').split('\n').slice(1, 11).map(l => l.replace(/^\/\/ ?/, '')).join('\n'));
    return;
  }

  if (args.list) {
    directions.forEach(d => console.log(`${d.id.padEnd(11)} ${d.name.padEnd(26)} ${d.tags.join(', ')}`));
    return;
  }

  if (args.record) {
    if (!directions.some(d => d.id === args.record)) {
      console.error(`Unknown direction "${args.record}". Run --list to see ids.`);
      process.exit(1);
    }
    const history = readHistory();
    history.push(args.record);
    writeHistory(history);
    console.log(`Recorded "${args.record}" (${HISTORY_FILE})`);
    return;
  }

  const words = tokenize(args.brief);
  const recent = readHistory().slice(-RECENT_WINDOW);
  const ranked = directions
    .filter(d => !args.exclude.includes(d.id))
    .map(d => score(d, words, recent))
    .sort((a, b) => b.score - a.score)
    .slice(0, args.count);

  if (!ranked.length) {
    console.error('Every direction was excluded.');
    process.exit(1);
  }

  ranked.forEach((d, i) => {
    const why = d.matches ? `${d.matches} tag match(es)` : 'no tag match — picked for variety';
    const used = recent.includes(d.id) ? ', used recently' : '';
    console.log(`${i + 1}. ${d.id} — ${d.name} (${why}${used})`);
  });
  console.log('\nRead the chosen entry in references/style-directions.md, then record it with --record <id> after delivery.');
}

try {
  main();
} catch (err) {
  console.error(`pick-style: ${err.message}`);
  process.exit(1);
}
