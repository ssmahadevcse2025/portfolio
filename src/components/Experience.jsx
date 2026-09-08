import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaUniversity, FaCheckCircle, FaAward } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <FaBriefcase />
            <span>Practical Background</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Academic & Practical <span className="text-gradient-accent">Experience</span>
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xl mt-2 font-medium">
            Applied project engineering, data analysis, machine learning exploration, and full-stack software development.
          </p>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3"></div>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-3xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="light-card p-6 sm:p-8 border border-slate-200 bg-white"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4 pb-4 border-b border-slate-100">
              <div>
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-mono font-bold uppercase inline-block mb-2">
                  Academic & Project Experience
                </span>
                <h3 className="text-xl font-extrabold text-slate-900">Student Developer & Data Engineering Practitioner</h3>
                <h4 className="text-sm font-semibold text-blue-600 mt-0.5">Chennai Institute of Technology</h4>
              </div>

              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-mono text-xs font-semibold">
                <FaCalendarAlt className="text-blue-600" />
                <span>2025 – Present</span>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Key Contributions & Highlights:</h5>
              <div className="space-y-2">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <FaCheckCircle className="text-blue-600 text-sm mt-0.5 flex-shrink-0" />
                  <span>Developed AI-powered crime analytics dashboard (**DataHawks**) using Python, Streamlit, Scikit-learn, and spatial clustering algorithms.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <FaCheckCircle className="text-blue-600 text-sm mt-0.5 flex-shrink-0" />
                  <span>Built healthcare queue management portal (**Queue Cure**) using React, Node.js, Express, and MongoDB document storage.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <FaCheckCircle className="text-blue-600 text-sm mt-0.5 flex-shrink-0" />
                  <span>Created smart temple crowd and pilgrim safety monitoring platform (**DarshanAI**) with real-time maps and alert triggers.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <FaCheckCircle className="text-blue-600 text-sm mt-0.5 flex-shrink-0" />
                  <span>Completed industry learning credentials from Cisco Networking Academy (Python), IBM SkillsBuild (Data Fundamentals), and MongoDB.</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
              <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">Python</span>
              <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">Data Analytics</span>
              <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">Machine Learning</span>
              <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">Streamlit</span>
              <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">MERN Stack</span>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
