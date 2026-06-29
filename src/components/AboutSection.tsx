import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#0C0C0C] flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden select-none"
    >
      
      {/* Decorative 3D images in corners */}
      {/* Top-Left: Moon icon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="3D Moon Decor"
          className="w-[120px] sm:w-[160px] md:w-[210px] object-contain pointer-events-none"
        />
      </FadeIn>

      {/* Bottom-Left: 3D object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D Object Decor"
          className="w-[100px] sm:w-[140px] md:w-[180px] object-contain pointer-events-none"
        />
      </FadeIn>

      {/* Top-Right: Lego icon */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="3D Lego Decor"
          className="w-[120px] sm:w-[160px] md:w-[210px] object-contain pointer-events-none"
        />
      </FadeIn>

      {/* Bottom-Right: 3D group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D Group Decor"
          className="w-[130px] sm:w-[170px] md:w-[220px] object-contain pointer-events-none"
        />
      </FadeIn>

      {/* Main content wrapper */}
      <div className="flex flex-col items-center max-w-4xl mx-auto z-10 text-center">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)] text-center">
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading and text */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Animated text paragraph */}
        <AnimatedText
          text="With a strong foundation in Artificial Intelligence and Machine Learning, I bridge the gap between AI theory and production software. I don't just build models in Jupyter Notebooks—I design end-to-end predictive systems, build FastAPI microservices, and construct responsive React web applications. Ready to deliver immediate engineering value on Day 1."
          className="text-[#D7E2EA] font-medium leading-relaxed max-w-[720px] text-center text-[clamp(1rem,2vw,1.35rem)]"
        />

        {/* Gap between text and button */}
        <div className="h-16 sm:h-20 md:h-24" />

        {/* Actions (Contact & Resume) */}
        <FadeIn delay={0.4} y={20}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ContactButton
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />
            <a
              href="/Adnan_Shaikh_Resume_ML.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest transition-all duration-300 hover:scale-105 active:scale-95 px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base inline-flex items-center justify-center select-none hover:bg-white/10 hover:border-white hover:text-white"
            >
              View Resume
            </a>
          </div>
        </FadeIn>
      </div>

    </section>
  );
};
