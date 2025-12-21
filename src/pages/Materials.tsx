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
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: "Gem", 
                title: "Чёрный гранит", 
                desc: "Карельский габбро-диабаз. Элитный материал высшего качества.",
                features: ["Глубокий чёрный цвет", "Высокая прочность", "Долговечность 100+ лет"]
              },
              { 
                icon: "Sparkles", 
                title: "Красный гранит", 
                desc: "Лезниковский гранит. Благородный вид.",
                features: ["Насыщенный красный оттенок", "Устойчив к температурам", "Не выгорает на солнце"]
              },
              { 
                icon: "Star", 
                title: "Светлый гранит", 
                desc: "Мансуровский гранит. Изысканный материал.",
                features: ["Светло-серый с узором", "Прочный и надёжный", "Элегантный вид"]
              }
            ].map((material, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all border-t-4 border-t-primary">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Icon name={material.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-center">{material.title}</h3>
                  <p className="text-muted-foreground mb-4 text-center">{material.desc}</p>
                  <ul className="space-y-2">
                    {material.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
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
