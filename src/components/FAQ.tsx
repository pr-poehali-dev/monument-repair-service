import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const faqData = [
  {
    question: "Сколько стоит памятник из гранита?",
    answer: "Стоимость зависит от материала, размера и сложности работ. Базовые памятники из гранита Карелия начинаются от 15 000 руб, премиум материалы (Чёрный Абсолют, Красный Лезники) — от 35 000 руб. Точную цену рассчитаем после выбора материала и формы."
  },
  {
    question: "Сколько времени занимает изготовление?",
    answer: "Стандартный срок изготовления — 14-21 день с момента утверждения эскиза. Срочное изготовление возможно за 7-10 дней с доплатой 20%. Установка памятника занимает 1 день."
  },
  {
    question: "Какой материал лучше выбрать?",
    answer: "Для долговечности (100+ лет) рекомендуем Чёрный Абсолют или Красный Лезники — они не выгорают и устойчивы к любым погодным условиям. Гранит Карелия — отличное соотношение цены и качества (80+ лет). Для бюджетных вариантов подойдёт мраморная крошка или бетон."
  },
  {
    question: "Делаете ли доставку и установку?",
    answer: "Да, мы доставляем и устанавливаем памятники по всей ДНР и Ростовской области. Стоимость доставки зависит от расстояния. Установка включает фундамент, подставку и цветник. Гарантия на установку — 3 года."
  },
  {
    question: "Можно ли нанести фотографию на памятник?",
    answer: "Да, мы делаем художественную гравировку портретов с фотографий любого качества. Гравировка выполняется вручную профессиональными мастерами. Портрет не выцветает и сохраняет четкость десятилетиями."
  },
  {
    question: "Предоставляете ли гарантию?",
    answer: "Да, гарантия на материал — 50 лет, на гравировку — 25 лет, на монтажные работы — 3 года. Если обнаружатся дефекты по нашей вине, бесплатно устраним их."
  },
  {
    question: "Можно ли сначала увидеть эскиз?",
    answer: "Конечно! Мы бесплатно создаём 3D-эскиз памятника с гравировкой. Вы увидите, как будет выглядеть готовый памятник, и сможете внести правки до утверждения. Изготовление начинаем только после вашего одобрения."
  },
  {
    question: "Где находятся ваши магазины?",
    answer: "У нас два магазина: в Мариуполе (Киевский рынок, павильон 278, мкрн Восточный) и в Таганроге (ул. Пархоменко 7Г). Работаем ежедневно. Телефоны: +7 (949) 073-23-15, +7 (917) 334-70-22."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ответы на популярные вопросы о памятниках из гранита
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-lg transition-all cursor-pointer border-l-4 border-l-primary"
              onClick={() => toggleFAQ(index)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg md:text-xl font-bold text-secondary flex-1">
                    {faq.question}
                  </h3>
                  <Icon 
                    name={openIndex === index ? "ChevronUp" : "ChevronDown"} 
                    size={24} 
                    className="text-primary flex-shrink-0 transition-transform"
                  />
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
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
