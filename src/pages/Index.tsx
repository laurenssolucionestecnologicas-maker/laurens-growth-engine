import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import ServicesSection from "@/components/landing/ServicesSection";
import LeadMagnetSection from "@/components/landing/LeadMagnetSection";
import ProcessSection from "@/components/landing/ProcessSection";
import TargetSection from "@/components/landing/TargetSection";
import ResultsSection from "@/components/landing/ResultsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import ContactForm from "@/components/landing/ContactForm";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16 lg:pt-20">
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <LeadMagnetSection />
        <ProcessSection />
        <TargetSection />
        <ResultsSection />
        <TestimonialsSection />
        <ContactForm />
        <FAQSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
