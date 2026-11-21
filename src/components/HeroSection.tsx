import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { FadeIn } from './FadeIn';

const rotatingPhrases = [
  'multi-agent RAG',
  'deep learning pipelines',
  'LLM architectures',
  'production AI systems',
];

export const HeroSection: React.FC = () => {
  const [index, setIndex] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Rotating phrase timer
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  // Node / Constellation canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const nodesCount = Math.floor((width * height) / 16000);
    const nodes = Array.from({ length: Math.min(Math.max(nodesCount, 25), 55) }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 1.5 + 1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connecting lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.12;
            ctx.strokeStyle = `rgba(241, 144, 58, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw & update nodes
      for (const node of nodes) {
        ctx.fillStyle = 'rgba(239, 236, 231, 0.45)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const skillPills = ['PYTHON', 'PYTORCH', 'SCIKIT-LEARN', 'FASTAPI', 'GEMINI / RAG', 'DOCKER', 'CHROMA DB'];

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-[#121110] abhishek-grid flex items-center justify-center pt-28 pb-16 px-5 sm:px-8 lg:px-12 overflow-hidden select-none"
    >
      {/* Constellation Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-70"
      />

      {/* Abhishek Ambient Glow Layer */}
      {/* Top-left Amber Glow */}
      <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-[#f1903a]/12 blur-[140px] pointer-events-none z-0" />
      {/* Top-right Purple Glow */}
      <div className="absolute top-10 right-[-10%] w-[520px] h-[520px] rounded-full bg-[#a855f7]/09 blur-[150px] pointer-events-none z-0" />
      {/* Bottom-center Teal Glow */}
      <div className="absolute bottom-[-10%] left-1/3 w-[450px] h-[450px] rounded-full bg-[#14b8a6]/07 blur-[140px] pointer-events-none z-0" />

      {/* Main Container */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center z-10">
        
        {/* Left Column (7 cols): Headline, Bio, Mono Pills, CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
          {/* Section Mono Label */}
          <FadeIn delay={0.1} y={20}>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md mb-6 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2dd4bf] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2dd4bf]" />
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-[#efece7]/80">
                01 // Machine Learning Engineer
              </span>
            </div>
          </FadeIn>

          {/* Two-Tone Headline with Rotating Ember Word */}
          <FadeIn delay={0.2} y={25}>
            <h1 className="font-display font-semibold text-[clamp(2.5rem,6.8vw,5.5rem)] tracking-[-0.045em] leading-[0.98] text-[#efece7] mb-6">
              <span>I engineer</span> <br />
              <span className="text-[#8a857e]">predictive models &</span> <br />
              <span className="inline-block min-h-[1.1em]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingPhrases[index]}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="bg-gradient-to-r from-[#efece7] via-[#f5a75b] to-[#f1903a] bg-clip-text text-transparent inline-block"
                  >
                    {rotatingPhrases[index]}
                  </motion.span>
                </AnimatePresence>
              </span> <br />
              <span className="text-[#8a857e]">for real-world scale.</span>
            </h1>
          </FadeIn>

          {/* Narrative Bio */}
          <FadeIn delay={0.3} y={20}>
            <p className="text-[#8a857e] font-sans font-normal text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              Adnan is an AI & Machine Learning Engineer based in Hyderabad, specializing in
              end-to-end predictive systems, FastAPI microservices, RAG architectures, and
              GPU-accelerated data pipelines.
            </p>
          </FadeIn>

          {/* Mono Skill Pills */}
          <FadeIn delay={0.35} y={15}>
            <div className="flex flex-wrap gap-2 mb-10">
              {skillPills.map((pill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md bg-[#181614] border border-white/[0.08] font-mono text-xs text-[#8a857e] hover:text-[#efece7] hover:border-[#f1903a]/50 transition-colors duration-200"
                >
                  {pill}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* Action CTAs */}
          <FadeIn delay={0.4} y={15}>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2 bg-[#efece7] text-[#121110] hover:bg-[#f1903a] font-medium text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg group"
              >
                <span>Explore Selected Work</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <a
                href="/Shaikh_Adnan_CV_Achievements.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#181614] hover:bg-white/[0.05] border border-white/[0.1] hover:border-[#f1903a]/50 text-[#efece7] font-medium text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <FileText size={16} className="text-[#f1903a]" />
                <span>Resume CV</span>
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Right Column (5 cols): Portrait Showcase + Stats Cards */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
          <FadeIn delay={0.25} y={30} className="w-full max-w-md">
            
            {/* Card wrapper with warm glow behind it */}
            <div className="relative group">
              {/* Warm Ember Glow behind portrait */}
              <div className="absolute -inset-1 rounded-[36px] bg-gradient-to-b from-[#f1903a]/25 via-transparent to-[#a855f7]/15 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Main Card Container */}
              <div className="relative rounded-[32px] overflow-hidden border border-white/[0.1] bg-[#181614]/90 backdrop-blur-md shadow-2xl p-3">
                
                {/* Photo frame */}
                <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden bg-[#121110]">
                  <img
                    src="/adnan_profile.jpg"
                    alt="Shaikh Adnan"
                    className="w-full h-full object-cover object-top filter brightness-[0.98] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181614]/90 via-transparent to-black/20 pointer-events-none" />

                  {/* Top-Right Floating "Currently Building" Badge */}
                  <div className="absolute top-3.5 right-3.5 bg-[#181614]/90 backdrop-blur-md border border-white/[0.12] rounded-xl px-3.5 py-2 shadow-xl select-none">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2dd4bf] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2dd4bf]" />
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-[#8a857e]">
                        Currently Building
                      </span>
                    </div>
                    <p className="text-xs font-medium text-[#efece7] whitespace-nowrap">
                      IntelliDoc-AI & ML Pipelines
                    </p>
                  </div>

                  {/* Bottom Portrait Info */}
                  <div className="absolute bottom-3 left-3 right-3 bg-[#181614]/90 backdrop-blur-md border border-white/[0.08] rounded-2xl p-3.5 text-left">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <h3 className="font-display font-semibold text-base text-[#efece7] tracking-tight">
                          Shaikh Adnan
                        </h3>
                        <p className="text-xs text-[#8a857e] font-sans">
                          B.E. AI & ML · Osmania University
                        </p>
                      </div>
                      <span className="px-2 py-0.5 rounded font-mono text-[10px] uppercase text-[#f1903a] bg-[#f1903a]/10 border border-[#f1903a]/20">
                        2022–2026
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3 Quick Stats Under Photo */}
                <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-white/[0.06] text-center">
                  <div className="py-1">
                    <span className="block font-display font-bold text-lg text-[#efece7]">8.08</span>
                    <span className="block font-mono text-[10px] uppercase text-[#8a857e] tracking-wider">CGPA</span>
                  </div>
                  <div className="py-1 border-x border-white/[0.06]">
                    <span className="block font-display font-bold text-lg text-[#f1903a]">18.5x</span>
                    <span className="block font-mono text-[10px] uppercase text-[#8a857e] tracking-wider">cuDF Speed</span>
                  </div>
                  <div className="py-1">
                    <span className="block font-display font-bold text-lg text-[#2dd4bf]">100+</span>
                    <span className="block font-mono text-[10px] uppercase text-[#8a857e] tracking-wider">DSA Solved</span>
                  </div>
                </div>

              </div>
            </div>

          </FadeIn>
        </div>

      </div>
    </section>
  );
};
