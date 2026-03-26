import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_URL = "https://wa.me/5561993730704?text=Olá! Gostaria de agendar uma consulta.";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/60" />

      <div className="relative z-10 container mx-auto section-padding text-center max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="heading-display mb-6"
        >
          Atendimento Psicológico Premium para Brasileiros no Exterior
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-body-lg max-w-2xl mx-auto mb-8"
        >
          Terapia on-line em português com mais de 20 anos de experiência clínica.
          Tratamento de traumas com EMDR, ansiedade e desafios da vida internacional!
        </motion.p>

        {/* Authority badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-10 text-sm"
        >
          {["+20 anos de experiência", "Atendimento internacional", "Confidencialidade absoluta"].map((badge) => (
            <span
              key={badge}
              className="px-4 py-2 rounded-full bg-accent text-accent-foreground font-medium"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="hero" size="lg" asChild className="text-base px-8 py-6">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2" />
              Agendar Consulta pelo WhatsApp
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild className="text-base px-8 py-6">
            <a href="#como-funciona">
              Quero Saber Como Funciona
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-primary opacity-60" />
      </motion.div>
    </section>
  );
};

export default Hero;
