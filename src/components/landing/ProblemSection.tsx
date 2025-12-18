import { AlertCircle, TrendingDown, Users, Palette } from "lucide-react";
const painPoints = [{
  icon: AlertCircle,
  text: "Publicas y no llega gente por DM"
}, {
  icon: TrendingDown,
  text: "Inviertes en anuncios y no sabes qué pasó con el dinero"
}, {
  icon: Users,
  text: "Tienes seguidores, pero no compras"
}, {
  icon: Palette,
  text: "Tu marca no se ve profesional ni consistente"
}];
const ProblemSection = () => {
  return <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            ¿Sientes que publicas y{" "}
            <span className="text-secondary">no pasa nada</span>?
          </h2>
          
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            La mayoría de negocios están activos en redes, pero no tienen un sistema para atraer clientes.
            Sin estrategia, tu contenido se vuelve "bonito" pero no genera ventas.
            <strong className="text-foreground"> Nosotros te ayudamos a convertir tu presencia digital en un motor de clientes.</strong>
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => <div key={index} className="group p-6 bg-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-border/50">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors bg-primary-foreground text-primary">
                <point.icon className="w-6 h-6 bg-primary-foreground text-primary-foreground" />
              </div>
              <p className="mt-4 font-medium text-foreground/90">{point.text}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ProblemSection;