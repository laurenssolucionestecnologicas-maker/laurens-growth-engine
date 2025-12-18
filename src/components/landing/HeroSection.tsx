import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-5" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight animate-fade-up">
            Haz que tu negocio{" "}
            <span className="text-gradient">venda más</span>{" "}
            con contenido y campañas que sí convierten.
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up-delay-1">
            En Laurens Soluciones Tecnológicas creamos contenido estratégico y gestionamos publicidad digital para que te lleguen clientes reales (no solo likes).
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center animate-fade-up-delay-2">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground/80">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>Estrategia + Creatividad + Resultados medibles</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-foreground/80">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>Reels, anuncios, diseños y copy listos</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-foreground/80">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>Seguimiento y optimización semanal</span>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 animate-fade-up-delay-3">
            <Button 
              variant="cta" 
              size="xl" 
              onClick={scrollToForm}
              className="group"
            >
              Quiero una evaluación gratis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-muted-foreground">
              Respuesta en menos de 24 horas hábiles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
