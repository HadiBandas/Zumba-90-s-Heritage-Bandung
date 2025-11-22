
import React from 'react';
import { KPIS } from '../constants';

export const KPI: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full p-4 max-w-5xl mx-auto">
      <div className="shrink-0 text-center mb-6 mt-2 md:mt-0 md:mb-12">
        <h2 className="text-4xl md:text-5xl font-retro-heading text-white leading-tight" style={{ textShadow: '3px 3px 0 #000' }}>
          TARGET KESUKSESAN
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto w-full pb-24 md:pb-0 px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full pb-4">
          {KPIS.map((kpi, idx) => (
              <div key={idx} className={`${kpi.color} border-2 border-black p-8 shadow-retro flex flex-col items-center justify-center text-center h-40 md:h-64 transition-transform hover:scale-105 rounded-lg shrink-0`}>
                  <kpi.icon className="mb-4 w-10 h-10 md:w-12 md:h-12" />
                  <span className="font-retro-heading text-5xl md:text-7xl mb-2">{kpi.value}</span>
                  <span className="font-body font-bold uppercase tracking-wider text-sm md:text-base">{kpi.label}</span>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};