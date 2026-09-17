import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  BadgeCheck,
  Brain,
  BriefcaseBusiness,
  CarFront,
  ClipboardCheck,
  FileCheck2,
  HeartHandshake,
  Instagram,
  Mail,
  MessageCircle,
  Scale,
  ShieldCheck,
  Target,
} from "lucide-react";
import folderPhoto from "@/assets/avaliacao-pasta.jpeg";
import sessionPhoto from "@/assets/avaliacao-atendimento.jpeg";
import testPhoto from "@/assets/avaliacao-teste.jpeg";
import edinaldoPhoto from "@/assets/edinaldo-castro.png";

const WA = "https://wa.me/5561993730704";
const INITIAL_MESSAGE = "Olá! Gostaria de agendar uma avaliação psicológica.";
const waLink = `${WA}?text=${encodeURIComponent(INITIAL_MESSAGE)}`;

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const audiences = [
  {
    icon: CarFront,
    title: "Trânsito (CNH)",
    description:
      "Avaliação psicológica exigida pelo DETRAN para primeira habilitação, renovação de CNH e mudança ou adição de categoria. Processo objetivo, dentro dos prazos e critérios oficiais.",
  },
  {
    icon: ShieldCheck,
    title: "Porte de Arma de Fogo",
    description:
      "Avaliação psicológica exigida pela Polícia Federal para posse e porte de arma de fogo, tanto para civis quanto para categorias profissionais que exigem o laudo, como seguranças, atiradores, colecionadores e caçadores.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Concursos Públicos e Processos Seletivos",
    description:
      "Avaliação psicológica como etapa eliminatória em concursos públicos e processos seletivos, incluindo forças de segurança, carreiras militares e cargos que exigem perfil psicológico específico.",
  },
  {
    icon: Scale,
    title: "Outras Finalidades",
    description:
      "Avaliações para processos de adoção, perícias judiciais, diagnósticos específicos e demais situações em que um laudo ou parecer psicológico técnico seja exigido.",
  },
];

const processSteps = [
  {
    title: "Agendamento",
    description: "Você entra em contato e agenda o tipo de avaliação necessária.",
  },
  {
    title: "Aplicação de testes e entrevista",
    description:
      "Sessão conduzida por Edinaldo Castro, psicólogo especialista em perícia psicológica, com instrumentos validados e reconhecidos pelo Conselho Federal de Psicologia.",
  },
  {
    title: "Análise técnica",
    description:
      "Interpretação criteriosa dos resultados, dentro dos parâmetros exigidos por cada finalidade.",
  },
  {
    title: "Emissão do laudo ou parecer",
    description:
      "Documento oficial, entregue dentro do prazo necessário para o seu processo.",
  },
];

const benefits = [
  {
    icon: BadgeCheck,
    text: "Psicólogo com mais de 20 anos de experiência clínica e em perícia psicológica",
  },
  {
    icon: ClipboardCheck,
    text: "Processo técnico, ético e dentro das normas do Conselho Federal de Psicologia",
  },
  {
    icon: HeartHandshake,
    text: "Atendimento humanizado — sem o clima frio e apressado de muitos laudos “de corredor”",
  },
  {
    icon: ShieldCheck,
    text: "Sigilo profissional garantido em todas as etapas",
  },
];

