import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';

interface TimelineItem {
  type: 'education' | 'experience';
  title: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  icon: React.ReactNode;
  accentColor: string;
}

const timelineData: TimelineItem[] = [
  {
    type: 'experience',
    title: 'AI / ML Intern',
    organization: 'Coincent.ai',
    period: 'Jun 2024 — Aug 2024',
    location: 'Remote',
    description:
      'Engineered automated feature selection and data preprocessing pipelines. Constructed scalable validation workflows using Python, Scikit-learn, and Oracle Cloud Infrastructure.',
    highlights: [
      '35% reduction in data preparation time',
      'Automated outlier detection & formatting',
      'Built scalable validation workflows on OCI',
    ],
    icon: <Briefcase size={20} />,
    accentColor: '#B600A8',
  },
  {
    type: 'education',
    title: 'B.Tech — Artificial Intelligence & Machine Learning',
    organization: 'MLR Institute of Technology (MLRITM)',
    period: '2021 — 2025',
    location: 'Hyderabad, India',
    description:
      'Specialized in AI/ML with coursework in deep learning, NLP, statistical modeling, and data engineering. Completed multiple end-to-end ML projects.',
    highlights: [
      'Specialization in AI & Machine Learning',
      'End-to-end ML project implementations',
      'Strong foundation in mathematics & statistics',
    ],
    icon: <GraduationCap size={20} />,
    accentColor: '#7621B0',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export const TimelineSection: React.FC = () => {
  return (
    <section
      id="timeline"
      className="relative w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 select-none overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-[15%] right-[-5%] w-[300px] h-[300px] rounded-full bg-[#7621B0]/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[15%] left-[-5%] w-[300px] h-[300px] rounded-full bg-[#B600A8]/8 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col relative z-10">
        {/* Section Heading */}
        <FadeIn delay={0} y={30}>
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none mb-16 sm:mb-20 md:mb-28">
            Journey
          </h2>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-[0.5px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#D7E2EA]/15 to-transparent" />

          <div className="flex flex-col gap-16 md:gap-20">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={cardVariants}
                className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 ${
                  index % 2 === 0
                    ? 'md:flex-row'
                    : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    whileInView={{
                      boxShadow: [
                        `0 0 0px ${item.accentColor}40`,
                        `0 0 20px ${item.accentColor}60`,
                        `0 0 0px ${item.accentColor}40`,
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-12 h-12 rounded-full flex items-center justify-center border-2 bg-[#0C0C0C]"
                    style={{ borderColor: item.accentColor, color: item.accentColor }}
                  >
                    {item.icon}
                  </motion.div>
                </div>

                {/* Empty space for alignment */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content card */}
                <div className="ml-16 md:ml-0 md:w-1/2 group">
                  <div className="relative rounded-[28px] p-[1px] overflow-hidden">
                    {/* Glowing border on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[28px] blur-sm"
                      style={{
                        background: `linear-gradient(135deg, ${item.accentColor}40, transparent)`,
                      }}
                    />

                    <div className="relative rounded-[27px] bg-[#121212]/90 border border-white/[0.08] group-hover:border-transparent p-6 sm:p-7 transition-all duration-500 backdrop-blur-md">
                      {/* Subtle inner glow */}
                      <div
                        className="absolute -top-8 -left-8 w-20 h-20 rounded-full blur-2xl opacity-10 pointer-events-none group-hover:opacity-20 transition-all duration-500"
                        style={{
                          background: `radial-gradient(circle, ${item.accentColor}, transparent)`,
                        }}
                      />

                      {/* Type badge */}
                      <span
                        className="inline-block text-[10px] uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-full mb-4"
                        style={{
                          backgroundColor: `${item.accentColor}15`,
                          color: item.accentColor,
                          border: `1px solid ${item.accentColor}25`,
                        }}
                      >
                        {item.type}
                      </span>

                      <h3 className="text-[#D7E2EA] font-semibold text-lg sm:text-xl mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[#D7E2EA]/80 font-medium text-sm sm:text-base mb-3">
                        {item.organization}
                      </p>

                      {/* Meta info */}
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-[#D7E2EA]/50 text-xs">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar size={12} />
                          {item.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin size={12} />
                          {item.location}
                        </span>
                      </div>

                      <p className="text-[#D7E2EA]/60 font-light text-sm leading-relaxed mb-5">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-col gap-2">
                        {item.highlights.map((highlight, hIdx) => (
                          <div
                            key={hIdx}
                            className="flex items-start gap-2.5 text-xs text-[#D7E2EA]/70"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                              style={{ backgroundColor: item.accentColor }}
                            />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
