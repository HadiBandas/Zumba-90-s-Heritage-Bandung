
import React from 'react';
import { PRIZE_DISTRIBUTION_DATA } from '../constants';

export const PrizeDistribution: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full p-4 max-w-7xl mx-auto relative">
      {/* Header Section - Fixed at top */}
      <div className="shrink-0 text-center mb-4 mt-2 md:mt-0 md:mb-8 z-10">
        <h2 className="text-3xl md:text-5xl font-retro-heading text-white shrink-0 leading-tight" style={{ textShadow: '3px 3px 0 #000' }}>
          DETAIL PEMBAGIAN HADIAH
        </h2>
      </div>

      {/* Content Section - Scrollable with increased bottom padding for mobile nav */}
      <div className="flex-1 overflow-y-auto w-full pb-36 md:pb-0 px-1 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-4">
          {PRIZE_DISTRIBUTION_DATA.map((section, idx) => (
            <div 
              key={idx} 
              className="bg-white border-2 border-black shadow-retro flex flex-col rounded-lg overflow-hidden shrink-0 h-auto"
            >
              {/* Header */}
              <div className={`${section.color} p-4 border-b-2 border-black flex flex-col items-center text-center shrink-0`}>
                <div className="bg-white border-2 border-black p-3 rounded-full mb-3 shadow-sm">
                  <section.icon size={28} className="text-black" />
                </div>
                <h3 className="font-retro-heading text-xl md:text-2xl tracking-wide text-black leading-none">
                  {section.category}
                </h3>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col grow">
                {/* Mechanism Box */}
                <div className="bg-gray-100 border-2 border-black border-dashed p-3 rounded-md mb-4 text-sm font-body italic shrink-0 text-gray-700">
                  <span className="font-bold not-italic block mb-1 text-black">CARA MENDAPATKAN:</span>
                  "{section.mechanism}"
                </div>

                {/* Items List */}
                <div className="w-full">
                  <h4 className="font-retro-sub font-bold text-lg mb-2 border-b border-gray-300">ITEM & KUOTA</h4>
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex justify-between items-start text-sm font-body border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                        <div className="flex flex-col text-left pr-2">
                          <span className="font-bold text-black leading-tight">{item.name}</span>
                          <span className="text-gray-500 text-[10px] md:text-xs mt-0.5 uppercase tracking-wider">By {item.sponsor}</span>
                          {item.pic && (
                            <span className="text-retro-purple text-[10px] md:text-xs font-bold uppercase tracking-wider mt-0.5">
                              PIC: {item.pic}
                            </span>
                          )}
                        </div>
                        <span className="bg-black text-white px-2 py-1 rounded-full text-[10px] md:text-xs font-bold shrink-0 whitespace-nowrap">
                          {item.quantity}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
