import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Props {
  clientName: string;
  caseStudy: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function CaseStudyModal({ clientName, caseStudy, isOpen, onClose }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-primary/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-lg bg-bg rounded-2xl border border-cream-200 p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-xl text-wine-500">{clientName}</h3>
              <button onClick={onClose} className="text-secondary hover:text-primary transition-colors">
                <X size={20} />
              </button>
            </div>
            <p className="font-body text-secondary leading-relaxed">{caseStudy}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
