import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const faqData = [
  {
    question: "Изготовление памятников в Ростове-на-Дону — сколько стоит?",
    answer: "Стоимость изготовления памятников в Ростове-на-Дону зависит от материала, размера и сложности работ. Базовые памятники из гранита Карелия начинаются от 25 000 руб, премиум материалы (Чёрный Абсолют, Красный Лезники) — от 45 000 руб. Точную цену на изготовление памятника в Ростове-на-Дону рассчитаем после выбора материала и формы."
  },
  {
    question: "Сколько времени занимает изготовление памятника в Ростове-на-Дону?",
    answer: "Изготовление памятника в Ростове-на-Дону занимает 14-21 день с момента утверждения эскиза. Срочное изготовление возможно за 7-10 дней с доплатой 20%. Установка памятника в Ростове-на-Дону и области занимает 1 день."
  },
  {
    question: "Какой материал лучше выбрать для памятника в Ростове-на-Дону?",
    answer: "Для изготовления памятников в Ростове-на-Дону рекомендуем Чёрный Абсолют или Красный Лезники — они не выгорают и устойчивы к любым погодным условиям (100+ лет). Гранит Карелия — отличное соотношение цены и качества для памятника в Ростове-на-Дону (80+ лет)."
  },
  {
    question: "Установка памятников в Ростове-на-Дону — делаете доставку?",
    answer: "Да, мы доставляем и устанавливаем памятники в Ростове-на-Дону и по всей Ростовской области, а также в Мариуполе, Таганроге, Мангуше, Володарском, Волновахе и Новоазовске. Установка памятников в Ростове-на-Дону включает фундамент, подставку и цветник. Гарантия на установку — 3 года."
  },
  {
    question: "Художественная гравировка портретов в Ростове-на-Дону?",
    answer: "Да, мы делаем художественную гравировку портретов на памятниках в Ростове-на-Дону с фотографий любого качества. Гравировка портретов выполняется вручную профессиональными мастерами. Портрет не выцветает и сохраняет четкость десятилетиями."
  },
  {
    question: "Ремонт памятников в Ростове-на-Дону — предоставляете гарантию?",
    answer: "Да, на изготовление и ремонт памятников в Ростове-на-Дону мы даём гарантию: на материал — 50 лет, на гравировку — 25 лет, на монтажные работы — 3 года. Если обнаружатся дефекты при ремонте памятника в Ростове-на-Дону по нашей вине, бесплатно устраним."
  },
  {
    question: "Можно ли увидеть эскиз памятника перед изготовлением?",
    answer: "Конечно! При изготовлении памятника в Ростове-на-Дону мы бесплатно создаём 3D-эскиз с гравировкой. Вы увидите, как будет выглядеть готовый памятник, и сможете внести правки. Изготовление начинаем только после вашего одобрения."
  },
  {
    question: "Где находятся магазины GK Granite?",
    answer: "Наши магазины: Ростов-на-Дону (ул. Обсерваторная, 30), Мариуполь (Киевский рынок, павильон 278, мкрн Восточный и ул. Каффайская, 69, рынок «Эдельвейс», павильон 33, вход с рынка и со стороны ул. Готфейской), Таганрог (ул. Пархоменко 7Г). Работаем ежедневно. Телефоны для заказа изготовления и установки памятников: +7 (949) 073-23-15, +7 (917) 334-70-22."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" itemScope itemType="https://schema.org/FAQPage">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Изготовление памятников Ростов-на-Дону — частые вопросы
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ответы на популярные вопросы об изготовлении, установке и ремонте памятников в Ростове-на-Дону
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-lg transition-all cursor-pointer border-l-4 border-l-primary"
              onClick={() => toggleFAQ(index)}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg md:text-xl font-bold text-secondary flex-1" itemProp="name">
                    {faq.question}
                  </h3>
                  <Icon 
                    name={openIndex === index ? "ChevronUp" : "ChevronDown"} 
                    size={24} 
                    className="text-primary flex-shrink-0 transition-transform"
                  />
                </div>
                {openIndex === index && (
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="mt-4 text-gray-700 leading-relaxed" itemProp="text">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Не нашли ответ на свой вопрос?</p>
          <a 
            href="tel:+79490732315" 
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all"
          >
            <Icon name="Phone" size={20} />
            Позвоните нам: +7 (949) 073-23-15
          </a>
        </div>
      </div>
    </section>
  );
}