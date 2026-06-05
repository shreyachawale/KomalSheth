import { Mail, MessageCircle, Instagram, Linkedin, Heart } from 'lucide-react';
import { contactData, navLinks } from '../data/portfolio';

export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Mail size={18} />, href: `mailto:${contactData.email}`, label: 'Email' },
    { icon: <MessageCircle size={18} />, href: contactData.whatsapp, label: 'WhatsApp' },
    { icon: <Instagram size={18} />, href: contactData.instagram, label: 'Instagram' },
    { icon: <Linkedin size={18} />, href: contactData.linkedin, label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-bg border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl text-primary font-semibold mb-3">
              Komal <span className="text-gradient-wine">Sheth</span>
            </h3>
            <p className="font-body text-sm text-secondary leading-relaxed max-w-sm">
              Presenter, Emcee, Business Consultant, Workshop Facilitator, and Tarot Reader — bringing expertise and elegance to every engagement.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-body font-semibold text-primary mb-4 text-sm tracking-wide uppercase">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left font-body text-sm text-secondary hover:text-wine-500 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-body font-semibold text-primary mb-4 text-sm tracking-wide uppercase">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-cream-100 border border-cream-200 flex items-center justify-center text-secondary hover:bg-wine-500 hover:text-cream-50 hover:border-wine-500 transition-all duration-300"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-secondary">
            &copy; {new Date().getFullYear()} Komal Sheth. All rights reserved.
          </p>
          <p className="font-body text-xs text-secondary flex items-center gap-1">
            Crafted with <Heart size={10} className="text-wine-500 fill-wine-500" /> and passion
          </p>
        </div>
      </div>
    </footer>
  );
}
