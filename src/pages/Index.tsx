import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutAndServices from "@/components/AboutAndServices";
import PortfolioAndContacts from "@/components/PortfolioAndContacts";

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
      <Header activeSection={activeSection} />
      <HeroSection />
      <AboutAndServices />
      <PortfolioAndContacts />
    </div>
  );
}
