import { motion } from 'framer-motion';
import { Code2, Palette, Database, Smartphone } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    icon: Database,
    title: 'Backend Systems',
    subtitle: 'Robust & Secure',
    description: 'Developing scalable APIs, database architectures, and server-side solutions for complex applications.',
  },{
    icon: Code2,
    title: 'Web Development',
    subtitle: 'Modern & Scalable',
    description: 'Building responsive, performant web applications using React, Next.js, and modern JavaScript frameworks.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    subtitle: 'User-Centered',
    description: 'Creating intuitive interfaces and seamless user experiences through research-driven design processes.',
  },
  
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    subtitle: 'Cross-Platform',
    description: 'Building native-quality mobile applications using React Native and modern mobile development practices.',
  },
];

const TiltCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    setRotateX((y - centerY) / 10);
    setRotateY((centerX - x) / 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="perspective-1000"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="group p-8 rounded-2xl gradient-border glass-ios-card transition-all duration-300 cursor-pointer"
      >
        <div style={{ transform: 'translateZ(20px)' }}>
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:glow-gold transition-all">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
            </div>
            
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-2">
                {service.subtitle}
              </p>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to bring your vision to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <TiltCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
