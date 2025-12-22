import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Products } from '../components/Products';
import { Clients } from '../components/Clients';
import { Testimonials } from '../components/Testimonials';
import { InstagramFeed } from '../components/InstagramFeed';
import { Footer } from '../components/Footer';
import { FAB } from '../components/FAB';
import { SEO } from '../components/SEO';
import { AnimatedCard } from '../components/AnimatedCard';
import { CITIES, COVERAGE_INFO } from '../constants';
import { Map, MapPin, ArrowRight } from 'lucide-react';

export const HomePage: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://bcrefrigeracaosc.com.br/#website',
    url: 'https://bcrefrigeracaosc.com.br',
    name: 'BC Refrigeração e Climatização',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://bcrefrigeracaosc.com.br/?s={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <>
      <SEO
        title="BC Refrigeração e Climatização - Penha e Região | Atendimento 24h"
        description="Soluções completas em refrigeração e climatização para Penha, Balneário Camboriú e região. Câmaras frias, ar condicionado, chillers e containers reefer. Atendimento 24 horas."
        canonical="https://bcrefrigeracaosc.com.br"
        schema={schema}
        keywords="refrigeração Penha, climatização Balneário Camboriú, câmara fria SC, ar condicionado Penha, manutenção reefer, chiller industrial"
      />

      <div className="min-h-screen bg-slate-950 text-white">
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/5 blur-[150px]" />
          <div className="absolute bottom-[0%] right-[-10%] w-[50%] h-[50%] bg-cyan-400/5 blur-[150px]" />
        </div>

        <Header />

        <main>
          <Hero />
          <Clients />
          <Testimonials />

          <section id="cidades" className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4">
                  <Map size={14} />
                  Área de Atendimento
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
                  <span className="gradient-text">Cidades Atendidas</span>
                </h2>
                <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
                  Nossa equipe técnica está estrategicamente posicionada para atender as principais cidades da região. {COVERAGE_INFO.message}.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
                {CITIES.map((city, index) => (
                  <Link
                    key={index}
                    to={`/${city.slug}`}
                    className="block group"
                  >
                    <AnimatedCard className="h-full hover:scale-105 transition-all duration-300">
                      <div className="flex items-start gap-6 mb-6">
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-500/10 group-hover:from-blue-600/30 group-hover:to-cyan-500/20 transition-all">
                          <MapPin className="w-10 h-10 text-cyan-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-black mb-2 group-hover:text-cyan-400 transition-colors">
                            {city.name}
                          </h3>
                          <p className="text-sm text-slate-500 mb-2">{city.state}</p>
                        </div>
                      </div>

                      <p className="text-slate-400 leading-relaxed mb-6">
                        {city.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                        <div className="text-sm text-slate-500">
                          {city.population} habitantes
                        </div>
                        <div className="flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-3 transition-all">
                          Ver bairros
                          <ArrowRight size={18} />
                        </div>
                      </div>

                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-10 transition-opacity">
                        <Map className="w-20 h-20 text-white" />
                      </div>
                    </AnimatedCard>
                  </Link>
                ))}
              </div>

              <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-600/10 to-cyan-500/10 border border-blue-500/20 text-center">
                <p className="text-slate-300 font-medium text-lg mb-4">
                  <span className="text-cyan-400 font-black">{COVERAGE_INFO.radius}</span> de raio de atendimento
                </p>
                <p className="text-slate-400 text-sm">
                  Atendemos também outras cidades da região com acréscimo de taxa de deslocamento
                </p>
              </div>
            </div>
          </section>

          <Services />
          <Products />
          <InstagramFeed />
        </main>

        <Footer />
        <FAB />
      </div>
    </>
  );
};