import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import heroVideo from "@/assets/hero_background.mp4";
import logoImage from "@/assets/WhatsApp Image 2025-12-16 at 07.08.08.png";

const WHATSAPP_LINK = "https://wa.me/5531993339605?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20atendimento.";

const HeroSection = () => {
  const scrollToServices = () => {
    document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <video
          src={heroVideo}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-sage-light/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 right-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float delay-300" />

      {/* Content */}
      <div className="relative z-10 container-narrow text-center px-5 py-20">
        {/* Brand Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 backdrop-blur-md border border-border/30 shadow-soft mb-8 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
          <span className="text-sm font-body text-muted-foreground">Makeup & Beauty</span>
        </div>

        {/* Brand Logo */}
        <div className="flex justify-center mb-6 mt-10 animate-fade-up delay-100">
          <img
            src={logoImage}
            alt="Thaynara Vertelo Beauty"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain"
          />
        </div>

        {/* Subtitle */}
        <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-up delay-200 leading-relaxed">
          Realce sua beleza natural com serviços exclusivos de maquiagem e cursos profissionais.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
          <Button
            variant="hero"
            size="lg"
            asChild
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="w-5 h-5" />
              Agendar pelo WhatsApp
            </a>
          </Button>

          <Button
            variant="hero-outline"
            size="lg"
            onClick={scrollToServices}
          >
            Ver serviços
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;
