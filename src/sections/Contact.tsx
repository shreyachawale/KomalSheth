import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Instagram, Linkedin, Send, Phone } from 'lucide-react';
import { contactData } from '../data/portfolio';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  const socialLinks = [
    { icon: <Mail size={20} />, label: 'Email', href: `mailto:${contactData.email}`, color: 'hover:bg-wine-500 hover:text-cream-50' },
    { icon: <MessageCircle size={20} />, label: 'WhatsApp', href: contactData.whatsapp, color: 'hover:bg-green-600 hover:text-white' },
    { icon: <Instagram size={20} />, label: 'Instagram', href: contactData.instagram, color: 'hover:bg-pink-600 hover:text-white' },
    { icon: <Linkedin size={20} />, label: 'LinkedIn', href: contactData.linkedin, color: 'hover:bg-blue-600 hover:text-white' },
  ];

  const inputClasses =
    'w-full bg-white border border-cream-200 rounded-xl px-5 py-3.5 text-primary font-body text-sm placeholder:text-cream-400 focus:outline-none focus:border-wine-500/50 focus:ring-1 focus:ring-wine-500/30 transition-colors';

  return (
    <section id="contact" className="py-20 md:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-body font-semibold tracking-[0.25em] uppercase text-wine-500 mb-3">
            Get in Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="font-body text-secondary text-base md:text-lg max-w-xl mx-auto">
            Whether it&apos;s an event, a brand strategy, a workshop, or a tarot session — reach out and let&apos;s create something extraordinary.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-white border border-cream-200 rounded-2xl p-8 flex flex-col shadow-sm"
          >
            <div className="mb-8">
              <h3 className="font-display text-2xl text-primary font-semibold mb-2">
                Komal Sheth
              </h3>
              <p className="font-body text-secondary text-sm">
                Presenter | Emcee | Business Consultant | Workshop Facilitator | Tarot Reader
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <a
                href={`mailto:${contactData.email}`}
                className="flex items-center gap-3 text-secondary hover:text-wine-500 transition-colors font-body text-sm"
              >
                <Mail size={16} className="text-wine-500" />
                {contactData.email}
              </a>
              <div className="flex items-center gap-3 text-secondary font-body text-sm">
                <Phone size={16} className="text-wine-500" />
                Available on WhatsApp
              </div>
            </div>

            <div className="flex gap-3 mt-auto">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full bg-cream-100 flex items-center justify-center text-secondary ${s.color} transition-all duration-300`}
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClasses}
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClasses}
                  required
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClasses}
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClasses} resize-none`}
                required
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-4 bg-wine-500 hover:bg-wine-600 text-cream-50 font-body font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-wine-500/25 w-full sm:w-auto justify-center"
              >
                <Send size={16} />
                {submitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
