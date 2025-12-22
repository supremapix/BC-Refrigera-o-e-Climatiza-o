
import React from 'react';
import { NEIGHBORHOODS, COVERAGE_INFO } from '../constants';
import { AnimatedCard } from './AnimatedCard';
import { Map } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Neighborhoods: React.FC = () => {
  return (
    <section id="bairros" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4">
            <Map size={14} />
            Área de Atendimento
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            <span className="gradient-text">Penha e Região</span> - Cobertura Completa
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Nossa equipe técnica está estrategicamente posicionada para atender Penha, Balneário Camboriú e região. {COVERAGE_INFO.message}.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {NEIGHBORHOODS.map((bairro, index) => (
            <Link key={index} to={`/localidade/${bairro.slug}`} className="block">
              <AnimatedCard className="h-full cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="flex items-start gap-4 h-full">
                  <div className="p-3 rounded-xl bg-slate-800/50 group-hover:bg-blue-600/20 transition-all duration-300">
                    {bairro.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                      {bairro.name}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                      {bairro.desc}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-2 right-4 opacity-0 group-hover:opacity-20 transition-opacity">
                  <Map className="w-12 h-12 text-white" />
                </div>
              </AnimatedCard>
            </Link>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-600/10 to-cyan-500/10 border border-blue-500/20 text-center">
          <p className="text-slate-300 font-medium text-lg mb-4">
            <span className="text-cyan-400 font-black">{COVERAGE_INFO.radius}</span> de raio de atendimento
          </p>
          <p className="text-slate-400">
            Atendemos Zona Rural e cidades vizinhas como Itajaí, Camboriú, Itapema, Navegantes, Porto Belo e toda a região.
            <br className="hidden md:block" />
            Precisa de atendimento imediato em sua região?
            <a href="#contato" className="text-cyan-400 font-bold ml-2 hover:underline transition-all">Fale conosco.</a>
          </p>
        </div>
      </div>
    </section>
  );
};
