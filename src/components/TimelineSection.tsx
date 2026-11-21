import React from 'react';
import { MapPin } from 'lucide-react';
import { FadeIn } from './FadeIn';

interface TimelineEntry {
  type: 'experience' | 'education';
  dates: string;
  role: string;
  company: string;
  location: string;
  badge: string;
  description: string;
  bullets: string[];
}

const timelineData: TimelineEntry[] = [
  {
    type: 'experience',
    dates: 'SEP 2026 – PRESENT',
    role: 'Machine Learning Intern',
    company: 'Valentius Kryptix',
    location: 'Remote',
    badge: 'CURRENT ROLE',
    description:
      'Implementing algorithmic machine learning models from scratch in NumPy and benchmarking supervised algorithms on real-world datasets.',
    bullets: [
      'Implemented linear regression from scratch using gradient descent and MSE cost function for multi-feature inputs, verifying mathematical R² against Scikit-learn',
      'Benchmarked 5 supervised algorithms on identical training/testing splits with standardized preprocessing and documented evaluation metrics',
    ],
  },
  {
    type: 'experience',
    dates: 'DEC 2025 – JAN 2026',
    role: 'Machine Learning Intern',
    company: 'SaiKet Systems',
    location: 'Remote',
    badge: 'INTERNSHIP',
    description:
      'Engineered an enterprise-grade customer churn predictive pipeline for telecommunications client data.',
    bullets: [
      'Constructed complete telecom churn pipeline: categorical one-hot encoding, stratified 80/20 splitting, and feature synthesis from contract tenure and charges',
      'Tuned and evaluated Logistic Regression, Decision Trees, Random Forest, and Gradient Boosting on ROC-AUC, precision, recall, and F1-score',
    ],
  },
  {
    type: 'experience',
    dates: 'NOV 2025 – JAN 2026',
    role: 'Machine Learning Intern (Certified)',
    company: 'The SmartBridge',
    location: 'Hyderabad, India (Remote)',
    badge: 'CERTIFIED INTERNSHIP',
    description:
      'Built production-grade tabular ML pipelines for high-dimensional dataset ingestion, transformation, and automated evaluation.',
    bullets: [
      'Developed end-to-end ingestion and outlier filtering workflows with Python, Pandas, and NumPy',
      'Increased model classification F1 score through iterative exploratory data analysis (EDA) and hyperparameter optimization',
    ],
  },
  {
    type: 'education',
    dates: 'NOV 2022 – AUG 2026',
    role: 'B.E. in Artificial Intelligence & Machine Learning',
    company: 'Lords Institute of Engineering & Technology (Osmania University)',
    location: 'Hyderabad, Telangana, India',
    badge: 'ACADEMIC DEGREE',
    description:
      'Pursuing Bachelor of Engineering with extensive practical coursework in Machine Learning, Deep Neural Architectures, Natural Language Processing, and Data Structures.',
    bullets: [
      'Cumulative Grade Point Average (CGPA): 8.08 / 10',
      'Key coursework: Supervised & Unsupervised Learning, Linear Algebra, Optimization, Deep Learning, MLOps',
    ],
  },
];

export const TimelineSection: React.FC = () => {
  return (
    <section
      id="timeline"
      className="relative w-full bg-[#121110] abhishek-grid py-24 sm:py-32 px-5 sm:px-8 lg:px-12 select-none overflow-hidden border-t border-white/[0.06]"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-[25%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#f1903a]/08 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[#2dd4bf]/06 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <FadeIn delay={0.1} y={20}>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[#f1903a]">
                  05 // Career Journey
                </span>
                <div className="h-px w-12 bg-[#f1903a]/30" />
              </div>
            </FadeIn>

            <FadeIn delay={0.15} y={20}>
              <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl tracking-[-0.03em] text-[#efece7]">
                <span>Experience</span> <span className="text-[#8a857e]">// & Academic Track</span>
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} y={15}>
            <p className="font-mono text-xs text-[#8a857e] uppercase tracking-wider">
              [ Verified Chronological Milestones ]
            </p>
          </FadeIn>
        </div>

        {/* Abhishek Timeline Layout: Dates Left, Vertical Line + Ember Dot, Content Right */}
        <div className="relative flex flex-col gap-12 sm:gap-14">
          {timelineData.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1} y={30} className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
                
                {/* Left: Dates in Mono (~3 cols) */}
                <div className="md:col-span-3 flex md:flex-col items-center md:items-end justify-between md:justify-start gap-2 pt-1 text-left md:text-right">
                  <span className="font-mono text-xs font-semibold text-[#f1903a] tracking-wider uppercase">
                    {item.dates}
                  </span>
                  <span className="font-mono text-[10px] text-[#2dd4bf] uppercase px-2 py-0.5 rounded bg-[#2dd4bf]/10 border border-[#2dd4bf]/20">
                    {item.badge}
                  </span>
                </div>

                {/* Center: Vertical Line + Glowing Ember Dot (~1 col) */}
                <div className="hidden md:flex md:col-span-1 justify-center relative self-stretch">
                  <div className="w-px bg-white/10 h-full absolute top-3" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#f1903a] shadow-[0_0_12px_#f1903a] z-10 mt-1.5 flex-shrink-0" />
                </div>

                {/* Right: Experience Content Card (~8 cols) */}
                <div className="md:col-span-8 rounded-[24px] overflow-hidden border border-white/[0.08] hover:border-[#f1903a]/40 bg-[#181614]/90 backdrop-blur-md p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(241,144,58,0.06)] group text-left">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="font-display font-semibold text-xl sm:text-2xl text-[#efece7] tracking-tight group-hover:text-white transition-colors">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-[#8a857e]">
                      <MapPin size={13} className="text-[#f1903a]" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <p className="font-sans text-sm font-medium text-[#f1903a] mb-4">
                    {item.company}
                  </p>

                  <p className="font-sans text-sm text-[#8a857e] leading-relaxed mb-5">
                    {item.description}
                  </p>

                  <div className="flex flex-col gap-2 pt-3 border-t border-white/[0.06]">
                    {item.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#efece7]/85">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f1903a] mt-2 flex-shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
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
