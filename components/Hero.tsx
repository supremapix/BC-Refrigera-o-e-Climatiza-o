
import React from 'react';
import { Typewriter } from './Typewriter';
import { TYPEWRITER_TEXTS, COMPANY } from '../constants';
import { ChevronDown, Snowflake, Wind, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/15 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 blur-[120px] rounded-full animate-pulse delay-700" />

        {/* Floating Icons */}
        <div className="absolute top-[15%] right-[10%] text-blue-500/10 animate-bounce delay-100 hidden lg:block">
          <Snowflake size={120} />
        </div>
        <div className="absolute bottom-[20%] left-[5%] text-cyan-500/10 animate-pulse delay-500 hidden lg:block">
          <Wind size={140} />
        </div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-16 text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-8 animate-fade-in shadow-[0_0_20px_rgba(34,211,238,0.1)]">
          <ShieldCheck size={14} />
          Atendimento 24h em Santa Catarina
        </div>

        <div className="flex justify-center mb-8">
          <img
            src={COMPANY.logo}
            alt="BC Refrigeração Logo"
            className="logo-hero-animated w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain cursor-pointer"
          />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-[100px] font-black mb-8 tracking-tighter leading-[0.9] md:leading-[1]">
          BC <span className="gradient-text">REFRIGERAÇÃO</span><br />
          <span className="text-3xl md:text-5xl lg:text-6xl text-white/90 font-bold block mt-4">Expertise em Climatização</span>
        </h1>

        <div className="text-xl md:text-3xl font-medium text-slate-400 h-16 mb-12 flex items-center justify-center">
          <Typewriter texts={TYPEWRITER_TEXTS} speed={100} />
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href={COMPANY.whatsappLink}
            className="group relative px-10 py-5 bg-blue-600 rounded-2xl font-black text-xl overflow-hidden transition-all hover:scale-105 active:scale-95 glow-blue shadow-2xl"
          >
            <span className="relative z-10 flex items-center gap-3">
              Solicitar Orçamento
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          
          <a
            href="#servicos"
            className="px-10 py-5 rounded-2xl border border-white/20 hover:bg-white/10 transition-all font-bold text-xl backdrop-blur-sm"
          >
            Conheça o Trabalho
          </a>
        </div>

        <div className="mt-20 flex flex-col items-center gap-4 text-slate-500">
          <span className="text-xs uppercase tracking-[0.3em] font-bold">Role para explorar</span>
          <div className="w-6 h-10 border-2 border-slate-700 rounded-full p-1 flex justify-center">
            <div className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce" />
          </div>
        </div>
      </div>

      {/* Modern Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-24 fill-slate-900/80">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".5"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,105,20.34,35.79,11.46,71.17,23.33,107,31.42,88.42,19.95,183.1,10.74,264.17-29.07,52.73-25.89,103-53.8,158.42-63.58a388.42,388.42,0,0,1,114.32,1.13V0Z"></path>
        </svg>
      </div>
    </section>
  );
};
