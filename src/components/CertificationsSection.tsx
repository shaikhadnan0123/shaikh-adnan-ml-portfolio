import React from 'react';
import { FadeIn } from './FadeIn';
import { Medal } from 'lucide-react';

interface Certification {
  name: string;
  issuer: string;
  accentColor: string;
  badge: string;
  description: string;
}

const certificationsData: Certification[] = [
  {
    name: 'Oracle Cloud Infrastructure (OCI) Foundations Associate',
    issuer: 'Oracle',
    accentColor: '#f1903a', // Ember
    badge: 'CLOUD ARCHITECTURE',
    description: 'Core cloud tenancy concepts, OCI compute architectures, virtual cloud networks (VCN), IAM security, and database solutions.',
  },
  {
    name: 'Data Analyst Associate',
    issuer: 'DataCamp',
    accentColor: '#2dd4bf', // Teal
    badge: 'DATA WRANGLING',
    description: 'Certified analytical capability in data manipulation, exploratory data analysis (EDA), statistical modeling, and dashboarding with Python & SQL.',
  },
  {
    name: 'IBM Artificial Intelligence Fundamentals',
    issuer: 'IBM',
    accentColor: '#a855f7', // Purple
    badge: 'AI FOUNDATIONS',
    description: 'Core concepts of machine learning algorithms, deep neural network layers, NLP, computer vision, and AI ethics validated by IBM.',
  },
  {
    name: 'Databricks Accredited Generative AI Fundamentals',
    issuer: 'Databricks',
    accentColor: '#f1903a', // Ember
    badge: 'GENERATIVE AI',
    description: 'Foundations of large language models (LLMs), prompt engineering, retrieval-augmented generation (RAG), and enterprise vector index patterns.',
  },
  {
    name: 'Machine Learning Internship (Certified)',
    issuer: 'The SmartBridge',
    accentColor: '#2dd4bf', // Teal
    badge: 'PRODUCTION ML',
    description: 'Professional training on high-dimensional datasets, building reproducible ML pipelines, stratified cross-validation, and production inference.',
  },
  {
    name: 'Google Cloud Gen AI Academy APAC (Cohort 2)',
    issuer: 'Google Cloud & Hack2skill (2026)',
    accentColor: '#efece7', // Off-white
    badge: 'HACKATHON FINALIST',
    description: 'Completed cohort building production GenAI solutions. Built internAI platform with Google Gemini & cuDF. Participant in React Buildathon & Hack The League.',
  },
];

export const CertificationsSection: React.FC = () => {
  return (
    <section
      id="certifications"
      className="relative w-full bg-[#121110] abhishek-grid py-24 sm:py-32 px-5 sm:px-8 lg:px-12 select-none overflow-hidden border-t border-white/[0.06]"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-[30%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[#f1903a]/08 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <FadeIn delay={0.1} y={20}>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[#f1903a]">
                  06 // Credentials & Honors
                </span>
                <div className="h-px w-12 bg-[#f1903a]/30" />
              </div>
            </FadeIn>

            <FadeIn delay={0.15} y={20}>
              <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl tracking-[-0.03em] text-[#efece7]">
                <span>Verified</span> <span className="text-[#8a857e]">// Certifications</span>
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} y={15}>
            <p className="font-mono text-xs text-[#8a857e] uppercase tracking-wider">
              [ Industry-Standard Technical Endorsements ]
            </p>
          </FadeIn>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <FadeIn key={cert.name} delay={index * 0.08} y={25} className="w-full">
              <div className="h-full rounded-[24px] overflow-hidden border border-white/[0.08] hover:border-[#f1903a]/40 bg-[#181614]/90 backdrop-blur-md p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_15px_40px_rgba(241,144,58,0.06)] group text-left">
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded border"
                      style={{
                        color: cert.accentColor,
                        backgroundColor: `${cert.accentColor}10`,
                        borderColor: `${cert.accentColor}25`,
                      }}
                    >
                      {cert.badge}
                    </span>
                    <span className="font-sans text-xs text-[#8a857e] font-medium">
                      {cert.issuer}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-base sm:text-lg text-[#efece7] mb-3 group-hover:text-white transition-colors">
                    {cert.name}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#8a857e] leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-[#8a857e]">
                  <span>AUTHENTICATED</span>
                  <Medal size={14} style={{ color: cert.accentColor }} />
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};
