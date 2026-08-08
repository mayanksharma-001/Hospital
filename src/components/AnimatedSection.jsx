import { motion } from 'framer-motion'

export default function AnimatedSection({ children, className = '' }) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  )
}
