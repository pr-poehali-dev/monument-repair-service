import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function PortfolioAndContacts() {
  return (
    <>
      <section id="portfolio" className="py-20 bg-white" itemScope itemType="https://schema.org/ImageGallery">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">Наши работы</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
            Примеры наших работ
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: 'https://cdn.poehali.dev/files/IMG_8835.jpeg', title: 'Памятник с арочным дизайном' },
              { img: 'https://cdn.poehali.dev/files/IMG_0401.jpeg', title: 'Двойной памятник с благоустройством' },
              { img: 'https://cdn.poehali.dev/files/IMG_0763.jpeg', title: 'Памятник для супругов' },
              { img: 'https://cdn.poehali.dev/files/4aa9c7d0-be34-4ebd-ab49-1760a7f3a4a4.jpeg', title: 'Памятник с гравировкой пейзажа' },
              { img: 'https://cdn.poehali.dev/files/1cb2cfa4-b4a6-4e64-a283-8887a8d71046.jpeg', title: 'Памятник с благоустройством' },
              { img: 'https://cdn.poehali.dev/files/IMG_8886.jpeg', title: 'Памятник из чёрного гранита' }
            ].map((work, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2" itemScope itemType="https://schema.org/ImageObject">
                <img src={work.img} alt={work.title} className="w-full h-64 object-cover" itemProp="contentUrl" loading="lazy" />
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg text-center" itemProp="name">{work.title}</h3>
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

      <section id="contacts" className="py-20 bg-secondary text-white" itemScope itemType="https://schema.org/ContactPage">
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
                <h3 className="text-xl font-bold mb-2">Телефоны</h3>
                <div className="flex flex-col gap-2">
                  <a href="tel:+79490732315" className="text-primary hover:underline text-lg">
                    +7 (949) 073-23-15
                  </a>
                  <a href="tel:+79173347022" className="text-primary hover:underline text-lg">
                    +7 (917) 334-70-22
                  </a>
                </div>
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

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-6">Мы на карте</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden">
                <CardContent className="p-0">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=37.685992,47.120310&z=17&l=map&pt=37.685992,47.120310,pm2rdm"
                    width="100%"
                    height="300"
                    frameBorder="0"
                    className="w-full"
                    title="Мариуполь, Киевский рынок"
                  ></iframe>
                  <div className="p-4">
                    <h4 className="font-bold text-lg mb-1">Мариуполь</h4>
                    <p className="text-gray-300 text-sm">Киевский рынок, павильон 278, мкрн Восточный</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden">
                <CardContent className="p-0">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=38.867057,47.222592&z=17&l=map&pt=38.867057,47.222592,pm2rdm"
                    width="100%"
                    height="300"
                    frameBorder="0"
                    className="w-full"
                    title="Таганрог, Пархоменко"
                  ></iframe>
                  <div className="p-4">
                    <h4 className="font-bold text-lg mb-1">Таганрог</h4>
                    <p className="text-gray-300 text-sm">ул. Пархоменко</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-4">
            <img 
              src="https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/69135670-c90e-464b-9e24-edb2fd63606c.jpg" 
              alt="ГК ГРАНИТ" 
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="text-center">
              <p className="text-gray-400 font-semibold">© 2024 ГК ГРАНИТ. Все права защищены.</p>
              <p className="text-gray-500 text-sm mt-2">Памятники из гранита и мрамора</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}