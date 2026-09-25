import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from './LiveProjectButton';

interface Project {
  num: string;
  category: string;
  name: string;
  description: string;
  stack: string[];
  metrics: string[];
  images: string[];
  link: string;
  linkLabel: string;
}

const projectsData: Project[] = [
  {
    num: '01',
    category: 'Full-Stack GenAI Platform',
    name: 'internAI — AI Resume & Matching Platform',
    description: 'Engineered a full-stack platform at Gen AI Academy APAC Hackathon, integrating Google Gemini AI for automated resume parsing, ATS scoring, and high-performance applicant matching.',
    stack: ['Python', 'Flask', 'Gemini AI', 'Google BigQuery', 'NVIDIA cuDF', 'Docker', 'Render'],
    metrics: [
      'Engineered a full-stack platform at Gen AI Academy APAC Hackathon, integrating Google Gemini AI for resume parsing & ATS scoring',
      'Benchmarked a GPU-accelerated NVIDIA cuDF data pipeline against Pandas over 100,000 records, cutting latency from 4.35s to 0.24s (an 18.5x speedup)',
      'Architected 5 Flask REST API endpoints with Google Cloud BigQuery persistence, containerized via Docker on Render'
    ],
    images: [
      '/ml_code.png',       // Left Top
      '/dataset_grid.png',  // Left Bottom
      '/project3_main.png',  // Right Main Showcase
    ],
    link: 'https://github.com/shaikhadnan0123',
    linkLabel: 'Live Demo / GitHub',
  },
  {
    num: '02',
    category: 'Predictive ML & Web App',
    name: 'NYC Airbnb Price Predictor',
    description: 'Trained and evaluated Scikit-learn regression models across 47,840 NYC Airbnb listings to forecast nightly prices, deploying a production-ready Flask REST API with a responsive React/Vite web interface.',
    stack: ['Python', 'Scikit-learn', 'Flask', 'React.js', 'Vite', 'Docker', 'Render', 'Vercel'],
    metrics: [
      'Trained & evaluated 4 Scikit-learn regression models across 47,840 NYC Airbnb listings; scoped outlier boundaries ($10–$500) to optimize generalization',
      'Selected Extra Trees Regressor as top-performing production model achieving R² of 0.51 and MAE of $38.55',
      'Deployed a Dockerized Flask REST API backend on Render with a responsive React/Vite interface on Vercel'
    ],
    images: [
      '/ml_code.png',       // Left Top
      '/terminal_logs.png', // Left Bottom
      '/project1_main.png',  // Right Main Showcase
    ],
    link: 'https://github.com/shaikhadnan0123',
    linkLabel: 'Live Demo / GitHub',
  },
  {
    num: '03',
    category: 'Classification & Churn Analytics',
    name: 'Customer Churn Prediction Pipeline',
    description: 'Engineered an end-to-end customer churn prediction pipeline on enterprise telecommunications data, isolating key retention drivers and benchmarking ensemble models for maximum ROC-AUC and recall.',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Random Forest', 'Gradient Boosting', 'EDA'],
    metrics: [
      'Engineered an end-to-end customer churn pipeline on enterprise telecom data with stratified 80/20 train-test splits & categorical encoding',
      'Isolated highest-leverage retention indicators (contract type, tenure, monthly charges) through targeted feature engineering',
      'Trained & benchmarked Logistic Regression, Decision Trees, Random Forests & Gradient Boosting models across ROC-AUC, precision & F1-score'
    ],
    images: [
      '/ml_code.png',       // Left Top
      '/terminal_logs.png', // Left Bottom
      '/project2_main.png',  // Right Main Showcase
    ],
    link: 'https://github.com/shaikhadnan0123',
    linkLabel: 'GitHub Code',
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
  totalCards: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the scroll progress of this project card's viewport block
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  // Map progress to scale down slightly as scroll moves past
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  // Card top offset positioning inside the sticky container
  const topOffset = index * 28;

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[90vh] lg:h-[90vh] flex justify-center items-start mb-12 lg:mb-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(100px + ${topOffset}px)`, // Offsets them slightly as they stack
          zIndex: 10 + index,
          willChange: 'transform',
        }}
        className="sticky w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:p-8 flex flex-col gap-6 justify-between h-auto top-24 md:top-32"
      >
        {/* Top Row: Index, Category, Name & Ghost LiveProjectButton */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="font-black text-[#D7E2EA] text-[clamp(2.5rem,8vw,90px)] leading-none select-none">
              {project.num}
            </span>
            <div className="flex flex-col text-left">
              <span className="text-[#D7E2EA] opacity-60 text-xs sm:text-sm uppercase tracking-wider font-light">
                {project.category}
              </span>
              <h4 className="text-[#D7E2EA] font-semibold text-lg sm:text-xl md:text-2xl uppercase">
                {project.name}
              </h4>
            </div>
          </div>
          <LiveProjectButton label={project.linkLabel} href={project.link} className="w-full sm:w-auto" />
        </div>

        {/* Bottom Row: Detail + Images Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full items-stretch">
          {/* Details Column (5 cols of 12) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between text-left">
            <div>
              <p className="text-[#D7E2EA]/80 font-light text-sm sm:text-base leading-relaxed mb-6">
                {project.description}
              </p>
              
              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] sm:text-xs px-3 py-1 rounded-full uppercase tracking-wider font-semibold border border-[#D7E2EA]/10 bg-[#121212]/80 text-[#D7E2EA]/70 hover:border-[#B600A8]/40 hover:text-white transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Achievements/Metrics */}
            <div className="flex flex-col gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 shadow-inner">
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#B600A8] font-bold">
                Key Metrics & Impact
              </span>
              <div className="flex flex-col gap-2">
                {project.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="flex items-start gap-2.5 text-xs text-[#D7E2EA]/75">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00B68A] mt-1.5 flex-shrink-0" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Images Column (7 cols of 12) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-10 gap-3 sm:gap-4 items-stretch">
            {/* Left Image Column (4 cols of 10) */}
            <div className="sm:col-span-4 flex flex-col gap-3 sm:gap-4 justify-between">
              <img
                src={project.images[0]}
                alt={`${project.name} view 1`}
                style={{ height: 'clamp(90px, 11vw, 150px)' }}
                className="w-full rounded-[20px] sm:rounded-[28px] object-cover border border-[#D7E2EA]/10"
                loading="lazy"
              />
              <img
                src={project.images[1]}
                alt={`${project.name} view 2`}
                style={{ height: 'clamp(110px, 14vw, 210px)' }}
                className="w-full rounded-[20px] sm:rounded-[28px] object-cover border border-[#D7E2EA]/10"
                loading="lazy"
              />
            </div>

            {/* Right Showcase Image Column (6 cols of 10) */}
            <div className="sm:col-span-6 flex">
              <img
                src={project.images[2]}
                alt={`${project.name} main showcase`}
                className="w-full rounded-[20px] sm:rounded-[28px] object-cover border border-[#D7E2EA]/10 min-h-[180px] sm:min-h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pt-20 pb-32 z-10 select-none"
    >
      <div className="max-w-5xl mx-auto flex flex-col">
        {/* Section Heading */}
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none mb-16 sm:mb-20 md:mb-28">
          Projects
        </h2>

        {/* Project Stacking Cards List */}
        <div className="flex flex-col w-full relative gap-12">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.num}
              project={project}
              index={index}
              totalCards={projectsData.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
