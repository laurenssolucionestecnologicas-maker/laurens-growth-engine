import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, Lock } from "lucide-react";

const ContactForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Redirect to thank you page
    navigate("/gracias");
  };
  return <section className="py-20 lg:py-28 bg-secondary text-secondary-foreground" id="contact-form">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Recibe tu auditoría y una{" "}
              <span className="text-slate-500">propuesta de acción</span>
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-card rounded-2xl p-8 shadow-medium text-card-foreground">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre y Apellido *</Label>
                <Input id="name" name="name" required placeholder="Tu nombre completo" className="h-12" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="business">Nombre del negocio *</Label>
                <Input id="business" name="business" required placeholder="Tu empresa o marca" className="h-12" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono / WhatsApp *</Label>
                <Input id="phone" name="phone" type="tel" required placeholder="+52 123 456 7890" className="h-12" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="social">Instagram / Facebook</Label>
                <Input id="social" name="social" placeholder="@tunegocio" className="h-12" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="product">¿Qué vendes? *</Label>
              <Textarea id="product" name="product" required placeholder="Describe brevemente tu producto o servicio" className="min-h-[100px] resize-none" />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="budget">Presupuesto mensual aproximado</Label>
                <Input id="budget" name="budget" placeholder="Opcional" className="h-12" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="goal">Objetivo principal *</Label>
                <select id="goal" name="goal" required className="w-full h-12 px-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                  <option value="">Selecciona una opción</option>
                  <option value="leads">Generar leads</option>
                  <option value="sales">Aumentar ventas</option>
                  <option value="brand">Mejorar marca</option>
                </select>
              </div>
            </div>

            <Button type="submit" variant="cta" size="xl" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Quiero mi auditoría gratis"}
              <Send className="w-5 h-5" />
            </Button>

            <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
              <Lock className="w-4 h-4" />
              Tu información es confidencial. Solo la usamos para contactarte.
            </p>
          </form>
        </div>
      </div>
    </section>;
};
export default ContactForm;