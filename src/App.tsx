import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { ArcHorizonShowcase } from './components/ArcHorizonShowcase';
import { AmbientQuoteSection } from './components/AmbientQuoteSection';
import { DownloadHub } from './components/DownloadHub';
import { BottomFloatingDock } from './components/BottomFloatingDock';
import { Footer } from './components/Footer';
import { FeedbackModal } from './components/FeedbackModal';
import { FeatureModal, FeatureKey } from './components/FeatureModal';

export function App() {
  // Pure black focus entrance: Navbar & Dock smoothly bloom after headline reveals
  const [isEntranceComplete, setIsEntranceComplete] = useState(false);
  // Starts with Clue AI Ambient ("The undetected copilot for technical interviews") as front view by default
  const [activeView, setActiveView] = useState<'arc' | 'ambient' | 'download'>('ambient');
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<FeatureKey | null>(null);

  const handleScrollToDownload = () => {
    setIsEntranceComplete(true);
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
      {/* Top Fixed Header with Smooth Cinematic Entrance */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={isEntranceComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: -25 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full relative z-50"
      >
        <Navbar
          activeView={activeView}
          setActiveView={(view) => {
            setIsEntranceComplete(true);
            setActiveView(view);
          }}
          onOpenFeedback={() => setFeedbackOpen(true)}
        />
      </motion.div>

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
            <AmbientQuoteSection
              onActionClick={handleScrollToDownload}
              onEntranceComplete={() => setIsEntranceComplete(true)}
            />
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

      {/* Fixed Bottom Timeline Dock & Live Pulse Pill with Smooth Entrance */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={isEntranceComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-40"
      >
        <BottomFloatingDock
          onPrev={() => {
            setIsEntranceComplete(true);
            setActiveView((prev) => (prev === 'arc' ? 'download' : prev === 'ambient' ? 'arc' : 'ambient'));
          }}
          onNext={() => {
            setIsEntranceComplete(true);
            setActiveView((prev) => (prev === 'arc' ? 'ambient' : prev === 'ambient' ? 'download' : 'arc'));
          }}
          onOpenOptions={() => setFeedbackOpen(true)}
          onGoToDownload={handleScrollToDownload}
        />
      </motion.div>

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
