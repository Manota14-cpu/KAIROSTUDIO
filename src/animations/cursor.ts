import gsap from 'gsap'

export function initCursorGlow(): void {
  const el = document.querySelector('.cursor-glow') as HTMLElement
  if (!el || window.matchMedia('(pointer: coarse)').matches) {
    el?.remove()
    return
  }

  let x = -999
  let y = -999
  let cx = -999
  let cy = -999

  document.addEventListener('mousemove', (e) => {
    x = e.clientX
    y = e.clientY
  })

  document.addEventListener('mouseleave', () => {
    x = -999
    y = -999
  })

  gsap.ticker.add(() => {
    cx += (x - cx) * 0.08
    cy += (y - cy) * 0.08
    gsap.set(el, { x: cx - 150, y: cy - 150 })
  })
}
