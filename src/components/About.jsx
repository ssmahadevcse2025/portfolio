import React from 'react';
import { motion } from 'framer-motion';
import { FaChartBar, FaBrain, FaChartPie, FaLaptopCode, FaFingerprint } from 'react-icons/fa';
import { FiCheckCircle, FiCompass, FiTerminal } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

const iconMap = {
  FaChartBar,
  FaBrain,
  FaChartPie,
  FaLaptopCode
};

export default function About() {
  const { aboutSummary, aboutHighlights, currentlyExploring } = portfolioData;

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <FaFingerprint className="text-cyan-400" />
            <span>PRIMARY DOSSIER // 01</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            About <span className="text-gradient-cyan text-glow-cyan">The Architect</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Bio Dossier — Left (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="cyber-card p-6 sm:p-8 bg-[#0a0f1d]/90 border-cyan-500/20 flex-1 flex flex-col justify-between scanlines">
              <div>
                {/* Header Sub-bar */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 font-mono text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <FiTerminal /> BIOGRAPHICAL OVERVIEW
                  </span>
                  <span className="text-emerald-400 font-bold">STATUS: ACTIVE STUDENT</span>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line font-normal mb-6">
                  {aboutSummary}
                </p>
              </div>

              {/* Research & Interest Matrix */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs font-mono uppercase text-slate-400 tracking-wider block mb-3 font-semibold">
                  FOCUS DOMAINS & INTERESTS:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentlyExploring.map((tech, idx) => (
                    <span
                      key={idx}
                      onMouseEnter={() => soundFx.playHover()}
                      className="px-3 py-1 rounded-lg bg-[#030712] border border-white/10 hover:border-cyan-500/50 hover:text-cyan-300 text-slate-300 text-xs font-mono transition-all cursor-default"
                    >
                      # {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4 Pillars Grid — Right (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {aboutHighlights.map((item, idx) => {
              const IconComp = iconMap[item.icon] || FaChartBar;
              const glowClass = idx % 2 === 0 ? 'cyber-card' : 'cyber-card cyber-card-purple';
              return (
                <div 
                  key={idx} 
                  onMouseEnter={() => soundFx.playHover()}
                  className={`${glowClass} p-5 border-white/10 hover:border-cyan-400/50 transition-all flex flex-col justify-between group cursor-default`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#030712] border border-cyan-500/30 text-cyan-400 group-hover:text-white group-hover:bg-cyan-500 flex items-center justify-center mb-4 transition-all group-hover:shadow-[0_0_20px_rgba(0,240,255,0.6)]">
                    <IconComp size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base mb-1 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
