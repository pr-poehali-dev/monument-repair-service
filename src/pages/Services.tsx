import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Services() {
  const services = [
    {
      icon: "Hammer",
      title: "Изготовление памятников в Мариуполе",
      description: "Производство памятников из гранита и мрамора любой формы и сложности. Используем качественные материалы: Чёрный Абсолют, Красный Лезники, гранит Карелия. Срок изготовления от 14 дней.",
      price: "от 15 000 ₽"
    },
    {
      icon: "Truck",
      title: "Установка памятников Мариуполь",
      description: "Профессиональная установка памятников с гарантией 3 года. Работаем в Мариуполе, Мангуше, Володарском, Волновахе, Новоазовске. Включает фундамент, подставку, монтаж стелы и цветник.",
      price: "от 8 000 ₽"
    },
    {
      icon: "Wrench",
      title: "Ремонт памятников Мариуполь",
      description: "Реставрация и ремонт старых памятников: устранение сколов, восстановление портретов и надписей, замена повреждённых элементов, выравнивание покосившихся конструкций.",
      price: "от 5 000 ₽"
    },
    {
      icon: "PenTool",
      title: "Художественная гравировка портретов",
      description: "Ручная гравировка портретов на граните с фотографий любого качества. Работают профессиональные художники-граверы. Портрет не выцветает десятилетиями.",
      price: "от 12 000 ₽"
    },
    {
      icon: "Sparkles",
      title: "Благоустройство захоронений",
      description: "Комплексное благоустройство участков: укладка плитки, установка оград, столиков, скамеек, цветников. Создаём ухоженный мемориальный комплекс под ключ.",
      price: "от 20 000 ₽"
    },
    {
      icon: "Package",
      title: "Комплектующие из гранита",
      description: "Гранитные вазы, лампады, столики, скамейки, оградки, цветники. Все элементы изготавливаются из натурального гранита и мрамора в тон основному памятнику.",
      price: "от 3 000 ₽"
    }
  ];

  return (
    <>
      <SEO 
        title="Услуги по изготовлению памятников в Мариуполе | Установка и ремонт | GK Granite"
        description="Полный спектр услуг по изготовлению, установке и ремонту памятников в Мариуполе. Художественная гравировка, реставрация, благоустройство захоронений. Гарантия качества. ☎️ +7 (949) 073-23-15"
        keywords="услуги изготовление памятников Мариуполь, установка памятников Мариуполь цена, ремонт памятников Мариуполь стоимость, реставрация памятников, гравировка портретов, благоустройство захоронений"
        canonical="https://gkgranitk.ru/services"
      />
      <Header activeSection="" />
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
                Услуги по изготовлению памятников в Мариуполе
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                ГК ГРАНИТ предоставляет полный комплекс услуг: изготовление, установка, ремонт и реставрация памятников 
                из гранита и мрамора в Мариуполе, Мангуше, Володарском, Волновахе, Новоазовске и Таганроге
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-t-primary">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name={service.icon as any} size={32} className="text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold mb-3 text-center text-secondary">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 mb-4 text-center leading-relaxed">
                      {service.description}
                    </p>
                    <div className="text-center">
                      <span className="inline-block bg-primary/10 text-primary font-bold text-lg px-6 py-2 rounded-full">
                        {service.price}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-secondary mb-6 text-center">
                Почему выбирают GK Granite для изготовления памятников в Мариуполе
              </h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {[
                  { icon: "Shield", text: "Гарантия на материалы 50 лет, на гравировку 25 лет" },
                  { icon: "Users", text: "Профессиональные мастера с многолетним опытом" },
                  { icon: "Clock", text: "Быстрое изготовление от 14 дней" },
                  { icon: "CheckCircle", text: "Бесплатные 3D-эскизы перед началом работ" },
                  { icon: "Truck", text: "Доставка и установка по всей ДНР и Ростовской области" },
                  { icon: "Award", text: "Собственное производство без посредников" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon as any} size={20} className="text-white" />
                    </div>
                    <p className="text-gray-700 pt-2">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-secondary mb-6">
                Закажите изготовление памятника в Мариуполе
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Приезжайте в наши магазины или позвоните для бесплатной консультации. 
                Мы поможем выбрать форму, материал и создадим 3D-эскиз вашего памятника.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+79490732315" className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all text-lg">
                  <Icon name="Phone" size={24} />
                  +7 (949) 073-23-15
                </a>
                <a href="/contacts" className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-all text-lg">
                  <Icon name="MapPin" size={24} />
                  Наши адреса
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}