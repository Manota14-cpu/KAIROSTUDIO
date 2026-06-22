type Locale = 'en' | 'es' | 'pt' | 'fr'
let currentLocale: Locale = 'en'

const translations: Record<Locale, Record<string, string>> = {
  en: {
    'nav.brand': 'KAIROS',
    'hero.label': 'Creative Direction & Design',
    'hero.name': 'Adrian Vale',
    'hero.title': 'Creative Director & Designer',
    'hero.location': 'Based in London · Working Worldwide',
    'hero.bio': 'German-born creative director with over a decade of experience shaping brand identities, visual narratives, and design systems. Currently leading creative direction at an independent studio, working across fashion, culture, and technology.',
    'about.text': 'With a foundation in graphic design and a practice rooted in strategic thinking, I bridge the gap between concept and craft. Every project begins with an idea — stripped of pretense, refined through process, and executed with precision. I believe in work that feels inevitable. Work that doesn\'t just look right, but is right. Over the past twelve years, I\'ve had the privilege of collaborating with emerging studios and established houses alike, building visual languages that endure beyond seasonal trends. My approach is collaborative, rigorous, and driven by an obsession with the details that most people won\'t notice — but everyone will feel.',
    'clients.label': 'CLIENTS',
    'clients.heading': 'Clients we\'ve worked with',
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
  es: {
    'nav.brand': 'KAIROS',
    'hero.label': 'Dirección Creativa & Diseño',
    'hero.name': 'Adrian Vale',
    'hero.title': 'Director Creativo & Diseñador',
    'hero.location': 'Basado en Londres · Trabajando Globalmente',
    'hero.bio': 'Director creativo nacido en Alemania con más de una década de experiencia creando identidades de marca, narrativas visuales y sistemas de diseño. Actualmente liderando la dirección creativa en un estudio independiente, trabajando en moda, cultura y tecnología.',
    'about.text': 'Con una formación en diseño gráfico y una práctica arraigada en el pensamiento estratégico, tiendo un puente entre el concepto y la artesanía. Cada proyecto comienza con una idea — sin pretensiones, refinada a través del proceso y ejecutada con precisión. Creo en el trabajo que se siente inevitable. Trabajo que no solo se ve bien, sino que es correcto. Durante los últimos doce años, he tenido el privilegio de colaborar con estudios emergentes y casas establecidas, construyendo lenguajes visuales que perduran más allá de las tendencias estacionales. Mi enfoque es colaborativo, riguroso e impulsado por una obsesión por los detalles que la mayoría no notará, pero que todos sentirán.',
    'clients.label': 'CLIENTES',
    'clients.heading': 'Clientes con los que trabajamos',
    'project.1.title': 'AETHER',
    'project.1.category': 'Editorial de Moda',
    'project.2.title': 'NOIR',
    'project.2.category': 'Marca de Perfumes',
    'project.3.title': 'CIRRUS',
    'project.3.category': 'Identidad Tech',
    'project.4.title': 'TERRA',
    'project.4.category': 'Packaging Sostenible',
    'project.5.title': 'LUMEN',
    'project.5.category': 'Showroom de Iluminación',
    'project.6.title': 'CORD',
    'project.6.category': 'Marca de Audio',
    'project.7.title': 'VERT',
    'project.7.category': 'Ropa Outdoor',
    'project.8.title': 'FUME',
    'project.8.category': 'Colección de Velas',
    'project.9.title': 'ORE',
    'project.9.category': 'Marca de Joyería',
    'hero.cta.primary': 'Iniciar un Proyecto',
    'hero.cta.secondary': 'Ver Trabajos',
    'cta.heading': 'Disponible para nuevos proyectos<br>y colaboraciones.',
    'cta.button': 'INICIAR UN PROYECTO',
    'contact.behance': 'BEHANCE',
    'contact.linkedin': 'LINKEDIN',
    'contact.instagram': 'INSTAGRAM',
    'contact.dribbble': 'DRIBBBLE',
    'contact.email': 'hello@kairos.studio',
    'contact.phone': '+44 20 7946 0958',
    'cta.floating': 'CONTACTO',
  },
  pt: {
    'nav.brand': 'KAIROS',
    'hero.label': 'Direção Criativa & Design',
    'hero.name': 'Adrian Vale',
    'hero.title': 'Diretor Criativo & Designer',
    'hero.location': 'Baseado em Londres · Trabalhando Mundialmente',
    'hero.bio': 'Diretor criativo nascido na Alemanha com mais de uma década de experiência moldando identidades de marca, narrativas visuais e sistemas de design. Atualmente liderando a direção criativa em um estúdio independente, trabalhando com moda, cultura e tecnologia.',
    'about.text': 'Com formação em design gráfico e uma prática enraizada no pensamento estratégico, eu faço a ponte entre o conceito e o ofício. Cada projeto começa com uma ideia — sem pretensão, refinada através do processo e executada com precisão. Acredito no trabalho que parece inevitável. Trabalho que não apenas parece certo, mas é certo. Ao longo dos últimos doze anos, tive o privilégio de colaborar com estúdios emergentes e casas estabelecidas, construindo linguagens visuais que perduram além das tendências sazonais. Minha abordagem é colaborativa, rigorosa e impulsionada por uma obsessão pelos detalhes que a maioria não notará — mas que todos sentirão.',
    'clients.label': 'CLIENTES',
    'clients.heading': 'Clientes com quem trabalhamos',
    'project.1.title': 'AETHER',
    'project.1.category': 'Editorial de Moda',
    'project.2.title': 'NOIR',
    'project.2.category': 'Marca de Perfumes',
    'project.3.title': 'CIRRUS',
    'project.3.category': 'Identidade Tech',
    'project.4.title': 'TERRA',
    'project.4.category': 'Embalagem Sustentável',
    'project.5.title': 'LUMEN',
    'project.5.category': 'Showroom de Iluminação',
    'project.6.title': 'CORD',
    'project.6.category': 'Marca de Áudio',
    'project.7.title': 'VERT',
    'project.7.category': 'Vestuário Outdoor',
    'project.8.title': 'FUME',
    'project.8.category': 'Coleção de Velas',
    'project.9.title': 'ORE',
    'project.9.category': 'Marca de Joias',
    'hero.cta.primary': 'Iniciar um Projeto',
    'hero.cta.secondary': 'Ver Trabalhos',
    'cta.heading': 'Disponível para novos projetos<br>e colaborações.',
    'cta.button': 'INICIAR UM PROJETO',
    'contact.behance': 'BEHANCE',
    'contact.linkedin': 'LINKEDIN',
    'contact.instagram': 'INSTAGRAM',
    'contact.dribbble': 'DRIBBBLE',
    'contact.email': 'hello@kairos.studio',
    'contact.phone': '+44 20 7946 0958',
    'cta.floating': 'CONTATO',
  },
  fr: {
    'nav.brand': 'KAIROS',
    'hero.label': 'Direction Créative & Design',
    'hero.name': 'Adrian Vale',
    'hero.title': 'Directeur Créatif & Designer',
    'hero.location': 'Basé à Londres · Travaille dans le Monde Entier',
    'hero.bio': 'Directeur créatif né en Allemagne avec plus d\'une décennie d\'expérience à façonner des identités de marque, des récits visuels et des systèmes de design. Actuellement, il dirige la direction créative d\'un studio indépendant, travaillant dans la mode, la culture et la technologie.',
    'about.text': 'Avec une formation en design graphique et une pratique ancrée dans la pensée stratégique, je fais le pont entre le concept et l\'artisanat. Chaque projet commence par une idée — dépouillée de prétention, affinée par le processus et exécutée avec précision. Je crois en un travail qui semble inévitable. Un travail qui n\'est pas seulement beau, mais juste. Au cours des douze dernières années, j\'ai eu le privilège de collaborer avec des studios émergents et des maisons établies, construisant des langages visuels qui perdurent au-delà des tendances saisonnières. Mon approche est collaborative, rigoureuse et motivée par une obsession des détails que la plupart ne remarqueront pas — mais que tout le monde ressentira.',
    'clients.label': 'CLIENTS',
    'clients.heading': 'Clients avec qui nous avons travaillé',
    'project.1.title': 'AETHER',
    'project.1.category': 'Éditorial de Mode',
    'project.2.title': 'NOIR',
    'project.2.category': 'Marque de Parfums',
    'project.3.title': 'CIRRUS',
    'project.3.category': 'Identité Tech',
    'project.4.title': 'TERRA',
    'project.4.category': 'Emballage Durable',
    'project.5.title': 'LUMEN',
    'project.5.category': 'Showroom d\'Éclairage',
    'project.6.title': 'CORD',
    'project.6.category': 'Marque Audio',
    'project.7.title': 'VERT',
    'project.7.category': 'Vêtements Outdoor',
    'project.8.title': 'FUME',
    'project.8.category': 'Collection de Bougies',
    'project.9.title': 'ORE',
    'project.9.category': 'Marque de Joaillerie',
    'hero.cta.primary': 'Lancer un Projet',
    'hero.cta.secondary': 'Voir les Travaux',
    'cta.heading': 'Disponible pour de nouveaux projets<br>et collaborations.',
    'cta.button': 'LANCER UN PROJET',
    'contact.behance': 'BEHANCE',
    'contact.linkedin': 'LINKEDIN',
    'contact.instagram': 'INSTAGRAM',
    'contact.dribbble': 'DRIBBBLE',
    'contact.email': 'hello@kairos.studio',
    'contact.phone': '+44 20 7946 0958',
    'cta.floating': 'CONTACT',
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
      el.innerHTML = t(key)
    }
  })
  document.querySelectorAll('[data-lang]').forEach((el) => {
    el.classList.toggle('active', el.getAttribute('data-lang') === locale)
  })
  const currentLabel = document.getElementById('lang-current')
  if (currentLabel) currentLabel.textContent = locale.toUpperCase()
  localStorage.setItem('kairos-locale', locale)
}

function initLocale(): void {
  const saved = localStorage.getItem('kairos-locale') as Locale | null
  if (saved && ['en', 'es', 'pt', 'fr'].includes(saved)) {
    setLocale(saved)
  }
}

function getLocale(): Locale {
  return currentLocale
}

export { t, setLocale, getLocale, initLocale, translations }
