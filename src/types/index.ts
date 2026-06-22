export interface Project {
  id: string
  title: string
  category: string
  image: string
  seed: string
}

export interface Social {
  name: string
  url: string
  handle: string
}

export interface SectionReveal {
  el: HTMLElement
  trigger: HTMLElement
  start: string
  entered: boolean
}

export interface AnimationConfig {
  duration: number
  delay?: number
  ease?: string
  stagger?: number
}
