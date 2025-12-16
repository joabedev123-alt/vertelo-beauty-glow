import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_LINK = "https://wa.me/5531993339605?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20atendimento.";

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/20 to-sage-light/30" />
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent/30 rounded-full blur-3xl" />

      <div className="container-narrow relative z-10">
        <div className="glass-card-elevated rounded-3xl p-8 md:p-12 text-center">
          {/* Decorative Icon */}
          <div className="w-16 h-16 rounded-2xl bg-accent/50 flex items-center justify-center mx-auto mb-6 animate-float">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>

          {/* Content */}
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium text-foreground mb-4 animate-fade-up">
            Agende seu momento
            <span className="block text-primary italic">de cuidado</span>
          </h2>

          <p className="font-body text-lg text-muted-foreground max-w-md mx-auto mb-8 animate-fade-up delay-100">
            Transforme sua rotina de beleza com tratamentos personalizados e resultados reais.
          </p>

          {/* CTA Button */}
          <Button
            variant="whatsapp"
            size="xl"
            className="animate-fade-up delay-200"
            asChild
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="w-6 h-6" />
              Falar no WhatsApp
            </a>
          </Button>

          {/* Trust Badge */}
          <p className="font-body text-sm text-muted-foreground mt-6 animate-fade-up delay-300">
            Resposta rápida • Atendimento personalizado
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
