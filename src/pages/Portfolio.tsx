import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import FloatingButtons from "@/components/FloatingButtons";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Наши работы - Портфолио выполненных проектов"
        description="Примеры выполненных работ по изготовлению и установке памятников из гранита. Художественная гравировка, благоустройство захоронений, индивидуальный дизайн. Мариуполь, ДНР."
        keywords="портфолио памятников, примеры работ, фото памятников, выполненные проекты"
        canonical="https://gkgranitk.ru/portfolio"
      />
      <Header activeSection="portfolio" />
      <Breadcrumbs />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">Наши работы</h2>
          <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto text-lg">
            Примеры выполненных работ с установкой и благоустройством
          </p>
          <p className="text-center text-primary font-semibold mb-12">
            Больше работ в нашем <a href="https://t.me/Pamyatniki_Mariupol_Granite" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary/80">Telegram-канале</a>
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                img: 'https://cdn.poehali.dev/files/IMG_8835.jpeg', 
                title: 'Памятник с арочным дизайном',
                desc: 'Чёрный гранит с элегантной аркой, художественная гравировка портрета и надписей'
              },
              { 
                img: 'https://cdn.poehali.dev/files/IMG_0401.jpeg', 
                title: 'Двойной памятник с благоустройством',
                desc: 'Семейный памятник из красного гранита с полным благоустройством участка'
              },
              { 
                img: 'https://cdn.poehali.dev/files/IMG_0763.jpeg', 
                title: 'Памятник для супругов',
                desc: 'Двойной памятник из чёрного гранита с портретами и декоративными элементами'
              },
              { 
                img: 'https://cdn.poehali.dev/files/4aa9c7d0-be34-4ebd-ab49-1760a7f3a4a4.jpeg', 
                title: 'Памятник с гравировкой пейзажа',
                desc: 'Индивидуальный дизайн с художественной гравировкой природного пейзажа'
              },
              { 
                img: 'https://cdn.poehali.dev/files/1cb2cfa4-b4a6-4e64-a283-8887a8d71046.jpeg', 
                title: 'Комплекс с благоустройством',
                desc: 'Полный комплекс: памятник, цветник, тротуарная плитка и ограда'
              },
              { 
                img: 'https://cdn.poehali.dev/files/IMG_8886.jpeg', 
                title: 'Классический памятник',
                desc: 'Чёрный гранит Абсолют Блэк с профессиональной гравировкой портрета'
              },
              { 
                img: 'https://cdn.poehali.dev/files/IMG_4150.jpeg', 
                title: 'Одиночный памятник с портретом',
                desc: 'Вертикальный памятник из чёрного гранита с качественной гравировкой'
              },
              { 
                img: 'https://cdn.poehali.dev/files/IMG_7630.png', 
                title: 'Памятник с плиткой',
                desc: 'Чёрный гранит с портретом, установлен с благоустройством серой плиткой'
              },
              { 
                img: 'https://cdn.poehali.dev/files/IMG_4252.jpeg', 
                title: 'Вертикальный памятник',
                desc: 'Чёрный гранит с портретом и декоративной гравировкой розы'
              }
            ].map((work, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2">
                <img 
                  src={work.img} 
                  alt={work.title} 
                  className="w-full h-64 object-cover" 
                  loading="lazy"
                />
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">{work.title}</h3>
                  <p className="text-sm text-muted-foreground">{work.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Хотите увидеть больше наших работ?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Подписывайтесь на наш Telegram-канал, где мы регулярно публикуем фото новых проектов и делимся опытом работы
          </p>
          <a 
            href="https://t.me/Pamyatniki_Mariupol_Granite" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0088cc] hover:bg-[#006699] text-white px-8 py-3 rounded-lg transition-colors font-semibold"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.67-.52.36-.99.53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.48 1.02-.73 4-1.74 6.68-2.89 8.03-3.45 3.82-1.58 4.61-1.86 5.13-1.87.11 0 .37.03.53.17.14.11.18.26.2.37.01.08.03.29.01.45z"/>
            </svg>
            Перейти в Telegram
          </a>
        </div>
      </section>

      <FloatingButtons />
    </div>
  );
}