import Header from "@/components/landing/Header";
import InstitutionalHome from "@/components/landing/InstitutionalHome";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <InstitutionalHome />
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
