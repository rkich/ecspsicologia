import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  AlertCircle,
  ArrowLeft,
  Brain,
  CalendarCheck,
  ClipboardList,
  Globe,
  Heart,
  Instagram,
  Mail,
  MessageCircle,
  Video,
} from "lucide-react";
import heroPhoto from "@/assets/brasileiros-no-exterior-hero.jpeg";
import edinaldoPhoto from "@/assets/edinaldo-castro.png";

const WA = "https://wa.me/5561993730704";
const INITIAL_MESSAGE =
  "Olá! Gostaria de agendar uma consulta e saber mais sobre o atendimento psicológico para brasileiros no exterior.";
const waLink = `${WA}?text=${encodeURIComponent(INITIAL_MESSAGE)}`;

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const painPoints = [
  "Sensação constante de não pertencimento",
  "Ansiedade elevada longe da família",
  'Sobrecarga emocional para "dar conta de tudo"',
  "Dificuldade de se expressar emocionalmente em outro idioma",
  "Traumas antigos sendo ativados pela nova realidade",
];

const services = [
  {
    icon: Globe,
    title: "Terapia Estratégica para Brasileiros no Exterior",
    description:
      "Atendimento on-line em português, com compreensão profunda das nuances culturais brasileiras.",
  },
  {
    icon: Brain,
    title: "Tratamento de Traumas com EMDR",
    description:
      "Reprocessamento de memórias traumáticas para reduzir gatilhos emocionais e restaurar equilíbrio.",
  },
  {
    icon: Heart,
    title: "Desenvolvimento Emocional",
    description:
      "Fortalecimento de autoestima, segurança e inteligência emocional para decisões maduras e consistentes.",
  },
];

const specialties = [
  "Gestalt-terapia",
  "EMDR (tratamento de traumas)",
  "Atendimento a brasileiros no exterior",
  "Preparação psicológica para bariátrica",
  "Perícia psicológica",
];

const steps = [
  { icon: MessageCircle, title: "Contato via WhatsApp", step: "1" },
  { icon: CalendarCheck, title: "Agendamento da sessão", step: "2" },
  { icon: Video, title: "Atendimento on-line ou presencial", step: "3" },
  { icon: ClipboardList, title: "Plano terapêutico personalizado", step: "4" },
];

