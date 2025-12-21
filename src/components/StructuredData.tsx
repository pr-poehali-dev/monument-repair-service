import { Helmet } from 'react-helmet-async';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "GK Granite",
    "description": "Изготовление и установка памятников из гранита в Мариуполе. Доставка в ДНР и Ростовскую область. Гравировка портретов, благоустройство мест захоронения.",
    "image": "https://cdn.poehali.dev/files/IMG_8835.jpeg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Киевский рынок, павильон 278",
      "addressLocality": "Мариуполь",
      "addressRegion": "Донецкая Народная Республика",
      "addressCountry": "RU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "47.097133",
      "longitude": "37.543367"
    },
    "telephone": "+7-918-548-06-79",
    "url": "https://gkgranitk.ru",
    "priceRange": "₽₽",
    "openingHours": "Mo-Su 09:00-18:00",
    "sameAs": [
      "https://t.me/GKgranit19",
      "https://t.me/Pamyatniki_Mariupol_Granite"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Мариуполь"
      },
      {
        "@type": "State",
        "name": "ДНР"
      },
      {
        "@type": "State",
        "name": "Ростовская область"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Услуги по изготовлению памятников",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Изготовление памятников из гранита",
            "description": "Индивидуальное изготовление памятников любых форм и размеров"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Гравировка портретов",
            "description": "Художественная гравировка портретов на граните"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Установка памятников",
            "description": "Профессиональная установка с гарантией качества"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Благоустройство захоронений",
            "description": "Комплексное благоустройство: плитка, цветники, ограды"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}