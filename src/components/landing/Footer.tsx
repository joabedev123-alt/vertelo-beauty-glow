const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-5 bg-foreground/[0.02] border-t border-border/50">
      <div className="container-narrow">
        <div className="text-center space-y-4">
          {/* Brand Logo */}
          <div className="flex justify-center mb-2">
            <img
              src="/WhatsApp Image 2025-12-16 at 07.08.07.png"
              alt="Thaynara Beauty Logo"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </div>

          {/* CNPJ */}
          <p className="font-body text-sm text-muted-foreground">
            CNPJ: 59.656.039/0001-04
          </p>

          {/* Copyright */}
          <p className="font-body text-xs text-muted-foreground/70">
            © {currentYear} Thaynara Vertelo Beauty. Todos os direitos reservados.
          </p>

          {/* Credits */}
          <p className="font-body text-[10px] text-muted-foreground/50 hover:text-primary/70 transition-colors">
            Desenvolvido com 💚 pela equipe Camaly
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
