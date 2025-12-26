import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import FloatingButtons from "@/components/FloatingButtons";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function Shapes() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Формы памятников - Вертикальные, горизонтальные, фигурные"
        description="Широкий выбор форм памятников из гранита: вертикальные, горизонтальные, фигурные, двойные. Индивидуальный дизайн по вашему желанию. Мариуполь."
        keywords="формы памятников, вертикальные памятники, горизонтальные памятники, фигурные памятники, двойные памятники"
        canonical="https://gkgranitk.ru/shapes"
      />
      <Header activeSection="shapes" />
      <Breadcrumbs />
      
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">Формы памятников</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
            Различные формы и размеры
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Вертикальные", 
                desc: "Классическая форма",
                img: "https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/950c6f80-5023-459e-9303-017e0aedf456.jpg"
              },
              { 
                title: "Горизонтальные", 
                desc: "Современный стиль",
                img: "https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/dccb17fc-b076-4afa-a637-e6c9471fc5e3.jpg"
              },
              { 
                title: "Двойные", 
                desc: "Для семейных захоронений",
                img: "https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/ee6a630c-aa26-4af0-acd6-c802ece603ab.jpg"
              },
              { 
                title: "Авторские с вырезами", 
                desc: "Индивидуальный дизайн",
                img: "https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/ba45f182-871f-4abe-92f1-f2b84f9629eb.jpg"
              }
            ].map((shape, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all overflow-hidden">
                <img src={shape.img} alt={shape.title} className="w-full h-56 object-cover" />
                <CardContent className="pt-4 text-center">
                  <h3 className="text-xl font-bold mb-2">{shape.title}</h3>
                  <p className="text-muted-foreground">{shape.desc}</p>
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