import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Brain, Heart } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Terapia Estratégica para Brasileiros no Exterior",
    description: "Atendimento on-line em português, com compreensão profunda das nuances culturais brasileiras.",
  },
  {
    icon: Brain,
    title: "Tratamento de Traumas com EMDR",
    description: "Reprocessamento de memórias traumáticas para reduzir gatilhos emocionais e restaurar equilíbrio.",
  },
  {
    icon: Heart,
    title: "Desenvolvimento Emocional",
    description: "Fortalecimento de autoestima, segurança e inteligência emocional para decisões maduras e consistentes.",
  },
];

const Solution = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="heading-section text-center mb-14"
        >
          Atendimento Psicológico de Alto Nível
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-body-lg text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
