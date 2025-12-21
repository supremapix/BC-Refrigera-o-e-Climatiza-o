
import React from 'react';
import { SERVICES } from '../constants';
import { AnimatedCard } from './AnimatedCard';

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-slate-900/50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4">
            Expertise Técnica
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">Soluções <span className="text-cyan-400">Completas</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Desde a infraestrutura elétrica até a manutenção preventiva de grandes Chillers, garantimos a temperatura ideal para o seu sucesso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <AnimatedCard key={index} className="h-full">
              <div className="mb-6 p-4 rounded-2xl bg-slate-800/80 w-fit group-hover:bg-blue-600/20 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-black text-slate-500 tracking-widest uppercase">BC Refrigeração</span>
                <div className="w-8 h-8 rounded-full border border-cyan-400/30 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-slate-950 transition-all">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};
