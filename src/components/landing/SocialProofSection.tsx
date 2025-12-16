import { UserCheck, Home, Lightbulb, Star, Quote } from "lucide-react";

const trustElements = [
  {
    icon: UserCheck,
    title: "Atendimento Profissional",
    description: "Especialista qualificada e em constante atualização",
  },
  {
    icon: Home,
    title: "Ambiente Acolhedor",
    description: "Espaço pensado para seu conforto e bem-estar",
  },
  {
    icon: Lightbulb,
    title: "Técnicas Modernas",
    description: "Equipamentos e protocolos de última geração",
  },
  {
    icon: Star,
    title: "Clientes Satisfeitas",
    description: "Resultados reais que fazem a diferença",
  },
];

const testimonials = [
  {
    name: "Maria Clara",
    text: "Atendimento impecável! A Thaynara é muito atenciosa e profissional. Minha pele nunca esteve tão bonita.",
  },
  {
    name: "Juliana Santos",
    text: "Ambiente super aconchegante e tratamentos de qualidade. Recomendo de olhos fechados!",
  },
  {
    name: "Ana Paula",
    text: "Resultados visíveis desde a primeira sessão. Profissional dedicada e técnicas atualizadas.",
  },
];

const SocialProofSection = () => {
  return (
    <section id="depoimentos" className="section-padding">
      <div className="container-wide">
        {/* Trust Elements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
          {trustElements.map((item, index) => (
            <div
              key={item.title}
              className="group text-center p-6 rounded-2xl hover:bg-accent/30 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/50 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-medium text-foreground mb-1">
                {item.title}
              </h3>
              <p className="font-body text-xs text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12 animate-fade-up">
          <span className="inline-block text-sm font-body text-primary tracking-widest uppercase mb-4">
            Depoimentos
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium text-foreground mb-4">
            O Que Dizem Nossas Clientes
          </h2>
          <div className="w-20 h-0.5 bg-primary/30 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass-card-elevated rounded-2xl p-6 relative animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
              <p className="font-body text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <span className="font-heading text-lg text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <span className="font-body font-medium text-foreground">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
