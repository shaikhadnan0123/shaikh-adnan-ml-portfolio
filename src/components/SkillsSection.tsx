import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Brain, Cloud, Database } from 'lucide-react';
import { FadeIn } from './FadeIn';

// Animated Terminal Icon for Programming Languages
const AnimatedTerminal = () => {
  return (
    <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-[#BE4C00]/10 text-[#BE4C00]">
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
        className="absolute bottom-2.5 right-3 w-1.5 h-3 bg-[#BE4C00]"
      />
    </div>
  );
};

// Animated Brain Icon for ML/AI
const AnimatedBrain = () => {
  return (
    <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-[#B600A8]/10 text-[#B600A8]">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          filter: [
            'drop-shadow(0 0 2px rgba(182, 0, 168, 0.2))',
            'drop-shadow(0 0 8px rgba(182, 0, 168, 0.5))',
            'drop-shadow(0 0 2px rgba(182, 0, 168, 0.2))',
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
        className="absolute top-1.5 right-2.5 w-1.5 h-1.5 rounded-full bg-[#7621B0]"
      />
      <motion.div
        animate={{
          y: [2, -2, 2],
          x: [2, -1, 2],
          opacity: [0.3, 0.9, 0.3],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-2 left-2 w-1 h-1 rounded-full bg-[#B600A8]"
      />
    </div>
  );
};

// Animated Cloud Icon for Web & Cloud Deployment
const AnimatedCloud = () => {
  return (
    <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-[#00A8FF]/10 text-[#00A8FF]">
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
        className="absolute bottom-2.5 left-3 w-3 h-0.5 bg-[#00A8FF]/60 rounded"
      />
    </div>
  );
};

// Animated Database Icon for Databases & Tools
const AnimatedDatabase = () => {
  return (
    <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-[#00B68A]/10 text-[#00B68A]">
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
        className="absolute right-[17px] top-[17px] w-1 h-1 rounded-full bg-[#00B68A]"
      />
      <motion.div
        animate={{
          opacity: [1, 0.3, 1],
        }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[17px] top-[24px] w-1 h-1 rounded-full bg-[#00B68A]"
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
    title: 'Programming Languages',
    description: 'Core languages used to construct AI/ML models, query large databases, and build backend interfaces.',
    icon: <AnimatedTerminal />,
    skills: ['Python (Primary)', 'JavaScript', 'C++', 'SQL'],
    glowColor: 'from-[#BE4C00]/40 to-[#B60050]/40',
    badgeBg: 'bg-[#BE4C00]/10 hover:bg-[#BE4C00]/20 text-[#BE4C00] border-[#BE4C00]/10'
  },
  {
    title: 'Machine Learning & AI',
    description: 'Specialized mathematical libraries, neural network pipelines, and feature engineering tools.',
    icon: <AnimatedBrain />,
    skills: [
      'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 
      'EDA', 'Feature Engineering', 'Predictive Modeling', 
      'Supervised Learning', 'Model Evaluation', 'NLP', 
      'Deep Learning', 'Generative AI'
    ],
    glowColor: 'from-[#B600A8]/40 to-[#7621B0]/40',
    badgeBg: 'bg-[#B600A8]/10 hover:bg-[#B600A8]/20 text-[#B600A8] border-[#B600A8]/10'
  },
  {
    title: 'Web & Cloud Deployment',
    description: 'Frameworks and environments utilized to deploy models, establish REST APIs, and host systems.',
    icon: <AnimatedCloud />,
    skills: ['Flask', 'REST APIs', 'Render Cloud', 'Oracle Cloud (OCI)', 'Databricks', 'HTML/CSS'],
    glowColor: 'from-[#00A8FF]/40 to-[#0077B5]/40',
    badgeBg: 'bg-[#00A8FF]/10 hover:bg-[#00A8FF]/20 text-[#00A8FF] border-[#00A8FF]/10'
  },
  {
    title: 'Developer Tools & DBs',
    description: 'Version control platforms, development setups, and relational / non-relational database storage.',
    icon: <AnimatedDatabase />,
    skills: ['Git', 'GitHub', 'Jupyter Notebook', 'VS Code', 'MongoDB', 'SQLite', 'MySQL'],
    glowColor: 'from-[#00B68A]/40 to-[#2E7D32]/40',
    badgeBg: 'bg-[#00B68A]/10 hover:bg-[#00B68A]/20 text-[#00B68A] border-[#00B68A]/10'
  }
];

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 select-none overflow-hidden"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-[#B600A8]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-[#7621B0]/10 blur-[120px] pointer-events-none" />

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
                      <h3 className="font-semibold text-lg sm:text-xl uppercase tracking-wide text-[#D7E2EA]">
                        {group.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-[#D7E2EA]/60 font-light text-sm mb-6 leading-relaxed">
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
