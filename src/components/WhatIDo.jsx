import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaMicrochip, FaChartLine, FaCode, FaRocket } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

const iconMap = {
  FaSearch,
  FaCpu: FaMicrochip,
  FaChartLine,
  FaCode
};

export default function WhatIDo() {
  const { whatIDo } = portfolioData;

  return (
    <section id="what-i-do" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-3">
            <FaRocket className="text-emerald-400" />
            <span>SPECIALIZED DIRECTIVES // 04</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Core <span className="text-gradient-cyan text-glow-cyan">Directives</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mt-3 font-mono">
            Translating complex data metrics into predictive machine intelligence and resilient software systems.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full mt-4"></div>
        </div>

        {/* 4 Directives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatIDo.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || FaCode;
            const glowStyles = [
              'hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]',
              'hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]',
              'hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]',
              'hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]'
            ];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onMouseEnter={() => soundFx.playHover()}
                className={`cyber-card p-6 border-white/10 ${glowStyles[idx % 4]} transition-all bg-[#0a0f1d]/90 flex flex-col justify-between group scanlines cursor-default`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#030712] border border-white/10 text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                    <IconComponent size={22} />
                  </div>
                  <h3 className="font-extrabold text-white text-base mb-2 group-hover:text-cyan-300 transition-colors font-mono">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>MODULE 0{idx + 1}</span>
                  <span className="text-cyan-400 font-bold">ACTIVE</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
