import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutAndServices from "@/components/AboutAndServices";
import OrderForm from "@/components/OrderForm";
import PortfolioAndContacts from "@/components/PortfolioAndContacts";
import FAQ from "@/components/FAQ";
import FloatingButtons from "@/components/FloatingButtons";
import TopContactBar from "@/components/TopContactBar";
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
    <div className="min-h-screen">
      <SEO 
        title="Памятники из гранита в Мариуполе"
        description="Изготовление и установка памятников из гранита в Мариуполе. Художественная гравировка портретов, благоустройство захоронений. Доставка в ДНР и Ростовскую область. ☎️ +7-918-548-06-79"
        keywords="памятники Мариуполь, памятники из гранита, изготовление памятников, установка памятников, гравировка портретов, благоустройство захоронений, памятники ДНР, памятники Ростовская область"
        canonical="https://gkgranitk.ru"
      />
      <TopContactBar />
      <Header activeSection={activeSection} />
      <HeroSection />
      <AboutAndServices />
      <OrderForm />
      <PortfolioAndContacts />
      <FAQ />
      <FloatingButtons />
    </div>
  );
}