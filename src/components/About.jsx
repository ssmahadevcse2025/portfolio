import React from 'react';
import { motion } from 'framer-motion';
import { FaChartBar, FaBrain, FaChartPie, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  FaChartBar,
  FaBrain,
  FaChartPie,
  FaLaptopCode
};

export default function About() {
  const { aboutSummary, aboutHighlights } = portfolioData;

  return (
    <section id="about" className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <FaGraduationCap />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            About <span className="text-gradient-accent">Me</span>
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main About Text (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-4"
          >
            <div className="light-card p-6 sm:p-8 bg-slate-50/50 border border-slate-200">
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line font-normal">
                {aboutSummary}
              </p>
            </div>
          </motion.div>

          {/* 4 Highlight Cards Grid (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {aboutHighlights.map((item, idx) => {
              const IconComp = iconMap[item.icon] || FaChartBar;
              return (
                <div key={idx} className="light-card p-5 border border-slate-200 hover:border-blue-300 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                    <IconComp size={20} />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-0.5">{item.title}</h3>
                  <p className="text-xs text-slate-500 font-medium">{item.subtitle}</p>
                </div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
