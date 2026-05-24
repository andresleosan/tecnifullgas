export const smoothScroll = (elementId: string) => {
  const element = document.getElementById(elementId)
  element?.scrollIntoView({ behavior: 'smooth' })
}

export const openWhatsApp = (number: string, message?: string) => {
  const url = message ? `https://wa.me/${number}?text=${encodeURIComponent(message)}` : `https://wa.me/${number}`
  window.open(url, '_blank')
}
