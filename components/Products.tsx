
import React from 'react';
import { PRODUCTS, COMPANY } from '../constants';

export const Products: React.FC = () => {
  return (
    <section id="produtos" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Nossa <span className="text-blue-500">Loja Virtual</span></h2>
            <p className="text-slate-400 text-lg">
              Peças de reposição e produtos de alta qualidade para sua refrigeração.
            </p>
          </div>
          <a
            href={COMPANY.whatsappLink}
            className="px-8 py-4 bg-white/5 hover:bg-white/10 rounded-xl font-bold transition-all border border-white/10"
          >
            Ver Catálogo Completo
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product, index) => (
            <div key={index} className="group relative bg-slate-900 rounded-3xl overflow-hidden border border-white/5 hover:border-blue-500/50 transition-all">
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={`${product.image}&fm=webp&w=600&q=75`}
                  alt={product.name}
                  loading="lazy"
                  width="600"
                  height="600"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{product.name}</h3>
                <a
                  href={COMPANY.whatsappLink}
                  className="w-full block text-center py-3 bg-slate-800 group-hover:bg-blue-600 rounded-xl font-bold transition-all text-sm uppercase tracking-wider"
                >
                  Consultar Preço
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
