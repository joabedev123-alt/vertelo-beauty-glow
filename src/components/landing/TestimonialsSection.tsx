import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote, Star, Heart, MessageCircleHeart } from "lucide-react";

import testimonial1 from "@/assets/noivas/depoimentos/WhatsApp Image 2025-12-17 at 06.43.43 (1).jpeg";
import testimonial2 from "@/assets/noivas/depoimentos/WhatsApp Image 2025-12-17 at 06.43.43.jpeg";
import testimonial3 from "@/assets/noivas/depoimentos/WhatsApp Image 2025-12-17 at 06.45.38 (1).jpeg";
import testimonial4 from "@/assets/noivas/depoimentos/WhatsApp Image 2025-12-17 at 06.45.38.jpeg";

const testimonialImages = [
    testimonial1,
    testimonial2,
    testimonial3,
    testimonial4
];

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonialImages.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + testimonialImages.length) % testimonialImages.length);
    }, []);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <section id="depoimentos" className="section-padding bg-gradient-section relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
                <Quote className="absolute top-10 left-[5%] w-24 h-24 text-primary/5 -rotate-12 animate-pulse-slow" />
                <Quote className="absolute bottom-10 right-[5%] w-32 h-32 text-primary/5 rotate-12" />
                <Star className="absolute top-1/4 right-[15%] w-12 h-12 text-primary/10 animate-spin-slow" />
                <Heart className="absolute bottom-1/3 left-[10%] w-16 h-16 text-primary/5 -rotate-6" />
                <MessageCircleHeart className="absolute top-1/2 right-[5%] w-20 h-20 text-primary/5 rotate-12" />
                <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
            </div>

            <div className="container-narrow relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16 animate-fade-up">
                    <span className="inline-block text-sm font-body text-primary tracking-widest uppercase mb-3 md:mb-4">
                        Depoimentos
                    </span>
                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium text-foreground mb-4">
                        Feedback das Clientes
                    </h2>
                    <div className="w-16 md:w-20 h-0.5 bg-primary/30 mx-auto" />
                </div>

                {/* Carousel Container */}
                <div className="relative max-w-sm mx-auto animate-fade-up"> {/* Narrower width for vertical screenshots */}
                    <div className="overflow-hidden rounded-2xl shadow-xl bg-background border border-border/50 relative h-[600px] md:h-[70vh]">
                        <div
                            className="flex w-full h-full transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonialImages.map((img, index) => (
                                <div key={index} className="w-full h-full shrink-0 flex items-center justify-center bg-black/5">
                                    <img
                                        src={img}
                                        alt={`Depoimento ${index + 1}`}
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-primary hover:text-white shadow-lg border border-border transition-all duration-300 -ml-2 md:-ml-6"
                        aria-label="Anterior"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-primary hover:text-white shadow-lg border border-border transition-all duration-300 -mr-2 md:-mr-6"
                        aria-label="Próximo"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        {testimonialImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentIndex === index
                                    ? "bg-primary w-6"
                                    : "bg-primary/30 hover:bg-primary/50"
                                    }`}
                                aria-label={`Ir para depoimento ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
