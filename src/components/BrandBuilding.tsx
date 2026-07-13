import { useState, type ReactNode } from 'react';
import {
  Compass,
  Globe,
  BookOpen,
  Megaphone,
  CalendarDays,
  ChevronDown,
} from 'lucide-react';
import happinessDeliLogo from '../assets/Happiness Deli.png';
import heermanakLogo from '../assets/Heermanak.png';
import radioOneLogo from '../assets/Radio one.png';
import avichalLogo from '../assets/avichal.jpg';
import limcaLogo from '../assets/Limca.jpg';
import vasconLogo from '../assets/vascon.png';
import duroshoxLogo from '../assets/duroshox.png';
import thaiLogo from '../assets/thia.png';
import americanSchoolLogo from '../assets/american school.png';
import jksLogo from '../assets/jks.jpg';
import barclaysLogo from '../assets/barclayss.jpg';
import craftCouncilLogo from '../assets/craft council.jpg';
import thoughtShopLogo from '../assets/thoughtshop.png';
import lionsClubLogo from '../assets/lions club.png';
import liveLifeLogo from '../assets/Live life.png';
import faureciaLogo from '../assets/faurecia.png';
import rathodLogo from '../assets/rathod.jpg';
import marketcityLogo from '../assets/marketcity.png';
import cedrusLogo from '../assets/cedrus.jpg';
import citigoldLogo from '../assets/citigold.png';

interface Brand {
  name: string;
  logo?: string;
}

interface SubCategory {
  name: string;
}

interface Category {
  id: number;
  title: string;
  icon: ReactNode;
  subcategories: SubCategory[];
  brands: Brand[];
}

interface RawCategory {
  title: string;
  icon: ReactNode;
  subcategories: string[];
  brands?: Brand[];
  brandNames?: string[];
}

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join('');
}

const RAW_CATEGORIES: RawCategory[] = [
  {
    title: 'Brand Strategy & Positioning',
    icon: <Compass size={20} />,
    subcategories: [
      'Personal & Business Branding',
      'Content Strategy & Publishing',
      'Brand Storytelling',
    ],
    brands: [
      { name: 'Happiness Deli', logo: happinessDeliLogo },
      { name: "Heeramaneck's and Sons", logo: heermanakLogo },
      { name: 'Vikesh Shah' },
      { name: 'Sonal Holland' },
      { name: 'Gera Song of Joy' },
    ],
  },
  {
    title: 'Website Content',
    icon: <Globe size={20} />,
    subcategories: ['Founder Stories & Company Narratives'],
    brandNames: [
      'Kalindi Kilachand & Associates',
      'JKS Jewels',
      'Komal Creation Jewellery Store',
      'Maharashtra Chamber of Commerce, Pune',
    ],
  },
  {
    title: 'Printing & Publishing',
    icon: <BookOpen size={20} />,
    subcategories: [
      'Coffee Table Book',
      'Writing and Editing',
      'Editorial Planning and Proofreading',
    ],
    brands: [
      { name: 'Radio One', logo: radioOneLogo },
      { name: 'Vritti Avichal Published Books', logo: avichalLogo },
      { name: 'Limca Book of Record Holder', logo: limcaLogo },
    ],
  },
  {
    title: 'PR & Media Content',
    icon: <Megaphone size={20} />,
    subcategories: ['Speech, Presentation & Keynote Writing', 'Media Collab'],
    brandNames: ['Multiple Corporates'],
  },
  {
    title: 'Events',
    icon: <CalendarDays size={20} />,
    subcategories: [
      'Interviews & Internal Event Hosting / Podcast',
      'Communication Workshops',
      'Hosting and Gifting',
      'CSR',
    ],
    brands: [
      { name: 'Vascon', logo: vasconLogo },
      { name: 'Duroshox', logo: duroshoxLogo },
      { name: 'Thai Consults', logo: thaiLogo },
      { name: 'American School of Bombay', logo: americanSchoolLogo },
      { name: 'JKS Jewels', logo: jksLogo },
      { name: 'Radio One', logo: radioOneLogo },
      { name: 'Barclays', logo: barclaysLogo },
      { name: 'Crafts Council of Karnataka', logo: craftCouncilLogo },
      { name: 'Thought Shop Foundation', logo: thoughtShopLogo },
      { name: 'Lions Club', logo: lionsClubLogo },
      { name: 'Live Life Love Life Charity Auctions', logo: liveLifeLogo },
      { name: 'Faurecia', logo: faureciaLogo },
      { name: 'Rathod Jewellers', logo: rathodLogo },
      { name: 'Phoenix Marketcity', logo: marketcityLogo },
      { name: 'Cedrus Wealth Management', logo: cedrusLogo },
      { name: 'Citibank Gold', logo: citigoldLogo },
    ],
  },
];

const categories: Category[] = RAW_CATEGORIES.map((category, index) => ({
  id: index,
  title: category.title,
  icon: category.icon,
  subcategories: category.subcategories.map((name) => ({ name })),
  brands: category.brands ?? category.brandNames?.map((name) => ({ name })) ?? [],
}));

const PALETTE = [
  { bg: '#8b1a2f', light: '#fdf3ec', dot: '#c25472' },
  { bg: '#1a4d6b', light: '#eef5fa', dot: '#3a7fa0' },
  { bg: '#3b5e2b', light: '#edf4ea', dot: '#5c8f47' },
  { bg: '#6b3a1a', light: '#faf0e8', dot: '#c2763a' },
  { bg: '#2d2b6b', light: '#eeeefc', dot: '#5f5dba' },
];

