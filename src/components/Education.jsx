import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaUniversity, FaSchool } from 'react-icons/fa';
import { FiCheckCircle } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-400 text-xs font-mono uppercase tracking-widest mb-3">
            <FaGraduationCap className="text-purple-400" />
            <span>ACADEMIC CIRCUIT // 02</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Academic <span className="text-gradient-purple text-glow-purple">Pedigree</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mt-4"></div>
        </div>

        {/* Timeline Circuit */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Glowing Circuit Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-emerald-500 sm:-translate-x-1/2 shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>

          <div className="space-y-8">
            {education.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-6 pl-10 sm:pl-0`}
                >
                  {/* Central Node Badge */}
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-[#030712] border-2 border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.8)] flex items-center justify-center text-cyan-300 z-10">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                  </div>

                  {/* Card Half */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <div className="cyber-card p-6 border-white/10 hover:border-cyan-500/40 transition-all bg-[#0a0f1d]/90 scanlines">
                      <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-white/10">
                        <div className="flex items-center gap-2">
                          <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                            {idx === 0 ? <FaUniversity size={16} /> : <FaSchool size={16} />}
                          </div>
                          <span className="text-xs font-mono font-bold text-cyan-400">
                            {item.status}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#030712] border border-white/10 text-slate-300 font-mono text-[11px]">
                          <FaCalendarAlt size={10} className="text-cyan-400" />
                          <span>{item.years}</span>
                        </div>
                      </div>

                      <h3 className="font-extrabold text-white text-base tracking-tight mb-1">
                        {item.institution}
                      </h3>
                      <h4 className="text-xs font-semibold text-purple-300 mb-3 font-mono">
                        {item.degree}
                      </h4>

                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
                        {item.details}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
