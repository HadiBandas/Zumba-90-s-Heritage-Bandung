
import React from 'react';
import { RACI_DATA } from '../constants';
import { Info } from 'lucide-react';

export const RACI: React.FC = () => {
  const getRoleClass = (code: string) => {
    switch (code) {
      case 'R': return 'bg-retro-lime text-black font-bold border-2 border-black shadow-sm';
      case 'A': return 'bg-retro-pink text-white font-bold border-2 border-black shadow-sm';
      case 'C': return 'bg-retro-yellow text-black font-bold border-2 border-black shadow-sm';
      case 'I': return 'bg-retro-cyan text-black font-bold border-2 border-black shadow-sm';
      default: return 'bg-white/50 text-gray-300 font-bold';
    }
  };

  return (
    <div className="flex flex-col h-full w-full p-4 max-w-7xl mx-auto">
      <div className="shrink-0 text-center mb-4 mt-2 md:mt-0 md:mb-6">
        <h2 className="text-3xl md:text-5xl font-retro-heading text-white leading-tight" style={{ textShadow: '3px 3px 0 #000' }}>
          RACI MATRIX
        </h2>
        <p className="text-white font-retro-sub text-xs md:text-sm opacity-90 tracking-wide">
          PEMBAGIAN TUGAS & TANGGUNG JAWAB
        </p>
      </div>

      <div className="flex-1 overflow-y-auto w-full pb-32 md:pb-0 px-2">
        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6">
          <div className="flex items-center gap-2 bg-white p-2 rounded border-2 border-black shadow-retro-sm">
            <span className="w-6 h-6 flex items-center justify-center bg-retro-lime border-2 border-black font-bold text-xs">R</span>
            <div className="flex flex-col leading-none">
                <span className="font-bold text-xs">RESPONSIBLE</span>
                <span className="text-[10px] text-gray-500">Pelaksana (Doer)</span>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white p-2 rounded border-2 border-black shadow-retro-sm">
            <span className="w-6 h-6 flex items-center justify-center bg-retro-pink text-white border-2 border-black font-bold text-xs">A</span>
             <div className="flex flex-col leading-none">
                <span className="font-bold text-xs">ACCOUNTABLE</span>
                <span className="text-[10px] text-gray-500">Penanggung Jawab (Boss)</span>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white p-2 rounded border-2 border-black shadow-retro-sm">
            <span className="w-6 h-6 flex items-center justify-center bg-retro-yellow border-2 border-black font-bold text-xs">C</span>
             <div className="flex flex-col leading-none">
                <span className="font-bold text-xs">CONSULTED</span>
                <span className="text-[10px] text-gray-500">Diskusi (Two-way)</span>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white p-2 rounded border-2 border-black shadow-retro-sm">
            <span className="w-6 h-6 flex items-center justify-center bg-retro-cyan border-2 border-black font-bold text-xs">I</span>
             <div className="flex flex-col leading-none">
                <span className="font-bold text-xs">INFORMED</span>
                <span className="text-[10px] text-gray-500">Info (One-way)</span>
            </div>
          </div>
        </div>

        {/* Matrix Table */}
        <div className="bg-white border-4 border-black shadow-retro rounded-xl overflow-hidden relative">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-sm md:text-base">
              <thead>
                <tr className="bg-black text-white">
                  <th className="p-3 text-left font-retro-sub tracking-wider border-r-4 border-black w-[30%] min-w-[160px] sticky left-0 bg-white text-black z-20 shadow-[4px_0_8px_rgba(0,0,0,0.1)]">
                    ACTIVITY / TASK
                  </th>
                  
                  {/* Director Column */}
                  <th className="p-2 md:p-3 text-center font-retro-heading tracking-wider w-[14%] border-r border-white/20 align-top">
                    <div className="flex flex-col items-center">
                        <span className="text-retro-yellow text-lg leading-none mb-1">DIRECTOR</span>
                        <span className="text-[10px] font-body font-bold leading-tight text-white block">
                          Mahasin, Vina<br/>Chandra
                        </span>
                    </div>
                  </th>

                  {/* Event Column */}
                  <th className="p-2 md:p-3 text-center font-retro-heading tracking-wider w-[14%] border-r border-white/20 align-top">
                    <div className="flex flex-col items-center">
                        <span className="text-retro-pink text-lg leading-none mb-1">EVENT</span>
                        <span className="text-[10px] font-body font-bold leading-tight text-white block">
                          Satria (Stage)<br/>Syifa, ZIN
                        </span>
                    </div>
                  </th>

                  {/* Ops/GA Column */}
                  <th className="p-2 md:p-3 text-center font-retro-heading tracking-wider w-[14%] border-r border-white/20 align-top">
                    <div className="flex flex-col items-center">
                        <span className="text-retro-lime text-lg leading-none mb-1">OPS / TECH</span>
                        <span className="text-[10px] font-body font-bold leading-tight text-white block">
                          Rani, Jamal<br/>Windy, Nila
                        </span>
                    </div>
                  </th>

                  {/* Mkt/Reg Column */}
                  <th className="p-2 md:p-3 text-center font-retro-heading tracking-wider w-[14%] border-r border-white/20 align-top">
                     <div className="flex flex-col items-center">
                        <span className="text-retro-cyan text-lg leading-none mb-1">MKT / REG</span>
                        <span className="text-[10px] font-body font-bold leading-tight text-white block">
                          Keyla (P3K)<br/>Yayu
                        </span>
                    </div>
                  </th>

                  {/* Creative Column */}
                  <th className="p-2 md:p-3 text-center font-retro-heading tracking-wider w-[14%] align-top">
                     <div className="flex flex-col items-center">
                        <span className="text-white text-lg leading-none mb-1">CREATIVE</span>
                        <span className="text-[10px] font-body font-bold leading-tight text-white block">
                          Inuy, Alvan<br/>Dodot
                        </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="font-body font-medium">
                {RACI_DATA.map((row, idx) => {
                  // Determine row background color
                  const rowBgClass = idx % 2 === 0 ? 'bg-gray-50' : 'bg-white';
                  
                  return (
                    <tr key={idx} className={rowBgClass}>
                      {/* Sticky Column with explicit background matching the row to prevent transparency issues */}
                      <td className={`p-3 border-b border-r-4 border-black font-bold sticky left-0 z-10 text-black shadow-[4px_0_8px_rgba(0,0,0,0.05)] ${rowBgClass}`}>
                          {row.task}
                      </td>
                      <td className="p-2 border-b border-r border-gray-200 text-center">
                        <div className={`w-8 h-8 mx-auto flex items-center justify-center rounded ${getRoleClass(row.roles.director)}`}>
                          {row.roles.director}
                        </div>
                      </td>
                      <td className="p-2 border-b border-r border-gray-200 text-center">
                        <div className={`w-8 h-8 mx-auto flex items-center justify-center rounded ${getRoleClass(row.roles.event)}`}>
                          {row.roles.event}
                        </div>
                      </td>
                      <td className="p-2 border-b border-r border-gray-200 text-center">
                         <div className={`w-8 h-8 mx-auto flex items-center justify-center rounded ${getRoleClass(row.roles.ops)}`}>
                          {row.roles.ops}
                        </div>
                      </td>
                      <td className="p-2 border-b border-r border-gray-200 text-center">
                         <div className={`w-8 h-8 mx-auto flex items-center justify-center rounded ${getRoleClass(row.roles.mkt)}`}>
                          {row.roles.mkt}
                        </div>
                      </td>
                      <td className="p-2 border-b border-gray-200 text-center">
                         <div className={`w-8 h-8 mx-auto flex items-center justify-center rounded ${getRoleClass(row.roles.creative)}`}>
                          {row.roles.creative}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-4 flex gap-2 items-start bg-retro-purple/10 p-3 rounded border border-retro-purple/30">
             <Info className="text-retro-purple shrink-0 w-5 h-5" />
             <div className="text-xs md:text-sm text-retro-purple font-semibold">
                 <p className="mb-1"><strong>Kolom Event:</strong> Satria (Stage Manager) & Syifa (MC).</p>
                 <p className="mb-1"><strong>Kolom Mkt/Reg:</strong> Keyla (Registrasi & P3K) & Yayu (Finance).</p>
                 <p><strong>Kolom Ops:</strong> Mencakup Keamanan, Logistik, Sound, Listrik & F&B.</p>
             </div>
        </div>
      </div>
    </div>
  );
};
