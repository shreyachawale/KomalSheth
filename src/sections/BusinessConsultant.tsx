import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Globe, Newspaper, Eye } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import CaseStudyModal from '../components/CaseStudyModal';
import { consultantData } from '../data/portfolio';

const serviceIcons = [
  <TrendingUp key="bd" size={28} />,
  <Globe key="dm" size={28} />,
  <Newspaper key="pr" size={28} />,
];

export default function BusinessConsultant() {
  const [caseStudy, setCaseStudy] = useState<{ name: string; study: string } | null>(null);

  return (
    <section id="consulting" className="py-20 md:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Services"
          title={consultantData.title}
          subtitle={consultantData.subtitle}
        />

        {/* Services */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {consultantData.services.map((service, i) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface border border-cream-200 rounded-2xl p-8 text-center hover:border-wine-500/60 transition-colors duration-300 group shadow-sm"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-wine-50 flex items-center justify-center text-wine-500 group-hover:bg-wine-100 transition-colors">
                {serviceIcons[i]}
              </div>
              <h3 className="font-display text-lg text-primary font-semibold">{service}</h3>
            </motion.div>
          ))}
        </div>

        {/* Client showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display text-2xl text-center text-primary mb-8">Client Showcase</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {consultantData.clients.map((client, i) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-surface rounded-2xl overflow-hidden border border-cream-200 hover:border-wine-500/60 transition-colors duration-300 group shadow-sm"
              >
                <div className="aspect-[16/10] overflow-hidden">
  {client.video ? (
    <video
      src={client.video}
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
  ) : (
    <img
      src={client.image}
      alt={client.name}
      loading="lazy"
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
  )}
</div>
                <div className="p-6">
                  <h4 className="font-display text-lg text-primary font-semibold mb-2">
                    {client.name}
                  </h4>
                  <p className="font-body text-sm text-secondary leading-relaxed mb-4">
                    {client.description}
                  </p>
                  {client.caseStudy && (
                    <button
                      onClick={() =>
                        setCaseStudy({ name: client.name, study: client.caseStudy! })
                      }
                      className="inline-flex items-center gap-2 text-sm font-body font-medium text-wine-500 hover:text-wine-700 transition-colors"
                    >
                      <Eye size={14} />
                      View Case Study
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {caseStudy && (
        <CaseStudyModal
          clientName={caseStudy.name}
          caseStudy={caseStudy.study}
          isOpen={!!caseStudy}
          onClose={() => setCaseStudy(null)}
        />
      )}
    </section>
  );
}
