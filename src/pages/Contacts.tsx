import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import FloatingButtons from "@/components/FloatingButtons";

export default function Contacts() {
  return (
    <div className="min-h-screen">
      <Header activeSection="contacts" />
      
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Контакты</h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
            Свяжитесь с нами удобным способом
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Телефоны</h3>
                <div className="flex flex-col gap-2">
                  <a href="tel:+79490732315" className="text-primary hover:underline text-lg">
                    +7 (949) 073-23-15
                  </a>
                  <a href="tel:+79173347022" className="text-primary hover:underline text-lg">
                    +7 (917) 334-70-22
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#0088cc] rounded-full flex items-center justify-center">
                  <Icon name="Send" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Telegram</h3>
                <a href="https://t.me/GKgranit19" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-lg">
                  @GKgranit19
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="MapPin" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Адрес</h3>
                <p className="text-gray-300">
                  Мариуполь, Киевский рынок<br />
                  павильон 278, мкрн Восточный
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <a href="tel:+79490732315">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-xl px-12 py-6">
                <Icon name="Phone" size={24} className="mr-3" />
                Позвонить сейчас
              </Button>
            </a>
          </div>
        </div>
      </section>

      <FloatingButtons />
    </div>
  );
}
