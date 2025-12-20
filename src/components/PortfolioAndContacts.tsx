import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function PortfolioAndContacts() {
  return (
    <>
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">Наши работы</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
            Примеры наших работ
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: 'https://cdn.poehali.dev/files/IMG_7475.jpeg', title: 'Двойной памятник из гранита' },
              { img: 'https://cdn.poehali.dev/files/1cb2cfa4-b4a6-4e64-a283-8887a8d71046.jpeg', title: 'Памятник с благоустройством' },
              { img: 'https://cdn.poehali.dev/files/IMG_8886.jpeg', title: 'Памятник из чёрного гранита' },
              { img: 'https://cdn.poehali.dev/files/IMG_4150.jpeg', title: 'Одиночный памятник с портретом' },
              { img: 'https://cdn.poehali.dev/files/IMG_5256.jpeg', title: 'Памятник с гравировкой' },
              { img: 'https://cdn.poehali.dev/files/IMG_5252.jpeg', title: 'Памятник из светлого гранита' }
            ].map((work, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2">
                <img src={work.img} alt={work.title} className="w-full h-64 object-cover" />
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg text-center">{work.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="shapes" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">Формы памятников</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
            Различные формы и размеры
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Вертикальные", desc: "Классическая форма" },
              { title: "Горизонтальные", desc: "Современный стиль" },
              { title: "Двойные", desc: "Для семейных захоронений" },
              { title: "Авторские", desc: "Индивидуальный дизайн" }
            ].map((shape, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all">
                <CardContent className="pt-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                    <Icon name="Box" size={40} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{shape.title}</h3>
                  <p className="text-muted-foreground">{shape.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="materials" className="py-20 bg-muted">
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

      <section id="contacts" className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Контакты</h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
            Свяжитесь с нами удобным способом
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Телефон</h3>
                <a href="tel:+79490732315" className="text-primary hover:underline text-lg">
                  +7 (949) 073-23-15
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#0088cc] rounded-full flex items-center justify-center">
                  <Icon name="Send" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Telegram</h3>
                <a href="https://t.me/GKgranit19" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-lg">
                  @GKgranit19
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="MapPin" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Адрес</h3>
                <p className="text-gray-300">
                  Мариуполь, Киевский рынок<br />
                  павильон 278, мкрн Восточный
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <a href="tel:+79490732315">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-xl px-12 py-6">
                <Icon name="Phone" size={24} className="mr-2" />
                Позвонить сейчас
              </Button>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 ГК ГРАНИТ. Все права защищены.</p>
          <p className="text-gray-500 text-sm mt-2">Памятники из гранита и мрамора</p>
        </div>
      </footer>
    </>
  );
}