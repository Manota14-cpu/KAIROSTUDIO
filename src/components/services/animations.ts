import type { Variants } from 'framer-motion'

export const cardVariants: Variants = {
  collapsed: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
  expanded: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
}

export const expandedPanel: Variants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.35, ease: [0.65, 0, 0.35, 1] },
  },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

export const contentStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
}

export const contentItem: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
}

export const imageVariants: Variants = {
  collapsed: { scale: 1, filter: 'brightness(0.7)' },
  hover: { scale: 1.04, filter: 'brightness(0.55)' },
  expanded: { scale: 1.06, filter: 'brightness(0.45)' },
}
