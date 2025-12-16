import { Sparkles, Heart, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-gradient-section">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-up">
          <span className="inline-block text-sm font-body text-primary tracking-widest uppercase mb-4">
            Sobre
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium text-foreground mb-4">
            Cuidado Personalizado
          </h2>
          <div className="w-20 h-0.5 bg-primary/30 mx-auto" />
        </div>

        {/* Content */}
        <div className="max-w-2xl mx-auto text-center animate-fade-up delay-100">
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
            Sou <strong className="text-foreground">Thaynara Vertelo</strong>, especialista em estética 
            e beleza, dedicada a oferecer tratamentos personalizados que unem 
            <span className="text-primary font-medium"> técnicas modernas</span>, 
            <span className="text-primary font-medium"> tecnologia de ponta</span> e um 
            <span className="text-primary font-medium"> olhar atento</span> às necessidades 
            únicas de cada cliente.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-12">
            Meu compromisso é proporcionar resultados reais, em um ambiente acolhedor e profissional, 
            onde você se sente cuidada e valorizada do início ao fim.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: Sparkles,
              title: "Técnicas Avançadas",
              description: "Protocolos atualizados e equipamentos de última geração"
            },
            {
              icon: Heart,
              title: "Atendimento Humanizado",
              description: "Cada cliente é única e merece um cuidado especial"
            },
            {
              icon: Award,
              title: "Resultados Reais",
              description: "Transformações visíveis com segurança e excelência"
            }
          ].map((feature, index) => (
            <div
              key={feature.title}
              className={`group glass-card rounded-2xl p-6 text-center hover:shadow-card transition-all duration-300 animate-fade-up`}
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/50 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-medium text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
