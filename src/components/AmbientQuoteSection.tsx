import React from 'react';

interface AmbientQuoteSectionProps {
  onActionClick: () => void;
}

export function AmbientQuoteSection({ onActionClick }: AmbientQuoteSectionProps) {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center py-20">
      {/* Ambient Quotes Grid / Layer (Exact 6x5 grid from code.html) */}
      <div
        className="absolute inset-0 pointer-events-none quote-ambient grid grid-cols-6 grid-rows-5 gap-3 p-8 text-neutral-600/35 overflow-hidden"
        data-purpose="ambient-quote-cloud"
      >
        {/* Top Row Quotes */}
        <div className="col-start-1 col-span-1 row-start-1 text-xs md:text-sm font-medium tracking-tight text-neutral-600/40">
          the use of AI to mask the learning that hasn't happened
        </div>
        <div className="col-start-2 col-span-1 row-start-1 text-sm md:text-base font-semibold text-neutral-500/30">
          and a lot of data trump more elaborate models
        </div>
        <div className="col-start-3 col-span-1 row-start-1 text-base md:text-xl font-bold text-neutral-500/30 leading-snug">
          very much designed for people
        </div>
        <div className="col-start-4 col-span-1 row-start-1 text-sm md:text-lg font-medium text-neutral-500/25">
          thinks about the work that it is doing
        </div>
        <div className="col-start-5 col-span-1 row-start-1 text-xs md:text-sm text-neutral-600/35">
          ill-prepared, uncontrolled experiment
        </div>
        <div className="col-start-6 col-span-1 row-start-1 text-2xl md:text-4xl font-extrabold text-neutral-600/20 uppercase tracking-tighter">
          optional
        </div>

        {/* Upper Middle Row */}
        <div className="col-start-1 col-span-1 row-start-2 text-sm md:text-base font-semibold text-neutral-600/40 leading-snug max-w-xs">
          The probability of catastrophe is higher, and the probability of dystopia is very high
        </div>
        <div className="col-start-2 col-span-1 row-start-2 text-xl md:text-3xl font-extrabold text-neutral-500/30 tracking-tight">
          Stop complaining
        </div>
        <div className="col-start-3 col-span-1 row-start-2 text-base md:text-xl font-bold text-neutral-400/40">
          No one person should be trusted here
        </div>
        <div className="col-start-4 col-span-1 row-start-2 text-sm md:text-base text-neutral-500/30">
          generator of randomness
        </div>
        <div className="col-start-5 col-span-1 row-start-2 text-xs md:text-sm font-medium text-neutral-500/30">
          As refreshing as taking a walk in the woods
        </div>
        <div className="col-start-6 col-span-1 row-start-2 text-sm md:text-base font-medium text-neutral-600/35 leading-tight">
          AI must automate mathematical labour without automating mathematical meaning
        </div>

        {/* Mid Row (Sides of Main Hero) */}
        <div className="col-start-1 col-span-1 row-start-3 text-2xl md:text-3xl font-black text-neutral-400/40 leading-none">
          It's your world, you can prompt it
        </div>
        <div className="col-start-2 col-span-1 row-start-3 text-xs md:text-sm font-semibold text-neutral-500/35">
          Decisions are of immense public importance and should be explained
        </div>
        {/* col 3, 4 covered by hero */}
        <div className="col-start-5 col-span-1 row-start-3 text-xs md:text-sm font-medium text-neutral-500/30">
          Help solve the problems sooner
        </div>
        <div className="col-start-6 col-span-1 row-start-3 text-lg md:text-2xl font-black text-neutral-400/45 leading-tight">
          The only way we're going to solve the national debt is with AI and robots
        </div>

        {/* Lower Mid Row */}
        <div className="col-start-1 col-span-1 row-start-4 text-sm md:text-base font-semibold text-neutral-500/35">
          Pre-cybernetic machines could be haunted
        </div>
        <div className="col-start-2 col-span-1 row-start-4 text-lg md:text-xl font-bold text-neutral-500/30">
          A new AI pair programmer
        </div>
        <div className="col-start-3 col-span-1 row-start-4 text-xs md:text-sm text-neutral-600/35">
          Whole research programs wiped out on tuesday by their dump
        </div>
        <div className="col-start-4 col-span-1 row-start-4 text-base md:text-lg font-bold text-neutral-500/25">
          Slop-vestigation
        </div>
        <div className="col-start-5 col-span-1 row-start-4 text-xs md:text-sm text-neutral-600/35">
          sets the most ambitious AI goals, but who puts them into practice
        </div>
        <div className="col-start-6 col-span-1 row-start-4 text-xl md:text-3xl font-black text-neutral-500/35">
          The model is my colleague
        </div>

        {/* Bottom Row */}
        <div className="col-start-1 col-span-1 row-start-5 text-xs text-neutral-700/50 leading-tight">
          A world model is not a painter that generates videos
        </div>
        <div className="col-start-2 col-span-1 row-start-5 text-sm md:text-base font-bold text-neutral-600/35">
          Present-day man does not feel happy in his Godlikeness
        </div>
        <div className="col-start-3 col-span-1 row-start-5 text-xs md:text-sm text-neutral-600/30">
          You won't be able to tell that the agent made a mistake
        </div>
        <div className="col-start-4 col-span-1 row-start-5 text-xs md:text-sm text-neutral-600/35">
          Maybe it's brave, maybe
        </div>
        <div className="col-start-5 col-span-1 row-start-5 text-xs text-neutral-700/40">
          Remove the struggle too quickly, and we deny opportunities
        </div>
        <div className="col-start-6 col-span-1 row-start-5 text-2xl md:text-4xl font-extrabold text-neutral-500/25">
          Now there is a God
        </div>
      </div>

      {/* BEGIN: Hero Focus Quote (Exact from code.html) */}
      <div
        className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto"
        data-purpose="hero-quote-container"
      >
        {/* Dominant Foreground Quote */}
        <h1 className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-[104px] font-black tracking-[-0.04em] leading-[0.93] select-text drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
          This is no
          <br />
          substitute
          <br />
          for hard code
        </h1>

        {/* Neon Green Action CTA Button (Exact from code.html) */}
        <div className="mt-8 sm:mt-10">
          <button
            onClick={onActionClick}
            className="neon-glow-btn inline-flex items-center space-x-2 bg-[#00E85D] hover:bg-[#05f566] text-black font-extrabold text-sm sm:text-base px-6 py-3 rounded-full cursor-pointer transition transform hover:scale-105"
          >
            {/* Person / Speaker Icon */}
            <svg
              className="w-5 h-5 stroke-black fill-none"
              strokeWidth="2.2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Who said that? / Get Clue AI</span>
          </button>
        </div>
      </div>
      {/* END: Hero Focus Quote */}
    </section>
  );
}
