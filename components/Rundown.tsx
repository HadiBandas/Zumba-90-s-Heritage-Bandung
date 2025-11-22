import React from 'react';
import { RUNDOWN_DATA } from '../constants';

export const Rundown: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full p-4 max-w-5xl mx-auto">
      <div className="shrink-0 text-center mb-6 mt-2 md:mt-0 md:mb-8">
        <h2 className="text-3xl md:text-5xl font-retro-heading text-white leading-tight" style={{ textShadow: '3px 3px 0 #000' }}>
          RUNDOWN ACARA
        </h2>
      </div>
      
      <div className="flex-1 overflow-y-auto w-full pb-24 md:pb-0">
        <div className="w-full bg-white border-4 border-black shadow-retro p-4 md:p-6 rounded-xl mb-4">
          <div className="space-y-6">
              {RUNDOWN_DATA.map((item, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-2 md:gap-4 border-b-2 border-dashed border-gray-300 pb-4 last:border-0 last:pb-0">
                      <div className="md:w-1/4 shrink-0">
                          <div className="inline-flex items-center gap-2 bg-retro-purple text-white px-3 py-1 rounded-md font-bold font-retro-sub text-xs md:text-sm border border-black shadow-sm w-full md:w-auto justify-center md:justify-start">
                              {item.icon && <item.icon size={16} />}
                              {item.time}
                          </div>
                      </div>
                      <div className="md:w-3/4 pl-2 md:pl-0 border-l-4 md:border-l-0 border-retro-pink md:border-none">
                          <h3 className="font-retro-heading text-lg md:text-2xl text-black mb-1 md:mb-2 leading-tight">{item.title}</h3>
                          <ul className="font-body font-medium text-sm space-y-1 text-gray-700">
                              {item.details.map((detail, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                      <span className="text-retro-cyan mt-1 text-xs">●</span>
                                      {detail}
                                  </li>
                              ))}
                          </ul>
                      </div>
                  </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};