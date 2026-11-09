import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { APP_VERSION_TAG } from '../config/version';
import { AwardModal, AwardType } from './AwardModal';

interface ArcHorizonShowcaseProps {
  onGoToDownload: () => void;
  onOpenFeedback: () => void;
}

export function ArcHorizonShowcase({ onGoToDownload, onOpenFeedback }: ArcHorizonShowcaseProps) {
  const [selectedAward, setSelectedAward] = useState<AwardType | null>(null);

  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRingRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const awardsSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Cards Ring Bidirectional Scrub (Top to Bottom & Bottom to Top)
      if (cardsRingRef.current) {
        gsap.fromTo(
          cardsRingRef.current.children,
          {
            y: 40,
            opacity: 0.35,
            scale: 0.9,
          },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              end: 'top 25%',
              scrub: 1.2,
            },
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.03,
            ease: 'power2.out',
          }
        );
      }

      // 2. "Say it big" Headline & CTA Bidirectional Reveal
      if (heroContentRef.current) {
        gsap.fromTo(
          heroContentRef.current,
          {
            y: 50,
            opacity: 0,
            filter: 'blur(14px)',
          },
          {
            scrollTrigger: {
              trigger: heroContentRef.current,
              start: 'top 88%',
              end: 'top 52%',
              scrub: 1,
            },
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            ease: 'power2.out',
          }
        );
      }

      // 3. Awards Section Bidirectional Reveal
      if (awardsSectionRef.current) {
        gsap.fromTo(
          awardsSectionRef.current,
          {
            y: 40,
            opacity: 0,
            filter: 'blur(10px)',
          },
          {
            scrollTrigger: {
              trigger: awardsSectionRef.current,
              start: 'top 92%',
              end: 'top 65%',
              scrub: 1,
            },
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            ease: 'power2.out',
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full flex flex-col items-center">
      {/* BEGIN: Hero Showcase & Arc Stage (Exact from code7.html with Mobile Scaling) */}
      <section className="relative w-full overflow-hidden pt-8 md:pt-16 min-h-[520px] sm:min-h-[640px] flex flex-col items-center">
        {/* Top Gallery Curved Radial Display */}
        <div
          className="relative w-full max-w-[1700px] h-[280px] xs:h-[320px] sm:h-[360px] md:h-[400px] flex justify-center pointer-events-none scale-[0.62] xs:scale-[0.75] sm:scale-[0.88] md:scale-100 origin-top overflow-hidden"
          data-purpose="curved-gallery-viewport"
        >
          {/* Arched Planet/Dome Horizon (Exact from code7.html) */}
          <div className="arc-horizon" />

          {/* Smooth Bottom Horizon Blend to prevent harsh cutoff */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none z-10" />

          {/* Arc Display Cards Array (Exact 9 Cards from code7.html) */}
          <div
            ref={cardsRingRef}
            className="absolute inset-0 w-full h-full flex justify-center items-center pointer-events-auto"
            data-purpose="cards-ring"
          >
            {/* Card 1 (Far Left): Stealth Guard with Rotating Radar Sonar SVG */}
            <div
              className="arc-card w-[155px] h-[200px] cursor-pointer group"
              style={{
                top: '130px',
                left: 'calc(50% - 660px)',
                transform: 'rotate(-28deg) scale(0.85)',
                opacity: 0.7,
              }}
              title="Stealth Guard - Undetected on Zoom/Teams/Meet"
            >
              <div className="p-3.5 bg-neutral-900 h-full flex flex-col justify-between border border-white/5 group-hover:border-[#00E85D]/40 transition-colors">
                <span className="text-[8px] text-[#00E85D] font-mono tracking-wider">STEALTH GUARD</span>
                <div className="text-[12px] font-bold text-neutral-300 leading-tight">
                  Zero Screen Share Leak
                </div>
                {/* High-Tech Animated Radar Sonar SVG */}
                <div className="h-16 bg-neutral-950/90 rounded border border-neutral-800 flex items-center justify-center relative overflow-hidden group-hover:border-[#00E85D]/50 transition-colors">
                  <svg className="w-12 h-12 text-[#00E85D]" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(0,232,93,0.18)" strokeWidth="1.5" />
                    <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(0,232,93,0.25)" strokeWidth="1" />
                    <circle cx="50" cy="50" r="15" fill="none" stroke="rgba(0,232,93,0.35)" strokeWidth="1" />
                    <line x1="5" y1="50" x2="95" y2="50" stroke="rgba(0,232,93,0.2)" strokeWidth="1" strokeDasharray="2,2" />
                    <line x1="50" y1="5" x2="50" y2="95" stroke="rgba(0,232,93,0.2)" strokeWidth="1" strokeDasharray="2,2" />
                    {/* Rotating Sonar Arm */}
                    <g className="origin-center animate-[spin_3s_linear_infinite]">
                      <line x1="50" y1="50" x2="88" y2="20" stroke="#00E85D" strokeWidth="1.5" />
                      <polygon points="50,50 88,20 70,10" fill="rgba(0,232,93,0.2)" />
                    </g>
                    <circle cx="65" cy="35" r="2.5" fill="#00E85D" className="animate-ping" />
                  </svg>
                  <span className="absolute bottom-1 text-[7px] text-neutral-400 font-mono tracking-widest uppercase">
                    OBS Invisible
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2 (Mid-Left 1): Whisper STT with Animated Audio Equalizer */}
            <div
              className="arc-card w-[170px] h-[215px] cursor-pointer group"
              style={{
                top: '90px',
                left: 'calc(50% - 500px)',
                transform: 'rotate(-19deg) scale(0.9)',
                opacity: 0.8,
              }}
              title="Whisper Audio STT Engine"
            >
              <div className="p-3.5 bg-neutral-900 h-full flex flex-col justify-between border border-white/5 group-hover:border-[#00E85D]/40 transition-colors">
                <div className="text-[13px] font-semibold text-neutral-200 leading-snug">
                  Real-time Audio STT &lt;50ms
                </div>
                {/* Animated Audio Equalizer Visualizer */}
                <div className="h-16 bg-neutral-950/90 rounded border border-neutral-800 flex flex-col justify-between p-2 relative overflow-hidden group-hover:border-[#00E85D]/50 transition-colors">
                  <div className="flex items-end justify-center gap-1 h-8 mt-0.5">
                    {[40, 75, 95, 60, 85, 100, 70, 50, 90, 65, 45].map((height, i) => (
                      <span
                        key={i}
                        className="w-1 bg-[#00E85D] rounded-full origin-bottom"
                        style={{
                          height: `${height}%`,
                          animation: `pulse 1.${(i % 5) + 2}s ease-in-out infinite alternate`,
                          opacity: 0.6 + (i % 4) * 0.1,
                        }}
                      />
                    ))}
                  </div>
                  <div className="relative z-10 text-[8px] text-emerald-400 font-mono flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00E85D] animate-ping" />
                      <span>&lt;50ms Stream</span>
                    </div>
                    <span className="text-neutral-500 text-[7px]">DUAL CH</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 (Mid-Left 2): Multi-LLM with Neural Node Graph */}
            <div
              className="arc-card w-[180px] h-[225px] cursor-pointer group"
              style={{
                top: '50px',
                left: 'calc(50% - 330px)',
                transform: 'rotate(-11deg)',
                opacity: 0.9,
              }}
              title="Multi-LLM Intelligence"
            >
              <div className="p-4 bg-neutral-950 h-full flex flex-col justify-between border border-white/10 group-hover:border-[#00E85D]/40 transition-colors">
                <div className="text-[9px] font-mono text-[#00E85D]">MULTI-MODEL CORE</div>
                <div className="text-sm font-medium text-neutral-200 leading-snug">
                  Gemini 2.0 Flash, Claude 3.5 Sonnet, GPT-4o
                </div>
                {/* Neural Network Node Graph SVG */}
                <div className="w-full h-12 bg-neutral-900/90 rounded border border-neutral-800 flex items-center justify-center relative overflow-hidden p-1 group-hover:border-[#00E85D]/50 transition-colors">
                  <svg className="w-full h-full text-[#00E85D]" viewBox="0 0 160 50">
                    <line x1="25" y1="25" x2="80" y2="15" stroke="rgba(0,232,93,0.3)" strokeWidth="1.2" />
                    <line x1="25" y1="25" x2="80" y2="35" stroke="rgba(0,232,93,0.3)" strokeWidth="1.2" />
                    <line x1="80" y1="15" x2="135" y2="25" stroke="rgba(0,232,93,0.3)" strokeWidth="1.2" />
                    <line x1="80" y1="35" x2="135" y2="25" stroke="rgba(0,232,93,0.3)" strokeWidth="1.2" />
                    <circle cx="52" cy="20" r="1.5" fill="#00E85D" className="animate-pulse" />
                    <circle cx="107" cy="30" r="1.5" fill="#00E85D" className="animate-pulse" />
                    <circle cx="25" cy="25" r="4" fill="#00E85D" />
                    <circle cx="80" cy="15" r="4.5" fill="#10b981" />
                    <circle cx="80" cy="35" r="4.5" fill="#10b981" />
                    <circle cx="135" cy="25" r="5" fill="#00E85D" />
                  </svg>
                  <span className="absolute bottom-0.5 text-[7px] text-neutral-400 font-mono">
                    Consensus Engine
                  </span>
                </div>
              </div>
            </div>

            {/* Card 4 (Center-Left): Live Code Sandbox with Simulated Runner */}
            <div
              className="arc-card w-[190px] h-[230px] cursor-pointer group"
              style={{
                top: '25px',
                left: 'calc(50% - 175px)',
                transform: 'rotate(-4deg)',
                zIndex: 5,
              }}
              title="Live Code Sandbox"
            >
              <div className="h-full bg-neutral-900 border border-white/10 flex flex-col p-2.5 justify-between group-hover:border-[#00E85D]/40 transition-colors">
                <div className="h-28 bg-neutral-950/90 border border-neutral-800 rounded p-2 flex flex-col justify-between font-mono text-[9px] group-hover:border-[#00E85D]/40 transition-colors">
                  <div className="flex items-center justify-between border-b border-neutral-800 pb-1">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500/70" />
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/70" />
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500/70" />
                    </div>
                    <span className="text-[7px] text-[#00E85D]">Python 3.11</span>
                  </div>
                  <div className="text-left space-y-0.5 text-[8px] text-neutral-400">
                    <p><span className="text-[#00E85D]">&gt;</span> def two_sum(nums):</p>
                    <p className="text-neutral-500 pl-2">return [0, 1]</p>
                    <p className="text-emerald-400 font-bold mt-1">✔ 3/3 Passed (1.2ms)</p>
                  </div>
                  <div className="text-[7px] text-neutral-500 flex justify-between">
                    <span>Sandbox Isolated</span>
                    <span className="text-[#00E85D] animate-pulse">● Live</span>
                  </div>
                </div>
                <div className="px-1">
                  <span className="text-xs text-neutral-300 font-medium">Instant Test Case Exec</span>
                </div>
              </div>
            </div>

            {/* Card 5 (Apex Center - Floating Pill Preview) */}
            <div
              className="arc-card w-[195px] h-[235px] cursor-pointer border border-[#00E85D]/50 shadow-[0_0_20px_rgba(0,232,93,0.15)] group"
              style={{
                top: '15px',
                left: 'calc(50% - 20px)',
                transform: 'rotate(0deg)',
                zIndex: 6,
              }}
              title="Clue AI Apex Center Dock"
            >
              <div className="h-full bg-neutral-900 border border-white/10 flex flex-col p-3 justify-between group-hover:border-[#00E85D]/60 transition-colors">
                <div className="space-y-1">
                  <span className="text-[8px] uppercase tracking-wider text-[#00E85D] font-mono font-bold">
                    Floating Pill Dock
                  </span>
                  <div className="text-sm font-bold text-white leading-tight">Clue AI {APP_VERSION_TAG} Active</div>
                </div>
                <div className="h-24 bg-neutral-950 border border-emerald-500/20 rounded flex flex-col items-center justify-center text-center p-2 group-hover:border-[#00E85D]/50 transition-colors">
                  <div className="flex items-center space-x-1.5 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#00E85D] animate-ping" />
                    <span className="text-[10px] text-emerald-400 font-mono font-bold">Ctrl + \ Toggle</span>
                  </div>
                  <span className="text-[9px] text-neutral-500">42px Compact Dimension</span>
                </div>
              </div>
            </div>

            {/* Card 6 (Center-Right): Laser Screen OCR Scanning Visualizer */}
            <div
              className="arc-card w-[185px] h-[228px] cursor-pointer group"
              style={{
                top: '26px',
                left: 'calc(50% + 145px)',
                transform: 'rotate(7deg)',
                zIndex: 5,
              }}
              title="Smart Screen OCR Snipping"
            >
              <div className="p-3 bg-neutral-950 h-full flex flex-col justify-between border border-white/10 group-hover:border-[#00E85D]/40 transition-colors">
                {/* Animated Laser Scanning Line */}
                <div className="h-20 bg-neutral-900/90 border border-neutral-800 rounded relative flex flex-col justify-center items-center overflow-hidden p-1.5 group-hover:border-[#00E85D]/50 transition-colors">
                  <div className="w-full space-y-1 opacity-40">
                    <div className="h-1 bg-neutral-600 rounded w-5/6" />
                    <div className="h-1 bg-neutral-600 rounded w-full" />
                    <div className="h-1 bg-neutral-600 rounded w-4/6" />
                    <div className="h-1 bg-neutral-600 rounded w-3/4" />
                  </div>
                  <div className="absolute inset-x-0 h-0.5 bg-[#00E85D] shadow-[0_0_8px_#00E85D] animate-[bounce_2s_infinite]" />
                  <span className="relative z-10 text-[8px] font-mono font-bold text-white bg-black/75 px-2 py-0.5 rounded border border-[#00E85D]/40 mt-1">
                    OCR 100% Parsed
                  </span>
                </div>
                <div className="text-xs font-semibold text-neutral-300">
                  Parse LeetCode &amp; HackerRank Problems
                </div>
              </div>
            </div>

            {/* Card 7 (Mid-Right 1) */}
            <div
              className="arc-card w-[175px] h-[220px] cursor-pointer group"
              style={{
                top: '55px',
                left: 'calc(50% + 295px)',
                transform: 'rotate(14deg)',
                opacity: 0.9,
              }}
              title="SQLite Session History & PDF Export"
            >
              <div className="p-3.5 bg-neutral-900 h-full flex flex-col justify-between border border-white/5 group-hover:border-[#00E85D]/40 transition-colors">
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

            {/* Card 8 (Mid-Right 2): Silent Auto-Updater with Dual Stream Progress */}
            <div
              className="arc-card w-[165px] h-[210px] cursor-pointer group"
              style={{
                top: '95px',
                left: 'calc(50% + 435px)',
                transform: 'rotate(22deg) scale(0.9)',
                opacity: 0.8,
              }}
              title="Dual-Stage Silent Auto-Updater"
            >
              <div className="p-3 bg-neutral-900 h-full flex flex-col justify-between border border-white/5 group-hover:border-[#00E85D]/40 transition-colors">
                <div className="text-xs font-semibold text-neutral-200">Silent Auto-Updater</div>
                {/* Dual Progress Stream */}
                <div className="h-20 bg-neutral-950/90 border border-neutral-800 rounded flex flex-col justify-center p-2.5 space-y-1.5 group-hover:border-[#00E85D]/50 transition-colors">
                  <div className="flex justify-between text-[7px] font-mono text-neutral-400">
                    <span>Stage 1: Verified Payload</span>
                    <span className="text-[#00E85D]">100%</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#00E85D] h-full w-full shadow-[0_0_8px_rgba(0,232,93,0.8)]" />
                  </div>
                  <div className="flex justify-between text-[7px] font-mono text-neutral-400">
                    <span>Stage 2: In-Place Swap</span>
                    <span className="text-[#00E85D] animate-pulse">Ready</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 9 (Far Right) */}
            <div
              className="arc-card w-[155px] h-[195px] cursor-pointer group"
              style={{
                top: '135px',
                left: 'calc(50% + 560px)',
                transform: 'rotate(30deg) scale(0.85)',
                opacity: 0.7,
              }}
              title="Multi-Inbox Mail Broadcast"
            >
              <div className="p-3 bg-neutral-950 h-full flex flex-col justify-between border border-white/5 group-hover:border-[#00E85D]/40 transition-colors">
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

        {/* Central Hero Headline & CTA (Exact from code7.html with Bidirectional GSAP Scrub) */}
        <div
          ref={heroContentRef}
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

      {/* BEGIN: Main Section (Awards - Interactive with AwardModal & Bidirectional GSAP Scrub) */}
      <section
        ref={awardsSectionRef}
        className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 py-6 md:py-10"
      >
        <div
          aria-label="Recognition & Awards"
          className="border-t border-b border-neutral-800/80 py-5 sm:py-6 px-2 sm:px-3 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6"
        >
          {/* Left Column: Title & Description */}
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 md:gap-6 text-center sm:text-left">
            <h2 className="text-white text-sm md:text-base font-bold whitespace-nowrap">
              Awards for the wall
            </h2>
            <p className="text-neutral-400 text-xs md:text-[11px] leading-relaxed max-w-sm">
              Voted Best UI, Best UX and Best Innovation by developers, with a Stealth Pass verification on top. Click any badge to inspect.
            </p>
          </div>

          {/* Right Column: 4 Circular Monochrome Badges (Interactive with AwardModal) */}
          <div className="flex items-center justify-center flex-wrap gap-2.5 sm:gap-3 shrink-0" data-purpose="awards-badges">
            {/* Badge 1: Best UI Design */}
            <button
              onClick={() => setSelectedAward('ui')}
              className="award-badge text-center cursor-pointer hover:border-[#00E85D] hover:shadow-[0_0_15px_rgba(0,232,93,0.5)] hover:scale-105 transition-all duration-200 group focus:outline-none"
              title="Click to inspect Best UI Design Award"
            >
              <span className="text-[6px] uppercase tracking-tighter text-neutral-300 font-bold leading-tight block group-hover:text-white">
                BEST UI
              </span>
              <span className="text-[5px] text-neutral-400 font-mono tracking-widest block scale-90 group-hover:text-emerald-400">
                DESIGN
              </span>
              <span className="text-[5px] text-neutral-500 uppercase tracking-tighter block mt-0.5 group-hover:text-[#00E85D]">
                AWARDED
              </span>
            </button>

            {/* Badge 2: Best UX Design */}
            <button
              onClick={() => setSelectedAward('ux')}
              className="award-badge text-center cursor-pointer hover:border-[#00E85D] hover:shadow-[0_0_15px_rgba(0,232,93,0.5)] hover:scale-105 transition-all duration-200 group focus:outline-none"
              title="Click to inspect Best UX Design Award"
            >
              <span className="text-[6px] uppercase tracking-tighter text-neutral-300 font-bold leading-tight block group-hover:text-white">
                BEST UX
              </span>
              <span className="text-[5px] text-neutral-400 font-mono tracking-widest block scale-90 group-hover:text-emerald-400">
                DESIGN
              </span>
              <span className="text-[5px] text-neutral-500 uppercase tracking-tighter block mt-0.5 group-hover:text-[#00E85D]">
                AWARDED
              </span>
            </button>

            {/* Badge 3: Best Innovation / Stealth Pass */}
            <button
              onClick={() => setSelectedAward('stealth')}
              className="award-badge text-center cursor-pointer border-[#00E85D]/60 hover:border-[#00E85D] hover:shadow-[0_0_15px_rgba(0,232,93,0.5)] hover:scale-105 transition-all duration-200 group focus:outline-none"
              title="Click to inspect Stealth Pass Certification"
            >
              <span className="text-[6px] uppercase tracking-tighter text-emerald-400 font-bold leading-tight block group-hover:text-white">
                STEALTH
              </span>
              <span className="text-[5px] text-neutral-400 font-mono tracking-widest block scale-90 group-hover:text-emerald-400">
                INVISIBILITY
              </span>
              <span className="text-[5px] text-neutral-500 uppercase tracking-tighter block mt-0.5 group-hover:text-[#00E85D]">
                PASSED
              </span>
            </button>

            {/* Badge 4: Special Design Kudos */}
            <button
              onClick={() => setSelectedAward('special')}
              className="award-badge text-center cursor-pointer hover:border-[#00E85D] hover:shadow-[0_0_15px_rgba(0,232,93,0.5)] hover:scale-105 transition-all duration-200 group focus:outline-none"
              title="Click to inspect Special Kudos Award"
            >
              <span className="text-[6px] uppercase tracking-tighter text-neutral-300 font-bold leading-tight block group-hover:text-white">
                SPECIAL
              </span>
              <span className="text-[5px] text-neutral-400 font-mono tracking-widest block scale-90 group-hover:text-emerald-400">
                KUDOS
              </span>
              <span className="text-[5px] text-neutral-500 uppercase tracking-tighter block mt-0.5 group-hover:text-[#00E85D]">
                AWARDED
              </span>
            </button>
          </div>
        </div>
      </section>
      {/* END: Main Section (Awards) */}

      {/* Official Award Inspection Modal */}
      <AwardModal
        awardType={selectedAward}
        onClose={() => setSelectedAward(null)}
      />
    </div>
  );
}
