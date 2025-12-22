
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { COMPANY } from '../constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Clientes', href: '#clientes' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      isScrolled ? 'bg-slate-950/80 backdrop-blur-xl py-4 shadow-xl' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-4 group cursor-pointer">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 transition-all duration-700 ease-out">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-cyan-400/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
            <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full group-hover:scale-150 transition-transform duration-700" />
            <img
              src={COMPANY.logo}
              alt="BC Refrigeração Logo"
              className="w-full h-full object-contain relative z-10 transition-all duration-700 group-hover:scale-110 group-hover:rotate-3 group-hover:drop-shadow-[0_0_30px_rgba(0,212,255,0.8)] drop-shadow-[0_0_15px_rgba(0,136,204,0.5)]"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl lg:text-2xl font-black bg-gradient-to-r from-white via-cyan-100 to-white/70 bg-clip-text text-transparent hidden sm:block leading-none transition-all duration-500 group-hover:from-cyan-400 group-hover:to-blue-400">
              BC REFRIGERAÇÃO
            </span>
            <span className="text-[10px] sm:text-xs text-cyan-400 font-bold tracking-widest hidden sm:block mt-1 transition-all duration-500 group-hover:text-cyan-300 group-hover:tracking-[0.3em]">
              PENHA - SANTA CATARINA
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={COMPANY.whatsappLink}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 glow-blue"
          >
            <Phone size={16} />
            Orçamento
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-slate-950 z-[90] lg:hidden transition-all duration-500 ${
        isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-cyan-400/30 blur-2xl rounded-full animate-pulse" />
            <img
              src={COMPANY.logo}
              alt="Logo"
              className="w-32 h-32 mb-4 relative z-10 drop-shadow-[0_0_30px_rgba(0,212,255,0.8)] animate-pulse"
            />
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href={COMPANY.whatsappLink}
            className="flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Phone size={20} />
            {COMPANY.phone}
          </a>
        </div>
      </div>
    </header>
  );
};
