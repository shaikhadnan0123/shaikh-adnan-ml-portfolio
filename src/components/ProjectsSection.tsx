import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from './LiveProjectButton';

interface Project {
  num: string;
  category: string;
  name: string;
  images: string[];
  link: string;
  linkLabel: string;
}

const projectsData: Project[] = [
  {
    num: '01',
    category: 'ML Web Application',
    name: 'Employee Performance Prediction System',
    images: [
      '/ml_code.png',       // Left Top
      '/terminal_logs.png', // Left Bottom
      '/project1_main.png',  // Right Main Showcase
    ],
    link: 'https://github.com/shaikhadnan0123',
    linkLabel: 'GitHub Code',
  },
  {
    num: '02',
    category: 'Business Intelligence & EDA',
    name: 'Restaurant Tips Intelligence Analysis',
    images: [
      '/ml_code.png',       // Left Top
      '/dataset_grid.png',  // Left Bottom
      '/project2_main.png',  // Right Main Showcase
    ],
    link: 'https://github.com/shaikhadnan0123',
    linkLabel: 'GitHub Code',
  },
  {
    num: '03',
    category: 'Internship Work',
    name: 'AI Predictive Analytics Pipelines',
    images: [
      '/dataset_grid.png',  // Left Top
      '/terminal_logs.png', // Left Bottom
      '/project3_main.png',  // Right Main Showcase
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
      className="relative w-full h-[85vh] flex justify-center items-start"
    >
      <motion.div
        style={{
          scale,
          top: `calc(100px + ${topOffset}px)`, // Offsets them slightly as they stack
          zIndex: 10 + index,
          willChange: 'transform',
        }}
        className="sticky w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-8 justify-between h-auto top-24 md:top-32"
      >
        {/* Top Row: Index, Category, Name & Ghost LiveProjectButton */}
        <div className="flex justify-between items-center w-full">
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
          <LiveProjectButton label={project.linkLabel} href={project.link} />
        </div>

        {/* Bottom Row: Image Grid (Left 40% vs Right 60%) */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-3 sm:gap-4 md:gap-6 w-full items-stretch">
          {/* Left Column (40% width on md+, 4 cols of 10) */}
          <div className="md:col-span-4 flex flex-col gap-3 sm:gap-4 md:gap-6 justify-between">
            <img
              src={project.images[0]}
              alt={`${project.name} view 1`}
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
              className="w-full rounded-[24px] sm:rounded-[36px] md:rounded-[48px] lg:rounded-[60px] object-cover border border-[#D7E2EA]/10"
              loading="lazy"
            />
            <img
              src={project.images[1]}
              alt={`${project.name} view 2`}
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
              className="w-full rounded-[24px] sm:rounded-[36px] md:rounded-[48px] lg:rounded-[60px] object-cover border border-[#D7E2EA]/10"
              loading="lazy"
            />
          </div>

          {/* Right Column (60% width on md+, 6 cols of 10) */}
          <div className="md:col-span-6 flex">
            <img
              src={project.images[2]}
              alt={`${project.name} main showcase`}
              className="w-full rounded-[24px] sm:rounded-[36px] md:rounded-[48px] lg:rounded-[60px] object-cover border border-[#D7E2EA]/10 min-h-[290px] md:min-h-full"
              loading="lazy"
            />
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
