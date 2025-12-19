import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, Lock } from "lucide-react";

// Declarar emailjs para TypeScript
declare global {
  interface Window {
    emailjs: {
      send: (
        serviceId: string,
        templateId: string,
        templateParams: Record<string, string>
      ) => Promise<{ status: number; text: string }>;
    };
  }
}

const ContactForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // 🔧 CONFIGURACIÓN DE EMAILJS
  const EMAILJS_CONFIG = {
    SERVICE_ID: "service_624it24",
    TEMPLATE_ID: "template_contact",
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      // 📥 Obtener valores
      const name = (formData.get("name") as string || "").trim();
      const business = (formData.get("business") as string || "").trim();
      const phone = (formData.get("phone") as string || "").trim();
      const email = (formData.get("email") as string || "").trim();
      const social = (formData.get("social") as string || "").trim();
      const product = (formData.get("product") as string || "").trim();
      const budget = (formData.get("budget") as string || "").trim();
      const goal = (formData.get("goal") as string || "").trim();

      // ✅ Validación
      if (!name || !business || !phone || !email || !product || !goal) {
        setErrorMsg("Completa todos los campos obligatorios.");
        setIsSubmitting(false);
        return;
      }

      if (!window.emailjs) {
        throw new Error("EmailJS no está disponible. Recarga la página.");
      }

      // 📧 Parámetros para EmailJS (alineados con el template)
      const templateParams = {
        from_name: name,
        from_email: email,
        reply_to: email,
        business: business,
        phone: phone,
        social: social || "No proporcionado",
        product: product,
        budget: budget || "No especificado",
        goal: goal,
        date: new Date().toLocaleString("es-ES"),
        to_name: "Laurens Growth Engine",
      };

      await window.emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      // ✅ Éxito
      form.reset();
      navigate("/gracias");

    } catch (err: unknown) {
      console.error("❌ Error EmailJS:", err);

      if (err instanceof Error) {
        if (err.message.includes("Origin not allowed")) {
          setErrorMsg("Error de configuración. Agrega tu dominio en EmailJS.");
        } else if (err.message.includes("Invalid template")) {
          setErrorMsg("Error: Verifica el ID del template.");
        } else if (err.message.includes("Invalid service")) {
          setErrorMsg("Error: Verifica el ID del servicio.");
        } else {
          setErrorMsg(err.message);
        }
      } else {
        setErrorMsg("Error inesperado. Intenta nuevamente.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="py-20 lg:py-28 bg-secondary text-secondary-foreground"
      id="contact-form"
    >
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Recibe tu auditoría y una{" "}
              <span className="text-slate-500">propuesta de acción</span>
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-card rounded-2xl p-8 shadow-medium text-card-foreground"
          >
            {/* Nombre / Negocio */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre y Apellido *</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Tu nombre completo"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="business">Nombre del negocio *</Label>
                <Input
                  id="business"
                  name="business"
                  required
                  placeholder="Tu empresa o marca"
                  className="h-12"
                />
              </div>
            </div>

            {/* Teléfono / Email */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono / WhatsApp *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+1 809 000 0000"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="correo@ejemplo.com"
                  className="h-12"
                />
              </div>
            </div>

            {/* Redes */}
            <div className="space-y-2">
              <Label htmlFor="social">Instagram / Facebook</Label>
              <Input
                id="social"
                name="social"
                placeholder="@tunegocio"
                className="h-12"
              />
            </div>

            {/* Producto */}
            <div className="space-y-2">
              <Label htmlFor="product">¿Qué vendes? *</Label>
              <Textarea
                id="product"
                name="product"
                required
                placeholder="Describe brevemente tu producto o servicio"
                className="min-h-[100px] resize-none"
              />
            </div>

            {/* Presupuesto / Objetivo */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="budget">Presupuesto mensual aproximado</Label>
                <Input
                  id="budget"
                  name="budget"
                  placeholder="Opcional"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="goal">Objetivo principal *</Label>
                <select
                  id="goal"
                  name="goal"
                  required
                  defaultValue=""
                  className="w-full h-12 px-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="leads">Generar leads</option>
                  <option value="sales">Aumentar ventas</option>
                  <option value="brand">Mejorar marca</option>
                </select>
              </div>
            </div>

            {/* Error */}
            {errorMsg && (
              <div className="text-sm rounded-lg border border-destructive/30 bg-destructive/10 text-destructive px-4 py-3">
                {errorMsg}
              </div>
            )}

            {/* Botón */}
            <Button
              type="submit"
              variant="cta"
              size="xl"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="animate-pulse mr-2">⏳</span>
                  Enviando...
                </>
              ) : (
                <>
                  Quiero mi auditoría gratis
                  <Send className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>

            <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
              <Lock className="w-4 h-4" />
              Tu información es confidencial. Solo la usamos para contactarte.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
