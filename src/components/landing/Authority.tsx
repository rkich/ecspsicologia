import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Authority = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="heading-section text-center mb-10"
        >
          Excelência Clínica para Quem Vive Grandes Desafios
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-body-lg"
        >
          <p>
            Viver fora do Brasil exige força emocional constante.
            Mudanças culturais, pressão profissional, solidão e adaptação impactam profundamente a saúde mental.
          </p>
          <p>
            A <strong className="text-sage-dark font-semibold">ECS Clínica de Psicologia</strong> oferece um acompanhamento estruturado, estratégico e confidencial, conduzido por Edinaldo Castro, psicólogo com mais de duas décadas de experiência clínica.
          </p>
          <p className="font-medium text-sage-dark italic font-heading text-xl md:text-2xl text-center pt-4">
            Aqui, o cuidado emocional não é genérico.<br />
            É profundo, técnico e personalizado.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Authority;
