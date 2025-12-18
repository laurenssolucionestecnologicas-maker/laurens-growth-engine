import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CTASection = () => {
  const whatsappLink = "https://wa.me/521234567890?text=Hola%2C%20me%20interesa%20una%20auditoría%20de%20marketing";

  return (
    <section className="py-20 lg:py-28 gradient-dark text-secondary-foreground relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Si tú tienes un buen servicio, lo que falta es que{" "}
            <span className="text-primary">la gente lo vea.</span>
          </h2>
          
          <p className="mt-6 text-xl text-secondary-foreground/80">
            Déjanos ayudarte a convertir tus redes en un canal real de ventas.
            Con estrategia, contenido y campañas bien hechas.
          </p>

          <Button
            variant="whatsapp"
            size="xl"
            className="mt-10"
            asChild
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-6 h-6" />
              Hablar por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
