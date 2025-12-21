import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import FloatingButtons from "@/components/FloatingButtons";

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Header activeSection="portfolio" />
      
      <section className="py-20 bg-white">
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
              { img: 'https://cdn.poehali.dev/files/IMG_8886.jpeg', title: 'Памятник из чёрного гранита' },
              { img: 'https://cdn.poehali.dev/files/IMG_4150.jpeg', title: 'Одиночный памятник с портретом' },
              { img: 'https://cdn.poehali.dev/files/IMG_5256.jpeg', title: 'Памятник с гравировкой' }
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

      <FloatingButtons />
    </div>
  );
}
