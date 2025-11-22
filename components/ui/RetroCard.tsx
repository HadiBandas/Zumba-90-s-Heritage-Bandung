import React from 'react';

interface RetroCardProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  rotate?: string;
}

export const RetroCard: React.FC<RetroCardProps> = ({ 
  children, 
  className = '', 
  color = 'bg-white',
  rotate = 'rotate-0'
}) => {
  return (
    <div className={`relative group ${className}`}>
      <div className={`absolute inset-0 translate-x-2 translate-y-2 bg-black ${rotate} rounded-lg border-2 border-black transition-transform group-hover:translate-x-3 group-hover:translate-y-3`}></div>
      <div className={`relative ${color} ${rotate} border-2 border-black rounded-lg p-6 shadow-none transition-transform group-hover:-translate-y-1 h-full`}>
        {children}
      </div>
    </div>
  );
};