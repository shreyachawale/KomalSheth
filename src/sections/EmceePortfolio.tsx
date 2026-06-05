import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import GalleryModal from '../components/GalleryModal';
import { emceeCategories } from '../data/portfolio';

export default function EmceePortfolio() {
  const [activeGallery, setActiveGallery] = useState<string | null>(null);
  const active = emceeCategories.find((c) => c.id === activeGallery);

  return (
    <section id="emcee" className="py-20 md:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Portfolio"
          title="Emcee Portfolio"
          subtitle="From grand stages to intimate gatherings — every event deserves a voice that commands attention and creates memories."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {emceeCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setActiveGallery(cat.id)}
              className="group cursor-pointer relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={cat.coverImage}
                alt={cat.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent group-hover:from-primary/80 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end p-6">
                <div>
                  <h3 className="font-display text-xl md:text-2xl text-cream-50 font-semibold mb-1">
                    {cat.title}
                  </h3>
                  <p className="font-body text-sm text-wine-300">
                    {cat.gallery.length} items &bull; View Gallery
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {active && (
        <GalleryModal
          title={active.title}
          items={active.gallery}
          isOpen={!!activeGallery}
          onClose={() => setActiveGallery(null)}
        />
      )}
    </section>
  );
}
