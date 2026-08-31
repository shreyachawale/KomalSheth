import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import GalleryModal from '../components/GalleryModal';
import { workshopData } from '../data/portfolio';

export default function CreativeWorkshops() {
  const [activeGallery, setActiveGallery] = useState<string | null>(null);
  const active = workshopData.categories.find((c) => c.id === activeGallery);

  return (
    <section id="workshops" className="py-20 md:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Workshops"
          title="Creative Workshops"
          subtitle="Hands-on, immersive experiences designed to spark creativity, build skills, and bring teams together."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {workshopData.categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setActiveGallery(cat.id)}
              className="group cursor-pointer relative rounded-2xl overflow-hidden aspect-[3/4] shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {cat.video ? (
  <video
    src={cat.video}
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
  />
) : (
  <img
    src={cat.coverImage}
    alt={cat.title}
    loading="lazy"
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
  />
)}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent group-hover:from-primary/80 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end p-5">
                <h3 className="font-display text-lg text-cream-50 font-semibold">{cat.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured client */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="bg-surface rounded-3xl overflow-hidden border border-cream-200 shadow-sm"
        >
          <div className="grid md:grid-cols-2 items-center">
            <div className="aspect-video md:aspect-auto md:h-full">
              <img
                src={workshopData.featuredClient.logo}
                alt={workshopData.featuredClient.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-8 md:p-12">
              <span className="inline-block text-xs font-body font-semibold tracking-[0.25em] uppercase text-wine-500 mb-3">
                Featured Client
              </span>
              <h3 className="font-display text-3xl text-primary font-semibold mb-4">
                {workshopData.featuredClient.name}
              </h3>
              <p className="font-body text-secondary leading-relaxed">
                {workshopData.featuredClient.description}
              </p>
            </div>
          </div>
        </motion.div>
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
