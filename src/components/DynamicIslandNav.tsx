import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Check, Clipboard, Send, ExternalLink, Loader2 } from 'lucide-react';
import { useNotification } from '@/contexts/NotificationContext';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const NotificationIcon = ({ icon }: { icon?: string }) => {
  switch (icon) {
    case 'spinner': return <Loader2 className="w-4 h-4 animate-spin" />;
    case 'check': return <Check className="w-4 h-4" />;
    case 'clipboard': return <Clipboard className="w-4 h-4" />;
    case 'plane': return <Send className="w-4 h-4" />;
    case 'link': return <ExternalLink className="w-4 h-4" />;
    default: return null;
  }
};

export const DynamicIslandNav = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const { notification, clearNotification } = useNotification();

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollProgress(Math.min(100, Math.max(0, progress)));
      setIsScrolling(true);
      setIsExpanded(false);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
        setIsExpanded(true);
      }, 150);

      // Detect active section
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // const scrollTo = (href: string) => {
  //   const element = document.querySelector(href);
  //   if (element) element.scrollIntoView({ behavior: 'smooth' });
  //   setIsMobileMenuOpen(false);
  // };

  const scrollTo = (href: string) => {
  setIsMobileMenuOpen(false);

  setTimeout(() => {
    const element = document.querySelector(href);
    if (element) {
      const y = (element as HTMLElement).offsetTop - 100;
      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }
  }, 150);
};

  const radius = 14;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  const showNotification = notification !== null;
  const showScrollProgress = !showNotification && !isExpanded;
  const showNav = !showNotification && isExpanded;

  const getNotificationStyles = () => {
    if (!notification) return {};
    switch (notification.type) {
      case 'success': return { background: 'rgba(34, 197, 94, 0.80)', color: '#fff', boxShadow: '0 0 30px rgba(34,197,94,0.35), inset 0 1px 1px rgba(255,255,255,0.25)' };
      case 'loading': return { background: 'rgba(100, 116, 139, 0.80)', color: '#fff' };
      case 'info': return { background: 'rgba(59, 130, 246, 0.80)', color: '#fff', boxShadow: '0 0 30px rgba(59,130,246,0.35), inset 0 1px 1px rgba(255,255,255,0.25)' };
      case 'link': return { background: 'rgba(168, 85, 247, 0.80)', color: '#fff', boxShadow: '0 0 30px rgba(168,85,247,0.35), inset 0 1px 1px rgba(255,255,255,0.25)' };
      default: return {};
    }
  };

  // iOS 26 glass base styles
  const iosGlassBase = {
    background: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(32px) saturate(1.8) brightness(1.1)',
    WebkitBackdropFilter: 'blur(32px) saturate(1.8) brightness(1.1)',
    boxShadow: '0 8px 32px 0 rgba(0,0,0,0.20), inset 0 1px 1px 0 rgba(255,255,255,0.22), inset 0 -1px 1px 0 rgba(0,0,0,0.06)',
    border: '1px solid rgba(255,255,255,0.14)',
  };

  return (
    <>
      {/* Desktop Dynamic Island - iOS 26 Glass */}
      <motion.nav
        className="fixed top-5 left-1/2 z-50 hidden md:flex"
        initial={{ x: '-50%', y: -100 }}
        animate={{ x: '-50%', y: 0 }}
        transition={{ type: 'spring', damping: 22, stiffness: 100 }}
      >
        {/* Soft ambient glow behind */}
        <motion.div
          className="absolute inset-0 -z-10 rounded-full blur-2xl"
          style={{ background: 'hsl(var(--primary) / 0.15)' }}
          animate={{ opacity: showNotification ? 0.9 : isScrolling ? 0.5 : 0.2, scale: showNotification ? 1.3 : 1 }}
          transition={{ duration: 0.5 }}
        />

        <motion.div
          className="flex items-center justify-center overflow-hidden"
          style={{
            ...(showNotification ? getNotificationStyles() : iosGlassBase),
          }}
          animate={{
            width: showNotification ? 280 : showNav ? (navLinks.length > 5 ? 520 : 440) : 100,
            height: showNotification ? 50 : showNav ? 54 : 46,
            borderRadius: showNav ? 30 : 23,
            scale: notification?.type === 'success' ? [1, 1.06, 1] : 1,
          }}
          transition={{ type: 'spring', damping: 22, stiffness: 320, mass: 0.7 }}
        >
          {/* Inner specular highlight line */}
          {!showNotification && (
            <div
              className="absolute top-0 left-4 right-4 h-px pointer-events-none"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)' }}
            />
          )}

          <AnimatePresence mode="wait">
            {showNotification && notification && (
              <motion.div
                key="notification"
                className="flex items-center gap-3 px-5"
                initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -10, filter: 'blur(5px)' }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={notification.icon === 'plane' ? { x: [0, 30], y: [0, -15], opacity: [1, 0], rotate: [0, -15] } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <NotificationIcon icon={notification.icon} />
                </motion.div>
                <span className="text-sm font-medium whitespace-nowrap tracking-wide">{notification.message}</span>
              </motion.div>
            )}

            {showNav && (
              <motion.div
                key="expanded"
                className="flex items-center gap-1 px-3 h-full"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.2, delay: 0.08 }}
              >
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <motion.button
                      key={link.name}
                      onClick={() => scrollTo(link.href)}
                      className="relative px-3 py-1.5 text-sm font-medium transition-colors rounded-full group"
                      style={{ color: isActive ? 'hsl(var(--primary))' : 'rgba(255,255,255,0.75)' }}
                      whileHover={{ scale: 1.07 }}
                      whileTap={{ scale: 0.94 }}
                    >
                      {/* Active pill */}
                      {isActive && (
                        <motion.span
                          layoutId="active-pill"
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: 'rgba(255,255,255,0.12)',
                            backdropFilter: 'blur(8px)',
                            border: '1px solid rgba(255,255,255,0.18)',
                          }}
                          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        />
                      )}
                      {/* Hover glow */}
                      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{ background: 'rgba(255,255,255,0.08)' }}
                      />
                      <span className="relative z-10">{link.name}</span>
                    </motion.button>
                  );
                })}
              </motion.div>
            )}

            {showScrollProgress && (
              <motion.div
                key="collapsed"
                className="flex items-center justify-center gap-3 px-3 w-full h-full"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
              >
                <svg width="36" height="36" className="transform -rotate-90">
                  <circle cx="18" cy="18" r={radius} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2.5" />
                  <motion.circle
                    cx="18" cy="18" r={radius} fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2.5" strokeLinecap="round"
                    strokeDasharray={circumference}
                    animate={{ strokeDashoffset }}
                    transition={{ type: 'tween', ease: 'linear', duration: 0.1 }}
                    style={{ filter: 'drop-shadow(0 0 6px hsl(var(--primary) / 0.6))' }}
                  />
                </svg>
                <motion.span className="text-xs font-semibold text-foreground tabular-nums tracking-wider" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  {Math.round(scrollProgress)}%
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.nav>

      {/* Mobile Bottom Navigation - iOS 26 Glass */}
      <motion.nav
        className="fixed bottom-5 left-1/2 z-50 md:hidden"
        initial={{ x: '-50%', y: 100 }}
        animate={{ x: '-50%', y: 0 }}
        transition={{ type: 'spring', damping: 22, stiffness: 100 }}
      >
        <motion.div
          className="flex items-center justify-center overflow-hidden"
          style={showNotification ? getNotificationStyles() : iosGlassBase}
          animate={{
            width: showNotification ? 260 : isMobileMenuOpen ? 320 : 68,
            height: isMobileMenuOpen ? 'auto' : 60,
            borderRadius: isMobileMenuOpen ? 28 : 30,
          }}
          transition={{ type: 'spring', damping: 22, stiffness: 300, mass: 0.7 }}
        >
          {/* Inner specular */}
          {!showNotification && (
            <div className="absolute top-0 left-4 right-4 h-px pointer-events-none"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)' }}
            />
          )}

          <AnimatePresence mode="wait">
            {showNotification && notification && (
              <motion.div
                key="mob-notification"
                className="flex items-center gap-3 px-5"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <NotificationIcon icon={notification.icon} />
                <span className="text-sm font-medium whitespace-nowrap">{notification.message}</span>
              </motion.div>
            )}

            {!showNotification && !isMobileMenuOpen && (
              <motion.button
                key="hamburger"
                onClick={() => setIsMobileMenuOpen(true)}
                className="flex items-center justify-center w-full h-full p-4"
                style={{ color: 'rgba(255,255,255,0.85)' }}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                whileTap={{ scale: 0.9 }}
              >
                <Menu className="w-6 h-6" />
              </motion.button>
            )}

            {!showNotification && isMobileMenuOpen && (
              <motion.div
                key="mob-menu"
                className="flex flex-col w-full py-4 px-4 gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Close row */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'hsl(var(--primary))' }}>
                    Navigation
                  </span>
                  <button onClick={() => setIsMobileMenuOpen(false)} className="p-1 rounded-full" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    <X className="w-4 h-4" />
                  </button>
                </div>
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => scrollTo(link.href)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-left w-full transition-all"
                    style={{
                      color: activeSection === link.href.replace('#', '') ? 'hsl(var(--primary))' : 'rgba(255,255,255,0.80)',
                      background: activeSection === link.href.replace('#', '') ? 'rgba(255,255,255,0.10)' : 'transparent',
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="font-medium text-base">{link.name}</span>
                    {activeSection === link.href.replace('#', '') && (
                      <motion.div
                        layoutId="mob-active"
                        className="ml-auto w-1.5 h-1.5 rounded-full"
                        style={{ background: 'hsl(var(--primary))' }}
                      />
                    )}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default DynamicIslandNav;
