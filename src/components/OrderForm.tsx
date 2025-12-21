import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

export default function OrderForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://functions.poehali.dev/1df85ddf-3d17-4a16-8944-fe5835185e7d', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          message: formData.message
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: "Заявка отправлена!",
          description: "Мы свяжемся с вами в ближайшее время.",
        });
        setFormData({ name: "", phone: "", message: "" });
      } else {
        throw new Error(data.error || "Failed to send");
      }
    } catch (error) {
      toast({
        title: "Ошибка отправки",
        description: "Пожалуйста, позвоните нам напрямую: +7 (949) 073-23-15",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50" itemScope itemType="https://schema.org/ContactPoint">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">Оставить заявку</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
          Заполните форму и мы свяжемся с вами в течение 15 минут
        </p>
        
        <Card className="max-w-2xl mx-auto border-t-4 border-t-primary shadow-xl">
          <CardContent className="pt-8 pb-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Ваше имя *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Введите ваше имя"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Номер телефона *
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Ваше сообщение
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Расскажите о вашем заказе..."
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6"
              >
                {isSubmitting ? (
                  <>Отправка...</>
                ) : (
                  <>
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}