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
  qsa<HTMLElement>('.project-card').forEach((card) => {
    const overlay = card.querySelector('.project-overlay') as HTMLElement
    const info = card.querySelector('.project-overlay-info') as HTMLElement
    if (!overlay) return

    card.addEventListener('mouseenter', () => {
      gsap.to(overlay, { opacity: 1, duration: 0.2, ease: 'power2.out' })
      gsap.to(info, { opacity: 1, duration: 0.25, ease: 'power2.out' })
    })
    card.addEventListener('mouseleave', () => {
      gsap.to(overlay, { opacity: 0, duration: 0.35, ease: 'power2.out' })
      gsap.to(info, { opacity: 0, duration: 0.25, ease: 'power2.out' })
    })
  })
}
