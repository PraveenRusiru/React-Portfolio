import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-center md:text-left">
            <p className="font-display font-semibold text-lg">Praveen Rusiru</p>
            <p className="text-sm text-muted-foreground">
              Building digital experiences with passion
            </p>
          </div>

           <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} · All Rights Reserved  
          </p> 

          {/* <div className="flex gap-6 text-sm">
            <a  className="text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </a>
            <a  className="text-muted-foreground hover:text-primary transition-colors">
              Terms
            </a>
          </div> */}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
