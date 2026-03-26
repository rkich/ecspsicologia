import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Authority from "@/components/landing/Authority";
import PainPoints from "@/components/landing/PainPoints";
import Solution from "@/components/landing/Solution";
import About from "@/components/landing/About";
import HowItWorks from "@/components/landing/HowItWorks";
import FinalCTA from "@/components/landing/FinalCTA";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Authority />
        <PainPoints />
        <Solution />
        <About />
        <HowItWorks />
        <FinalCTA />
      </main>
      <footer className="bg-background border-t border-border py-8 px-6 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} ECS Psicologia — Todos os direitos reservados
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Atendimento realizado por psicólogo registrado no Brasil (CRP 14399), em conformidade com as normas de atendimento para brasileiros no exterior.
        </p>
      </footer>
      <WhatsAppButton />
    </>
  );
};

export default Index;
