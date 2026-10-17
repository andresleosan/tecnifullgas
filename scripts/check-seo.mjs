import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const site = 'https://www.tecnifullgas.com';
const pages = [
  { file: 'index.html', path: '/', topic: /gas.*Medellín/i },
  { file: 'reparacion-calentadores-gas-medellin.html', path: '/reparacion-calentadores-gas-medellin', topic: /calentadores.*Medellín/i },
  { file: 'reparacion-estufas-gas-medellin.html', path: '/reparacion-estufas-gas-medellin', topic: /estufas.*Medellín/i },
];

const titles = new Set();
for (const page of pages) {
  const html = await readFile(`dist/${page.file}`, 'utf8');
  const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)];
  assert.equal(h1s.length, 1, `${page.path}: un H1 en el HTML inicial`);
  assert.match(h1s[0][1].replace(/<[^>]+>/g, ''), page.topic);
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  assert(title && !titles.has(title), `${page.path}: título único`);
  titles.add(title);
  const canonicals = [...html.matchAll(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"[^>]*>/g)];
  assert.equal(canonicals.length, 1, `${page.path}: un canonical`);
  assert.equal(canonicals[0][1], site + page.path);
  assert.match(html, /https:\/\/wa\.me\/573014065931/, `${page.path}: contacto en HTML`);
  assert(!html.includes('tecnifullgas.pages.dev'), `${page.path}: dominio coherente`);
  assert(!html.includes('74b') && !html.includes('94-121'), 'Dirección privada ausente');
  const schemas = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  assert.equal(schemas.length, 1, `${page.path}: un bloque JSON-LD`);
  const schema = JSON.parse(schemas[0][1]);
  assert.equal(schema['@context'], 'https://schema.org');
  assert(!JSON.stringify(schema).includes('TollFree'), 'Celular no marcado como gratuito');
  assert(!JSON.stringify(schema).includes('GeoCoordinates'), 'Sin coordenadas aproximadas');
  const otherPages = pages.filter((candidate) => candidate.path !== page.path);
  for (const other of otherPages) {
    assert(html.includes(`href="${other.path}"`), `${page.path}: enlace rastreable a ${other.path}`);
  }
  const workImages = [...html.matchAll(/<img\b[^>]*src="(\/img\/trabajos\/[^"]+)"[^>]*>/g)];
  assert(workImages.length > 0, `${page.path}: fotos de trabajos en HTML inicial`);
  for (const [image, src] of workImages) {
    assert.match(image, /alt="[^"]{10,}"/, `${src}: descripción de la foto`);
    assert.match(image, /width="[1-9]\d*"/, `${src}: ancho definido`);
    assert.match(image, /height="[1-9]\d*"/, `${src}: alto definido`);
    assert.match(image, /loading="lazy"/, `${src}: carga diferida fuera del hero`);
    assert((await readFile(`dist${src}`)).length > 0, `${src}: archivo publicado`);
    assert((await readFile(`dist${src.replace(/\.jpg$/, '.webp')}`)).length > 0, `${src}: versión WebP`);
  }
  const responsiveSources = [...html.matchAll(/<source\b[^>]*srcset="(\/img\/trabajos\/[^"]+)"[^>]*>/gi)];
  assert.equal(responsiveSources.length, workImages.length, `${page.path}: variantes adaptadas a la pantalla`);
  for (const [, candidates] of responsiveSources) {
    for (const candidate of candidates.split(',')) {
      const src = candidate.trim().split(/\s+/)[0];
      assert((await readFile(`dist${src}`)).length > 0, `${src}: variante disponible`);
    }
  }
  console.log(`SEO HTML correcto: ${page.path}`);
}

const errorHtml = await readFile('dist/404.html', 'utf8');
assert.match(errorHtml, /name="robots"[^>]*content="noindex/);
assert(!/rel="canonical"/.test(errorHtml), '404 sin canonical de página válida');
assert.match(errorHtml, /<h1\b[^>]*>[^<]*[Nn]o encontr/);
const sitemap = await readFile('dist/sitemap.xml', 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
assert.deepEqual(urls.sort(), pages.map((page) => site + page.path).sort());
assert(!sitemap.includes('#'), 'Sin anclas en sitemap');
console.log('404 y sitemap correctos');
