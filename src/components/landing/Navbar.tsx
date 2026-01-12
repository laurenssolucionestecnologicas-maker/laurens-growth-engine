import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="font-display text-2xl font-bold text-gradient">
            Laurens
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('proceso')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Proceso
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </button>
            <Link
              to="/contacto"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contacto
            </Link>
            <Button
              variant="cta"
              size="sm"
              onClick={() => scrollToSection('contact-form')}
            >
              Evaluación gratis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('servicios')}
                className="text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('proceso')}
                className="text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Proceso
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                FAQ
              </button>
              <Link
                to="/contacto"
                className="text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
              <Button
                variant="cta"
                size="default"
                onClick={() => scrollToSection('contact-form')}
                className="w-full"
              >
                Evaluación gratis
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