export default function BrandBuilding() {
  const [selected, setSelected] = useState<number | null>(null);
  const [imgError, setImgError] = useState<Record<string, boolean>>({});

  const activeCategory = selected !== null ? categories[selected] : null;
  const palette = selected !== null ? PALETTE[selected % PALETTE.length] : PALETTE[0];

  return (
    <section className="bg-[#fdf3ec] py-20 px-4 sm:px-8 lg:px-16 font-serif">
      <div className="max-w-7xl mx-auto mb-14">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-[2px] bg-[#8b1a2f] rounded-full" />
          <p className="text-[#8b1a2f] uppercase tracking-[0.22em] text-xs font-sans font-semibold">
            Portfolio
          </p>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] leading-tight">
          Brand Building <span className="text-[#8b1a2f]">and more...</span>
        </h2>
        <p className="mt-5 text-[#5a4a42] font-sans text-base leading-relaxed max-w-2xl">
          A curated selection of brands, individuals, and institutions shaped through strategy,
          storytelling, and creative content.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
        {categories.map((category) => {
          const categoryPalette = PALETTE[category.id % PALETTE.length];
          const isActive = selected === category.id;

          return (
            <button
              key={category.id}
              onClick={() => setSelected(isActive ? null : category.id)}
              className={`group relative rounded-2xl border-2 text-left transition-all duration-300 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                isActive
                  ? 'border-transparent shadow-xl scale-[1.02]'
                  : 'border-[#e8d5c8] bg-white/70 hover:bg-white hover:shadow-md hover:-translate-y-0.5'
              }`}
              style={isActive ? { backgroundColor: categoryPalette.bg } : undefined}
            >
              <div className="px-5 pt-5 pb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
                  style={
                    isActive
                      ? { backgroundColor: 'rgba(255,255,255,0.15)', color: '#fff' }
                      : { backgroundColor: categoryPalette.light, color: categoryPalette.bg }
                  }
                >
                  {category.icon}
                </div>
                <h3
                  className="font-sans font-semibold text-sm leading-snug transition-colors duration-300"
                  style={{ color: isActive ? '#fff' : '#1a1a1a' }}
                >
                  {category.title}
                </h3>
                <p
                  className="font-sans text-xs mt-1 transition-colors duration-300"
                  style={{ color: isActive ? 'rgba(255,255,255,0.65)' : '#9e8077' }}
                >
                  {category.brands.length} brand{category.brands.length !== 1 ? 's' : ''}
                </p>
              </div>

              <div
                className="px-5 pb-4 flex justify-end transition-colors duration-300"
                style={{ color: isActive ? 'rgba(255,255,255,0.7)' : categoryPalette.bg }}
              >
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}
                />
              </div>
            </button>
          );
        })}
      </div>

      {activeCategory && (
        <div
          key={activeCategory.id}
          className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl animate-fade-in"
          style={{ backgroundColor: '#fff' }}
        >
          <div className="px-8 py-7 flex items-center gap-4" style={{ backgroundColor: palette.bg }}>
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#fff' }}
            >
              {activeCategory.icon}
            </div>
            <div>
              <h3 className="text-white font-bold text-xl leading-tight font-sans">
                {activeCategory.title}
              </h3>
              <p className="text-white/60 text-sm font-sans mt-0.5">
                {activeCategory.brands.length} brand
                {activeCategory.brands.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>

          <div className="px-8 py-8">
            <div className="mb-8">
              <p
                className="text-xs font-sans font-semibold uppercase tracking-widest mb-4"
                style={{ color: palette.bg }}
              >
                Sub-categories
              </p>
              <div className="flex flex-wrap gap-2">
                {activeCategory.subcategories.map((subcategory) => (
                  <span
                    key={subcategory.name}
                    className="font-sans text-sm px-4 py-1.5 rounded-full border font-medium"
                    style={{
                      borderColor: `${palette.bg}40`,
                      color: palette.bg,
                      backgroundColor: palette.light,
                    }}
                  >
                    {subcategory.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="h-px bg-[#ede4dc] mb-8" />

            <div>
              <p
                className="text-xs font-sans font-semibold uppercase tracking-widest mb-4"
                style={{ color: palette.bg }}
              >
                Brands
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {activeCategory.brands.map((brand) => (
                  <div
                    key={brand.name}
                    className="flex items-center gap-3 rounded-2xl border border-[#ede4dc] bg-[#fffaf6] px-4 py-3"
                  >
                    <div className="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden bg-white border border-[#ede4dc] flex items-center justify-center">
                      {brand.logo && !imgError[brand.name] ? (
                        <img
                          src={brand.logo}
                          alt={brand.name}
                          className="w-8 h-8 object-contain"
                          onError={() =>
                            setImgError((previous) => ({ ...previous, [brand.name]: true }))
                          }
                        />
                      ) : (
                        <div
                          className="w-full h-full flex items-center justify-center text-white text-xs font-bold"
                          style={{ backgroundColor: palette.bg }}
                        >
                          {getInitials(brand.name)}
                        </div>
                      )}
                    </div>
                    <span className="font-sans text-xs font-semibold text-[#2a1f1a] leading-tight line-clamp-2">
                      {brand.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {!activeCategory && (
        <div className="max-w-7xl mx-auto text-center py-6">
          <p className="font-sans text-xs text-[#9e8077] uppercase tracking-widest">
            Select a category to explore brands
          </p>
        </div>
      )}
    </section>
  );
}
