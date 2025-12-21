
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
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform duration-500 group-hover:scale-110">
            <div className="absolute inset-0 bg-blue-600/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <img 
              src={COMPANY.logo} 
              alt="BC Refrigeração Logo" 
              className="w-full h-full object-contain relative z-10"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent hidden sm:block leading-none">
              BC REFRIGERAÇÃO
            </span>
            <span className="text-[10px] text-cyan-400 font-bold tracking-widest hidden sm:block mt-1">
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
          <img src={COMPANY.logo} alt="Logo" className="w-24 mb-4" />
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
