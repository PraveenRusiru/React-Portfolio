import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { GraduationCap, Award, Calendar, ExternalLink } from 'lucide-react';

import javascriptLogo from "@/assets/tech/javascript.svg";
import typescriptLogo from "@/assets/tech/typescript.svg";
import pythonLogo from "@/assets/tech/python.svg";
import javaLogo from "@/assets/tech/java.svg";
import springbootLogo from "@/assets/tech/springboot.svg";
import nodejsLogo from "@/assets/tech/nodejs.svg";
import reactLogo from "@/assets/tech/react.svg";
import mongodbLogo from "@/assets/tech/mongodb.svg";
import mysqlLogo from "@/assets/tech/mysql.svg";
import hibernateLogo from "@/assets/tech/hibernate.svg";
import firebaseLogo from "@/assets/tech/firebase.svg";
import googlecloudLogo from "@/assets/tech/googlecloud.svg";
import vercelLogo from "@/assets/tech/vercel.svg";
import railwayLogo from "@/assets/tech/railway.svg";
import figmaLogo from "@/assets/tech/figma.svg";
import canvaLogo from "@/assets/tech/canva.svg";
import powerpointLogo from "@/assets/tech/powerpoint.svg";
import gitLogo from "@/assets/tech/git.svg";
import githubLogo from "@/assets/tech/github.svg";
import linuxLogo from "@/assets/tech/linux.svg";
import windowsLogo from "@/assets/tech/windows.svg";
import appleLogo from "@/assets/tech/apple.svg";
import introPython from "@/assets/certificates/introduction to python.png";

const education = [
  {
    degree: 'O/L Examination',
    school: 'St.Aloysius\' College',
    year: '2019',
    description: 'Completed Ordinary Level with 9 As',
  },
  {
    degree: 'A/L Examination',
    school: 'St.Aloysius\' College',
    year: '2022(2023)',
    description: 'Completed Advanced Level in Physical Science stream with B,C,S',
  },
  {
    degree: 'Graduate Diploma in Software Engineering',
    school: 'Institute of Software Engineering (IJSE)',
    year: '2024 - 2026',
    description: 'Focused on software engineering fundamentals and practical product delivery.',
  },
];

interface Skill {
  name: string;
  icon: string;
  percentage: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages & Frameworks',
    skills: [
      { name: 'JavaScript', icon: '🟨', percentage: 85 },
      { name: 'TypeScript', icon: '📘', percentage: 80 },
      { name: 'Python', icon: '🐍', percentage: 85 },
      { name: 'Java', icon: '☕', percentage: 90 },
      { name: 'SpringBoot', icon: '⚡', percentage: 85 },
      { name: 'Node', icon: '⚡', percentage: 80 },
      { name: 'React', icon: '⚡', percentage: 80 }

    ],
  },
  {
    title: 'Database & ORMs',
    skills: [
      { name: 'MongoDB', icon: '🍃', percentage: 85 },
      { name: 'MySQL', icon: '🗄️', percentage: 80 },
      { name: 'Hibernate', icon: '△', percentage: 85 },
      
    ],
  },
  {
    title: 'Cloud Tools',
    skills: [
      { name: 'Firebase', icon: '☁️', percentage: 80 },
      { name: 'Google Cloud', icon: '🌐', percentage: 75 },
      { name: 'Vercel', icon: '🔷', percentage: 85 },
      { name: 'Railway', icon: '🐳', percentage: 80 },
      
    ],
  },
  {
    title: 'Design Tools',
    skills: [
      { name: 'Figma', icon: '🎨', percentage: 80 },
      { name: 'Canva', icon: '📐', percentage: 90 },
      { name: 'PowerPoint', icon: '🖼️', percentage: 90 },
      
    ],
  },
  {
    title: 'Version Control',
    skills: [
      { name: 'Git', icon: '📂', percentage: 85 },
      { name: 'GitHub', icon: '🐙', percentage: 85 },
    ],
  },
  {
    title: 'Operating Systems',
    skills: [
      { name: 'Linux', icon: '🐧', percentage: 80 },
      { name: 'Windows', icon: '🪟', percentage: 95 },
      { name: 'macOS', icon: '🍎', percentage: 85 },
    ],
  },
];

const certifications = [
  {
    name: 'Introduction to Python',
    issuer: 'DataCamp',
    year: 'Mar 2025',
    image: introPython,
    credentialUrl: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/353b9ad941226b2d408c28d81ecf823fe0e558b8',
  },
];

const skillLogos: Record<string, string> = {
  JavaScript: javascriptLogo,
  TypeScript: typescriptLogo,
  Python: pythonLogo,
  Java: javaLogo,
  SpringBoot: springbootLogo,
  Node: nodejsLogo,
  React: reactLogo,
  MongoDB: mongodbLogo,
  MySQL: mysqlLogo,
  Hibernate: hibernateLogo,
  Firebase: firebaseLogo,
  "Google Cloud": googlecloudLogo,
  Vercel: vercelLogo,
  Railway: railwayLogo,
  Figma: figmaLogo,
  Canva: canvaLogo,
  PowerPoint: powerpointLogo,
  Git: gitLogo,
  GitHub: githubLogo,
  Linux: linuxLogo,
  Windows: windowsLogo,
  macOS: appleLogo,
};

