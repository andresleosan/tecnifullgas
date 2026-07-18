export const smoothScroll = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const headerOffset = 88;
  const top = element.getBoundingClientRect().top + window.scrollY - headerOffset;
  window.scrollTo({ top, behavior: 'smooth' });
};
