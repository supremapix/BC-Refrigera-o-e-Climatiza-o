import React from 'react';
import {
  Building,
  Waves,
  Palmtree,
  Home,
  ShieldCheck,
  Truck,
  Zap,
  MapPin
} from 'lucide-react';

export interface Neighborhood {
  name: string;
  city: string;
  citySlug: string;
  slug: string;
  desc: string;
  fullDescription: string;
  features: string[];
  icon: React.ReactNode;
}

export const PENHA_NEIGHBORHOODS: Neighborhood[] = [
  {
    name: "Centro",
    city: "Penha",
    citySlug: "penha",
    slug: "centro-penha",
    desc: "Coração comercial de Penha com forte presença de comércio tradicional e serviços.",
    fullDescription: "O Centro de Penha é o coração pulsante da cidade, concentrando o comércio tradicional, serviços públicos e o dia a dia dos moradores. Com ruas históricas e estabelecimentos comerciais consolidados, é uma região que demanda sistemas de refrigeração e climatização confiáveis. Nossa equipe técnica tem vasta experiência atendendo lojas, restaurantes, mercados e escritórios no centro, garantindo conforto térmico e conservação adequada de produtos.",
    features: [
      "Atendimento rápido para comércio local",
      "Manutenção preventiva de ar condicionado",
      "Instalação de câmaras frias para restaurantes",
      "Assistência técnica emergencial 24 horas",
      "Projetos personalizados de climatização"
    ],
    icon: <Building className="text-blue-400" />
  },
  {
    name: "Armação",
    city: "Penha",
    citySlug: "penha",
    slug: "armacao-penha",
    desc: "Região histórica da pesca artesanal com crescente desenvolvimento turístico.",
    fullDescription: "A Armação é um dos bairros mais tradicionais de Penha, conhecido pela forte presença da pesca artesanal e pela proximidade com o mar. A região conta com pousadas, restaurantes especializados em frutos do mar e comércio local. Oferecemos soluções específicas para a conservação de pescados, com câmaras frias dimensionadas para as necessidades de pescadores e comerciantes, além de climatização resistente à maresia para estabelecimentos à beira-mar.",
    features: [
      "Câmaras frias para conservação de pescados",
      "Sistemas anti-corrosão para áreas litorâneas",
      "Manutenção de freezers para comércio de frutos do mar",
      "Climatização para pousadas e hotéis",
      "Atendimento especializado em refrigeração comercial"
    ],
    icon: <Waves className="text-cyan-400" />
  },
  {
    name: "Praia Alegre",
    city: "Penha",
    citySlug: "penha",
    slug: "praia-alegre-penha",
    desc: "Principal área turística de Penha, com pousadas, hotéis e comércio à beira-mar.",
    fullDescription: "Praia Alegre é o cartão-postal de Penha, concentrando grande parte dos empreendimentos turísticos da cidade. Com extensas faixas de areia e águas calmas, atrai milhares de turistas durante todo o ano. Atendemos hotéis, pousadas, bares e restaurantes com soluções completas em climatização multi-split, ar condicionado central e refrigeração comercial, garantindo conforto para hóspedes e visitantes mesmo nos dias mais quentes do verão.",
    features: [
      "Climatização silenciosa para hotéis",
      "Sistemas multi-split para pousadas",
      "Refrigeração para bares e restaurantes",
      "Manutenção preventiva em alta temporada",
      "Proteção especial contra maresia",
      "Ar condicionado VRF para grandes empreendimentos"
    ],
    icon: <Palmtree className="text-green-400" />
  },
  {
    name: "Nossa Senhora de Fátima",
    city: "Penha",
    citySlug: "penha",
    slug: "nossa-senhora-fatima-penha",
    desc: "Bairro residencial tradicional com forte senso de comunidade.",
    fullDescription: "O bairro Nossa Senhora de Fátima é uma área predominantemente residencial, conhecida pela tranquilidade e pelo espírito de comunidade entre os moradores. Atendemos famílias com instalação e manutenção de ar condicionado residencial, priorizando eficiência energética e conforto térmico. Oferecemos soluções acessíveis e de alta qualidade para residências de todos os portes, com técnicos treinados e peças originais.",
    features: [
      "Instalação de ar condicionado split residencial",
      "Manutenção preventiva com agendamento flexível",
      "Conserto de geladeiras e freezers domésticos",
      "Projetos de climatização para casas",
      "Atendimento personalizado para famílias"
    ],
    icon: <Home className="text-slate-400" />
  },
  {
    name: "Santa Lídia",
    city: "Penha",
    citySlug: "penha",
    slug: "santa-lidia-penha",
    desc: "Área de crescimento urbano acelerado com novos empreendimentos residenciais.",
    fullDescription: "Santa Lídia é um bairro em franca expansão, com novos condomínios residenciais e empreendimentos comerciais surgindo constantemente. A região atrai jovens famílias e investidores, demandando soluções modernas em climatização. Trabalhamos com construtoras e incorporadoras oferecendo projetos completos de ar condicionado para prédios novos, além de atender moradores com instalações residenciais de alta eficiência energética.",
    features: [
      "Projetos de climatização para condomínios novos",
      "Instalação de sistemas inverter econômicos",
      "Parceria com construtoras e incorporadoras",
      "Manutenção de infraestrutura elétrica",
      "Soluções para prédios inteligentes"
    ],
    icon: <Building className="text-indigo-400" />
  },
  {
    name: "São Nicolau",
    city: "Penha",
    citySlug: "penha",
    slug: "sao-nicolau-penha",
    desc: "Proximidade com Beto Carrero World, centro de hospedagem turística.",
    fullDescription: "São Nicolau é estrategicamente localizado próximo ao Beto Carrero World, tornando-se um hub de hospedagem para turistas que visitam o maior parque temático da América Latina. O bairro conta com diversos hotéis, pousadas e estabelecimentos comerciais voltados ao turismo. Oferecemos manutenção preventiva e corretiva para garantir que sistemas de climatização funcionem perfeitamente durante a alta temporada, quando a demanda é máxima.",
    features: [
      "Atendimento prioritário para setor hoteleiro",
      "Climatização para altas capacidades",
      "Manutenção programada em baixa temporada",
      "Suporte técnico durante alta temporada",
      "Refrigeração comercial para lojas e restaurantes"
    ],
    icon: <ShieldCheck className="text-cyan-400" />
  },
  {
    name: "Gravatá",
    city: "Penha",
    citySlug: "penha",
    slug: "gravata-penha",
    desc: "Zona de expansão comercial com supermercados e distribuidoras.",
    fullDescription: "Gravatá é o polo de desenvolvimento comercial e industrial de Penha, abrigando supermercados, distribuidoras, centros logísticos e estabelecimentos de grande porte. A região demanda soluções robustas em refrigeração industrial, como câmaras frias, chillers e sistemas de grande capacidade. Nossa equipe é especializada em projetos de refrigeração comercial e industrial, com atendimento 24 horas para emergências que possam comprometer estoques de produtos perecíveis.",
    features: [
      "Câmaras frias industriais de grande porte",
      "Refrigeração para supermercados e atacados",
      "Manutenção de chillers e sistemas centrais",
      "Atendimento emergencial 24/7",
      "Projetos customizados para logística e distribuição",
      "PMOC para estabelecimentos comerciais"
    ],
    icon: <Truck className="text-red-400" />
  }
];

