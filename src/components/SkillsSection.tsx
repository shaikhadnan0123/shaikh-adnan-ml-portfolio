import React from 'react';
import { FadeIn } from './FadeIn';
import { Brain, Sparkles, Server, Database } from 'lucide-react';

interface SkillItem {
  name: string;
  rating: number; // 1 to 5
}

interface SkillCategory {
  title: string;
  monoLabel: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Machine Learning & Deep Learning',
    monoLabel: 'MODEL ARCHITECTURES // EVALUATION',
    description: 'Mathematical algorithmic foundations, gradient descent, feature tuning, and neural network training.',
    icon: <Brain size={22} />,
    accentColor: '#f1903a', // Ember
    skills: [
      { name: 'PyTorch & Neural Networks', rating: 5 },
      { name: 'Scikit-learn & Tabular Pipelines', rating: 5 },
      { name: 'Feature Engineering & Outliers', rating: 5 },
      { name: 'TensorFlow & Keras', rating: 4 },
      { name: 'Model Evaluation (R², ROC-AUC, F1)', rating: 5 },
      { name: 'MLOps & Inference Optimization', rating: 4 },
    ],
  },
  {
    title: 'GenAI, LLMs & Vector Search',
    monoLabel: 'RAG // SEMANTIC EMBEDDINGS',
    description: 'Contextual groundings, vector databases, prompt engineering, and multimodal LLM APIs.',
    icon: <Sparkles size={22} />,
    accentColor: '#2dd4bf', // Teal
    skills: [
      { name: 'Gemini API & LLM Reasoning', rating: 5 },
      { name: 'RAG Architecture & Chunking', rating: 5 },
      { name: 'ChromaDB Vector Retrieval', rating: 5 },
      { name: 'Prompt Engineering & Few-Shot', rating: 5 },
      { name: 'Computer Vision & OpenCV', rating: 4 },
      { name: 'NLP & Text Classification', rating: 4 },
    ],
  },
  {
    title: 'Backend Infrastructure & APIs',
    monoLabel: 'MICROSERVICES // AUTHENTICATION',
    description: 'High-concurrency microservices, JWT authentication, containerization, and REST interfaces.',
    icon: <Server size={22} />,
    accentColor: '#a855f7', // Purple
    skills: [
      { name: 'FastAPI REST Microservices', rating: 5 },
      { name: 'Flask API Development', rating: 5 },
      { name: 'JWT & Argon2id Security', rating: 5 },
      { name: 'Docker Containerization', rating: 4 },
      { name: 'Express.js & Node APIs', rating: 4 },
      { name: 'SQLAlchemy & ORM Architecture', rating: 4 },
    ],
  },
  {
    title: 'Data Acceleration & Cloud Systems',
    monoLabel: 'GPU PIPELINES // CLUSTER INFRA',
    description: 'Hardware-accelerated analytics, serverless relational databases, and enterprise data warehouses.',
    icon: <Database size={22} />,
    accentColor: '#f1903a', // Ember
    skills: [
      { name: 'NVIDIA cuDF (GPU Acceleration)', rating: 5 },
      { name: 'Pandas & NumPy Vectorization', rating: 5 },
      { name: 'Google Cloud (BigQuery, Cloud Run)', rating: 4 },
      { name: 'Oracle Cloud Infrastructure (OCI)', rating: 4 },
      { name: 'Neon Serverless PostgreSQL', rating: 5 },
      { name: 'Git, GitHub Actions & Linux CLI', rating: 5 },
    ],
  },
];

// Helper component for the 5-bar ratings
const RatingBars: React.FC<{ rating: number; color: string }> = ({ rating, color }) => {
  return (
    <div className="flex items-center gap-1.5">
      {[1, 2, 3, 4, 5].map((bar) => {
        const isFilled = bar <= rating;
        return (
          <span
            key={bar}
            className="w-3.5 h-1.5 rounded-sm transition-all duration-300"
            style={{
              backgroundColor: isFilled ? color : 'rgba(255, 255, 255, 0.08)',
              boxShadow: isFilled ? `0 0 8px ${color}33` : 'none',
            }}
          />
        );
      })}
    </div>
  );
};

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative w-full bg-[#121110] abhishek-grid py-24 sm:py-32 px-5 sm:px-8 lg:px-12 select-none overflow-hidden border-t border-white/[0.06]"
    >
      {/* Background Glows */}
      <div className="absolute top-[20%] right-[-5%] w-[450px] h-[450px] rounded-full bg-[#a855f7]/07 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-5%] w-[450px] h-[450px] rounded-full bg-[#f1903a]/08 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <FadeIn delay={0.1} y={20}>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[#f1903a]">
                  04 // Technical Arsenal
                </span>
                <div className="h-px w-12 bg-[#f1903a]/30" />
              </div>
            </FadeIn>

            <FadeIn delay={0.15} y={20}>
              <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl tracking-[-0.03em] text-[#efece7]">
                <span>Core Capabilities</span> <span className="text-[#8a857e]">// & 5-Bar Tooling</span>
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} y={15}>
            <div className="flex items-center gap-4 font-mono text-xs text-[#8a857e]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#f1903a]" /> ML/Data
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#2dd4bf]" /> GenAI
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#a855f7]" /> Backend
              </span>
            </div>
          </FadeIn>
        </div>

        {/* 2-Column Skills Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <FadeIn key={category.title} delay={index * 0.1} y={30} className="w-full">
              <div className="h-full rounded-[28px] overflow-hidden border border-white/[0.08] hover:border-[#f1903a]/40 bg-[#181614]/90 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_20px_50px_rgba(241,144,58,0.06)] group">
                
                <div>
                  {/* Card Header: Icon & Mono Label */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10"
                      style={{
                        backgroundColor: `${category.accentColor}12`,
                        color: category.accentColor,
                      }}
                    >
                      {category.icon}
                    </div>

                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#8a857e] px-2.5 py-1 rounded bg-[#121110] border border-white/[0.06]">
                      {category.monoLabel}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-semibold text-xl text-[#efece7] mb-2 tracking-tight group-hover:text-white transition-colors">
                    {category.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#8a857e] leading-relaxed mb-6">
                    {category.description}
                  </p>

                  {/* Skill Items List with 5-Bar Ratings */}
                  <div className="flex flex-col gap-3.5">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.03] hover:border-white/[0.08] transition-colors"
                      >
                        <span className="font-sans text-xs sm:text-sm text-[#efece7]/90 font-medium">
                          {skill.name}
                        </span>
                        <RatingBars rating={skill.rating} color={category.accentColor} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Status Line */}
                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#8a857e]">
                  <span>VERIFIED PROFICIENCY</span>
                  <span style={{ color: category.accentColor }}>TIER 1 PRODUCTION</span>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};
