import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import serviceMakeupSocial from "@/assets/makeup_service_updated.jpg";
import serviceBride from "@/assets/bride_service_updated.jpg";
import servicePhotos from "@/assets/photoshoot_service_updated.jpg";
import serviceHairstyle from "@/assets/hairstyle_service.jpg";
import serviceDebutantes from "@/assets/debutante_service_updated.jpg";
import serviceBrideCivil from "@/assets/bride_civil_service.jpg";

const WHATSAPP_LINK = "https://wa.me/5531993339605?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os.";

interface Service {
  title: string;
  description: string;
  image: string;
  features: string[];
  imageFit?: string;
  imagePosition?: string;
  bgClass?: string;
  isPortrait?: boolean;
}

const services: Service[] = [
  {
    title: "Maquiagem",
    description: "Realce sua beleza para eventos especiais com técnicas de contorno, iluminação e alta durabilidade.",
    image: serviceMakeupSocial,
    features: ["Alta fixação", "Cílios inclusos", "Técnicas HD"]
  },
  {
    title: "Dia da Noiva",
    description: "Uma experiência exclusiva de cuidado e beleza para o dia mais importante da sua vida.",
    image: serviceBride,
    features: ["Atendimento exclusivo", "Assessoria completa", "Teste de maquiagem", "Teste de penteado"],
    imagePosition: "object-[center_45%]" // Adjusted to move image down slightly
  },
  {
    title: "Noiva Civil",
    description: "Produção leve e sofisticada, ideal para casamentos no civil e mini weddings.",
    image: serviceBrideCivil,
    features: ["Maquiagem Atemporal", "Penteado Natural", "Alta Durabilidade"],
    imagePosition: "object-[center_10%]"
  },
  {
    title: "Debutantes",
    description: "Produção completa para celebrar seus 15 anos com estilo e sofisticação.",
    image: serviceDebutantes,
    features: ["Produção completa", "Acompanhamento em fotos", "Penteado exclusivo"]
  },
  {
    title: "Penteados",
    description: "Penteados exclusivos para noivas, debutantes e festas, com técnicas de alta durabilidade e visagismo.",
    image: serviceHairstyle,
    features: ["Clássicos e Modernos", "Visagismo Capilar", "Alta Durabilidade"],
    imagePosition: "object-[center_10%]"
  },
  {
    title: "Produção para Fotos",
    description: "Maquiagem e cabelo pensados para editoriais, ensaios gestante e branding pessoal.",
    image: servicePhotos,
    features: ["Técnica fotográfica", "Retoques inclusos", "Opções de troca"],
    imagePosition: "object-[center_15%]" // Adjusted to move image down further
  }
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-up">
          <span className="inline-block text-sm font-body text-primary tracking-widest uppercase mb-3 md:mb-4">
            Especialidades
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto text-sm md:text-base">
            Experiências únicas de beleza pensadas para cada momento especial.
          </p>
          <div className="w-16 md:w-20 h-0.5 bg-primary/30 mx-auto mt-4 md:mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-card transition-all duration-300 animate-fade-up border border-border/50 flex flex-col h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-96 overflow-hidden shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${service.imagePosition || 'object-center'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-heading text-2xl font-medium text-white mb-1">
                    {service.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-foreground/80 font-body">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/5531993339605?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors uppercase tracking-wider mt-auto"
                >
                  Agendar Horário
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
