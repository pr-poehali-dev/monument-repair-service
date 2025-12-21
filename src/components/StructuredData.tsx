import { Helmet } from 'react-helmet-async';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://gkgranitk.ru/#organization",
    "name": "ГК ГРАНИТ",
    "alternateName": "GK Granite",
    "legalName": "ГК ГРАНИТ",
    "description": "Изготовление и установка памятников из гранита в Мариуполе и Таганроге. Доставка в ДНР и Ростовскую область. Гравировка портретов, благоустройство мест захоронения.",
    "foundingDate": "2015",
    "image": "https://cdn.poehali.dev/files/IMG_8835.jpeg",
    "logo": "https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/69135670-c90e-464b-9e24-edb2fd63606c.jpg",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Киевский рынок, павильон 278",
        "addressLocality": "Мариуполь",
        "addressRegion": "Донецкая Народная Республика",
        "addressCountry": "RU"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "ул. Пархоменко 7Г",
        "addressLocality": "Таганрог",
        "addressRegion": "Ростовская область",
        "postalCode": "347900",
        "addressCountry": "RU"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "47.097133",
      "longitude": "37.543367"
    },
    "telephone": ["+7-949-073-23-15", "+7-917-334-70-22"],
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
        "@type": "City",
        "name": "Таганрог"
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

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Сколько стоит памятник из гранита?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Стоимость зависит от материала, размера и сложности работ. Базовые памятники из гранита Карелия начинаются от 15 000 руб, премиум материалы (Чёрный Абсолют, Красный Лезники) — от 35 000 руб. Точную цену рассчитаем после выбора материала и формы."
        }
      },
      {
        "@type": "Question",
        "name": "Сколько времени занимает изготовление?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Стандартный срок изготовления — 14-21 день с момента утверждения эскиза. Срочное изготовление возможно за 7-10 дней с доплатой 20%. Установка памятника занимает 1 день."
        }
      },
      {
        "@type": "Question",
        "name": "Какой материал лучше выбрать?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Для долговечности (100+ лет) рекомендуем Чёрный Абсолют или Красный Лезники — они не выгорают и устойчивы к любым погодным условиям. Гранит Карелия — отличное соотношение цены и качества (80+ лет)."
        }
      },
      {
        "@type": "Question",
        "name": "Делаете ли доставку и установку?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, мы доставляем и устанавливаем памятники по всей ДНР и Ростовской области. Стоимость доставки зависит от расстояния. Установка включает фундамент, подставку и цветник. Гарантия на установку — 3 года."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли нанести фотографию на памятник?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, мы делаем художественную гравировку портретов с фотографий любого качества. Гравировка выполняется вручную профессиональными мастерами. Портрет не выцветает и сохраняет четкость десятилетиями."
        }
      },
      {
        "@type": "Question",
        "name": "Где находятся ваши магазины?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "У нас два магазина: в Мариуполе (Киевский рынок, павильон 278, мкрн Восточный) и в Таганроге (ул. Пархоменко 7Г). Работаем ежедневно. Телефоны: +7 (949) 073-23-15, +7 (917) 334-70-22."
        }
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqStructuredData)}
      </script>
    </Helmet>
  );
}