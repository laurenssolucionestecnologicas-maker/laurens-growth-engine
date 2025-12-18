import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowLeft, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center animate-float">
            <CheckCircle2 className="w-12 h-12 text-primary" />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
          ¡Gracias por contactarnos!
        </h1>

        <p className="text-xl text-muted-foreground mb-8">
          Hemos recibido tu solicitud de auditoría. Nuestro equipo te contactará 
          en menos de <strong className="text-primary">24 horas hábiles</strong>.
        </p>

        <div className="bg-card rounded-2xl p-6 mb-8 shadow-medium border border-border">
          <h2 className="text-lg font-semibold text-card-foreground mb-4">
            ¿Qué sigue ahora?
          </h2>
          <ul className="text-left space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span>Revisaremos tu información y analizaremos tu presencia digital</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span>Te contactaremos por WhatsApp o teléfono</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span>Recibirás tu auditoría personalizada sin compromiso</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/">
              <ArrowLeft className="w-5 h-5" />
              Volver al inicio
            </Link>
          </Button>
          
          <Button variant="whatsapp" size="lg" asChild>
            <a 
              href="https://wa.me/521234567890?text=Hola%2C%20acabo%20de%20solicitar%20mi%20auditoría%20y%20quiero%20más%20información" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              Escríbenos por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default ThankYou;
