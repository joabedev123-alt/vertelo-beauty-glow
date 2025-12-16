import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import serviceFacial from "@/assets/01.jpeg";
import serviceSkincare from "@/assets/02.jpeg";
import serviceAesthetics from "@/assets/04.jpeg";
import serviceWellness from "@/assets/05.jpeg";

const WHATSAPP_LINK = "https://wa.me/5531993339605?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os.";

const services = [
  {
    title: "Tratamentos Faciais",
    description: "Limpeza de pele, hidratação profunda, rejuvenescimento e protocolos personalizados para cada tipo de pele.",
    image: serviceFacial,
  },
  {
    title: "Skincare",
    description: "Cuidados diários e tratamentos específicos para manter sua pele saudável, luminosa e jovem.",
    image: serviceSkincare,
  },
  {
    title: "Estética Personalizada",
    description: "Procedimentos estéticos modernos adaptados às suas necessidades e objetivos de beleza.",
    image: serviceAesthetics,
  },
  {
    title: "Beleza & Bem-estar",
    description: "Momentos de cuidado e relaxamento que unem beleza e qualidade de vida em cada sessão.",
    image: serviceWellness,
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block text-sm font-body text-primary tracking-widest uppercase mb-4">
            Serviços
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium text-foreground mb-4">
            Nossos Tratamentos
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Descubra os cuidados que vão transformar sua rotina de beleza
          </p>
          <div className="w-20 h-0.5 bg-primary/30 mx-auto mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass-card-elevated rounded-2xl overflow-hidden hover:shadow-elevated transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-5 leading-relaxed">
                  {service.description}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 h-auto text-primary hover:text-primary/80 group/btn"
                  asChild
                >
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Quero saber mais
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
