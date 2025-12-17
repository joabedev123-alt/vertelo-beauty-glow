import { Sparkles, Heart, Award } from "lucide-react";
import profileImage from "@/assets/WhatsApp Image 2025-12-16 at 12.21.08 (1).jpeg";

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-gradient-section overflow-hidden">
      <div className="container-narrow relative">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-up">
          <span className="inline-block text-sm font-body text-primary tracking-widest uppercase mb-3 md:mb-4">
            A Profissional
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium text-foreground mb-4">
            Thaynara Vertelo
          </h2>
          <div className="w-16 md:w-20 h-0.5 bg-primary/30 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative animate-fade-up">
            <div className="relative z-10 rounded-2xl overflow-hidden glass-card-elevated p-2">
              <img
                src={profileImage}
                alt="Thaynara Vertelo"
                className="w-full h-auto rounded-xl object-cover aspect-[3/4]"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-3/4 h-3/4 border-2 border-primary/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-accent/30 rounded-2xl -z-10 blur-xl" />
          </div>

          {/* Content Column */}
          <div className="animate-fade-up delay-200 text-center lg:text-left">
            <h3 className="font-heading text-2xl text-primary mb-6">
              Expert em realçar sua beleza única
            </h3>

            <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
              <p>
                Sou <strong className="text-foreground">Thaynara Vertelo</strong>, maquiadora profissional e educadora na área da beleza. Minha trajetória é marcada pela paixão em transformar não apenas visualmente, mas também elevar a autoestima de cada cliente.
              </p>
              <p>
                Com especialização em maquiagem social, noivas e produções artísticas, busco constantemente atualizações nas técnicas mais modernas do mercado para entregar resultados impecáveis e duradouros.
              </p>
              <p>
                Além dos atendimentos, dedico-me a formar novas profissionais e ensinar mulheres a se automaquarem, compartilhando conhecimento técnico com didática e acolhimento.
              </p>
            </div>

            {/* Qualifications / Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/40 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-body font-medium text-foreground">Especialista</h4>
                  <p className="text-xs text-muted-foreground">Noivas e Social</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/40 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-body font-medium text-foreground">Certificada</h4>
                  <p className="text-xs text-muted-foreground">Técnicas Avançadas</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/40 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-body font-medium text-foreground">Educadora</h4>
                  <p className="text-xs text-muted-foreground">Cursos Profissionais</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
