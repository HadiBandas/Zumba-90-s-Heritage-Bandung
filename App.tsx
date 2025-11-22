
import React, { useState, useRef, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Concept } from './components/Concept';
import { Audience } from './components/Audience';
import { Objectives } from './components/Objectives';
import { Sponsors } from './components/Sponsors';
import { SponsorshipDetails } from './components/SponsorshipDetails';
import { MCAdLibs } from './components/MCAdLibs';
import { Rundown } from './components/Rundown';
import { Prizes } from './components/Prizes';
import { PrizeDistribution } from './components/PrizeDistribution';
import { LayoutMap } from './components/LayoutMap';
import { RACI } from './components/RACI';
import { KPI } from './components/KPI';
import { Committee } from './components/Committee';
import { Contact } from './components/Contact';
import { ChevronDown, ChevronUp, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  { id: 'hero', label: 'Home', component: Hero },
  { id: 'concept', label: 'Konsep', component: Concept },
  { id: 'audience', label: 'Audiens', component: Audience },
  { id: 'objectives', label: 'Tujuan', component: Objectives },
  { id: 'sponsors', label: 'Sponsor', component: Sponsors },
  { id: 'sponsorship-details', label: 'Detail Sponsor', component: SponsorshipDetails },
  { id: 'mc-adlibs', label: 'MC Ad-libs', component: MCAdLibs },
  { id: 'rundown', label: 'Rundown', component: Rundown },
  { id: 'prizes', label: 'Doorprize', component: Prizes },
  { id: 'prize-dist', label: 'Distribusi Hadiah', component: PrizeDistribution },
  { id: 'map', label: 'Peta Lokasi', component: LayoutMap },
  { id: 'raci', label: 'RACI Matrix', component: RACI },
  { id: 'kpi', label: 'KPI', component: KPI },
  { id: 'committee', label: 'Panitia', component: Committee },
  { id: 'contact', label: 'Kontak', component: Contact },
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const index = Math.round(
        scrollRef.current.scrollTop / window.innerHeight
      );
      setActiveSection(index);
    }
  };

  const scrollToSection = (index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth',
      });
      setActiveSection(index);
      setIsMenuOpen(false);
    }
  };

  const nextSection = () => {
    if (activeSection < sections.length - 1) scrollToSection(activeSection + 1);
  };

  const prevSection = () => {
    if (activeSection > 0) scrollToSection(activeSection - 1);
  };

  return (
    <div className="h-[100dvh] w-full overflow-hidden bg-retro-bg text-black font-body relative">
      
      {/* Desktop Navigation Dots (Hidden on Mobile) */}
      <div className="hidden md:flex fixed right-4 top-1/2 transform -translate-y-1/2 z-50 flex-col gap-3">
        {sections.map((item, idx) => (
          <div key={idx} className="group relative flex items-center justify-end">
            {/* Tooltip */}
            <span className="absolute right-8 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-retro-sub border-2 border-white">
              {item.label}
            </span>
            <button
              onClick={() => scrollToSection(idx)}
              className={`w-4 h-4 border-2 border-black transition-all duration-300 rounded-full ${
                activeSection === idx 
                  ? 'bg-retro-lime scale-125 shadow-[2px_2px_0px_rgba(0,0,0,1)]' 
                  : 'bg-white hover:bg-gray-200'
              }`}
              aria-label={`Go to ${item.label}`}
            />
          </div>
        ))}
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t-4 border-black z-50 px-4 py-3 pb-safe shadow-[0px_-4px_10px_rgba(0,0,0,0.2)] flex justify-between items-center">
        <button 
          onClick={prevSection} 
          disabled={activeSection === 0}
          className="p-2 border-2 border-black bg-retro-yellow shadow-retro-sm disabled:opacity-50 active:translate-y-1 active:shadow-none transition-all rounded-lg"
        >
          <ChevronLeft size={24} />
        </button>

        <button 
          onClick={() => setIsMenuOpen(true)}
          className="flex flex-col items-center justify-center w-32"
        >
          <span className="font-retro-heading text-xl leading-none mb-1 text-retro-purple">
            {activeSection + 1} / {sections.length}
          </span>
          <span className="text-xs font-bold truncate w-full text-center">
            {sections[activeSection].label}
          </span>
        </button>

        <button 
          onClick={nextSection} 
          disabled={activeSection === sections.length - 1}
          className="p-2 border-2 border-black bg-retro-lime shadow-retro-sm disabled:opacity-50 active:translate-y-1 active:shadow-none transition-all rounded-lg"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-retro-bg/95 backdrop-blur-sm flex flex-col p-6 md:hidden"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-retro-heading text-white">MENU NAVIGASI</h2>
              <button onClick={() => setIsMenuOpen(false)} className="bg-white p-2 rounded-full border-2 border-black text-red-600 shadow-retro-sm">
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto space-y-3 pb-10 pr-2">
              {sections.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(idx)}
                  className={`w-full text-left p-4 border-2 border-black shadow-retro-sm font-bold text-lg transition-all rounded-lg ${
                    activeSection === idx 
                      ? 'bg-retro-yellow translate-x-2' 
                      : 'bg-white hover:bg-gray-100'
                  }`}
                >
                  <span className="font-retro-heading mr-3 text-retro-purple">#{idx + 1}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Prompt (Desktop Only) */}
      {activeSection === 0 && (
         <div className="hidden md:flex fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 animate-bounce text-white flex-col items-center pointer-events-none">
            <span className="font-retro-sub text-sm mb-1">SCROLL TO GROOVE</span>
            <ChevronDown size={32} />
         </div>
      )}

      {/* Main Scroll Container */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="h-full w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth"
      >
        {sections.map((Section, idx) => (
          <section 
            key={idx} 
            className="h-[100dvh] w-full snap-start relative flex items-center justify-center overflow-hidden"
          >
            {/* Each section takes full width/height and handles its own internal scrolling if needed */}
            <div className="w-full h-full max-w-7xl mx-auto relative">
               <Section.component />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default App;
