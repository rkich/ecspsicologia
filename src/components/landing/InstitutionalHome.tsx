import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  BriefcaseBusiness,
  ClipboardCheck,
  Globe2,
  HeartHandshake,
  Mail,
  MessageCircle,
  PersonStanding,
  Sparkles,
  Users,
  Instagram,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import readingCorner from "@/assets/ecs-cantinho-leitura.jpeg.asset.json";
import clinicRoom from "@/assets/ecs-sala-estar.jpeg.asset.json";
import edinaldoPhoto from "@/assets/edinaldo-castro.png";

const WHATSAPP_URL =
  "https://wa.me/5561993730704?text=Olá! Gostaria de agendar uma consulta.";

const specialties = [
  {
    icon: PersonStanding,
    title: "Terapia Gestalt",
    description:
      "Uma abordagem que valoriza a experiência presente e a relação entre você e o mundo ao seu redor.",
  },
  {
    icon: Brain,
    title: "Tratamento de Traumas — EMDR",
    description:
      "Método reconhecido internacionalmente para reprocessar memórias traumáticas e retirar delas o peso emocional.",
    to: "/emdr",
  },
  {
    icon: Globe2,
    title: "Acompanhamento de Brasileiros no Exterior",
    description:
      "Suporte psicológico para quem vive a experiência (e os desafios) de morar fora do país.",
    to: "/brasileiros-no-exterior",
  },
  {
    icon: HeartHandshake,
    title: "Reconstrução de Relacionamentos",
    description:
      "Atendimento individual e de casais para restaurar a conexão e a confiança.",
  },
  {
    icon: ClipboardCheck,
    title: "Avaliações Psicológicas",
    description:
      "Psicotécnico e neuropsicológica, para fins de trânsito, porte de arma, concursos e outras exigências.",
    to: "/avaliacao-psicologica",
  },
  {
    icon: Sparkles,
    title: "Fortalecimento e Desenvolvimento da Mulher",
    description:
      "Um espaço para mulheres que sempre cuidaram de tudo voltarem o olhar para si mesmas.",
    to: "/desenvolvimento-feminino",
  },
  {
    icon: BriefcaseBusiness,
    title: "Perícia Psicológica",
    description: "Laudos técnicos para processos judiciais e outras finalidades legais.",
  },
  {
    icon: Users,
    title: "Amadurecimento do Indivíduo",
    description:
      "Acompanhamento para as questões próprias de cada fase da vida adulta e madura.",
  },
];

const Reveal = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const InstitutionalHome = () => {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = description?.content;

    document.title = "ECS Psicologia | Cuidado Psicológico Humano e Especializado";
    if (description) {
      description.content =
        "Atendimento psicológico ético, humano e especializado com Edinaldo Castro. Gestalt-terapia, EMDR, avaliações e acompanhamento individual e de casais.";
    }

    return () => {
      document.title = previousTitle;
      if (description && previousDescription) description.content = previousDescription;
    };
  }, []);

  return (
    <>
      <section className="relative min-h-[92vh] flex items-end overflow-hidden pt-24">
        <img
          src={readingCorner.url}
          alt="Cantinho de leitura da ECS Psicologia com poltrona bege e manta verde oliva"
          className="absolute inset-0 h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-foreground/55" />
        <div className="relative z-10 container mx-auto px-6 pb-16 pt-32 md:px-12 md:pb-24 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="mb-3 text-sm font-semibold uppercase text-primary-foreground/80">
              Clínica de Psicologia
            </p>
            <h1 className="font-heading text-5xl font-semibold leading-tight text-primary-foreground md:text-7xl">
              ECS Psicologia
            </h1>
            <p className="mt-4 font-heading text-2xl font-medium text-primary-foreground md:text-3xl">
              Escuta que acolhe. Ciência que transforma.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/90 md:text-lg">
              Um espaço de cuidado psicológico sério, humano e sem julgamentos — conduzido pelo psicólogo Edinaldo Castro, para pessoas que querem compreender a si mesmas e viver com mais leveza.
            </p>
            <Button variant="hero" size="lg" asChild className="mt-9 px-7 py-6 text-base">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle />
                Agende sua consulta
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 lg:gap-20">
          <Reveal>
            <img
              src={clinicRoom.url}
              alt="Sala de estar da ECS Psicologia com sofá de couro e quadros de araras"
              className="aspect-[4/5] w-full rounded-lg object-cover shadow-lg md:aspect-[5/6]"
              loading="lazy"
            />
          </Reveal>
          <Reveal className="max-w-xl">
            <p className="mb-3 text-sm font-semibold uppercase text-primary">Nossa essência</p>
            <h2 className="heading-section mb-7">Sobre a ECS Psicologia</h2>
            <p className="text-body-lg">
              Na ECS Psicologia, cada atendimento é pensado para respeitar o tempo e a história única de cada pessoa. Unimos rigor técnico e acolhimento genuíno para ajudar você a entender suas emoções, ressignificar experiências difíceis e construir uma vida mais plena — sozinho(a), em casal ou em qualquer fase da jornada.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="como-funciona" className="section-padding bg-sage-light scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase text-primary">Nossas especialidades</p>
            <h2 className="heading-section">Como podemos ajudar você</h2>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {specialties.map((specialty, index) => {
              const content = (
                <motion.article
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
                  className="group relative h-full rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                    <specialty.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="pr-5 font-heading text-xl font-semibold leading-snug">{specialty.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{specialty.description}</p>
                  {specialty.to && (
                    <ArrowUpRight className="absolute right-5 top-6 h-4 w-4 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  )}
                </motion.article>
              );

              return specialty.to ? (
                <Link key={specialty.title} to={specialty.to} className="block h-full" aria-label={`Saiba mais sobre ${specialty.title}`}>
                  {content}
                </Link>
              ) : (
                <div key={specialty.title}>{content}</div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal className="mx-auto w-full max-w-sm">
            <img
              src={edinaldoPhoto}
              alt="Edinaldo Castro, psicólogo clínico"
              className="aspect-[4/5] w-full rounded-lg object-cover object-top shadow-lg"
              loading="lazy"
            />
          </Reveal>
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase text-primary">Sobre o especialista</p>
            <h2 className="heading-section mb-2">Edinaldo Castro</h2>
            <p className="mb-7 font-heading text-xl font-medium text-sage-dark">Psicólogo Clínico</p>
            <p className="text-body-lg">
              Com mais de 20 anos de experiência clínica, Edinaldo Castro constrói, em cada atendimento, uma relação de confiança baseada em escuta técnica, ética e profundamente humanizada.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-sage-light">
        <Reveal className="container mx-auto max-w-3xl text-center">
          <h2 className="heading-section mb-5">Pronto para dar o primeiro passo?</h2>
          <p className="text-body-lg mb-8">Agende uma conversa inicial com Edinaldo Castro.</p>
          <Button variant="cta" size="lg" asChild className="px-8 py-6">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle />
              Agende sua consulta
            </a>
          </Button>
          <div className="mt-10 flex flex-col items-center justify-center gap-5 text-sm sm:flex-row sm:flex-wrap">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
              <MessageCircle className="h-4 w-4" /> 61 99373-0704
            </a>
            <a href="https://instagram.com/ecspsicologia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
              <Instagram className="h-4 w-4" /> @ecspsicologia
            </a>
            <a href="mailto:clinicaecs@gmail.com" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
              <Mail className="h-4 w-4" /> clinicaecs@gmail.com
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
};

export default InstitutionalHome;