import React from 'react';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';

export const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip select-none bg-[#1A2A1A]">
      
      {/* Background Subtle Gradient Layer (no photo) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.15]">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#789575]/20 via-transparent to-[#5A7A58]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2A1A] via-transparent to-[#1A2A1A]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2A1A] via-transparent to-[#1A2A1A]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#1A2A1A_85%)]" />
      </div>
      
      {/* Spacer for sticky navbar */}
      <div className="w-full h-16 md:h-20 z-20" />

      {/* Hero Heading Container */}
      <div className="w-full overflow-hidden flex items-center justify-center z-0 flex-grow">
        <FadeIn as="div" delay={0.15} y={40} className="w-full text-center flex flex-col items-center justify-center px-4">
          {/* Recruitment Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(120,149,117,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#A4B89E] animate-ping" />
            <span className="w-2 h-2 rounded-full bg-[#A4B89E] absolute" />
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#E5E8CE]/90 font-medium">
              Actively Seeking ML Intern / Fresher Roles | Hyderabad & Remote
            </span>
          </div>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-2 sm:mt-1 md:-mt-2">
            Hi, i&apos;m adnan
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait - Centered absolutely */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] flex justify-center items-center sm:items-end pointer-events-none">
        <FadeIn delay={0.6} y={30} className="pointer-events-auto w-full">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full flex justify-center"
          >
            <img
              src="/ml_neural_network.png"
              alt="Adnan neural network portrait"
              className="w-full object-contain pointer-events-none rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              loading="eager"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="w-full flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          className="text-[#E5E8CE] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px] text-left"
        >
          <span style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}>
            a startup-ready AI & ML engineer specializing in predictive modeling & full-stack deployment
          </span>
        </FadeIn>

        <FadeIn as="div" delay={0.5} y={20}>
          <ContactButton onClick={() => scrollToSection('contact')} />
        </FadeIn>
      </div>

    </section>
  );
};
