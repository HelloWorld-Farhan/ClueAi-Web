import React, { useState, useEffect } from 'react';
import { APP_VERSION_TAG } from '../config/version';

interface NavbarProps {
  activeView: 'arc' | 'ambient' | 'download';
  setActiveView: (view: 'arc' | 'ambient' | 'download') => void;
  onOpenFeedback: () => void;
}

export function Navbar({ activeView, setActiveView, onOpenFeedback }: NavbarProps) {
  // Real-time live 24-hour clock and dynamic calendar date
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const month = now.toLocaleString('en-US', { month: 'short' }).toUpperCase();

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-3.5 bg-gradient-to-b from-black/95 via-black/80 to-transparent backdrop-blur-[6px] border-b border-white/[0.04] select-none">
      {/* Left: Brand Identity with Official Clue AI Logo Icon */}
      <div
        className="flex items-center space-x-3 cursor-pointer group"
        data-purpose="brand-identity"
        onClick={() => setActiveView('ambient')}
      >
        <div className="w-8 h-8 rounded-full border border-[#00E85D]/70 flex items-center justify-center bg-black/80 shadow-[0_0_12px_rgba(0,232,93,0.35)] overflow-hidden p-0.5 group-hover:shadow-[0_0_18px_rgba(0,232,93,0.6)] transition-all">
          <img src="/logo.png" alt="Clue AI" className="w-full h-full object-contain rounded-full" />
        </div>
        <div className="flex items-baseline space-x-2">
          <span className="text-white font-bold text-lg tracking-tight group-hover:text-emerald-300 transition-colors">
            Clue AI
          </span>
          <span className="text-neutral-400 text-sm font-normal hidden sm:inline">
            · The Undetected Copilot
          </span>
        </div>
      </div>

      {/* Center: Live Real-Time 24-Hour Clock & Dynamic Date Pill */}
      <div className="hidden lg:flex items-center space-x-3 bg-neutral-950/80 border border-neutral-800/80 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(0,232,93,0.1)] hover:border-[#00E85D]/50 transition-colors">
        {/* Dynamic Day and Month */}
        <div className="flex items-center space-x-1.5">
          <span className="w-2 h-2 rounded-full bg-[#00E85D] animate-ping" />
          <span className="text-[11px] font-mono font-bold text-white tracking-wider">{day} {month}</span>
        </div>
        <span className="text-neutral-600">|</span>
        {/* Live real-time 24-hour clock */}
        <div className="text-xs font-mono font-bold text-[#00E85D] tracking-wider drop-shadow-[0_0_8px_rgba(0,232,93,0.5)]">
          {hours} <span className="animate-pulse">·</span> {minutes} <span className="animate-pulse">·</span> {seconds}
        </div>
        <span className="text-neutral-600 hidden xl:inline">|</span>
        <span className="text-[11px] text-neutral-400 hidden xl:inline">AI Engine Active</span>
      </div>

      {/* Right: Navigation Pills & Controls */}
      <nav className="flex items-center space-x-2 sm:space-x-3" data-purpose="top-navigation">
        {/* Filter segmented pill */}
        <div className="bg-neutral-900/90 border border-neutral-800 rounded-full p-1 flex items-center text-xs backdrop-blur-md">
          <button
            onClick={() => setActiveView('ambient')}
            className={`relative px-3 py-1.5 rounded-full font-medium transition-all flex items-center cursor-pointer ${
              activeView === 'ambient'
                ? 'bg-white text-black shadow-sm font-semibold'
                : 'text-neutral-300 hover:text-white'
            }`}
          >
            <span>Zeitgeist</span>
            {/* Version Badge */}
            <span className="ml-1.5 bg-[#00E85D] text-black font-extrabold text-[10px] px-1.5 py-0.5 rounded-full flex items-center justify-center">
              {APP_VERSION_TAG}
            </span>
          </button>
          <button
            onClick={() => setActiveView('arc')}
            className={`px-3 py-1.5 rounded-full transition-all font-semibold cursor-pointer ${
              activeView === 'arc'
                ? 'bg-white text-black shadow-sm'
                : 'text-neutral-300 hover:text-white'
            }`}
          >
            Say It Big
          </button>
          <button
            onClick={() => setActiveView('download')}
            className={`px-3 py-1.5 rounded-full font-medium transition-all flex items-center space-x-1 cursor-pointer ${
              activeView === 'download'
                ? 'bg-white text-black shadow-sm font-semibold'
                : 'text-neutral-300 hover:text-white'
            }`}
          >
            <span>Downloads</span>
            <span className="text-xs">⚡</span>
          </button>
        </div>

        {/* Feedback Button */}
        <button
          onClick={onOpenFeedback}
          className="flex items-center space-x-1.5 bg-neutral-900/90 border border-neutral-800 hover:border-[#00E85D]/60 text-neutral-200 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all hover:text-white hover:shadow-[0_0_12px_rgba(0,232,93,0.3)] cursor-pointer"
          title="Send Direct Feedback"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00E85D] animate-ping" />
          <span>Feedback</span>
        </button>

        {/* GitHub Repository Link */}
        <a
          href="https://github.com/HelloWorld-Farhan/ClueAi-Web"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full bg-neutral-900/90 border border-neutral-800 hover:border-[#00E85D]/50 flex items-center justify-center text-neutral-300 hover:text-white transition cursor-pointer"
          title="View GitHub Repository"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        </a>
      </nav>
    </header>
  );
}
