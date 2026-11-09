import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveDockPreview } from './components/InteractiveDockPreview';
import { FeatureShowcase } from './components/FeatureShowcase';
import { DownloadHub } from './components/DownloadHub';
import { FeedbackModal } from './components/FeedbackModal';
import { Footer } from './components/Footer';
import { MessageSquarePlus } from 'lucide-react';

export function App() {
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  const scrollToDownload = () => {
    const el = document.getElementById('downloads');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white flex flex-col justify-between selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Navbar */}
      <Navbar
        onOpenFeedback={() => setFeedbackOpen(true)}
        onScrollToDownload={scrollToDownload}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onScrollToDownload={scrollToDownload}
          onOpenFeedback={() => setFeedbackOpen(true)}
        />

        {/* Interactive Live Dock Demo */}
        <InteractiveDockPreview />

        {/* Feature Showcase Grid */}
        <FeatureShowcase />

        {/* Multi-Platform Download Hub */}
        <DownloadHub />
      </main>

      {/* Footer */}
      <Footer onOpenFeedback={() => setFeedbackOpen(true)} />

      {/* Floating Bottom Feedback Pill */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setFeedbackOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white border border-cyan-500/40 hover:border-cyan-400 shadow-2xl shadow-cyan-950/80 backdrop-blur-xl text-xs font-bold transition-all duration-200 group hover:scale-105"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <MessageSquarePlus size={15} className="text-cyan-400 group-hover:rotate-12 transition-transform" />
          <span>Feedback</span>
        </button>
      </div>

      {/* Interactive Google Apps Script Feedback Popup */}
      <FeedbackModal
        isOpen={feedbackOpen}
        onClose={() => setFeedbackOpen(false)}
      />
    </div>
  );
}

export default App;

