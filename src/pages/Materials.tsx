import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import FloatingButtons from "@/components/FloatingButtons";

export default function Materials() {
  return (
    <div className="min-h-screen">
      <Header activeSection="materials" />
      
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">Материалы</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
            Работаем с лучшими материалами
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Чёрный Абсолют Блэк", 
                subtitle: "Индия",
                desc: "Элитный материал высшего качества с глубоким чёрным цветом.",
                features: ["Глубокий чёрный цвет", "Высокая прочность", "Долговечность 100+ лет"],
                img: "https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/4c708dbb-0b74-4935-bf3c-ab7cab46dffb.jpg"
              },
              { 
                title: "Красный Лезники", 
                subtitle: "Россия",
                desc: "Благородный красный гранит с насыщенным оттенком.",
                features: ["Насыщенный красный цвет", "Устойчив к температурам", "Не выгорает на солнце"],
                img: "https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/dd39d323-669d-426f-98f5-75d1d975882c.jpg"
              },
              { 
                title: "Серый Сибирский", 
                subtitle: "Мансуровский",
                desc: "Изысканный светло-серый гранит с природным узором.",
                features: ["Светло-серый с узором", "Прочный и надёжный", "Элегантный вид"],
                img: "https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/e9a427d7-034f-45c5-9909-8ef88dc4863d.jpg"
              },
              { 
                title: "Коричневый Дымовский", 
                subtitle: "Россия",
                desc: "Тёплый коричневый гранит с естественным рисунком.",
                features: ["Тёплый коричневый цвет", "Природный рисунок", "Высокая износостойкость"],
                img: "https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/48ce353e-aae9-471d-8f54-482e83ba4b81.jpg"
              }
            ].map((material, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all border-t-4 border-t-primary overflow-hidden">
                <img src={material.img} alt={material.title} className="w-full h-48 object-cover" />
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