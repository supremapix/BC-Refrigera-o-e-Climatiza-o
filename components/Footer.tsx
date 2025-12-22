
import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { COMPANY } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="footer-suprema bg-slate-950 text-white relative border-t border-white/5">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Section 1: Info & Logo */}
          <div className="footer-section">
            <a href="#home" className="flex items-center gap-4 mb-8 group cursor-pointer">
              <div className="relative w-24 h-24 lg:w-28 lg:h-28 transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-cyan-400/30 blur-xl rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-125" />
                <img
                  src={COMPANY.logo}
                  alt="BC Refrigeração Logo"
                  className="w-full h-full object-contain relative z-10 transition-all duration-700 group-hover:scale-110 group-hover:-rotate-6 drop-shadow-[0_0_20px_rgba(0,136,204,0.6)] group-hover:drop-shadow-[0_0_40px_rgba(0,212,255,0.9)]"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl lg:text-2xl font-black text-white leading-none transition-all duration-500 group-hover:text-cyan-400">BC REFRIGERAÇÃO</span>
                <span className="text-[10px] lg:text-xs text-cyan-400 font-bold tracking-widest mt-1 transition-all duration-500 group-hover:tracking-[0.3em]">PENHA - SC</span>
              </div>
            </a>
            <div className="space-y-4 text-slate-400">
              <p className="flex items-start gap-3">
                <MapPin size={20} className="text-cyan-400 shrink-0" />
                {COMPANY.address}
              </p>
              <p className="flex items-center gap-3">
                <Phone size={20} className="text-cyan-400 shrink-0" />
                <a href={`tel:${COMPANY.phone.replace(/\D/g, '')}`} className="hover:text-cyan-400 transition-colors">{COMPANY.phone}</a>
              </p>
              <p className="flex items-center gap-3">
                <Mail size={20} className="text-cyan-400 shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-cyan-400 transition-colors">{COMPANY.email}</a>
              </p>
            </div>
          </div>

          {/* Section 2: Links */}
          <div className="footer-section">
            <h3 className="text-cyan-400 font-bold text-xl mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-slate-400 hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#servicos" className="text-slate-400 hover:text-cyan-400 transition-colors">Serviços</a></li>
              <li><a href="#produtos" className="text-slate-400 hover:text-cyan-400 transition-colors">Produtos</a></li>
              <li><a href="#depoimentos" className="text-slate-400 hover:text-cyan-400 transition-colors">Depoimentos</a></li>
            </ul>
          </div>

          {/* Section 3: Social */}
          <div className="footer-section">
            <h3 className="text-cyan-400 font-bold text-xl mb-6">Redes Sociais</h3>
            <div className="flex gap-4">
              <a 
                href={COMPANY.instagramLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center hover:bg-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={COMPANY.facebookLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Section 4: Time */}
          <div className="footer-section">
            <h3 className="text-cyan-400 font-bold text-xl mb-6">Atendimento</h3>
            <div className="space-y-4 text-slate-400">
              <p className="flex items-start gap-3">
                <Clock size={20} className="text-cyan-400 shrink-0" />
                Segunda a Sexta: 08:00 às 18:00
              </p>
              <div className="p-4 bg-blue-600/10 border border-blue-500/20 rounded-xl">
                <p className="text-white font-bold text-sm mb-1 uppercase tracking-wider">Emergências 24h</p>
                <p className="text-blue-400 text-lg font-black">{COMPANY.phone}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 border-t border-white/10 text-center">
          <div className="mb-4 text-lg">
            Desenvolvido com <span className="heart-beat">❤️</span> pela{' '}
            <a 
              href="https://www.supremasite.com.br/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-cyan-400 font-black hover:text-white transition-all underline decoration-cyan-400/30 underline-offset-4"
            >
              Suprema Sites Express
            </a>
          </div>
          <p className="text-slate-500 text-sm">© 2025 BC Refrigeração - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};
