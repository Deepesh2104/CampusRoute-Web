/**
 * Regenerate Angular landing from legacy single-file HTML (1:1).
 * Usage: node tools/sync-legacy-landing.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.join(__dirname, '..');
const legacyPath =
  'F:\\CampusRoute\\legacy\\CampusRoute – From education decisions to career outcomes.html';

const html = fs.readFileSync(legacyPath, 'utf8');

const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/i);
const bodyMatch = html.match(/<body>([\s\S]*?)<script>/i);
const scriptMatch = html.match(/<script>\s*([\s\S]*?)<\/script>\s*<\/body>/i);

if (!styleMatch || !bodyMatch || !scriptMatch) {
  console.error('Could not parse legacy HTML');
  process.exit(1);
}

let css = styleMatch[1].trim();
let bodyHtml = bodyMatch[1].trim();
let js = scriptMatch[1].trim();

// Angular route: apply legacy body chrome to document.body while landing is open.
css = css.replace(/\bbody\{/g, 'body.cr-legacy-landing{');
css = css.replace(/\bbody::before/g, 'body.cr-legacy-landing::before');

const scssPath = path.join(
  repoRoot,
  'libs/marketing/landing/src/styles/landing.scss',
);
const htmlPath = path.join(
  repoRoot,
  'libs/marketing/landing/src/feature/landing-page/landing-page.component.html',
);
const runtimePath = path.join(
  repoRoot,
  'libs/marketing/landing/src/feature/landing-page/landing-page.runtime.ts',
);

fs.writeFileSync(
  scssPath,
  `/* AUTO-GENERATED from legacy HTML — run: node tools/sync-legacy-landing.mjs */\n${css}\ncr-landing-page{display:block;margin:0;min-height:100%}\n`,
  'utf8',
);

fs.writeFileSync(htmlPath, bodyHtml + '\n', 'utf8');

const runtimeTs = `// AUTO-GENERATED from legacy HTML — run: node tools/sync-legacy-landing.mjs
// @ts-nocheck

/** Runs legacy landing IIFE exactly as in the static HTML file. */
export function initLandingPageRuntime(): () => void {
  document.getElementById('bar')?.remove();
  document.getElementById('cg')?.remove();

${js}

  return function teardownLandingRuntime() {
    document.getElementById('bar')?.remove();
    document.getElementById('cg')?.remove();
    document.body.style.overflow = '';
    document.getElementById('auth')?.classList.remove('on');
  };
}
`;

fs.writeFileSync(runtimePath, runtimeTs, 'utf8');

console.log('Wrote:', scssPath);
console.log('Wrote:', htmlPath);
console.log('Wrote:', runtimePath);
