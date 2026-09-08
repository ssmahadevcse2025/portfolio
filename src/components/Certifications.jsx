import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaCheckCircle } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <FaCertificate />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Certifications & <span className="text-gradient-accent">Learning</span>
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="light-card p-6 border border-slate-200 bg-white flex flex-col justify-between hover:border-blue-300 transition-all group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FaCertificate size={18} />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 block w-fit mb-2">
                  {cert.category}
                </span>
                <h3 className="font-extrabold text-slate-900 text-base mb-1">{cert.title}</h3>
                <h4 className="text-xs font-semibold text-slate-600">{cert.issuer}</h4>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-emerald-600 text-xs font-semibold">
                <FaCheckCircle size={14} />
                <span>Verified Qualification</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
