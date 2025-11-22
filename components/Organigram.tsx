
import React from 'react';
import { motion } from 'framer-motion';

// Helper component for a node in the tree
const OrgNode = ({ role, name, color, subtext }: { role: string, name: string, color: string, subtext?: string }) => (
  <div className="flex flex-col items-center z-10 relative">
    <div className="bg-white border-2 border-black shadow-retro-sm p-0 rounded-lg text-center w-36 md:w-44 overflow-hidden transition-transform hover:scale-105">
       <div className={`${color} text-[10px] md:text-xs font-bold font-retro-sub py-1 border-b-2 border-black uppercase tracking-wider text-black`}>
         {role}
       </div>
       <div className="p-2 bg-white">
         <div className="font-retro-heading text-base md:text-lg leading-tight break-words text-black">{name}</div>
         {subtext && <div className="text-[10px] font-bold text-gray-500 mt-1 leading-tight">{subtext}</div>}
       </div>
    </div>
  </div>
);

// Vertical Line
const VLine = ({ height = "h-6" }: { height?: string }) => (
  <div className={`w-0.5 bg-black ${height} mx-auto`}></div>
);

// Horizontal Line container
const HLine = () => (
    <div className="w-full h-4 border-t-2 border-x-2 border-black rounded-t-xl mt-[-2px]"></div>
);

