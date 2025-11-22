
import React from 'react';
import { EVENT_DETAILS } from '../constants';
import { Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="h-full w-full relative overflow-hidden bg-retro-bg">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-retro-pattern opacity-50 pointer-events-none z-0"></div>
      
      {/* Scrollable Container */}
      <div className="absolute inset-0 w-full h-full overflow-y-auto pb-28 md:pb-0 z-10">
        <div className="min-h-full w-full flex flex-col items-center justify-center p-4">
          
          <div className="relative bg-white border-4 border-black p-6 md:p-10 shadow-retro max-w-3xl text-center transform rotate-1 rounded-lg mx-4 my-auto">
            <h2 className="text-4xl md:text-6xl font-retro-heading text-retro-purple mb-4 md:mb-6 leading-none">TERIMA KASIH!</h2>
            <p className="font-body text-base md:text-xl mb-6 md:mb-8 font-medium">
                Let's bring back the beat and make this event unforgettable.
            </p>
            
            <div className="bg-retro-lime border-2 border-black p-4 md:p-6 inline-flex flex-col items-center shadow-sm rounded-lg w-full md:w-auto">
                <span className="font-retro-sub text-xs md:text-sm uppercase mb-2">Contact Person</span>
                <h3 className="font-bold text-xl md:text-2xl font-body mb-1 break-words">{EVENT_DETAILS.contact.name}</h3>
                <div className="flex items-center gap-2 text-base md:text-lg">
                    <Phone size={20} />
                    <span>{EVENT_DETAILS.contact.phone}</span>
                </div>
            </div>

            <div className="mt-6 md:mt-8 text-xs md:text-sm font-body text-gray-500">
                &copy; 2025 Back to the Beat Committee
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
