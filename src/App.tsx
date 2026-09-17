import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Sublocacao from "./pages/Sublocacao";
import DesafioFeminino from "./pages/DesafioFeminino";
import Emdr from "./pages/Emdr";
import AvaliacaoPsicologica from "./pages/AvaliacaoPsicologica";
import ComunidadeLGBT from "./pages/ComunidadeLGBT";
import BrasileirosNoExterior from "./pages/BrasileirosNoExterior";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sublocacao" element={<Sublocacao />} />
          <Route path="/sublocacao-consultorio" element={<Sublocacao />} />
          <Route path="/desenvolvimento-feminino" element={<DesafioFeminino />} />
          <Route path="/emdr" element={<Emdr />} />
          <Route path="/avaliacao-psicologica" element={<AvaliacaoPsicologica />} />
          <Route path="/comunidade-lgbt" element={<ComunidadeLGBT />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
