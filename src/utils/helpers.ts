export const smoothScroll = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (!element) {
    window.location.assign(`/#${encodeURIComponent(elementId)}`);
    return;
  }

  const headerOffset = 88;
  const top = element.getBoundingClientRect().top + window.scrollY - headerOffset;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top, behavior: reducedMotion ? 'auto' : 'smooth' });
};

/**
 * Devuelve la URL WebP optimizada para una imagen PNG de servicio dada su ruta.
 * Convierte `/img/Calentadores.png` -> `/img/servicios-webp/Calentadores.webp`.
 * Si la ruta no corresponde a un servicio WebP conocido, retorna la original.
 */
export const getWebpPath = (imagePath: string): string => {
  if (!imagePath.startsWith('/img/') || !imagePath.endsWith('.png')) return imagePath;
  const base = imagePath.replace('/img/', '').replace('.png', '');
  return `/img/servicios-webp/${base}.webp`;
};
