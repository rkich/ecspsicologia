import { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5561993730704?text=Olá! Gostaria de agendar uma consulta.";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-heading text-xl md:text-2xl font-bold text-primary">
          ECS Psicologia
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-8">
          <a href="#como-funciona" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Como Funciona
          </a>
          <Link
            to="/desenvolvimento-feminino"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Desafio Feminino
          </Link>
          <Link
            to="/emdr"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            EMDR
          </Link>
          <Link
            to="/avaliacao-psicologica"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Avaliação Psicológica
          </Link>
          <Button variant="hero" size="sm" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-1" />
              Agendar
            </a>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 space-y-4">
          <a
            href="#como-funciona"
            className="block text-sm text-muted-foreground hover:text-primary"
            onClick={() => setMobileOpen(false)}
          >
            Como Funciona
          </a>
          <Link
            to="/desenvolvimento-feminino"
            className="block text-sm text-muted-foreground hover:text-primary"
            onClick={() => setMobileOpen(false)}
          >
            Desafio Feminino
          </Link>
          <Link
            to="/emdr"
            className="block text-sm text-muted-foreground hover:text-primary"
            onClick={() => setMobileOpen(false)}
          >
            EMDR
          </Link>
          <Link
            to="/avaliacao-psicologica"
            className="block text-sm text-muted-foreground hover:text-primary"
            onClick={() => setMobileOpen(false)}
          >
            Avaliação Psicológica
          </Link>
          <Button variant="hero" size="sm" asChild className="w-full">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-1" />
              Agendar Consulta
            </a>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
