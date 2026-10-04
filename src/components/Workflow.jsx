import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaDatabase, FaBroom, FaChartBar, FaBrain, FaEye, FaRocket } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

const iconMap = {
  FaLightbulb,
  FaDatabase,
  FaBroom,
  FaChartBar,
  FaBrain,
  FaEye,
  FaRocket
};

export default function Workflow() {
  const { workflow } = portfolioData;

  return (
    <section id="workflow" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <FaBrain className="text-cyan-400" />
            <span>PIPELINE PROTOCOL // 05</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Data Science <span className="text-gradient-cyan text-glow-cyan">Pipeline</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mt-3 font-mono">
            Systematic engineering workflow: from initial telemetry ingestion to trained machine intelligence deployment.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mt-4"></div>
        </div>

        {/* Horizontal Pipeline Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {workflow.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || FaLightbulb;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                onMouseEnter={() => soundFx.playHover()}
                className="cyber-card p-4 border-white/10 hover:border-cyan-500/50 transition-all text-center flex flex-col items-center justify-between bg-[#0a0f1d]/90 relative group scanlines cursor-default"
              >
                {/* Step Number Tag */}
                <span className="text-[10px] font-mono font-bold text-cyan-400 bg-[#030712] px-2.5 py-0.5 rounded border border-cyan-500/30 mb-2">
                  STAGE {item.step}
                </span>

                {/* Icon with Neon Ring */}
                <div className="w-11 h-11 rounded-xl bg-[#030712] border border-white/10 text-cyan-400 flex items-center justify-center mb-3 group-hover:bg-cyan-500 group-hover:text-slate-950 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.8)] transition-all">
                  <IconComponent size={18} />
                </div>

                {/* Step Name & Label */}
                <div>
                  <h3 className="font-bold text-white text-xs mb-0.5 font-mono group-hover:text-cyan-300 transition-colors">{item.name}</h3>
                  <p className="text-[10px] text-slate-400 font-medium leading-tight font-mono">{item.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
