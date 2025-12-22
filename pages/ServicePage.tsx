import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FAB } from '../components/FAB';
import { SERVICES, COMPANY, NEIGHBORHOODS } from '../constants';
import { Phone, MapPin, Clock, CheckCircle } from 'lucide-react';

export const ServicePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const slugToTitle: Record<string, string> = {
    'camaras-frias-tunel': 'Câmaras Frias & Túnel',
    'ar-condicionado-pmoc': 'Ar Condicionado & PMOC',
    'manutencao-chiller': 'Manutenção de Chiller',
    'containers-reefer': 'Containers Reefer 24h',
    'veiculos-refrigerados': 'Veículos Refrigerados',
    'comandos-eletrica': 'Comandos & Elétrica'
  };

  const serviceTitle = slugToTitle[slug || ''];
  const service = SERVICES.find(s => s.title === serviceTitle);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const siteUrl = window.location.origin;
  const pageUrl = `${siteUrl}/servico/${slug}`;

  return (
    <>
      <EnhancedSEO
        title={`${service.title} - Serviços Especializados`}
        description={`${service.description} BC Refrigeração - Especialistas em ${service.title} em Penha e região.`}
        keywords={`${service.title}, refrigeração industrial, ${slug}, penha refrigeração`}
        canonicalUrl={pageUrl}
        service={service.title}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": service.title,
          "description": service.description,
          "provider": {
            "@type": "LocalBusiness",
            "name": "BC Refrigeração",
            "telephone": COMPANY.phone,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Penha",
              "addressRegion": "SC"
            }
          }
        }}
      />

      <Header />

      <main className="min-h-screen bg-slate-950 text-white pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center">
                  {service.icon}
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                <span className="gradient-text">{service.title}</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                {service.description}
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
                    <h3 className="font-bold text-lg">Área de Atendimento</h3>
                    <p className="text-sm text-slate-300">Penha e 200km de raio</p>
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
                Atendemos em <span className="gradient-text">Toda a Região</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {NEIGHBORHOODS.map((neighborhood, index) => (
                  <div
                    key={index}
                    className="bg-slate-900 border border-white/5 rounded-xl p-4 hover:border-cyan-500/50 transition-all"
                  >
                    <div className="mb-2">{neighborhood.icon}</div>
                    <p className="text-sm font-bold">{neighborhood.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-black mb-6">Benefícios do Nosso Serviço</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-cyan-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Atendimento Rápido</h4>
                    <p className="text-slate-300 text-sm">Resposta imediata para emergências</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-cyan-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Equipe Certificada</h4>
                    <p className="text-slate-300 text-sm">Profissionais altamente qualificados</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-cyan-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Tecnologia Avançada</h4>
                    <p className="text-slate-300 text-sm">Equipamentos de última geração</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-cyan-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Garantia Total</h4>
                    <p className="text-slate-300 text-sm">Serviços com garantia e qualidade</p>
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