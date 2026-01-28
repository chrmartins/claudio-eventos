export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OBC Produções",
    description:
      "Hub criativo especializado em eventos corporativos com mais de 20 anos de experiência no Rio de Janeiro.",
    url: "https://obcproducoes.com.br",
    logo: "https://obcproducoes.com.br/logo-dark.png",
    foundingDate: "2004",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rio de Janeiro",
      addressRegion: "RJ",
      addressCountry: "BR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55-21-99999-9999",
      contactType: "customer service",
      availableLanguage: ["Portuguese"],
    },
    sameAs: [
      "https://www.instagram.com/obcproducoes",
      "https://www.linkedin.com/company/obcproducoes",
    ],
    knowsAbout: [
      "Eventos Corporativos",
      "Convenções",
      "Stands para Feiras",
      "Ativações de Marca",
      "Lançamentos de Produtos",
      "Produção de Eventos",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://obcproducoes.com.br",
    name: "OBC Produções",
    description:
      "Produtora de eventos corporativos no Rio de Janeiro. Convenções, stands, ativações de marca e muito mais.",
    url: "https://obcproducoes.com.br",
    telephone: "+55-21-99999-9999",
    email: "contato@obcproducoes.com.br",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rio de Janeiro",
      addressRegion: "RJ",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -22.9068,
      longitude: -43.1729,
    },
    image: "https://obcproducoes.com.br/og-image.jpg",
    priceRange: "$$$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de Eventos",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Eventos Corporativos",
            description:
              "Produção completa de eventos corporativos de alto impacto",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Convenções",
            description: "Organização de convenções empresariais",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Stands e Feiras",
            description:
              "Criação e montagem de stands para feiras e exposições",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ativações de Marca",
            description: "Ativações de marca inovadoras e memoráveis",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Lançamentos de Produtos",
            description: "Eventos de lançamento de produtos",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebsiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "OBC Produções",
    url: "https://obcproducoes.com.br",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://obcproducoes.com.br/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
