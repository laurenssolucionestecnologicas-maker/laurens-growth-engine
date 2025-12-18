import { Check } from "lucide-react";

const targets = [
  "Tienes un negocio y quieres más clientes por redes",
  "Quieres verte más profesional y vender sin estar improvisando",
  "Necesitas un equipo que te resuelva: contenido + anuncios + estrategia",
  "Quieres crecer con métricas reales, no suposiciones",
];

const TargetSection = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Esto es para ti si…
            </h2>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {targets.map((target, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-card rounded-2xl shadow-soft border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <p className="text-lg font-medium text-foreground/90 leading-relaxed">
                  {target}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetSection;
