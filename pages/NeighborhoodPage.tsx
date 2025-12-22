import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FAB } from '../components/FAB';
import { SEO } from '../components/SEO';
import { AnimatedCard } from '../components/AnimatedCard';
import { ALL_NEIGHBORHOODS } from '../data/neighborhoods';
import { COMPANY } from '../constants';
import { Phone, MapPin, CheckCircle, Clock, Wrench, Shield } from 'lucide-react';

export const NeighborhoodPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const neighborhood = ALL_NEIGHBORHOODS.find(n => n.slug === slug);

  if (!neighborhood) {
    return <Navigate to="/" replace />;
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Refrigeração e Climatização em ${neighborhood.name} - ${neighborhood.city}`,
    description: neighborhood.fullDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY.name,
      telephone: COMPANY.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: COMPANY.address,
        addressLocality: 'Penha',
        addressRegion: 'SC',
        postalCode: COMPANY.cep,
        addressCountry: 'BR'
      }
    },
    areaServed: {
      '@type': 'Place',
      name: `${neighborhood.name}, ${neighborhood.city}, Santa Catarina, Brasil`
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços Oferecidos',
      itemListElement: neighborhood.features.map((feature, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: feature
        },
        position: index + 1
      }))
    }
  };

  return (
    <>
      <SEO
        title={`Refrigeração e Climatização em ${neighborhood.name} - ${neighborhood.city}`}
        description={`${neighborhood.fullDescription.substring(0, 155)}...`}
        canonical={`https://bcrefrigeracaosc.com.br/bairro/${neighborhood.slug}`}
        schema={schema}
        keywords={`refrigeração ${neighborhood.name}, ar condicionado ${neighborhood.name}, climatização ${neighborhood.city}, manutenção ar condicionado ${neighborhood.name}`}
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
                to={`/${neighborhood.citySlug}`}
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
              >
                ← Voltar para {neighborhood.city}
              </Link>

              <div className="flex items-start gap-6 mb-8">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-500/10 border border-blue-500/20">
                  {React.cloneElement(neighborhood.icon as React.ReactElement, {
                    className: 'w-16 h-16'
                  })}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="text-cyan-400" size={24} />
                    <span className="text-slate-400 text-lg">
                      {neighborhood.name}, {neighborhood.city} - SC
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                    Refrigeração e Climatização em{' '}
                    <span className="gradient-text">{neighborhood.name}</span>
                  </h1>
                  <p className="text-xl text-slate-300 leading-relaxed">
                    {neighborhood.fullDescription}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <AnimatedCard>
                <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
                  <CheckCircle className="text-green-400" />
                  Serviços Oferecidos
                </h2>
                <ul className="space-y-4">
                  {neighborhood.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-300">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedCard>

              <AnimatedCard>
                <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
                  <Shield className="text-blue-400" />
                  Diferenciais
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-bold text-white mb-1">Atendimento 24 Horas</div>
                      <div className="text-sm text-slate-400">
                        Emergências atendidas a qualquer momento
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Wrench className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-bold text-white mb-1">Técnicos Especializados</div>
                      <div className="text-sm text-slate-400">
                        Equipe treinada e certificada
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="text-green-400 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-bold text-white mb-1">Garantia de Qualidade</div>
                      <div className="text-sm text-slate-400">
                        Serviços com garantia estendida
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <AnimatedCard className="text-center bg-gradient-to-br from-blue-600/10 to-transparent">
                <Wrench className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-black text-white mb-2">1000+</div>
                <div className="text-slate-400">Serviços Realizados</div>
              </AnimatedCard>
              <AnimatedCard className="text-center bg-gradient-to-br from-cyan-500/10 to-transparent">
                <Clock className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
                <div className="text-3xl font-black text-white mb-2">24/7</div>
                <div className="text-slate-400">Suporte Disponível</div>
              </AnimatedCard>
              <AnimatedCard className="text-center bg-gradient-to-br from-green-500/10 to-transparent">
                <Shield className="w-12 h-12 text-green-400 mx-auto mb-3" />
                <div className="text-3xl font-black text-white mb-2">15+</div>
                <div className="text-slate-400">Anos no Mercado</div>
              </AnimatedCard>
            </div>

            <AnimatedCard className="bg-gradient-to-r from-blue-600/10 to-cyan-500/10 border-blue-500/20">
              <div className="text-center">
                <Phone className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                <h2 className="text-3xl font-black mb-4">
                  Atendemos {neighborhood.name} com Excelência
                </h2>
                <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
                  Nossa equipe está pronta para atender você em {neighborhood.name}, {neighborhood.city}.
                  Solicite um orçamento gratuito e sem compromisso pelo WhatsApp.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href={COMPANY.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 rounded-full font-bold hover:scale-105 transition-transform"
                  >
                    <Phone size={20} />
                    WhatsApp: {COMPANY.whatsapp}
                  </a>
                  <a
                    href={`tel:${COMPANY.phone.replace(/\D/g, '')}`}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full font-bold hover:scale-105 transition-transform"
                  >
                    <Phone size={20} />
                    Telefone: {COMPANY.phone}
                  </a>
                </div>
              </div>
            </AnimatedCard>

            <div className="mt-16">
              <h2 className="text-3xl font-black mb-8 text-center">
                Por que escolher a BC Refrigeração em {neighborhood.name}?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <AnimatedCard className="text-center">
                  <div className="text-4xl mb-4">🏆</div>
                  <h3 className="font-bold text-lg mb-2">Experiência Comprovada</h3>
                  <p className="text-sm text-slate-400">
                    Mais de 15 anos atendendo a região
                  </p>
                </AnimatedCard>
                <AnimatedCard className="text-center">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="font-bold text-lg mb-2">Atendimento Rápido</h3>
                  <p className="text-sm text-slate-400">
                    Técnicos disponíveis 24 horas
                  </p>
                </AnimatedCard>
                <AnimatedCard className="text-center">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="font-bold text-lg mb-2">Preços Justos</h3>
                  <p className="text-sm text-slate-400">
                    Orçamento sem compromisso
                  </p>
                </AnimatedCard>
                <AnimatedCard className="text-center">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="font-bold text-lg mb-2">Garantia Total</h3>
                  <p className="text-sm text-slate-400">
                    Todos os serviços com garantia
                  </p>
                </AnimatedCard>
              </div>
            </div>
          </div>
        </main>

        <Footer />
        <FAB />
      </div>
    </>
  );
};
