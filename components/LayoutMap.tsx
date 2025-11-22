import React, { useState } from 'react';
import { MapPin, Store, Speaker, ClipboardList, LayoutDashboard, ZoomIn, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const LayoutMap: React.FC = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="flex flex-col h-full w-full p-4 max-w-6xl mx-auto">
      <div className="shrink-0 text-center mb-4 mt-2 md:mt-0 md:mb-8">
        <h2 className="text-3xl md:text-5xl font-retro-heading text-white leading-tight" style={{ textShadow: '3px 3px 0 #000' }}>
          TATA LETAK AREA
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto w-full pb-32 md:pb-0 px-2">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 w-full pb-4 lg:h-full">
          {/* Map Image Container - Clickable */}
          <div 
            className="w-full lg:w-3/4 bg-white border-4 border-black shadow-retro relative rounded-xl overflow-hidden shrink-0 min-h-[300px] md:min-h-0 flex items-center justify-center bg-gray-100 group cursor-zoom-in transition-transform hover:scale-[1.01]"
            onClick={() => setIsZoomed(true)}
          >
              {/* Placeholder Content - Replace with <img> */}
              <div className="flex flex-col items-center justify-center text-gray-400 p-8 text-center border-2 border-dashed border-gray-300 m-4 rounded-xl w-full h-full bg-white/50">
                  <LayoutDashboard size={64} className="mb-4 opacity-50" />
                  <p className="font-retro-sub text-xl text-gray-500 mb-2">AREA FOTO LAYOUT</p>
                  <p className="font-body text-sm text-gray-500 max-w-xs">
                    Silakan ganti bagian ini dengan tag &lt;img&gt; yang mengarah ke file foto layout 3D Anda.
                  </p>
              </div>
              
              {/* Hover Overlay Indicator */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                 <div className="bg-white border-2 border-black px-4 py-2 rounded-full shadow-retro-sm flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <ZoomIn size={20} className="text-black" />
                    <span className="font-retro-sub font-bold text-sm text-black">PERBESAR</span>
                 </div>
              </div>
          </div>

          {/* Legend */}
          <div className="w-full lg:w-1/4 flex flex-col justify-start gap-4 shrink-0">
              <div className="bg-white border-2 border-black p-5 shadow-retro rounded-lg lg:h-full overflow-y-auto">
                  <h3 className="font-retro-sub text-xl md:text-2xl mb-4 border-b-2 border-black inline-block">LEGENDA</h3>
                  <ul className="space-y-4 font-body text-sm md:text-base">
                      <li className="flex items-start gap-3">
                          <div className="bg-retro-purple text-white p-1.5 rounded-full border border-black shrink-0"><Speaker size={16}/></div>
                          <div>
                            <strong className="block uppercase text-xs text-gray-500 tracking-wider">Main Area (Kiri)</strong>
                            <span className="font-bold block leading-tight">Panggung, Sound Controller & Doorprize</span>
                          </div>
                      </li>
                      <li className="flex items-start gap-3">
                          <div className="bg-retro-yellow text-black p-1.5 rounded-full border border-black shrink-0"><Store size={16}/></div>
                          <div>
                            <strong className="block uppercase text-xs text-gray-500 tracking-wider">Sponsor Row (Atas)</strong>
                            <span className="font-bold block leading-tight text-sm">Santap Saji, Alexa, Anytime Fitness, Tami, SariAyu</span>
                          </div>
                      </li>
                      <li className="flex items-start gap-3">
                          <div className="bg-retro-lime text-black p-1.5 rounded-full border border-black shrink-0"><ClipboardList size={16}/></div>
                          <div>
                            <strong className="block uppercase text-xs text-gray-500 tracking-wider">Entrance (Kanan)</strong>
                            <span className="font-bold">Registrasi</span>
                          </div>
                      </li>
                      <li className="flex items-start gap-3">
                          <div className="bg-retro-pink text-white p-1.5 rounded-full border border-black shrink-0"><MapPin size={16}/></div>
                          <div>
                            <strong className="block uppercase text-xs text-gray-500 tracking-wider">Bottom Area</strong>
                            <span className="font-bold">Bazar</span>
                          </div>
                      </li>
                  </ul>
                  
                  <div className="mt-6 pt-4 border-t-2 border-black/10">
                    <h4 className="font-retro-sub text-sm font-bold mb-2 text-red-600 uppercase">LOGISTIK DIPERLUKAN:</h4>
                    <ul className="text-sm font-body font-bold space-y-1 text-gray-800">
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-black rounded-full"></span>
                            Meja: 11 Pcs
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-black rounded-full"></span>
                            Kursi: 10 Pcs
                        </li>
                    </ul>
                  </div>
              </div>
          </div>
        </div>
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
                onClick={() => setIsZoomed(false)}
            >
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="relative w-full h-full max-w-6xl max-h-[90vh] flex flex-col"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button 
                        onClick={() => setIsZoomed(false)}
                        className="absolute -top-4 -right-4 md:top-0 md:right-0 m-4 bg-red-500 text-white border-2 border-black rounded-full p-2 hover:bg-red-600 transition-colors shadow-retro z-50"
                    >
                        <X size={24} />
                    </button>

                    <div className="w-full h-full bg-white border-4 border-black rounded-xl overflow-auto shadow-retro p-4 flex items-center justify-center">
                        {/* Content Duplicated for Zoom View - Replace with your <img> as well */}
                        <div className="flex flex-col items-center justify-center text-gray-400 p-8 text-center border-2 border-dashed border-gray-300 rounded-xl w-full h-full min-h-[300px] bg-gray-50">
                            <LayoutDashboard size={96} className="mb-6 opacity-50" />
                            <p className="font-retro-sub text-2xl md:text-3xl text-gray-500 mb-4">AREA FOTO LAYOUT (FULL SCREEN)</p>
                            <p className="font-body text-base md:text-lg text-gray-500 max-w-md">
                                Gambar akan tampil maksimal di sini.<br/>
                                (Gunakan scroll jika gambar terlalu besar)
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};