const AvaliacaoPsicologica = () => {
  useEffect(() => {
    const title = "Avaliação Psicológica em Brasília | ECS Psicologia";
    const description =
      "Avaliação psicológica para CNH, porte de arma, concursos, perícias e outras finalidades com Edinaldo Castro, psicólogo com mais de 20 anos de experiência.";
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
        <section className="section-padding overflow-hidden bg-sage-light">
          <div className="container mx-auto grid min-h-[calc(100vh-9rem)] max-w-6xl items-center gap-12 md:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="order-2 md:order-1"
            >
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-olive md:text-sm">
                Escuta, análise e compreensão
              </p>
              <h1 className="heading-display mb-7">
                Avaliação Psicológica: muito mais do que uma exigência
              </h1>
              <div className="space-y-5 text-body-lg">
                <p>
                  Muita gente pensa que a avaliação psicológica só serve para quem está “abalado” ou com o psicológico afetado. Mas ela também funciona como um verdadeiro mapa de autoconhecimento.
                </p>
                <p>
                  Quantas vezes você já sentiu que não avança na carreira? Já parou para pensar que o problema pode estar na forma como você reage às situações do dia a dia? A avaliação psicológica é uma ferramenta importante para mapear suas emoções e entender como você reage ao ambiente em que se encontra.
                </p>
              </div>
              <Button variant="hero" size="lg" asChild className="mt-8 px-8 py-6 text-base">
                <a href={waLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agendar avaliação
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="order-1 md:order-2"
            >
              <div className="aspect-[1.08/1] overflow-hidden rounded-lg bg-muted shadow-lg">
                <img
                  src={folderPhoto}
                  alt="Edinaldo Castro lendo uma pasta de avaliação psicológica"
                  className="h-full w-full object-cover"
                  width={1288}
                  height={1179}
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-background px-6 py-14 md:px-12 md:py-20 lg:px-24">
          <motion.div {...fade} className="container mx-auto max-w-4xl text-center">
            <Target className="mx-auto mb-5 h-8 w-8 text-primary" strokeWidth={1.5} />
            <p className="font-heading text-2xl font-semibold leading-relaxed text-sage-dark md:text-3xl">
              Além do autoconhecimento, a avaliação psicológica também serve para diferentes finalidades, como o cumprimento de exigências legais e profissionais:
            </p>
          </motion.div>
        </section>

        <section className="section-padding bg-olive-light">
          <div className="container mx-auto max-w-6xl">
            <motion.div {...fade} className="mx-auto mb-12 max-w-3xl text-center">
              <Brain className="mx-auto mb-5 h-8 w-8 text-primary" strokeWidth={1.5} />
              <h2 className="heading-section">Para quem é a avaliação psicológica</h2>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2">
              {audiences.map((item, index) => (
                <motion.article
                  key={item.title}
                  {...fade}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  className="rounded-lg border border-border bg-card p-6 shadow-sm md:p-7"
                >
                  <item.icon className="mb-5 h-7 w-7 text-olive" strokeWidth={1.4} />
                  <h3 className="mb-3 font-heading text-xl font-semibold md:text-2xl">{item.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{item.description}</p>
                </motion.article>
              ))}
            </div>

            <motion.div {...fade} className="my-10 rounded-lg bg-primary px-6 py-5 text-center shadow-sm">
              <p className="font-heading text-xl font-semibold text-primary-foreground md:text-2xl">
                Também atendemos avaliações psicológicas por convênio. Consulte!
              </p>
            </motion.div>

            <motion.div {...fade} className="overflow-hidden rounded-lg bg-muted shadow-lg">
              <img
                src={sessionPhoto}
                alt="Edinaldo Castro anotando durante uma avaliação psicológica"
                className="h-auto max-h-[720px] w-full object-cover object-center"
                width={1320}
                height={1428}
                loading="lazy"
              />
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
              <motion.div {...fade}>
                <h2 className="heading-section mb-8">Como funciona o processo</h2>
                <ol className="space-y-7">
                  {processSteps.map((step, index) => (
                    <li key={step.title} className="flex items-start gap-5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-lg font-semibold text-primary-foreground">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="mb-2 font-heading text-xl font-semibold">{step.title}</h3>
                        <p className="leading-relaxed text-muted-foreground">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </motion.div>

              <motion.div {...fade} transition={{ duration: 0.7, delay: 0.12 }}>
                <div className="aspect-[1.1/1] overflow-hidden rounded-lg bg-muted shadow-lg">
                  <img
                    src={testPhoto}
                    alt="Edinaldo Castro aplicando um teste psicológico com formas geométricas"
                    className="h-full w-full object-cover"
                    width={1284}
                    height={1164}
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-sage-light">
          <div className="container mx-auto max-w-5xl">
            <motion.div {...fade} className="mx-auto mb-12 max-w-3xl text-center">
              <FileCheck2 className="mx-auto mb-5 h-8 w-8 text-primary" strokeWidth={1.5} />
              <h2 className="heading-section">Por que fazer com a ECS Psicologia</h2>
            </motion.div>
            <div className="grid gap-x-12 gap-y-6 md:grid-cols-2">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  {...fade}
                  transition={{ duration: 0.55, delay: index * 0.07 }}
                  className="flex items-start gap-4 border-b border-border pb-6"
                >
                  <benefit.icon className="mt-1 h-6 w-6 shrink-0 text-olive" strokeWidth={1.5} />
                  <p className="text-body-lg">{benefit.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-5xl">
            <motion.h2 {...fade} className="heading-section mb-14 text-center">
              Sobre o especialista
            </motion.h2>
            <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
              <motion.div {...fade} className="flex justify-center">
                <div className="aspect-square w-full max-w-sm overflow-hidden rounded-lg bg-muted shadow-lg">
                  <img
                    src={edinaldoPhoto}
                    alt="Edinaldo Castro, psicólogo clínico especialista em perícia psicológica"
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </motion.div>
              <motion.div {...fade} transition={{ duration: 0.7, delay: 0.15 }}>
                <h3 className="mb-2 font-heading text-3xl font-semibold md:text-4xl">Edinaldo Castro</h3>
                <p className="mb-6 font-medium text-primary">
                  Psicólogo Clínico | Especialista em Perícia Psicológica
                </p>
                <p className="text-body-lg">
                  Com mais de 20 anos de experiência clínica, Edinaldo Castro atua com perícia psicológica, além de Gestalt-terapia, EMDR, atendimento a brasileiros no exterior, preparação psicológica para cirurgia bariátrica, autoconhecimento e fortalecimento das mulheres, atendimento individual e de casais, e compreensão da maturidade.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-primary">
          <div className="container mx-auto max-w-3xl text-center">
            <motion.h2 {...fade} className="mb-5 font-heading text-3xl font-semibold text-primary-foreground md:text-4xl">
              Precisa de uma avaliação psicológica?
            </motion.h2>
            <motion.p
              {...fade}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-10 text-lg text-primary-foreground/90 md:text-xl"
            >
              Agende agora e garanta seu laudo dentro do prazo.
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
                  Agendar avaliação
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

export default AvaliacaoPsicologica;