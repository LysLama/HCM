#!/usr/bin/env node
/**
 * Extract user-facing web content to CSV.
 *
 * Scope (best-effort):
 *  - index.html title/meta text
 *  - src/** (JS/JSX) JSX text + common attributes (alt, aria-label, placeholder, title)
 *  - src/data/* (quiz data, raw text)
 *
 * Output:
 *  - WEB_CONTENT.csv at repo root
 */

import fs from 'node:fs';
import path from 'node:path';

const repoRoot = process.cwd();

const INCLUDE_EXT = new Set(['.js', '.jsx', '.html', '.txt']);
const EXCLUDE_DIRS = new Set(['node_modules', 'dist', '.git']);

function isProbablyVietnamese(text) {
  // Vietnamese diacritics
  return /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i.test(text);
}

function guessLang(text) {
  const s = String(text || '').trim();
  if (!s) return 'unknown';
  if (isProbablyVietnamese(s)) return 'vi';
  // Very rough heuristic for EN: contains a-z and spaces, not too many symbols
  if (/[a-z]/i.test(s) && !/[^\x00-\x7F]/.test(s)) return 'en';
  return 'unknown';
}

function csvEscape(value) {
  const s = String(value ?? '');
  if (/[\n\r,\"]/g.test(s)) return '"' + s.replace(/"/g, '""') + '"';
  return s;
}

function rel(p) {
  return p.split(path.sep).join('/');
}

function* walkFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (EXCLUDE_DIRS.has(ent.name)) continue;
      yield* walkFiles(full);
      continue;
    }
    if (!ent.isFile()) continue;
    const ext = path.extname(ent.name).toLowerCase();
    const shouldInclude = INCLUDE_EXT.has(ext) || ent.name === 'quizData';
    if (!shouldInclude) continue;
    yield full;
  }
}

function toLineIndexMap(text) {
  // Build array of line start offsets
  const starts = [0];
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '\n') starts.push(i + 1);
  }
  return starts;
}

function offsetToLine(lineStarts, offset) {
  // Binary search largest start <= offset
  let lo = 0, hi = lineStarts.length - 1, ans = 0;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (lineStarts[mid] <= offset) { ans = mid; lo = mid + 1; }
    else hi = mid - 1;
  }
  return ans + 1; // 1-based
}

function pushRow(rows, row) {
  const key = [row.file, row.line_start, row.type, row.text].join('|');
  if (rows._seen.has(key)) return;
  rows._seen.add(key);
  rows.push(row);
}

function extractFromIndexHtml(filePath, content, routesByFile, rows) {
  const ls = toLineIndexMap(content);
  const titleMatch = content.match(/<title>([\s\S]*?)<\/title>/i);
  if (titleMatch) {
    const idx = content.indexOf(titleMatch[0]);
    pushRow(rows, {
      type: 'document.title',
      file: rel(path.relative(repoRoot, filePath)),
      line_start: offsetToLine(ls, idx),
      line_end: offsetToLine(ls, idx + titleMatch[0].length),
      route: '(all)',
      lang: guessLang(titleMatch[1]),
      text: titleMatch[1].trim(),
    });
  }
  const metaMatches = [...content.matchAll(/<meta\s+[^>]*?>/gi)];
  for (const m of metaMatches) {
    const tag = m[0];
    const name = (tag.match(/\bname\s*=\s*"([^"]+)"/i)?.[1]) || (tag.match(/\bproperty\s*=\s*"([^"]+)"/i)?.[1]);
    const value = tag.match(/\bcontent\s*=\s*"([^"]*)"/i)?.[1];
    if (!value || !value.trim()) continue;
    const idx = m.index;
    pushRow(rows, {
      type: `meta:${name || 'content'}`,
      file: rel(path.relative(repoRoot, filePath)),
      line_start: offsetToLine(ls, idx),
      line_end: offsetToLine(ls, idx + tag.length),
      route: '(all)',
      lang: guessLang(value),
      text: value.trim(),
    });
  }
}

