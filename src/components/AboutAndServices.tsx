import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function AboutAndServices() {
  return (
    <>
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden" itemScope itemType="https://schema.org/Organization">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-8xl">🕊️</div>
          <div className="absolute top-20 right-20 text-6xl">🌹</div>
          <div className="absolute bottom-20 left-1/4 text-7xl">💐</div>
          <div className="absolute bottom-10 right-1/3 text-6xl">🕊️</div>
          <div className="absolute top-1/2 right-10 text-5xl">🌹</div>
          <div className="absolute top-1/3 left-1/3 text-6xl">🕊️</div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">Изготовление памятников в Мариуполе</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg" itemProp="description">
            ГК ГРАНИТ — изготовление, установка и ремонт памятников из гранита в Мариуполе, Мангуше, Володарском, Волновахе, Новоазовске и Таганроге. Создаём памятники любой сложности и формы под ключ.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow border-t-4 border-t-primary bg-white/80 backdrop-blur-sm">
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

            <Card className="hover:shadow-xl transition-shadow border-t-4 border-t-primary bg-white/80 backdrop-blur-sm">
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

            <Card className="hover:shadow-xl transition-shadow border-t-4 border-t-primary bg-white/80 backdrop-blur-sm">
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

      <section className="py-20 bg-muted" itemScope itemType="https://schema.org/Service">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary" itemProp="serviceType">Услуги по изготовлению памятников в Мариуполе</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
            Полный комплекс услуг по изготовлению, установке и ремонту памятников в Мариуполе, Мангуше, Володарском, Волновахе, Новоазовске и Таганроге
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "Hammer", title: "Изготовление памятников Мариуполь", desc: "Из гранита и мрамора любой сложности" },
              { icon: "Wrench", title: "Ремонт памятников Мариуполь", desc: "Восстановление и реставрация" },
              { icon: "Truck", title: "Установка памятников", desc: "Профессиональный монтаж в Мариуполе и области" },
              { icon: "PenTool", title: "Гравировка портретов", desc: "Художественная гравировка и надписи" }
            ].map((service, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-secondary rounded-full flex items-center justify-center">
                    <Icon name={service.icon as any} size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2" itemProp="name">{service.title}</h3>
                  <p className="text-muted-foreground text-sm" itemProp="description">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}