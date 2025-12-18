import { Instagram, Facebook, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-secondary text-secondary-foreground border-t border-border/20">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <a href="/" className="font-display text-2xl font-bold text-primary">
              Laurens
            </a>
            <p className="mt-2 text-sm text-secondary-foreground/70">
              Soluciones Tecnológicas
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-primary" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-primary" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-primary" />
            </a>
            <a
              href="mailto:contacto@laurens.com"
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-primary" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/20 text-center">
          <p className="text-sm text-secondary-foreground/60">
            © {new Date().getFullYear()} Laurens Soluciones Tecnológicas. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
