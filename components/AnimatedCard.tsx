
import React from 'react';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, className = "" }) => {
  return (
    <div className={`perspective-1000 group ${className}`}>
      <div className="relative glass-card p-8 rounded-2xl transition-all duration-500 ease-out 
                      group-hover:rotate-y-3d group-hover:scale-[1.05] group-hover:shadow-[0_0_40px_rgba(0,136,204,0.3)]
                      border-t border-l border-white/10 group-hover:border-cyan-500/50">
        {/* Shimmer effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 via-white/5 to-white/0 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-x-full 
                        group-hover:translate-x-full" />
        {children}
      </div>
    </div>
  );
};
