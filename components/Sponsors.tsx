
import React from 'react';
import { SPONSORS } from '../constants';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const LogoPlaceholder: React.FC<{ 
  name: string; 
  color?: string; 
  textColor?: string; 
  className?: string;
  isOrganizer?: boolean;
}> = ({ 
  name, 
  color = '#ffffff', 
  textColor = '#000000',
  className = '',
  isOrganizer = false
}) => (
  <div 
    className={`relative group ${className}`}
  >
    {/* Shadow Layer: Yellow for Organizers, Black for Sponsors */}
    <div className={`absolute inset-0 rounded-lg transition-transform border-2 border-black
      ${isOrganizer 
        ? 'bg-retro-yellow translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3' 
        : 'bg-black translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2'
      }`}
    ></div>
    
    {/* Main Card Layer */}
    <div 
      className={`relative h-full w-full rounded-lg flex items-center justify-center p-2 md:p-4 text-center transition-transform group-hover:-translate-y-1 overflow-hidden
        ${isOrganizer ? 'border-4 border-black' : 'border-2 border-black'}
      `}
      style={{ backgroundColor: color }}
    >
      {isOrganizer && (
        <div className="absolute top-1 right-1 md:top-2 md:right-2 opacity-30">
          <Star className="w-4 h-4 md:w-6 md:h-6" fill="currentColor" color={textColor} />
        </div>
      )}
      <span 
        className={`font-retro-heading leading-none break-words w-full px-1
          ${isOrganizer ? 'text-xl md:text-3xl' : 'text-lg md:text-2xl'}
        `}
        style={{ color: textColor, textShadow: textColor === '#FFFFFF' ? '2px 2px 0 #000' : 'none' }}
      >
        {name}
      </span>
    </div>
  </div>
);

export const Sponsors: React.FC = () => {
  const organizers = SPONSORS.filter(s => s.tier === 'Organizer');
  const sponsors = SPONSORS.filter(s => s.tier !== 'Organizer');

  return (
    <div className="flex flex-col h-full w-full p-4 max-w-6xl mx-auto">
      <div className="shrink-0 text-center mb-6 mt-2 md:mt-0 md:mb-8">
        <h2 className="text-4xl md:text-5xl font-retro-heading text-white leading-tight" style={{ textShadow: '3px 3px 0 #000' }}>
          MITRA & SPONSOR
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto w-full pb-32 md:pb-0 px-2">
        <div className="flex flex-col gap-8 pb-4">
          {/* Organizers Section */}
          <div className="relative bg-white/10 p-4 md:p-6 rounded-xl border-2 border-dashed border-white/30 mt-4">
               <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-retro-yellow border-2 border-black px-4 py-1 rotate-2 z-10 shadow-sm">
                  <span className="font-retro-sub font-bold text-xs md:text-sm tracking-wider whitespace-nowrap">BROUGHT TO YOU BY</span>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-4">
                  {organizers.map((org, idx) => (
                      <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                      >
                          <LogoPlaceholder 
                              name={org.name} 
                              color={org.color} 
                              textColor={org.textColor}
                              className="h-24 md:h-32"
                              isOrganizer={true}
                          />
                      </motion.div>
                  ))}
               </div>
          </div>

          {/* Sponsors Section */}
          <div className="relative bg-white/10 p-4 md:p-6 rounded-xl border-2 border-dashed border-white/30 mt-6">
               <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-retro-lime border-2 border-black px-4 py-1 -rotate-2 z-10 shadow-sm">
                  <span className="font-retro-sub font-bold text-xs md:text-sm tracking-wider whitespace-nowrap">OFFICIAL SPONSORS</span>
               </div>

               {/* Changed grid cols on mobile to 2 instead of automatic or squished */}
               <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-4">
                  {sponsors.map((sponsor, idx) => (
                      <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + (idx * 0.05) }}
                      >
                          <LogoPlaceholder 
                              name={sponsor.name} 
                              color={sponsor.color} 
                              textColor={sponsor.textColor}
                              className="h-20 md:h-24"
                              isOrganizer={false}
                          />
                      </motion.div>
                  ))}
               </div>
          </div>
        </div>
      </div>
    </div>
  );
};