import { useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
// Import placeholder images - reusing existing assets for now
import image2 from "@/assets/02.jpeg";
import image5 from "@/assets/05.jpeg";
import image6 from "@/assets/06.jpeg";

// Import Bride Gallery
import bride1 from "@/assets/noivas/WhatsApp Image 2025-12-17 at 05.47.52 (1).jpeg";
import bride2 from "@/assets/noivas/WhatsApp Image 2025-12-17 at 05.47.52.jpeg";
import bride3 from "@/assets/noivas/WhatsApp Image 2025-12-17 at 05.47.53 (1).jpeg";
import bride4 from "@/assets/noivas/WhatsApp Image 2025-12-17 at 05.47.53 (2).jpeg";
import bride5 from "@/assets/noivas/WhatsApp Image 2025-12-17 at 05.47.53.jpeg";
import bride6 from "@/assets/noivas/WhatsApp Image 2025-12-17 at 05.47.54 (1).jpeg";
import bride7 from "@/assets/noivas/WhatsApp Image 2025-12-17 at 05.47.55.jpeg";
import brideVideo from "@/assets/noivas/bride_transformation_video.mp4";
import brideNew1 from "@/assets/noivas/bride_new_1.jpg";
import brideNew2 from "@/assets/noivas/bride_new_2.jpg";
import brideNew3 from "@/assets/noivas/bride_new_3.jpg";
import brideNew4 from "@/assets/noivas/bride_new_4.jpg";
import brideNew5 from "@/assets/noivas/bride_new_5.jpg";
import brideNew6 from "@/assets/noivas/bride_new_6.jpg";

// Import Social Gallery
import social1 from "@/assets/WhatsApp Image 2025-12-16 at 07.13.50.jpeg";
import social2 from "@/assets/WhatsApp Image 2025-12-16 at 07.15.04 (1).jpeg";
import social3 from "@/assets/WhatsApp Image 2025-12-16 at 07.15.04 (2).jpeg";
import socialDetail1 from "@/assets/social/social_detail_1.jpg";
import socialDetail2 from "@/assets/social/social_detail_2.jpg";
import socialDetail3 from "@/assets/social/social_detail_3.jpg";
import socialDetail4 from "@/assets/social/social_detail_4.jpg";
import socialDetail5 from "@/assets/social/social_detail_5.jpg";
import artistic1 from "@/assets/WhatsApp Image 2025-12-16 at 07.15.04 (4).jpeg";
import hairstyleCover from "@/assets/hairstyle_service.jpg";
import hairstyleDetail1 from "@/assets/hairstyle_detail_1.jpg";
import hairstyleNew1 from "@/assets/penteados/hairstyle_new_1.jpg";
import hairstyleNew2 from "@/assets/penteados/hairstyle_new_2.jpg";


import debutanteCover from "@/assets/debutantes/WhatsApp Image 2025-12-18 at 06.48.33.jpeg";
import debutante1 from "@/assets/debutantes/WhatsApp Image 2025-12-18 at 06.48.32.jpeg";
import debutante2 from "@/assets/debutantes/WhatsApp Image 2025-12-18 at 06.48.32 (1).jpeg";
import debutante3 from "@/assets/debutantes/WhatsApp Image 2025-12-18 at 06.48.33 (1).jpeg";
import debutante4 from "@/assets/debutantes/WhatsApp Image 2025-12-18 at 06.09.20.jpeg";
import debutante5 from "@/assets/debutantes/WhatsApp Image 2025-12-18 at 06.0.20.jpeg";
import debutanteVideo1 from "@/assets/debutantes/debutante_video_1.mp4";
import artisticCover from "@/assets/artistico/artistic_cover.jpeg";
import artisticDetail1 from "@/assets/artistico/artistic_detail_1.jpg";
import artisticDetail2 from "@/assets/artistico/artistic_detail_2.jpg";
import artisticDetail3 from "@/assets/artistico/artistic_detail_3.jpg";
import artisticDetail4 from "@/assets/artistico/artistic_detail_4.jpg";
import artisticDetail5 from "@/assets/artistico/artistic_detail_5.jpg";
import artisticDetail6 from "@/assets/artistico/artistic_detail_6.jpg";
import artisticDetail7 from "@/assets/artistico/artistic_detail_7.jpg";
import artisticDetail8 from "@/assets/artistico/artistic_detail_8.jpg";

const categories = ["Todos", "Noivas", "Social", "Artística", "Penteados", "Debutantes"];

const portfolioItems = [
    // Debutantes Category (New)
    { id: 23, category: "Debutantes", image: debutanteCover, title: "15 Anos Inesquecíveis", type: "image", imagePosition: "object-top" },
    { id: 29, category: "Debutantes", image: debutanteVideo1, title: "Dia de Princesa", type: "video" },
    { id: 24, category: "Debutantes", image: debutante1, title: "Produção Debutante", type: "image" },
    { id: 25, category: "Debutantes", image: debutante2, title: "Sonho de Princesa", type: "image" },
    { id: 26, category: "Debutantes", image: debutante3, title: "Momento Mágico", type: "image" },
    { id: 27, category: "Debutantes", image: debutante4, title: "Brilho Único", type: "image" },
    { id: 28, category: "Debutantes", image: debutante5, title: "Encanto", type: "image" },

    // Penteados Category (New)
    { id: 15, category: "Penteados", image: hairstyleCover, title: "Penteados Exclusivos", type: "image", imagePosition: "object-[center_20%]" },
    { id: 16, category: "Penteados", image: hairstyleDetail1, title: "Penteado em Detalhes", type: "image" },
    { id: 45, category: "Penteados", image: hairstyleNew1, title: "Clássico Moderno", type: "image" },
    { id: 46, category: "Penteados", image: hairstyleNew2, title: "Arte em Fios", type: "image" },


    { id: 3, category: "Noivas", image: bride3, title: "Detalhes Únicos", type: "image" }, // Moved to top to be the cover
    { id: 8, category: "Noivas", image: brideVideo, title: "Noiva em Movimento", type: "video" },
    { id: 1, category: "Noivas", image: bride1, title: "Noiva Radiante", type: "image" },
    { id: 2, category: "Noivas", image: bride2, title: "Produção Clássica", type: "image" },
    { id: 4, category: "Noivas", image: bride4, title: "Beleza Natural", type: "image" },
    { id: 5, category: "Noivas", image: bride5, title: "Making Of", type: "image" },
    { id: 6, category: "Noivas", image: bride6, title: "Momentos Especiais", type: "image" },
    { id: 7, category: "Noivas", image: bride7, title: "Noiva Romântica", type: "image" },
    { id: 50, category: "Noivas", image: brideNew1, title: "Produção Especial", type: "image" },
    { id: 51, category: "Noivas", image: brideNew2, title: "Detalhes", type: "image" },
    { id: 52, category: "Noivas", image: brideNew3, title: "Beleza Radiante", type: "image" },
    { id: 53, category: "Noivas", image: brideNew4, title: "Toque Final", type: "image" },
    { id: 54, category: "Noivas", image: brideNew5, title: "Inspiração Noiva", type: "image" },
    { id: 55, category: "Noivas", image: brideNew6, title: "Charme", type: "image" },

    // Social Category
    { id: 11, category: "Social", image: social1, title: "Make Glam", type: "image" },
    { id: 12, category: "Social", image: social2, title: "Produção Festa", type: "image" },
    { id: 13, category: "Social", image: social3, title: "Social Beauty", type: "image" },
    { id: 40, category: "Social", image: socialDetail1, title: "Evento Social", type: "image" },
    { id: 41, category: "Social", image: socialDetail2, title: "Festa", type: "image" },
    { id: 42, category: "Social", image: socialDetail3, title: "Produção", type: "image" },
    { id: 43, category: "Social", image: socialDetail4, title: "Glamour", type: "image" },
    { id: 44, category: "Social", image: socialDetail5, title: "Noite", type: "image" },
    { id: 14, category: "Social", image: artistic1, title: "Expressão & Arte", type: "image" },

    // Artística Category
    { id: 30, category: "Artística", image: artisticCover, title: "Arte & Criatividade", type: "image" },
    { id: 31, category: "Artística", image: artisticDetail1, title: "Cores e Formas", type: "image" },
    { id: 32, category: "Artística", image: artisticDetail2, title: "Inspiração Artística", type: "image" },
    { id: 33, category: "Artística", image: artisticDetail3, title: "Arte Viva", type: "image" },
    { id: 34, category: "Artística", image: artisticDetail4, title: "Traços & Tons", type: "image" },
    { id: 35, category: "Artística", image: artisticDetail5, title: "Expressão Pura", type: "image" },
    { id: 36, category: "Artística", image: artisticDetail6, title: "Beleza Artística", type: "image" },
    { id: 37, category: "Artística", image: artisticDetail7, title: "Criatividade", type: "image" },
    { id: 38, category: "Artística", image: artisticDetail8, title: "Conceito Único", type: "image" },
];

const GallerySection = () => {
    const [activeCategory, setActiveCategory] = useState("Todos");
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const filteredItems = activeCategory === "Todos"
        ? Object.values(portfolioItems.reduce((acc, item) => {
            if (!acc[item.category]) {
                acc[item.category] = item;
            }
            return acc;
        }, {} as Record<string, typeof portfolioItems[0]>))
        : portfolioItems.filter(item => item.category === activeCategory);

    const handleItemClick = (category: string, index: number) => {
        if (activeCategory === "Todos") {
            setActiveCategory(category);
        } else {
            setSelectedImageIndex(index);
        }
    };

    const closeLightbox = () => setSelectedImageIndex(null);

    const nextImage = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((prev) =>
                prev === filteredItems.length - 1 ? 0 : (prev || 0) + 1
            );
        }
    }, [selectedImageIndex, filteredItems.length]);

    const prevImage = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((prev) =>
                prev === 0 ? filteredItems.length - 1 : (prev || 0) - 1
            );
        }
    }, [selectedImageIndex, filteredItems.length]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedImageIndex === null) return;
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedImageIndex, nextImage, prevImage]);

    return (
        <section id="galeria" className="section-padding bg-background">
            <div className="container-narrow">
                {/* Section Header */}
                <div className="text-center mb-12 animate-fade-up">
                    <span className="inline-block text-sm font-body text-primary tracking-widest uppercase mb-3">
                        Portfolio
                    </span>
                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium text-foreground mb-8">
                        Galeria de Transformações
                    </h2>

                    {/* Categories */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                    ? "bg-primary text-white shadow-md"
                                    : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {filteredItems.map((item, index) => (
                        <div
                            key={item.id}
                            onClick={() => handleItemClick(item.category, index)}
                            className={`group relative aspect-square overflow-hidden rounded-xl bg-secondary animate-fade-up ${activeCategory === "Todos" ? "cursor-pointer" : "cursor-zoom-in"}`}
                        >
                            {item.type === 'video' ? (
                                <video
                                    src={item.image}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    muted
                                    loop
                                    playsInline
                                    onMouseOver={(e) => e.currentTarget.play()}
                                    onMouseOut={(e) => e.currentTarget.pause()}
                                />
                            ) : (
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${item.imagePosition || 'object-center'}`}
                                    loading="lazy"
                                />
                            )}

                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <p className="text-white font-medium text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {activeCategory === "Todos" ? `Ver ${item.category}` : item.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImageIndex !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-200"
                    onClick={closeLightbox}
                >
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2 z-50"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 bg-black/20 hover:bg-black/40 rounded-full z-50"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>

                    <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 bg-black/20 hover:bg-black/40 rounded-full z-50"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>

                    <div
                        className="relative max-w-5xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center gap-4"
                        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
                    >
                        {filteredItems[selectedImageIndex].type === 'video' ? (
                            <video
                                src={filteredItems[selectedImageIndex].image}
                                className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
                                controls
                                autoPlay
                            />
                        ) : (
                            <img
                                src={filteredItems[selectedImageIndex].image}
                                alt={filteredItems[selectedImageIndex].title}
                                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                            />
                        )}
                        <p className="text-white/90 font-medium text-lg">
                            {filteredItems[selectedImageIndex].title}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default GallerySection;
