
import React, { useState } from 'react';
import { PRODUCTS, COMPANY } from '../constants';
import { Phone, Info } from 'lucide-react';

export const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const categories = ['Todos', ...Array.from(new Set(PRODUCTS.map(p => p.category)))];

  const filteredProducts = selectedCategory === 'Todos'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <section id="produtos" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
              Nossa <span className="gradient-text">Loja Virtual</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
              Equipamentos industriais e comerciais de refrigeração e climatização de alta qualidade.
            </p>
          </div>
          <a
            href={COMPANY.whatsappLink}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 rounded-2xl font-bold transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3 glow-blue"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Phone size={20} />
            Ver Catálogo Completo
          </a>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-bold transition-all text-sm uppercase tracking-wider ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg glow-blue'
                  : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="group relative bg-slate-900 rounded-3xl overflow-hidden border border-white/5 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                  {product.category}
                </div>
                <button
                  onClick={() => setSelectedProduct(selectedProduct === index ? null : index)}
                  className="absolute top-4 left-4 w-10 h-10 bg-slate-900/80 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all group/info"
                  aria-label="Ver detalhes"
                >
                  <Info size={18} className="text-cyan-400 group-hover/info:text-white" />
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 leading-tight min-h-[56px]">{product.name}</h3>

                {selectedProduct === index && (
                  <div className="mb-4 p-4 bg-slate-950/50 rounded-xl border border-cyan-500/20 animate-[fadeIn_0.3s_ease-in]">
                    <p className="text-slate-300 text-sm leading-relaxed">{product.description}</p>
                  </div>
                )}

                <a
                  href={COMPANY.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-slate-800 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 rounded-xl font-bold transition-all text-sm uppercase tracking-wider hover:shadow-lg"
                >
                  <Phone size={16} />
                  Consultar Preço
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-500 text-lg">Nenhum produto encontrado nesta categoria.</p>
          </div>
        )}
      </div>
    </section>
  );
};
