// Gera um HTML de entrada por rota (ex.: dist/ilmo.html), com título, descrição e
// canonical próprios. O GitHub Pages serve /ilmo a partir de ilmo.html, e o app
// React abre a página certa a partir do endereço.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const { siteUrl, routes } = JSON.parse(readFileSync(path.join(root, 'src/data/routes.json'), 'utf8'));
const template = readFileSync(path.join(dist, 'index.html'), 'utf8');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

for (const route of routes) {
  const url = siteUrl + route.path;
  const head =
    `<title>${esc(route.title)}</title>\n` +
    `    <meta name="description" content="${esc(route.description)}" />\n` +
    `    <link rel="canonical" href="${url}" />`;
  const html = template
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace(/\s*<meta name="description"[^>]*>/, '')
    .replace(/(<meta name="viewport"[^>]*>)/, `$1\n    ${head}`);
  const file = route.path === '/' ? 'index.html' : `${route.path.slice(1)}.html`;
  writeFileSync(path.join(dist, file), html);
  console.log(`rota ${route.path} -> dist/${file}`);
}
