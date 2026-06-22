export function initNavbar(): void {
  const el = document.querySelector('.navbar') as HTMLElement
  if (!el) return

  let lastScroll = 0
  window.addEventListener(
    'scroll',
    () => {
      const y = window.scrollY
      if ((y > 20) !== (lastScroll > 20)) {
        el.classList.toggle('scrolled', y > 20)
      }
      lastScroll = y
    },
    { passive: true },
  )
}
