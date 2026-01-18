import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container max-w-3xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <h1 className="font-display text-4xl font-bold text-foreground mb-8">
          Política de Privacidad
        </h1>

        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p>
            Al enviar este formulario, el usuario acepta y autoriza que <strong className="text-foreground">Laurens Soluciones Tecnológicas</strong> recopile, almacene y utilice la información proporcionada con el único propósito de gestionar solicitudes de servicios, brindar atención al cliente y enviar comunicaciones relacionadas con los servicios ofrecidos.
          </p>

          <p>
            La información personal (como nombre, correo electrónico, número de teléfono u otros datos suministrados) será tratada de manera confidencial y no será compartida con terceros, salvo cuando sea estrictamente necesario para la prestación del servicio o cuando la ley lo requiera.
          </p>

          <p>
            El usuario acepta recibir comunicaciones vía correo electrónico, llamadas o mensajes relacionados con su solicitud. En cualquier momento, podrá solicitar la modificación o eliminación de sus datos personales contactándonos a través de nuestros canales oficiales.
          </p>

          <p>
            <strong className="text-foreground">Laurens Soluciones Tecnológicas</strong> se compromete a proteger la información del usuario mediante medidas de seguridad adecuadas y conforme a las leyes de protección de datos aplicables.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
