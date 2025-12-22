import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FAB } from '../components/FAB';
import { SEO } from '../components/SEO';
import { AnimatedCard } from '../components/AnimatedCard';
import { CITIES } from '../constants';
import { PENHA_NEIGHBORHOODS, BC_NEIGHBORHOODS, Neighborhood } from '../data/neighborhoods';
import { MapPin, Phone, Clock } from 'lucide-react';

export const CityPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const city = CITIES.find(c => c.slug === slug);

  if (!city) {
    return <Navigate to="/" replace />;
  }

  const neighborhoods: Neighborhood[] = city.slug === 'penha'
    ? PENHA_NEIGHBORHOODS
    : BC_NEIGHBORHOODS;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Refrigeração e Climatização',
    provider: {
      '@type': 'LocalBusiness',
      name: 'BC Refrigeração e Climatização'
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
      '@id': city.slug === 'penha'
        ? 'https://www.wikidata.org/wiki/Q1007976'
        : 'https://www.wikidata.org/wiki/Q925112'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Serviços em ${city.name}`,
      itemListElement: neighborhoods.map(n => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: `Refrigeração e Climatização em ${n.name}`,
          areaServed: {
            '@type': 'Place',
            name: `${n.name}, ${city.name}, SC`
          }
        }
      }))
    }
  };

  return (
    <>
      <SEO
        title={`Refrigeração e Climatização em ${city.name} - SC`}
        description={`${city.fullDescription} Atendemos todos os bairros de ${city.name} com excelência em refrigeração comercial, industrial e residencial.`}
        canonical={`https://bcrefrigeracaosc.com.br/${city.slug}`}
        schema={schema}
        keywords={`refrigeração ${city.name}, climatização ${city.name}, ar condicionado ${city.name}, câmara fria ${city.name}`}
      />

      <div className="min-h-screen bg-slate-950 text-white">
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/5 blur-[150px]" />
          <div className="absolute bottom-[0%] right-[-10%] w-[50%] h-[50%] bg-cyan-400/5 blur-[150px]" />
        </div>

        <Header />

        <main className="pt-32 pb-24">
          <div className="container mx-auto px-6">
            <div className="mb-12">
              <Link
                to="/"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
              >
                ← Voltar para Home
              </Link>

              <div className="flex items-start gap-6 mb-8">
                <div className="flex-1">
                  <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                    Refrigeração e Climatização em{' '}
                    <span className="gradient-text">{city.name}</span>
                  </h1>
                  <p className="text-xl text-slate-300 leading-relaxed mb-6">
                    {city.fullDescription}
                  </p>
                  <div className="flex flex-wrap gap-6 text-slate-400">
                    <div className="flex items-center gap-2">
                      <MapPin size={20} className="text-blue-400" />
                      <span>População: {city.population} habitantes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={20} className="text-cyan-400" />
                      <span>Área: {city.area}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-16">
                <AnimatedCard className="text-center">
                  <div className="text-4xl font-black text-cyan-400 mb-2">
                    {neighborhoods.length}
                  </div>
                  <div className="text-slate-400">Bairros Atendidos</div>
                </AnimatedCard>
                <AnimatedCard className="text-center">
                  <div className="text-4xl font-black text-blue-400 mb-2">24h</div>
                  <div className="text-slate-400">Atendimento Emergencial</div>
                </AnimatedCard>
                <AnimatedCard className="text-center">
                  <div className="text-4xl font-black text-green-400 mb-2">15+</div>
                  <div className="text-slate-400">Anos de Experiência</div>
                </AnimatedCard>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-black mb-8">
                Bairros Atendidos em <span className="gradient-text">{city.name}</span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {neighborhoods.map((neighborhood, index) => (
                  <Link
                    key={index}
                    to={`/bairro/${neighborhood.slug}`}
                    className="block group"
                  >
                    <AnimatedCard className="h-full hover:scale-105 transition-all duration-300">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-slate-800/50 group-hover:bg-blue-600/20 transition-all">
                          {neighborhood.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                            {neighborhood.name}
                          </h3>
                          <p className="text-slate-400 text-sm leading-relaxed">
                            {neighborhood.desc}
                          </p>
                        </div>
                      </div>
                      <div className="text-cyan-400 text-sm font-semibold group-hover:underline">
                        Ver detalhes →
                      </div>
                    </AnimatedCard>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-16">
              <AnimatedCard className="bg-gradient-to-r from-blue-600/10 to-cyan-500/10 border-blue-500/20">
                <div className="text-center">
                  <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-black mb-3">
                    Atendemos Toda a Região de {city.name}
                  </h3>
                  <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                    Nossa equipe técnica está pronta para atender você em qualquer bairro de {city.name}.
                    Entre em contato e solicite um orçamento sem compromisso.
                  </p>
                  <a
                    href="https://api.whatsapp.com/send?phone=554733059452"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full font-bold hover:scale-105 transition-transform"
                  >
                    Falar no WhatsApp
                  </a>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </main>

        <Footer />
        <FAB />
      </div>
    </>
  );
};
