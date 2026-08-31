import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import type { Testimonial } from '../data/portfolio';

interface Props {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({ testimonial, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-surface rounded-2xl p-8 shadow-lg shadow-primary/5 border border-cream-200 hover:shadow-xl hover:shadow-wine-200/20 transition-shadow duration-300"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className="fill-wine-500 text-wine-500" />
        ))}
      </div>
      <p className="font-body text-secondary leading-relaxed mb-6 italic">
        &ldquo;{testimonial.review}&rdquo;
      </p>
      <div className="flex items-center gap-4">
        <img
          src={testimonial.photo}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-wine-200"
          loading="lazy"
        />
        <div>
          <p className="font-body font-semibold text-primary">{testimonial.name}</p>
          <p className="font-body text-sm text-secondary">{testimonial.designation}</p>
        </div>
      </div>
    </motion.div>
  );
}
