import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FAB } from '../components/FAB';
import { NEIGHBORHOODS, SERVICES, COMPANY, COVERAGE_INFO } from '../constants';
import { Phone, MapPin, Clock, CheckCircle } from 'lucide-react';

export const LocationPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const neighborhood = NEIGHBORHOODS.find(n => n.slug === slug);

  if (!neighborhood) {
    return <Navigate to="/" replace />;
  }

  const siteUrl = window.location.origin;
  const pageUrl = `${siteUrl}/localidade/${slug}`;

  return (
    <>
      <EnhancedSEO
        title={`${neighborhood.name} - Refrigeração e Climatização`}
        description={`Serviços de refrigeração, climatização e ar condicionado em ${neighborhood.name}. ${neighborhood.desc} ${COVERAGE_INFO.message}.`}
        keywords={`refrigeração ${neighborhood.name}, ar condicionado ${neighborhood.name}, câmara fria ${neighborhood.city}, climatização ${neighborhood.city}`}
        canonicalUrl={pageUrl}
        location={neighborhood.name}
        service="Refrigeração e Climatização"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": `Refrigeração e Climatização em ${neighborhood.name}`,
          "description": neighborhood.desc,
          "provider": {
            "@type": "LocalBusiness",
            "name": "BC Refrigeração",
            "telephone": COMPANY.phone,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Penha",
              "addressRegion": "SC"
            }
          },
          "areaServed": {
            "@type": "City",
            "name": neighborhood.city
          }
        }}
      />

      <Header />

      <main className="min-h-screen bg-slate-950 text-white pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4 text-cyan-400">
                <MapPin size={24} />
                <span className="text-sm font-bold uppercase tracking-wider">{neighborhood.city}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                Refrigeração e Climatização em <span className="gradient-text">{neighborhood.name}</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                {neighborhood.desc}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-500/20 border border-blue-500/30 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Atendimento 24h</h3>
                    <p className="text-sm text-slate-300">Emergências e manutenção</p>
                  </div>
                </div>
                <a
                  href={COMPANY.whatsappLink}
                  className="block w-full py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-center transition-all mt-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar Orçamento
                </a>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Área de Cobertura</h3>
                    <p className="text-sm text-slate-300">{COVERAGE_INFO.message}</p>
                  </div>
                </div>
                <div className="mt-4 text-sm text-slate-400">
                  <Clock size={16} className="inline mr-2" />
                  Segunda a Sexta: 08:00 às 18:00
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black mb-8">
                Nossos Serviços em <span className="gradient-text">{neighborhood.name}</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {SERVICES.map((service, index) => (
                  <div
                    key={index}
                    className="bg-slate-900 border border-white/5 rounded-2xl p-6 hover:border-blue-500/50 transition-all group"
                  >
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-black mb-6">Por que escolher a BC Refrigeração?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-cyan-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Atendimento 24 horas</h4>
                    <p className="text-slate-300 text-sm">Emergências atendidas a qualquer hora do dia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-cyan-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Técnicos Especializados</h4>
                    <p className="text-slate-300 text-sm">Equipe certificada e experiente</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-cyan-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Equipamentos Modernos</h4>
                    <p className="text-slate-300 text-sm">Ferramentas de última geração</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-cyan-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Garantia de Qualidade</h4>
                    <p className="text-slate-300 text-sm">Serviços com garantia e excelência</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FAB />
    </>
  );
};