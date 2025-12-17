import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoNavbar from "@/assets/WhatsApp Image 2025-12-16 at 07.08.08.png";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Academy", href: "#cursos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const WHATSAPP_LINK = "https://wa.me/5531993339605?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20atendimento.";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/80 backdrop-blur-lg border-b border-border/30 shadow-soft"
        : "bg-transparent"
        }`}
    >
      <div className="container-wide flex items-center justify-between h-16 md:h-20 px-5">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center hover:opacity-80 transition-opacity"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img
            src={logoNavbar}
            alt="Thaynara Beauty Logo"
            className="h-24 md:h-40 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="font-body text-sm text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <Button variant="default" size="sm" asChild>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Agendar
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/30 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="container px-5 py-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left font-body text-lg text-muted-foreground hover:text-primary transition-colors py-2"
            >
              {link.label}
            </button>
          ))}
          <Button variant="hero" className="w-full mt-4" asChild>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Agendar pelo WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
