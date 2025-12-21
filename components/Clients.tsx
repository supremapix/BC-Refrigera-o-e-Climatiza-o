
import React from 'react';
import { CLIENTS } from '../constants';

export const Clients: React.FC = () => {
  // Duplicamos a lista para criar o efeito de loop infinito sem saltos
  const doubleClients = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <section id="clientes" className="py-16 bg-slate-950 overflow-hidden relative">
      <div className="container mx-auto px-6 mb-10 text-center">
        <h3 className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-[0.4em]">
          Empresas que confiam em nós
        </h3>
      </div>
      
      {/* Container do Marquee */}
      <div className="relative flex overflow-hidden group">
        {/* Máscara de gradiente para as bordas (fade in/out) */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

        {/* Linha de logos em movimento */}
        <div className="flex animate-marquee whitespace-nowrap gap-12 md:gap-24 py-4 group-hover:[animation-play-state:paused]">
          {doubleClients.map((client, index) => (
            <div 
              key={index} 
              className="text-xl md:text-3xl font-black text-white/30 hover:text-cyan-400/80 transition-all duration-500 cursor-default select-none flex items-center gap-4 italic tracking-tighter"
            >
              <span className="w-2 h-2 rounded-full bg-blue-600/40" />
              {client.toUpperCase()}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          display: flex;
          width: max-content;
        }
      `}</style>
    </section>
  );
};
