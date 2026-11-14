import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Brain, Cloud, Database } from 'lucide-react';
import { FadeIn } from './FadeIn';

// Animated Terminal Icon for Programming Languages
const AnimatedTerminal = () => {
  return (
    <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-[#6B8F69]/10 text-[#6B8F69]">
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Terminal size={28} />
      </motion.div>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="absolute bottom-2.5 right-3 w-1.5 h-3 bg-[#6B8F69]"
      />
    </div>
  );
};

// Animated Brain Icon for ML/AI
const AnimatedBrain = () => {
  return (
    <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-[#789575]/10 text-[#789575]">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          filter: [
            'drop-shadow(0 0 2px rgba(120, 149, 117, 0.2))',
            'drop-shadow(0 0 8px rgba(120, 149, 117, 0.5))',
            'drop-shadow(0 0 2px rgba(120, 149, 117, 0.2))',
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Brain size={28} />
      </motion.div>
      {/* Floating neural node connection dots */}
      <motion.div
        animate={{
          y: [-2, 2, -2],
          x: [-1, 2, -1],
          opacity: [0.3, 0.9, 0.3],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1.5 right-2.5 w-1.5 h-1.5 rounded-full bg-[#5A7A58]"
      />
      <motion.div
        animate={{
          y: [2, -2, 2],
          x: [2, -1, 2],
          opacity: [0.3, 0.9, 0.3],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-2 left-2 w-1 h-1 rounded-full bg-[#789575]"
      />
    </div>
  );
};

// Animated Cloud Icon for Web & Cloud Deployment
const AnimatedCloud = () => {
  return (
    <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-[#8CAA87]/10 text-[#8CAA87]">
      <motion.div
        animate={{
          y: [0, -3, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Cloud size={28} />
      </motion.div>
      {/* Moving wind dash line */}
      <motion.div
        initial={{ x: -6, opacity: 0 }}
        animate={{ x: 6, opacity: [0, 0.8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: 0.5 }}
        className="absolute bottom-2.5 left-3 w-3 h-0.5 bg-[#8CAA87]/60 rounded"
      />
    </div>
  );
};

// Animated Database Icon for Databases & Tools
const AnimatedDatabase = () => {
  return (
    <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-[#A4B89E]/10 text-[#A4B89E]">
      <motion.div
        animate={{
          scale: [1, 1.04, 1],
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Database size={28} />
      </motion.div>
      {/* Flickering database server status indicators */}
      <motion.div
        animate={{
          opacity: [0.3, 1, 0.3],
        }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[17px] top-[17px] w-1 h-1 rounded-full bg-[#A4B89E]"
      />
      <motion.div
        animate={{
          opacity: [1, 0.3, 1],
        }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[17px] top-[24px] w-1 h-1 rounded-full bg-[#A4B89E]"
      />
    </div>
  );
};

interface SkillGroup {
  title: string;
  description: string;
  icon: React.ReactNode;
  skills: string[];
  glowColor: string;
  badgeBg: string;
}

const skillsData: SkillGroup[] = [
  {
    title: 'Languages & Frontend',
    description: 'Core programming languages and modern frontend tooling for intelligent AI-driven applications.',
    icon: <AnimatedTerminal />,
    skills: ['Python', 'JavaScript', 'SQL', 'HTML/CSS', 'React', 'Vite'],
    glowColor: 'from-[#6B8F69]/40 to-[#789575]/40',
    badgeBg: 'bg-[#6B8F69]/10 hover:bg-[#6B8F69]/20 text-[#6B8F69] border-[#6B8F69]/10'
  },
  {
    title: 'ML, Deep Learning & MLOps',
    description: 'Specialized mathematical libraries, GPU data acceleration, neural networks, and MLOps workflows.',
    icon: <AnimatedBrain />,
    skills: [
      'Scikit-learn', 'PyTorch', 'TensorFlow', 'Keras', 
      'Pandas', 'NumPy', 'NVIDIA cuDF', 'Matplotlib', 
      'Feature Engineering', 'Model Evaluation & Tuning', 'MLOps'
    ],
    glowColor: 'from-[#789575]/40 to-[#5A7A58]/40',
    badgeBg: 'bg-[#789575]/10 hover:bg-[#789575]/20 text-[#789575] border-[#789575]/10'
  },
  {
    title: 'GenAI, CV & NLP',
    description: 'Retrieval-Augmented Generation, vector database embeddings, vision pipelines, and LLM reasoning.',
    icon: <AnimatedCloud />,
    skills: [
      'LLMs (Gemini)', 'RAG Architecture', 'ChromaDB', 
      'Prompt Engineering', 'OpenCV', 'NLP', 
      'Image Classification', 'Object Detection'
    ],
    glowColor: 'from-[#8CAA87]/40 to-[#789575]/40',
    badgeBg: 'bg-[#8CAA87]/10 hover:bg-[#8CAA87]/20 text-[#8CAA87] border-[#8CAA87]/10'
  },
  {
    title: 'Backend, Cloud & Analytics',
    description: 'Production microservices, secure authentication, cloud infrastructure, and business intelligence.',
    icon: <AnimatedDatabase />,
    skills: [
      'FastAPI', 'Flask', 'Express.js', 'REST APIs', 
      'JWT Authentication', 'Docker', 'Google Cloud (BigQuery, Cloud Run)', 
      'Oracle Cloud (OCI)', 'AWS', 'Databricks', 
      'PostgreSQL', 'Power BI', 'Tableau', 'Git & GitHub', 'Jupyter Notebook'
    ],
    glowColor: 'from-[#A4B89E]/40 to-[#789575]/40',
    badgeBg: 'bg-[#A4B89E]/10 hover:bg-[#A4B89E]/20 text-[#A4B89E] border-[#A4B89E]/10'
  }
];

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative w-full bg-[#1A2A1A] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 select-none overflow-hidden"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-[#789575]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-[#5A7A58]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col relative z-10">
        {/* Section Heading */}
        <FadeIn delay={0} y={30}>
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none mb-16 sm:mb-20 md:mb-28">
            Skills
          </h2>
        </FadeIn>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
          {skillsData.map((group, index) => (
            <FadeIn
              key={group.title}
              delay={index * 0.15}
              y={40}
              className="w-full"
            >
              <div className="relative group rounded-[32px] p-[1.5px] transition-all duration-500 overflow-hidden h-full">
                {/* Glowing border background visible on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${group.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px] blur-sm`}
                />

                {/* Card Container */}
                <div className="relative h-full w-full rounded-[30.5px] bg-[#121212]/90 border border-white/[0.08] group-hover:border-transparent p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 backdrop-blur-md z-10">
                  {/* Subtle top-left soft glow inside card */}
                  <div className={`absolute -top-10 -left-10 w-24 h-24 rounded-full bg-gradient-to-br ${group.glowColor} blur-2xl opacity-15 pointer-events-none transition-all duration-500 group-hover:opacity-25`} />

                  <div>
                    {/* Card Header */}
                    <div className="flex items-center gap-4 mb-5">
                      {group.icon}
                      <h3 className="font-semibold text-lg sm:text-xl uppercase tracking-wide text-[#E5E8CE]">
                        {group.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-[#E5E8CE]/60 font-light text-sm mb-6 leading-relaxed">
                      {group.description}
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill, sIdx) => (
                        <motion.span
                          key={sIdx}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className={`text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider font-semibold border transition-all duration-300 cursor-default select-none ${group.badgeBg}`}
                        >
                          {skill}
                        </motion.span>
                      ))}
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
