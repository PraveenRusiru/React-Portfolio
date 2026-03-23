import { motion } from 'framer-motion';
import { Github, ExternalLink, Play, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNotification } from '@/contexts/NotificationContext';
import { useCallback } from 'react';
import ecommerce from '@/assets/boquet.png';
import betting from '@/assets/betting site.png';
import patientData from '@/assets/patient data analysis.png';  
const techColors = {
  // Frontend
  "React": "bg-blue-100 text-blue-700",
  "JavaScript": "bg-yellow-100 text-yellow-800",
  "HTML": "bg-orange-100 text-orange-700",
  "CSS": "bg-blue-100 text-blue-700",
  "Tailwind": "bg-cyan-100 text-cyan-700",
  "React Native": "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300",
  "NativeWind": "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300", 

  // Cloud & Database
  "Firebase": "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300", // Flame Orange/Amber

  // Deployment
  "Vercel": "bg-black text-white dark:bg-white dark:text-black", // High contrast signature style
  "Railway": "bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/30 dark:text-fuchsia-300", // Purple/Pink
  // Backend
  "Node.js": "bg-green-100 text-green-700",
  "Express.js": "bg-gray-200 text-gray-800",
  "Java": "bg-red-100 text-red-700",
  "Spring Boot": "bg-green-100 text-green-800",
  "Python": "bg-blue-100 text-blue-800",
  "Express": "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200", // Neutral gray
  "JWT": "bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/30 dark:text-fuchsia-300",
  // Database
  "MongoDB": "bg-green-100 text-green-700",
  "MySQL": "bg-blue-100 text-blue-700",
  "PostgreSQL": "bg-indigo-100 text-indigo-700",
  
  // Tools/Others
  "Hibernate": "bg-stone-200 text-stone-700",
  "Git": "bg-orange-100 text-orange-700",

  // Python Data / Analysis / Scraping
"Pandas": "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300", 
// Pandas = dark blue/purple vibe

"NumPy": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300", 
// NumPy = classic blue

"Seaborn": "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300", 
// Seaborn = soft purple (data visualization feel)

"BeautifulSoup": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300", 
// scraping → organic/green fits well

"Requests": "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
// neutral utility library → clean gray

};

