import gsap from 'gsap'
import { qsa } from '../lib/dom'

export function initParallax(): void {
  qsa<HTMLElement>('[data-parallax]').forEach((el) => {
    const factor = parseFloat(el.getAttribute('data-parallax') ?? '0.15')
    el.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2 * factor * 100
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2 * factor * 100
      gsap.to(el.querySelector('[data-parallax-layer]') as HTMLElement, {
        x, y,
        duration: 0.6,
        ease: 'power2.out',
        overwrite: 'auto',
      })
    })
    el.addEventListener('mouseleave', () => {
      gsap.to(el.querySelector('[data-parallax-layer]') as HTMLElement, {
        x: 0, y: 0,
        duration: 0.8,
        ease: 'power2.out',
      })
    })
  })
}

export function initCardHover(): void {
}
