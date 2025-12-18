import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/5531993339605?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es.";

const contactInfo = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "(31) 99333-9605",
    link: WHATSAPP_LINK,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "thaynaravertello@gmail.com",
    link: "mailto:thaynaravertello@gmail.com",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "Rua Lídio Lunardi, 200 - Maria Virgínia",
    link: "https://maps.google.com/?q=Rua+Lídio+Lunardi,+200+Maria+Virgínia",
  },
];

const ContactSection = () => {
  return (
    <section id="contato" className="section-padding bg-gradient-section">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 animate-fade-up">
          <span className="inline-block text-sm font-body text-primary tracking-widest uppercase mb-3 md:mb-4">
            Contato
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-medium text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto text-sm md:text-base">
            Tire suas dúvidas ou agende seu horário
          </p>
          <div className="w-16 md:w-20 h-0.5 bg-primary/30 mx-auto mt-4 md:mt-6" />
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {contactInfo.map((item, index) => (
            <div
              key={item.label}
              className="glass-card rounded-xl p-5 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/50 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="font-body text-sm text-muted-foreground">
                      {item.label}
                    </span>
                    <p className="font-body font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/50 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="font-body text-sm text-muted-foreground">
                      {item.label}
                    </span>
                    <p className="font-body font-medium text-foreground">
                      {item.value}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="text-center">
          <p className="font-body text-sm text-muted-foreground mb-4">
            Siga nas redes sociais
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="glass"
              size="icon"
              className="rounded-full"
              asChild
            >
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </Button>
            <Button
              variant="glass"
              size="icon"
              className="rounded-full"
              asChild
            >
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
