import { Button } from "@/components/ui/button";
import { CheckCircle2, Instagram, FileText, TrendingUp, Calculator, Gift } from "lucide-react";
const includes = [{
  icon: Instagram,
  text: "Diagnóstico de tu Instagram/Facebook/TikTok"
}, {
  icon: FileText,
  text: "Recomendación de contenido para tu negocio"
}, {
  icon: TrendingUp,
  text: "Propuesta de campaña para generar leads"
}, {
  icon: Calculator,
  text: "Estimación de presupuesto sugerido (si aplica)"
}];
const LeadMagnetSection = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="py-20 lg:py-28 bg-secondary text-secondary-foreground">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-6">
                <Gift className="w-4 h-4" />
                <span className="text-sm font-semibold text-primary-foreground">Sin compromiso</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Te regalamos una{" "}
                <span className="text-primary">mini auditoría</span>{" "}
                rápida
              </h2>
              
              <div className="mt-8 space-y-4">
                {includes.map((item, index) => <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-lg text-secondary-foreground/90">{item.text}</span>
                  </div>)}
              </div>

              <Button variant="cta" size="xl" onClick={scrollToForm} className="mt-10">
                Solicitar auditoría
              </Button>
            </div>

            <div className="flex-1 relative">
              <div className="absolute inset-0 gradient-hero opacity-20 rounded-3xl blur-2xl" />
              <div className="relative bg-card/10 backdrop-blur-sm rounded-3xl p-8 border border-primary/20">
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map(i => <div key={i} className="aspect-square rounded-xl bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-primary animate-float" style={{
                    animationDelay: `${i * 0.2}s`
                  }} />
                    </div>)}
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-secondary-foreground/70">
                    Descubre el potencial de tu negocio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default LeadMagnetSection;