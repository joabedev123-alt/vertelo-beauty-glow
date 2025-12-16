import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_LINK = "https://wa.me/5531993339605?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20atendimento.";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Stop pulsing after 10 seconds
    const timer = setTimeout(() => setIsPulsing(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
    >
      {/* Pulse Effect */}
      {isPulsing && (
        <span className="absolute inset-0 rounded-full bg-[hsl(145,63%,49%)] animate-ping opacity-40" />
      )}

      <Button
        variant="whatsapp"
        size="icon"
        className="w-16 h-16 rounded-full shadow-elevated relative"
        asChild
      >
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          className="flex items-center justify-center w-full h-full"
        >
          <FaWhatsapp className="w-10 h-10 text-white" />
        </a>
      </Button>
    </div>
  );
};

export default WhatsAppButton;
