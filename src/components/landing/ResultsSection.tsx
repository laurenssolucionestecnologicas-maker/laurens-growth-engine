import { MessageCircle, UserCheck, Shield, TrendingDown } from "lucide-react";
const results = [{
  icon: MessageCircle,
  text: "Más mensajes por WhatsApp / DM"
}, {
  icon: UserCheck,
  text: "Más leads calificados"
}, {
  icon: Shield,
  text: "Mejor presencia y confianza de marca"
}, {
  icon: TrendingDown,
  text: "Menor costo por lead con optimización"
}];
const ResultsSection = () => {
  return <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              ¿Qué puedes <span className="text-gradient">esperar</span>?
            </h2>
            
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              No vendemos "milagros". Vendemos un sistema.
              Dependiendo de tu oferta, presupuesto y consistencia, buscamos:
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {results.map((result, index) => <div key={index} className="group flex items-center gap-4 p-6 bg-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform border-secondary">
                  <result.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <p className="text-lg font-semibold text-foreground">
                  {result.text}
                </p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default ResultsSection;