// Helper function to safely get color or return a default
const getTechColor = (techName) => {
  return techColors[techName] || "bg-secondary/20 text-secondary-foreground"; // Default gray/theme color
};
const projects = [
  {
    title: 'Betting Site',
    period: 'September 2025 – October 2025',
    shortDescription: 'Real-time sports betting simulation with dynamic odds',
    description: 'A sports betting simulation platform that allows users to register, place virtual bets on live cricket matches, and earn rewards based on match outcomes, with betting odds dynamically updated using real-time scoreboards',
    features: [
      'Live cricket match integration',
      'Dynamic betting odds calculation',
      'User rewards & wallet system',
      'Real-time scoreboard updates'
    ],
    tech: ['Spring Boot', 'JavaScript', 'HTML', 'CSS','MySQL','JWT'],
    image: betting,
    github: 'https://github.com/PraveenRusiru/BettingSite.git',
    youtube: 'https://youtu.be/8jjr0mpA05g',
    featured: true,
  },
  {
    title: 'E-Commerce Platform',
    period: 'November 2025 – Present',
    shortDescription: 'Full-stack flower bouquet shop with seamless ordering experience',
    description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.',
    features: [
      'User authentication & authorization',
      'Real-time order tracking',
      'Secure payment integration',
      'Admin analytics dashboard'
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Express','Vercel','JWT'],
    image: ecommerce,
    github: 'https://github.com/PraveenRusiru/Flower-Boquet-Backend.git',
    demo: 'https://flower-boquet-frontend.vercel.app/',
    featured: true,
  },
  
  {
    title: 'Strategic Patient Risk Stratification',
    period: 'January 2026 – February 2026',
    shortDescription: 'Analyzed 100K+ patient records to build a predictive risk-scoring model (VCI) that identifies high-risk patients before discharge.',
    description: 'This project involved analyzing a large dataset of patient records to develop a predictive model for identifying high-risk patients who are likely to be readmitted to the hospital within 30 days of discharge. The model uses various clinical and demographic factors to calculate a risk score for each patient.',
    features: [
      'Cleaned 100K+ raw hospital records, removing deceased patients and incomplete data',
      'Built an automated web scraper to translate cryptic diagnosis codes into clear medical descriptions',
      'Analyzed patterns through data visualization to identify hidden readmission drivers',
      'Developed a custom risk-scoring system (VCI) that successfully flags patients who are 1.8x more likely to be readmitted'
    ],
    tech: ['Python', 'Pandas', 'NumPy','Seaborn','BeautifulSoup','Requests'],
    image: patientData,
    github: 'https://github.com/chanuthdewhan/clinical-risk-stratification',
    demo: 'https://clinical-risk-stratification-9bwccfpbzvesvjdq7yvmet.streamlit.app/',
    featured: false,
  },

  

];

export const ProjectsSection = () => {
  const { triggerNotification } = useNotification();

  const handleExternalLink = useCallback((platform: string, url: string) => {
    triggerNotification({
      type: 'link',
      message: `Opening ${platform}...`,
      icon: 'link',
      duration: 1500,
    });
    
    setTimeout(() => {
      window.open(url, '_blank');
    }, 500);
  }, [triggerNotification]);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills in full-stack development and design.
          </p>
        </motion.div>

        {/* Masonry-style Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="rounded-2xl overflow-hidden gradient-border glass-ios-card transition-all duration-500 hover:glow-purple">
                {/* Project Image */}
                
                <div className="relative h-64 md:h-80 bg-gradient-to-br from-muted to-card overflow-hidden">
                  
                  <div className="absolute inset-0 flex-col items-center justify-center">
                    <img src={project.image} alt={project.image} loading="lazy"
                        decoding="async"  className="w-full h-full object-contain" />
                    {/* <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                        <span className="text-2xl font-display font-bold text-primary">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">Project Preview</p>
                    </div> */}
                  </div>
                  
                  {/* Hover Overlay with Buttons */}
                  <motion.div
                    className="absolute inset-0 bg-background/90 backdrop-blur-sm flex items-center justify-center gap-2"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 2 }}
                      transition={{ delay: 0.1 }}
                    > */}
                      <Button
                        size="sm"
                        variant="secondary"
                        className="rounded-full gap-2 opacity-100"
                        onClick={() => handleExternalLink('GitHub', project.github)}
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </Button>
                    {/* </motion.div> */}
                    {/* <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 2 }}
                      transition={{ delay: 0.2 }}
                    > */}
                      <Button
                        size="sm"
                        className="rounded-full gap-1 opacity-100"
                        onClick={() => handleExternalLink(
                          project.youtube ? 'YouTube' : 'Demo',
                          project.demo || project.youtube || '#'
                        )}
                      >
                        {project.youtube ? (
                          <>
                            <Play className="w-4 h-4" />
                            Watch
                          </>
                        ) : (
                          <>
                            <ExternalLink className="w-4 h-4" />
                            Demo
                          </>
                        )}
                      </Button>
                    </motion.div>
                  {/* </motion.div> */}

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-8">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-2xl md:text-3xl font-display font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.period && (
                      <span className="flex-shrink-0 mt-1 px-3 py-1 text-xs font-medium rounded-full glass-ios-card text-muted-foreground whitespace-nowrap">
                        {project.period}
                      </span>
                    )}
                  </div>
                  
                  {/* Short Description */}
                  <p className="text-primary/80 text-base md:text-lg font-medium mb-4">
                    {project.shortDescription}
                  </p>
                  
                  {/* Main Features */}
                  <div className="mb-6 space-y-2">
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Key Features</p>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                      {project.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-2 text-sm md:text-base text-muted-foreground"
                        >
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${getTechColor(tech)}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
