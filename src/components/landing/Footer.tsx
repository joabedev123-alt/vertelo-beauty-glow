const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-5 bg-foreground/[0.02] border-t border-border/50">
      <div className="container-narrow">
        <div className="text-center space-y-4">
          {/* Brand */}
          <h3 className="font-heading text-2xl font-medium text-foreground">
            Thaynara Vertelo <span className="text-primary italic">Beauty</span>
          </h3>
          
          {/* CNPJ */}
          <p className="font-body text-sm text-muted-foreground">
            CNPJ: 59.656.039/0001-04
          </p>
          
          {/* Copyright */}
          <p className="font-body text-xs text-muted-foreground/70">
            © {currentYear} Thaynara Vertelo Beauty. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
