
import React from 'react';
import { 
  Zap, 
  Snowflake, 
  Wind, 
  Settings, 
  Truck, 
  Package, 
  ShieldCheck,
  Building,
  MapPin,
  Waves,
  Palmtree,
  Home
} from 'lucide-react';

export const COMPANY = {
  name: "BC Refrigeração e Climatização",
  logo: "/bc-logo-refrigeracao.png",
  address: "Av. Antônio J. Tavares, 90, Penha, Santa Catarina, Brasil",
  cep: "88385-000",
  phone: "(47) 3305-9452",
  whatsapp: "(47) 99689-2793",
  whatsappLink: "https://api.whatsapp.com/send?phone=554733059452",
  email: "contato@bcrefrigeracaosc.com.br",
  instagram: "@bc.refrigeracaosc",
  instagramLink: "https://www.instagram.com/bc.refrigeracaosc/",
  facebookLink: "https://www.facebook.com/BCREFRIGERACAOSC/",
  mapsLink: "https://maps.app.goo.gl/gpwxntKJnNyTcNc29"
};

export const NEIGHBORHOODS = [
  {
    name: "Centro",
    desc: "O coração pulsante de BC. Atendemos os maiores arranha-céus e comércios da Avenida Brasil e Atlântica.",
    icon: <Building className="text-blue-400" />
  },
  {
    name: "Pioneiros",
    desc: "Região nobre da Barra Norte. Especialistas em climatização silenciosa para condomínios de alto padrão.",
    icon: <ShieldCheck className="text-cyan-400" />
  },
  {
    name: "Nações",
    desc: "Bairro dinâmico com forte veia comercial. Manutenção rápida para lojas e residências locais.",
    icon: <Zap className="text-yellow-400" />
  },
  {
    name: "Estados",
    desc: "Próximo ao Balneário Shopping. Atendimento ágil para uma das áreas que mais cresce na cidade.",
    icon: <MapPin className="text-red-400" />
  },
  {
    name: "Praia dos Amores",
    desc: "Onde o luxo encontra a natureza. Proteção especial contra maresia em sistemas de ar condicionado.",
    icon: <Waves className="text-blue-300" />
  },
  {
    name: "Barra (Norte e Sul)",
    desc: "Raízes históricas e polos gastronômicos. Manutenção vital para freezers e câmaras de restaurantes.",
    icon: <Palmtree className="text-green-400" />
  },
  {
    name: "Vila Real & Municípios",
    desc: "Bairros tradicionais e residenciais. Instalação e higienização completa para o conforto da sua família.",
    icon: <Home className="text-slate-400" />
  },
  {
    name: "Ariribá",
    desc: "Transição entre BC e Itajaí. Atendemos casas e novos empreendimentos com foco em eficiência energética.",
    icon: <Wind className="text-cyan-500" />
  },
  {
    name: "Estaleiro & Estaleirinho",
    desc: "Paraísos preservados. Manutenção de adegas e climatização em pousadas e casas de veraneio exclusivas.",
    icon: <Snowflake className="text-blue-200" />
  },
  {
    name: "Taquaras & Laranjeiras",
    desc: "A rota das praias. Assistência técnica para o setor de turismo e lazer em áreas de difícil acesso.",
    icon: <Waves className="text-cyan-300" />
  },
  {
    name: "Nova Esperança & S.J. Tadeu",
    desc: "Crescimento industrial e logístico. Soluções para empresas, galpões e veículos refrigerados.",
    icon: <Truck className="text-indigo-400" />
  },
  {
    name: "Jardim Iate Clube",
    desc: "Área náutica e residencial. Refrigeração especializada para embarcações e residências beira-rio.",
    icon: <MapPin className="text-blue-500" />
  }
];

export const SERVICES = [
  {
    title: "Câmaras Frias & Túnel",
    description: "Projetos de Câmaras de Congelados Premium e Standard com Piso Pain. Túneis de congelamento rápido para indústria alimentícia.",
    icon: <Snowflake className="w-8 h-8 text-cyan-400" />
  },
  {
    title: "Ar Condicionado & PMOC",
    description: "Instalação de Split High Wall Inverter e sistemas centrais. Implementação de PMOC (Plano de Manutenção, Operação e Controle).",
    icon: <Wind className="w-8 h-8 text-blue-400" />
  },
  {
    title: "Manutenção de Chiller",
    description: "Assistência técnica especializada em Chillers industriais e sistemas de refrigeração de grande porte para fábricas.",
    icon: <Settings className="w-8 h-8 text-slate-400" />
  },
  {
    title: "Containers Reefer 24h",
    description: "Manutenção emergencial em containers refrigerados. Atendimento especializado para portos e logística 24 horas.",
    icon: <Package className="w-8 h-8 text-indigo-400" />
  },
  {
    title: "Veículos Refrigerados",
    description: "Manutenção completa em sistemas de refrigeração para baús, vans e caminhões de transporte de perecíveis.",
    icon: <Truck className="w-8 h-8 text-red-400" />
  },
  {
    title: "Comandos & Elétrica",
    description: "Instalação de comandos elétricos e infraestrutura completa para sistemas automatizados de climatização.",
    icon: <Zap className="w-8 h-8 text-yellow-400" />
  }
];

export const PRODUCTS = [
  {
    name: "Câmara Fria Premium",
    category: "Industrial",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Expositor Vertical 2 Portas",
    category: "Comercial",
    image: "https://images.unsplash.com/photo-1580913411353-29007f3a9792?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Split High Wall Inverter",
    category: "Climatização",
    image: "https://images.unsplash.com/photo-1621905252507-b354bcadcabc?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Ilha de Congelados Polar",
    category: "Comercial",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=600"
  }
];

export const CLIENTS = [
  "Frimesa", "Cacau Show", "Habib's", "Guaraná Antarctica", "Consul", "Bradesco", "Minerva Foods", "Atacadão", "Kibon", "Bob's"
];

export const TESTIMONIALS = [
  {
    name: "João Silva",
    role: "Proprietário",
    company: "Restaurante Sabor Real",
    text: "A BC Refrigeração salvou nosso estoque! O atendimento 24h é impecável e a equipe técnica é extremamente qualificada. Melhor parceiro em Penha.",
    photo: "https://i.pravatar.cc/150?u=joao"
  },
  {
    name: "Maria Oliveira",
    role: "Gerente de Operações",
    company: "Supermercado Penha",
    text: "A instalação das nossas novas câmaras frias superou as expectativas. Economia de energia real e acabamento de primeira linha. Recomendo fortemente!",
    photo: "https://i.pravatar.cc/150?u=maria"
  },
  {
    name: "Ricardo Santos",
    role: "Diretor Industrial",
    company: "Indústria de Pescados Alpha",
    text: "Manter nossos túneis de congelamento operando é vital. O contrato de manutenção da BC nos dá a tranquilidade que precisamos para produzir sem paradas.",
    photo: "https://i.pravatar.cc/150?u=ricardo"
  },
  {
    name: "Ana Costa",
    role: "Administradora",
    company: "Hotel Sol e Mar",
    text: "Excelente serviço de PMOC. Toda a climatização do hotel está em dia, com ar sempre limpo e funcionando perfeitamente. Profissionais éticos.",
    photo: "https://i.pravatar.cc/150?u=ana"
  }
];

export const TYPEWRITER_TEXTS = [
  "Climatização Profissional",
  "Câmaras Frias & Túneis",
  "Ar Condicionado Inverter",
  "Refrigeração Industrial",
  "Manutenção Reefer 24h",
  "Soluções em Chiller"
];
