
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, MoreVertical } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Official Google palette for avatar rotation
  const googleColors = [
    'bg-[#4285F4]', // Blue
    'bg-[#EA4335]', // Red
    'bg-[#FBBC05]', // Yellow
    'bg-[#34A853]', // Green
  ];

  const next = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const prev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 8000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section 
      id="depoimentos" 
      ref={sectionRef}
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-[40%] h-[40%] bg-cyan-400/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4">
            <Star size={12} className="fill-blue-400" />
            Social Proof • Google Reviews
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight">
            Nossa <span className="text-cyan-400">Reputação Online</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="text-2xl font-bold text-white">5.0</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-[#FBBC05] text-[#FBBC05]" />
              ))}
            </div>
            <span className="text-slate-500 text-sm font-medium ml-2 underline cursor-pointer hover:text-blue-400 transition-colors">Ver todas as 154 avaliações</span>
          </div>
        </div>

        <div className={`max-w-4xl mx-auto relative px-4 md:px-0 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {/* Refined Google Maps Style Card with delicate border */}
          <div className="relative glass-card group p-6 md:p-10 rounded-3xl overflow-hidden min-h-[400px] flex flex-col transition-all duration-500 hover:shadow-[0_0_80px_rgba(66,133,244,0.1)] border border-white/[0.08]">
            
            {/* Shimmer Effect matching AnimatedCard */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-x-full group-hover:translate-x-full" />
            </div>

            <div className={`relative z-10 flex-1 flex flex-col transition-all duration-500 transform ${isAnimating ? 'opacity-0 scale-98 blur-sm' : 'opacity-100 scale-100 blur-0'}`}>
              
              {/* Google Review Header */}
              <div className="flex items-start gap-4 mb-6">
                {/* Avatar with Google Colors and specific Google Maps styling */}
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold shadow-xl shrink-0 transition-colors duration-500 ${googleColors[activeIndex % googleColors.length]}`}>
                  {TESTIMONIALS[activeIndex].name.charAt(0)}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-white leading-tight hover:underline cursor-pointer">
                        {TESTIMONIALS[activeIndex].name}
                      </h4>
                      <div className="flex items-center gap-1 mt-0.5">
                        <span className="text-[#FBBC05] text-[10px] font-bold uppercase tracking-wider">Local Guide</span>
                        <span className="text-slate-600 text-xs">•</span>
                        <span className="text-slate-500 text-xs">42 avaliações</span>
                      </div>
                    </div>
                    <button className="text-slate-600 hover:text-slate-400 transition-colors">
                      <MoreVertical size={20} />
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-[#FBBC05] text-[#FBBC05]" />
                    ))}
                    <span className="text-slate-500 text-[11px] ml-2 font-medium">há uma semana</span>
                  </div>
                </div>
              </div>

              {/* Review Body */}
              <div className="flex-1 px-1">
                <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-normal mb-8">
                  {TESTIMONIALS[activeIndex].text}
                </p>
              </div>

              {/* Verification and Google Logo */}
              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Maps_icon_%282020%29.svg" alt="G" className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-300 uppercase tracking-tighter">Google Review</p>
                    <p className="text-[10px] text-slate-500 uppercase font-medium">Fonte Verificada</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-400 group/like cursor-pointer hover:text-blue-400 transition-colors">
                  <span className="text-xs font-bold">Útil?</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover/like:bg-blue-500/10 transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.708c.949 0 1.703.84 1.598 1.812l-1.115 10.276A1.999 1.999 0 0117.195 24H9a2 2 0 01-2-2v-9c0-.551.224-1.052.586-1.414l6-6A2 2 0 0116.414 4h.172a2 2 0 012 2v2a2 2 0 01-2 2H14V10z"></path></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Style Navigation Controls */}
            <div className="absolute top-1/2 -translate-y-1/2 left-2 md:-left-12 z-20">
              <button 
                onClick={prev}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-slate-900/60 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-400 hover:scale-110 transition-all active:scale-95 group/btn shadow-2xl"
              >
                <ChevronLeft size={24} className="group-hover/btn:-translate-x-0.5 transition-transform" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-2 md:-right-12 z-20">
              <button 
                onClick={next}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-slate-900/60 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-400 hover:scale-110 transition-all active:scale-95 group/btn shadow-2xl"
              >
                <ChevronRight size={24} className="group-hover/btn:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (idx !== activeIndex) {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setActiveIndex(idx);
                      setIsAnimating(false);
                    }, 250);
                  }
                }}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  activeIndex === idx 
                    ? 'w-10 bg-blue-500 shadow-[0_0_15px_rgba(66,133,244,0.5)]' 
                    : 'w-2 bg-white/10 hover:bg-white/30'
                }`}
                aria-label={`Ir para depoimento ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
