
import React, { useState } from 'react';
import { SPONSORSHIP_DETAILS } from '../constants';
import { Handshake, Gift, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const SponsorshipDetails: React.FC = () => {
  // State to track which item is expanded (by index). -1 means none.
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <div className="flex flex-col h-full w-full p-4 max-w-6xl mx-auto">
      <div className="shrink-0 text-center mb-6 mt-2 md:mt-0 md:mb-8">
        <h2 className="text-3xl md:text-5xl font-retro-heading text-white leading-tight" style={{ textShadow: '3px 3px 0 #000' }}>
          DETAIL & BARTER VALUE
        </h2>
      </div>
      
      <div className="flex-1 overflow-y-auto w-full pb-36 md:pb-0 px-2">
        <div className="flex flex-col gap-4 pb-4">
          {SPONSORSHIP_DETAILS.map((item, idx) => {
            const isExpanded = expandedIndex === idx;
            
            return (
              <div 
                key={idx} 
                className={`bg-white border-2 border-black shadow-retro rounded-lg overflow-hidden transition-all duration-300 ${isExpanded ? 'ring-4 ring-retro-yellow/50' : ''} shrink-0`}
              >
                {/* Header (Clickable) */}
                <button 
                  onClick={() => toggleExpand(idx)}
                  className="w-full p-3 md:p-4 flex justify-between items-center text-left transition-colors hover:brightness-110"
                  style={{ backgroundColor: item.color }}
                >
                  <div className="flex flex-col pr-2 w-full">
                    <h3 
                      className="font-retro-heading text-lg md:text-2xl leading-tight mb-1"
                      style={{ color: item.textColor }}
                    >
                      {item.name}
                    </h3>
                    <div className="flex items-center justify-between w-full mt-1">
                      <span 
                        className="font-retro-sub text-[10px] md:text-xs uppercase px-2 py-0.5 bg-black text-white rounded w-fit"
                      >
                        {item.role}
                      </span>
                    </div>
                  </div>
                  <div className="bg-black/20 p-1 rounded-full shrink-0 ml-2" style={{ color: item.textColor }}>
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>

                {/* Collapsible Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-3 md:p-4 grid grid-cols-1 md:grid-cols-2 gap-4 border-t-2 border-black">
                        {/* Support / Contribution */}
                        <div className="bg-gray-50 p-3 md:p-4 rounded-lg border-2 border-gray-200">
                           <div className="flex items-center gap-2 mb-3 text-retro-purple border-b-2 border-retro-purple/20 pb-2">
                              <Gift size={20} />
                              <h4 className="font-bold font-retro-sub text-base md:text-lg">SUPPORT</h4>
                           </div>
                           <ul className="space-y-2">
                              {item.support.map((text, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs md:text-sm font-body leading-snug">
                                  <span className="text-black font-bold min-w-[10px]">•</span>
                                  {text}
                                </li>
                              ))}
                           </ul>
                        </div>

                        {/* Benefits / Compensation */}
                        <div className="bg-retro-yellow/10 p-3 md:p-4 rounded-lg border-2 border-retro-yellow/50">
                           <div className="flex items-center gap-2 mb-3 text-black border-b-2 border-black/10 pb-2">
                              <Handshake size={20} />
                              <h4 className="font-bold font-retro-sub text-base md:text-lg">KOMPENSASI</h4>
                           </div>
                           <ul className="space-y-2">
                              {item.benefits.map((text, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs md:text-sm font-body leading-snug">
                                  <span className="text-retro-pink font-bold min-w-[15px]">✓</span>
                                  {text}
                                </li>
                              ))}
                           </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
          
          {/* Operational Note */}
          <div className="mt-2 bg-yellow-100 border-2 border-black p-4 text-xs md:text-sm font-body font-medium rounded-lg mb-4">
              <strong className="font-bold underline block mb-1">CATATAN:</strong>
              <ul className="list-disc pl-5 space-y-1 text-gray-800">
                  <li>Disarankan memberikan piagam terima kasih kepada seluruh sponsor.</li>
                  <li>Booth hanya bersifat sementara selama event berlangsung.</li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
