import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, MessageSquarePlus, Sparkles, Shield, Github, Menu, X, ExternalLink } from 'lucide-react';

interface NavbarProps {
  onOpenFeedback: () => void;
  onScrollToDownload: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenFeedback, onScrollToDownload }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#030712]/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-black/80' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand identity */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-0.5 shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/50 transition-all duration-300">
            <div className="w-full h-full bg-[#030712] rounded-[10px] flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-cyan-400 group-hover:rotate-180 transition-transform duration-700" fill="none" stroke="currentColor" strokeWidth="2.2">
                <circle cx="12" cy="12" r="3" fill="#38bdf8" />
                <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(30 12 12)" />
                <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(-30 12 12)" />
                <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(90 12 12)" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-cyan-300 transition-colors">Clue AI</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 font-semibold">v5.9.9</span>
            </div>
            <span className="text-[11px] text-slate-400 hidden sm:inline-block">Interview Intelligence Copilot</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 glass-pill px-4 py-1.5 rounded-full text-xs font-medium text-slate-300 shadow-inner">
          <a href="#features" className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-colors">Features</a>
          <a href="#preview" className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-colors">Live Dock Demo</a>
          <a href="#downloads" className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-colors">Downloads</a>
          <a href="https://github.com/HelloWorld-Farhan/ClueAi" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-colors flex items-center gap-1.5">
            <Github size={13} /> GitHub
          </a>
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenFeedback}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 transition-all duration-200"
          >
            <MessageSquarePlus size={14} className="text-cyan-400" />
            <span>Feedback</span>
          </button>

          <button
            onClick={onScrollToDownload}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 neon-glow-btn transition-all duration-200"
          >
            <Download size={14} />
            <span>Download App</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#030712]/95 border-b border-white/10 px-6 py-4 flex flex-col gap-3 text-sm font-medium"
          >
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white py-1">Features</a>
            <a href="#preview" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white py-1">Live Dock Demo</a>
            <a href="#downloads" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white py-1">Downloads</a>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenFeedback(); }}
              className="flex items-center gap-2 text-cyan-400 py-1 text-left"
            >
              <MessageSquarePlus size={16} /> Send Feedback & Suggestions
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onScrollToDownload(); }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold"
            >
              <Download size={16} /> Download Clue AI v5.9.9
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

