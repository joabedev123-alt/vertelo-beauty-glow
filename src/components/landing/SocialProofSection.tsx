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
    title: "Técnicas Atuais",
    description: "Tendências e produtos de alta qualidade",
  },
  {
    icon: Star,
    title: "Excelência em Make",
    description: "Produções que valorizam sua beleza",
  },
];

const testimonials = [
  {
    name: "Maria Clara",
    text: "Amei minha maquiagem de formatura! Durou a festa inteira e ficou exatamente como eu queria.",
  },
  {
    name: "Juliana Santos",
    text: "O curso de automaquiagem foi transformador. Aprendi técnicas que uso todo dia.",
  },
  {
    name: "Ana Paula",
    text: "Profissional maravilhosa! Fez minha make de noiva e me senti uma verdadeira princesa.",
  },
];

const SocialProofSection = () => {
  return (
    <section className="py-12 bg-background border-b border-border/40">
      <div className="container-wide">
        {/* Trust Elements */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {trustElements.map((item, index) => (
            <div
              key={item.title}
              className="group text-center p-4 md:p-6 rounded-2xl hover:bg-accent/30 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-accent/50 flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-primary/10 transition-colors">
                <item.icon className="w-5 h-5 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="font-heading text-base md:text-lg font-medium text-foreground mb-1">
                {item.title}
              </h3>
              <p className="font-body text-[10px] md:text-xs text-muted-foreground leading-tight md:leading-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
