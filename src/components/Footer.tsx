import React from 'react';
import { CREATOR } from '../config/version';
import { FeatureKey } from './FeatureModal';

interface FooterProps {
  onOpenFeedback: () => void;
  onSelectFeature?: (key: FeatureKey) => void;
}

export function Footer({ onOpenFeedback, onSelectFeature }: FooterProps) {
  return (
    <footer
      className="relative z-20 pb-20 pt-10 flex flex-col items-center gap-4 text-center px-4 border-t border-neutral-900/60 mt-12 bg-black"
      data-purpose="page-footer"
    >
      {/* Status / AI Zeitgeist Indicator (Exact from code7.html lines 300-306) */}
      <div
        onClick={onOpenFeedback}
        className="inline-flex items-center gap-2 text-xs font-medium text-neutral-300 hover:text-white transition-colors cursor-pointer mb-1"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span>Clue AI · The Undetected Realtime Copilot for Developers</span>
      </div>

      {/* Row 1: Follow Pills */}
      <nav aria-label="Social Links" className="flex flex-wrap items-center justify-center gap-1.5 max-w-xl">
        <span className="text-[11px] text-neutral-500 mr-1 font-medium">Follow</span>
        <a className="pill-link" href={CREATOR.website} target="_blank" rel="noopener noreferrer">
          Website
        </a>
        <a className="pill-link" href={CREATOR.desktopRepo} target="_blank" rel="noopener noreferrer" title="Clue AI Desktop Software on GitHub">
          GitHub
        </a>
        <a className="pill-link" href="https://x.com" target="_blank" rel="noopener noreferrer">
          X
        </a>
        <a className="pill-link" href="https://threads.net" target="_blank" rel="noopener noreferrer">
          Threads
        </a>
        <a className="pill-link" href="https://bsky.app" target="_blank" rel="noopener noreferrer">
          Bluesky
        </a>
        <a className="pill-link" href="#" onClick={(e) => { e.preventDefault(); onOpenFeedback(); }}>
          Feedback
        </a>
        <a className="pill-link" href="https://github.com/HelloWorld-Farhan/ClueAi/releases.atom" target="_blank" rel="noopener noreferrer">
          RSS
        </a>
      </nav>

      {/* Row 2: Secondary Navigation Pills with Interactive Feature Simulation Popups */}
      <nav aria-label="Content Navigation" className="flex flex-wrap items-center justify-center gap-1.5 max-w-2xl">
        <button
          onClick={() => onSelectFeature?.('stealth')}
          className="pill-link cursor-pointer hover:border-[#00E85D]/60 hover:text-white transition-all"
        >
          Stealth Shield
        </button>
        <button
          onClick={() => onSelectFeature?.('whisper')}
          className="pill-link cursor-pointer hover:border-[#00E85D]/60 hover:text-white transition-all"
        >
          Whisper STT
        </button>
        <button
          onClick={() => onSelectFeature?.('llm')}
          className="pill-link cursor-pointer hover:border-[#00E85D]/60 hover:text-white transition-all"
        >
          Multi-LLM
        </button>
        <button
          onClick={() => onSelectFeature?.('sandbox')}
          className="pill-link cursor-pointer hover:border-[#00E85D]/60 hover:text-white transition-all"
        >
          Code Sandbox
        </button>
        <button
          onClick={() => onSelectFeature?.('updater')}
          className="pill-link cursor-pointer hover:border-[#00E85D]/60 hover:text-white transition-all"
        >
          Silent Updater
        </button>
        <button
          onClick={() => onSelectFeature?.('releases')}
          className="pill-link cursor-pointer hover:border-[#00E85D]/60 hover:text-white transition-all"
        >
          Releases
        </button>
        <button
          onClick={() => onSelectFeature?.('data')}
          className="pill-link cursor-pointer hover:border-[#00E85D]/60 hover:text-white transition-all"
        >
          Data (JSON)
        </button>
      </nav>

      {/* Row 3: Bottom Credits & Legal Links */}
      <div
        className="flex flex-wrap items-center justify-center gap-2 text-[10px] text-neutral-500 mt-2 font-light"
        data-purpose="site-credits"
      >
        <span>Engineered with passion by</span>
        <a
          className="hover:text-emerald-400 underline underline-offset-2 transition-colors font-medium text-neutral-300"
          href={CREATOR.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          {CREATOR.name}
        </a>
        <span className="text-neutral-700">·</span>
        <a
          className="hover:text-neutral-300 transition-colors font-light text-neutral-500"
          href={CREATOR.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          Developer Profile
        </a>
        <span className="text-neutral-700">·</span>
        <button
          onClick={onOpenFeedback}
          className="hover:text-neutral-300 transition-colors cursor-pointer"
        >
          Contact &amp; Feedback
        </button>
        <span className="text-neutral-700">·</span>
        <span className="text-neutral-500">MIT License</span>
        <span className="text-neutral-700">·</span>
        <span className="text-neutral-500">Privacy &amp; Zero-Telemetry</span>
      </div>
    </footer>
  );
}
