import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import FloatingButtons from "@/components/FloatingButtons";

export default function Shapes() {
  return (
    <div className="min-h-screen">
      <Header activeSection="shapes" />
      
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">Формы памятников</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
            Различные формы и размеры
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Вертикальные", desc: "Классическая форма" },
              { title: "Горизонтальные", desc: "Современный стиль" },
              { title: "Двойные", desc: "Для семейных захоронений" },
              { title: "Авторские", desc: "Индивидуальный дизайн" }
            ].map((shape, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all">
                <CardContent className="pt-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                    <Icon name="Box" size={40} className="text-white" />
                  </div>
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
