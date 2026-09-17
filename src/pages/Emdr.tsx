import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Brain,
  HeartHandshake,
  Instagram,
  Mail,
  MessageCircle,
  MoonStar,
  ShieldCheck,
  Sparkles,
  Unlink,
  Waves,
} from "lucide-react";
import heroPhoto from "@/assets/emdr-reprocessar-experiencias.jpeg";
import methodPhoto from "@/assets/emdr-processar-viver-melhor.jpeg";
import edinaldoPhoto from "@/assets/edinaldo-castro.png";

const WA = "https://wa.me/5561993730704";
const INITIAL_MESSAGE = "Olá! Gostaria de agendar uma conversa inicial e saber mais sobre o tratamento com EMDR.";
const waLink = `${WA}?text=${encodeURIComponent(INITIAL_MESSAGE)}`;

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const painPoints = [
  {
    icon: Waves,
    title: "Memórias que voltam sem aviso",
    description:
      "Uma cena, um cheiro ou uma frase reativa uma lembrança dolorosa que parecia superada, trazendo de volta a mesma angústia de quando aconteceu.",
  },
  {
    icon: Sparkles,
    title: "Reações desproporcionais",
    description:
      "Raiva, choro ou pânico diante de situações simples do dia a dia, sem entender de onde vem tanta intensidade.",
  },
  {
    icon: Unlink,
    title: "Dificuldade de confiar e se vincular",
    description:
      "Medo de se aproximar, de se abrir ou de manter relacionamentos saudáveis, muitas vezes ligado a decepções ou rupturas do passado.",
  },
  {
    icon: MoonStar,
    title: "Corpo em alerta constante",
    description:
      "Ansiedade, insônia ou tensão muscular sem uma causa clara, como se o corpo estivesse sempre esperando algo ruim acontecer.",
  },
  {
    icon: HeartHandshake,
    title: "Sensação de estar “preso” no passado",
    description:
      "Um luto, um término, um acidente, um episódio de violência ou uma perda que, mesmo anos depois, ainda pesa como se fosse recente.",
  },
  {
    icon: ShieldCheck,
    title: "Bloqueios que atravessam a vida atual",
    description:
      "Medos e inseguranças que interferem no trabalho, na maternidade ou paternidade, na vida a dois ou na forma como a pessoa se vê.",
  },
];

const specialties = [
  "Atendimento a brasileiros no exterior",
  "Preparação psicológica para cirurgia bariátrica",
  "Perícia psicológica",
  "Autoconhecimento e fortalecimento das mulheres",
  "Atendimento individual e de casais que buscam restaurar o relacionamento",
  "Compreensão da maturidade",
];

