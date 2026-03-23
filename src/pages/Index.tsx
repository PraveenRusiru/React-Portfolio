import { lazy, useEffect } from "react";
import { NotificationProvider } from "@/contexts/NotificationContext";
const DynamicIslandNav = lazy(() => import("@/components/DynamicIslandNav"));
const HeroSection = lazy(() => import("@/components/HeroSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const ExperienceSection = lazy(() => import("@/components/ExperienceSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
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
