import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Download,
  Briefcase,
} from "lucide-react";
import profilePhoto from "@/assets/professional (5)  (1).png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const roles = [
  "Backend Dev",
  "Full Stack Dev",
  "AI Enthusiast",
  "Data Analysis",
];

const BinaryText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState<
    { char: string; isDecoded: boolean }[]
  >([]);

  useEffect(() => {
    const binaryChars = "01";
    const initialState = text.split("").map((char) => ({
      char: binaryChars[Math.floor(Math.random() * 2)],
      isDecoded: false,
    }));
    setDisplayText(initialState);

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText((prev) =>
          prev.map((item, idx) => {
            if (idx < currentIndex) {
              return { char: text[idx], isDecoded: true };
            }
            return {
              char: binaryChars[Math.floor(Math.random() * 2)],
              isDecoded: false,
            };
          }),
        );
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className="inline-flex">
      {displayText.map((item, idx) => (
        <motion.span
          key={idx}
          className={`font-mono ${item.isDecoded ? "text-primary" : "text-secondary"}`}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          {item.char}
        </motion.span>
      ))}
    </span>
  );
};

export const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { amount: 0.3 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-0 overflow-hidden"
    >
      <div className="container mx-auto px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-end">
          {/* Left - Photo with Tech Background */}
          <motion.div
            className="order-2 lg:order-1 flex justify-center items-center lg:justify-start relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Tech background rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] z-0">
                {/* <motion.div
                  className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#1e3a5f]/30"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 w-[350px] h-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1px] border-[#4caf50]/20 border-t-transparent border-l-transparent"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                /> */}
                {/* <motion.div
                  className="absolute top-1/2 left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1px] border-[#4caf50]/20 border-t-transparent border-l-transparent"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                /> */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-[450px] h-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                  animate={isInView ? { rotate: 360 } : { rotate: 0 }}
                  transition={
                    isInView
                      ? { duration: 10, repeat: Infinity, ease: "linear" }
                      : { duration: 0.3 }
                  }
                >
                  <div className="w-3 h-3 bg-[#0d47a1] rounded-full shadow-[0_0_15px_#0d47a1] absolute -top-1.5 left-1/2 -translate-x-1/2" />
                </motion.div>
              </div>

              {/* Corner brackets */}
              <motion.div
                className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-[#4caf50]/50 rounded-tl-lg z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-[#0d47a1]/50 rounded-br-lg z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              />

              {/* Profile image */}
              <motion.img
                src={profilePhoto}
                loading="lazy"
                decoding="async"
                alt="Profile Photo"
                className="h-[60vh] lg:h-[75vh] w-auto object-cover object-top relative z-10 drop-shadow-2xl"
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* Right - Name, Introduction & Social Links */}
          <motion.div
            className="order-1 lg:order-2 lg:text-left pb-4 lg:pb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Open for Freelance badge */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start mb-4"
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold relative overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(16px) saturate(1.8)",
                  WebkitBackdropFilter: "blur(16px) saturate(1.8)",
                  border: "1px solid transparent",
                  backgroundClip: "padding-box",
                }}
                animate={{
                  boxShadow: [
                    "0 0 0 0 hsl(var(--primary)/0.4), inset 0 0 0 1px hsl(143 80% 45% / 0.6)",
                    "0 0 20px 4px hsl(var(--primary)/0.15), inset 0 0 0 1px hsl(143 80% 45% / 0.6)",
                    "0 0 0 0 hsl(var(--primary)/0.4), inset 0 0 0 1px hsl(143 80% 45% / 0.6)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {/* Rainbow iridescent border */}
                <span
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, #ff0080, #ff8c00, #40e0d0, #7b2ff7, #ff0080)",
                    backgroundSize: "300% 300%",
                    opacity: 0.5,
                    padding: "1px",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    animation: "rainbow-shift 4s linear infinite",
                  }}
                />
                {/* Pulsing green dot */}
                <motion.span
                  className="w-2 h-2 rounded-full bg-green-400 relative"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <motion.span
                    className="absolute inset-0 rounded-full bg-green-400"
                    animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.span>
                <span className="text-green-400 relative z-10 text-base sm:text-lg md:text-2xl">
                  Open for Freelance
                </span>
                <Briefcase className="w-3 h-3 text-green-400 relative z-10" />
              </motion.div>
            </motion.div>

            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              {/* Name */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-tight mb-4"
              >
                <span className="text-foreground">Praveen</span>
                <br />
                <span className="text-foreground">Rusiru.</span>
              </motion.h1>

              {/* Divider */}
              <motion.div
                variants={{
                  hidden: { width: 0, opacity: 0 },
                  visible: {
                    width: 64,
                    opacity: 1,
                    transition: { duration: 1, ease: "circOut" },
                  },
                }}
                className="h-1 bg-primary mb-6 mx-auto lg:mx-0"
              />

              {/* Intro text */}
              <motion.p
                variants={itemVariants}
                className="text-sm text-muted-foreground mb-3"
              >
                - Introducing
              </motion.p>

              {/* Dynamic role */}
              <motion.h2
                variants={itemVariants}
                className="text-xl md:text-2xl font-semibold text-foreground mb-4"
              >
                <BinaryText
                  key={currentRoleIndex}
                  text={roles[currentRoleIndex]}
                />
                ,
                <br />
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base text-muted-foreground max-w-md mx-auto lg:mx-0 mb-6 leading-relaxed"
            >
              I'm the most passionate Developer you will ever get to work with.
              If you have a great project that needs some amazing skills, I'm
              your guy.
            </motion.p>

            {/* CTA + Download CV */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start items-center"
            >
              <span className="underline underline-offset-4 text-primary">
                Contact Me
              </span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-primary"
              >
                →
              </motion.span>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 text-primary font-medium group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>

              {/* CV Download button */}
              <motion.a
                href="@/assets/Praveen Rusiru - Springboot Development _ Backend Developer CV .pdf"
                download="@/assets/Praveen Rusiru - Springboot Development _ Backend Developer CV .pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold relative overflow-hidden group"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  backdropFilter: "blur(16px) saturate(1.6)",
                  WebkitBackdropFilter: "blur(16px) saturate(1.6)",
                }}
              >
                {/* iridescent border */}
                <span
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--accent)), hsl(var(--primary)))",
                    backgroundSize: "300% 300%",
                    opacity: 0.7,
                    padding: "1px",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    animation: "rainbow-shift 4s linear infinite",
                  }}
                />
                <Download className="w-4 h-4 text-primary group-hover:animate-bounce relative z-10" />
                <span className="text-foreground relative z-10">
                  Download CV
                </span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="ps-3 flex gap-12 justify-center lg:justify-start"
            >
              {[
                { icon: Twitter, href: "", label: "Twitter" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/praveen-rusiru/",
                  label: "LinkedIn",
                },
                {
                  icon: Github,
                  href: "https://github.com/PraveenRusiru",
                  label: "GitHub",
                },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  whileHover={{ scale: 1.2, rotate: 4, color: "#4caf50" }}
                  whileTap={{ scale: 0.9 }}
                  className="text-muted-foreground transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
