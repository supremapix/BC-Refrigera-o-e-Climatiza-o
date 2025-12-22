import React from 'react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Products } from '../components/Products';
import { Neighborhoods } from '../components/Neighborhoods';
import { Testimonials } from '../components/Testimonials';
import { Clients } from '../components/Clients';
import { InstagramFeed } from '../components/InstagramFeed';
import { Footer } from '../components/Footer';
import { FAB } from '../components/FAB';

export const HomePage: React.FC = () => {
  return (
    <>
      <EnhancedSEO
        title="BC Refrigeração - Climatização e Refrigeração Industrial em Penha SC"
        description="BC Refrigeração - Especialistas em climatização, refrigeração industrial, câmaras frias e ar condicionado em Penha e região. Atendimento 24h, PMOC, manutenção de chillers e containers reefer. Atendemos em um raio de 200km."
        keywords="refrigeração penha, ar condicionado penha, câmara fria, climatização industrial, manutenção ar condicionado, pmoc penha, chiller, container reefer, balneário camboriú refrigeração, refrigeração industrial santa catarina"
      />

      <Header />
      <Hero />
      <Services />
      <Products />
      <Neighborhoods />
      <Testimonials />
      <Clients />
      <InstagramFeed />
      <Footer />
      <FAB />
    </>
  );
};