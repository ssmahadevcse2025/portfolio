import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiExternalLink, FiCompass, FiCpu } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

export default function OnlineProfiles() {
  const { personalInfo, currentlyExploring } = portfolioData;

  const profiles = [
    {
      name: "GitHub",
      subtitle: "Open-Source Repositories & Commits",
      url: personalInfo.github,
      icon: FiGithub,
      color: "text-white",
      borderColor: "hover:border-cyan-500/50",
      glow: "hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]"
    },
    {
      name: "LinkedIn",
      subtitle: "Professional Network & Career Milestones",
      url: personalInfo.linkedin,
      icon: FiLinkedin,
      color: "text-cyan-400",
      borderColor: "hover:border-blue-500/50",
      glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
    },
    {
      name: "LeetCode",
      subtitle: "440+ Solved | 100 Day Badge",
      url: personalInfo.leetcode,
      icon: SiLeetcode,
      color: "text-amber-400",
      borderColor: "hover:border-amber-500/50",
      glow: "hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <FiExternalLink className="text-cyan-400" />
            <span>GLOBAL MATRIX CHANNELS // 10</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Online <span className="text-gradient-cyan text-glow-cyan">Footprint</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mt-4"></div>
        </div>

        {/* 3 Cyber Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {profiles.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <motion.a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.1 }}
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => soundFx.playClick(600)}
                className={`cyber-card p-6 border-white/10 ${p.borderColor} ${p.glow} bg-[#0a0f1d]/90 flex flex-col justify-between transition-all group scanlines`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#030712] border border-white/10 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComp size={24} className={p.color} />
                  </div>
                  <h3 className="font-extrabold text-white text-lg group-hover:text-cyan-400 transition-colors flex items-center justify-between font-mono">
                    <span>{p.name}</span>
                    <FiExternalLink size={14} className="text-slate-500 group-hover:text-cyan-400" />
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-1">{p.subtitle}</p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Currently Exploring Tags Matrix */}
        <div className="max-w-4xl mx-auto cyber-card p-6 sm:p-8 bg-[#0a0f1d]/90 border-purple-500/30 text-center scanlines">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/80 text-purple-300 border border-purple-500/30 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <FiCompass />
            <span>LEARNING HORIZON & RESEARCH</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white font-mono mb-2">
            Active Exploration Subjects
          </h3>
          <p className="text-xs text-slate-400 max-w-lg mx-auto mb-6 font-mono">
            Areas of algorithmic theory, computer science, and data engineering under active study.
          </p>

          <div className="flex flex-wrap justify-center gap-2.5">
            {currentlyExploring.map((area) => (
              <span
                key={area}
                onMouseEnter={() => soundFx.playHover()}
                className="px-4 py-2 rounded-xl bg-[#030712] border border-white/10 hover:border-purple-500/50 hover:text-purple-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] text-slate-300 text-xs font-mono transition-all cursor-default"
              >
                # {area}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
