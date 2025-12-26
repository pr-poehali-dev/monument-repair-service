import Icon from "@/components/ui/icon";

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  return (
    <header className="bg-secondary text-white py-4 sticky top-0 z-50 shadow-lg" role="banner">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-start gap-3">
            <img 
              src="https://cdn.poehali.dev/projects/6caffc6e-b214-44d6-831f-6e58e2a1faa7/files/69135670-c90e-464b-9e24-edb2fd63606c.jpg" 
              alt="Логотип компании ГК ГРАНИТ - изготовление памятников из гранита" 
              className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover mt-1"
              width="80"
              height="80"
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold" itemProp="name">ГК ГРАНИТ</h1>
              <p className="text-sm text-gray-400" itemProp="description">Работаем по всей Донецкой и Ростовской области</p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <a href="https://t.me/GKgranit19" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 bg-[#0088cc] hover:bg-[#006699] text-white px-2.5 py-1.5 rounded-lg transition-colors text-sm">
              <Icon name="Send" size={16} />
              <span className="hidden md:inline font-medium">Telegram</span>
            </a>
            <a href="tel:+79490732315" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Icon name="Phone" size={18} />
              <span className="text-sm">+7 (949) 073-23-15</span>
            </a>
            <a href="tel:+79173347022" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Icon name="Phone" size={18} />
              <span className="text-sm">+7 (917) 334-70-22</span>
            </a>
          </div>
        </div>
        <nav className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-base border-t border-gray-600 pt-3" role="navigation" aria-label="Основная навигация">
          <a 
            href="/" 
            className={`hover:text-primary transition-colors font-medium whitespace-nowrap ${activeSection === "home" ? "text-primary border-b-2 border-primary pb-1" : ""}`}
          >
            Главная страница
          </a>
          <a 
            href="/portfolio" 
            className={`hover:text-primary transition-colors font-medium whitespace-nowrap ${activeSection === "portfolio" ? "text-primary border-b-2 border-primary pb-1" : ""}`}
          >
            Наши работы
          </a>
          <a 
            href="/shapes" 
            className={`hover:text-primary transition-colors font-medium whitespace-nowrap ${activeSection === "shapes" ? "text-primary border-b-2 border-primary pb-1" : ""}`}
          >
            Формы памятников
          </a>
          <a 
            href="/materials" 
            className={`hover:text-primary transition-colors font-medium whitespace-nowrap ${activeSection === "materials" ? "text-primary border-b-2 border-primary pb-1" : ""}`}
          >
            Материалы
          </a>
          <a 
            href="/prices" 
            className={`hover:text-primary transition-colors font-medium whitespace-nowrap ${activeSection === "prices" ? "text-primary border-b-2 border-primary pb-1" : ""}`}
          >
            Цены
          </a>
          <a 
            href="/contacts" 
            className={`hover:text-primary transition-colors font-medium whitespace-nowrap ${activeSection === "contacts" ? "text-primary border-b-2 border-primary pb-1" : ""}`}
          >
            Контакты
          </a>
          <a 
            href="/reviews" 
            className={`hover:text-primary transition-colors font-medium whitespace-nowrap ${activeSection === "reviews" ? "text-primary border-b-2 border-primary pb-1" : ""}`}
          >
            Отзывы
          </a>
        </nav>
      </div>
    </header>
  );
}