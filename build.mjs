// Build the Summit static site into dist/ (run with: npm run build)
// 1. Pre-render every page to HTML with the design-system components
// 2. Assemble one stylesheet: tokens + fonts + components + page styles
// 3. Copy static assets
import { build } from 'esbuild';
import { execFileSync } from 'node:child_process';
import { copyFileSync, cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist');

await build({
  entryPoints: ['src/render.jsx'],
  bundle: true,
  platform: 'node',
  format: 'cjs',
  jsx: 'automatic',
  outfile: '.build/render.cjs',
  alias: { summitprovision: resolve('design-system/index.ts') },
  logLevel: 'warning',
});
execFileSync(process.execPath, ['.build/render.cjs'], { stdio: 'inherit' });

const read = (f) => readFileSync(f, 'utf8');
writeFileSync('dist/styles.css', [
  read('design-system/styles/tokens.css'),
  read('design-system/styles/fonts.css').replaceAll('./fonts/', '/fonts/'),
  read('design-system/styles/components.css'),
  read('src/page.css'),
].join(''));

copyFileSync('src/site.js', 'dist/site.js');
cpSync('public', 'dist', { recursive: true });
writeFileSync('dist/robots.txt', 'User-agent: *\nAllow: /\nSitemap: https://www.summitprovision.com/sitemap.xml\n');

console.log('Built dist/');
