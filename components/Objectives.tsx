
import React from 'react';
import { Users, Megaphone, Heart } from 'lucide-react';

export const Objectives: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full p-4 max-w-7xl mx-auto">
      <div className="shrink-0 text-center mb-6 mt-2 md:mt-0 md:mb-12">
        <h2 className="text-3xl md:text-5xl font-retro-heading text-white leading-tight" style={{ textShadow: '3px 3px 0 #000' }}>
          TUJUAN UTAMA EVENT
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto w-full pb-24 md:pb-0 px-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pb-4">
          {/* Card 1 */}
          <div className="bg-retro-lime border-2 border-black p-6 shadow-retro flex flex-col items-center text-center h-full min-h-[200px] rounded-lg">
              <div className="bg-white p-4 rounded-full border-2 border-black mb-4 shadow-sm">
                  <Users className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <h3 className="font-retro-sub text-xl font-bold mb-4 uppercase">Community Engagement</h3>
              <p className="font-body text-sm font-semibold leading-relaxed">
                  Membangun komunitas fitness & lifestyle sehat di Bandung. Meningkatkan footfall di Heritage Lifestyle Hub.
              </p>
          </div>

          {/* Card 2 */}
          <div className="bg-retro-purple text-white border-2 border-black p-6 shadow-retro flex flex-col items-center text-center h-full min-h-[200px] rounded-lg">
              <div className="bg-white text-black p-4 rounded-full border-2 border-black mb-4 shadow-sm">
                  <Megaphone className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <h3 className="font-retro-sub text-xl font-bold mb-4 uppercase">Brand Awareness</h3>
              <p className="font-body text-sm font-semibold leading-relaxed">
                  Positioning Heritage, Anytime Fitness & Santap Saji sebagai hub yang aktif, fun, dan community-driven.
              </p>
          </div>

          {/* Card 3 */}
          <div className="bg-orange-500 text-black border-2 border-black p-6 shadow-retro flex flex-col items-center text-center h-full min-h-[200px] rounded-lg">
              <div className="bg-white text-black p-4 rounded-full border-2 border-black mb-4 shadow-sm">
                  <Heart className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <h3 className="font-retro-sub text-xl font-bold mb-4 uppercase">Health Promotion</h3>
              <p className="font-body text-sm font-semibold leading-relaxed">
                  Mengajak masyarakat untuk hidup lebih aktif dan mengedukasi pentingnya kesehatan.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};
