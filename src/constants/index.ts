export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
  wide: 1600,
}

export const SCROLL = {
  revealStart: 'top 86%',
  cardStart: 'top 92%',
  ctaStart: 'top 80%',
}

export const DURATIONS = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.7,
  reveal: 0.8,
  intro: 1.0,
}

export const PROJECTS = [
  { id: '1', title: 'AETHER', category: 'Fashion Editorial', seed: 'aether' },
  { id: '2', title: 'NOIR', category: 'Perfume Brand', seed: 'noir' },
  { id: '3', title: 'CIRRUS', category: 'Tech Identity', seed: 'cirrus' },
  { id: '4', title: 'TERRA', category: 'Sustainable Packaging', seed: 'terra' },
  { id: '5', title: 'LUMEN', category: 'Lighting Showroom', seed: 'lumen' },
  { id: '6', title: 'CORD', category: 'Audio Brand', seed: 'cord' },
  { id: '7', title: 'VERT', category: 'Outdoor Apparel', seed: 'vert' },
  { id: '8', title: 'FUME', category: 'Candle Collection', seed: 'fume' },
  { id: '9', title: 'ORE', category: 'Jewelry Brand', seed: 'ore' },
] as const

export const CLIENTS = ['BMW', 'APPLE', 'NIKE', 'SPOTIFY', 'PATAGONIA', 'MUJI'] as const
export const SERVICES = ['BRAND STRATEGY', 'VISUAL IDENTITY', 'ART DIRECTION', 'MOTION DESIGN', 'EDITORIAL DESIGN', 'DIGITAL DESIGN'] as const