export const Organigram: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full p-4 max-w-7xl mx-auto">
       <div className="shrink-0 text-center mb-6 mt-2 md:mt-0 md:mb-8">
        <h2 className="text-3xl md:text-5xl font-retro-heading text-white leading-tight" style={{ textShadow: '3px 3px 0 #000' }}>
          STRUKTUR ORGANIGRAM
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto w-full pb-32 md:pb-0 px-2">
        
        {/* DESKTOP VIEW (Tree Structure) */}
        <div className="hidden md:flex flex-col items-center w-full min-w-[800px] pb-12">
            
            {/* Level 1: Project Director */}
            <motion.div initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}>
                <OrgNode role="Project Director" name="Mahasin Hadiyatulloh" color="bg-retro-purple text-white" />
                <VLine height="h-8" />
            </motion.div>

            {/* Level 2: Co-Organizers (Steering) */}
            <div className="flex flex-col items-center w-full">
                {/* Connector to Children */}
                <div className="w-[40%] border-t-2 border-black h-4 rounded-t-none mx-auto relative top-[-2px]"></div>
                
                <div className="flex justify-center gap-12 -mt-4">
                    <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
                        <OrgNode role="Community Lead" name="Chandra" color="bg-retro-purple/50" subtext="Anytime Fitness" />
                    </motion.div>
                    <div className="w-0.5 bg-black h-8 mx-auto absolute mt-[-16px]"></div>
                    <motion.div initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
                        <OrgNode role="F&B Director" name="Vina Ayu" color="bg-retro-purple/50" subtext="Santap Saji" />
                    </motion.div>
                </div>

                <VLine height="h-8" />
            </div>

            {/* Level 3: Division Heads Connector */}
            <div className="w-[85%] border-t-2 border-l-2 border-r-2 border-black h-6 rounded-t-xl mx-auto relative top-[-2px]"></div>

            {/* Level 3: Divisions */}
            <div className="flex justify-between w-full px-4 -mt-[2px]">
                
                {/* Event */}
                <div className="flex flex-col items-center">
                    <VLine height="h-4" />
                    <OrgNode role="Event & Talent" name="Syifa & Satria" color="bg-retro-pink" />
                    <VLine height="h-4" />
                    <div className="bg-white/80 p-2 rounded border-2 border-black text-center w-32 shadow-sm">
                        <span className="font-bold text-xs block">ZIN Intan</span>
                        <span className="font-bold text-xs block">ZIN Shinta</span>
                        <span className="font-bold text-xs block">ZIN Wangi</span>
                    </div>
                </div>

                {/* Creative */}
                <div className="flex flex-col items-center">
                    <VLine height="h-4" />
                    <OrgNode role="Creative & Media" name="Inuy" color="bg-retro-cyan" />
                    <VLine height="h-4" />
                    <div className="bg-white/80 p-2 rounded border-2 border-black text-center w-32 shadow-sm">
                        <span className="font-bold text-xs block">Alvan (Video)</span>
                        <span className="font-bold text-xs block">Dodot (Photo)</span>
                    </div>
                </div>

                {/* Ops */}
                <div className="flex flex-col items-center">
                    <VLine height="h-4" />
                    <OrgNode role="Operational Lead" name="Ibu Rani" color="bg-retro-lime" />
                    <VLine height="h-4" />
                    <div className="bg-white/80 p-2 rounded border-2 border-black text-center w-32 shadow-sm">
                        <span className="font-bold text-xs block">Jamal (GA)</span>
                        <span className="font-bold text-xs block">Nila (Tech)</span>
                        <span className="font-bold text-xs block">Windy (Sound)</span>
                        <span className="font-bold text-xs block">Tim Santap Saji</span>
                    </div>
                </div>

                {/* Marketing / Reg */}
                <div className="flex flex-col items-center">
                    <VLine height="h-4" />
                    <OrgNode role="Reg & Finance" name="Keyla" color="bg-retro-yellow" />
                    <VLine height="h-4" />
                    <div className="bg-white/80 p-2 rounded border-2 border-black text-center w-32 shadow-sm">
                        <span className="font-bold text-xs block">Yayu (Finance)</span>
                        <span className="font-bold text-xs block">Team (Reg)</span>
                    </div>
                </div>

            </div>
        </div>

        {/* MOBILE VIEW (Stacked List) */}
        <div className="md:hidden flex flex-col gap-6 pb-8">
             {/* Director */}
             <div className="flex justify-center">
                <OrgNode role="Project Director" name="Mahasin Hadiyatulloh" color="bg-retro-purple text-white" />
             </div>
             
             {/* Connector */}
             <div className="flex justify-center -my-4">
                 <VLine height="h-8" />
             </div>

             {/* SC Container */}
             <div className="bg-white/10 border-2 border-dashed border-white/30 p-4 rounded-xl">
                 <h3 className="text-center text-white font-retro-sub mb-4 text-sm">STEERING COMMITTEE</h3>
                 <div className="flex justify-center gap-4">
                    <OrgNode role="Community Lead" name="Chandra" color="bg-retro-purple/50" subtext="Anytime Fitness" />
                    <OrgNode role="F&B Director" name="Vina Ayu" color="bg-retro-purple/50" subtext="Santap Saji" />
                 </div>
             </div>

             {/* Connector */}
             <div className="flex justify-center -my-4">
                 <VLine height="h-8 bg-white" />
             </div>

             {/* Divisions Stack */}
             <div className="grid grid-cols-2 gap-4">
                 <div className="flex flex-col gap-2">
                     <OrgNode role="Event & Talent" name="Syifa & Satria" color="bg-retro-pink" />
                     <div className="bg-white p-2 rounded border-2 border-black text-center text-xs font-bold shadow-retro-sm">
                         <ul className="list-disc list-inside text-left px-1">
                             <li>ZIN Intan</li>
                             <li>ZIN Shinta</li>
                             <li>ZIN Wangi</li>
                         </ul>
                     </div>
                 </div>

                 <div className="flex flex-col gap-2">
                     <OrgNode role="Creative" name="Inuy" color="bg-retro-cyan" />
                     <div className="bg-white p-2 rounded border-2 border-black text-center text-xs font-bold shadow-retro-sm">
                         <ul className="list-disc list-inside text-left px-1">
                             <li>Alvan (Vid)</li>
                             <li>Dodot (Ph)</li>
                         </ul>
                     </div>
                 </div>

                 <div className="flex flex-col gap-2">
                     <OrgNode role="Operational" name="Ibu Rani" color="bg-retro-lime" />
                     <div className="bg-white p-2 rounded border-2 border-black text-center text-xs font-bold shadow-retro-sm">
                         <ul className="list-disc list-inside text-left px-1">
                             <li>Jamal (GA)</li>
                             <li>Nila (Tech)</li>
                             <li>Windy (Sound)</li>
                         </ul>
                     </div>
                 </div>

                 <div className="flex flex-col gap-2">
                     <OrgNode role="Reg & Finance" name="Keyla" color="bg-retro-yellow" />
                     <div className="bg-white p-2 rounded border-2 border-black text-center text-xs font-bold shadow-retro-sm">
                         <ul className="list-disc list-inside text-left px-1">
                             <li>Yayu (Fin)</li>
                             <li>Reg Team</li>
                         </ul>
                     </div>
                 </div>
             </div>
        </div>

      </div>
    </div>
  );
};
