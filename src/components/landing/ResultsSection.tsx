import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Placeholder transformation data - in production, these would be real before/after images
const transformations = [
  {
    id: 1,
    title: "Dia da Noiva",
    description: "Produção impecável e duradoura",
  },
  {
    id: 2,
    title: "Maquiagem Social",
    description: "Realce natural e sofisticado",
  },
  {
    id: 3,
    title: "Produção Artística",
    description: "Criatividade e técnica profissional",
  },
];

const ResultsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section id="resultados" className="section-padding bg-gradient-section">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 animate-fade-up">
          <span className="inline-block text-sm font-body text-primary tracking-widest uppercase mb-3 md:mb-4">
            Resultados
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-medium text-foreground mb-4">
            Transformações Reais
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto text-sm md:text-base">
            Resultados visíveis com cuidado, técnica e excelência
          </p>
          <div className="w-16 md:w-20 h-0.5 bg-primary/30 mx-auto mt-4 md:mt-6" />
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="glass-card-elevated rounded-3xl overflow-hidden">
            {/* Placeholder for before/after slider */}
            <div className="aspect-[4/3] sm:aspect-video bg-muted/50 relative flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 rounded-full bg-accent/50 flex items-center justify-center mx-auto mb-6">
                  <span className="font-heading text-3xl text-primary">{currentIndex + 1}</span>
                </div>
                <h3 className="font-heading text-2xl text-foreground mb-2">
                  {transformations[currentIndex].title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {transformations[currentIndex].description}
                </p>
                <p className="font-body text-sm text-muted-foreground/60 mt-4 italic">
                  Imagens de transformações serão adicionadas em breve
                </p>
              </div>

              {/* Navigation Arrows */}
              <Button
                variant="glass"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full"
                onClick={prevSlide}
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="glass"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full"
                onClick={nextSlide}
                aria-label="Próximo"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {transformations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                  ? "bg-primary w-6"
                  : "bg-primary/30 hover:bg-primary/50"
                  }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
