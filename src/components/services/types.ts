export interface Service {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  seed: string
  features: string[]
  process: string[]
  stats: { label: string; value: string }[]
  cta: { text: string; href: string }
  testimonial?: { text: string; author: string; role: string }
  delivery: string
}

export interface ServiceCardProps {
  service: Service
  isExpanded: boolean
  onSelect: (id: string | null) => void
  index: number
}
