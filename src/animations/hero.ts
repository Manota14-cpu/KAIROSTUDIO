import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DURATIONS } from '../constants'
import type { HeroVisual } from './heroVisual'

export function initHeroAnimation(heroVisual?: HeroVisual): void {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) {
    gsap.set('.hero-text', { opacity: 1 })
    gsap.set('[data-animate="hero-line"]', { opacity: 1, y: 0 })
    gsap.set('.hero-bio', { opacity: 1, y: 0 })
    gsap.set('.hero-actions', { opacity: 1, y: 0 })
    gsap.set('.hero-label', { opacity: 1, y: 0 })
    gsap.set('.hero-scroll-hint', { opacity: 1 })
    gsap.set(document.body, { opacity: 1 })
    setupScrollStages(heroVisual)
    return
  }

  const tl = gsap.timeline({
    defaults: { ease: 'power3.out' },
  })

  tl.set('.hero-text', { opacity: 1 })

  tl.fromTo('.hero-label',
    { y: 16, opacity: 0 },
    { y: 0, opacity: 1, duration: DURATIONS.slow },
  )

  tl.fromTo(
    '[data-animate="hero-line"]',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: DURATIONS.slow },
    '-=0.2',
  )

  tl.fromTo(
    '.hero-bio',
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: DURATIONS.reveal },
    '-=0.3',
  )

  tl.fromTo(
    '.hero-actions',
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: DURATIONS.slow },
    '-=0.2',
  )

  tl.fromTo(
    '.hero-scroll-hint',
    { opacity: 0 },
    { opacity: 1, duration: DURATIONS.normal },
    '-=0.1',
  )

  setupScrollStages(heroVisual)
}

function setupScrollStages(heroVisual?: HeroVisual): void {
  if (!heroVisual) return

  const heroSection = document.querySelector('.hero-section') as HTMLElement | null
  if (!heroSection) return

  ScrollTrigger.create({
    trigger: heroSection,
    start: 'top top',
    end: 'bottom top',
    scrub: 1.5,
    onUpdate: (self) => {
      heroVisual.setScrollProgress(self.progress)
    },
  })

  const moveHandler = (e: MouseEvent) => {
    heroVisual.setCursor(e.clientX / window.innerWidth, e.clientY / window.innerHeight)
  }
  document.addEventListener('mousemove', moveHandler, { passive: true })

  const resizeHandler = () => heroVisual.resize()
  window.addEventListener('resize', resizeHandler, { passive: true })
}
