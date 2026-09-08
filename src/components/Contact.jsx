import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiSend, FiCheckCircle } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personalInfo } = portfolioData;

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 6000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <FiMail />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Let's <span className="text-gradient-accent">Connect</span>
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xl mt-2 font-medium">
            I'm interested in internships, collaborations, learning opportunities, and projects related to Data Science, AI/ML, data analysis, and software development.
          </p>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info & Social Cards (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="light-card p-6 border border-slate-200 bg-slate-50/50 space-y-4">
              <h3 className="text-base font-extrabold text-slate-900 mb-4">Contact Information</h3>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:scale-105 transition-transform">
                  <FiMail size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">Email</span>
                  <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {personalInfo.email}
                  </span>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:scale-105 transition-transform">
                  <FiPhone size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">Phone</span>
                  <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    +91 {personalInfo.phone}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200">
                <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600">
                  <FiMapPin size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">Location</span>
                  <span className="text-xs font-bold text-slate-900">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              {/* Social Links Row */}
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 font-bold">Profiles:</span>
                <div className="flex items-center gap-2">
                  <a href={personalInfo.github} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-blue-600" title="GitHub">
                    <FiGithub size={16} />
                  </a>
                  <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-blue-600" title="LinkedIn">
                    <FiLinkedin size={16} />
                  </a>
                  <a href={personalInfo.leetcode} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-amber-600" title="LeetCode">
                    <SiLeetcode size={16} />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="light-card p-6 sm:p-8 border border-slate-200 bg-white">
              <h3 className="text-base font-extrabold text-slate-900 mb-1">Send a Message</h3>
              <p className="text-xs text-slate-500 mb-6">
                Fill out the fields below to send your inquiry or project message.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                  <FiCheckCircle className="text-emerald-600 text-3xl mx-auto" />
                  <h4 className="font-extrabold text-slate-900 text-sm">Message Prepared!</h4>
                  <p className="text-xs text-slate-600">
                    Thank you for reaching out, {formData.name}! Your message has been logged. I will respond to <strong>{formData.email}</strong> shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 uppercase mb-1 font-bold">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-blue-500 focus:bg-white transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 uppercase mb-1 font-bold">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-blue-500 focus:bg-white transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 uppercase mb-1 font-bold">Message</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="State your project, opportunity, or collaboration inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-blue-500 focus:bg-white transition-all font-medium resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs shadow-sm transition-all hover:scale-[1.01] flex items-center justify-center gap-2"
                  >
                    <FiSend size={14} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
