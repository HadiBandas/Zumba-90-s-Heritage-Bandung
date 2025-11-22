
import React from 'react';
import { COMMITTEE_DATA } from '../constants';

export const Committee: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full p-4 max-w-7xl mx-auto">
      <div className="shrink-0 text-center mb-6 mt-2 md:mt-0 md:mb-8">
        <h2 className="text-3xl md:text-5xl font-retro-heading text-white leading-tight" style={{ textShadow: '3px 3px 0 #000' }}>
          SUSUNAN PANITIA
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto w-full pb-32 md:pb-0 px-2">
        <div className="space-y-8 pb-8">
          {COMMITTEE_DATA.map((division, idx) => (
            <div key={idx} className="w-full">
              {/* Division Header */}
              <div className={`inline-flex items-center gap-3 px-4 py-2 border-2 border-black shadow-retro mb-4 ${division.color} rounded sticky top-0 z-10`}>
                <division.icon size={20} className="text-black" />
                <h3 className="font-retro-sub text-lg md:text-xl font-bold uppercase tracking-wider">{division.division}</h3>
              </div>

              {/* Members Grid - Changed to 1 col on mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {division.members.map((member, mIdx) => (
                  <div key={mIdx} className="bg-white border-2 border-black shadow-sm p-4 md:p-5 flex flex-col h-full rounded-lg hover:shadow-retro transition-all">
                    <div className="mb-3 border-b-2 border-black/10 pb-2">
                      <span className="block font-retro-sub text-xs text-gray-500 uppercase mb-1 tracking-wide">{member.role}</span>
                      <h4 className="font-retro-heading text-2xl leading-none text-retro-purple mb-2">{member.name}</h4>
                      {member.organization && (
                        <span className="text-[10px] font-bold bg-black text-white px-2 py-0.5 rounded inline-block">
                          {member.organization}
                        </span>
                      )}
                    </div>
                    
                    {/* Job Description */}
                    {member.jobDescription && member.jobDescription.length > 0 && (
                      <div className="bg-gray-50 p-3 rounded border border-gray-200 flex-1">
                        <ul className="space-y-2">
                          {member.jobDescription.map((task, tIdx) => (
                            <li key={tIdx} className="flex items-start gap-2 text-sm font-bold text-gray-800 leading-snug">
                              <span className="text-retro-pink mt-0.5 min-w-[12px] text-xs">➤</span>
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
