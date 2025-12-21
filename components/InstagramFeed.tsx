
import React, { useEffect, useState, useRef } from 'react';
import { Instagram } from 'lucide-react';
import { COMPANY } from '../constants';

export const InstagramFeed: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const feedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (feedRef.current) {
      observer.observe(feedRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-slate-900/30" ref={feedRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4">Siga-nos no <span className="text-pink-500">Instagram</span></h2>
          <p className="text-slate-400">Acompanhe nossos últimos projetos e dicas de manutenção.</p>
        </div>

        <div className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl bg-slate-950 border border-white/10 group">
          {isVisible ? (
            <iframe
              src="https://www.instagram.com/bc.refrigeracaosc/embed"
              width="100%"
              height="750"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
              title="Feed Instagram BC Refrigeração"
              className="w-full transition-opacity duration-1000"
            />
          ) : (
            <div className="h-[750px] flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950/20 to-transparent" />
        </div>

        <div className="mt-12 text-center">
          <a
            href={COMPANY.instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full font-bold text-white shadow-xl hover:scale-105 transition-all glow-pink"
          >
            <Instagram size={24} />
            @bc.refrigeracaosc
          </a>
        </div>
      </div>
    </section>
  );
};
