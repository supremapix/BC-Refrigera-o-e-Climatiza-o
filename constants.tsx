
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
  logo: "/bc-logo-refrigeracao copy copy.png",
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

export const COVERAGE_INFO = {
  radius: "200km",
  message: "Atendemos em um raio de 200km do nosso endereço com acréscimo de taxa de deslocamento",
  baseLocation: "Penha - SC"
};

export const NEIGHBORHOODS = [
  {
    name: "Centro - Penha",
    city: "Penha",
    slug: "centro-penha",
    desc: "Coração comercial de Penha. Atendimento especializado para comércios, restaurantes e residências do centro histórico.",
    icon: <Building className="text-blue-400" />
  },
  {
    name: "Armação - Penha",
    city: "Penha",
    slug: "armacao-penha",
    desc: "Região histórica da pesca artesanal. Manutenção de equipamentos para pescarias e comércios locais.",
    icon: <Waves className="text-cyan-400" />
  },
  {
    name: "Praia Alegre - Penha",
    city: "Penha",
    slug: "praia-alegre-penha",
    desc: "Área turística com pousadas e hotéis. Climatização e refrigeração para empreendimentos à beira-mar.",
    icon: <Palmtree className="text-green-400" />
  },
  {
    name: "Nossa Senhora de Fátima - Penha",
    city: "Penha",
    slug: "nossa-senhora-fatima-penha",
    desc: "Bairro residencial tradicional. Instalação e manutenção de ar condicionado para famílias de Penha.",
    icon: <Home className="text-slate-400" />
  },
  {
    name: "Santa Lídia - Penha",
    city: "Penha",
    slug: "santa-lidia-penha",
    desc: "Crescimento urbano acelerado. Soluções em refrigeração para novos empreendimentos residenciais.",
    icon: <Building className="text-indigo-400" />
  },
  {
    name: "São Nicolau - Penha",
    city: "Penha",
    slug: "sao-nicolau-penha",
    desc: "Proximidade com o Beto Carrero World. Atendimento para hotéis, pousadas e comércio turístico.",
    icon: <ShieldCheck className="text-cyan-400" />
  },
  {
    name: "Gravatá - Penha",
    city: "Penha",
    slug: "gravata-penha",
    desc: "Zona de expansão comercial. Refrigeração industrial para supermercados e distribuidoras.",
    icon: <Truck className="text-red-400" />
  },
  {
    name: "Centro - Balneário Camboriú",
    city: "Balneário Camboriú",
    slug: "centro-balneario-camboriu",
    desc: "Coração de BC. Atendemos os maiores arranha-céus e comércios da Avenida Brasil e Atlântica.",
    icon: <Building className="text-blue-400" />
  },
  {
    name: "Pioneiros - Balneário Camboriú",
    city: "Balneário Camboriú",
    slug: "pioneiros-balneario-camboriu",
    desc: "Região nobre da Barra Norte. Especialistas em climatização silenciosa para condomínios de alto padrão.",
    icon: <ShieldCheck className="text-cyan-400" />
  },
  {
    name: "Nações - Balneário Camboriú",
    city: "Balneário Camboriú",
    slug: "nacoes-balneario-camboriu",
    desc: "Bairro dinâmico com forte veia comercial. Manutenção rápida para lojas e residências locais.",
    icon: <Zap className="text-yellow-400" />
  },
  {
    name: "Estados - Balneário Camboriú",
    city: "Balneário Camboriú",
    slug: "estados-balneario-camboriu",
    desc: "Próximo ao Balneário Shopping. Atendimento ágil para uma das áreas que mais cresce na cidade.",
    icon: <MapPin className="text-red-400" />
  },
  {
    name: "Praia dos Amores - Balneário Camboriú",
    city: "Balneário Camboriú",
    slug: "praia-dos-amores-balneario-camboriu",
    desc: "Onde o luxo encontra a natureza. Proteção especial contra maresia em sistemas de ar condicionado.",
    icon: <Waves className="text-blue-300" />
  },
  {
    name: "Barra Norte - Balneário Camboriú",
    city: "Balneário Camboriú",
    slug: "barra-norte-balneario-camboriu",
    desc: "Polo gastronômico e residencial de alto padrão. Manutenção de adegas e câmaras frias para restaurantes.",
    icon: <Palmtree className="text-green-400" />
  },
  {
    name: "Barra Sul - Balneário Camboriú",
    city: "Balneário Camboriú",
    slug: "barra-sul-balneario-camboriu",
    desc: "Raízes históricas preservadas. Climatização para hotéis boutique e estabelecimentos tradicionais.",
    icon: <Home className="text-slate-400" />
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
    name: "Ar Condicionado Split 12000 BTUs",
    category: "Climatização",
    description: "Split High Wall Inverter 12.000 BTUs com tecnologia inverter para máxima eficiência energética. Ideal para ambientes residenciais e comerciais de até 20m².",
    image: "/ar_condicionado_split_12000_btus.jpg"
  },
  {
    name: "Freezer Expositor 2 Portas",
    category: "Comercial",
    description: "Freezer expositor vertical com 2 portas de vidro, perfeito para supermercados, padarias e conveniências. Capacidade de 570 litros com iluminação LED interna.",
    image: "/freezer_expositor_2_portas.jpg"
  },
  {
    name: "Câmara Fria Congelado Premium",
    category: "Industrial",
    description: "Câmara fria para congelados de alta performance com temperatura de -18°C a -25°C. Estrutura em painéis modulares e sistema de refrigeração industrial de última geração.",
    image: "/camara_fria_congelado_premium.jpg"
  },
  {
    name: "Câmara Fria Standard com Piso Pain",
    category: "Industrial",
    description: "Câmara fria standard com piso em painel isolante térmico (Pain). Ideal para resfriados e congelados. Disponível em diversos tamanhos personalizados conforme sua necessidade.",
    image: "/camara-fria-standard-com-piso-pain.jpg"
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
