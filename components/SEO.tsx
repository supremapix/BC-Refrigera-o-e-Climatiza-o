import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY } from '../constants';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  schema?: object;
  keywords?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogType = 'website',
  schema,
  keywords
}) => {
  const fullTitle = `${title} | ${COMPANY.name}`;
  const siteUrl = 'https://bcrefrigeracaosc.com.br';
  const canonicalUrl = canonical || siteUrl;

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#organization`,
    name: COMPANY.name,
    url: siteUrl,
    logo: `${siteUrl}${COMPANY.logo}`,
    image: `${siteUrl}/banner-refrigeracao.jpg`,
    description: 'Soluções completas em Refrigeração e Climatização para Penha, Balneário Camboriú e região. Atendimento 24 horas.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY.address,
      addressLocality: 'Penha',
      addressRegion: 'SC',
      postalCode: COMPANY.cep,
      addressCountry: 'BR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -26.7708,
      longitude: -48.6442
    },
    telephone: COMPANY.phone,
    email: COMPANY.email,
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '12:00'
      }
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Penha',
        '@id': 'https://www.wikidata.org/wiki/Q1007976'
      },
      {
        '@type': 'City',
        name: 'Balneário Camboriú',
        '@id': 'https://www.wikidata.org/wiki/Q925112'
      }
    ],
    sameAs: [
      COMPANY.instagramLink,
      COMPANY.facebookLink
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl
      }
    ]
  };

  const combinedSchema = schema
    ? { '@graph': [organizationSchema, breadcrumbSchema, schema] }
    : { '@graph': [organizationSchema, breadcrumbSchema] };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${siteUrl}/banner-refrigeracao.jpg`} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content={COMPANY.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/banner-refrigeracao.jpg`} />

      <meta name="geo.region" content="BR-SC" />
      <meta name="geo.placename" content="Penha" />
      <meta name="geo.position" content="-26.7708;-48.6442" />
      <meta name="ICBM" content="-26.7708, -48.6442" />

      <script type="application/ld+json">
        {JSON.stringify(combinedSchema)}
      </script>
    </Helmet>
  );
};
