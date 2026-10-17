import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { build } from 'vite';

process.env.NODE_ENV = 'production';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const distDirectory = path.resolve(projectRoot, 'dist');
const cacheDirectory = path.resolve(projectRoot, 'node_modules', '.cache');
const ssrDirectory = path.resolve(cacheDirectory, 'tecnifullgas-ssr');

if (path.dirname(ssrDirectory) !== cacheDirectory || !ssrDirectory.startsWith(projectRoot)) {
  throw new Error('La salida temporal de SSR debe permanecer dentro del proyecto.');
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character]);
}

function replaceRequired(html, expression, replacement, label) {
  let count = 0;
  const result = html.replace(expression, () => {
    count += 1;
    return replacement;
  });
  if (count !== 1) throw new Error(`La plantilla debe contener un único ${label}; encontrados: ${count}.`);
  return result;
}

function replaceMeta(html, attribute, name, value) {
  const expression = new RegExp(`<meta\\b(?=[^>]*\\b${attribute}=["']${name}["'])[^>]*>`, 'gi');
  const replacement = value === undefined
    ? ''
    : `<meta ${attribute}="${name}" content="${escapeHtml(value)}" />`;
  return replaceRequired(html, expression, replacement, name);
}

function renderDocument(template, { html, metadata }) {
  let document = replaceRequired(template, /<title>[\s\S]*?<\/title>/gi,
    `<title>${escapeHtml(metadata.title)}</title>`, 'title');
  document = replaceMeta(document, 'name', 'description', metadata.description);
  document = replaceMeta(document, 'name', 'robots', metadata.indexable
    ? 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    : 'noindex, follow');
  document = replaceRequired(document, /<link\b(?=[^>]*\brel=["']canonical["'])[^>]*>/gi,
    metadata.canonical ? `<link rel="canonical" href="${escapeHtml(metadata.canonical)}" />` : '', 'canonical');

  for (const [name, value] of [
    ['og:title', metadata.title],
    ['og:description', metadata.description],
    ['og:url', metadata.canonical],
    ['og:image', metadata.image],
    ['og:image:alt', metadata.imageAlt],
  ]) {
    document = replaceMeta(document, 'property', name, value);
  }

  for (const [name, value] of [
    ['twitter:title', metadata.title],
    ['twitter:description', metadata.description],
    ['twitter:image', metadata.image],
    ['twitter:image:alt', metadata.imageAlt],
  ]) {
    document = replaceMeta(document, 'name', name, value);
  }

  document = replaceRequired(document,
    /<link\b(?=[^>]*\brel=["']preload["'])(?=[^>]*\bas=["']image["'])[^>]*>/gi,
    metadata.preloadImage
      ? `<link rel="preload" as="image" href="${escapeHtml(metadata.preloadImage)}" fetchpriority="high" />`
      : '',
    'preload de imagen');

  return replaceRequired(document, /<div id="root"><\/div>/g,
    `<div id="root" data-prerendered="true">${html}</div>`, 'contenedor root vacío');
}

// Conservar la plantilla cliente original para todas las rutas y sus enlaces a assets.
const template = await readFile(path.join(distDirectory, 'index.html'), 'utf8');

try {
  await build({
    root: projectRoot,
    mode: 'production',
    publicDir: false,
    build: {
      ssr: path.resolve(projectRoot, 'src/entry-server.tsx'),
      outDir: ssrDirectory,
      emptyOutDir: true,
      copyPublicDir: false,
      minify: false,
      watch: null,
      rollupOptions: { output: { entryFileNames: 'entry-server.mjs' } },
    },
  });

  const { render, prerenderPaths } = await import(pathToFileURL(path.join(ssrDirectory, 'entry-server.mjs')).href);
  if (typeof render !== 'function' || !Array.isArray(prerenderPaths)) {
    throw new Error('El bundle SSR no contiene render y prerenderPaths.');
  }
  if (new Set(prerenderPaths).size !== prerenderPaths.length || !prerenderPaths.includes('/')) {
    throw new Error('Las rutas de prerender deben ser únicas e incluir la home.');
  }

  const outputs = [...prerenderPaths, '/404'].map((pathname) => {
    if (!/^\/(?:[a-z0-9]+(?:-[a-z0-9]+)*)?$/.test(pathname)) {
      throw new Error(`Ruta de prerender no válida: ${pathname}`);
    }
    const result = render(pathname);
    if (!result.html || !result.metadata || (pathname === '/404' && result.metadata.indexable)) {
      throw new Error(`Salida SSR incompleta o estado de indexación incorrecto: ${pathname}`);
    }
    return {
      filename: pathname === '/' ? 'index.html' : `${pathname.slice(1)}.html`,
      document: renderDocument(template, result),
    };
  });

  await mkdir(distDirectory, { recursive: true });
  for (const output of outputs) {
    await writeFile(path.join(distDirectory, output.filename), output.document, 'utf8');
  }
  console.log(`Prerender completo: ${prerenderPaths.length} páginas y 404.html.`);
} finally {
  await rm(ssrDirectory, { recursive: true, force: true });
}
