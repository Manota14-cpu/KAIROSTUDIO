import gsap from 'gsap'

const DURATION = 2200

export function initLoadingScreen(onComplete: () => void): void {
  const screen = document.getElementById('loading-screen')
  if (!screen) { onComplete(); return }

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) {
    gsap.set(screen, { opacity: 0, display: 'none' })
    onComplete()
    return
  }

  const numberEl = document.getElementById('loading-number')!

  const proxy = { value: 0 }

  const tl = gsap.timeline({
    onComplete: () => {
      gsap.to(screen, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
        onComplete: () => {
          gsap.set(screen, { display: 'none' })
          onComplete()
        },
      })
    },
  })

  tl.to(proxy, {
    value: 100,
    duration: DURATION / 1000,
    ease: 'power3.out',
    onUpdate: () => {
      numberEl.textContent = Math.round(proxy.value).toString()
    },
  }, 0)
}