const Emdr = () => {
  useEffect(() => {
    const title = "EMDR — Tratamento de Traumas | ECS Psicologia";
    const description =
      "Tratamento de traumas com EMDR conduzido pelo psicólogo Edinaldo Castro. Reprocesse memórias dolorosas com cuidado, ética e segurança.";
    const previousTitle = document.title;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
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
          <Link to="/" className="font-heading text-xl font-bold text-primary md:text-2xl">
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
        <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
          <img
            src={heroPhoto}
            alt="Edinaldo Castro conduzindo uma sessão de EMDR"
            className="absolute inset-0 h-full w-full object-cover object-center md:object-[center_42%]"
            width={841}
            height={768}
            loading="eager"
          />
          <div className="absolute inset-0 bg-background/70 md:bg-background/55" />
          <div className="relative z-10 flex min-h-[calc(100vh-4rem)] items-end">
            <div className="container mx-auto px-6 pb-16 pt-24 md:px-12 md:pb-20 lg:px-24">
              <div className="max-w-3xl">
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-5 text-xs uppercase tracking-[0.25em] text-olive md:text-sm"
                >
                  Terapia EMDR
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="heading-display mb-6"
                >
                  Você não precisa carregar isso para sempre
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.25 }}
                  className="max-w-2xl text-body-lg"
                >
                  Existem experiências que o tempo sozinho não cura. Ficam guardadas no corpo, na memória, na forma como reagimos a certas pessoas, lugares ou situações — mesmo anos depois. Com o método EMDR, é possível reprocessar essas memórias e retomar o controle da própria história.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-6xl">
            <motion.div {...fade} className="mx-auto mb-12 max-w-3xl text-center">
              <Brain className="mx-auto mb-5 h-8 w-8 text-primary" strokeWidth={1.5} />
              <h2 className="heading-section mb-5">As dores que carregamos em silêncio</h2>
              <p className="text-body-lg">
                Muitas pessoas chegam ao consultório sem saber nomear exatamente o que sentem. Alguns exemplos comuns:
              </p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {painPoints.map((item, index) => (
                <motion.article
                  key={item.title}
                  {...fade}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  className="rounded-lg border border-border bg-card p-6 shadow-sm"
                >
                  <item.icon className="mb-5 h-7 w-7 text-olive" strokeWidth={1.4} />
                  <h3 className="mb-3 font-heading text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </motion.article>
              ))}
            </div>

            <motion.p
              {...fade}
              className="mx-auto mt-12 max-w-4xl text-center text-body-lg font-medium text-sage-dark"
            >
              Esses sinais costumam ter uma raiz comum: memórias traumáticas que não foram processadas corretamente pelo cérebro — e que continuam ativas, influenciando pensamentos, emoções e comportamentos no presente.
            </motion.p>
          </div>
        </section>

        <section className="section-padding bg-sage-light">
          <div className="container mx-auto max-w-6xl">
            <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
              <motion.div {...fade} className="order-2 md:order-1">
                <h2 className="heading-section mb-6">O que é o EMDR</h2>
                <div className="space-y-5 text-body-lg">
                  <p>
                    EMDR — Eye Movement Desensitization and Reprocessing (Dessensibilização e Reprocessamento por Movimentos Oculares) — é uma abordagem terapêutica reconhecida internacionalmente para o tratamento de traumas.
                  </p>
                  <p>
                    Diferente da terapia tradicional, que trabalha principalmente pela fala, o EMDR utiliza estímulos bilaterais (movimentos oculares guiados, sons ou toques alternados) para ajudar o cérebro a reprocessar memórias que ficaram “presas” em sua forma original — com toda a carga emocional e física do momento em que aconteceram.
                  </p>
                  <p className="font-medium text-sage-dark">
                    O resultado não é apagar a lembrança, mas retirar dela o poder de continuar doendo. A pessoa passa a lembrar do fato, mas sem reviver a dor associada a ele.
                  </p>
                </div>
              </motion.div>
              <motion.div {...fade} transition={{ duration: 0.7, delay: 0.12 }} className="order-1 md:order-2">
                <div className="aspect-[4/5] overflow-hidden rounded-lg bg-muted shadow-lg">
                  <img
                    src={methodPhoto}
                    alt="Edinaldo Castro durante atendimento com estimulação bilateral para EMDR"
                    className="h-full w-full object-cover"
                    width={841}
                    height={768}
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div {...fade}>
              <HeartHandshake className="mx-auto mb-5 h-8 w-8 text-primary" strokeWidth={1.5} />
              <h2 className="heading-section mb-7">Como a ECS Psicologia pode ajudar</h2>
              <div className="space-y-5 text-body-lg">
                <p>
                  Na ECS Psicologia, o tratamento com EMDR é conduzido pelo psicólogo Edinaldo Castro, especialista na técnica, em um processo estruturado, ético e seguro — respeitando o tempo e a história de cada paciente.
                </p>
                <p>
                  O objetivo é claro: ajudar você a reprocessar experiências que hoje limitam sua vida, para que o passado deixe de comandar o presente. Seja um trauma pontual, uma dor antiga ou o acúmulo de experiências difíceis ao longo dos anos, o caminho começa com uma escuta cuidadosa e um plano terapêutico feito sob medida.
                </p>
              </div>
              <p className="my-8 font-heading text-2xl font-semibold text-sage-dark md:text-3xl">
                Você não precisa continuar carregando isso sozinho(a).
              </p>
              <Button variant="hero" size="lg" asChild className="px-8 py-6 text-base">
                <a href={waLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agendar conversa inicial
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-olive-light">
          <div className="container mx-auto max-w-5xl">
            <motion.h2 {...fade} className="heading-section mb-14 text-center">
              Sobre o especialista
            </motion.h2>
            <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
              <motion.div {...fade} className="flex justify-center">
                <div className="aspect-square w-full max-w-sm overflow-hidden rounded-lg bg-muted shadow-lg">
                  <img
                    src={edinaldoPhoto}
                    alt="Edinaldo Castro, psicólogo clínico especialista em EMDR"
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </motion.div>
              <motion.div {...fade} transition={{ duration: 0.7, delay: 0.15 }}>
                <h3 className="mb-2 font-heading text-3xl font-semibold md:text-4xl">Edinaldo Castro</h3>
                <p className="mb-6 font-medium text-primary">Psicólogo Clínico | Especialista em EMDR</p>
                <p className="mb-6 text-body-lg">
                  Com mais de 20 anos de experiência clínica, Edinaldo Castro atua com Gestalt-terapia e EMDR para o tratamento de traumas. Seu trabalho abrange ainda:
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
                  Seu trabalho é reconhecido pela escuta técnica, ética e profundamente humanizada — unindo rigor clínico e acolhimento genuíno em cada atendimento.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="contato" className="section-padding bg-primary">
          <div className="container mx-auto max-w-3xl text-center">
            <motion.h2 {...fade} className="mb-5 font-heading text-3xl font-semibold text-primary-foreground md:text-4xl">
              Dê o primeiro passo para reprocessar o que ainda dói.
            </motion.h2>
            <motion.p
              {...fade}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-10 text-lg text-primary-foreground/90 md:text-xl"
            >
              Agende uma conversa inicial com Edinaldo Castro e descubra como o EMDR pode ajudar você a seguir em frente.
            </motion.p>
            <motion.div
              {...fade}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10 flex flex-col items-center justify-center gap-5 text-primary-foreground/90 sm:flex-row sm:flex-wrap"
            >
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-primary-foreground">
                <MessageCircle className="h-4 w-4" /> 61 99373-0704
              </a>
              <a href="https://instagram.com/ecspsicologia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-primary-foreground">
                <Instagram className="h-4 w-4" /> @ecspsicologia
              </a>
              <a href="mailto:clinicaecs@gmail.com" className="flex items-center gap-2 transition-colors hover:text-primary-foreground">
                <Mail className="h-4 w-4" /> clinicaecs@gmail.com
              </a>
            </motion.div>
            <motion.div {...fade} transition={{ duration: 0.6, delay: 0.3 }}>
              <Button size="lg" asChild className="bg-background px-10 py-7 text-base font-semibold text-primary hover:bg-background/90">
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
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} ECS Psicologia — Todos os direitos reservados</p>
        <p className="mt-2 text-xs text-muted-foreground">
          Atendimento realizado por psicólogo registrado no Brasil (CRP 14399), em conformidade com as normas de atendimento para brasileiros no exterior.
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

export default Emdr;
