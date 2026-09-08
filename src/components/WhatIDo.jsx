import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaMicrochip, FaChartLine, FaCode, FaRocket } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  FaSearch,
  FaCpu: FaMicrochip,
  FaChartLine,
  FaCode
};

export default function WhatIDo() {
  const { whatIDo } = portfolioData;

  return (
    <section id="what-i-do" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <FaRocket />
            <span>Core Focus</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            What <span className="text-gradient-accent">I Do</span>
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xl mt-2 font-medium">
            Transforming raw data into actionable insights and building practical technology applications.
          </p>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3"></div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatIDo.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || FaCode;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="light-card p-6 border border-slate-200 hover:border-blue-300 transition-all hover:shadow-md bg-white flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <IconComponent size={22} />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
