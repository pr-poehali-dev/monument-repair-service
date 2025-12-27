import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutAndServices from "@/components/AboutAndServices";
import OrderForm from "@/components/OrderForm";
import PortfolioAndContacts from "@/components/PortfolioAndContacts";
import FAQ from "@/components/FAQ";
import SEOTextBlock from "@/components/SEOTextBlock";
import FloatingButtons from "@/components/FloatingButtons";
import SEO from "@/components/SEO";

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["portfolio", "shapes", "materials", "contacts"];
      const scrollPosition = window.scrollY + 100;

      if (scrollPosition < 500) {
        setActiveSection("home");
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <SEO 
        title="Изготовление памятников Мариуполь | Установка и ремонт памятников | GK Granite"
        description="Изготовление, установка и ремонт памятников из гранита в Мариуполе, Мангуше, Володарском, Волновахе, Новоазовске. Реставрация памятников, художественная гравировка портретов, благоустройство. Работаем под ключ. Магазины: Мариуполь (Киевский рынок, пав. 278), Таганрог (ул. Пархоменко 7Г). ☎️ +7 (949) 073-23-15"
        keywords="изготовление памятников Мариуполь, установка памятников Мариуполь, ремонт памятников Мариуполь, реставрация памятников Мариуполь, памятники из гранита Мариуполь, гранитные памятники Мариуполь, изготовление памятников Мангуш, установка памятников Володарское, ремонт памятников Волноваха, изготовление памятников Новоазовск, памятники Таганрог, гравировка портретов, художественная гравировка, благоустройство захоронений, памятники под ключ, Киевский рынок, GK Granite"
        canonical="https://gkgranitk.ru"
      />
      <Header activeSection={activeSection} />
      <main role="main">
        <HeroSection />
        <AboutAndServices />
        <OrderForm />
        <PortfolioAndContacts />
        <FAQ />
        <SEOTextBlock />
      </main>
      <FloatingButtons />
    </>
  );
}