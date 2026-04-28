const BUSINESS = {
  name: "Corey's Auto Body",
  phone: "+17157166217",
  phoneDisplay: "(715) 716-6217",
  address: {
    street: "N2969 Green Gable Rd",
    city: "Marinette",
    state: "WI",
    zip: "54143",
  },
  url: "https://coreysautobody.com",
  lat: 45.0660965,
  lng: -87.6300089,
  placeId: "ChIJKSQwMb6uUk0RThwAhfyu1mE",
} as const;

export { BUSINESS };

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    "@id": `${BUSINESS.url}/#organization`,
    name: BUSINESS.name,
    telephone: BUSINESS.phone,
    url: BUSINESS.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.lat,
      longitude: BUSINESS.lng,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: BUSINESS.lat,
        longitude: BUSINESS.lng,
      },
      geoRadius: "40234",
    },
    image: `${BUSINESS.url}/images/logo.png`,
    logo: `${BUSINESS.url}/images/logo.png`,
    sameAs: [
      `https://www.google.com/maps?cid=${BUSINESS.placeId}`,
      "https://www.facebook.com/coreysautobodyllc/",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "17:00",
    },
    priceRange: "$$",
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BUSINESS.url}/services#${service.slug}`,
    serviceType: service.name,
    provider: { "@id": `${BUSINESS.url}/#organization` },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: BUSINESS.lat,
        longitude: BUSINESS.lng,
      },
      geoRadius: "40234",
    },
    description: service.description,
  };
}

export function imageGallerySchema(
  images: { url: string; name: string; description: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Work Gallery",
    description: "Real examples of auto body repair and restoration work from Corey's Auto Body in Marinette, WI.",
    numberOfItems: images.length,
    itemListElement: images.map((img, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "ImageObject",
        contentUrl: img.url,
        name: img.name,
        description: img.description,
        creator: { "@id": `${BUSINESS.url}/#organization` },
      },
    })),
  };
}

export function faqSchema(
  questions: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q, i) => ({
      "@type": "Question",
      "@id": `${BUSINESS.url}/services#q${i + 1}`,
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}
