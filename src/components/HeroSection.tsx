import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pills = [
    'AI systems',
    'ML pipelines',
    'Product engineering',
    'Developer tools',
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-[#1A2A1A] flex items-center justify-center pt-28 md:pt-32 pb-16 md:pb-24 px-6 md:px-12 lg:px-16 overflow-hidden select-none"
    >
      {/* Ambient background glow accents */}
      <div className="absolute top-[10%] left-[-8%] w-[450px] h-[450px] rounded-full bg-[#789575]/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-8%] w-[450px] h-[450px] rounded-full bg-[#5A7A58]/10 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#789575]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center z-10">
        
        {/* Left Column: Heading, Bio, Pills, Action Buttons */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
          {/* Main Headline */}
          <FadeIn delay={0.1} y={30}>
            <h1 className="font-sans font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.25rem] tracking-tight leading-[1.08] text-[#E5E8CE] mb-6">
              I build <br />
              thoughtful <br />
              software for <br />
              <span className="bg-gradient-to-r from-[#8CAA87] via-[#A4B89E] to-[#E5E8CE] bg-clip-text text-transparent">
                complex ideas.
              </span>
            </h1>
          </FadeIn>

          {/* Description Paragraph */}
          <FadeIn delay={0.2} y={25}>
            <p className="text-[#E5E8CE]/70 font-light text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mb-8">
              Shaikh Adnan is a machine learning engineer working across full-stack systems,
              AI/ML, backend infrastructure, predictive modeling, and open source.
            </p>
          </FadeIn>

          {/* Feature Pills */}
          <FadeIn delay={0.3} y={20}>
            <div className="flex flex-wrap gap-2.5 mb-10">
              {pills.map((pill, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs sm:text-sm font-medium text-[#E5E8CE]/80 tracking-wide transition-colors duration-200 hover:border-[#789575]/60 hover:text-[#E5E8CE]"
                >
                  {pill}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* Action CTAs */}
          <FadeIn delay={0.4} y={20}>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2 bg-[#E5E8CE] text-[#1A2A1A] hover:bg-white font-medium text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-md group"
              >
                <span>Explore my work</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-[#E5E8CE] font-medium text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 hover:border-white/20"
              >
                Let&apos;s work together
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Right Column: Profile Picture Card with Floating Overlays */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
          <FadeIn delay={0.25} y={35} className="w-full max-w-md sm:max-w-lg lg:max-w-none">
            <div className="relative w-full max-w-[430px] mx-auto aspect-[4/5] rounded-[32px] sm:rounded-[36px] overflow-hidden border border-white/10 bg-[#121C12]/80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] group">
              
              {/* Profile Image */}
              <img
                src="/adnan_profile.jpg"
                alt="Shaikh Adnan"
                className="w-full h-full object-cover object-top filter brightness-[0.98] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                loading="eager"
              />

              {/* Gradient vignette for card integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121C12]/85 via-transparent to-[#121C12]/30 pointer-events-none" />

              {/* Top-Right Floating Pill Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute top-4 right-4 bg-[#121C12]/85 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-2.5 shadow-xl select-none"
              >
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A4B89E] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A4B89E]" />
                  </span>
                  <span className="text-[9px] uppercase tracking-widest font-semibold text-[#E5E8CE]/60">
                    Currently Building
                  </span>
                </div>
                <p className="text-xs font-medium text-[#E5E8CE] tracking-tight whitespace-nowrap">
                  Useful, durable software
                </p>
              </motion.div>

              {/* Bottom Floating Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute bottom-4 left-4 right-4 bg-[#121C12]/85 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-xl select-none"
              >
                <h3 className="text-sm font-semibold text-[#E5E8CE] tracking-tight mb-0.5">
                  Shaikh Adnan
                </h3>
                <p className="text-xs text-[#E5E8CE]/65 font-normal tracking-wide">
                  Engineer · Builder · Product thinker
                </p>
              </motion.div>

            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};
