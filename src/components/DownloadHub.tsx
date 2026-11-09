import React, { useState } from 'react';
import { APP_VERSION, APP_VERSION_TAG, DOWNLOAD_LINKS } from '../config/version';

export function DownloadHub() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2200);
  };

  const winPsCommand = DOWNLOAD_LINKS.windowsPsScript;
  const winCmdCommand = DOWNLOAD_LINKS.windowsCmdScript;
  const macCurlCommand = DOWNLOAD_LINKS.macCurlScript;
  const linuxCommand = DOWNLOAD_LINKS.linuxScript;

  return (
    <section id="downloads" className="relative z-20 w-full max-w-4xl mx-auto px-6 py-12 md:py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="text-[11px] font-mono tracking-widest text-[#00E85D] uppercase">
          CROSS-PLATFORM INSTALLATION · {APP_VERSION_TAG}
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-1">
          Install Clue AI in Seconds
        </h2>
        <p className="text-neutral-400 text-xs md:text-sm mt-2 max-w-lg mx-auto">
          Instant direct installer downloads &amp; one-line terminal commands for macOS, Windows &amp; Linux. Fully verified, digitally signed &amp; undetected.
        </p>
      </div>

      {/* Grid of OS Platforms */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Windows PowerShell & Direct .exe Box */}
        <div className="p-5 bg-[#0d0d0d] border border-neutral-800 rounded-xl flex flex-col justify-between hover:border-[#00E85D]/40 transition-colors shadow-lg">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">🪟</span>
                <div>
                  <h3 className="text-sm font-bold text-white">Windows (10 &amp; 11 x64)</h3>
                  <span className="text-[10px] text-neutral-400 font-mono">Official Installer &amp; PowerShell</span>
                </div>
              </div>
              <span className="pill-link">{APP_VERSION_TAG} Setup</span>
            </div>

            {/* Direct .exe Download Button */}
            <a
              href={DOWNLOAD_LINKS.windowsExeDirect}
              target="_blank"
              rel="noopener noreferrer"
              download={`ClueAI-v${APP_VERSION}.exe`}
              className="w-full flex items-center justify-center gap-2 bg-[#00E85D] hover:bg-[#05f566] text-black font-extrabold text-xs md:text-sm py-2.5 px-4 rounded-lg shadow-[0_0_15px_rgba(0,232,93,0.35)] hover:shadow-[0_0_24px_rgba(0,232,93,0.6)] transition-all cursor-pointer mb-3 group"
            >
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-y-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download ClueAI-v{APP_VERSION}.exe</span>
            </a>

            {/* Terminal Command Snippet */}
            <div className="bg-black/80 rounded-lg p-3 border border-neutral-900 font-mono text-[11px] text-neutral-300 break-all relative group">
              <code>{winPsCommand}</code>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 pt-3 border-t border-neutral-900">
            <button
              onClick={() => copyToClipboard('winps', winPsCommand)}
              className="text-xs text-[#00E85D] font-mono hover:underline flex items-center gap-1 cursor-pointer"
            >
              {copiedKey === 'winps' ? '✓ Copied to PowerShell' : 'Copy PowerShell Command'}
            </button>
            <a
              href={DOWNLOAD_LINKS.windowsGitHubExe}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-neutral-400 hover:text-white transition"
            >
              Mirror Link ↗
            </a>
          </div>
        </div>

        {/* macOS Terminal & Direct .dmg Box */}
        <div className="p-5 bg-[#0d0d0d] border border-neutral-800 rounded-xl flex flex-col justify-between hover:border-[#00E85D]/40 transition-colors shadow-lg">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">🍎</span>
                <div>
                  <h3 className="text-sm font-bold text-white">macOS (Apple Silicon &amp; Intel)</h3>
                  <span className="text-[10px] text-neutral-400 font-mono">Universal .dmg &amp; Terminal</span>
                </div>
              </div>
              <span className="pill-link">macOS 12+</span>
            </div>

            {/* Direct .dmg Download Button */}
            <a
              href={DOWNLOAD_LINKS.macDmgDirect}
              target="_blank"
              rel="noopener noreferrer"
              download={`ClueAI-${APP_VERSION}-mac.dmg`}
              className="w-full flex items-center justify-center gap-2 bg-[#00E85D] hover:bg-[#05f566] text-black font-extrabold text-xs md:text-sm py-2.5 px-4 rounded-lg shadow-[0_0_15px_rgba(0,232,93,0.35)] hover:shadow-[0_0_24px_rgba(0,232,93,0.6)] transition-all cursor-pointer mb-3 group"
            >
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-y-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download ClueAI-{APP_VERSION}.dmg</span>
            </a>

            {/* Terminal Command Snippet */}
            <div className="bg-black/80 rounded-lg p-3 border border-neutral-900 font-mono text-[11px] text-neutral-300 break-all relative group">
              <code>{macCurlCommand}</code>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 pt-3 border-t border-neutral-900">
            <button
              onClick={() => copyToClipboard('mac', macCurlCommand)}
              className="text-xs text-[#00E85D] font-mono hover:underline flex items-center gap-1 cursor-pointer"
            >
              {copiedKey === 'mac' ? '✓ Copied to Terminal' : 'Copy macOS Command'}
            </button>
            <a
              href={DOWNLOAD_LINKS.macGitHubDmg}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-neutral-400 hover:text-white transition"
            >
              Mirror Link ↗
            </a>
          </div>
        </div>

        {/* Windows CMD Alternative */}
        <div className="p-5 bg-[#0d0d0d] border border-neutral-800 rounded-xl flex flex-col justify-between hover:border-neutral-700 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">⚡</span>
                <div>
                  <h3 className="text-sm font-bold text-white">Windows Command Prompt (CMD)</h3>
                  <span className="text-[10px] text-neutral-400 font-mono">Silent Curl &amp; Exec</span>
                </div>
              </div>
              <span className="pill-link">Stand-alone</span>
            </div>

            <div className="bg-black/80 rounded-lg p-3 border border-neutral-900 font-mono text-[11px] text-neutral-300 break-all relative group">
              <code>{winCmdCommand}</code>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 pt-3 border-t border-neutral-900">
            <button
              onClick={() => copyToClipboard('wincmd', winCmdCommand)}
              className="text-xs text-[#00E85D] font-mono hover:underline flex items-center gap-1 cursor-pointer"
            >
              {copiedKey === 'wincmd' ? '✓ Copied to CMD' : 'Copy CMD Command'}
            </button>
            <span className="text-[10px] text-neutral-500 font-mono">Auto Closes Terminal</span>
          </div>
        </div>

        {/* Linux AppImage */}
        <div className="p-5 bg-[#0d0d0d] border border-neutral-800 rounded-xl flex flex-col justify-between hover:border-neutral-700 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">🐧</span>
                <div>
                  <h3 className="text-sm font-bold text-white">Linux (Ubuntu / Fedora / Arch)</h3>
                  <span className="text-[10px] text-neutral-400 font-mono">Portable AppImage</span>
                </div>
              </div>
              <span className="pill-link">x64 AppImage</span>
            </div>

            {/* Direct AppImage Download Button */}
            <a
              href={DOWNLOAD_LINKS.linuxAppImageDirect}
              target="_blank"
              rel="noopener noreferrer"
              download={`ClueAI-${APP_VERSION}-linux.AppImage`}
              className="w-full flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white font-bold text-xs py-2 px-3 rounded-lg border border-neutral-800 hover:border-[#00E85D]/50 transition-all cursor-pointer mb-3"
            >
              <svg className="w-3.5 h-3.5 text-[#00E85D]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download ClueAI-{APP_VERSION}.AppImage</span>
            </a>

            <div className="bg-black/80 rounded-lg p-3 border border-neutral-900 font-mono text-[11px] text-neutral-300 break-all relative group">
              <code>{linuxCommand}</code>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 pt-3 border-t border-neutral-900">
            <button
              onClick={() => copyToClipboard('linux', linuxCommand)}
              className="text-xs text-[#00E85D] font-mono hover:underline flex items-center gap-1 cursor-pointer"
            >
              {copiedKey === 'linux' ? '✓ Copied to Terminal' : 'Copy Linux Command'}
            </button>
            <span className="text-[10px] text-neutral-500 font-mono">No Root Required</span>
          </div>
        </div>
      </div>
    </section>
  );
}
