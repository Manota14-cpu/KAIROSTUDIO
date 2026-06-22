import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { ServiceCardProps } from './types'
import { imageVariants } from './animations'

export function ServiceCard({ service, isExpanded, onSelect, index }: ServiceCardProps) {
  const [loaded, setLoaded] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 })

  useEffect(() => {
    const img = new Image()
    img.src = service.image
    img.onload = () => setLoaded(true)
  }, [service.image])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x * 8)
    mouseY.set(y * 8)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      layout
      className="service-card"
      data-expanded={isExpanded}
      onClick={() => onSelect(isExpanded ? null : service.id)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        className="service-card-inner"
        variants={imageVariants}
        initial="collapsed"
        whileHover="hover"
        animate={isExpanded ? 'expanded' : 'collapsed'}
        style={{
          x: springX,
          y: springY,
          rotateX: springY,
          rotateY: springX,
        }}
      >
        <div
          className="service-card-bg"
          style={{
            backgroundImage: loaded ? `url(${service.image})` : 'none',
            backgroundColor: loaded ? 'transparent' : '#1a1a1a',
          }}
        />
        <div className="service-card-overlay" />
        <div className="service-card-overlay-2" />

        <div className="service-card-content">
          <span className="service-card-label">{service.subtitle}</span>
          <h3 className="service-card-title">{service.title}</h3>
          <p className="service-card-desc">{service.description.slice(0, 100)}...</p>
        </div>

        <div className="service-card-indicator">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d={isExpanded ? 'M4 8h8M8 4v8' : 'M8 4v8M4 8h8'}
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  )
}
