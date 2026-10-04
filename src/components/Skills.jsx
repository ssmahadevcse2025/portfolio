import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaChartLine, FaChartPie, FaDatabase, FaProjectDiagram, FaTools, FaTerminal } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

const categoryIcons = [
  FaCode,
  FaBrain,
  FaChartLine,
  FaChartPie,
  FaDatabase,
  FaProjectDiagram,
  FaTools
];

export default function Skills() {
  const { skillCategories } = portfolioData;

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <FaTools className="text-cyan-400" />
            <span>NEURAL MATRIX // 03</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Technical <span className="text-gradient-cyan text-glow-cyan">Capabilities</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mt-3 font-mono">
            Categorized technical stack, programming competencies, and machine learning toolkits.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mt-4"></div>
        </div>

        {/* Skill Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const IconComponent = categoryIcons[idx % categoryIcons.length] || FaTools;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onMouseEnter={() => soundFx.playHover()}
                className="cyber-card p-6 border-white/10 hover:border-cyan-500/40 transition-all bg-[#0a0f1d]/90 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2.5 rounded-xl bg-[#030712] border border-cyan-500/30 text-cyan-400 group-hover:text-cyan-300 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
                        <IconComponent size={18} />
                      </div>
                      <h3 className="font-bold text-white text-sm tracking-wide font-mono">{cat.category}</h3>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 bg-[#030712] px-2 py-0.5 rounded border border-white/5">
                      {cat.skills.length} MODULES
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        onMouseEnter={() => soundFx.playHover()}
                        className="px-3 py-1.5 rounded-lg bg-[#030712]/90 border border-white/10 text-slate-300 text-xs font-mono hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(0,240,255,0.3)] transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
