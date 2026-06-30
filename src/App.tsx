import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { SmoothScroll } from './components/SmoothScroll';
import { PageLoader } from './components/PageLoader';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { SkillsSection } from './components/SkillsSection';
import { TimelineSection } from './components/TimelineSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CodingProfilesSection } from './components/CodingProfilesSection';
import { FadeIn } from './components/FadeIn';
import { Mail, Github, Linkedin, Phone, MapPin, ArrowUp, FileText } from 'lucide-react';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {/* Custom Cursor (desktop only) */}
      <CustomCursor />

      {/* Page Loader */}
      <AnimatePresence>
        {loading && <PageLoader onComplete={handleLoaderComplete} />}
      </AnimatePresence>

      {/* Main App */}
      <SmoothScroll>
        <div className="bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-sans selection:bg-[#B600A8]/30 selection:text-white overflow-x-clip relative noise-overlay">
          
          {/* Sticky Navbar */}
          <Navbar />

          {/* 1. Hero Section */}
          <HeroSection />

          {/* 2. Marquee Section */}
          <MarqueeSection />

          {/* 3. About Section */}
          <AboutSection />

          {/* 4. Expertise Section */}
          <ServicesSection />

          {/* 4.5. Skills Section */}
          <SkillsSection />

          {/* 5. Journey / Timeline Section */}
          <TimelineSection />

          {/* 6. Projects Section */}
          <ProjectsSection />

          {/* 7. Coding Profiles Section */}
          <CodingProfilesSection />

          {/* 8. Contact Footer */}
          <footer
            id="contact"
            className="w-full bg-[#0C0C0C] border-t border-[#D7E2EA]/10 px-6 md:px-10 py-16 md:py-24 text-center flex flex-col items-center justify-center relative select-none"
          >
            <FadeIn delay={0.1} y={30} className="flex flex-col items-center">
              <h2 className="hero-heading font-black uppercase tracking-tight text-[clamp(2.5rem,7vw,100px)] leading-tight pb-2 mb-6">
                Get In Touch
              </h2>
              <p className="text-[#D7E2EA] opacity-60 font-light max-w-md mx-auto mb-10 text-sm sm:text-base md:text-lg leading-relaxed uppercase tracking-wider">
                Ready to implement robust machine learning pipelines, data workflows, or custom neural networks? Let&apos;s connect.
              </p>
            </FadeIn>

            {/* Contact info grid */}
            <FadeIn delay={0.15} y={20} className="flex flex-col sm:flex-row gap-6 mb-10 text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/80">
              <div className="flex items-center justify-center gap-2">
                <Phone size={14} className="text-[#B600A8]" />
                <span>+91 9307908194</span>
              </div>
              <div className="hidden sm:block text-[#D7E2EA]/30">•</div>
              <div className="flex items-center justify-center gap-2">
                <MapPin size={14} className="text-[#7621B0]" />
                <span>Hyderabad, India</span>
              </div>
            </FadeIn>

            {/* Contact Action Links */}
            <FadeIn delay={0.2} y={20} className="flex flex-col lg:flex-row gap-4 justify-center items-center mb-12 w-full max-w-3xl mx-auto">
              <a
                href="mailto:adnanmujtabba5682@gmail.com"
                className="inline-flex items-center justify-center gap-3 text-white bg-gradient-to-r from-[#B600A8] to-[#7621B0] px-8 py-3.5 rounded-full uppercase tracking-widest font-medium text-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(182,0,168,0.3)] w-full lg:w-auto"
              >
                <Mail size={18} />
                <span>adnanmujtabba5682@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/shaikh-adnan-270201273/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 text-white bg-gradient-to-r from-[#0077B5] to-[#7621B0] px-8 py-3.5 rounded-full uppercase tracking-widest font-medium text-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,119,181,0.3)] w-full lg:w-auto"
              >
                <Linkedin size={18} />
                <span>Connect on LinkedIn</span>
              </a>
              <a
                href="/Adnan_Shaikh_Resume_ML.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 text-white bg-gradient-to-r from-[#7621B0] to-[#BE4C00] px-8 py-3.5 rounded-full uppercase tracking-widest font-medium text-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(118,33,176,0.3)] w-full lg:w-auto"
              >
                <FileText size={18} />
                <span>Download Resume</span>
              </a>
            </FadeIn>

            {/* Social Link Handles */}
            <FadeIn delay={0.3} y={20} className="flex gap-6 mb-16">
              <a
                href="https://github.com/shaikhadnan0123"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-[#D7E2EA]/20 flex items-center justify-center text-[#D7E2EA] transition-all duration-300 hover:border-white hover:text-white hover:bg-white/5"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/shaikh-adnan-270201273/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-[#D7E2EA]/20 flex items-center justify-center text-[#D7E2EA] transition-all duration-300 hover:border-white hover:text-white hover:bg-white/5"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
            </FadeIn>

            {/* Footer Base Info */}
            <div className="w-full flex flex-col sm:flex-row justify-between items-center border-t border-[#D7E2EA]/10 pt-8 gap-4 text-xs sm:text-sm text-[#D7E2EA] opacity-50 uppercase tracking-widest">
              <span>&copy; {new Date().getFullYear()} SHAIKH ADNAN. ALL RIGHTS RESERVED.</span>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 hover:opacity-100 transition-opacity duration-200"
              >
                <span>BACK TO TOP</span>
                <ArrowUp size={16} />
              </button>
            </div>
          </footer>
        </div>
      </SmoothScroll>
    </>
  );
}

export default App;
