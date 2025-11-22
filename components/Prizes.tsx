
import React from 'react';
import { Gift, Ticket, Sun, Coffee } from 'lucide-react';

export const Prizes: React.FC = () => {
  const mainPrizes = [
    { name: "Kompor Portable Modena", count: "1x", icon: Gift, color: "bg-blue-200" },
    { name: "Voucher Menginap Harris & POP! Hotel", count: "1x", icon: Ticket, color: "bg-pink-200" },
    { name: "Sunglasses Optik Melawai", count: "1x", icon: Sun, color: "bg-yellow-200" }
  ];

  const activations = [
    "Sesi Zumba 90's (ZIN Intan, Shinta, Wangi)",
    "Free Scaling Voucher (200 peserta)",
    "Goodie Bag Sari Ayu (50 pertama)",
    "Refreshment (Bubur Kacang & Singkong)"
  ];

  return (
    <div className="flex flex-col h-full w-full p-4 max-w-6xl mx-auto">
      <div className="shrink-0 text-center mb-6 mt-2 md:mt-0 md:mb-8">
        <h2 className="text-3xl md:text-5xl font-retro-heading text-white leading-tight" style={{ textShadow: '3px 3px 0 #000' }}>
          DOORPRIZE & AKTIVASI
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto w-full pb-24 md:pb-0 px-2">
        {/* Main Prizes */}
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 w-full mb-6 md:mb-8">
          {mainPrizes.map((prize, idx) => (
            <div key={idx} className={`${prize.color} border-2 border-black p-6 shadow-retro flex-1 flex flex-col items-center text-center transition-transform hover:-translate-y-2 rounded-lg shrink-0`}>
               <prize.icon className="mb-4 stroke-2 w-10 h-10 md:w-12 md:h-12" />
               <span className="font-retro-heading text-2xl md:text-3xl mb-2">{prize.count}</span>
               <span className="font-body font-bold text-base md:text-lg leading-tight">{prize.name}</span>
            </div>
          ))}
        </div>

        {/* Activations List */}
        <div className="bg-white border-2 border-black p-4 md:p-6 shadow-retro w-full rounded-lg mb-4">
           <h3 className="font-retro-sub text-xl md:text-2xl mb-4 border-b-2 border-black inline-block">HIGHLIGHT AKTIVASI</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activations.map((act, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                      <div className="bg-retro-purple text-white p-2 rounded font-bold text-sm">
                          {idx + 1}
                      </div>
                      <span className="font-body font-semibold text-sm md:text-base">{act}</span>
                  </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};