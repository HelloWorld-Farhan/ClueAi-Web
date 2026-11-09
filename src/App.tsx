import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ArcHorizonShowcase } from './components/ArcHorizonShowcase';
import { AmbientQuoteSection } from './components/AmbientQuoteSection';
import { DownloadHub } from './components/DownloadHub';
import { BottomFloatingDock } from './components/BottomFloatingDock';
import { Footer } from './components/Footer';
import { FeedbackModal } from './components/FeedbackModal';
import { IntroPreloader } from './components/IntroPreloader';
import { FeatureModal, FeatureKey } from './components/FeatureModal';

export function App() {
  // Cinematic word-by-word blur preloader on whole black background
  const [showPreloader, setShowPreloader] = useState(true);
  // Starts with Clue AI Ambient ("This is no substitute for hard code") as front view by default
  const [activeView, setActiveView] = useState<'arc' | 'ambient' | 'download'>('ambient');
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<FeatureKey | null>(null);

  const handleScrollToDownload = () => {
    setActiveView('download');
    setTimeout(() => {
      const el = document.getElementById('downloads');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between selection:bg-neutral-800 selection:text-white font-sans overflow-x-hidden relative">
      {/* Cinematic Blur-Per-Word Intro Preloader on Pitch Black Background */}
      {showPreloader && (
        <IntroPreloader onComplete={() => setShowPreloader(false)} />
      )}

      {/* Top Fixed Header (From code.html) */}
      <Navbar
        activeView={activeView}
        setActiveView={setActiveView}
        onOpenFeedback={() => setFeedbackOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-16">
        {activeView === 'arc' && (
          <div className="animate-fadeIn">
            <ArcHorizonShowcase
              onGoToDownload={handleScrollToDownload}
              onOpenFeedback={() => setFeedbackOpen(true)}
            />
          </div>
        )}

        {activeView === 'ambient' && (
          <div className="animate-fadeIn">
            <AmbientQuoteSection onActionClick={handleScrollToDownload} />
          </div>
        )}

        {activeView === 'download' && (
          <div className="animate-fadeIn pt-6">
            <DownloadHub />
          </div>
        )}

        {/* When in Arc mode, also show the Download Hub underneath */}
        {activeView === 'arc' && (
          <div className="border-t border-neutral-900/80 mt-10">
            <DownloadHub />
          </div>
        )}
      </main>

      {/* Fixed Bottom Timeline Dock & Live Pulse Pill (Exact from code.html) */}
      <BottomFloatingDock
        onPrev={() => setActiveView((prev) => (prev === 'arc' ? 'download' : prev === 'ambient' ? 'arc' : 'ambient'))}
        onNext={() => setActiveView((prev) => (prev === 'arc' ? 'ambient' : prev === 'ambient' ? 'download' : 'arc'))}
        onOpenOptions={() => setFeedbackOpen(true)}
      />

      {/* Page Footer */}
      <Footer
        onOpenFeedback={() => setFeedbackOpen(true)}
        onSelectFeature={(key) => setSelectedFeature(key)}
      />

      {/* Google Apps Script Feedback Popup */}
      <FeedbackModal
        isOpen={feedbackOpen}
        onClose={() => setFeedbackOpen(false)}
      />

      {/* Interactive Feature Simulation Modal */}
      <FeatureModal
        featureKey={selectedFeature}
        onClose={() => setSelectedFeature(null)}
        onGoToDownload={handleScrollToDownload}
      />
    </div>
  );
}

export default App;
