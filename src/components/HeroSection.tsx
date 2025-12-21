import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function HeroSection() {
  return (
    <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden" role="banner" aria-label="Главный экран">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/76d11fe8-0de2-4a28-9e0f-09539e861b11.jpg')`
        }}
      />
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Памятники с душой и достоинством
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Высокое качество по ценам ниже конкурентов
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+79490732315">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить
            </Button>
          </a>
          <a href="/contacts">
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 text-lg px-8">
              Узнать больше
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}