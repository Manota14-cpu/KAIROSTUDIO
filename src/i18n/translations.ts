type Locale = 'en'
let currentLocale: Locale = 'en'

const translations: Record<Locale, Record<string, string>> = {
  en: {
    'nav.brand': 'KAIROS',
    'nav.year': 'MMXXVI',
    'nav.handle': '@HELLOKAIROS',

    'hero.label': 'Creative Direction & Design',
    'hero.name': 'Adrian Vale',
    'hero.title': 'Creative Director & Designer',
    'hero.location': 'Based in London · Working Worldwide',
    'hero.bio':
      'German-born creative director with over a decade of experience shaping brand identities, visual narratives, and design systems. Currently leading creative direction at an independent studio, working across fashion, culture, and technology.',

    'about.text':
      'With a foundation in graphic design and a practice rooted in strategic thinking, I bridge the gap between concept and craft. Every project begins with an idea — stripped of pretense, refined through process, and executed with precision. I believe in work that feels inevitable. Work that doesn\'t just look right, but is right. Over the past twelve years, I\'ve had the privilege of collaborating with emerging studios and established houses alike, building visual languages that endure beyond seasonal trends. My approach is collaborative, rigorous, and driven by an obsession with the details that most people won\'t notice — but everyone will feel.',

    'clients.label': 'CLIENTS',
    'clients.heading': 'Clients we\'ve worked with',
    'clients.bmw': 'BMW',
    'clients.apple': 'APPLE',
    'clients.nike': 'NIKE',
    'clients.spotify': 'SPOTIFY',
    'clients.patagonia': 'PATAGONIA',
    'clients.muji': 'MUJI',

    'services.heading': 'SERVICES',
    'services.brand': 'BRAND STRATEGY',
    'services.identity': 'VISUAL IDENTITY',
    'services.direction': 'ART DIRECTION',
    'services.motion': 'MOTION DESIGN',
    'services.editorial': 'EDITORIAL DESIGN',
    'services.digital': 'DIGITAL DESIGN',

    'project.1.title': 'AETHER',
    'project.1.category': 'Fashion Editorial',
    'project.2.title': 'NOIR',
    'project.2.category': 'Perfume Brand',
    'project.3.title': 'CIRRUS',
    'project.3.category': 'Tech Identity',
    'project.4.title': 'TERRA',
    'project.4.category': 'Sustainable Packaging',
    'project.5.title': 'LUMEN',
    'project.5.category': 'Lighting Showroom',
    'project.6.title': 'CORD',
    'project.6.category': 'Audio Brand',
    'project.7.title': 'VERT',
    'project.7.category': 'Outdoor Apparel',
    'project.8.title': 'FUME',
    'project.8.category': 'Candle Collection',
    'project.9.title': 'ORE',
    'project.9.category': 'Jewelry Brand',

    'hero.cta.primary': 'Start a Project',
    'hero.cta.secondary': 'View Work',

    'cta.heading': 'Available for new projects<br>and collaborations.',
    'cta.button': 'START A PROJECT',

    'contact.behance': 'BEHANCE',
    'contact.linkedin': 'LINKEDIN',
    'contact.instagram': 'INSTAGRAM',
    'contact.dribbble': 'DRIBBBLE',
    'contact.email': 'hello@kairos.studio',
    'contact.phone': '+44 20 7946 0958',

    'cta.floating': 'GET IN TOUCH',
  },
}

function t(key: string): string {
  return translations[currentLocale]?.[key] ?? key
}

function setLocale(locale: Locale): void {
  currentLocale = locale
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n')
    if (key) {
      el.textContent = t(key)
    }
  })
}

function getLocale(): Locale {
  return currentLocale
}

export { t, setLocale, getLocale, translations }