const BrasileirosNoExterior = () => {
  useEffect(() => {
    const title =
      "Atendimento Psicológico para Brasileiros no Exterior | ECS Psicologia";
    const description =
      "Terapia on-line em português com Edinaldo Castro, psicólogo com mais de 20 anos de experiência. Atendimento especializado para brasileiros no exterior: EMDR, ansiedade e adaptação cultural.";
    const previousTitle = document.title;
    const meta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    const previousDescription = meta?.content ?? "";

    document.title = title;
    meta?.setAttribute("content", description);

    return () => {
      document.title = previousTitle;
      meta?.setAttribute("content", previousDescription);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link
            to="/"
            className="font-heading text-xl font-bold text-primary md:text-2xl"
          >
            ECS Psicologia
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao site
          </Link>
        </div>
      </header>

      <main className="pt-16">
        {/* BLOCO 1 — HERO */}
        <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
          <img
            src={heroPhoto}
            alt="Edinaldo Castro em consultório com notebook, mapa-múndi ao fundo e elementos de atendimento online para brasileiros no exterior"
            className="absolute inset-0 h-full w-full object-cover object-center md:object-[center_35%]"
            width={1374}
            height={1029}
            loading="eager"
          />
          <div className="absolute inset-0 bg-background/65 md:bg-background/55" />
          <div className="relative z-10 flex min-h-[calc(100vh-4rem)] items-center">
            <div className="container mx-auto px-6 py-24 md:px-12 lg:px-24">
              <div className="max-w-4xl text-center md:text-left">
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-primary md:text-base"
                >
                  Brasileiros no Exterior
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="heading-display mb-6"
                >
                  Atendimento Psicológico Premium para Brasileiros no Exterior
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.25 }}
                  className="max-w-2xl text-body-lg md:mx-0 mx-auto mb-8"
                >
                  Terapia on-line em português com mais de 20 anos de
                  experiência clínica. Tratamento de traumas com EMDR, ansiedade
                  e desafios da vida internacional!
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-wrap justify-center md:justify-start gap-3 mb-10 text-sm"
                >
                  {[
                    "+20 anos de experiência",
                    "Atendimento internacional",
                    "Confidencialidade absoluta",
                  ].map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full bg-accent px-4 py-2 font-medium text-accent-foreground"
                    >
                      {badge}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start"
                >
                  <Button variant="hero" size="lg" asChild className="text-base px-8 py-6">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Agendar Consulta pelo WhatsApp
                    </a>
                  </Button>
                  <Button
                    variant="heroOutline"
                    size="lg"
                    asChild
                    className="text-base px-8 py-6"
                  >
                    <a href="#como-funciona">Quero Saber Como Funciona</a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* BLOCO 2 — POSICIONAMENTO DE AUTORIDADE */}
        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-3xl">
            <motion.h2
              {...fade}
              className="heading-section mb-10 text-center"
            >
              Excelência Clínica para Quem Vive Grandes Desafios
            </motion.h2>

            <motion.div {...fade} className="space-y-6 text-body-lg">
              <p>
                Viver fora do Brasil exige força emocional constante. Mudanças
                culturais, pressão profissional, solidão e adaptação impactam
                profundamente a saúde mental.
              </p>
              <p>
                A{" "}
                <strong className="font-semibold text-sage-dark">
                  ECS Clínica de Psicologia
                </strong>{" "}
                oferece um acompanhamento estruturado, estratégico e
                confidencial, conduzido por Edinaldo Castro, psicólogo com mais
                de duas décadas de experiência clínica.
              </p>
              <p className="pt-4 text-center font-heading text-xl font-medium italic text-sage-dark md:text-2xl">
                Aqui, o cuidado emocional não é genérico.
                <br />
                É profundo, técnico e personalizado.
              </p>
            </motion.div>
          </div>
        </section>

        {/* BLOCO 3 — PRINCIPAL DOR DO PÚBLICO */}
        <section className="section-padding bg-sage-light">
          <div className="container mx-auto max-w-3xl">
            <motion.h2
              {...fade}
              className="heading-section mb-12 text-center"
            >
              Você pode estar vivendo isso:
            </motion.h2>

            <div className="mb-10 space-y-4">
              {painPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="flex items-start gap-4 rounded-lg bg-card p-5 shadow-sm"
                >
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-body-lg">{point}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              {...fade}
              className="space-y-2 text-center"
            >
              <p className="text-lg font-semibold text-sage-dark">
                Se identificou?
              </p>
              <p className="font-heading text-xl italic text-sage-dark md:text-2xl">
                Você não precisa enfrentar isso sozinho.
              </p>
            </motion.div>
          </div>
        </section>

        {/* BLOCO 4 — SOLUÇÃO PREMIUM */}
        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-5xl">
            <motion.h2
              {...fade}
              className="heading-section mb-14 text-center"
            >
              Atendimento Psicológico de Alto Nível
            </motion.h2>

            <div className="grid gap-8 md:grid-cols-3">
              {services.map((service, i) => (
                <motion.article
                  key={service.title}
                  {...fade}
                  transition={{ duration: 0.6, delay: 0.15 * i }}
                  className="rounded-xl border border-border bg-card p-8 text-center shadow-sm transition-shadow duration-300 hover:shadow-md"
                >
                  <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-accent">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-4 font-heading text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* BLOCO 5 — SOBRE O PROFISSIONAL */}
        <section className="section-padding bg-olive-light">
          <div className="container mx-auto max-w-5xl">
            <motion.h2
              {...fade}
              className="heading-section mb-14 text-center"
            >
              Quem Conduz Seu Processo Terapêutico
            </motion.h2>

            <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
              <motion.div {...fade} className="flex justify-center">
                <div className="aspect-square w-full max-w-sm overflow-hidden rounded-lg bg-muted shadow-lg">
                  <img
                    src={edinaldoPhoto}
                    alt="Edinaldo Castro, psicólogo clínico especializado em atendimento a brasileiros no exterior"
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </motion.div>

              <motion.div {...fade} transition={{ duration: 0.7, delay: 0.15 }}>
                <h3 className="mb-2 font-heading text-3xl font-semibold md:text-4xl">
                  Edinaldo Castro
                </h3>
                <p className="mb-6 font-medium text-primary">
                  Psicólogo clínico com mais de 20 anos de experiência
                </p>
                <p className="mb-4 font-heading text-xl font-medium text-sage-dark">
                  Especialista em:
                </p>
                <ul className="mb-8 space-y-3">
                  {specialties.map((specialty) => (
                    <li key={specialty} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <span className="text-body-lg">{specialty}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-heading text-xl italic text-sage-dark">
                  Atendimento ético, técnico e profundamente humanizado.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* BLOCO 6 — COMO FUNCIONA */}
        <section id="como-funciona" className="section-padding bg-background">
          <div className="container mx-auto max-w-4xl">
            <motion.h2
              {...fade}
              className="heading-section mb-4 text-center"
            >
              Simples, Direto e Confidencial
            </motion.h2>

            <motion.p
              {...fade}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-14 text-center text-muted-foreground"
            >
              Horários adaptáveis a fusos internacionais.
            </motion.p>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {steps.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.15 * i }}
                  className="text-center"
                >
                  <div className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent">
                    <s.icon className="h-7 w-7 text-primary" />
                    <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {s.step}
                    </span>
                  </div>
                  <p className="text-sm font-medium">{s.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* BLOCO 7 — CTA FINAL */}
        <section className="section-padding bg-primary">
          <div className="container mx-auto max-w-3xl text-center">
            <motion.h2
              {...fade}
              className="mb-5 font-heading text-3xl font-semibold text-primary-foreground md:text-4xl"
            >
              Sua saúde emocional não pode esperar.
            </motion.h2>

            <motion.p
              {...fade}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-10 text-lg text-primary-foreground/90 md:text-xl"
            >
              Se você está pronto para um acompanhamento psicológico sério,
              estruturado e eficaz, agende sua sessão.
            </motion.p>

            <motion.div
              {...fade}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10 flex flex-col items-center justify-center gap-5 text-primary-foreground/90 sm:flex-row sm:flex-wrap"
            >
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" /> 61 99373-0704
              </a>
              <a
                href="https://instagram.com/ecspsicologia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-primary-foreground"
              >
                <Instagram className="h-4 w-4" /> @ecspsicologia
              </a>
              <a
                href="mailto:clinicaecs@gmail.com"
                className="flex items-center gap-2 transition-colors hover:text-primary-foreground"
              >
                <Mail className="h-4 w-4" /> clinicaecs@gmail.com
              </a>
            </motion.div>

            <motion.div {...fade} transition={{ duration: 0.6, delay: 0.3 }}>
              <Button
                size="lg"
                asChild
                className="bg-background px-10 py-7 text-base font-semibold text-primary hover:bg-background/90"
              >
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agendar Atendimento Agora
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background px-6 py-8 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} ECS Psicologia — Todos os direitos
          reservados
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          Atendimento realizado por psicólogo registrado no Brasil (CRP 14399),
          em conformidade com as normas de atendimento para brasileiros no
          exterior.
        </p>
      </footer>

      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        aria-label="Contato pelo WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-primary-foreground" />
      </a>
    </div>
  );
};

export default BrasileirosNoExterior;
