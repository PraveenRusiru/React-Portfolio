import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO, TechStart Inc.',
    content: 'Exceptional work! The attention to detail and clean code delivery exceeded our expectations. Highly recommended.',
  },
  {
    name: 'Michael Roberts',
    role: 'Product Lead, Innovation Labs',
    content: 'A true professional who understands both design and development. Our project was delivered on time with outstanding quality.',
  },
  {
    name: 'Emily Watson',
    role: 'Founder, CreativeFlow',
    content: 'Transformed our vision into a beautiful, functional product. The collaboration was seamless from start to finish.',
  },
  {
    name: 'David Park',
    role: 'CTO, NextGen Solutions',
    content: 'Impressive technical skills combined with excellent communication. Made complex features feel simple to implement.',
  },
  {
    name: 'Lisa Thompson',
    role: 'Marketing Director, BrandUp',
    content: 'The UI/UX expertise brought to our project was invaluable. Our conversion rates increased significantly after launch.',
  },
  {
    name: 'James Miller',
    role: 'Startup Founder',
    content: 'From concept to deployment, the entire process was smooth and professional. Would work together again in a heartbeat.',
  },
];

export const TestimonialsSection = () => {
  // Duplicate for infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What People Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feedback from clients and collaborators I've had the pleasure of working with.
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling Testimonials */}
        <div className="flex animate-marquee hover:pause">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="flex-shrink-0 w-80 md:w-96 mx-4"
            >
              <div className="p-6 rounded-2xl gradient-border bg-card h-full hover:glow-gold transition-all duration-300 group">
                <Quote className="w-8 h-8 text-primary/30 mb-4 group-hover:text-primary/50 transition-colors" />
                <p className="text-foreground/90 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
