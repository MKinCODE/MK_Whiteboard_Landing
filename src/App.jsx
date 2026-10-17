import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractiveAppPreview from './components/InteractiveAppPreview';
import TrustAndSpecs from './components/TrustAndSpecs';
import BottomSection from './components/BottomSection';

export default function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Hero />
        <InteractiveAppPreview />
        <TrustAndSpecs />
        <BottomSection />
      </main>
      <Analytics />
    </div>
  );
}
