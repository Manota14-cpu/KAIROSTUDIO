import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { services } from './data'
import { ServiceCard } from './ServiceCard'
import { ServiceExpanded } from './ServiceExpanded'

export function ServicesSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const expandedService = services.find((s) => s.id === expandedId) ?? null

  const close = useCallback(() => setExpandedId(null), [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [close])

  return (
    <section className="services-root">
      <div className="services-header">
        <span className="services-label">SERVICES</span>
        <h2 className="services-title">What we do</h2>
        <p className="services-desc">
          From strategy to execution, each service is designed to build brands that endure.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, i) => {
          const isExpanded = expandedId === service.id
          return (
            <motion.div
              key={service.id}
              layout
              style={{ gridColumn: isExpanded ? '1 / -1' : undefined }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <ServiceCard
                service={service}
                isExpanded={isExpanded}
                onSelect={(id) => setExpandedId(id)}
                index={i}
              />
              <AnimatePresence>
                {isExpanded && expandedService && (
                  <ServiceExpanded service={expandedService} onClose={close} />
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
