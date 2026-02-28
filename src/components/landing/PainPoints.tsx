import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle } from "lucide-react";

const painPoints = [
  "Sensação constante de não pertencimento",
  "Ansiedade elevada longe da família",
  "Sobrecarga emocional para \"dar conta de tudo\"",
  "Dificuldade de se expressar emocionalmente em outro idioma",
  "Traumas antigos sendo ativados pela nova realidade",
];

const PainPoints = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-sage-light">
      <div className="container mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="heading-section text-center mb-12"
        >
          Você pode estar vivendo isso:
        </motion.h2>

        <div className="space-y-4 mb-10">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="flex items-start gap-4 bg-card rounded-lg p-5 shadow-sm"
            >
              <AlertCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <span className="text-body-lg">{point}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center space-y-2"
        >
          <p className="text-lg font-semibold text-sage-dark">Se identificou?</p>
          <p className="text-body-lg font-heading text-xl italic text-sage-dark">
            Você não precisa enfrentar isso sozinho.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPoints;
