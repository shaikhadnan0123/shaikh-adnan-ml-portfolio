import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { Github, ExternalLink, Code2, GitBranch, Star } from 'lucide-react';

interface ProfileCard {
  platform: string;
  username: string;
  url: string;
  icon: React.ReactNode;
  stats: { label: string; value: string }[];
  accentColor: string;
  description: string;
}

const profiles: ProfileCard[] = [
  {
    platform: 'GitHub',
    username: 'shaikhadnan0123',
    url: 'https://github.com/shaikhadnan0123',
    icon: <Github size={28} />,
    stats: [
      { label: 'Repositories', value: '15+' },
      { label: 'Contributions', value: '200+' },
      { label: 'Languages', value: '5+' },
    ],
    accentColor: '#D7E2EA',
    description:
      'Open source ML projects, end-to-end pipelines, and collaborative development.',
  },
  {
    platform: 'LeetCode',
    username: 'shaikhadnan',
    url: 'https://leetcode.com/shaikhadnan',
    icon: <Code2 size={28} />,
    stats: [
      { label: 'Problems Solved', value: '100+' },
      { label: 'Contest Rating', value: '1500+' },
      { label: 'Streak Days', value: '30+' },
    ],
    accentColor: '#FFA116',
    description:
      'Algorithmic problem solving in Python & C++, focused on data structures and optimization.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
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

export const CodingProfilesSection: React.FC = () => {
  return (
    <section
      id="coding-profiles"
      className="relative w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 select-none overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute top-[30%] left-[-8%] w-[280px] h-[280px] rounded-full bg-[#FFA116]/6 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-8%] w-[280px] h-[280px] rounded-full bg-[#00B68A]/6 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col relative z-10">
        {/* Section Heading */}
        <FadeIn delay={0} y={30}>
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none mb-6 sm:mb-8">
            Profiles
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} y={20}>
          <p className="text-[#D7E2EA]/50 text-center text-sm sm:text-base uppercase tracking-[0.15em] font-light mb-16 sm:mb-20 md:mb-24 max-w-lg mx-auto">
            Where I code, contribute & compete
          </p>
        </FadeIn>

        {/* Profile Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {profiles.map((profile) => (
            <motion.a
              key={profile.platform}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative rounded-[32px] p-[1.5px] overflow-hidden block"
            >
              {/* Glowing border on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px] blur-sm"
                style={{
                  background: `linear-gradient(135deg, ${profile.accentColor}40, transparent, ${profile.accentColor}20)`,
                }}
              />

              <div className="relative h-full rounded-[30.5px] bg-[#121212]/90 border border-white/[0.08] group-hover:border-transparent p-6 sm:p-8 flex flex-col gap-6 transition-all duration-500 backdrop-blur-md">
                {/* Inner subtle glow */}
                <div
                  className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-2xl opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle, ${profile.accentColor}, transparent)`,
                  }}
                />

                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{
                        backgroundColor: `${profile.accentColor}12`,
                        color: profile.accentColor,
                      }}
                    >
                      {profile.icon}
                    </div>
                    <div>
                      <h3
                        className="font-semibold text-lg uppercase tracking-wide"
                        style={{ color: profile.accentColor }}
                      >
                        {profile.platform}
                      </h3>
                      <p className="text-[#D7E2EA]/50 text-xs font-mono">
                        @{profile.username}
                      </p>
                    </div>
                  </div>
                  <ExternalLink
                    size={18}
                    className="text-[#D7E2EA]/30 group-hover:text-[#D7E2EA]/70 transition-colors duration-300"
                  />
                </div>

                {/* Description */}
                <p className="text-[#D7E2EA]/55 font-light text-sm leading-relaxed">
                  {profile.description}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3 mt-auto">
                  {profile.stats.map((stat, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex flex-col items-center gap-1 py-3 rounded-xl bg-white/[0.02] border border-white/[0.04]"
                    >
                      <span
                        className="text-lg sm:text-xl font-bold"
                        style={{ color: profile.accentColor }}
                      >
                        {stat.value}
                      </span>
                      <span className="text-[10px] text-[#D7E2EA]/40 uppercase tracking-wider font-medium">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Decorative dots */}
                <div className="flex items-center gap-2 justify-center">
                  {[GitBranch, Star, Code2].map((Icon, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        opacity: [0.15, 0.4, 0.15],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    >
                      <Icon size={12} className="text-[#D7E2EA]" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
