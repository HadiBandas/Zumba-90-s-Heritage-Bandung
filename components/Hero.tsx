
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, ShieldAlert, Zap, Music4 } from 'lucide-react';
import { EVENT_DETAILS } from '../constants';

// Helper component for Countdown Boxes
const TimeBox = ({ value, label, color }: { value: number | string; label: string; color: string }) => (
  <div className={`flex flex-col items-center justify-center ${color} border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl p-2 w-16 h-16 md:w-24 md:h-24 transition-transform hover:-translate-y-2 transform shrink-0`}>
    <span className="font-retro-heading text-2xl md:text-5xl leading-none text-black drop-shadow-sm">{value.toString().padStart(2, '0')}</span>
    <span className="font-body font-black text-[8px] md:text-xs uppercase mt-1 text-black/80 tracking-widest">{label}</span>
  </div>
);

export const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Target: 30 November 2025, 06:00 AM (Updated from 07:00)
    const targetDate = new Date(2025, 10, 30, 6, 0, 0).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-full w-full relative bg-retro-bg overflow-hidden">
      {/* 90s Grid Background - Fixed Position */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

      {/* Floating Retro Elements - Fixed Position */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-10 text-retro-cyan opacity-40 hidden md:block z-0"
      >
        <Music4 size={80} />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 left-10 text-retro-pink opacity-40 hidden md:block z-0"
      >
        <Zap size={80} />
      </motion.div>

      {/* Scrollable Content Container */}
      <div className="absolute inset-0 w-full h-full overflow-y-auto pb-32 md:pb-0 z-10">
        <div className="min-h-full w-full flex flex-col items-center justify-center p-4 pt-12 md:pt-10">
          
          {/* Internal Badge */}
          <motion.div 
            initial={{ scale: 2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="mb-4 md:mb-6 rotate-[-2deg] mt-2 md:mt-0"
          >
            <div className="border-2 border-retro-yellow text-retro-yellow px-3 py-1 font-bold font-body tracking-[0.2em] text-[10px] md:text-sm uppercase rounded bg-black/30 backdrop-blur-sm flex items-center gap-2">
              <ShieldAlert size={14} />
              Internal Committee Deck
            </div>
          </motion.div>

          {/* Organizers Pills */}
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center gap-2 md:gap-4 mb-4 md:mb-6 flex-wrap px-2"
          >
            {EVENT_DETAILS.organizers.map((org, idx) => (
              <span key={idx} className="px-2 py-1 md:px-3 md:py-1 bg-white border-2 border-black shadow-retro-sm font-bold text-[10px] md:text-xs font-retro-sub uppercase whitespace-nowrap rounded-sm hover:-translate-y-1 transition-transform cursor-default">
                {org}
              </span>
            ))}
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="relative text-center w-full mb-6 md:mb-8"
          >
            <h1 
              className="text-5xl md:text-9xl font-retro-heading text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] md:drop-shadow-[6px_6px_0px_rgba(0,0,0,1)] stroke-black mb-2 leading-[0.9]"
              style={{ textShadow: '4px 4px 0 #000', WebkitTextStroke: '1px black' }}
            >
              <span className="text-retro-yellow block text-xl md:text-5xl mb-1 tracking-wider font-normal">BACK TO THE BEAT:</span>
              90'S ZUMBA<br />PARTY
            </h1>
          </motion.div>

          {/* Countdown Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-8 flex flex-col items-center"
          >
            <div className="flex items-center gap-2 mb-3 text-white bg-black/20 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm">
              <Clock className="w-3 h-3 md:w-5 md:h-5 animate-pulse text-retro-lime" />
              <span className="font-retro-sub tracking-widest text-[10px] md:text-sm uppercase text-retro-lime">Menuju 30 Nov (06:00)</span>
            </div>
            
            <div className="flex gap-2 md:gap-6">
              <TimeBox value={timeLeft.days} label="HARI" color="bg-retro-pink" />
              <TimeBox value={timeLeft.hours} label="JAM" color="bg-retro-cyan" />
              <TimeBox value={timeLeft.minutes} label="MENIT" color="bg-retro-yellow" />
              <TimeBox value={timeLeft.seconds} label="DETIK" color="bg-retro-lime" />
            </div>
          </motion.div>

          {/* Info Grid */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 w-full max-w-2xl px-4 md:px-0"
          >
            {/* Date Box */}
            <div className="bg-white border-2 border-black p-3 md:p-4 shadow-retro flex flex-row items-center justify-center gap-3 text-black rounded-lg transition-transform hover:scale-105 cursor-default">
              <div className="bg-retro-purple/10 p-2 rounded-full shrink-0">
                <Calendar className="w-5 h-5 md:w-8 md:h-8 text-retro-purple" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-bold font-retro-sub text-[10px] md:text-sm uppercase text-gray-500">SAVE THE DATE</span>
                <span className="font-body font-bold text-sm md:text-lg leading-none">{EVENT_DETAILS.date}</span>
              </div>
            </div>

             {/* Location Box */}
             <div className="bg-white border-2 border-black p-3 md:p-4 shadow-retro flex flex-row items-center justify-center gap-3 text-black rounded-lg transition-transform hover:scale-105 cursor-default">
              <div className="bg-retro-pink/10 p-2 rounded-full shrink-0">
                <MapPin className="w-5 h-5 md:w-8 md:h-8 text-retro-pink" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-bold font-retro-sub text-[10px] md:text-sm uppercase text-gray-500">LOCATION</span>
                <span className="font-body font-bold text-sm md:text-lg leading-none line-clamp-2">{EVENT_DETAILS.location}</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.5 }}
             className="mt-8 md:mt-12 mb-4"
          >
              <p className="text-white font-retro-sub text-[10px] md:text-sm animate-pulse tracking-widest opacity-70">
                  SCROLL UNTUK MELIHAT BRIEFING
              </p>
              <div className="w-0.5 h-4 bg-white/50 mx-auto mt-2 rounded-full"></div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};
