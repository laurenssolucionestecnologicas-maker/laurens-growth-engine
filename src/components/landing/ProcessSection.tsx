import { 
  Search, 
  Calendar, 
  Clapperboard, 
  Rocket, 
  TrendingUp 
} from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Diagnóstico",
    description: "Entendemos tu negocio, tu cliente ideal y tu oferta.",
  },
  {
    icon: Calendar,
    number: "02",
    title: "Estrategia y calendario",
    description: "Definimos contenido, ángulos, mensajes, formatos y frecuencia.",
  },
  {
    icon: Clapperboard,
    number: "03",
    title: "Producción",
    description: "Creamos diseños, videos, guiones, copies y piezas publicitarias.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Publicación y anuncios",
    description: "Programamos contenido y lanzamos campañas enfocadas en resultados.",
  },
  {
    icon: TrendingUp,
    number: "05",
    title: "Reporte y mejora",
    description: "Optimizamos semanalmente y escalamos lo que funciona.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30" id="proceso">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Así trabajamos contigo{" "}
            <span className="text-primary">(simple y claro)</span>
          </h2>
        </div>

        <div className="mt-16 relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Card */}
                <div className="relative z-10 bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50 text-center group hover:-translate-y-2">
                  {/* Number badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {step.number.slice(-1)}
                  </div>
                  
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mt-2 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
