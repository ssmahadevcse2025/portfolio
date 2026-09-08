import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import WhatIDo from './components/WhatIDo';
import Workflow from './components/Workflow';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import OnlineProfiles from './components/OnlineProfiles';
import ResumeCTA from './components/ResumeCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <WhatIDo />
        <Workflow />
        <Projects />
        <Experience />
        <Achievements />
        <Certifications />
        <OnlineProfiles />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
