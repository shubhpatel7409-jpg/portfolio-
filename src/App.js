import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Mail, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Mark
          </div>
          <div className="flex gap-6">
            <a href="#work" className="hover:text-cyan-400 transition text-sm">Work</a>
            <a href="#about" className="hover:text-cyan-400 transition text-sm">About</a>
            <a href="#contact" className="hover:text-cyan-400 transition text-sm">Contact</a>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-3xl text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            I build <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">engaging</span> web experiences
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Responsive websites, smooth interactions, and clean code. From banking platforms to interactive experiences—I deliver pixel-perfect results.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#work" className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-3 rounded-lg transition transform hover:scale-105">
              See My Work
            </a>
            <a href="#contact" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold px-8 py-3 rounded-lg transition">
              Get In Touch
            </a>
          </div>
          <div className="mt-16">
            <ChevronDown className="w-6 h-6 mx-auto text-cyan-400 animate-bounce" />
          </div>
        </div>
      </section>

      <section id="work" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Featured Work</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 h-80 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 border border-cyan-500/20 hover:border-cyan-500/50">
                <div>
                  <h3 className="text-2xl font-bold mb-3">WeChase Bank</h3>
                  <p className="text-slate-300 mb-4">
                    A modern fintech banking interface with loan & mortgage options. Built with smooth animations and responsive design.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-500/30 text-blue-200 px-3 py-1 rounded text-sm">HTML</span>
                  <span className="bg-blue-500/30 text-blue-200 px-3 py-1 rounded text-sm">CSS</span>
                  <span className="bg-blue-500/30 text-blue-200 px-3 py-1 rounded text-sm">JavaScript</span>
                </div>
                <div className="flex gap-4">
                  <a href="https://github.com/shubhpatel7409-jpg/WeChase-Bank-Website" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-pink-600/20 to-rose-600/20 p-8 h-80 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 border border-cyan-500/20 hover:border-cyan-500/50">
                <div>
                  <h3 className="text-2xl font-bold mb-3">Interactive Birthday Experience</h3>
                  <p className="text-slate-300 mb-4">
                    A personalized scrollable experience with interactive game mechanics and hidden messages.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-pink-500/30 text-pink-200 px-3 py-1 rounded text-sm">HTML</span>
                  <span className="bg-pink-500/30 text-pink-200 px-3 py-1 rounded text-sm">CSS</span>
                  <span className="bg-pink-500/30 text-pink-200 px-3 py-1 rounded text-sm">JavaScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">About Me</h2>
          <div className="space-y-6 text-slate-300">
            <p className="text-lg">
              I'm a web developer from Ahmedabad who builds responsive, engaging websites that users actually enjoy. I focus on clean design, smooth interactions, and code that works.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Animations', 'Node.js', 'Design', 'Git'].map((skill) => (
                  <div key={skill} className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-3 text-center">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl text-slate-300 mb-12">
            Looking for a web developer? I'm available for freelance projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:shubhpatel7409@gmail.com" className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-4 rounded-lg transition">
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
            <a href="https://github.com/shubh" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold px-8 py-4 rounded-lg transition">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-slate-700/50 text-center text-slate-400">
        <p>© 2024 Mark. All rights reserved.</p>
      </footer>
    </div>
  );
}