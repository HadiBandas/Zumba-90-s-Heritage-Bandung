
import React from 'react';
import { MC_ADLIB_DATA } from '../constants';
import { Mic, MessageSquare, Sparkles, Instagram } from 'lucide-react';

export const MCAdLibs: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full p-4 max-w-7xl mx-auto">
      <div className="shrink-0 text-center mb-6 mt-2 md:mt-0 md:mb-8">
        <h2 className="text-3xl md:text-5xl font-retro-heading text-white leading-tight" style={{ textShadow: '3px 3px 0 #000' }}>
          GUIDELINE MC AD-LIBS
        </h2>
        <p className="text-white font-retro-sub text-sm md:text-base mt-1 opacity-90">
          CUE CARDS FOR SPONSOR MENTIONS
        </p>
      </div>

      <div className="flex-1 overflow-y-auto w-full pb-32 md:pb-0 px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-4">
          {MC_ADLIB_DATA.map((item, idx) => (
            <div 
              key={idx} 
              className="relative group bg-white border-2 border-black shadow-retro rounded-lg overflow-hidden flex flex-col h-full transform transition-transform hover:-translate-y-1"
            >
              {/* Header */}
              <div className={`${item.color} p-3 md:p-4 border-b-2 border-black flex flex-col justify-between items-start relative overflow-hidden`}>
                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#000_1px,transparent_1px)] bg-[size:8px_8px]"></div>
                
                <h3 className={`font-retro-heading text-xl md:text-2xl leading-none mb-2 z-10 ${item.color.includes('text-white') ? 'text-white' : 'text-black'}`}>
                  {item.sponsor}
                </h3>
                <div className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-sm px-2 py-1 rounded text-[10px] md:text-xs font-bold uppercase text-white z-10">
                  <Sparkles size={12} />
                  <span>Tone: {item.tone}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex-1 flex flex-col gap-3 bg-white">
                
                {/* Instagram Section */}
                {item.instagram && (
                  <div className="bg-gray-100 p-2 rounded border border-gray-300 mb-1 flex items-center gap-2">
                    <Instagram size={16} className="text-retro-purple" />
                    <span className="font-bold font-body text-xs md:text-sm text-gray-800 truncate w-full">
                      {item.instagram}
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-2 text-gray-500 font-retro-sub text-xs uppercase border-b border-gray-200 pb-1 mb-1">
                    <MessageSquare size={14} />
                    <span>Talking Points</span>
                </div>
                <ul className="space-y-3">
                    {item.talkingPoints.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-sm font-body font-medium text-gray-800 leading-snug">
                            <Mic className="shrink-0 w-4 h-4 text-retro-purple mt-0.5" />
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
              </div>

              {/* Bottom Decoration */}
              <div className="h-2 w-full bg-black mt-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
