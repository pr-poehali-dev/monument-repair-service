import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import FloatingButtons from "@/components/FloatingButtons";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function Contacts() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Контакты - Адреса магазинов в Мариуполе, Таганроге и Ростове-на-Дону"
        description="Контакты GK Granite: Мариуполь (Киевский рынок, пав. 278; ул. Каффайская, 69, рынок «Эдельвейс», пав. 33), Таганрог (ул. Пархоменко 7Г) и Ростов-на-Дону (ул. Обсерваторная, 30). Телефоны: +7 (949) 073-23-15, +7 (917) 334-70-22. Telegram: @GKgranit19. Изготовление памятников из гранита и мрамора."
        keywords="контакты памятники, адрес Мариуполь, адрес Таганрог, адрес Ростов-на-Дону, памятники Мариуполь, памятники Таганрог, памятники Ростов-на-Дону, Киевский рынок, Пархоменко 7Г, Каффайская, рынок Эдельвейс, Обсерваторная, GK Granite, изготовление памятников"
        canonical="https://gkgranitk.ru/contacts"
      />
      <Header activeSection="contacts" />
      <Breadcrumbs />
      
      <section className="py-20 bg-secondary text-white">
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
                <h3 className="text-xl font-bold mb-2">Адреса магазинов</h3>
                <div className="text-gray-300 space-y-3">
                  <div>
                    <p className="font-semibold text-white">Мариуполь</p>
                    <p>Киевский рынок<br />павильон 278, мкрн Восточный</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Мариуполь</p>
                    <p>ул. Каффайская, 69<br />рынок «Эдельвейс», павильон 33<br />вход с рынка и со стороны ул. Готфейской</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Таганрог</p>
                    <p>ул. Пархоменко 7Г</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Ростов-на-Дону</p>
                    <p>ул. Обсерваторная, 30</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <a href="tel:+79490732315">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-xl px-12 py-6">
                <Icon name="Phone" size={24} className="mr-3" />
                Позвонить сейчас
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary">Наши адреса на карте</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-all">
              <CardContent className="p-0">
                <div className="bg-secondary text-white p-4">
                  <h3 className="text-2xl font-bold flex items-center gap-2">
                    <Icon name="MapPin" size={24} />
                    Мариуполь
                  </h3>
                  <p className="text-gray-300 mt-2">Киевский рынок, павильон 278, мкрн Восточный</p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.5!2d37.543367!3d47.097133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDA1JzQ5LjciTiAzN8KwMzInMzYuMSJF!5e0!3m2!1sru!2s!4v1234567890"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Карта Мариуполь Киевский рынок"
                ></iframe>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all">
              <CardContent className="p-0">
                <div className="bg-secondary text-white p-4">
                  <h3 className="text-2xl font-bold flex items-center gap-2">
                    <Icon name="MapPin" size={24} />
                    Мариуполь
                  </h3>
                  <p className="text-gray-300 mt-2">ул. Каффайская, 69, рынок «Эдельвейс», павильон 33</p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.5!2d37.543367!3d47.097133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDA1JzQ5LjciTiAzN8KwMzInMzYuMSJF!5e0!3m2!1sru!2s!4v1234567890"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Карта Мариуполь рынок Эдельвейс"
                ></iframe>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all">
              <CardContent className="p-0">
                <div className="bg-secondary text-white p-4">
                  <h3 className="text-2xl font-bold flex items-center gap-2">
                    <Icon name="MapPin" size={24} />
                    Таганрог
                  </h3>
                  <p className="text-gray-300 mt-2">ул. Пархоменко 7Г</p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.5!2d38.898!3d47.236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3bc0c0d0d0d0d%3A0x0!2z0J_QsNGA0YXQvtC80LXQvdC60L4gN9CT!5e0!3m2!1sru!2s!4v1234567890"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Карта Таганрог"
                ></iframe>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all">
              <CardContent className="p-0">
                <div className="bg-secondary text-white p-4">
                  <h3 className="text-2xl font-bold flex items-center gap-2">
                    <Icon name="MapPin" size={24} />
                    Ростов-на-Дону
                  </h3>
                  <p className="text-gray-300 mt-2">ул. Обсерваторная, 30</p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.0!2d39.718705!3d47.222078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc0000000000%3A0x0!2z0J7QsdGB0LXRgNCy0LDRgtC-0YDQvdCw0Y8gMzA!5e0!3m2!1sru!2s!4v1234567890"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Карта Ростов-на-Дону"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <FloatingButtons />
    </div>
  );
}