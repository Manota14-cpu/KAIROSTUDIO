import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { qsa } from '../lib/dom'
import { SCROLL, DURATIONS } from '../constants'

export function initScrollReveal(): void {
  qsa<HTMLElement>('[data-reveal]').forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: SCROLL.revealStart,
      onEnter: () => el.classList.add('visible'),
      once: true,
    })
  })

  qsa<HTMLElement>('.project-card').forEach((el, i) => {
    ScrollTrigger.create({
      trigger: el,
      start: SCROLL.cardStart,
      onEnter: () => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0, scale: 0.97 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: DURATIONS.slow,
            delay: i * 0.04,
            ease: 'power2.out',
            overwrite: 'auto',
          },
        )
      },
      once: true,
    })
  })

  const ctaHeading = document.querySelector('[data-reveal-cta]')
  if (ctaHeading) {
    ScrollTrigger.create({
      trigger: ctaHeading,
      start: SCROLL.ctaStart,
      onEnter: () => {
        ctaHeading.querySelector('.cta-heading-reveal')?.classList.add('in-view')
        gsap.from('.cta-btn-wrapper', {
          y: 30,
          opacity: 0,
          duration: 0.8,
          delay: 0.4,
          ease: 'power2.out',
        })
      },
      once: true,
    })
  }
}
