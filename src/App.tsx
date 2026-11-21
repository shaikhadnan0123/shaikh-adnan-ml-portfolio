import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { SmoothScroll } from './components/SmoothScroll';
import { PageLoader } from './components/PageLoader';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { TimelineSection } from './components/TimelineSection';
import { CertificationsSection } from './components/CertificationsSection';
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
        <div className="bg-[#121110] min-h-screen text-[#efece7] font-sans selection:bg-[#f1903a]/30 selection:text-white overflow-x-clip relative">
          
          {/* Sticky 80px Navbar */}
          <Navbar />

          {/* 1. Hero Section with Constellation & Rotating Word */}
          <HeroSection />

          {/* 2. Selected Work / 12-Column Projects Cards */}
          <ProjectsSection />

          {/* 3. Skills Section with 5-Bar Ratings */}
          <SkillsSection />

          {/* 4. Experience & Career Journey (Timeline) */}
          <TimelineSection />

          {/* 5. About Section (2-Column Portrait & Narrative) */}
          <AboutSection />

          {/* 6. Certifications & Credentials */}
          <CertificationsSection />

          {/* 7. Coding Profiles */}
          <CodingProfilesSection />

          {/* 8. Contact Footer */}
          <footer
            id="contact"
            className="w-full bg-[#121110] abhishek-grid border-t border-white/[0.08] px-5 sm:px-8 lg:px-12 py-20 sm:py-28 text-center flex flex-col items-center justify-center relative select-none"
          >
            {/* Soft Ambient Ember Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-[#f1903a]/08 blur-[150px] pointer-events-none" />

            <div className="max-w-4xl mx-auto z-10 flex flex-col items-center">
              
              <FadeIn delay={0.1} y={20}>
                <div className="flex items-center gap-3 mb-4 justify-center">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#f1903a]">
                    08 // Get In Touch
                  </span>
                </div>
              </FadeIn>

              <FadeIn delay={0.15} y={25}>
                <h2 className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl tracking-[-0.03em] text-[#efece7] mb-6">
                  <span>Let&apos;s Build</span> <span className="text-[#8a857e]">// Something Powerful</span>
                </h2>
              </FadeIn>

              <FadeIn delay={0.2} y={20}>
                <p className="font-sans text-[#8a857e] text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                  Open for Machine Learning Engineer, AI Developer, and Data Science opportunities. Available for hybrid and remote roles.
                </p>
              </FadeIn>

              {/* Direct Info */}
              <FadeIn delay={0.25} y={15} className="flex flex-wrap items-center justify-center gap-6 mb-12 font-mono text-xs uppercase tracking-wider text-[#8a857e]">
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-[#f1903a]" />
                  <span>+91 9307908194</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-[#2dd4bf]" />
                  <span>Hyderabad, Telangana, India</span>
                </div>
              </FadeIn>

              {/* Contact Buttons */}
              <FadeIn delay={0.3} y={20} className="flex flex-wrap items-center justify-center gap-4 mb-16 w-full">
                <a
                  href="mailto:adnanmujtabba5682@gmail.com"
                  className="inline-flex items-center gap-2.5 bg-[#efece7] text-[#121110] hover:bg-[#f1903a] font-medium text-xs sm:text-sm font-mono uppercase tracking-wider px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
                >
                  <Mail size={16} />
                  <span>adnanmujtabba5682@gmail.com</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/shaikhadnan-ml/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#181614] hover:bg-white/[0.05] border border-white/[0.1] hover:border-[#f1903a]/50 text-[#efece7] font-medium text-xs sm:text-sm font-mono uppercase tracking-wider px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <Linkedin size={16} className="text-[#f1903a]" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href="/Shaikh_Adnan_CV_Achievements.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#181614] hover:bg-white/[0.05] border border-white/[0.1] hover:border-[#f1903a]/50 text-[#efece7] font-medium text-xs sm:text-sm font-mono uppercase tracking-wider px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <FileText size={16} className="text-[#2dd4bf]" />
                  <span>Download Resume</span>
                </a>
              </FadeIn>

              {/* Social icons row */}
              <FadeIn delay={0.35} y={15} className="flex items-center gap-4 mb-16">
                <a
                  href="https://github.com/shaikhadnan0123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-white/[0.08] bg-[#181614] flex items-center justify-center text-[#8a857e] hover:text-[#efece7] hover:border-[#f1903a]/40 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>

                <a
                  href="https://www.linkedin.com/in/shaikhadnan-ml/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-white/[0.08] bg-[#181614] flex items-center justify-center text-[#8a857e] hover:text-[#efece7] hover:border-[#f1903a]/40 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </FadeIn>

              {/* Footer Base Info */}
              <div className="w-full flex flex-col sm:flex-row justify-between items-center border-t border-white/[0.06] pt-8 gap-4 font-mono text-xs text-[#8a857e] uppercase tracking-wider">
                <span>&copy; {new Date().getFullYear()} SHAIKH ADNAN // ALL RIGHTS RESERVED</span>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="flex items-center gap-1.5 hover:text-[#efece7] transition-colors"
                >
                  <span>BACK TO TOP</span>
                  <ArrowUp size={14} className="text-[#f1903a]" />
                </button>
              </div>

            </div>
          </footer>

        </div>
      </SmoothScroll>
    </>
  );
}

export default App;
