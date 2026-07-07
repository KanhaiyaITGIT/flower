import { motion } from 'framer-motion'
import { Flower2 } from 'lucide-react'

export default function SectionTitle({
  children,
  subtitle,
  centered = true,
  className = '',
  light = false,
  size = 'lg',
}) {
  const textSizes = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-3xl md:text-4xl',
    lg: 'text-4xl md:text-5xl lg:text-6xl',
    xl: 'text-5xl md:text-6xl lg:text-7xl',
  }

  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={`flex items-center justify-center gap-3 ${centered ? '' : 'justify-start'} mb-4`}>
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold/60" />
          <Flower2 className="w-4 h-4 text-gold" />
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold/60" />
        </div>

        <h2
          className={`${textSizes[size]} font-heading font-bold leading-[1.08] tracking-tight
            ${light ? 'text-cream' : 'text-app-primary'}
          `}
        >
          {children}
        </h2>

        {subtitle && (
          <p className={`mt-4 max-w-2xl ${centered ? 'mx-auto' : ''} text-sm md:text-base leading-relaxed text-app-secondary`}>
            {subtitle}
          </p>
        )}

        <div className={`flex items-center gap-2 mt-6 ${centered ? 'justify-center' : ''}`}>
          <span className="h-[2px] w-12 rounded-full bg-gradient-to-r from-accent to-transparent" />
          <span className="h-[2px] w-8 rounded-full bg-gold/40" />
          <span className="h-[2px] w-12 rounded-full bg-gradient-to-l from-accent to-transparent" />
        </div>
      </motion.div>
    </div>
  )
}