export const BC_NEIGHBORHOODS: Neighborhood[] = [
  {
    name: "Centro",
    city: "Balneário Camboriú",
    citySlug: "balneario-camboriu",
    slug: "centro-balneario-camboriu",
    desc: "Coração comercial com arranha-céus icônicos da Av. Brasil e Atlântica.",
    fullDescription: "O Centro de Balneário Camboriú é mundialmente conhecido por seus impressionantes arranha-céus que margeiam a orla. Com uma densidade comercial altíssima, a região abriga lojas de grife, restaurantes sofisticados, hotéis de luxo e escritórios corporativos. Atendemos os maiores empreendimentos da cidade com soluções de climatização VRF, chillers de alta performance e sistemas de refrigeração para food services de grande porte. Nossa experiência em prédios inteligentes garante eficiência energética e conforto máximo.",
    features: [
      "Climatização VRF para arranha-céus",
      "Chillers para grandes empreendimentos",
      "Refrigeração comercial para restaurantes",
      "PMOC em edifícios corporativos",
      "Manutenção de sistemas centrais",
      "Atendimento técnico especializado 24h"
    ],
    icon: <Building className="text-blue-400" />
  },
  {
    name: "Pioneiros",
    city: "Balneário Camboriú",
    citySlug: "balneario-camboriu",
    slug: "pioneiros-balneario-camboriu",
    desc: "Região nobre da Barra Norte com condomínios de alto padrão.",
    fullDescription: "Pioneiros é um dos bairros mais nobres de Balneário Camboriú, localizado na cobiçada região da Barra Norte. Com condomínios de luxo, residências de alto padrão e vista privilegiada para o mar, o bairro exige soluções de climatização premium. Oferecemos sistemas multi-split silenciosos, ar condicionado inverter de última geração e projetos arquitetônicos integrados que preservam a estética dos ambientes sofisticados.",
    features: [
      "Climatização silenciosa para alto padrão",
      "Sistemas inverter de máxima eficiência",
      "Projetos integrados com arquitetura",
      "Proteção total contra maresia",
      "Manutenção discreta e agendada",
      "Automação e controle inteligente"
    ],
    icon: <ShieldCheck className="text-cyan-400" />
  },
  {
    name: "Nações",
    city: "Balneário Camboriú",
    citySlug: "balneario-camboriu",
    slug: "nacoes-balneario-camboriu",
    desc: "Bairro dinâmico com comércio diversificado e residências.",
    fullDescription: "O bairro das Nações é conhecido por sua diversidade comercial e residencial, oferecendo desde lojas de bairro até estabelecimentos de médio porte. É uma região em constante movimento, com forte presença de comércio local e serviços. Atendemos desde residências familiares até comércios, oferecendo soluções rápidas e eficientes em climatização e refrigeração, com equipe técnica sempre disponível para emergências.",
    features: [
      "Atendimento ágil para comércio local",
      "Instalação residencial de split e multi-split",
      "Refrigeração comercial para lojas",
      "Manutenção preventiva acessível",
      "Peças originais em estoque"
    ],
    icon: <Zap className="text-yellow-400" />
  },
  {
    name: "Estados",
    city: "Balneário Camboriú",
    citySlug: "balneario-camboriu",
    slug: "estados-balneario-camboriu",
    desc: "Próximo ao Balneário Shopping, uma das áreas que mais cresce.",
    fullDescription: "O bairro dos Estados é estrategicamente localizado próximo ao Balneário Shopping e à Avenida das Nações, sendo uma das áreas de maior crescimento da cidade. Com novos edifícios residenciais e comerciais surgindo constantemente, a região demanda soluções modernas e eficientes. Trabalhamos com construtoras locais e atendemos moradores com as mais avançadas tecnologias em climatização.",
    features: [
      "Projetos para novos empreendimentos",
      "Climatização para apartamentos modernos",
      "Parceria com construtoras",
      "Tecnologia inverter e smart",
      "Infraestrutura elétrica completa"
    ],
    icon: <MapPin className="text-red-400" />
  },
  {
    name: "Praia dos Amores",
    city: "Balneário Camboriú",
    citySlug: "balneario-camboriu",
    slug: "praia-dos-amores-balneario-camboriu",
    desc: "Luxo e natureza em harmonia, área exclusiva à beira-mar.",
    fullDescription: "A Praia dos Amores é sinônimo de exclusividade e sofisticação, com residências de luxo e empreendimentos de alto padrão em meio à natureza preservada. A proximidade com o mar exige cuidados especiais com sistemas de climatização, demandando proteções anti-corrosão e manutenção preventiva rigorosa. Oferecemos soluções premium com garantia estendida e atendimento VIP para os moradores mais exigentes.",
    features: [
      "Sistemas premium anti-corrosão",
      "Climatização para residências de luxo",
      "Manutenção preventiva rigorosa",
      "Atendimento VIP personalizado",
      "Garantia estendida",
      "Projetos arquitetônicos integrados"
    ],
    icon: <Waves className="text-blue-300" />
  },
  {
    name: "Barra Norte",
    city: "Balneário Camboriú",
    citySlug: "balneario-camboriu",
    slug: "barra-norte-balneario-camboriu",
    desc: "Polo gastronômico e residencial de altíssimo padrão.",
    fullDescription: "A Barra Norte de Balneário Camboriú é o endereço mais cobiçado da cidade, concentrando os restaurantes mais sofisticados, bares conceituados e residências de luxo com vista para o mar. Atendemos estabelecimentos gastronômicos com soluções especializadas em refrigeração de adegas climatizadas, câmaras frias para insumos premium e climatização silenciosa que não interfere na experiência dos clientes.",
    features: [
      "Adegas climatizadas para restaurantes",
      "Câmaras frias para gastronomia premium",
      "Climatização ultra-silenciosa",
      "Refrigeração para bares e lounges",
      "Manutenção em horários alternativos",
      "Soluções para food services de alto padrão"
    ],
    icon: <Palmtree className="text-green-400" />
  },
  {
    name: "Barra Sul",
    city: "Balneário Camboriú",
    citySlug: "balneario-camboriu",
    slug: "barra-sul-balneario-camboriu",
    desc: "Raízes históricas preservadas com charme tradicional.",
    fullDescription: "A Barra Sul preserva o charme histórico de Balneário Camboriú, com estabelecimentos tradicionais, hotéis boutique e comércio local consolidado. A região valoriza a tranquilidade e a qualidade de vida, atraindo moradores que buscam fugir do agito do centro. Oferecemos soluções de climatização que respeitam a arquitetura tradicional dos imóveis, com instalações discretas e eficientes.",
    features: [
      "Climatização para hotéis boutique",
      "Instalações discretas e integradas",
      "Respeito à arquitetura tradicional",
      "Atendimento residencial personalizado",
      "Refrigeração para comércio local"
    ],
    icon: <Home className="text-slate-400" />
  }
];

export const ALL_NEIGHBORHOODS = [...PENHA_NEIGHBORHOODS, ...BC_NEIGHBORHOODS];
