import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import FloatingButtons from "@/components/FloatingButtons";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function Reviews() {
  const reviews = [
    {
      name: "Елена Петровна",
      city: "Мариуполь",
      date: "Декабрь 2024",
      rating: 5,
      text: "Огромное спасибо мастерам GK Granite! Помогли выбрать памятник для мамы, сделали всё быстро и качественно. Портрет получился очень красивым, точь-в-точь как на фото. Установили под ключ, благоустроили участок. Всем рекомендую!",
      avatar: "ЕП"
    },
    {
      name: "Сергей Викторович",
      city: "Мангуш",
      date: "Ноябрь 2024",
      rating: 5,
      text: "Заказывали двойной памятник из красного гранита. Работой очень довольны! Всё сделали аккуратно, в срок. Цена адекватная, никаких скрытых доплат не было. Спасибо за профессионализм и понимание в такое трудное время.",
      avatar: "СВ"
    },
    {
      name: "Наталья Ивановна",
      city: "Володарское",
      date: "Октябрь 2024",
      rating: 5,
      text: "Очень благодарна за качественную работу! Реставрировали старый памятник отца - отполировали, обновили гравировку, всё выглядит как новое. Мастера приехали на место, всё сделали за один день. Цены честные, работа на совесть.",
      avatar: "НИ"
    },
    {
      name: "Виктор Александрович",
      city: "Волноваха",
      date: "Сентябрь 2024",
      rating: 5,
      text: "Делали памятник из чёрного гранита с художественной гравировкой. Результат превзошёл ожидания! Портрет получился невероятно реалистичным. Установка прошла быстро, всё аккуратно. Рекомендую как надёжную компанию.",
      avatar: "ВА"
    },
    {
      name: "Ольга Сергеевна",
      city: "Новоазовск",
      date: "Август 2024",
      rating: 5,
      text: "Заказывала памятник с полным благоустройством: плитка, цветник, ограда. Всё сделали под ключ, очень красиво и качественно. Менеджеры помогли с выбором, показали примеры работ. Цена соответствует качеству. Спасибо большое!",
      avatar: "ОС"
    },
    {
      name: "Дмитрий Николаевич",
      city: "Таганрог",
      date: "Июль 2024",
      rating: 5,
      text: "Обратился в GK Granite по рекомендации знакомых. Не пожалел! Помогли выбрать форму и материал, сделали красивую гравировку. Установили точно в срок, всё аккуратно. Хорошие цены и отличное качество работы.",
      avatar: "ДН"
    },
    {
      name: "Людмила Васильевна",
      city: "Мариуполь",
      date: "Июнь 2024",
      rating: 5,
      text: "Очень довольна работой! Делали памятник мужу из гранита. Мастера подошли к работе с душой, всё объяснили, показали варианты. Портрет получился живым, очень похож. Цена честная, без накруток. Благодарю за внимание и качество!",
      avatar: "ЛВ"
    },
    {
      name: "Андрей Петрович",
      city: "Мариуполь",
      date: "Май 2024",
      rating: 5,
      text: "Заказывал семейный памятник на двоих. Работа выполнена на высшем уровне! Гранит качественный, полировка идеальная, гравировка чёткая. Установили быстро и профессионально. Рекомендую всем, кто ищет надёжных мастеров.",
      avatar: "АП"
    },
    {
      name: "Татьяна Михайловна",
      city: "Мангуш",
      date: "Апрель 2024",
      rating: 5,
      text: "Спасибо огромное за прекрасную работу! Памятник получился очень красивым. Особенно порадовала художественная гравировка - настоящее произведение искусства. Всё сделали в срок, установили аккуратно. Цена адекватная. Рекомендую!",
      avatar: "ТМ"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Отзывы клиентов о памятниках - GK Granite"
        description="Отзывы наших клиентов из Мариуполя, Мангуша, Володарского, Волновахи, Новоазовска и Таганрога об изготовлении и установке памятников из гранита. Реальные мнения о качестве работы GK Granite."
        keywords="отзывы о памятниках, отзывы клиентов, памятники Мариуполь отзывы, GK Granite отзывы, качество памятников"
        canonical="https://gkgranitk.ru/reviews"
      />
      <Header activeSection="reviews" />
      <Breadcrumbs />
      
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">Отзывы наших клиентов</h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
            Мы дорожим доверием каждого клиента. Читайте реальные отзывы о нашей работе
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {reviews.map((review, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {review.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">{review.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="MapPin" size={14} />
                        <span>{review.city}</span>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{review.text}</p>
                  <div className="text-xs text-muted-foreground flex items-center gap-1">
                    <Icon name="Calendar" size={12} />
                    {review.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Хотите оставить отзыв?</h3>
                  <p className="text-muted-foreground mb-6">
                    Мы будем благодарны за ваше мнение о нашей работе. Напишите нам в Telegram или позвоните по телефону.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="https://t.me/GKgranit19" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-[#0088cc] hover:bg-[#006699] text-white">
                        <Icon name="Send" size={20} className="mr-2" />
                        Написать в Telegram
                      </Button>
                    </a>
                    <a href="tel:+79490732315">
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                        <Icon name="Phone" size={20} className="mr-2" />
                        Позвонить
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Больше отзывов и примеров наших работ в Telegram-канале
            </p>
            <a href="https://t.me/Pamyatniki_Mariupol_Granite" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                <Icon name="Send" size={20} className="mr-2" />
                Перейти в канал
              </Button>
            </a>
          </div>
        </div>
      </section>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://gkgranitk.ru",
          "name": "GK Granite",
          "review": reviews.slice(0, 5).map((review) => ({
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": review.name
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": review.rating,
              "bestRating": 5
            },
            "reviewBody": review.text,
            "datePublished": review.date
          })),
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": 5,
            "reviewCount": reviews.length,
            "bestRating": 5
          }
        })}
      </script>

      <FloatingButtons />
    </div>
  );
}
