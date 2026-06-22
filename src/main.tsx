import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { createRoot } from 'react-dom/client'
import { initSmoothScroll } from './lib/gsap'
import { initNavbar } from './sections/Navbar'
import { initCursorGlow } from './animations/cursor'
import { initHeroAnimation } from './animations/hero'
import { HeroVisual } from './animations/heroVisual'
import { initScrollReveal } from './animations/scroll'
import { initParallax, initCardHover } from './animations/parallax'
import { initLoadingScreen } from './sections/LoadingScreen'
import { ServicesSection } from './components/services'
import { LogoCarousel } from './components/LogoCarousel'
import { setLocale } from './i18n/translations'

gsap.registerPlugin(ScrollTrigger)

function initApp(): void {
  setLocale('en')

  const heroCanvas = document.getElementById('hero-canvas') as HTMLCanvasElement | null
  let heroVisual: HeroVisual | undefined

  if (heroCanvas) {
    heroVisual = new HeroVisual(heroCanvas)
    heroVisual.init()
  }

  initSmoothScroll()
  initNavbar()
  initCursorGlow()
  initHeroAnimation(heroVisual)

  const servicesRoot = document.getElementById('services-root')
  if (servicesRoot) {
    createRoot(servicesRoot).render(<ServicesSection />)
  }

  const clientsRoot = document.getElementById('clients-root')
  if (clientsRoot) {
    createRoot(clientsRoot).render(<LogoCarousel />)
  }

  initScrollReveal()
  initParallax()
  initCardHover()
}

function init(): void {
  setLocale('en')

  const fallbackTimer = setTimeout(() => {
    const screen = document.getElementById('loading-screen')
    if (screen) {
      screen.style.display = 'none'
    }
    initApp()
  }, 5000)

  initLoadingScreen(() => {
    clearTimeout(fallbackTimer)
    initApp()
  })
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init)
} else {
  init()
}
