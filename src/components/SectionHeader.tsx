import { motion } from 'framer-motion';

interface Props {
  label?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeader({ label, title, subtitle, light = false }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12 md:mb-16"
    >
      {label && (
        <span className="inline-block text-xs font-body font-semibold tracking-[0.25em] uppercase text-wine-500 mb-3">
          {label}
        </span>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 ${
          light ? 'text-cream-50' : 'text-primary'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-body text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${
            light ? 'text-cream-300' : 'text-secondary'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
