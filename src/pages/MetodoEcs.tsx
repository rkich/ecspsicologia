import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BookHeart,
  Brain,
  Check,
  HeartHandshake,
  Instagram,
  Mail,
  MessageCircle,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import heroPhoto from "@/assets/metodo-ecs-atendimento-casal.jpeg";
import edinaldoPhoto from "@/assets/metodo-ecs-edinaldo.png";

const WA = "https://wa.me/5561993730704";
const INITIAL_MESSAGE =
  "Olá! Gostaria de conhecer o Método ECS para Restauração de Relacionamentos.";
const waLink = `${WA}?text=${encodeURIComponent(INITIAL_MESSAGE)}`;

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const processSteps = [
  {
    title: "Avaliação inicial",
    description:
      "Identificação de padrões de comunicação, histórico emocional e traumas individuais.",
  },
  {
    title: "Estabilização emocional",
    description:
      "Técnicas de regulação emocional, como respiração consciente e grounding.",
  },
  {
    title: "Reprocessamento de traumas (EMDR)",
    description:
      "Reestruturação de memórias traumáticas que influenciam o comportamento individual e conjugal.",
  },
  {
    title: "Reestruturação cognitiva",
    description:
      "Terapia Cognitivo-Comportamental para modificar crenças distorcidas sobre o parceiro e o relacionamento.",
  },
  {
    title: "Reconstrução do vínculo",
    description:
      "Exercícios de comunicação empática, validação emocional e reconexão afetiva.",
  },
];

const practicalTechniques = [
  "Diálogo estruturado (escuta ativa)",
  "Exercícios de gratidão conjugal",
  "Reescrita da história do casal",
  "Práticas de reconexão emocional",
];

const spiritualRoles = [
  { icon: RefreshCcw, label: "Um ritual de reconexão" },
  { icon: HeartHandshake, label: "Um espaço de reconciliação" },
  { icon: ShieldCheck, label: "Uma fonte de fortalecimento emocional" },
];

