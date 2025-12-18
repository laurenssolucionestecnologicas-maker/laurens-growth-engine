import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿En cuánto tiempo se ven resultados?",
    answer: "Depende del negocio y la oferta. Normalmente se ven señales en las primeras semanas, y mejoras sostenidas en 30–60 días con optimización.",
  },
  {
    question: "¿Tengo que salir en cámara?",
    answer: "No necesariamente. Podemos crear contenido con recursos visuales, voz en off, UGC, animaciones o enfoque educativo.",
  },
  {
    question: "¿Ustedes también corren los anuncios?",
    answer: "Sí. Configuración, creativos, copy, segmentación, pruebas A/B y optimización.",
  },
  {
    question: "¿Trabajan con cualquier tipo de negocio?",
    answer: "Sí, pero evaluamos si tu oferta es viable para campañas. Si algo no conviene, te lo decimos claro.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30" id="faq">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Preguntas <span className="text-primary">frecuentes</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 border border-border/50 shadow-soft"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
