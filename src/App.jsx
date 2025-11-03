import React from 'react';
import HeroSection from './components/HeroSection.jsx';
import ProcessConstellation from './components/ProcessConstellation.jsx';
import FeaturesLayers from './components/FeaturesLayers.jsx';
import FloatingCTA from './components/FloatingCTA.jsx';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased">
      {/* Hero with Spline animation and asymmetric typography */}
      <HeroSection />

      {/* Process as a broken, constellation-like path */}
      <ProcessConstellation />

      {/* Features as overlapping layers with sticky visuals */}
      <FeaturesLayers />

      {/* Floating CTA that becomes prominent after features */}
      <FloatingCTA />

      {/* Footer minimal */}
      <footer className="bg-black/95 border-t border-white/5">
        <div className="container mx-auto px-6 sm:px-10 py-10 text-sm text-white/60 font-mono">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span>Ideon — Anti-Design Futurista</span>
            <span className="text-white/40">© {new Date().getFullYear()} Ideon</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
