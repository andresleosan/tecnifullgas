export const smoothScroll = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const headerOffset = 88;
  const top = element.getBoundingClientRect().top + window.scrollY - headerOffset;
  window.scrollTo({ top, behavior: 'smooth' });
};

export const openWhatsApp = (number: string, message?: string) => {
  const url = message
    ? `https://wa.me/${number}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${number}`;
  window.open(url, '_blank');
};
