import { motion } from 'framer-motion';
import { Sparkles, Calendar } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { tarotData } from '../data/portfolio';

export default function TarotReading() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="tarot" className="py-20 md:py-28 bg-bg relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-wine-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-wine-500/10 to-transparent rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-wine-200 shadow-2xl shadow-wine-200/20">
              <img
                src={tarotData.image}
                alt="Tarot Card Reading"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeader
              label="Tarot"
              title={tarotData.title}
              subtitle={tarotData.description}
            />

            <div className="flex flex-col items-center lg:items-start gap-5">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-wine-50 border border-wine-200 rounded-full text-sm font-body font-medium text-wine-500">
                <Sparkles size={14} />
                {tarotData.badge}
              </span>

              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-wine-500 hover:bg-wine-600 text-cream-50 font-body font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-wine-500/25 text-lg"
              >
                <Calendar size={18} />
                {tarotData.cta}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
