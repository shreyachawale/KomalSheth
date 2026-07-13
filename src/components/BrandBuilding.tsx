import { useState } from 'react';

const categories = [
  {
    title: 'Brand Strategy & Positioning',
    clients: ['Happiness Deli'],
  },
  {
    title: 'Personal & Business Branding',
    clients: ['Vikesh Shah', 'Sonal Holland'],
  },
  {
    title: 'Content Strategy & Publishing',
    clients: ['Beglamrs by Purple'],
  },
  {
    title: 'Website Content',
    clients: ['Kalindi Kilachand & Associates', 'JKS Jewels'],
  },
  {
    title: 'Founder Stories & Company Narratives',
    clients: ['Komal Creation Jewellery Store', 'Maharashtra Chamber of Commerce, Pune'],
  },
  {
    title: 'Coffee Table Book',
    clients: ['Multiple Jewellers'],
  },
  {
    title: 'Writing & Editing',
    clients: ['Radio One'],
  },
  {
    title: 'Brand Storytelling',
    clients: ['Gera Song of Joy'],
  },
  {
    title: 'Editorial Planning & Proofreading',
    clients: ['Vritti Avichal Published Books', 'Limca Book of Record Holder'],
  },
  {
    title: 'Speech, Presentation & Keynote Writing',
    clients: ['Multiple Corporates'],
  },
  {
    title: 'PR & Media Content',
    clients: ['Happiness Deli', 'Chitrakekha Magazine', 'Mid-Day', 'Sandesh News'],
  },
  {
    title: 'Communication Workshops',
    clients: ['Barclays'],
  },
  {
    title: 'Interviews & Internal Event Hosting / Podcast',
    clients: [
      'Vascon',
      'Duroshox',
      'Thai Consults',
      'American School of Bombay',
      'JKS Jewels',
      'Radio One',
    ],
  },
  {
    title: 'Corporate Meet-Ups',
    clients: ['Faurecia', 'Rathod Jewellers', 'Phoenix Marketcity'],
  },
  {
    title: 'CSR & Volunteer Work',
    clients: [
      'Crafts Council of Karnataka',
      'Thought Shop Foundation',
      'Lions Club',
      'Live Life Love Life Charity Auctions',
    ],
  },
  {
    title: 'Wealth & Banking Workshops / Content / Events',
    clients: ['Cedrus Wealth Management', 'Citibank Gold'],
  },
];

export default function BrandBuilding() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="bg-[#fdf3ec] py-20 px-4 sm:px-8 lg:px-16 font-serif">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-14">
        <p className="text-[#8b1a2f] uppercase tracking-[0.22em] text-xs font-sans font-semibold mb-3">
          Portfolio
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] leading-tight">
          Brand Building{' '}
          <span className="text-[#8b1a2f]">&amp; more</span>
          <span className="text-[#8b1a2f]">…</span>
        </h2>
        <div className="mt-5 h-[2px] w-16 bg-[#8b1a2f] rounded-full" />
        <p className="mt-5 text-[#5a4a42] font-sans text-base leading-relaxed max-w-2xl">
          A curated selection of brands, individuals, and institutions shaped through strategy,
          storytelling, and creative content.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat, i) => (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className={`
              relative rounded-2xl border transition-all duration-300 cursor-default overflow-hidden
              ${hovered === i
                ? 'border-[#8b1a2f] bg-[#8b1a2f] shadow-lg shadow-[#8b1a2f]/20 -translate-y-1'
                : 'border-[#e8d5c8] bg-white/70 hover:bg-white'}
            `}
          >
            {/* Accent bar */}
            <div
              className={`absolute top-0 left-0 w-1 h-full rounded-l-2xl transition-all duration-300 ${
                hovered === i ? 'bg-[#fdf3ec]' : 'bg-[#8b1a2f]'
              }`}
            />

            <div className="pl-6 pr-5 py-5">
              <h3
                className={`font-sans font-semibold text-sm leading-snug mb-3 transition-colors duration-300 ${
                  hovered === i ? 'text-[#fdf3ec]' : 'text-[#8b1a2f]'
                }`}
              >
                {cat.title}
              </h3>

              <ul className="space-y-1">
                {cat.clients.map((client, j) => (
                  <li
                    key={j}
                    className={`flex items-start gap-2 font-sans text-sm transition-colors duration-300 ${
                      hovered === i ? 'text-[#f5ddd2]' : 'text-[#3d2c26]'
                    }`}
                  >
                    <span
                      className={`mt-[6px] w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-300 ${
                        hovered === i ? 'bg-[#f5ddd2]' : 'bg-[#8b1a2f]'
                      }`}
                    />
                    {client}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="max-w-7xl mx-auto mt-12 text-center">
        <p className="font-sans text-xs text-[#9e8077] uppercase tracking-widest">
          And many more across industries
        </p>
      </div>
    </section>
  );
}
