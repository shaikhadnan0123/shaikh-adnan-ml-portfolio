import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { Cloud, Award, Briefcase, Cpu, Sparkles, Medal } from 'lucide-react';

interface Certification {
  name: string;
  issuer: string;
  icon: React.ReactNode;
  accentColor: string;
  description: string;
}

const certificationsData: Certification[] = [
  {
    name: 'Oracle Cloud Infrastructure (OCI) Foundations Associate',
    issuer: 'Oracle',
    icon: <Cloud size={24} />,
    accentColor: '#F05A28',
    description: 'Validates foundational knowledge of cloud concepts, OCI architectures, database systems, security mechanisms, and pricing models.',
  },
  {
    name: 'DataCamp Data Analyst Associate',
    issuer: 'DataCamp',
    icon: <Award size={24} />,
    accentColor: '#03EF62',
    description: 'Certified proficiency in data manipulation, exploratory data analysis (EDA), statistical methods, and visualization techniques using SQL and Python.',
  },
  {
    name: 'Machine Learning Internship',
    issuer: 'The SmartBridge (Certified)',
    icon: <Briefcase size={24} />,
    accentColor: '#B600A8',
    description: 'Practical training on real-world datasets, deploying end-to-end ML models, outlier cleaning, validation splits, and model evaluations.',
  },
  {
    name: 'IBM Artificial Intelligence Fundamentals',
    issuer: 'IBM',
    icon: <Cpu size={24} />,
    accentColor: '#0F62FE',
    description: 'Core concepts of machine learning, neural network architectures, NLP, and cognitive computing concepts verified by IBM.',
  },
  {
    name: 'Databricks Accredited Generative AI Fundamentals',
    issuer: 'Databricks',
    icon: <Sparkles size={24} />,
    accentColor: '#FF3621',
    description: 'Understanding Generative AI frameworks, LLM capabilities, basic prompt engineering, and modern vector storage architectures.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export const CertificationsSection: React.FC = () => {
  return (
    <section
      id="certifications"
      className="relative w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 select-none overflow-hidden"
    >
      {/* Soft ambient background glows */}
      <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-[#B600A8]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[300px] h-[300px] rounded-full bg-[#7621B0]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col relative z-10">
        {/* Section Heading */}
        <FadeIn delay={0} y={30}>
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(2.2rem,8vw,120px)] leading-none mb-4">
            Certifications
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} y={20}>
          <p className="text-[#D7E2EA]/50 text-center text-xs sm:text-sm uppercase tracking-[0.2em] font-light mb-16 sm:mb-20 md:mb-24 max-w-lg mx-auto">
            Professional validations of my technical expertise
          </p>
        </FadeIn>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`group relative rounded-[28px] p-[1.5px] overflow-hidden flex flex-col h-full ${
                index === 4 && certificationsData.length % 3 !== 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Interactive border glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[28px] blur-sm"
                style={{
                  background: `linear-gradient(135deg, ${cert.accentColor}30, transparent, ${cert.accentColor}15)`,
                }}
              />

              {/* Card Main Container */}
              <div className="relative flex-grow rounded-[26.5px] bg-[#121212]/90 border border-white/[0.08] group-hover:border-transparent p-6 flex flex-col gap-5 transition-all duration-500 backdrop-blur-md">
                {/* Inner radial gradient glow behind icon */}
                <div
                  className="absolute -top-10 -left-10 w-24 h-24 rounded-full blur-2xl opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle, ${cert.accentColor}, transparent)`,
                  }}
                />

                {/* Header Icon & Issuer */}
                <div className="flex justify-between items-start">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-transparent transition-all duration-300"
                    style={{
                      backgroundColor: `${cert.accentColor}10`,
                      color: cert.accentColor,
                    }}
                  >
                    {cert.icon}
                  </div>
                  <span
                    className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/5"
                    style={{ color: `${cert.accentColor}cc` }}
                  >
                    {cert.issuer}
                  </span>
                </div>

                {/* Name & Description */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-sm sm:text-base text-[#D7E2EA] group-hover:text-white transition-colors duration-300 line-clamp-2 h-12 flex items-center">
                    {cert.name}
                  </h3>
                  <p className="text-[#D7E2EA]/60 font-light text-xs sm:text-sm leading-relaxed mt-1">
                    {cert.description}
                  </p>
                </div>

                {/* Bottom detail / Decoration */}
                <div className="mt-auto pt-4 border-t border-white/[0.05] flex items-center justify-between text-[#D7E2EA]/40 group-hover:text-[#D7E2EA]/60 transition-colors duration-300">
                  <span className="text-[9px] uppercase tracking-widest font-mono">
                    Verified Credential
                  </span>
                  <Medal size={14} style={{ color: cert.accentColor }} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
