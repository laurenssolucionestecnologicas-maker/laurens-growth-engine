import { useEffect } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Contact = () => {
  useEffect(() => {
    // Load Zoho analytics script
    const script = document.createElement("script");
    script.id = "wf_anal";
    script.src =
      "https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=142cf809cc5dd680ab875ab40531395ba89ec3055c6d6d13c246a79d0ae3b19cc52768135d32eadde8ca4e046811e63bgid678c0483087a66a2e16e12ea0c766b61830e7c432e4b6e44ddf536b09c6805f1gid0c9b936713dc45c9549fe911b88591451712dfd3b91705a8e478cae8b8293d95gid11b062bc4c1571d13d211eafc88619f52c0b25efe4e13d844789cb1d4d1d798f&tw=40251956eae288008db90cd86a85ceb89e244c192b89cb78773e26105fa9fedc";
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
      const emailFld = form.querySelectorAll('[ftype="email"]') as NodeListOf<HTMLInputElement>;
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

    (window as any).checkMandatory7209532000000588074 = function () {
      const mndFileds = ["Company", "Last Name"];
      const fldLangVal = ["Empresa", "Apellidos"];
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
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
            Contacto
          </h1>
          
          <div className="bg-card rounded-xl shadow-lg p-6 md:p-8 border border-border">
            <h2 className="text-xl font-semibold mb-6 text-center text-foreground">
              FORMULARIO LAURENS
            </h2>
            
            <form
              id="webform7209532000000588074"
              action="https://crm.zoho.com/crm/WebToLeadForm"
              name="WebToLeads7209532000000588074"
              method="POST"
              onSubmit={handleSubmit}
              acceptCharset="UTF-8"
              className="space-y-4"
            >
              <input type="hidden" name="xnQsjsdp" value="cd5f79f390d6677f0ee0c956672acb6103b700d15c92b50526c7830dd308a003" />
              <input type="hidden" name="zc_gad" id="zc_gad" value="" />
              <input type="hidden" name="xmIwtLD" value="e50c94fa04ae5114214934ae0eff674a53ce54d7118f831946efd9848600fd3745c9f0bb69cabed25932213d06541aa2" />
              <input type="hidden" name="actionType" value="TGVhZHM=" />
              <input type="hidden" name="returnURL" value="null" />

              <div className="space-y-2">
                <label htmlFor="First_Name" className="block text-sm font-medium text-foreground">
                  Nombre
                </label>
                <input
                  type="text"
                  id="First_Name"
                  name="First Name"
                  maxLength={40}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="Last_Name" className="block text-sm font-medium text-foreground">
                  Apellidos <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="Last_Name"
                  name="Last Name"
                  maxLength={80}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="Email" className="block text-sm font-medium text-foreground">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="Email"
                  name="Email"
                  maxLength={100}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="Phone" className="block text-sm font-medium text-foreground">
                  Teléfono
                </label>
                <input
                  type="text"
                  id="Phone"
                  name="Phone"
                  maxLength={30}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="Company" className="block text-sm font-medium text-foreground">
                  Empresa <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="Company"
                  name="Company"
                  maxLength={200}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="formsubmit zcwf_button w-full bg-gradient-to-r from-[#0279FF] to-[#00A3F3] text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Enviar
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
