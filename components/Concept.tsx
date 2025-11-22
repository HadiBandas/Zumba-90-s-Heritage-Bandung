import React from 'react';
import { RetroCard } from './ui/RetroCard';
import { Dumbbell, Music, Sparkles, Users } from 'lucide-react';

export const Concept: React.FC = () => {
  const concepts = [
    {
      title: 'FITNESS',
      desc: "Sesi Zumba intensitas sedang-tinggi dengan tema 90's.",
      icon: Dumbbell,
      color: 'bg-retro-cyan'
    },
    {
      title: 'MUSIK',
      desc: 'Diiringi playlist hits dari era 90-an (Spice Girls, BSB, Britney, dll).',
      icon: Music,
      color: 'bg-retro-pink'
    },
    {
      title: 'NOSTALGIA',
      desc: "Dress code retro & aktivasi tema 90's.",
      icon: Sparkles,
      color: 'bg-retro-yellow'
    },
    {
      title: 'KOMUNITAS',
      desc: 'Membangun koneksi antar peserta & tenant Heritage.',
      icon: Users,
      color: 'bg-retro-lime'
    }
  ];

  return (
    <div className="flex flex-col h-full w-full p-4 max-w-6xl mx-auto">
      <div className="shrink-0 text-center mb-6 mt-2 md:mt-0 md:mb-12">
        <h2 className="text-4xl md:text-5xl font-retro-heading text-white leading-tight" style={{ textShadow: '3px 3px 0 #000' }}>
          KONSEP ACARA
        </h2>
        <p className="text-white font-retro-sub text-lg md:text-xl mt-2 drop-shadow-md">GET READY TO GROOVE!</p>
      </div>
      
      <div className="flex-1 overflow-y-auto w-full pb-24 md:pb-0 px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pb-4">
          {concepts.map((item, idx) => (
            <RetroCard key={idx} color={item.color} rotate={idx % 2 === 0 ? 'rotate-0 md:-rotate-1' : 'rotate-0 md:rotate-1'}>
              <div className="flex items-start gap-4">
                <div className="bg-black p-3 rounded-full text-white shrink-0">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="font-retro-heading text-2xl mb-2">{item.title}</h3>
                  <p className="font-body font-bold text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </RetroCard>
          ))}
        </div>
      </div>
    </div>
  );
};