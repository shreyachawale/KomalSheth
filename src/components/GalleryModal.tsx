import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryItem } from '../data/portfolio';

interface Props {
  title: string;
  items: GalleryItem[];
  isOpen: boolean;
  onClose: () => void;
}

export default function GalleryModal({ title, items, isOpen, onClose }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(
    () =>
      setLightboxIndex((c) => (c !== null ? (c - 1 + items.length) % items.length : null)),
    [items.length]
  );
  const next = useCallback(
    () => setLightboxIndex((c) => (c !== null ? (c + 1) % items.length : null)),
    [items.length]
  );

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary/90 backdrop-blur-sm flex items-start justify-center overflow-y-auto"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              className="w-full max-w-5xl mx-4 my-8 bg-surface rounded-2xl border border-cream-200 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-cream-200">
                <h3 className="font-display text-xl text-primary">{title}</h3>
                <button
                  onClick={onClose}
                  className="text-secondary hover:text-primary transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Masonry grid */}
              <div className="p-6">
                <div className="columns-2 md:columns-3 gap-4 space-y-4">
                  {items.map((item, i) => (
                    <div
                      key={i}
                      className="break-inside-avoid cursor-pointer group"
                      onClick={() => openLightbox(i)}
                    >
                      {item.type === 'video' ? (
                        <div className="relative rounded-lg overflow-hidden">
                          <video
                            src={item.src}
                            poster={item.poster}
                            className="w-full rounded-lg group-hover:scale-[1.02] transition-transform duration-300"
                            muted
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-primary/30 group-hover:bg-primary/10 transition-colors">
                            <div className="w-14 h-14 rounded-full bg-wine-500/90 flex items-center justify-center">
                              <ChevronRight size={28} className="text-cream-50 ml-1" />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="relative rounded-lg overflow-hidden">
                          <img
                            src={item.src}
                            alt={item.caption || ''}
                            loading="lazy"
                            className="w-full rounded-lg group-hover:scale-[1.02] transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          {item.caption && (
                            <p className="absolute bottom-2 left-3 text-xs text-cream-50 opacity-0 group-hover:opacity-100 transition-opacity">
                              {item.caption}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-primary/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-cream-200/70 hover:text-cream-50 p-2 z-10"
            >
              <ChevronLeft size={36} />
            </button>

            <div
              className="max-w-4xl max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {items[lightboxIndex].type === 'video' ? (
                <video
                  src={items[lightboxIndex].src}
                  poster={items[lightboxIndex].poster}
                  controls
                  autoPlay
                  className="max-w-full max-h-[85vh] rounded-lg"
                />
              ) : (
                <img
                  src={items[lightboxIndex].src}
                  alt={items[lightboxIndex].caption || ''}
                  className="max-w-full max-h-[85vh] rounded-lg object-contain"
                />
              )}
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-cream-200/70 hover:text-cream-50 p-2 z-10"
            >
              <ChevronRight size={36} />
            </button>

            {items[lightboxIndex].caption && (
              <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-cream-200/70 font-body">
                {items[lightboxIndex].caption}
              </p>
            )}

            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-cream-200/70 hover:text-cream-50"
            >
              <X size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
