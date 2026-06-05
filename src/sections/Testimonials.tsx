import SectionHeader from '../components/SectionHeader';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/portfolio';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Testimonials"
          title="What Clients Say"
          subtitle="Trusted by brands, loved by audiences — hear what people have to say about working with Komal."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
