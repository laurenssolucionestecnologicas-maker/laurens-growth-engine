import { Star, Quote } from "lucide-react";
const testimonials = [{
  quote: "El contenido se ve profesional y los anuncios empezaron a traer mensajes desde la primera semana.",
  author: "Cliente satisfecho",
  sector: "Sector: Servicios"
}, {
  quote: "Ahora tenemos orden: calendario, anuncios y seguimiento. Ya no improvisamos.",
  author: "Emprendedor local",
  sector: "Sector: E-commerce"
}];
const TestimonialsSection = () => {
  return <section className="py-20 lg:py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Lo que dicen nuestros <span className="text-sidebar-primary">clientes</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => <div key={index} className="relative p-8 bg-card rounded-2xl shadow-soft border border-border/50 hover:shadow-medium transition-all duration-300">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-destructive bg-primary-foreground" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
              </div>
              
              <blockquote className="text-lg text-foreground/90 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.sector}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;