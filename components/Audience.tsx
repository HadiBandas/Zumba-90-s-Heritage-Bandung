
import React from 'react';
import { RetroCard } from './ui/RetroCard';
import { User, HeartPulse } from 'lucide-react';

export const Audience: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full p-4 max-w-6xl mx-auto">
      <div className="shrink-0 text-center mb-6 mt-2 md:mt-0 md:mb-12">
        <h2 className="text-4xl md:text-5xl font-retro-heading text-white leading-tight" style={{ textShadow: '3px 3px 0 #000' }}>
          TARGET AUDIENS
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto w-full pb-24 md:pb-0 px-2">
        <div className="flex flex-col justify-center min-h-full pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full h-auto">
            <RetroCard color="bg-orange-200" className="h-full w-full">
                <div className="flex items-center gap-3 mb-6 border-b-2 border-black pb-3">
                    <div className="bg-white p-2.5 rounded-full border-2 border-black shadow-sm">
                        <User className="w-6 h-6 md:w-8 md:h-8 text-black" />
                    </div>
                    <h3 className="font-retro-sub text-xl md:text-3xl font-bold tracking-wide">DEMOGRAFI</h3>
                </div>
                <ul className="font-body space-y-3 font-semibold text-sm md:text-base text-gray-900">
                    <li className="flex items-center gap-3 bg-white/60 p-3 rounded-lg border border-black/10 shadow-sm transition-transform hover:scale-[1.02]">
                        <span className="w-2.5 h-2.5 bg-black rounded-full shrink-0"></span>
                        <span className="leading-tight">Usia: 25-40 tahun</span>
                    </li>
                    <li className="flex items-center gap-3 bg-white/60 p-3 rounded-lg border border-black/10 shadow-sm transition-transform hover:scale-[1.02]">
                        <span className="w-2.5 h-2.5 bg-black rounded-full shrink-0"></span>
                        <span className="leading-tight">Gender: 60% Wanita, 40% Pria</span>
                    </li>
                    <li className="flex items-center gap-3 bg-white/60 p-3 rounded-lg border border-black/10 shadow-sm transition-transform hover:scale-[1.02]">
                        <span className="w-2.5 h-2.5 bg-black rounded-full shrink-0"></span>
                        <span className="leading-tight">Lokasi: Bandung & sekitarnya</span>
                    </li>
                    <li className="flex items-center gap-3 bg-white/60 p-3 rounded-lg border border-black/10 shadow-sm transition-transform hover:scale-[1.02]">
                        <span className="w-2.5 h-2.5 bg-black rounded-full shrink-0"></span>
                        <span className="leading-tight">SES: Menengah ke atas (B-A)</span>
                    </li>
                </ul>
            </RetroCard>

            <RetroCard color="bg-green-200" className="h-full w-full">
                <div className="flex items-center gap-3 mb-6 border-b-2 border-black pb-3">
                    <div className="bg-white p-2.5 rounded-full border-2 border-black shadow-sm">
                        <HeartPulse className="w-6 h-6 md:w-8 md:h-8 text-black" />
                    </div>
                    <h3 className="font-retro-sub text-xl md:text-3xl font-bold tracking-wide">PSIKOGRAFI</h3>
                </div>
                <ul className="font-body space-y-3 font-semibold text-sm md:text-base text-gray-900">
                    <li className="flex items-center gap-3 bg-white/60 p-3 rounded-lg border border-black/10 shadow-sm transition-transform hover:scale-[1.02]">
                        <span className="w-2.5 h-2.5 bg-black rounded-full shrink-0"></span>
                        <span className="leading-tight">Individu yang sadar kesehatan</span>
                    </li>
                    <li className="flex items-center gap-3 bg-white/60 p-3 rounded-lg border border-black/10 shadow-sm transition-transform hover:scale-[1.02]">
                        <span className="w-2.5 h-2.5 bg-black rounded-full shrink-0"></span>
                        <span className="leading-tight">Penggemar fitness (pemula)</span>
                    </li>
                    <li className="flex items-center gap-3 bg-white/60 p-3 rounded-lg border border-black/10 shadow-sm transition-transform hover:scale-[1.02]">
                        <span className="w-2.5 h-2.5 bg-black rounded-full shrink-0"></span>
                        <span className="leading-tight">Pencari nostalgia (90-an)</span>
                    </li>
                    <li className="flex items-center gap-3 bg-white/60 p-3 rounded-lg border border-black/10 shadow-sm transition-transform hover:scale-[1.02]">
                        <span className="w-2.5 h-2.5 bg-black rounded-full shrink-0"></span>
                        <span className="leading-tight">Penyuka event komunitas</span>
                    </li>
                </ul>
            </RetroCard>
            </div>
        </div>
      </div>
    </div>
  );
};
