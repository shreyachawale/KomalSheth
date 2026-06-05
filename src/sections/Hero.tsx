import { motion } from 'framer-motion';
import { ArrowDown, Send, Eye } from 'lucide-react';
import { heroData } from '../data/portfolio';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-bg">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-bg/70" />
      </div>

      {/* Decorative wine accents */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-wine-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-wine-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="font-body text-wine-500 text-sm tracking-[0.3em] uppercase mb-4"
            >
              Presenter &bull; Consultant &bull; Facilitator
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-6"
            >
              Komal{' '}
              <span className="text-gradient-wine">Sheth</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="font-body text-lg sm:text-xl text-secondary leading-relaxed mb-4 max-w-xl"
            >
              {heroData.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {['Presenter', 'Emcee', 'Business Consultant', 'Workshop Facilitator', 'Tarot Reader'].map(
                (tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs font-body font-medium text-wine-500 border border-wine-200 rounded-full bg-wine-50"
                  >
                    {tag}
                  </span>
                )
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-wine-500 hover:bg-wine-600 text-cream-50 font-body font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-wine-500/25"
              >
                <Send size={16} />
                Enquire Now
              </button>
              <button
                onClick={() => scrollTo('#emcee')}
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-wine-500 text-wine-500 hover:bg-wine-50 font-body font-semibold rounded-full transition-all duration-300"
              >
                <Eye size={16} />
                View Portfolio
              </button>
            </motion.div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-wine-500/10 to-transparent rounded-3xl blur-xl" />
              <div className="relative rounded-3xl overflow-hidden border border-wine-200 shadow-2xl shadow-wine-200/30">
                <img
                  src={heroData.image}
                  alt="Komal Sheth"
                  className="w-full h-[580px] object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-wine-500/40"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
