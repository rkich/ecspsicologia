import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Cloud,
  HeartHandshake,
  Instagram,
  Mail,
  MessageCircle,
  ShieldAlert,
  Target,
  Users,
} from "lucide-react";
import heroPhoto from "@/assets/comunidade-lgbt-hero.jpeg";
import edinaldoPhoto from "@/assets/edinaldo-castro.png";

const WA = "https://wa.me/5561993730704";
const INITIAL_MESSAGE =
  "Olá! Gostaria de agendar uma conversa inicial e saber mais sobre o atendimento psicológico para pessoas LGBT.";
const waLink = `${WA}?text=${encodeURIComponent(INITIAL_MESSAGE)}`;

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const challenges = [
  {
    icon: Users,
    title: "Solidão",
    description:
      "Construída ao longo de anos, às vezes por afastamento da família, às vezes por relações que não se sustentaram, às vezes por um sentimento de não pertencer completamente a lugar nenhum.",
  },
  {
    icon: ShieldAlert,
    title: "Marcas do bullying e do preconceito",
    description:
      "Vividas na infância, na adolescência ou na vida adulta, e que continuam moldando a autoestima muito tempo depois.",
  },
  {
    icon: Target,
    title: "A sensação de precisar provar seu valor o tempo todo",
    description:
      "No trabalho, na família, nos relacionamentos — como se existir já não fosse suficiente.",
  },
  {
    icon: Cloud,
    title: "Um vazio difícil de explicar",
    description:
      "Que aparece mesmo quando, de fora, tudo parece \"resolvido\".",
  },
  {
    icon: HeartHandshake,
    title: "Dificuldade em construir ou manter relacionamentos",
    description:
      "Às vezes por medo, às vezes por feridas antigas que nunca foram tratadas.",
  },
];

const specialties = [
  "Gestalt-terapia",
  "EMDR (tratamento de traumas)",
  "Atendimento a brasileiros no exterior",
  "Autoconhecimento e fortalecimento pessoal",
  "Atendimento individual e de casais",
  "Compreensão da maturidade",
];

