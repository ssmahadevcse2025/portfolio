import React from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiMail, FiArrowRight } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';

export default function ResumeCTA() {
  const { personalInfo } = portfolioData;

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="resume-cta" className="py-20 bg-gradient-soft border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="light-card p-8 sm:p-12 bg-white/90 border border-blue-200/80 shadow-lg relative overflow-hidden"
        >
          <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center mx-auto mb-5 shadow-xs">
            <FiFileText size={26} />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Let's Build Something Intelligent
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed font-normal">
            Interested in Data Science, AI/ML, or innovative software projects? Let's connect and build something meaningful.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02] flex items-center gap-2"
            >
              <FiFileText size={16} />
              <span>View Resume</span>
            </a>

            <button
              onClick={scrollToContact}
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs border border-slate-300 shadow-2xs transition-all hover:scale-[1.02] flex items-center gap-2"
            >
              <FiMail size={16} className="text-blue-600" />
              <span>Get In Touch</span>
              <FiArrowRight size={14} />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
