import React from 'react';

interface FooterProps {
  onOpenFeedback: () => void;
}

export function Footer({ onOpenFeedback }: FooterProps) {
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

      {/* Row 1: Follow Pills (Exact from code7.html lines 308-316) */}
      <nav aria-label="Social Links" className="flex flex-wrap items-center justify-center gap-1.5 max-w-xl">
        <span className="text-[11px] text-neutral-500 mr-1 font-medium">Follow</span>
        <a className="pill-link" href="https://github.com/HelloWorld-Farhan/ClueAi-Web" target="_blank" rel="noopener noreferrer">
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
        <a className="pill-link" href="https://github.com/HelloWorld-Farhan/ClueAi-Web/releases.atom" target="_blank" rel="noopener noreferrer">
          RSS
        </a>
      </nav>

      {/* Row 2: Secondary Navigation Pills (Exact from code7.html lines 318-326) */}
      <nav aria-label="Content Navigation" className="flex flex-wrap items-center justify-center gap-1.5 max-w-2xl">
        <a className="pill-link" href="#stealth">
          Stealth Shield
        </a>
        <a className="pill-link" href="#whisper">
          Whisper STT
        </a>
        <a className="pill-link" href="#llm">
          Multi-LLM
        </a>
        <a className="pill-link" href="#sandbox">
          Code Sandbox
        </a>
        <a className="pill-link" href="#updater">
          Silent Updater
        </a>
        <a className="pill-link" href="https://github.com/HelloWorld-Farhan/ClueAi-Web/releases" target="_blank" rel="noopener noreferrer">
          Releases
        </a>
        <a className="pill-link" href="https://github.com/HelloWorld-Farhan/ClueAi-Web/raw/main/package.json" target="_blank" rel="noopener noreferrer">
          Data (JSON)
        </a>
      </nav>

      {/* Row 3: Bottom Credits & Legal Links (Exact from code7.html lines 328-337) */}
      <div
        className="flex flex-wrap items-center justify-center gap-2 text-[10px] text-neutral-500 mt-2 font-light"
        data-purpose="site-credits"
      >
        <span>Engineered with passion by</span>
        <a
          className="hover:text-neutral-300 underline underline-offset-2 transition-colors font-medium text-neutral-400"
          href="https://github.com/HelloWorld-Farhan"
          target="_blank"
          rel="noopener noreferrer"
        >
          Farhan Khalid
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
