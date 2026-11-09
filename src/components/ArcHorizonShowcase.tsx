import React from 'react';

interface ArcHorizonShowcaseProps {
  onGoToDownload: () => void;
  onOpenFeedback: () => void;
}

export function ArcHorizonShowcase({ onGoToDownload, onOpenFeedback }: ArcHorizonShowcaseProps) {
  return (
    <div className="w-full flex flex-col items-center">
      {/* BEGIN: Hero Showcase & Arc Stage (Exact from code7.html) */}
      <section className="relative w-full overflow-hidden pt-12 md:pt-16 min-h-[640px] flex flex-col items-center">
        {/* Top Gallery Curved Radial Display */}
        <div
          className="relative w-full max-w-[1700px] h-[340px] flex justify-center pointer-events-none"
          data-purpose="curved-gallery-viewport"
        >
          {/* Arched Planet/Dome Horizon (Exact from code7.html) */}
          <div className="arc-horizon" />

          {/* Arc Display Cards Array (Exact 9 Cards from code7.html) */}
          <div
            className="absolute inset-0 w-full h-full flex justify-center items-center pointer-events-auto"
            data-purpose="cards-ring"
          >
            {/* Card 1 (Far Left) */}
            <div
              className="arc-card w-[155px] h-[200px] cursor-pointer"
              style={{
                top: '130px',
                left: 'calc(50% - 660px)',
                transform: 'rotate(-28deg) scale(0.85)',
                opacity: 0.7,
              }}
              title="Stealth Guard - Undetected on Zoom/Teams/Meet"
            >
              <div className="p-3.5 bg-neutral-900 h-full flex flex-col justify-between border border-white/5">
                <span className="text-[8px] text-[#00E85D] font-mono tracking-wider">STEALTH GUARD</span>
                <div className="text-[12px] font-bold text-neutral-300 leading-tight">
                  Zero Screen Share Leak
                </div>
                <div className="h-14 bg-neutral-800/80 rounded flex items-center justify-center p-1 text-center">
                  <span className="text-[9px] text-neutral-400 font-mono">OBS & Zoom Invisible</span>
                </div>
              </div>
            </div>

            {/* Card 2 (Mid-Left 1) */}
            <div
              className="arc-card w-[170px] h-[215px] cursor-pointer"
              style={{
                top: '90px',
                left: 'calc(50% - 500px)',
                transform: 'rotate(-19deg) scale(0.9)',
                opacity: 0.8,
              }}
              title="Whisper Audio STT Engine"
            >
              <div className="p-3.5 bg-neutral-900 h-full flex flex-col justify-between border border-white/5">
                <div className="text-[13px] font-semibold text-neutral-200 leading-snug">
                  Real-time Audio STT &lt;50ms
                </div>
                <div className="h-16 bg-neutral-800 rounded overflow-hidden relative flex flex-col justify-end p-1.5">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="relative z-10 text-[8px] text-emerald-400 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E85D] animate-ping" />
                    <span>Mic + System Audio</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 (Mid-Left 2) */}
            <div
              className="arc-card w-[180px] h-[225px] cursor-pointer"
              style={{
                top: '50px',
                left: 'calc(50% - 330px)',
                transform: 'rotate(-11deg)',
                opacity: 0.9,
              }}
              title="Multi-LLM Intelligence"
            >
              <div className="p-4 bg-neutral-950 h-full flex flex-col justify-between border border-white/10">
                <div className="text-[9px] font-mono text-[#00E85D]">MULTI-MODEL CORE</div>
                <div className="text-sm font-medium text-neutral-200 leading-snug">
                  Gemini 2.0 Flash, Claude 3.5 Sonnet, GPT-4o
                </div>
                <div className="w-full h-8 bg-neutral-800/60 rounded flex items-center justify-center text-[9px] text-neutral-400 font-mono">
                  DeepSeek-R1 CoT
                </div>
              </div>
            </div>

            {/* Card 4 (Center-Left) */}
            <div
              className="arc-card w-[190px] h-[230px] cursor-pointer"
              style={{
                top: '25px',
                left: 'calc(50% - 175px)',
                transform: 'rotate(-4deg)',
                zIndex: 5,
              }}
              title="Live Code Sandbox"
            >
              <div className="h-full bg-neutral-900 border border-white/10 flex flex-col">
                <div className="h-28 bg-neutral-800 relative flex items-center justify-center p-2 text-center">
                  <div className="absolute top-1 left-2 right-2 h-4 flex justify-between gap-1 opacity-40">
                    <span className="w-full bg-[#00E85D] h-0.5 rounded" />
                    <span className="w-full bg-[#00E85D] h-0.5 rounded" />
                    <span className="w-full bg-[#00E85D] h-0.5 rounded" />
                  </div>
                  <span className="text-[9px] text-neutral-300 font-mono tracking-wide">
                    Python &amp; TS Sandbox
                  </span>
                </div>
                <div className="p-3 flex-1 flex flex-col justify-center">
                  <span className="text-xs text-neutral-300 font-medium">Instant Test Case Exec</span>
                </div>
              </div>
            </div>

            {/* Card 5 (Apex Center - Floating Pill Preview) */}
            <div
              className="arc-card w-[195px] h-[235px] cursor-pointer border border-[#00E85D]/40"
              style={{
                top: '15px',
                left: 'calc(50% - 20px)',
                transform: 'rotate(0deg)',
                zIndex: 6,
              }}
              title="Clue AI Apex Center Dock"
            >
              <div className="h-full bg-neutral-900 border border-white/10 flex flex-col p-3 justify-between">
                <div className="space-y-1">
                  <span className="text-[8px] uppercase tracking-wider text-[#00E85D] font-mono font-bold">
                    Floating Pill Dock
                  </span>
                  <div className="text-sm font-bold text-white leading-tight">Clue AI v5.9.9 Active</div>
                </div>
                <div className="h-24 bg-neutral-950 border border-emerald-500/20 rounded flex flex-col items-center justify-center text-center p-2">
                  <span className="text-[10px] text-emerald-400 font-mono">Ctrl + \ Toggle</span>
                  <span className="text-[9px] text-neutral-500 mt-1">42px Compact Dimension</span>
                </div>
              </div>
            </div>

            {/* Card 6 (Center-Right) */}
            <div
              className="arc-card w-[185px] h-[228px] cursor-pointer"
              style={{
                top: '26px',
                left: 'calc(50% + 145px)',
                transform: 'rotate(7deg)',
                zIndex: 5,
              }}
              title="Smart Screen OCR Snipping"
            >
              <div className="p-3 bg-neutral-950 h-full flex flex-col justify-between border border-white/10">
                <div className="h-20 bg-neutral-800/80 rounded flex items-center justify-center text-center p-1">
                  <span className="text-[9px] text-neutral-300 font-mono">
                    Instant Screen Snipping OCR
                  </span>
                </div>
                <div className="text-xs font-semibold text-neutral-300">
                  Parse LeetCode &amp; HackerRank Problems
                </div>
              </div>
            </div>

            {/* Card 7 (Mid-Right 1) */}
            <div
              className="arc-card w-[175px] h-[220px] cursor-pointer"
              style={{
                top: '55px',
                left: 'calc(50% + 295px)',
                transform: 'rotate(14deg)',
                opacity: 0.9,
              }}
              title="SQLite Session History & PDF Export"
            >
              <div className="p-3.5 bg-neutral-900 h-full flex flex-col justify-between border border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-1/2 h-14 bg-neutral-800 rounded flex items-center justify-center text-[8px] text-neutral-400 font-mono">
                    SQLite
                  </div>
                  <div className="w-1/2 h-14 bg-neutral-800 rounded flex items-center justify-center text-[8px] text-neutral-400 font-mono">
                    PDF
                  </div>
                </div>
                <div className="text-[11px] font-medium text-neutral-300">
                  Full Interview Logs &amp; Export
                </div>
              </div>
            </div>

            {/* Card 8 (Mid-Right 2) */}
            <div
              className="arc-card w-[165px] h-[210px] cursor-pointer"
              style={{
                top: '95px',
                left: 'calc(50% + 435px)',
                transform: 'rotate(22deg) scale(0.9)',
                opacity: 0.8,
              }}
              title="Dual-Stage Silent Auto-Updater"
            >
              <div className="p-3 bg-neutral-900 h-full flex flex-col justify-between border border-white/5">
                <div className="text-xs font-semibold text-neutral-200">Silent Auto-Updater</div>
                <div className="h-20 bg-neutral-800/90 rounded flex flex-col items-center justify-center p-2 text-center">
                  <span className="text-[8px] text-[#00E85D] font-mono">Zero Terminal Flash</span>
                  <span className="text-[8px] text-neutral-400 font-mono mt-1">Dual Progress Bar</span>
                </div>
              </div>
            </div>

            {/* Card 9 (Far Right) */}
            <div
              className="arc-card w-[155px] h-[195px] cursor-pointer"
              style={{
                top: '135px',
                left: 'calc(50% + 560px)',
                transform: 'rotate(30deg) scale(0.85)',
                opacity: 0.7,
              }}
              title="Multi-Inbox Mail Broadcast"
            >
              <div className="p-3 bg-neutral-950 h-full flex flex-col justify-between border border-white/5">
                <span className="text-[8px] text-neutral-500 font-mono">CLOUD SYNC</span>
                <div className="text-[11px] font-bold text-neutral-300 leading-tight">
                  Google Apps Script Broadcast
                </div>
                <div className="h-12 bg-neutral-800 rounded flex items-center justify-center text-[8px] text-neutral-400 font-mono">
                  All User Inboxes
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Central Hero Headline & CTA (Exact from code7.html) */}
        <div
          className="relative z-20 text-center max-w-xl mx-auto px-4 mt-6 md:mt-10"
          data-purpose="hero-content"
        >
          <h1 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white mb-3">
            Say it big
          </h1>
          <p className="text-sm md:text-base text-neutral-300 font-normal tracking-wide mb-6">
            The Undetected AI Copilot for Technical Interviews. Zero Screen Share Detection.
          </p>
          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={onGoToDownload}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-normal hover:bg-neutral-200 active:scale-95 transition-all shadow-md cursor-pointer"
            >
              Download Clue AI
            </button>
            <button
              onClick={onOpenFeedback}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-white font-semibold text-xs tracking-normal hover:bg-neutral-800 active:scale-95 transition-all shadow-md cursor-pointer"
            >
              Let's talk
            </button>
          </div>
        </div>
      </section>
      {/* END: Hero Showcase & Arc Stage */}

      {/* BEGIN: Main Section (Awards - Exact from code7.html) */}
      <section className="relative z-20 w-full max-w-4xl mx-auto px-6 py-8 md:py-10">
        <div
          aria-label="Recognition & Awards"
          className="border-t border-b border-neutral-800/80 py-6 px-3 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Left Column: Title & Description */}
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 md:gap-6 text-left">
            <h2 className="text-white text-sm md:text-base font-bold whitespace-nowrap">
              Awards for the wall
            </h2>
            <p className="text-neutral-400 text-xs md:text-[11px] leading-relaxed max-w-sm">
              Voted Best UI, Best UX and Best Innovation by developers, with a Stealth Pass verification on top.
            </p>
          </div>

          {/* Right Column: 4 Circular Monochrome Badges (Exact from code7.html) */}
          <div className="flex items-center gap-3 shrink-0" data-purpose="awards-badges">
            {/* Badge 1: Best UI Design */}
            <div className="award-badge text-center cursor-pointer" title="Best UI Design Awarded">
              <span className="text-[6px] uppercase tracking-tighter text-neutral-300 font-bold leading-tight block">
                BEST UI
              </span>
              <span className="text-[5px] text-neutral-400 font-mono tracking-widest block scale-90">
                DESIGN
              </span>
              <span className="text-[5px] text-neutral-500 uppercase tracking-tighter block mt-0.5">
                AWARDED
              </span>
            </div>

            {/* Badge 2: Best UX Design */}
            <div className="award-badge text-center cursor-pointer" title="Best UX Design Awarded">
              <span className="text-[6px] uppercase tracking-tighter text-neutral-300 font-bold leading-tight block">
                BEST UX
              </span>
              <span className="text-[5px] text-neutral-400 font-mono tracking-widest block scale-90">
                DESIGN
              </span>
              <span className="text-[5px] text-neutral-500 uppercase tracking-tighter block mt-0.5">
                AWARDED
              </span>
            </div>

            {/* Badge 3: Best Innovation / Stealth Pass */}
            <div className="award-badge text-center cursor-pointer" title="Stealth Pass Verified">
              <span className="text-[6px] uppercase tracking-tighter text-emerald-400 font-bold leading-tight block">
                STEALTH
              </span>
              <span className="text-[5px] text-neutral-400 font-mono tracking-widest block scale-90">
                INVISIBILITY
              </span>
              <span className="text-[5px] text-neutral-500 uppercase tracking-tighter block mt-0.5">
                PASSED
              </span>
            </div>

            {/* Badge 4: Special Design Kudos */}
            <div className="award-badge text-center cursor-pointer" title="Special Kudos Awarded">
              <span className="text-[6px] uppercase tracking-tighter text-neutral-300 font-bold leading-tight block">
                SPECIAL
              </span>
              <span className="text-[5px] text-neutral-400 font-mono tracking-widest block scale-90">
                KUDOS
              </span>
              <span className="text-[5px] text-neutral-500 uppercase tracking-tighter block mt-0.5">
                AWARDED
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* END: Main Section (Awards) */}
    </div>
  );
}
