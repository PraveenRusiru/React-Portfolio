import { useEffect } from 'react';
import { NotificationProvider } from '@/contexts/NotificationContext';
import DynamicIslandNav from '@/components/DynamicIslandNav';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <NotificationProvider>
      <div className="min-h-screen bg-background text-foreground">
        <DynamicIslandNav />
        
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          
          <ServicesSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </NotificationProvider>
  );
};

export default Index;
