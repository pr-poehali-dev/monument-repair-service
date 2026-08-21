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
        description="Широкий выбор форм памятников из гранита: вертикальные, горизонтальные, фигурные, двойные. Индивидуальный дизайн по вашему желанию. Ростов-на-Дону."
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">Варианты гравировки и вырезов</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
            Розы, голуби, берёзы, сердца и другие авторские вырезы на памятниках
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { title: "Роза", img: "https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/bc7fc30a-a70e-4bdc-89d9-fe277ceb34b9.jpg" },
              { title: "Букет роз", img: "https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/c22671ae-13f1-4c86-a7a8-617e25ea20db.jpg" },
              { title: "Роза с лентой", img: "https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/ba572adc-b0a0-483b-97b7-521bbe9c909f.jpg" },
              { title: "Ветка розы", img: "https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/81f1ec0f-8ca0-4752-848c-808ea83c9f60.jpg" },
              { title: "Три розы", img: "https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/7ae5791e-7ed9-40b1-aec9-0e5e8cdae0b5.jpg" },
              { title: "Голуби", img: "https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/11a07549-5899-400c-aaea-8bb5e297fbad.jpg" },
              { title: "Голубь с веткой", img: "https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/46e27ac4-3665-4af4-8b5b-d99d8889aa52.jpg" },
              { title: "Голуби и крест", img: "https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/92ef91ce-2055-4ac0-b614-c16d15f2d532.jpg" },
              { title: "Три голубя", img: "https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/193ae708-a8f1-4bbc-b4b9-80069ba2f581.jpg" },
              { title: "Берёза", img: "https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/7e3e2419-b8fc-4c08-942e-b90556b3a64a.jpg" },
              { title: "Две берёзы", img: "https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/53ace335-9893-494c-a062-fbc9f3fb65f9.jpg" },
              { title: "Берёза с тропинкой", img: "https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/7a0d7442-9562-42bc-85e3-6c92c0b44c84.jpg" },
              { title: "Плакучая ива", img: "https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/a5014325-c284-4966-8d45-ebca21cb13d9.jpg" },
              { title: "Сердце с розой", img: "https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/6632f12d-8450-41ef-b29f-a38ee39d69e7.jpg" },
              { title: "Два сердца", img: "https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/d07c3774-8071-4c6f-a4d6-ff0eb0974828.jpg" },
              { title: "Сердце с крыльями", img: "https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/954e3cb8-0afc-45b5-9c0f-24e77b7f1c75.jpg" },
              { title: "Сердце с крестом", img: "https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/47246805-58b6-4c20-aa78-7e33d96006d9.jpg" },
              { title: "Крест с розой", img: "https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/39149096-504c-4a69-afa3-14ba1bbebd08.jpg" },
              { title: "Роза с голубем", img: "https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/2cac3fd4-485d-46a5-a5b1-288d5d6fd761.jpg" }
            ].map((item, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all overflow-hidden group">
                <div className="overflow-hidden">
                  <img src={item.img} alt={`Вырез на памятнике — ${item.title}`} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <CardContent className="pt-3 pb-3 text-center">
                  <h3 className="text-sm font-semibold">{item.title}</h3>
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