const MetodoEcs = () => {
  useEffect(() => {
    const title = "Método ECS para Restauração de Relacionamentos | ECS Psicologia";
    const description =
      "Conheça o Método ECS, criado pelo psicólogo Edinaldo Castro para restauração de relacionamentos por meio da psicologia, cura emocional e espiritualidade.";
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
        <section className="overflow-hidden bg-olive-light">
          <div className="container mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-10 px-6 py-14 md:grid-cols-[1.02fr_0.98fr] md:px-12 md:py-20 lg:gap-16 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <p className="mb-5 max-w-[calc(100%-4rem)] text-sm font-bold uppercase text-primary md:max-w-none">
                Método ECS para Restauração de Relacionamentos
              </p>
              <h1 className="heading-display mb-6">
                Seu casamento não acabou. Ele está ferido — e pode ser restaurado.
              </h1>
              <p className="mb-9 max-w-xl text-body-lg">
                Método ECS para Restauração de Relacionamentos, criado pelo psicólogo Edinaldo Castro.
              </p>
              <Button variant="hero" size="lg" asChild className="px-8 py-6 text-base">
                <a href="#conheca-o-metodo">Quero conhecer o Método ECS</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="order-1 md:order-2"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-lg bg-muted shadow-lg md:aspect-[3/4]">
                <img
                  src={heroPhoto}
                  alt="Edinaldo Castro em atendimento de casal na ECS Psicologia"
                  className="h-full w-full object-cover object-center"
                  width={922}
                  height={768}
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-4xl">
            <motion.div {...fade}>
              <p className="mb-3 text-center text-sm font-semibold uppercase text-primary">Compreender para transformar</p>
              <h2 className="heading-section mb-9 text-center">A crise do amor moderno</h2>
              <div className="space-y-5 text-body-lg">
                <p>
                  O casamento contemporâneo atravessa uma crise profunda: vínculos frágeis, dificuldade de manter compromissos, separações cada vez mais frequentes.
                </p>
                <p>
                  A maioria dos casais não se separa por falta de amor — mas por feridas emocionais não resolvidas, falta de comunicação e orgulho não tratado. Muitas vezes, esses padrões vêm de experiências ainda da infância, moldando a forma como nos relacionamos na vida adulta.
                </p>
                <p>
                  Na prática clínica, fica claro: os conflitos do casal raramente são sobre dinheiro, rotina ou filhos. No fundo, são sobre necessidades emocionais não atendidas — segurança, validação, pertencimento. E quando o ego e o orgulho tomam conta, pequenas divergências se transformam em grandes rupturas.
                </p>
              </div>
              <p className="mt-10 border-l-4 border-primary pl-5 font-heading text-2xl font-semibold text-sage-dark md:text-3xl">
                O problema não é só o que aconteceu. É o que nunca foi curado.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-sage-light">
          <div className="container mx-auto max-w-5xl">
            <motion.div {...fade} className="mx-auto max-w-4xl">
              <Brain className="mx-auto mb-5 h-8 w-8 text-primary" strokeWidth={1.5} />
              <h2 className="heading-section mb-9 text-center">Os fundamentos da cura</h2>
              <div className="space-y-5 text-body-lg">
                <p>
                  Restaurar um relacionamento exige uma mudança de olhar: o amor deixa de ser apenas sentimento e passa a ser decisão e compromisso ativo.
                </p>
                <p>
                  Todo amor duradouro se sustenta em três pilares — intimidade, paixão e compromisso — sendo o compromisso o mais determinante para a permanência do vínculo.
                </p>
                <p>
                  A fé e a espiritualidade, muitas vezes deixadas de lado na abordagem clínica tradicional, têm papel real nesse processo: práticas espirituais regulares reduzem o estresse e fortalecem a regulação emocional, ajudando o casal a se reorganizar e se reconectar.
                </p>
                <p>
                  O perdão é um dos pilares mais importantes dessa restauração — não como esquecimento, mas como ressignificação da dor e ruptura de ciclos de sofrimento. E a pureza de intenção, o respeito mútuo e a aceitação incondicional são a base de qualquer vínculo saudável e duradouro.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="conheca-o-metodo" className="section-padding scroll-mt-16 bg-background">
          <div className="container mx-auto max-w-6xl">
            <motion.div {...fade} className="mx-auto mb-14 max-w-4xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase text-primary">Um processo estruturado</p>
              <h2 className="heading-section mb-6">Conheça o Método ECS</h2>
              <p className="text-body-lg">
                O Método ECS nasce da análise clínica dos relacionamentos amorosos na atualidade, desenvolvida pelo psicólogo Edinaldo Castro. É uma proposta terapêutica que integra ciência psicológica e espiritualidade em um modelo estruturado de intervenção, individual ou para o casal.
              </p>
            </motion.div>

            <motion.h3 {...fade} className="mb-8 text-center font-heading text-2xl font-semibold md:text-3xl">
              Etapas do processo
            </motion.h3>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {processSteps.map((step, index) => (
                <motion.article
                  key={step.title}
                  {...fade}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  className="rounded-lg border border-border bg-card p-6 shadow-sm"
                >
                  <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                  <h4 className="mb-3 font-heading text-xl font-semibold">{step.title}</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </motion.article>
              ))}
            </div>

            <motion.div {...fade} className="mx-auto mt-16 max-w-4xl">
              <h3 className="mb-7 text-center font-heading text-2xl font-semibold md:text-3xl">
                Técnicas práticas utilizadas
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {practicalTechniques.map((technique) => (
                  <div key={technique} className="flex items-center gap-3 rounded-lg bg-sage-light p-5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary">
                      <Check className="h-4 w-4 text-primary-foreground" />
                    </span>
                    <span className="font-medium">{technique}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fade} className="mt-14 rounded-lg bg-primary px-6 py-9 text-center shadow-lg md:px-12">
              <p className="font-heading text-2xl font-semibold text-primary-foreground md:text-4xl">
                Psicologia + Cura Emocional + Espiritualidade = Transformação
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-olive-light">
          <div className="container mx-auto max-w-5xl">
            <motion.div {...fade} className="mx-auto max-w-4xl text-center">
              <Sparkles className="mx-auto mb-5 h-8 w-8 text-primary" strokeWidth={1.5} />
              <h2 className="heading-section mb-8">O papel da espiritualidade no Método ECS</h2>
              <div className="space-y-5 text-body-lg">
                <p>
                  No Método ECS, o casamento é compreendido não apenas como contrato social, mas como caminho de crescimento e propósito compartilhado.
                </p>
                <p>
                  Relações com um sentido que vai além do dia a dia tendem a ser mais estáveis e significativas. A espiritualidade promove o que a psicologia chama de coerência existencial — o alinhamento entre valores, ações e sentido de vida do casal — e está associada a menores níveis de ansiedade, depressão e conflito conjugal.
                </p>
              </div>
            </motion.div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {spiritualRoles.map((role, index) => (
                <motion.div
                  key={role.label}
                  {...fade}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-lg border border-border bg-card p-7 text-center shadow-sm"
                >
                  <role.icon className="mx-auto mb-4 h-7 w-7 text-primary" strokeWidth={1.5} />
                  <p className="font-heading text-xl font-semibold">{role.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div {...fade}>
              <BookHeart className="mx-auto mb-5 h-8 w-8 text-primary" strokeWidth={1.5} />
              <h2 className="heading-section mb-8">Você não precisa desistir</h2>
              <div className="space-y-5 text-body-lg">
                <p>
                  E sem perceber, muitos casais começam a se afastar — pequenos silêncios que viram distância, distância que vira rotina, rotina que vira resignação.
                </p>
                <p className="font-heading text-2xl font-semibold text-sage-dark">Mas existe um caminho de restauração.</p>
                <p>
                  Através do Método ECS, não se inicia um evento pontual, mas um processo — que exige de ambos decisão, disciplina e abertura à transformação. A integração entre psicologia e fé oferece um caminho sólido, capaz de alcançar não apenas o comportamento, mas o coração.
                </p>
              </div>
              <p className="mx-auto mt-10 max-w-3xl font-heading text-2xl font-semibold text-sage-dark md:text-3xl">
                O amor, quando sustentado por compromisso, cura emocional e espiritualidade, deixa de ser frágil e se torna aliança restaurada.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-sage-light">
          <div className="container mx-auto max-w-5xl">
            <motion.h2 {...fade} className="heading-section mb-14 text-center">Sobre o criador do método</motion.h2>
            <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
              <motion.div {...fade} className="flex justify-center">
                <div className="aspect-square w-full max-w-sm overflow-hidden rounded-lg bg-muted shadow-lg">
                  <img
                    src={edinaldoPhoto}
                    alt="Edinaldo Castro, psicólogo clínico e criador do Método ECS"
                    className="h-full w-full object-cover object-top"
                    width={768}
                    height={768}
                    loading="lazy"
                  />
                </div>
              </motion.div>
              <motion.div {...fade} transition={{ duration: 0.7, delay: 0.12 }}>
                <h3 className="mb-2 font-heading text-3xl font-semibold md:text-4xl">Edinaldo Castro</h3>
                <p className="mb-6 font-medium text-primary">Psicólogo Clínico | Criador do Método ECS</p>
                <p className="text-body-lg">
                  Com mais de 20 anos de experiência clínica, Edinaldo Castro atua com Gestalt-terapia, EMDR (tratamento de traumas), atendimento individual e de casais, e desenvolveu o Método ECS a partir da análise clínica dos padrões de crise conjugal na atualidade, unindo ciência psicológica e espiritualidade em um processo estruturado de restauração.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-primary">
          <div className="container mx-auto max-w-3xl text-center">
            <motion.h2 {...fade} className="mb-5 font-heading text-3xl font-semibold text-primary-foreground md:text-4xl">
              Seu casamento pode ser restaurado.
            </motion.h2>
            <motion.p {...fade} transition={{ duration: 0.6, delay: 0.1 }} className="mb-9 text-lg text-primary-foreground/90 md:text-xl">
              Me chame no WhatsApp e comece hoje mesmo o processo de restauração.
            </motion.p>
            <motion.div {...fade} transition={{ duration: 0.6, delay: 0.2 }} className="mb-10">
              <Button size="lg" asChild className="bg-background px-10 py-7 text-base font-semibold text-primary hover:bg-background/90">
                <a href={waLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Quero iniciar a restauração
                </a>
              </Button>
            </motion.div>
            <motion.div {...fade} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col items-center justify-center gap-5 text-primary-foreground/90 sm:flex-row sm:flex-wrap">
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

export default MetodoEcs;