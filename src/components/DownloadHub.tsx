import React, { useState } from 'react';

export function DownloadHub() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2200);
  };

  const winPsCommand = `irm https://raw.githubusercontent.com/HelloWorld-Farhan/ClueAi-Web/main/install.ps1 | iex`;
  const winCmdCommand = `curl -fsSL https://github.com/HelloWorld-Farhan/ClueAI/releases/latest/download/ClueAI-v5.9.9.exe -o ClueAI.exe && start ClueAI.exe`;
  const macCurlCommand = `curl -fsSL https://github.com/HelloWorld-Farhan/ClueAI/releases/latest/download/ClueAI-5.9.9-mac.dmg -o ClueAI.dmg && hdiutil attach ClueAI.dmg`;
  const linuxCommand = `curl -fsSL https://github.com/HelloWorld-Farhan/ClueAI/releases/latest/download/ClueAI-5.9.9-linux.AppImage -o ClueAI.AppImage && chmod +x ClueAI.AppImage && ./ClueAI.AppImage`;

  return (
    <section id="downloads" className="relative z-20 w-full max-w-4xl mx-auto px-6 py-12 md:py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="text-[11px] font-mono tracking-widest text-[#00E85D] uppercase">
          CROSS-PLATFORM INSTALLATION
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-1">
          Install Clue AI in Seconds
        </h2>
        <p className="text-neutral-400 text-xs md:text-sm mt-2 max-w-lg mx-auto">
          One-line terminal commands for macOS, Windows &amp; Linux. Fully verified, digitally signed &amp; undetected.
        </p>
      </div>

      {/* Grid of OS Platforms */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* macOS Terminal Box */}
        <div className="p-5 bg-[#0d0d0d] border border-neutral-800 rounded-xl flex flex-col justify-between hover:border-neutral-700 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-lg">🍎</span>
                <div>
                  <h3 className="text-sm font-bold text-white">macOS (Apple Silicon &amp; Intel)</h3>
                  <span className="text-[10px] text-neutral-400 font-mono">Terminal One-Liner</span>
                </div>
              </div>
              <span className="pill-link">macOS 12+</span>
            </div>

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
              href="https://github.com/HelloWorld-Farhan/ClueAI/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-neutral-400 hover:text-white transition"
            >
              Direct .dmg ↗
            </a>
          </div>
        </div>

        {/* Windows PowerShell Box */}
        <div className="p-5 bg-[#0d0d0d] border border-neutral-800 rounded-xl flex flex-col justify-between hover:border-neutral-700 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-lg">🪟</span>
                <div>
                  <h3 className="text-sm font-bold text-white">Windows (10 &amp; 11 x64)</h3>
                  <span className="text-[10px] text-neutral-400 font-mono">PowerShell Quick Launch</span>
                </div>
              </div>
              <span className="pill-link">v5.9.9 Setup</span>
            </div>

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
              href="https://github.com/HelloWorld-Farhan/ClueAI/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-neutral-400 hover:text-white transition"
            >
              Direct .exe ↗
            </a>
          </div>
        </div>

        {/* Windows CMD Alternative */}
        <div className="p-5 bg-[#0d0d0d] border border-neutral-800 rounded-xl flex flex-col justify-between hover:border-neutral-700 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-lg">⚡</span>
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
                <span className="text-lg">🐧</span>
                <div>
                  <h3 className="text-sm font-bold text-white">Linux (Ubuntu / Fedora / Arch)</h3>
                  <span className="text-[10px] text-neutral-400 font-mono">Portable AppImage</span>
                </div>
              </div>
              <span className="pill-link">x64 AppImage</span>
            </div>

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
