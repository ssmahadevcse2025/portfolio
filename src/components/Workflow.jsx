import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaDatabase, FaBroom, FaChartBar, FaBrain, FaEye, FaRocket, FaArrowRight } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

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
    <section id="workflow" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <FaBrain />
            <span>Structured Methodology</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Data Science <span className="text-gradient-accent">Workflow</span>
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xl mt-2 font-medium">
            How I approach data problems — from raw ingestion to model evaluation and actionable software solution.
          </p>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3"></div>
        </div>

        {/* Horizontal Pipeline Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {workflow.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || FaLightbulb;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.07 }}
                className="light-card p-4 border border-slate-200 hover:border-blue-300 transition-all text-center flex flex-col items-center justify-between bg-white relative group"
              >
                {/* Step Number Tag */}
                <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60 mb-2">
                  STEP {item.step}
                </span>

                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 text-blue-600 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <IconComponent size={18} />
                </div>

                {/* Step Name & Label */}
                <div>
                  <h3 className="font-extrabold text-slate-900 text-xs mb-0.5">{item.name}</h3>
                  <p className="text-[10px] text-slate-500 font-medium leading-tight">{item.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
