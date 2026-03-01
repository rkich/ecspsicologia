import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import edinaldoPhoto from "@/assets/edinaldo-castro.png";

const specialties = [
  "Gestalt-terapia",
  "EMDR (tratamento de traumas)",
  "Atendimento a brasileiros no exterior",
  "Preparação psicológica para bariátrica",
  "Perícia psicológica",
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-sage-light">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="heading-section text-center mb-14"
        >
          Quem Conduz Seu Processo Terapêutico
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder - user will provide */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="w-72 h-96 md:w-80 md:h-[28rem] rounded-2xl bg-muted overflow-hidden shadow-lg">
              {/* Placeholder - awaiting user's uploaded photo */}
              <div className="w-full h-full flex items-center justify-center bg-accent">
                <div className="text-center p-6">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Award className="w-10 h-10 text-primary" />
                  </div>
                  <p className="font-heading text-2xl font-semibold text-sage-dark">Edinaldo Castro</p>
                  <p className="text-sm text-muted-foreground mt-2">Psicólogo Clínico</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-heading text-2xl md:text-3xl font-semibold mb-2">Edinaldo Castro</h3>
            <p className="text-muted-foreground mb-6">
              Psicólogo clínico com mais de 20 anos de experiência
            </p>

            <p className="text-body-lg font-medium mb-4 text-sage-dark">Especialista em:</p>
            <ul className="space-y-3 mb-8">
              {specialties.map((s, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="text-body-lg">{s}</span>
                </li>
              ))}
            </ul>

            <p className="text-body-lg italic font-heading text-xl text-sage-dark">
              Atendimento ético, técnico e profundamente humanizado.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
