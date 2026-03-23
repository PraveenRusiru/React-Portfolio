import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight, Users, Award } from 'lucide-react';

const experiences = [
  {
    role: 'Flower Bouquet E-Commerce Website',
    company: 'Self-Employed',
    location: 'Remote / Sri Lanka',
    period: '2025 November – Present',
    type: 'Freelance',
    icon: Briefcase,
    description:
      'Developed a full-stack e-commerce application for a flower bouquet shop, enabling users to browse products, place orders, and make secure payments. Built with React, Node.js, Express, and MongoDB, the system includes JWT-based authentication, Cloudinary image uploads for product management, and real-time inventory handling. The application is deployed on Vercel, ensuring a fast and responsive user experience.',
    highlights: [
      'Built a full-stack e-commerce application using React, Node.js, Express, and MongoDB',
      'Implemented JWT-based authentication and role-based authorization for secure user access',
      'Integrated Cloudinary image upload system for efficient product management',
      'Developed secure payment processing and order management workflows',
      ' Designed dynamic inventory system with real-time updates and deployed on Vercel',
    ],
    color: 'from-primary/20 to-accent/10',
    dotColor: 'bg-primary',
    accentColor: 'hsl(var(--primary))',
  },
  {
    role: 'Vice President – Student Committee',
    company: 'IJSE Institute of Software Engineering',
    location: 'Galle, Sri Lanka',
    period: 'December 2025 – Present',
    type: 'Leadership',
    icon: Users,
    description:
      'Served as Vice President of the student committee, leading the planning and execution of student-led and community initiatives. Played a key role in coordinating teams, managing events, and supporting community engagement activities while developing strong leadership, communication, and organizational skills.',
    highlights: [
      'Led planning, coordination, and execution of student-led and community service initiatives',
      'Organized and managed a disaster relief campaign for Cyclone Ditwah in collaboration with the St. John Ambulance Association',
      'Coordinated volunteers, logistics, and stakeholder communication for effective humanitarian support',
      'Managed social media content and campaigns to improve event promotion and community engagement',
    ],
    color: 'from-accent/20 to-secondary/10',
    dotColor: 'bg-accent',
    accentColor: 'hsl(var(--accent))',
  },
];

const typeBadgeColor: Record<string, string> = {
  Freelance: 'bg-primary/20 text-primary',
  Leadership: 'bg-accent/20 text-accent-foreground',
  Internship: 'bg-secondary/20 text-secondary-foreground',
};

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building real-world products and leading people — the two things that define my journey so far.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 40, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, type: 'spring', stiffness: 90 }}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-8 hidden md:flex items-center justify-center z-10">
                  <motion.div
                    className={`w-5 h-5 rounded-full ${exp.dotColor} ring-4 ring-background`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3, type: 'spring', stiffness: 200 }}
                  />
                </div>

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-10' : 'md:pr-10'}`}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                    className="group relative rounded-2xl overflow-hidden cursor-pointer"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      backdropFilter: "blur(32px) saturate(2) brightness(1.08)",
                      WebkitBackdropFilter: "blur(32px) saturate(2) brightness(1.08)",
                      boxShadow: "0 8px 32px 0 rgba(0,0,0,0.18), inset 0 1px 1px 0 rgba(255,255,255,0.12)",
                    }}
                  >
                    {/* Iridescent rainbow border */}
                    <motion.span
                      className="absolute inset-0 rounded-2xl pointer-events-none z-20"
                      style={{
                        background: "linear-gradient(135deg, #ff0080, #ff8c00, #40e0d0, #7b2ff7, #0d47a1, #ff0080)",
                        backgroundSize: "400% 400%",
                        padding: "1px",
                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                      }}
                      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Top gradient accent */}
                    <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${exp.color} z-10`} />

                    {/* Hover gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                    <div className="relative z-10 p-6">
                      {/* Top row */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <exp.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-display font-bold group-hover:text-primary transition-colors leading-tight">
                              {exp.role}
                            </h3>
                            <p className="text-primary font-semibold text-sm">{exp.company}</p>
                          </div>
                        </div>
                        <span className={`flex-shrink-0 text-xs font-semibold px-3 py-1 rounded-full ${typeBadgeColor[exp.type] || 'bg-muted text-muted-foreground'}`}>
                          {exp.type}
                        </span>
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-primary" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-primary" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-1.5">
                        {exp.highlights.map((h, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + i * 0.05 }}
                            className="flex items-start gap-2 text-sm text-foreground/80"
                          >
                            <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            {h}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Hover shine sweep */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                      style={{
                        background:
                          'linear-gradient(110deg, transparent 35%, rgba(255,255,255,0.06) 45%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.06) 55%, transparent 65%)',
                        backgroundSize: '200% 100%',
                      }}
                      animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