const ComunidadeLGBT = () => {
  useEffect(() => {
    const title =
      "Histórias de Luta, Histórias de Vitória — Atendimento Psicológico LGBT | ECS Psicologia";
    const description =
      "Espaço de acolhimento psicológico para pessoas gays maduras. Escuta técnica, ética e humanizada com Edinaldo Castro, psicólogo clínico com mais de 20 anos de experiência.";
    const previousTitle = document.title;
    const meta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
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
        {/* HERO */}
        <section className="section-padding overflow-hidden bg-sage-light">
          <div className="container mx-auto grid min-h-[calc(100vh-9rem)] max-w-6xl items-center gap-12 md:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="order-2 md:order-1"
            >
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-olive md:text-sm">
                Acolhimento e escuta
              </p>
              <h1 className="heading-display mb-7">
                Histórias de luta. Histórias de vitória.
              </h1>
              <div className="space-y-5 text-body-lg">
                <p>
                  Temos a primeira geração de pessoas gays que atravessou décadas de desafios — preconceito, perdas, doenças, silêncio — e chegou até aqui com histórias reais para contar. Histórias de resistência, de superação, e também de feridas que muitas vezes nunca tiveram espaço para serem cuidadas.
                </p>
                <p>
                  Se você é uma pessoa gay madura, ou está envelhecendo e sente que carrega mais do que consegue nomear, este espaço é para você.
                </p>
              </div>
              <Button variant="hero" size="lg" asChild className="mt-8 px-8 py-6 text-base">
                <a href={waLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agendar conversa inicial
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="order-1 md:order-2"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted shadow-lg">
                <img
                  src={heroPhoto}
                  alt="Edinaldo Castro em atendimento psicológico acolhedor, com pôster 'Aqui você pode ser quem é' ao fundo"
                  className="h-full w-full object-cover"
                  width={1170}
                  height={878}
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* DESAFIOS INVISÍVEIS */}
        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-6xl">
            <motion.div {...fade} className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="heading-section">
                Desafios que muitas vezes ficam invisíveis
              </h2>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {challenges.map((item, index) => (
                <motion.article
                  key={item.title}
                  {...fade}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  className="rounded-lg border border-border bg-card p-6 shadow-sm md:p-7"
                >
                  <item.icon
                    className="mb-5 h-7 w-7 text-olive"
                    strokeWidth={1.4}
                  />
                  <h3 className="mb-3 font-heading text-xl font-semibold md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </motion.article>
              ))}
            </div>

            <motion.div
              {...fade}
              className="mx-auto mt-12 max-w-3xl text-center text-body-lg"
            >
              <p>
                Quando essas dores não são cuidadas, elas não desaparecem — se transformam em traumas que continuam interferindo em como você vive, sozinho(a) ou em relacionamento.
              </p>
            </motion.div>
          </div>
        </section>

        {/* COMO A ECS PSICOLOGIA PODE AJUDAR */}
        <section className="section-padding bg-olive-light">
          <div className="container mx-auto max-w-4xl">
            <motion.div {...fade} className="text-center">
              <h2 className="heading-section mb-8">
                Como a ECS Psicologia pode ajudar
              </h2>
              <div className="space-y-6 text-body-lg">
                <p>
                  Você não precisa carregar isso em silêncio. Um espaço de escuta genuína, livre de julgamento, pode ajudar a reprocessar essas experiências, ressignificar sua história e construir uma relação mais leve consigo mesmo(a).
                </p>
                <p>
                  Na ECS Psicologia, o atendimento é conduzido pelo psicólogo Edinaldo Castro, com escuta técnica, ética e profundamente humanizada — um espaço seguro para pessoas gays que querem, finalmente, olhar para si com o cuidado que sempre mereceram.
                </p>
              </div>
              <p className="mx-auto mt-8 max-w-2xl text-xl font-medium leading-relaxed text-sage-dark md:text-2xl">
                Sua história importa. E ela pode continuar sendo escrita com mais leveza.
              </p>
              <Button
                variant="hero"
                size="lg"
                asChild
                className="mt-10 px-8 py-6 text-base"
              >
                <a href={waLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agendar conversa inicial
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* SOBRE O ESPECIALISTA */}
        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-5xl">
            <motion.h2
              {...fade}
              className="heading-section mb-14 text-center"
            >
              Sobre o especialista
            </motion.h2>
            <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
              <motion.div {...fade} className="flex justify-center">
                <div className="aspect-square w-full max-w-sm overflow-hidden rounded-lg bg-muted shadow-lg">
                  <img
                    src={edinaldoPhoto}
                    alt="Edinaldo Castro, psicólogo clínico"
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </motion.div>
              <motion.div
                {...fade}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                <h3 className="mb-2 font-heading text-3xl font-semibold md:text-4xl">
                  Edinaldo Castro
                </h3>
                <p className="mb-6 font-medium text-primary">
                  Psicólogo Clínico
                </p>
                <p className="text-body-lg">
                  Com mais de 20 anos de experiência clínica, Edinaldo Castro atua com Gestalt-terapia, EMDR (tratamento de traumas), atendimento a brasileiros no exterior, autoconhecimento e fortalecimento pessoal, atendimento individual e de casais, e compreensão da maturidade — sempre com escuta técnica, ética e profundamente humanizada.
                </p>
                <ul className="mt-6 space-y-2">
                  {specialties.map((specialty) => (
                    <li
                      key={specialty}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-olive" />
                      {specialty}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="section-padding bg-primary">
          <div className="container mx-auto max-w-3xl text-center">
            <motion.h2
              {...fade}
              className="mb-5 font-heading text-3xl font-semibold text-primary-foreground md:text-4xl"
            >
              Dê o primeiro passo para viver com mais leveza.
            </motion.h2>
            <motion.p
              {...fade}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-10 text-lg text-primary-foreground/90 md:text-xl"
            >
              Agende uma conversa inicial com Edinaldo Castro.
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
                <a href={waLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agendar conversa inicial
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

export default ComunidadeLGBT;
