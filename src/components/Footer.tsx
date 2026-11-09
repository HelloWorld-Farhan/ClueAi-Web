import React from 'react';
import { Github, Globe, Mail, Heart, Shield, Sparkles, ExternalLink, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenFeedback: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenFeedback }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#01040a] border-t border-white/10 pt-16 pb-12 overflow-hidden text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Column 1: Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <circle cx="12" cy="12" r="3" fill="#ffffff" />
                  <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(30 12 12)" />
                  <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(-30 12 12)" />
                </svg>
              </div>
              <span className="font-extrabold text-base text-white tracking-tight">Clue AI</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              The high-performance invisible AI copilot engineered for software engineers, coding interviews, and real-time live assistance.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-cyan-400 font-mono">
              <Shield size={13} />
              <span>Version 5.9.9 &bull; Production Stable</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-cyan-400 transition-colors">Features &amp; Architecture</a></li>
              <li><a href="#preview" className="hover:text-cyan-400 transition-colors">Interactive Live Dock</a></li>
              <li><a href="#downloads" className="hover:text-cyan-400 transition-colors">Windows &amp; macOS Downloads</a></li>
              <li>
                <button onClick={onOpenFeedback} className="hover:text-cyan-400 transition-colors text-left">
                  Submit Feedback &amp; Ideas
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Repositories & Cloudflare */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">Ecosystem</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/HelloWorld-Farhan/ClueAi" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <Github size={13} /> <span>Clue AI Desktop App</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/HelloWorld-Farhan/ClueAi-Web" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <Globe size={13} /> <span>Clue AI Web Repository</span>
                </a>
              </li>
              <li>
                <a href="https://farhan-khalid-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <ExternalLink size={13} /> <span>Developer Portfolio</span>
                </a>
              </li>
              <li className="flex items-center gap-1.5 text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <span>Optimized for Cloudflare Pages</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Support */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">Support</h4>
            <p className="text-slate-400 text-xs">
              Questions, enterprise inquiries, or feature suggestions?
            </p>
            <a
              href="mailto:clueai.support@gmail.com"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-300 font-mono text-xs transition-colors"
            >
              <Mail size={14} />
              <span>clueai.support@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; 2026 Clue AI. Developed with <Heart size={11} className="inline text-rose-500" /> by{' '}
            <a href="https://farhan-khalid-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 font-semibold underline underline-offset-2">
              Farhan Khalid
            </a>. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
};

