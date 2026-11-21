import React from 'react';
import { FadeIn } from './FadeIn';
import { Github, Code2, ArrowUpRight } from 'lucide-react';

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
    icon: <Github size={24} />,
    stats: [
      { label: 'Repositories', value: '15+' },
      { label: 'Contributions', value: '200+' },
      { label: 'Primary Lang', value: 'Python' },
    ],
    accentColor: '#efece7',
    description:
      'Open-source machine learning pipelines, FastAPI microservices, and end-to-end full-stack AI platforms.',
  },
  {
    platform: 'LeetCode',
    username: 'shaikhadnan',
    url: 'https://leetcode.com/shaikhadnan',
    icon: <Code2 size={24} />,
    stats: [
      { label: 'Problems Solved', value: '100+' },
      { label: 'Focus Areas', value: 'DSA & ML' },
      { label: 'Language', value: 'Python' },
    ],
    accentColor: '#f1903a',
    description:
      'Algorithmic problem solving focusing on dynamic programming, arrays, graph algorithms, and optimization.',
  },
];

export const CodingProfilesSection: React.FC = () => {
  return (
    <section
      id="coding-profiles"
      className="relative w-full bg-[#121110] abhishek-grid py-24 sm:py-32 px-5 sm:px-8 lg:px-12 select-none overflow-hidden border-t border-white/[0.06]"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#f1903a]/06 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <FadeIn delay={0.1} y={20}>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[#f1903a]">
                  07 // Coding Profiles
                </span>
                <div className="h-px w-12 bg-[#f1903a]/30" />
              </div>
            </FadeIn>

            <FadeIn delay={0.15} y={20}>
              <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl tracking-[-0.03em] text-[#efece7]">
                <span>Competitive</span> <span className="text-[#8a857e]">// Code & Open Source</span>
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} y={15}>
            <p className="font-mono text-xs text-[#8a857e] uppercase tracking-wider">
              [ Active Public Profiles ]
            </p>
          </FadeIn>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profiles.map((profile, index) => (
            <FadeIn key={profile.platform} delay={index * 0.15} y={30} className="w-full">
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full rounded-[28px] overflow-hidden border border-white/[0.08] hover:border-[#f1903a]/40 bg-[#181614]/90 backdrop-blur-md p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(241,144,58,0.08)] group text-left"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10"
                      style={{
                        backgroundColor: `${profile.accentColor}12`,
                        color: profile.accentColor,
                      }}
                    >
                      {profile.icon}
                    </div>
                    <div>
                      <h3
                        className="font-display font-semibold text-xl tracking-tight"
                        style={{ color: profile.accentColor }}
                      >
                        {profile.platform}
                      </h3>
                      <p className="font-mono text-xs text-[#8a857e]">
                        @{profile.username}
                      </p>
                    </div>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#8a857e] group-hover:text-[#f1903a] group-hover:border-[#f1903a]/40 transition-colors">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                <p className="font-sans text-sm text-[#8a857e] leading-relaxed mb-6">
                  {profile.description}
                </p>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 pt-5 border-t border-white/[0.06]">
                  {profile.stats.map((stat, sIdx) => (
                    <div key={sIdx} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.03] text-center">
                      <span className="block font-display font-bold text-base sm:text-lg text-[#efece7]">
                        {stat.value}
                      </span>
                      <span className="block font-mono text-[10px] text-[#8a857e] uppercase tracking-wider mt-0.5">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};
