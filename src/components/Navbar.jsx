import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiFileText, FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { portfolioData } from '../data/portfolioData';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'education', 'skills', 'what-i-do', 'workflow', 'projects', 'experience', 'achievements', 'certifications', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md py-3 border-b border-slate-200/80 shadow-xs' 
        : 'bg-white/60 backdrop-blur-xs py-4 border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo / Name */}
        <button 
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 text-left group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-extrabold text-sm shadow-sm group-hover:scale-105 transition-transform">
            SM
          </div>
          <div>
            <span className="font-extrabold text-slate-900 text-sm tracking-tight block group-hover:text-blue-600 transition-colors">
              Shenbaga Maha Devan S
            </span>
            <span className="text-[11px] text-slate-500 font-mono block">
              Data Science & AI/ML
            </span>
          </div>
        </button>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1 rounded-full border border-slate-200/80">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeSection === item.id
                  ? 'bg-white text-blue-600 shadow-xs border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Highlighted Resume Button & Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={portfolioData.personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs font-bold shadow-sm shadow-blue-500/20 transition-all hover:scale-[1.02]"
          >
            <FiFileText size={14} />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 mt-2 shadow-lg animate-fadeIn">
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeSection === item.id
                    ? 'bg-blue-50 text-blue-600 border border-blue-200/60'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}

            <a
              href={portfolioData.personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold shadow-sm"
            >
              <FiFileText size={14} />
              <span>Download Resume PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
