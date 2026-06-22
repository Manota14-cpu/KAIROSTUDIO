import { motion } from 'framer-motion'
import type { Service } from './types'
import { contentStagger, contentItem } from './animations'

interface Props {
  service: Service
  onClose: () => void
}

export function ServiceExpanded({ service, onClose }: Props) {
  return (
    <motion.div
      className="service-expanded"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={contentStagger}
    >
      <div className="service-expanded-inner">
        <motion.div className="service-expanded-image" variants={contentItem}>
          <div
            className="service-expanded-bg"
            style={{ backgroundImage: `url(${service.image}?w=1000&h=800)` }}
          >
            <div className="service-expanded-bg-overlay" />
            <div className="service-expanded-bg-glow" />
          </div>
        </motion.div>

        <div className="service-expanded-content">
          <motion.span className="service-expanded-label" variants={contentItem}>
            {service.subtitle}
          </motion.span>
          <motion.h3 className="service-expanded-title" variants={contentItem}>
            {service.title}
          </motion.h3>
          <motion.p className="service-expanded-desc" variants={contentItem}>
            {service.description}
          </motion.p>

          <motion.div className="service-expanded-section" variants={contentItem}>
            <h4 className="service-expanded-section-title">What you get</h4>
            <div className="service-expanded-features">
              {service.features.map((f, i) => (
                <div key={i} className="service-expanded-feature">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <circle cx="5" cy="5" r="2.5" fill="currentColor" />
                  </svg>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="service-expanded-section" variants={contentItem}>
            <h4 className="service-expanded-section-title">Process</h4>
            <div className="service-expanded-process">
              {service.process.map((step, i) => (
                <div key={i} className="service-expanded-step">
                  <div className="step-number">{String(i + 1).padStart(2, '0')}</div>
                  <div className="step-line" />
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="service-expanded-stats" variants={contentItem}>
            {service.stats.map((stat, i) => (
              <div key={i} className="service-expanded-stat">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div className="service-expanded-actions" variants={contentItem}>
            <div className="service-expanded-delivery">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1" />
                <path d="M8 4.5V8l2.5 2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
              </svg>
              <span>Est. {service.delivery}</span>
            </div>
            <a href={service.cta.href} className="service-expanded-cta">
              {service.cta.text}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>

          {service.testimonial && (
            <motion.div className="service-expanded-testimonial" variants={contentItem}>
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                <path d="M6 0C3.5 0 1.5 1.5 0 4l2 2c1-2 2.5-3 4-3V0zm8 0c-2.5 0-4.5 1.5-6 4l2 2c1-2 2.5-3 4-3V0z" fill="currentColor" />
              </svg>
              <blockquote>{service.testimonial.text}</blockquote>
              <div className="testimonial-author">
                <strong>{service.testimonial.author}</strong>
                <span>{service.testimonial.role}</span>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <button className="service-expanded-close" onClick={onClose} aria-label="Close service details">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </motion.div>
  )
}
