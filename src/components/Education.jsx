import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaUniversity, FaSchool } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <FaGraduationCap />
            <span>Academic Pathway</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Academic <span className="text-gradient-accent">Education</span>
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3"></div>
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="light-card p-6 border border-slate-200 hover:border-blue-300 transition-all relative overflow-hidden bg-white"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-blue-50 text-blue-600 mt-1">
                    {idx === 0 ? <FaUniversity size={20} /> : <FaSchool size={20} />}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base">{item.institution}</h3>
                    <h4 className="text-sm font-semibold text-blue-600 mt-0.5">{item.degree}</h4>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 font-mono text-xs font-semibold">
                  <FaCalendarAlt size={12} className="text-blue-600" />
                  <span>{item.years}</span>
                </div>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2 pl-14">
                {item.details}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
