import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Instagram, Send, Copy, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useCallback } from 'react';
import { useNotification } from '@/contexts/NotificationContext';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const socialLinks = [
  { icon: Github, name: 'GitHub', href: 'https://github.com/PraveenRusiru', username: '@PraveenRusiru' },
  { icon: Linkedin, name: 'LinkedIn', href: 'https://www.linkedin.com/in/praveen-rusiru-45296a229', username: 'Praveen Rusiru' },
  { icon: Instagram, name: 'Instagram', href: 'https://www.instagram.com/rusiru_vithanage?igsh=MTVtZmFyOWxpbTB2bw%3D%3D&utm_source=qr', username: '@rusiru_vithanage' },
];

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'praveenrusiru752@gmail.com', copyable: true },
  { icon: MapPin, label: 'Location', value: 'Galle,Sri Lanka', copyable: false },
  { icon: Phone, label: 'Phone', value: '+94773443410', copyable: true },
];


export const ContactSection = () => {
  const { triggerNotification } = useNotification();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const paramsdata = {
    
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const email = formData.email.trim();

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!emailRegex.test(email)) {
    triggerNotification({
      type: "error",
      message: "Please enter a valid email address.",
      icon: "check",
    });
    return;
  }

  setIsSubmitting(true);

  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: formData.name,
        email: email,
        subject: formData.subject,
        message: formData.message,
      },
      PUBLIC_KEY
    );

    triggerNotification({
      type: "success",
      message: "Email sent successfully!",
      icon: "plane",
    });
  } catch (error) {
    console.log("FAILED...", error);
    triggerNotification({
      type: "error",
      message: "Failed to send message. Please try again later.",
      icon: "check",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText('praveenrusiru752@gmail.com');
    
    triggerNotification({
      type: 'success',
      message: 'Email Copied!',
      icon: 'clipboard',
    });
  }, [triggerNotification]);

  const handleCopyPhone = useCallback(() => {
    navigator.clipboard.writeText('+94773443410');
    
    triggerNotification({
      type: 'success',
      message: 'Phone Number Copied!',
      icon: 'clipboard',
    });
  }, [triggerNotification]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form  onSubmit={handleSubmit} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-3 text-muted-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full gold-underline-input py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-3 text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full gold-underline-input py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-3 text-muted-foreground">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  className="w-full gold-underline-input py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-3 text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={4}
                  className="w-full gold-underline-input py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full rounded-full h-14 font-semibold gap-2 glow-gold text-lg"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="grid sm:grid-cols-3 gap-6">
                {contactInfo.map((info) => (
                  <div 
                    key={info.label} 
                    className={`flex items-center gap-3 ${info.copyable ? 'cursor-pointer group' : ''}`}
                    onClick={info.copyable && info.label === 'Email' ? handleCopyEmail : info.copyable && info.label === 'Phone' ? handleCopyPhone : undefined}
                    
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground">{info.label}</p>
                      <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                    {info.copyable &&  info.label === 'Phone' && (
                      <Copy className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                    {info.copyable && info.label === 'Email'  && (
                      <Copy className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-display font-semibold mb-8">Find Me Online</h3>
            
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target='blank'
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="group flex items-center gap-6 p-5 rounded-2xl gradient-border glass-ios-card transition-all hover:glow-purple"
                >
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <social.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-display font-semibold text-lg group-hover:text-secondary transition-colors">
                      {social.name}
                    </p>
                    <p className="text-sm text-muted-foreground">{social.username}</p>
                  </div>
                  <div className="text-muted-foreground group-hover:text-secondary transition-colors">
                    →
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
