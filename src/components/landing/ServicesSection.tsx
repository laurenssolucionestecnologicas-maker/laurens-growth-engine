import { Button } from "@/components/ui/button";
import { Target, Palette, Megaphone, PenTool, BarChart3, ArrowRight } from "lucide-react";
const services = [{
  icon: Target,
  title: "Estrategia de marketing",
  description: "Calendario, pilares de contenido, oferta y guión de ventas por WhatsApp."
}, {
  icon: PenTool,
  title: "Creación de contenido",
  description: "Diseños, carruseles, reels, historias, guiones y copies listos."
}, {
  icon: Megaphone,
  title: "Publicidad (Meta Ads / Google Ads)",
  description: "Campañas para leads, WhatsApp, tráfico y remarketing."
}, {
  icon: Palette,
  title: "Branding y diseño visual",
  description: "Plantillas, estilo gráfico, identidad y consistencia."
}, {
  icon: BarChart3,
  title: "Optimización y medición",
  description: "KPIs claros: costo por lead, conversiones, mensajes y ventas."
}];
const ServicesSection = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="py-20 lg:py-28" id="servicios">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Lo que hacemos en{" "}
            <span className="text-gradient">Laurens</span>{" "}
            para que tu marca crezca
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => <div key={index} className="group relative p-8 bg-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border border-border/50 overflow-hidden">
              <div className="absolute inset-0 gradient-hero opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center transition-colors bg-destructive-foreground">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>)}
        </div>

        <div className="mt-12 text-center">
          <Button variant="hero" size="lg" onClick={scrollToForm} className="group">
            Quiero que me hagan el plan
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>;
};
export default ServicesSection;