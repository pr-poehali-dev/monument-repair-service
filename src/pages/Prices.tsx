import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import FloatingButtons from "@/components/FloatingButtons";
import SEO from "@/components/SEO";

export default function Prices() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Цены на памятники в Мариуполе - Стоимость под ключ"
        description="Цены на изготовление и установку памятников под ключ. Одиночные памятники от 30,000₽, двойные от 45,000₽, с благоустройством. Прозрачные цены, без скрытых доплат."
        keywords="цены на памятники, стоимость памятников, памятники под ключ, цены Мариуполь"
        canonical="https://gkgranitk.ru/prices"
      />
      <Header activeSection="prices" />
      
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">Цены на памятники</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
            Указаны цены с установкой "под ключ"
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Гранит 60×40×5",
                price: "50 000 ₽",
                material: "Гранит",
                features: [
                  "Размер: 60×40×5 см",
                  "Полировка с одной стороны",
                  "Гравировка ФИО и дат",
                  "Установка в комплекте",
                  "Подставка в комплекте"
                ],
                badge: "Популярный",
                badgeColor: "bg-primary"
              },
              {
                title: "Гранит 80×40×5",
                price: "60 000 ₽",
                material: "Гранит",
                features: [
                  "Размер: 80×40×5 см",
                  "Полировка с одной стороны",
                  "Гравировка ФИО и дат",
                  "Установка в комплекте",
                  "Подставка в комплекте"
                ],
                badge: null
              },
              {
                title: "Гранит 100×50×8",
                price: "70 000 ₽",
                material: "Гранит",
                features: [
                  "Размер: 100×50×8 см",
                  "Полировка с одной стороны",
                  "Гравировка ФИО и дат",
                  "Установка в комплекте",
                  "Подставка в комплекте"
                ],
                badge: null
              },
              {
                title: "Гранит 120×60×8",
                price: "85 000 ₽",
                material: "Гранит",
                features: [
                  "Размер: 120×60×8 см",
                  "Полировка с одной стороны",
                  "Гравировка для двоих",
                  "Установка в комплекте",
                  "Подставка в комплекте"
                ],
                badge: "Семейный",
                badgeColor: "bg-secondary"
              },
              {
                title: "Мрамор 60×40×7",
                price: "40 000 ₽",
                material: "Мрамор",
                features: [
                  "Размер: 60×40×7 см",
                  "Белый мрамор",
                  "Гравировка ФИО и дат",
                  "Установка в комплекте",
                  "Подставка в комплекте"
                ],
                badge: null
              },
              {
                title: "Бетонный памятник",
                price: "35 000 ₽",
                material: "Бетон",
                features: [
                  "Стандартный размер",
                  "Прочный бетон",
                  "Гравировка ФИО и дат",
                  "Установка в комплекте",
                  "Подставка в комплекте"
                ],
                badge: "Выгодно",
                badgeColor: "bg-green-600"
              }
            ].map((plan, idx) => (
              <Card key={idx} className="hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-t-primary relative overflow-hidden">
                {plan.badge && (
                  <div className={`absolute top-4 right-4 ${plan.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                    {plan.badge}
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl text-center">{plan.title}</CardTitle>
                  <div className="text-center mt-2">
                    <div className="text-4xl font-bold text-primary">{plan.price}</div>
                    <p className="text-sm text-muted-foreground mt-1">{plan.material}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <a href="/contacts">
                      <Button className="w-full bg-secondary hover:bg-secondary/90">
                        Заказать
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Info" size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Дополнительные товары и услуги</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Вазы гранитные — от 6 500 ₽</li>
                      <li>• Лампады гранитные — от 7 000 ₽</li>
                      <li>• Художественная гравировка портрета — от 5 000 ₽</li>
                      <li>• Гравировка орнамента и узоров — от 3 000 ₽</li>
                      <li>• Фигурные вырезы и формы — от 8 000 ₽</li>
                      <li>• Цветник из гранита — от 15 000 ₽</li>
                      <li>• Благоустройство участка — от 20 000 ₽</li>
                      <li>• Реставрация старых памятников — от 10 000 ₽</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Точную стоимость рассчитаем индивидуально с учётом ваших пожеланий
            </p>
            <a href="tel:+79490732315">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-xl px-12 py-6">
                <Icon name="Phone" size={24} className="mr-3" />
                Позвонить для расчёта
              </Button>
            </a>
          </div>
        </div>
      </section>

      <FloatingButtons />
    </div>
  );
}