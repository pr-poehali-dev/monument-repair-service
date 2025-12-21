import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import FloatingButtons from "@/components/FloatingButtons";
import SEO from "@/components/SEO";

export default function Materials() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Материалы - Гранит, мрамор, камень"
        description="Работаем с лучшими материалами: чёрный гранит Абсолют Блэк, красный гранит Лезниковский, белый мрамор, серый гранит. Высокое качество и долговечность."
        keywords="гранит, мрамор, Абсолют Блэк, Лезниковский гранит, материалы для памятников"
        canonical="https://gkgranitk.ru/materials"
      />
      <Header activeSection="materials" />
      
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">Материалы</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
            Работаем с лучшими материалами
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Чёрный Абсолют Блэк", 
                subtitle: "Индия",
                desc: "Элитный материал высшего качества с глубоким чёрным цветом.",
                features: ["Глубокий чёрный цвет", "Высокая прочность", "Долговечность 100+ лет"],
                img: "https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/4c708dbb-0b74-4935-bf3c-ab7cab46dffb.jpg",
                badge: "Премиум"
              },
              { 
                title: "Красный Лезники", 
                subtitle: "Россия",
                desc: "Благородный красный гранит с насыщенным оттенком.",
                features: ["Насыщенный красный цвет", "Устойчив к температурам", "Не выгорает на солнце"],
                img: "https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/dd39d323-669d-426f-98f5-75d1d975882c.jpg",
                badge: "Премиум"
              },
              { 
                title: "Серый Сибирский", 
                subtitle: "Мансуровский",
                desc: "Изысканный светло-серый гранит с природным узором.",
                features: ["Светло-серый с узором", "Прочный и надёжный", "Элегантный вид"],
                img: "https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/e9a427d7-034f-45c5-9909-8ef88dc4863d.jpg",
                badge: "Премиум"
              },
              { 
                title: "Гранит Карелия", 
                subtitle: "Карелия, Россия",
                desc: "Натуральный карельский гранит тёмно-серого цвета с благородным внешним видом.",
                features: ["Глубокий серый цвет", "Морозостойкий", "Долговечность 80+ лет"],
                img: "https://cdn.poehali.dev/files/IMG_4264.jpeg",
                badge: "Премиум"
              },
              { 
                title: "Коричневый Дымовский", 
                subtitle: "Россия",
                desc: "Тёплый коричневый гранит с крапинками и естественным рисунком.",
                features: ["Коричневый с крапинками", "Природный рисунок", "Высокая износостойкость"],
                img: "https://cdn.poehali.dev/files/IMG_3770.jpeg",
                badge: "Премиум"
              },
              { 
                title: "Белый Мрамор", 
                subtitle: "Уфалейский",
                desc: "Элегантный белый мрамор с нежными серыми прожилками.",
                features: ["Белый с прожилками", "Изысканный внешний вид", "Классика жанра"],
                img: "https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/3c31c5cc-c877-45f4-9147-b9e4f7c97464.jpg",
                badge: "Премиум"
              },
              { 
                title: "Бетонный памятник", 
                subtitle: "Россия",
                desc: "Бюджетный вариант из прочного бетона с декоративной отделкой.",
                features: ["Доступная цена", "Быстрое изготовление", "Различные варианты отделки"],
                img: "https://cdn.poehali.dev/files/IMG_7946.jpg",
                badge: "Эконом"
              },
              { 
                title: "Мраморная крошка", 
                subtitle: "Россия",
                desc: "Экономичный вариант из мраморной крошки с полимерным связующим.",
                features: ["Самая доступная цена", "Лёгкий вес", "Простота монтажа"],
                img: "https://cdn.poehali.dev/files/PHOTO-2024-06-04-16-31-40.jpg",
                badge: "Эконом"
              }
            ].map((material, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all border-t-4 border-t-primary overflow-hidden">
                <div className="relative">
                  <img src={material.img} alt={material.title} className="w-full h-48 object-cover" />
                  <span className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-bold ${material.badge === "Премиум" ? "bg-primary text-white" : "bg-green-600 text-white"}`}>
                    {material.badge}
                  </span>
                </div>
                <CardContent className="pt-4">
                  <h3 className="text-xl font-bold mb-1 text-center">{material.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 text-center font-medium">{material.subtitle}</p>
                  <p className="text-muted-foreground mb-4 text-center text-sm">{material.desc}</p>
                  <ul className="space-y-2">
                    {material.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <FloatingButtons />
    </div>
  );
}