function extractTextNodesHeuristic(filePath, content, routesByFile, rows) {
  const ext = path.extname(filePath).toLowerCase();
  const relPath = rel(path.relative(repoRoot, filePath));
  const routes = routesByFile.get(relPath) || ['(global)'];
  const route = routes.join(' | ');
  const ls = toLineIndexMap(content);

  const isAssetLike = (s) =>
    /^\s*(\.\.\/|\.\/|\/)/.test(s) ||
    /\.(css|jsx|js|ts|tsx|svg|png|jpe?g|gif|webp|ico|json)$/i.test(s) ||
    /^(react|react-dom|react-router-dom|react-icons)(\b|\/)/i.test(s);

  const isInfraLike = (s) => {
    const t = s.trim();
    if (!t) return true;
    // MIME types and variants
    if (/^[a-z]+\/[a-z0-9.+-]+(\s*;\s*charset=[a-z0-9_-]+)?$/i.test(t)) return true;
    // HTTP methods
    if (/^(GET|POST|PUT|PATCH|DELETE|OPTIONS|HEAD)$/i.test(t)) return true;
    // Common header names
    if (/^(accept|accept-language|accept-encoding|authorization|content-type|cache-control|pragma|expires|user-agent|referer|origin)$/i.test(t)) return true;
    // Common content-type shorthands
    if (/^application\/(json|xml|x-www-form-urlencoded)$/i.test(t)) return true;
    return false;
  };

  const isCodeLike = (s) => {
    const t = s.trim();
    if (!t) return true;
    // Likely JS function call / handler name in HTML attrs
    if (/^[A-Za-z_$][A-Za-z0-9_$]*\([^\n]*\)$/.test(t) && !/\s/.test(t)) return true;
    if (t.includes('{') || t.includes('}') || t.includes('=>')) return true;
    if (t.includes('/*') || t.includes('*/') || t.includes('//')) return true;
    if (/[;=]/.test(t)) return true;
    if (/\b(const|let|var|return|import|export|function|class|useState|useEffect|set[A-Z])\b/.test(t)) return true;
    return false;
  };

  // 0) Plain text files: export per-line content with line numbers.
  if (ext === '.txt') {
    const lines = content.split(/\r?\n/);
    for (let i = 0; i < lines.length; i++) {
      const raw = lines[i].trim();
      if (!raw) continue;
      // Skip separator-only lines
      if (!/[A-Za-z0-9À-ỹ]/.test(raw)) continue;
      pushRow(rows, {
        type: 'text:line',
        file: relPath,
        line_start: i + 1,
        line_end: i + 1,
        route,
        lang: guessLang(raw),
        text: raw,
      });
    }
    return;
  }

  // 1) Common attributes (works for JSX & HTML)
  const attrRe = /(aria-label|placeholder|title|alt)\s*=\s*(\{\s*)?(["'`])([\s\S]*?)\3/gi;
  for (const m of content.matchAll(attrRe)) {
    const raw = (m[4] || '').trim();
    if (!raw) continue;
    if (raw.length < 2) continue;
    if (/^\s*(https?:\/\/|\/)/i.test(raw)) continue;
    if (isAssetLike(raw)) continue;
    if (isInfraLike(raw)) continue;
    if (isCodeLike(raw)) continue;
    const idx = m.index;
    pushRow(rows, {
      type: `attr:${m[1]}`,
      file: relPath,
      line_start: offsetToLine(ls, idx),
      line_end: offsetToLine(ls, idx + m[0].length),
      route,
      lang: guessLang(raw),
      text: raw,
    });
  }

  // 2) HTML text between tags (safe). For JSX/JS we skip this because it tends to capture code blocks.
  if (ext === '.html') {
    const betweenTags = />\s*([^<{][^<]*?)\s*</g;
    for (const m of content.matchAll(betweenTags)) {
      const raw = (m[1] || '').replace(/\s+/g, ' ').trim();
      if (!raw) continue;
      if (raw.length < 2) continue;
      if (!/[A-Za-z0-9À-ỹ]/.test(raw)) continue;
      if (isCodeLike(raw)) continue;
      const idx = m.index;
      pushRow(rows, {
        type: ext === '.html' ? 'html:text' : 'text',
        file: relPath,
        line_start: offsetToLine(ls, idx),
        line_end: offsetToLine(ls, idx + m[0].length),
        route,
        lang: guessLang(raw),
        text: raw,
      });
    }
  }

  // 3) String literals in JS/JSX (best-effort). Skip for HTML to avoid handler strings, MIME types, etc.
  if (ext === '.html') return;

  // Capture "..." and '...' and `...` but skip obvious code-y strings and urls.
  const strRe = /(?<!\\)(["'`])((?:\\.|(?!\1)[\s\S])*?)\1/g;
  for (const m of content.matchAll(strRe)) {
    const raw = (m[2] || '').trim();
    if (!raw) continue;
    if (raw.length < 3) continue;
    if (/^\s*(https?:\/\/|\/)/i.test(raw)) continue;
    if (/^\s*(@cf\/|CF_|Bearer\s+)/.test(raw)) continue;
    if (isAssetLike(raw)) continue;
    if (isInfraLike(raw)) continue;
    if (isCodeLike(raw)) continue;
    // ignore css class names and tiny identifiers
    if (/^[A-Za-z0-9_-]+$/.test(raw) && raw.length < 18) continue;
    if (!/[A-Za-z0-9À-ỹ]/.test(raw)) continue;

    // Reduce noise from obvious code templates
    if (raw.includes('${')) continue;

    const idx = m.index;
    pushRow(rows, {
      type: 'string:literal',
      file: relPath,
      line_start: offsetToLine(ls, idx),
      line_end: offsetToLine(ls, idx + m[0].length),
      route,
      lang: guessLang(raw),
      text: raw.replace(/\s+/g, ' '),
    });
  }
}

function buildRoutesByFile() {
  const mainPath = path.join(repoRoot, 'src', 'main.jsx');
  const src = fs.readFileSync(mainPath, 'utf8');

  // Map component symbol -> relative import path
  const importMap = new Map();
  const importRe = /^\s*import\s+([A-Za-z0-9_]+)\s+from\s+['"](.+?)['"]/gm;
  for (const m of src.matchAll(importRe)) {
    const symbol = m[1];
    const imp = m[2];
    if (!imp.startsWith('./') && !imp.startsWith('../')) continue;
    // main.jsx is in src/, so resolve relative to src/
    const abs = path.resolve(path.join(repoRoot, 'src'), imp);
    const relFile = rel(path.relative(repoRoot, abs));
    importMap.set(symbol, relFile);
  }

  // Map element <Symbol /> to path string
  const routesByFile = new Map();

  const routeObjRe = /path\s*:\s*(["'])(.*?)\1\s*,\s*element\s*:\s*<\s*([A-Za-z0-9_]+)\s*\/?\s*>/g;
  for (const m of src.matchAll(routeObjRe)) {
    const routePath = m[2];
    const symbol = m[3];
    const file = importMap.get(symbol);
    if (!file) continue;
    const list = routesByFile.get(file) || [];
    list.push(routePath);
    routesByFile.set(file, list);
  }

  // Layout applies globally
  const layoutFile = importMap.get('MainLayout');
  if (layoutFile) {
    routesByFile.set(layoutFile, ['(layout/global)']);
  }

  // Components used globally but not routed: best-effort (leave default)
  return routesByFile;
}

function main() {
  const routesByFile = buildRoutesByFile();

  /** @type {Array<any> & {_seen: Set<string>}} */
  const rows = /** @type any */ ([]);
  rows._seen = new Set();

  // index.html first
  const indexPath = path.join(repoRoot, 'index.html');
  if (fs.existsSync(indexPath)) {
    const indexContent = fs.readFileSync(indexPath, 'utf8');
    extractFromIndexHtml(indexPath, indexContent, routesByFile, rows);
    extractTextNodesHeuristic(indexPath, indexContent, routesByFile, rows);
  }

  // src/** and src/data/**. Optionally include legacy test-api.html.
  const roots = [path.join(repoRoot, 'src')];
  if (process.env.INCLUDE_TEST_API_HTML === '1') {
    roots.push(path.join(repoRoot, 'test-api.html'));
  }

  for (const root of roots) {
    if (!fs.existsSync(root)) continue;
    const stat = fs.statSync(root);
    if (stat.isFile()) {
      const text = fs.readFileSync(root, 'utf8');
      extractTextNodesHeuristic(root, text, routesByFile, rows);
      continue;
    }
    for (const filePath of walkFiles(root)) {
      const text = fs.readFileSync(filePath, 'utf8');
      extractTextNodesHeuristic(filePath, text, routesByFile, rows);
    }
  }

  // Sort by file then line
  rows.sort((a, b) => (a.file.localeCompare(b.file) || a.line_start - b.line_start || a.type.localeCompare(b.type)));

  const outPath = path.join(repoRoot, 'WEB_CONTENT.csv');
  const header = ['type', 'route', 'lang', 'file', 'line_start', 'line_end', 'text'];
  const lines = [header.map(csvEscape).join(',')];
  for (const r of rows) {
    lines.push([
      r.type,
      r.route,
      r.lang,
      r.file,
      r.line_start,
      r.line_end,
      r.text,
    ].map(csvEscape).join(','));
  }

  fs.writeFileSync(outPath, lines.join('\n'), 'utf8');
  console.log(`Wrote ${rows.length} rows to ${rel(path.relative(repoRoot, outPath))}`);
}

main();
