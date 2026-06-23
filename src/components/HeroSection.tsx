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
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip select-none bg-[#0C0C0C]">
      
      {/* Navbar */}
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="w-full flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 z-20"
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
        >
          Adnan
        </button>
        <div className="flex gap-4 sm:gap-8 md:gap-12 lg:gap-16">
          <button
            onClick={() => scrollToSection('about')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
          >
            Projects
          </button>
          <a
            href="/Adnan_Shaikh_Resume_ML.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70 flex items-center"
          >
            Resume
          </a>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
          >
            Contact
          </button>
        </div>
      </FadeIn>

      {/* Hero Heading Container */}
      <div className="w-full overflow-hidden flex items-center justify-center z-0 flex-grow">
        <FadeIn as="div" delay={0.15} y={40} className="w-full text-center">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5">
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
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px] text-left"
        >
          <span style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}>
            an ai & ml engineer driven by building smart and data-driven solutions
          </span>
        </FadeIn>

        <FadeIn as="div" delay={0.5} y={20}>
          <ContactButton onClick={() => scrollToSection('contact')} />
        </FadeIn>
      </div>

    </section>
  );
};
