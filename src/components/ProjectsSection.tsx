import React from 'react';
import { Github, ArrowUpRight, Cpu } from 'lucide-react';
import { FadeIn } from './FadeIn';

interface Project {
  num: string;
  category: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  metrics: { label: string; value: string; color: string }[];
  githubUrl: string;
  liveUrl?: string;
  badge: string;
}

const projectsData: Project[] = [
  {
    num: '01',
    category: 'FULL-STACK RAG // AI PLATFORM',
    name: 'IntelliDoc-AI',
    tagline: 'Enterprise Retrieval-Augmented Generation Document Engine',
    description:
      'Engineered a production-ready full-stack RAG platform enabling grounded contextual question-answering over uploaded technical PDFs. Implemented end-to-end extraction, semantic vector chunking, and ChromaDB similarity search.',
    highlights: [
      'Engineered chunking, embedding generation, and high-precision semantic retrieval with ChromaDB',
      'Secured FastAPI backend with JWT, Argon2 password hashing, and role-based access control',
      'Deployed on Vercel with Neon serverless PostgreSQL and SQLAlchemy persistence',
    ],
    stack: ['Python', 'FastAPI', 'ChromaDB', 'React', 'Neon PostgreSQL', 'SQLAlchemy', 'JWT / Argon2', 'Vercel'],
    metrics: [
      { label: 'Retrieval Latency', value: '< 180ms', color: '#2dd4bf' },
      { label: 'Context Grounding', value: '100%', color: '#f1903a' },
      { label: 'Security Standard', value: 'Argon2id', color: '#a855f7' },
    ],
    githubUrl: 'https://github.com/shaikhadnan0123',
    liveUrl: 'https://github.com/shaikhadnan0123',
    badge: 'FEATURED CASE STUDY',
  },
  {
    num: '02',
    category: 'GPU ACCELERATION // GENAI PLATFORM',
    name: 'internAI',
    tagline: 'Automated Resume Parsing & ATS Intelligence Engine',
    description:
      'Developed an end-to-end resume-intelligence platform for the Gen AI APAC Hackathon using Google Gemini. Integrated NVIDIA cuDF GPU analytics to replace standard Pandas operations, accelerating data processing by 18.5x.',
    highlights: [
      'Benchmarked NVIDIA cuDF against Pandas on 100,000 candidate records, slashing runtime from 4.35s to 0.24s (18.5x speedup)',
      'Constructed 5 RESTful Flask endpoints integrated with Google BigQuery data warehouse',
      'Fully containerized with Docker and deployed with CI/CD on Render Cloud',
    ],
    stack: ['Python', 'Flask', 'Google Gemini', 'NVIDIA cuDF', 'Google BigQuery', 'Docker', 'Render'],
    metrics: [
      { label: 'Processing Speedup', value: '18.5x', color: '#f1903a' },
      { label: 'Record Capacity', value: '100k+', color: '#2dd4bf' },
      { label: 'Cloud Persistence', value: 'BigQuery', color: '#a855f7' },
    ],
    githubUrl: 'https://github.com/shaikhadnan0123',
    liveUrl: 'https://github.com/shaikhadnan0123',
    badge: 'HACKATHON FINALIST',
  },
  {
    num: '03',
    category: 'PREDICTIVE ML // PRODUCTION PIPELINE',
    name: 'NYC Airbnb Price Predictor',
    tagline: 'Supervised Nightly Rate Valuation Engine',
    description:
      'Developed, tuned, and compared 4 machine learning regression architectures over 47,840 New York City listings. Selected an Extra Trees Regressor achieving an R² of 0.51 and MAE of $38.55, deployed as a REST microservice.',
    highlights: [
      'Performed rigorous EDA, feature transformations, and targeted outlier boundaries ($10–$500)',
      'Evaluated Random Forest, Gradient Boosting, Ridge, and Extra Trees on identical validation splits',
      'Deployed Dockerized Flask REST API backend with responsive React/Vite interface on Vercel',
    ],
    stack: ['Python', 'Scikit-learn', 'NumPy', 'Flask', 'React', 'Docker', 'Render', 'Vercel'],
    metrics: [
      { label: 'Training Corpus', value: '47,840', color: '#efece7' },
      { label: 'Variance Explained (R²)', value: '0.51', color: '#f1903a' },
      { label: 'Mean Absolute Error', value: '$38.55', color: '#2dd4bf' },
    ],
    githubUrl: 'https://github.com/shaikhadnan0123',
    liveUrl: 'https://github.com/shaikhadnan0123',
    badge: 'PRODUCTION ML',
  },
  {
    num: '04',
    category: 'COMPUTER VISION // DEEP LEARNING',
    name: 'BrainTumor AI',
    tagline: 'Convolutional Neural Network MRI Diagnosis System',
    description:
      'Deep learning diagnostic classifier for multi-class brain tumor detection from magnetic resonance imaging (MRI) scans. Features custom CNN layers with transfer learning, automated image preprocessing, and FastAPI inference.',
    highlights: [
      'Architected CNN feature extraction pipeline with data augmentation (rotations, zoom, contrast normalization)',
      'Trained across multi-class MRI scans to detect glioma, meningioma, pituitary, and normal scans',
      'Packaged real-time image inference endpoint returning classified diagnosis and confidence probabilities',
    ],
    stack: ['Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'FastAPI', 'Matplotlib', 'Docker'],
    metrics: [
      { label: 'Diagnostic Classes', value: '4 Types', color: '#a855f7' },
      { label: 'Inference Latency', value: '< 95ms', color: '#2dd4bf' },
      { label: 'Framework', value: 'PyTorch / TF', color: '#f1903a' },
    ],
    githubUrl: 'https://github.com/shaikhadnan0123',
    liveUrl: 'https://github.com/shaikhadnan0123',
    badge: 'DEEP LEARNING CASE STUDY',
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative w-full bg-[#121110] abhishek-grid py-24 sm:py-32 px-5 sm:px-8 lg:px-12 select-none overflow-hidden border-t border-white/[0.06]"
    >
      {/* Background Radial Glows */}
      <div className="absolute top-[15%] left-[-5%] w-[450px] h-[450px] rounded-full bg-[#f1903a]/08 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5%] w-[450px] h-[450px] rounded-full bg-[#14b8a6]/06 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <FadeIn delay={0.1} y={20}>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[#f1903a]">
                  03 // Selected Work
                </span>
                <div className="h-px w-12 bg-[#f1903a]/30" />
              </div>
            </FadeIn>

            <FadeIn delay={0.15} y={20}>
              <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl tracking-[-0.03em] text-[#efece7]">
                <span>Featured</span> <span className="text-[#8a857e]">// Case Studies</span>
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} y={15}>
            <p className="font-mono text-xs text-[#8a857e] uppercase tracking-wider">
              [ 04 Production-grade ML & Full-Stack Projects ]
            </p>
          </FadeIn>
        </div>

        {/* 12-Column Project Cards Grid */}
        <div className="flex flex-col gap-10 sm:gap-14">
          {projectsData.map((project, index) => (
            <FadeIn key={project.num} delay={index * 0.1} y={30} className="w-full">
              <div className="group relative rounded-[28px] overflow-hidden border border-white/[0.08] hover:border-[#f1903a]/40 bg-[#181614]/90 backdrop-blur-md transition-all duration-500 hover:shadow-[0_20px_50px_rgba(241,144,58,0.08)]">
                
                {/* Subtle Inner Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#f1903a]/[0.03] via-transparent to-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
                  
                  {/* Left Column (7 cols): Narrative & Architecture */}
                  <div className="lg:col-span-7 flex flex-col justify-between text-left">
                    <div>
                      {/* Top Meta Line: Index, Category, Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs text-[#f1903a] font-semibold tracking-wider">
                            {project.num}
                          </span>
                          <span className="font-mono text-[11px] uppercase tracking-wider text-[#8a857e]">
                            {project.category}
                          </span>
                        </div>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#2dd4bf] px-2.5 py-1 rounded bg-[#2dd4bf]/10 border border-[#2dd4bf]/20">
                          {project.badge}
                        </span>
                      </div>

                      {/* Project Title & Tagline */}
                      <h3 className="font-display font-semibold text-2xl sm:text-3xl text-[#efece7] group-hover:text-white transition-colors duration-200 mb-2 tracking-tight">
                        {project.name}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-[#f1903a] font-medium tracking-wide mb-4">
                        {project.tagline}
                      </p>

                      {/* Description */}
                      <p className="font-sans text-sm sm:text-base text-[#8a857e] leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Technical Highlights / Metrics */}
                      <div className="flex flex-col gap-2.5 mb-8">
                        {project.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#efece7]/85">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#f1903a] mt-2 flex-shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom: Stack Badges & CTA Links */}
                    <div className="flex flex-col gap-5 pt-4 border-t border-white/[0.06]">
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded bg-[#121110] border border-white/[0.06] font-mono text-[11px] text-[#8a857e] tracking-wider uppercase group-hover:border-white/[0.12] transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 pt-1">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-[#efece7] text-[#121110] hover:bg-[#f1903a] font-medium text-xs uppercase font-mono tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
                        >
                          <span>Live Demo / Code</span>
                          <ArrowUpRight size={14} />
                        </a>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#8a857e] hover:text-[#efece7] transition-colors px-3 py-2"
                        >
                          <Github size={15} />
                          <span>Repository</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Right Column (5 cols): Visual Metrics & Architecture Panel */}
                  <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-[#121110]/90 border border-white/[0.06] p-5 sm:p-6 text-left">
                    <div>
                      {/* Terminal-like Header */}
                      <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.06]">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#f1903a]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#2dd4bf]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#a855f7]" />
                        </div>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#8a857e]">
                          SYSTEM SPECIFICATION
                        </span>
                      </div>

                      {/* 3 Metrics Cards */}
                      <div className="grid grid-cols-1 gap-3 mb-6">
                        {project.metrics.map((metric, mIdx) => (
                          <div
                            key={mIdx}
                            className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-center justify-between"
                          >
                            <span className="font-mono text-xs text-[#8a857e] uppercase tracking-wider">
                              {metric.label}
                            </span>
                            <span
                              className="font-display font-bold text-base sm:text-lg tracking-tight"
                              style={{ color: metric.color }}
                            >
                              {metric.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Architecture Feature Highlight */}
                    <div className="p-4 rounded-xl bg-[#181614] border border-white/[0.06] flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#f1903a]/10 text-[#f1903a] flex items-center justify-center flex-shrink-0">
                        <Cpu size={20} />
                      </div>
                      <div>
                        <span className="block font-mono text-[10px] uppercase text-[#8a857e] tracking-wider">
                          DEPLOYMENT PIPELINE
                        </span>
                        <span className="block font-sans text-xs text-[#efece7] font-medium">
                          Containerized Microservice Architecture
                        </span>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};
