import './style.css'
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
import { LogoCarousel } from './components/LogoCarousel'
import { setLocale } from './i18n/translations'
import { PROJECTS } from './constants'

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

  const clientsRoot = document.getElementById('clients-root')
  if (clientsRoot) {
    createRoot(clientsRoot).render(<LogoCarousel />)
  }

  initScrollReveal()
  initParallax()
  initCardHover()
  initProjectModal()
}

function initProjectModal(): void {
  const overlay = document.getElementById('project-modal')!
  const backdrop = overlay.querySelector('.modal-backdrop') as HTMLElement
  const closeBtn = overlay.querySelector('.modal-close') as HTMLElement
  const titleEl = document.getElementById('modal-title')!
  const categoryEl = document.getElementById('modal-category')!
  const descEl = document.getElementById('modal-description')!
  const servicesEl = document.getElementById('modal-services')!
  const approachEl = document.getElementById('modal-approach')!

  function openModal(project: typeof PROJECTS[number]): void {
    titleEl.textContent = project.title
    categoryEl.textContent = project.category
    descEl.textContent = project.description
    approachEl.textContent = project.approach
    servicesEl.innerHTML = project.services.map((s) => `<li>${s}</li>`).join('')
    overlay.classList.add('open')
    overlay.setAttribute('aria-hidden', 'false')
    document.body.style.overflow = 'hidden'
  }

  function closeModal(): void {
    overlay.classList.remove('open')
    overlay.setAttribute('aria-hidden', 'true')
    document.body.style.overflow = ''
  }

  closeBtn.addEventListener('click', closeModal)
  backdrop.addEventListener('click', closeModal)

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal()
  })

  document.querySelectorAll('.project-card').forEach((card) => {
    const id = card.getAttribute('data-project-id')
    card.addEventListener('click', (e) => {
      e.preventDefault()
      const project = PROJECTS.find((p) => p.id === id)
      if (project) openModal(project)
    })
  })
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
