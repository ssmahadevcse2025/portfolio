import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaChartLine, FaChartPie, FaDatabase, FaProjectDiagram, FaTools } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

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
    <section id="skills" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <FaTools />
            <span>Technical Inventory</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Skills & <span className="text-gradient-accent">Capabilities</span>
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xl mt-2 font-medium">
            Core technical domains and tools learned through academic coursework and hands-on projects.
          </p>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3"></div>
        </div>

        {/* Skill Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const IconComponent = categoryIcons[idx % categoryIcons.length] || FaTools;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="light-card p-6 border border-slate-200 hover:border-blue-300 transition-all hover:shadow-md bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                    <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                      <IconComponent size={18} />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm tracking-tight">{cat.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-700 transition-all"
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
