import { Instagram, Facebook, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    // LinkedIn Insight Tag
    (window as any)._linkedin_partner_id = "8529970";
    (window as any)._linkedin_data_partner_ids = (window as any)._linkedin_data_partner_ids || [];
    (window as any)._linkedin_data_partner_ids.push("8529970");

    (function(l: any) {
      if (!l) {
        (window as any).lintrk = function(a: any, b: any) {
          (window as any).lintrk.q.push([a, b]);
        };
        (window as any).lintrk.q = [];
      }
      const s = document.getElementsByTagName("script")[0];
      const b = document.createElement("script");
      b.type = "text/javascript";
      b.async = true;
      b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
      s.parentNode?.insertBefore(b, s);
    })((window as any).lintrk);
  }, []);

  return (
    <footer className="py-12 bg-secondary text-secondary-foreground border-t border-border/20">
      {/* LinkedIn noscript pixel */}
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{ display: 'none' }} 
          alt="" 
          src="https://px.ads.linkedin.com/collect/?pid=8529970&fmt=gif" 
        />
      </noscript>
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <a href="/" className="font-display text-2xl font-bold text-primary">
              Laurens
            </a>
            <p className="mt-2 text-sm text-secondary-foreground/70">
              Soluciones Tecnológicas
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/laurenssoluciones/"
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-primary" />
            </a>
            <a
              href="https://www.instagram.com/laurenssoluciones/"
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-primary" />
            </a>
            <a
              href="https://www.instagram.com/laurenssoluciones/"
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-primary" />
            </a>
            <a
              href="laurenssolucionestecnologicas@gmail.com"
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-primary" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/20 text-center space-y-3">
          <Link 
            to="/politica-de-privacidad" 
            className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
          >
            Política de Privacidad
          </Link>
          <p className="text-sm text-secondary-foreground/60">
            © {new Date().getFullYear()} Laurens Soluciones Tecnológicas. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
