import { renderToString } from 'react-dom/server';
import App from './App';
import { SERVICE_PAGES } from './data/servicePages';
import { getSeoMetadata, normalizePath } from './seo';

export const prerenderPaths = ['/', ...SERVICE_PAGES.map((page) => normalizePath(`/${page.slug}`))];

export function render(pathname: string) {
  const path = normalizePath(pathname);
  return {
    html: renderToString(<App pathname={path} />),
    metadata: getSeoMetadata(path),
  };
}