const SkillItem = ({ skill, index }: { skill: Skill; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const logo = skillLogos[skill.name];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <motion.div
        className="flex items-center gap-3 p-3 rounded-xl glass-ios-card cursor-pointer transition-all duration-300"
        whileHover={{ scale: 1.03, y: -2 }}
      >
        {logo ? (
          <img
            src={logo}
            alt={`${skill.name} logo`}
            loading="lazy"
            decoding="async"
            className="inline-block w-8 h-8 object-contain"
          />
        ) : (
          <span className="text-2xl">{skill.icon}</span>
        )}
        <span className="font-medium text-sm">{skill.name}</span>
      </motion.div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 p-3 rounded-xl bg-card border border-primary/30 shadow-xl shadow-primary/20 min-w-[140px]"
          >
            <div className="text-center mb-2">
              {logo ? (
                <img
                  src={logo}
                  alt={`${skill.name} logo`}
                  loading="lazy"
                  decoding="async"
                  className="inline-block w-8 h-8 object-contain"
                />
              ) : (
                <span className="text-3xl">{skill.icon}</span>
              )}
              <p className="font-semibold mt-1">{skill.name}</p>
            </div>
            <div className="relative h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-accent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.percentage}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </div>
            <p className="text-center text-sm text-primary font-bold mt-1">{skill.percentage}%</p>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-primary/30" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const SkillCategoryCard = ({ category, index }: { category: SkillCategory; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="p-6 rounded-2xl glass-ios-card transition-all duration-300"
    >
      <h4 className="text-lg font-display font-semibold mb-4 text-primary">{category.title}</h4>
      <div className="grid grid-cols-2 gap-2">
        {category.skills.map((skill, skillIndex) => (
          <SkillItem key={skill.name} skill={skill} index={skillIndex} />
        ))}
      </div>
    </motion.div>
  );
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            "Transforming <b>complex problems</b> into <b>scalable</b> and <b>efficient</b> digital solutions. As a <b>backend-focused</b> Software Engineering undergraduate, I specialize in building <b>secure RESTful APIs</b> and <b>full-stack applications</b> using technologies like <b>Spring Boot</b>,<b> Node.js</b>, <b>React</b>, and <b>Python</b>. I am passionate about clean architecture, system design, and developing reliable, high-performance applications."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-display font-semibold mb-8 flex items-center gap-3">
            <GraduationCap className="text-primary" />
            Education Journey
          </h3>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {education.slice(0, 2).map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: index === 0 ? -50 : 50, rotateY: index === 0 ? -15 : 15 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.2, type: 'spring', stiffness: 100 }}
                    whileHover={{ y: -8, scale: 1.02, boxShadow: '0 20px 40px -15px hsl(var(--primary) / 0.3)' }}
                    className="group relative p-6 rounded-2xl glass-ios-card overflow-hidden"
                  >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                    style={{
                      background: 'linear-gradient(90deg, transparent, hsl(var(--primary) / 0.3), transparent)',
                      backgroundSize: '200% 100%',
                    }}
                    animate={{
                      backgroundPosition: ['200% 0', '-200% 0'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 text-sm text-primary font-medium mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.year}</span>
                    </div>
                    <h4 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-primary font-semibold mb-3">{edu.school}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
                  </div>

                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-colors" />
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.7, 
                  delay: 0.4,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  boxShadow: '0 20px 40px -15px hsl(var(--primary) / 0.3)'
                }}
                className="group relative p-6 rounded-2xl glass-ios-card overflow-hidden w-full md:w-1/2"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-sm text-primary font-medium mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{education[2].year}</span>
                    <span className="ml-auto px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full">Latest</span>
                  </div>
                  <h4 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                    {education[2].degree}
                  </h4>
                  <p className="text-accent-foreground font-semibold mb-3">{education[2].school}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{education[2].description}</p>
                </div>

                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-colors" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-display font-semibold mb-8 text-center">Tech Stack</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <SkillCategoryCard key={category.title} category={category} index={index} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
           <h3 className="text-2xl font-display font-semibold mb-8 flex items-center gap-3 justify-center">
            <Award className="text-primary" />
            Certifications
          </h3> 

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.03,
                  rotateY: 5,
                }}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 cursor-pointer"
              >
                <div className="relative h-40 overflow-hidden">
                  <motion.img
                    src={cert.image}
                    alt={cert.name}
                    loading='lazy'
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  
                  <motion.div
                    className="absolute top-3 right-3 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-bold rounded-full"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                  >
                    {cert.year}
                  </motion.div>
                </div>

                <div className="p-5">
                  <h4 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">{cert.issuer}</p>
                  
                  <motion.a
                    href={cert.credentialUrl}
                    className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
                    whileHover={{ x: 5 }}
                  >
                    View Credential
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>

                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  style={{
                    border: '2px solid transparent',
                    background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary))) border-box',
                    WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />

                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{
                    background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 55%, transparent 60%)',
                    backgroundSize: '200% 100%',
                  }}
                  animate={{
                    backgroundPosition: ['200% 0', '-200% 0'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;