import { useEffect } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Contact = () => {
  useEffect(() => {
    // Load Zoho analytics script
    const script = document.createElement("script");
    script.id = "wf_anal";
    script.src =
      "https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=02387193543550ffbb26f6968bf3f215a13f07a3eb2e3f16458d042fd0066946eb1c5285eddcaceb160c84ae22f10195gid296ff1c5286a8f4104d453b58d41ddc4333580132b7a854e0bc28f32643e8a30gidf74a4c3823ab5bc81c3f146204c32f27794c36fbaf0df63f27b6b2f7c22c9e7fgid0f50b82a0d7be485d619a94290391f8c02799feed5e016588513138fe5e1b0a6&tw=2e9802b50154d7a7f43d34c186fea149051cad3ff16586842735705ed38da78f";
    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById("wf_anal");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  useEffect(() => {
    // Define validation functions globally
    (window as any).validateEmail7209532000000588074 = function () {
      const form = document.forms["WebToLeads7209532000000588074" as any];
      const emailFld = form.querySelectorAll('[data-ftype="email"]') as NodeListOf<HTMLInputElement>;
      for (let i = 0; i < emailFld.length; i++) {
        const emailVal = emailFld[i].value;
        if (emailVal.replace(/^\s+|\s+$/g, "").length !== 0) {
          const atpos = emailVal.indexOf("@");
          const dotpos = emailVal.lastIndexOf(".");
          if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
            alert("Introduzca una dirección de correo electrónico válida.");
            emailFld[i].focus();
            return false;
          }
        }
      }
      return true;
    };

    (window as any).privacyAlert7209532000000588074 = function () {
      const privacyCheckbox = document.getElementById("privacy_checkbox") as HTMLInputElement;
      if (privacyCheckbox && !privacyCheckbox.checked) {
        alert("Acepte la política de privacidad para continuar.");
        privacyCheckbox.focus();
        return false;
      }
      return true;
    };

    (window as any).checkMandatory7209532000000588074 = function () {
      const mndFileds = ["Last Name", "Email", "Phone"];
      const fldLangVal = ["Apellidos", "Correo electrónico", "Teléfono"];
      const form = document.forms["WebToLeads7209532000000588074" as any];
      
      for (let i = 0; i < mndFileds.length; i++) {
        const fieldObj = form[mndFileds[i]];
        if (fieldObj) {
          if (fieldObj.value.replace(/^\s+|\s+$/g, "").length === 0) {
            if (fieldObj.type === "file") {
              alert("Seleccione un archivo para cargar.");
              fieldObj.focus();
              return false;
            }
            alert(fldLangVal[i] + " no puede estar vacío.");
            fieldObj.focus();
            return false;
          } else if (fieldObj.nodeName === "SELECT") {
            if (fieldObj.options[fieldObj.selectedIndex].value === "-None-") {
              alert(fldLangVal[i] + " no puede ser nulo.");
              fieldObj.focus();
              return false;
            }
          } else if (fieldObj.type === "checkbox") {
            if (fieldObj.checked === false) {
              alert("Please accept " + fldLangVal[i]);
              fieldObj.focus();
              return false;
            }
          }
        }
      }

      if (!(window as any).validateEmail7209532000000588074()) {
        return false;
      }

      if (!(window as any).privacyAlert7209532000000588074()) {
        return false;
      }

      const urlparams = new URLSearchParams(window.location.search);
      if (urlparams.has("service") && urlparams.get("service") === "smarturl") {
        const webform = document.getElementById("webform7209532000000588074");
        const service = urlparams.get("service");
        const smarturlfield = document.createElement("input");
        smarturlfield.setAttribute("type", "hidden");
        smarturlfield.setAttribute("value", service || "");
        smarturlfield.setAttribute("name", "service");
        webform?.appendChild(smarturlfield);
      }

      const submitBtn = document.querySelector(".crmWebToEntityForm .formsubmit");
      if (submitBtn) {
        submitBtn.setAttribute("disabled", "true");
      }
      return true;
    };

    (window as any).tooltipShow7209532000000588074 = function (el: HTMLElement) {
      const tooltip = el.nextElementSibling as HTMLElement;
      const tooltipDisplay = tooltip.style.display;
      if (tooltipDisplay === "none") {
        const allTooltip = document.getElementsByClassName("zcwf_tooltip_over");
        for (let i = 0; i < allTooltip.length; i++) {
          (allTooltip[i] as HTMLElement).style.display = "none";
        }
        tooltip.style.display = "block";
      } else {
        tooltip.style.display = "none";
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    const result = (window as any).checkMandatory7209532000000588074();
    if (!result) {
      e.preventDefault();
    }
    (document as any).charset = "UTF-8";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container max-w-2xl mx-auto px-4">
          <div className="crmWebToEntityForm bg-card rounded-xl shadow-lg p-6 md:p-8 border border-border">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
              CONTÁCTANOS
            </h1>
            
            <form
              id="webform7209532000000588074"
              action="https://crm.zoho.com/crm/WebToLeadForm"
              name="WebToLeads7209532000000588074"
              method="POST"
              onSubmit={handleSubmit}
              acceptCharset="UTF-8"
              className="space-y-5"
            >
              <input type="hidden" name="xnQsjsdp" value="cd5f79f390d6677f0ee0c956672acb6103b700d15c92b50526c7830dd308a003" />
              <input type="hidden" name="zc_gad" id="zc_gad" value="" />
              <input type="hidden" name="xmIwtLD" value="e50c94fa04ae5114214934ae0eff674a53ce54d7118f831946efd9848600fd3745c9f0bb69cabed25932213d06541aa2" />
              <input type="hidden" name="actionType" value="TGVhZHM=" />
              <input type="hidden" name="returnURL" value="https://id-preview--3dd7ca1f-d09d-48d6-8191-cb3bcfe160e3.lovable.app/gracias" />

              {/* Nombre */}
              <div className="space-y-2">
                <label htmlFor="First_Name" className="block text-sm font-medium text-foreground">
                  Nombre
                </label>
                <div className="relative flex items-center gap-2">
                  <input
                    type="text"
                    id="First_Name"
                    name="First Name"
                    maxLength={40}
                    placeholder="Joel"
                    className="flex-1 px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  />
                  <span
                    className="cursor-pointer w-5 h-5 flex items-center justify-center bg-muted border border-border text-muted-foreground text-xs font-bold rounded-full hover:bg-muted/80"
                    onClick={(e) => (window as any).tooltipShow7209532000000588074(e.currentTarget)}
                  >
                    ?
                  </span>
                  <span className="zcwf_tooltip_over absolute right-0 top-full mt-1 bg-popover border border-border rounded-lg px-3 py-2 text-sm text-popover-foreground shadow-lg z-10" style={{ display: "none" }}>
                    Joel
                  </span>
                </div>
              </div>

              {/* Apellidos */}
              <div className="space-y-2">
                <label htmlFor="Last_Name" className="block text-sm font-medium text-foreground">
                  Apellidos <span className="text-destructive">*</span>
                </label>
                <div className="relative flex items-center gap-2">
                  <input
                    type="text"
                    id="Last_Name"
                    name="Last Name"
                    maxLength={80}
                    placeholder="Feliz"
                    className="flex-1 px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  />
                  <span
                    className="cursor-pointer w-5 h-5 flex items-center justify-center bg-muted border border-border text-muted-foreground text-xs font-bold rounded-full hover:bg-muted/80"
                    onClick={(e) => (window as any).tooltipShow7209532000000588074(e.currentTarget)}
                  >
                    ?
                  </span>
                  <span className="zcwf_tooltip_over absolute right-0 top-full mt-1 bg-popover border border-border rounded-lg px-3 py-2 text-sm text-popover-foreground shadow-lg z-10" style={{ display: "none" }}>
                    Feliz
                  </span>
                </div>
              </div>

              {/* Correo electrónico */}
              <div className="space-y-2">
                <label htmlFor="Email" className="block text-sm font-medium text-foreground">
                  Correo electrónico <span className="text-destructive">*</span>
                </label>
                <div className="relative flex items-center gap-2">
                  <input
                    type="text"
                    id="Email"
                    name="Email"
                    maxLength={100}
                    placeholder="Hola@gmail.com"
                    data-ftype="email"
                    className="flex-1 px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  />
                  <span
                    className="cursor-pointer w-5 h-5 flex items-center justify-center bg-muted border border-border text-muted-foreground text-xs font-bold rounded-full hover:bg-muted/80"
                    onClick={(e) => (window as any).tooltipShow7209532000000588074(e.currentTarget)}
                  >
                    ?
                  </span>
                  <span className="zcwf_tooltip_over absolute right-0 top-full mt-1 bg-popover border border-border rounded-lg px-3 py-2 text-sm text-popover-foreground shadow-lg z-10" style={{ display: "none" }}>
                    Hola@gmail.com
                  </span>
                </div>
              </div>

              {/* Teléfono */}
              <div className="space-y-2">
                <label htmlFor="Phone" className="block text-sm font-medium text-foreground">
                  Teléfono <span className="text-destructive">*</span>
                </label>
                <div className="relative flex items-center gap-2">
                  <input
                    type="text"
                    id="Phone"
                    name="Phone"
                    maxLength={30}
                    placeholder="809999999"
                    className="flex-1 px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  />
                  <span
                    className="cursor-pointer w-5 h-5 flex items-center justify-center bg-muted border border-border text-muted-foreground text-xs font-bold rounded-full hover:bg-muted/80"
                    onClick={(e) => (window as any).tooltipShow7209532000000588074(e.currentTarget)}
                  >
                    ?
                  </span>
                  <span className="zcwf_tooltip_over absolute right-0 top-full mt-1 bg-popover border border-border rounded-lg px-3 py-2 text-sm text-popover-foreground shadow-lg z-10" style={{ display: "none" }}>
                    809999999
                  </span>
                </div>
              </div>

              {/* Empresa */}
              <div className="space-y-2">
                <label htmlFor="Company" className="block text-sm font-medium text-foreground">
                  Empresa
                </label>
                <input
                  type="text"
                  id="Company"
                  name="Company"
                  maxLength={200}
                  placeholder="Tu empresa"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                />
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="pt-2">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy_checkbox"
                    className="mt-1 w-4 h-4 accent-primary rounded"
                  />
                  <label htmlFor="privacy_checkbox" className="text-sm text-muted-foreground leading-relaxed">
                    Al enviar este formulario, el usuario acepta la Política de Privacidad.{" "}
                    <a
                      href="/politica-de-privacidad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Política de privacidad
                    </a>
                  </label>
                </div>
                <p className="text-xs text-destructive mt-1 hidden" id="privacyErr">
                  Acepte por favor
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="formsubmit flex-1 bg-gradient-to-r from-[#0279FF] to-[#00A3F3] text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Enviar
                </button>
                <button
                  type="reset"
                  className="px-6 py-3 border border-border rounded-lg text-foreground hover:bg-muted transition-colors"
                >
                  Restablecer
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
