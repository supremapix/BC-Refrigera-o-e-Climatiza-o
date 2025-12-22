import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY } from '../constants';

interface EnhancedSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
  location?: string;
  service?: string;
}

export const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = `${window.location.origin}/bc-logo-refrigeracao copy copy.png`,
  ogType = 'website',
  structuredData,
  location,
  service
}) => {
  const siteUrl = window.location.origin;
  const fullTitle = title ? `${title} | BC Refrigeração` : 'BC Refrigeração - Climatização e Refrigeração Industrial em Penha SC';
  const fullDescription = description || 'BC Refrigeração - Especialistas em climatização, refrigeração industrial, câmaras frias e ar condicionado em Penha e região. Atendimento 24h, PMOC, manutenção de chillers e containers reefer.';
  const fullKeywords = keywords || 'refrigeração penha, ar condicionado penha, câmara fria, climatização industrial, manutenção ar condicionado, pmoc penha, chiller, container reefer, balneário camboriú refrigeração';
  const canonical = canonicalUrl || window.location.href;

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        "name": "BC Refrigeração e Climatização",
        "url": siteUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${siteUrl}/bc-logo-refrigeracao copy copy.png`,
          "width": 270,
          "height": 100
        },
        "sameAs": [
          COMPANY.facebookLink,
          COMPANY.instagramLink
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": COMPANY.phone,
          "contactType": "customer service",
          "areaServed": "BR",
          "availableLanguage": "Portuguese"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Av. Antônio J. Tavares, 90",
          "addressLocality": "Penha",
          "addressRegion": "SC",
          "postalCode": "88385-000",
          "addressCountry": "BR"
        }
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": siteUrl,
        "name": "BC Refrigeração",
        "publisher": {
          "@id": `${siteUrl}/#organization`
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${siteUrl}/?s={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "LocalBusiness",
        "name": "BC Refrigeração e Climatização",
        "image": `${siteUrl}/bc-logo-refrigeracao copy copy.png`,
        "@id": siteUrl,
        "url": siteUrl,
        "telephone": COMPANY.phone,
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Av. Antônio J. Tavares, 90",
          "addressLocality": "Penha",
          "addressRegion": "SC",
          "postalCode": "88385-000",
          "addressCountry": "BR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -26.7745,
          "longitude": -48.6436
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "08:00",
          "closes": "18:00"
        },
        "sameAs": [
          COMPANY.facebookLink,
          COMPANY.instagramLink
        ]
      }
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  if (service) {
    const serviceSchema = {
      "@type": "Service",
      "serviceType": service,
      "provider": {
        "@id": `${siteUrl}/#organization`
      },
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": -26.7745,
          "longitude": -48.6436
        },
        "geoRadius": "200000"
      }
    };

    if (Array.isArray(finalStructuredData['@graph'])) {
      finalStructuredData['@graph'].push(serviceSchema);
    }
  }

  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />

      <link rel="canonical" href={canonical} />

      <meta property="og:site_name" content="BC Refrigeração" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="pt_BR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />

      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />

      <meta name="author" content="BC Refrigeração" />
      <meta name="geo.region" content="BR-SC" />
      <meta name="geo.placename" content="Penha" />
      <meta name="geo.position" content="-26.7745;-48.6436" />
      <meta name="ICBM" content="-26.7745, -48.6436" />

      {location && <meta name="geo.placename" content={location} />}

      <meta name="theme-color" content="#0891b2" />
      <meta name="msapplication-TileColor" content="#0891b2" />

      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  );
};