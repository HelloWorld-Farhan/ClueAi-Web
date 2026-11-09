import React, { useState } from 'react';
import { Copy, Check, Terminal, ShieldCheck, Cpu, Download } from 'lucide-react';
import { APP_VERSION, APP_VERSION_TAG, DOWNLOAD_LINKS } from '../config/version';

type SupportedOS = 'windows' | 'mac' | 'linux';

export function DownloadHub() {
  const [activeOS, setActiveOS] = useState<SupportedOS>('windows');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const winPsCommand = DOWNLOAD_LINKS.windowsPsScript;
  const winCmdCommand = DOWNLOAD_LINKS.windowsCmdScript;
  const macCurlCommand = DOWNLOAD_LINKS.macCurlScript;
  const linuxCommand = DOWNLOAD_LINKS.linuxScript;

  return (
    <section
      id="downloads"
      className="relative z-20 w-full max-w-4xl mx-auto px-6 py-12 md:py-16 text-left"
    >
      {/* Top Announcement Banner Pill */}
      <div className="mb-8 flex items-center justify-start">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs text-neutral-300 backdrop-blur-md shadow-sm hover:border-neutral-700 transition-colors">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-white text-black">
            ✦ NEW
          </span>
          <span className="font-medium text-neutral-200">
            Introducing voice mode in Clue AI, enabled by Whisper STT &amp; Gemini
          </span>
        </div>
      </div>

      {/* Main Title */}
      <div className="mb-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white flex items-center gap-3">
          <span>Clue AI</span>
          <span className="w-1.5 h-10 md:h-12 bg-gradient-to-b from-[#00E85D] via-emerald-400 to-sky-400 rounded-full animate-pulse opacity-80" />
        </h1>
      </div>

      {/* OS Segmented Selector Tabs */}
      <div className="flex flex-wrap items-center gap-2.5 mb-10">
        {/* macOS Tab */}
        <button
          type="button"
          onClick={() => setActiveOS('mac')}
          className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all cursor-pointer ${
            activeOS === 'mac'
              ? 'bg-white text-black shadow-md shadow-white/10'
              : 'bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 border border-neutral-800'
          }`}
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.78 1.06-1.85.94-2.94-.92.04-2.03.62-2.69 1.4-.58.68-1.09 1.77-.95 2.83 1.03.08 2.07-.51 2.7-1.29z" />
          </svg>
          <span>macOS</span>
        </button>

        {/* Windows Tab */}
        <button
          type="button"
          onClick={() => setActiveOS('windows')}
          className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all cursor-pointer ${
            activeOS === 'windows'
              ? 'bg-white text-black shadow-md shadow-white/10'
              : 'bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 border border-neutral-800'
          }`}
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.902-1.801" />
          </svg>
          <span>Windows</span>
        </button>

        {/* Linux Tab */}
        <button
          type="button"
          onClick={() => setActiveOS('linux')}
          className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all cursor-pointer ${
            activeOS === 'linux'
              ? 'bg-white text-black shadow-md shadow-white/10'
              : 'bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 border border-neutral-800'
          }`}
        >
          <span className="text-sm">🐧</span>
          <span>Linux</span>
        </button>
      </div>

      {/* Clue AI App Block */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Clue AI App
          </h2>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/25">
            {APP_VERSION_TAG}
          </span>
        </div>

        {/* Dynamic Direct Download Buttons per Active OS */}
        {activeOS === 'windows' && (
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {/* Primary Direct .exe Download */}
              <a
                href={DOWNLOAD_LINKS.windowsExeDirect}
                download={`ClueAI-v${APP_VERSION}.exe`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white hover:bg-neutral-200 text-black font-bold text-xs sm:text-sm transition-all shadow-[0_2px_15px_rgba(255,255,255,0.15)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer group"
              >
                <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5 text-black" />
                <span>Download for x64</span>
              </a>

              {/* Secondary ARM64 / GitHub Direct Mirror */}
              <a
                href={DOWNLOAD_LINKS.windowsGitHubExe}
                download={`ClueAI-v${APP_VERSION}.exe`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-neutral-200 font-semibold text-xs sm:text-sm transition-all cursor-pointer group"
              >
                <Cpu className="w-4 h-4 text-neutral-400 group-hover:text-neutral-200" />
                <span>Download for ARM64</span>
              </a>
            </div>

            {/* Minimum Requirements */}
            <div className="text-xs text-neutral-400 mt-3 space-y-0.5">
              <p className="font-semibold text-neutral-300">Minimum Requirements</p>
              <p className="text-neutral-400">Windows 10 (64-bit) or later · Digital Stealth Guard Enabled</p>
            </div>
          </div>
        )}

        {activeOS === 'mac' && (
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {/* Primary Apple Silicon .dmg Direct Download */}
              <a
                href={DOWNLOAD_LINKS.macDmgDirect}
                download={`ClueAI-${APP_VERSION}-mac.dmg`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white hover:bg-neutral-200 text-black font-bold text-xs sm:text-sm transition-all shadow-[0_2px_15px_rgba(255,255,255,0.15)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer group"
              >
                <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5 text-black" />
                <span>Download for Apple Silicon</span>
              </a>

              {/* Secondary Intel x64 .dmg Download */}
              <a
                href={DOWNLOAD_LINKS.macGitHubDmg}
                download={`ClueAI-${APP_VERSION}-mac.dmg`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-neutral-200 font-semibold text-xs sm:text-sm transition-all cursor-pointer group"
              >
                <Cpu className="w-4 h-4 text-neutral-400 group-hover:text-neutral-200" />
                <span>Download for Intel</span>
              </a>
            </div>

            {/* Minimum Requirements */}
            <div className="text-xs text-neutral-400 mt-3 space-y-0.5">
              <p className="font-semibold text-neutral-300">Minimum Requirements</p>
              <p className="text-neutral-400">macOS 12 (Monterey) or later · Apple Silicon (M1/M2/M3/M4) &amp; Intel</p>
            </div>
          </div>
        )}

        {activeOS === 'linux' && (
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {/* Primary Linux AppImage Direct Download */}
              <a
                href={DOWNLOAD_LINKS.linuxAppImageDirect}
                download={`ClueAI-${APP_VERSION}-linux.AppImage`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white hover:bg-neutral-200 text-black font-bold text-xs sm:text-sm transition-all shadow-[0_2px_15px_rgba(255,255,255,0.15)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer group"
              >
                <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5 text-black" />
                <span>Download for x64</span>
              </a>

              {/* Secondary Package */}
              <a
                href={DOWNLOAD_LINKS.linuxAppImageDirect}
                download={`ClueAI-${APP_VERSION}-linux.AppImage`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-neutral-200 font-semibold text-xs sm:text-sm transition-all cursor-pointer group"
              >
                <Cpu className="w-4 h-4 text-neutral-400 group-hover:text-neutral-200" />
                <span>Download for ARM64</span>
              </a>
            </div>

            {/* Minimum Requirements */}
            <div className="text-xs text-neutral-400 mt-3 space-y-0.5">
              <p className="font-semibold text-neutral-300">Minimum Requirements</p>
              <p className="text-neutral-400">Ubuntu 20.04+, Debian 11+, Fedora 34+, or Arch Linux (glibc 2.31+)</p>
            </div>
          </div>
        )}
      </div>

      {/* Horizontal Divider Line matching Reference */}
      <hr className="border-t border-neutral-800/80 my-10" />

      {/* Clue AI CLI / Terminal Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2.5">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Clue AI CLI
          </h2>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/25">
            {APP_VERSION_TAG}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl mb-8 leading-relaxed">
          Work with Clue AI directly in your codebase. Build, debug, and ship from your terminal. Describe what you need, and Clue AI handles the rest.
        </p>

        {/* Windows Terminal Commands */}
        {activeOS === 'windows' && (
          <div className="space-y-6">
            {/* PowerShell Command Box */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-neutral-300 mb-2">
                <svg className="w-3.5 h-3.5 fill-current text-sky-400" viewBox="0 0 24 24">
                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.902-1.801" />
                </svg>
                <span>Windows PowerShell</span>
              </div>
              <div className="flex items-center justify-between bg-neutral-950 border border-neutral-800/90 rounded-2xl px-5 py-3.5 hover:border-neutral-700 transition-colors group">
                <code className="font-mono text-xs text-neutral-300 truncate mr-4 select-all">
                  {winPsCommand}
                </code>
                <button
                  type="button"
                  onClick={() => copyToClipboard('winps', winPsCommand)}
                  className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors flex-shrink-0 cursor-pointer relative"
                  title="Copy PowerShell Command"
                >
                  {copiedKey === 'winps' ? (
                    <div className="flex items-center gap-1 text-[#00E85D]">
                      <Check className="w-4 h-4 animate-in zoom-in-75 duration-200" />
                      <span className="text-[10px] font-mono font-bold">Copied!</span>
                    </div>
                  ) : (
                    <Copy className="w-4 h-4 group-hover:scale-105 transition-transform" />
                  )}
                </button>
              </div>
            </div>

            {/* CMD Command Box */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-neutral-300 mb-2">
                <svg className="w-3.5 h-3.5 fill-current text-amber-400" viewBox="0 0 24 24">
                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.902-1.801" />
                </svg>
                <span>Windows CMD</span>
              </div>
              <div className="flex items-center justify-between bg-neutral-950 border border-neutral-800/90 rounded-2xl px-5 py-3.5 hover:border-neutral-700 transition-colors group">
                <code className="font-mono text-xs text-neutral-300 truncate mr-4 select-all">
                  {winCmdCommand}
                </code>
                <button
                  type="button"
                  onClick={() => copyToClipboard('wincmd', winCmdCommand)}
                  className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors flex-shrink-0 cursor-pointer relative"
                  title="Copy CMD Command"
                >
                  {copiedKey === 'wincmd' ? (
                    <div className="flex items-center gap-1 text-[#00E85D]">
                      <Check className="w-4 h-4 animate-in zoom-in-75 duration-200" />
                      <span className="text-[10px] font-mono font-bold">Copied!</span>
                    </div>
                  ) : (
                    <Copy className="w-4 h-4 group-hover:scale-105 transition-transform" />
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* macOS Terminal Command */}
        {activeOS === 'mac' && (
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-neutral-300 mb-2">
                <svg className="w-3.5 h-3.5 fill-current text-neutral-300" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.78 1.06-1.85.94-2.94-.92.04-2.03.62-2.69 1.4-.58.68-1.09 1.77-.95 2.83 1.03.08 2.07-.51 2.7-1.29z" />
                </svg>
                <span>macOS Terminal</span>
              </div>
              <div className="flex items-center justify-between bg-neutral-950 border border-neutral-800/90 rounded-2xl px-5 py-3.5 hover:border-neutral-700 transition-colors group">
                <code className="font-mono text-xs text-neutral-300 truncate mr-4 select-all">
                  {macCurlCommand}
                </code>
                <button
                  type="button"
                  onClick={() => copyToClipboard('mac', macCurlCommand)}
                  className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors flex-shrink-0 cursor-pointer relative"
                  title="Copy macOS Command"
                >
                  {copiedKey === 'mac' ? (
                    <div className="flex items-center gap-1 text-[#00E85D]">
                      <Check className="w-4 h-4 animate-in zoom-in-75 duration-200" />
                      <span className="text-[10px] font-mono font-bold">Copied!</span>
                    </div>
                  ) : (
                    <Copy className="w-4 h-4 group-hover:scale-105 transition-transform" />
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Linux Terminal Command */}
        {activeOS === 'linux' && (
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-neutral-300 mb-2">
                <span className="text-sm">🐧</span>
                <span>Linux Terminal (Bash)</span>
              </div>
              <div className="flex items-center justify-between bg-neutral-950 border border-neutral-800/90 rounded-2xl px-5 py-3.5 hover:border-neutral-700 transition-colors group">
                <code className="font-mono text-xs text-neutral-300 truncate mr-4 select-all">
                  {linuxCommand}
                </code>
                <button
                  type="button"
                  onClick={() => copyToClipboard('linux', linuxCommand)}
                  className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors flex-shrink-0 cursor-pointer relative"
                  title="Copy Linux Command"
                >
                  {copiedKey === 'linux' ? (
                    <div className="flex items-center gap-1 text-[#00E85D]">
                      <Check className="w-4 h-4 animate-in zoom-in-75 duration-200" />
                      <span className="text-[10px] font-mono font-bold">Copied!</span>
                    </div>
                  ) : (
                    <Copy className="w-4 h-4 group-hover:scale-105 transition-transform" />
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Security & Stealth Verification Footer Pill */}
      <div className="mt-12 pt-6 border-t border-neutral-900 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#00E85D]" />
          <span>SHA-256 Verified · Undetected Anti-Screen Share · Zero Telemetry</span>
        </div>
        <div>
          <span>Target Build: {APP_VERSION_TAG} Production</span>
        </div>
      </div>
    </section>
  );
}
