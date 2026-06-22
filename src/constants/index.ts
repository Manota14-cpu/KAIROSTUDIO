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

export interface ProjectDetail {
  id: string
  title: string
  category: string
  seed: string
  description: string
  services: string[]
  approach: string
}

export const PROJECTS: ProjectDetail[] = [
  {
    id: '1', title: 'AETHER', category: 'Fashion Editorial', seed: 'aether',
    description: 'A high-fashion editorial campaign blending avant-garde styling with digital artistry. The project explores the intersection of fabric and light, creating ethereal visuals that transcend traditional fashion photography.',
    services: ['Art Direction', 'Photography Direction', 'Post-Production', 'Campaign Strategy'],
    approach: 'We began with mood boards inspired by atmospheric phenomena, then built a visual narrative around movement and translucency. Every frame was composed to feel both grounded and otherworldly.',
  },
  {
    id: '2', title: 'NOIR', category: 'Perfume Brand', seed: 'noir',
    description: 'A complete brand identity for a luxury fragrance house. From the bottle design to the packaging and campaign imagery, every element was crafted to evoke mystery, sophistication, and timeless elegance.',
    services: ['Brand Identity', 'Packaging Design', 'Campaign Creative', 'Visual System'],
    approach: 'The creative process started with scent profiling — translating olfactory notes into visual languages. Deep blacks, gold foil accents, and shadow-play photography defined the aesthetic.',
  },
  {
    id: '3', title: 'CIRRUS', category: 'Tech Identity', seed: 'cirrus',
    description: 'A visual identity for a cloud infrastructure startup. The brand needed to communicate technical reliability while feeling innovative and approachable. The result is a clean, modular system with subtle motion cues.',
    services: ['Brand Strategy', 'Logo & Mark', 'Design System', 'Motion Guidelines'],
    approach: 'We studied cloud formations as a metaphor for distributed systems. The identity uses layered gradients, geometric patterns, and fluid animations to represent data flow and connectivity.',
  },
  {
    id: '4', title: 'TERRA', category: 'Sustainable Packaging', seed: 'terra',
    description: 'An eco-conscious packaging system for a organic skincare line. Every material was chosen for its environmental footprint, while the design language emphasizes natural textures and earthy minimalism.',
    services: ['Packaging Design', 'Material Research', 'Print Production', 'Brand Guidelines'],
    approach: 'We collaborated with sustainable material suppliers to source biodegradable options. The design uses soy-based inks, recycled papers, and a muted palette inspired by soil, clay, and stone.',
  },
  {
    id: '5', title: 'LUMEN', category: 'Lighting Showroom', seed: 'lumen',
    description: 'An immersive showroom experience and brand identity for a contemporary lighting studio. The space and collateral were designed to highlight the interplay of light, shadow, and form.',
    services: ['Art Direction', 'Spatial Design', 'Editorial', 'Photography'],
    approach: 'We designed the showroom as a gallery where each fixture becomes an exhibit. Catalogues use die-cut covers and translucent paper stocks to mirror the quality of diffused light.',
  },
  {
    id: '6', title: 'CORD', category: 'Audio Brand', seed: 'cord',
    description: 'Brand identity and digital presence for a premium audio equipment manufacturer. The visual language draws from sound wave forms, analog equipment, and the warmth of vinyl culture.',
    services: ['Brand Identity', 'Web Design', 'Packaging', 'Social Strategy'],
    approach: 'We translated sound into visual rhythm — using waveform motifs, a warm copper-and-charcoal palette, and typography inspired by vintage hi-fi components.',
  },
  {
    id: '7', title: 'VERT', category: 'Outdoor Apparel', seed: 'vert',
    description: 'A rebrand for an outdoor apparel company transitioning from niche mountaineering to mainstream lifestyle. The identity needed to retain authenticity while expanding appeal.',
    services: ['Rebranding', 'Identity System', 'Campaign Creative', 'Retail Collateral'],
    approach: 'Field research with actual climbers informed the design. The logo references topographic lines, the palette draws from alpine landscapes, and the messaging speaks to both summit seekers and city dwellers.',
  },
  {
    id: '8', title: 'FUME', category: 'Candle Collection', seed: 'fume',
    description: 'A sensory brand for an artisanal candle collection. Each scent is paired with a distinct visual world — from the colour palette to the texture of the label stock and the shape of the vessel.',
    services: ['Brand Identity', 'Packaging Design', 'Photography', 'Retail Display'],
    approach: 'We treated each candle as a character with its own personality. The naming, colour coding, and label illustrations create a collecting experience that feels personal and curated.',
  },
  {
    id: '9', title: 'ORE', category: 'Jewelry Brand', seed: 'ore',
    description: 'A luxury jewellery brand built around raw, unpolished aesthetics. The identity contrasts precious materials with industrial elements — rough stones set in refined mounts, soft velvets against brutalist architecture.',
    services: ['Brand Strategy', 'Visual Identity', 'E-commerce Design', 'Campaign Direction'],
    approach: 'The concept was born from the tension between nature and craftsmanship. Photography uses extreme macro and shadow to highlight texture, while the typography feels carved and permanent.',
  },
]

export const CLIENTS = ['BMW', 'APPLE', 'NIKE', 'SPOTIFY', 'PATAGONIA', 'MUJI'] as const
export const SERVICES = ['BRAND STRATEGY', 'VISUAL IDENTITY', 'ART DIRECTION', 'MOTION DESIGN', 'EDITORIAL DESIGN', 'DIGITAL DESIGN'] as const
