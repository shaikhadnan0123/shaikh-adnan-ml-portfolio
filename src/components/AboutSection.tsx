import React from 'react';
import { FadeIn } from './FadeIn';
import { MapPin, GraduationCap, Briefcase, Sparkles, ArrowRight, FileText } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-[#121110] abhishek-grid py-24 sm:py-32 px-5 sm:px-8 lg:px-12 select-none overflow-hidden border-t border-white/[0.06]"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[#f1903a]/08 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#a855f7]/06 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Mono Label */}
        <FadeIn delay={0.1} y={20}>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#f1903a]">
              02 // About The Engineer
            </span>
            <div className="h-px w-12 bg-[#f1903a]/30" />
          </div>
        </FadeIn>

        {/* Two-Tone Section Heading */}
        <FadeIn delay={0.15} y={20}>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl tracking-[-0.03em] text-[#efece7] mb-12 sm:mb-16">
            <span>The Mind</span> <span className="text-[#8a857e]">// Behind The Models</span>
          </h2>
        </FadeIn>

        {/* 2-Column Layout: Portrait on Left, Bio on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Portrait Card (~350px-400px) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <FadeIn delay={0.2} y={30} className="w-full max-w-sm">
              <div className="relative group">
                {/* Ambient Ember Glow */}
                <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-tr from-[#f1903a]/25 via-transparent to-[#14b8a6]/20 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative rounded-[28px] overflow-hidden border border-white/[0.1] bg-[#181614] shadow-2xl p-2.5">
                  <div className="relative w-full aspect-[4/5] rounded-[20px] overflow-hidden bg-[#121110]">
                    <img
                      src="/adnan_profile.jpg"
                      alt="Shaikh Adnan portrait"
                      className="w-full h-full object-cover filter brightness-[0.97] transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181614] via-transparent to-transparent opacity-80 pointer-events-none" />

                    {/* Badge Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#181614]/90 backdrop-blur-md border border-white/[0.08]">
                      <div className="flex items-center gap-2 text-xs text-[#efece7] font-medium">
                        <MapPin size={14} className="text-[#f1903a]" />
                        <span>Hyderabad, Telangana, India</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Bio Narrative & Stats */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <FadeIn delay={0.25} y={25}>
              <p className="font-sans text-base sm:text-lg text-[#efece7] leading-relaxed mb-6">
                I am a machine learning engineer with a rigorous foundation in Artificial Intelligence and Machine Learning from <strong className="text-[#efece7] font-semibold">Osmania University</strong>. Rather than keeping models confined to research notebooks, I specialize in bridging the gap between theoretical algorithms and low-latency, scalable production software.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} y={20}>
              <p className="font-sans text-sm sm:text-base text-[#8a857e] leading-relaxed mb-8">
                Through remote machine learning internships at <span className="text-[#efece7]">Valentius Kryptix</span> and <span className="text-[#efece7]">SaiKet Systems</span>, I have engineered custom NumPy algorithms from mathematical first principles, constructed end-to-end customer churn classification pipelines, and optimized GPU-accelerated pipelines using <span className="text-[#f1903a]">NVIDIA cuDF</span> for up to <span className="text-[#f1903a] font-semibold">18.5x latency reduction</span>.
              </p>
            </FadeIn>

            {/* Quick Facts Grid */}
            <FadeIn delay={0.35} y={20}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                <div className="p-4 rounded-xl bg-[#181614]/80 border border-white/[0.06] flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-[#f1903a]">
                    <GraduationCap size={14} />
                    <span>Degree</span>
                  </div>
                  <span className="text-sm font-semibold text-[#efece7]">B.E. in AI & ML</span>
                  <span className="text-xs text-[#8a857e]">CGPA: 8.08 / 10</span>
                </div>

                <div className="p-4 rounded-xl bg-[#181614]/80 border border-white/[0.06] flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-[#2dd4bf]">
                    <Briefcase size={14} />
                    <span>Experience</span>
                  </div>
                  <span className="text-sm font-semibold text-[#efece7]">ML Intern</span>
                  <span className="text-xs text-[#8a857e]">Valentius Kryptix & SaiKet</span>
                </div>

                <div className="p-4 rounded-xl bg-[#181614]/80 border border-white/[0.06] flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-[#a855f7]">
                    <Sparkles size={14} />
                    <span>Specialty</span>
                  </div>
                  <span className="text-sm font-semibold text-[#efece7]">GenAI & RAG</span>
                  <span className="text-xs text-[#8a857e]">FastAPI + ChromaDB</span>
                </div>
              </div>
            </FadeIn>

            {/* Actions */}
            <FadeIn delay={0.4} y={15}>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="/Shaikh_Adnan_CV_Achievements.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#efece7] text-[#121110] hover:bg-[#f1903a] font-medium text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
                >
                  <FileText size={16} />
                  <span>View Verified Resume</span>
                </a>

                <button
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 bg-[#181614] hover:bg-white/[0.05] border border-white/[0.1] hover:border-[#f1903a]/50 text-[#efece7] font-medium text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <span>Connect With Me</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
};
