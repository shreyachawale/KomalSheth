import { motion } from 'framer-motion';
import { ArrowDown, Send, Eye } from 'lucide-react';
import { heroData } from '../data/portfolio';
import komal from '../assets/Komal Profile photo.jpg';
import komal1 from '../assets/Komal Profile photo 2.jpeg';

function BotanicalFlourish({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 230 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 360C37 288 31 221 80 156C108 119 144 89 194 62" />
        <path d="M50 301C16 285 8 252 13 215C42 228 57 258 50 301Z" />
        <path d="M59 260C92 240 115 211 120 177C87 181 60 212 59 260Z" />
        <path d="M78 211C51 185 50 152 67 122C91 145 94 179 78 211Z" />
        <path d="M102 170C133 153 157 124 161 92C128 99 103 127 102 170Z" />
        <path d="M130 132C111 103 118 74 140 49C158 78 153 107 130 132Z" />
        <path d="M39 331C77 319 107 324 132 345C99 355 65 350 39 331Z" />
        <path d="M158 88C191 86 213 69 223 40C192 41 166 57 158 88Z" />
        <path d="M21 352C34 328 54 308 81 294" opacity=".55" />
        <path d="M31 292L23 250M69 253L108 204M83 201L71 149M110 161L151 112M138 121L136 70M165 83L207 54" opacity=".55" />
      </g>
    </svg>
  );
}

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-bg">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src= {komal}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-bg/70" />
      </div>

      <div className="absolute top-20 right-10 w-72 h-72 bg-wine-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cream-200/10 rounded-full blur-3xl" />
      <BotanicalFlourish className="absolute -left-12 top-20 h-[330px] w-[220px] text-cream-200/45" />
      <BotanicalFlourish className="absolute -left-8 -bottom-36 h-[330px] w-[220px] rotate-[-18deg] text-wine-300/80" />

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
              {['Presenter', 'Content', 'Business Consultant', 'Workshop Facilitator'].map(
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
              <div className="absolute -inset-4 bg-gradient-to-br from-wine-500/20 to-transparent rounded-3xl blur-xl" />
              <div className="relative rounded-3xl overflow-hidden border border-wine-200 shadow-2xl shadow-wine-200/30">
                <img
                  src={komal1}
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
