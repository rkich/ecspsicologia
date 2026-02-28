import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, CalendarCheck, Video, ClipboardList } from "lucide-react";

const steps = [
  { icon: MessageCircle, title: "Contato via WhatsApp", step: "1" },
  { icon: CalendarCheck, title: "Agendamento da sessão", step: "2" },
  { icon: Video, title: "Atendimento on-line ou presencial", step: "3" },
  { icon: ClipboardList, title: "Plano terapêutico personalizado", step: "4" },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="como-funciona" className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="heading-section text-center mb-4"
        >
          Simples, Direto e Confidencial
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-muted-foreground mb-14"
        >
          Horários adaptáveis a fusos internacionais.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4 relative">
                <s.icon className="w-7 h-7 text-primary" />
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {s.step}
                </span>
              </div>
              <p className="font-medium text-sm">{s.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
