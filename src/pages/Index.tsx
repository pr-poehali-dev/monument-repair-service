import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen">
      <header className="bg-secondary text-white py-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">ГК ГРАНИТ</h1>
            <p className="text-sm text-muted-foreground">Памятники из гранита и мрамора</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://t.me/GKgranit19" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#0088cc] hover:bg-[#006699] text-white px-4 py-2 rounded-lg transition-colors">
              <Icon name="Send" size={24} />
              <span className="hidden md:inline font-medium">Telegram</span>
            </a>
            <a href="tel:+79490732315" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Icon name="Phone" size={20} />
              <span className="hidden md:inline">+7 (949) 073-23-15</span>
            </a>
          </div>
        </div>
      </header>

      <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/76d11fe8-0de2-4a28-9e0f-09539e861b11.jpg')`
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Памятники с душой и достоинством
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Высокое качество по ценам ниже конкурентов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+79490732315">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить
              </Button>
            </a>
            <a href="#contacts">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 text-lg px-8">
                Узнать больше
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">О компании</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
            ГК ГРАНИТ — ваш надежный партнер в создании памятников
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Award" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Опыт и качество</h3>
                <p className="text-muted-foreground">
                  Многолетний опыт работы с гранитом и мрамором. Гарантия на все виды работ.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Clock" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Сжатые сроки</h3>
                <p className="text-muted-foreground">
                  Быстрое изготовление и установка памятников без потери качества.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="DollarSign" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Доступные цены</h3>
                <p className="text-muted-foreground">
                  Цены ниже конкурентов при высоком качестве материалов и работы.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
            Полный комплекс услуг по изготовлению и установке памятников
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "Hammer", title: "Изготовление памятников", desc: "Из гранита и мрамора любой сложности" },
              { icon: "Wrench", title: "Ремонт памятников", desc: "Восстановление и реставрация" },
              { icon: "Truck", title: "Установка", desc: "Профессиональный монтаж на месте" },
              { icon: "PenTool", title: "Гравировка", desc: "Портреты, надписи, орнаменты" }
            ].map((service, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-secondary rounded-full flex items-center justify-center">
                    <Icon name={service.icon as any} size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">Портфолио</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
            Примеры наших работ
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: 'https://cdn.poehali.dev/files/IMG_7475.jpeg', title: 'Двойной памятник из гранита' },
              { img: 'https://cdn.poehali.dev/files/1cb2cfa4-b4a6-4e64-a283-8887a8d71046.jpeg', title: 'Памятник с благоустройством' },
              { img: 'https://cdn.poehali.dev/files/IMG_8886.jpeg', title: 'Памятник из чёрного гранита' }
            ].map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                <img src={item.img} alt={item.title} className="w-full h-80 object-cover transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <p className="text-white text-xl font-bold p-6">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">Материалы</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
            Работаем с лучшими материалами
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { name: "Египетский серый", desc: "Элегантный серый оттенок, высокая прочность", img: "https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/28d4db7b-8e74-475a-b1b4-61457e02c76e.jpg" },
              { name: "Индия черный", desc: "Глубокий черный цвет, высокая плотность", img: "https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/8a94788a-3699-4ae0-b7c6-f26e5ce4e42e.jpg" },
              { name: "Карелия черный", desc: "Российское качество, морозостойкость", img: "https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/6e63e252-0c0d-489f-874a-0ee4d9b3d099.jpg" },
              { name: "Дымовский коричневый", desc: "Благородный коричневый оттенок, надежность", img: "https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/170cfe67-8090-4c6e-8073-1d2a7c701153.jpg" },
              { name: "Индия красный", desc: "Насыщенный красный цвет, долговечность", img: "https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/84a25198-9b1f-4482-ac80-714abe063cdd.jpg" }
            ].map((material, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-shadow overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img src={material.img} alt={material.name} className="w-full h-full object-cover hover:scale-110 transition-transform" />
                </div>
                <CardContent className="pt-4">
                  <h3 className="text-xl font-bold mb-2">{material.name}</h3>
                  <p className="text-muted-foreground text-sm">{material.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Гарантии</h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
            Мы уверены в качестве нашей работы
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="ShieldCheck" size={24} className="text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Гарантия на материалы</h3>
                <p className="text-gray-300">
                  Используем только проверенные материалы высочайшего качества с гарантией долговечности.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="CheckCircle" size={24} className="text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Гарантия на работы</h3>
                <p className="text-gray-300">
                  Профессиональное выполнение всех видов работ с гарантийными обязательствами.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
            Свяжитесь с нами удобным способом
          </p>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Телефон</h3>
                  <a href="tel:+79490732315" className="text-lg text-primary hover:underline">
                    +7 (949) 073-23-15
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Адрес</h3>
                  <p className="text-muted-foreground">
                    Мариуполь, Киевский рынок<br />
                    Павильон 278, мкрн Восточный
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Режим работы</h3>
                  <p className="text-muted-foreground">
                    Ежедневно с 9:00 до 18:00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0088cc] rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Send" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Telegram</h3>
                  <a href="https://t.me/GKgranit19" target="_blank" rel="noopener noreferrer" className="text-lg text-[#0088cc] hover:underline">
                    @GKgranit19
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MessageCircle" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">WhatsApp</h3>
                  <a href="https://wa.me/79490732315" target="_blank" rel="noopener noreferrer" className="text-lg text-[#25D366] hover:underline">
                    +7 (949) 073-23-15
                  </a>
                </div>
              </div>
            </div>

            <Card className="shadow-xl">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-6 text-center">Оставьте заявку</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Телефон"
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Сообщение"
                      rows={4}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8 text-secondary">Наше расположение</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
                <iframe 
                  src="https://yandex.ru/map-widget/v1/?ll=37.685978%2C47.120338&z=17&pt=37.685978,47.120338,pm2rdm" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0"
                  title="Яндекс.Карты - ГК ГРАНИТ, Мариуполь"
                ></iframe>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2670.5!2d37.685978!3d47.120338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDfCsDA3JzEzLjIiTiAzN8KwNDEnMDkuNSJF!5e0!3m2!1sru!2s!4v1234567890!5m2!1sru!2s" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  style={{ border: 0 }} 
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps - ГК ГРАНИТ, Мариуполь"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a 
          href="https://wa.me/79490732315" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative w-14 h-14 bg-[#25D366] hover:bg-[#1da851] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-pulse"
          title="Написать в WhatsApp"
        >
          <Icon name="MessageCircle" size={28} />
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
        </a>
        <a 
          href="https://t.me/GKgranit19" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative w-14 h-14 bg-[#0088cc] hover:bg-[#006699] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-pulse"
          title="Написать в Telegram"
        >
          <Icon name="Send" size={28} />
          <span className="absolute inset-0 rounded-full bg-[#0088cc] animate-ping opacity-75"></span>
        </a>
      </div>

      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-2">ГК ГРАНИТ</h3>
          <p className="text-gray-300 mb-4">Памятники из гранита и мрамора</p>
          <p className="text-sm text-gray-400">
            © 2024 ГК ГРАНИТ. Высокое качество по ценам ниже конкурентов
          </p>
        </div>
      </footer>
    </div>
  );
}