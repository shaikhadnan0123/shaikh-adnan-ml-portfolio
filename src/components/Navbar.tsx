import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { label: 'Work', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'timeline' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
    
    setScrolled(currentY > 20);

    if (currentY > 300) {
      setHidden(currentY > lastScrollY.current && currentY - lastScrollY.current > 5);
    } else {
      setHidden(false);
    }
    
    lastScrollY.current = currentY;

    // Detect active section
    const sections = ['hero', 'projects', 'skills', 'timeline', 'about', 'contact'];
    const scrollPosition = currentY + 120;
    for (const sectionId of sections) {
      const el = document.getElementById(sectionId);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(sectionId);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    if (id === 'top' || id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: hidden && !mobileOpen ? -100 : 0 }}
        transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-300 ${
          scrolled
            ? 'h-20 bg-[#121110]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'h-20 bg-[#121110]/40 backdrop-blur-md border-b border-white/[0.04]'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full flex justify-between items-center px-5 sm:px-8 lg:px-12">
          
          {/* Brand Logo */}
          <button
            onClick={() => scrollToSection('top')}
            className="flex items-center gap-1.5 font-display font-semibold text-lg sm:text-xl tracking-tight text-[#efece7] transition-opacity duration-200 hover:opacity-80 z-10"
          >
            <span>Shaikh Adnan</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#f1903a]" />
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 bg-[#181614]/80 border border-white/[0.08] rounded-full p-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'bg-white/[0.08] text-[#efece7] shadow-sm'
                      : 'text-[#8a857e] hover:text-[#efece7]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Right Action Bar */}
          <div className="hidden md:flex items-center gap-4">
            {/* Status Indicator */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.06] font-mono text-[11px] text-[#2dd4bf]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2dd4bf] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2dd4bf]" />
              </span>
              <span className="tracking-wider uppercase">Open to roles</span>
            </div>

            <a
              href="/Shaikh_Adnan_CV_Achievements.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#8a857e] hover:text-[#efece7] transition-colors duration-200 px-3 py-1.5"
            >
              <FileText size={14} />
              <span>Resume</span>
            </a>

            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-1.5 bg-[#efece7] text-[#121110] hover:bg-[#f1903a] font-medium text-xs uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
            >
              <span>Let&apos;s talk</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-[110] w-10 h-10 flex items-center justify-center text-[#efece7]"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] bg-[#121110]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden p-6"
          >
            <div className="flex flex-col items-center gap-6 w-full max-w-xs">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: index * 0.06, duration: 0.3 }}
                  onClick={() => scrollToSection(link.id)}
                  className="font-display text-2xl font-semibold tracking-tight text-[#efece7] hover:text-[#f1903a] transition-colors duration-200"
                >
                  {link.label}
                </motion.button>
              ))}

              <div className="w-full h-px bg-white/10 my-2" />

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                href="/Shaikh_Adnan_CV_Achievements.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full border border-white/10 text-sm font-mono uppercase tracking-wider text-[#efece7]"
              >
                <FileText size={16} />
                <span>Download Resume</span>
              </motion.a>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                onClick={() => scrollToSection('contact')}
                className="w-full py-3.5 rounded-full bg-[#f1903a] text-[#121110] font-medium text-sm uppercase tracking-wider shadow-lg"
              >
                Let&apos;s talk
              </motion.button>
            </div>

            {/* Ambient Ember Glow in Mobile Menu */}
            <div className="absolute bottom-[10%] w-[250px] h-[250px] rounded-full bg-[#f1903a]/10 blur-[100px] pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
