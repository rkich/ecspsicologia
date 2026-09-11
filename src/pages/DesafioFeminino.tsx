import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Instagram,
  Mail,
  ArrowLeft,
  Heart,
  Brain,
  Sparkles,
  Shield,
  Eye,
  Ear,
  Hand,
} from "lucide-react";
import edinaldoPhoto from "@/assets/edinaldo-castro.png";
import mulherReflexiva from "@/assets/mulher-reflexiva.jpg";

const WA = "https://wa.me/5561993730704";
const waLink = (msg: string) => `${WA}?text=${encodeURIComponent(msg)}`;

const HERO_MSG =
  "Olá! Gostaria de agendar uma sessão e saber mais sobre o acompanhamento psicológico para mulheres.";
const FINAL_MSG =
  "Olá! Tenho interesse no acompanhamento psicológico e gostaria de agendar uma sessão.";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const specialties = [
  "Gestalt-terapia",
  "EMDR (tratamento de traumas)",
  "Atendimento a brasileiros no exterior",
  "Preparação psicológica para bariátrica",
  "Perícia psicológica",
];

const DesafioFeminino = () => {
  useEffect(() => {
    const title =
      "Desafio Feminino — Acompanhamento Psicológico para Mulheres | ECS Psicologia";
    const desc =
      "Espaço de acolhimento e desenvolvimento para mulheres. Terapia com Edinaldo Castro, psicólogo clínico com mais de 20 anos de experiência e especialista em EMDR.";
    const prev = document.title;
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute("content") ?? "";
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
    return () => {
      document.title = prev;
      meta?.setAttribute("content", prevDesc);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/85 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="font-heading text-xl md:text-2xl font-bold text-primary">
            ECS Psicologia
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao site
          </Link>
        </div>
      </header>

      <main className="pt-16">
        {/* HERO */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-sage-light">
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-olive/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
          </div>

          <div className="relative z-10 container mx-auto px-6 py-24 md:px-12 lg:px-20 max-w-4xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs md:text-sm tracking-[0.25em] uppercase text-olive mb-6"
            >
              Desafio Feminino
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="heading-display mb-6"
            >
              Você aprendeu a dar conta de tudo. Mas quando foi a última vez que alguém perguntou como você está?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-body-lg max-w-2xl mx-auto mb-8"
            >
              Mãe, esposa, filha, profissional, cuidadora, ponto de apoio de todo mundo. A mulher de hoje carrega papéis demais — e, entre um e outro, quase nunca sobra espaço para simplesmente <em>ser</em>.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-body-lg font-medium text-sage-dark max-w-xl mx-auto mb-10"
            >
              A terapia é esse espaço. Um lugar onde você não precisa dar conta de nada — só de si mesma.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <Button variant="hero" size="lg" asChild className="text-base px-8 py-6">
                <a href="#contato">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Agende sua sessão
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* O CANSAÇO QUE NINGUÉM VÊ */}
        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div {...fade} className="order-2 md:order-1">
                <Heart className="w-8 h-8 mb-5 text-primary" strokeWidth={1.5} />
                <h2 className="heading-section mb-6">O cansaço que ninguém vê</h2>
                <p className="text-body-lg mb-8">
                  Nem todo esgotamento aparece como cansaço físico. Às vezes ele se disfarça de:
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    "irritação por qualquer coisa",
                    "culpa sempre que você para",
                    "dificuldade de dizer não",
                    "a sensação de estar sozinha, mesmo cercada de gente",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 rounded-xl border border-border bg-card p-5"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      <span className="text-body-lg">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-5 text-body-lg">
                  <p>
                    Talvez não seja fraqueza. Talvez seja o preço de sustentar tudo sozinha, por tempo demais.
                  </p>
                  <p className="font-medium text-sage-dark">
                    É possível entender a origem desse cansaço e, com acompanhamento psicológico adequado, transformar esses sinais em pontos de mudança — não em rotina.
                  </p>
                </div>
              </motion.div>

              <motion.div
                {...fade}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="order-1 md:order-2"
              >
                <div className="rounded-2xl overflow-hidden shadow-lg bg-muted aspect-[4/5]">
                  <img
                    src={mulherReflexiva}
                    alt="Mulher em momento de reflexão e autocuidado"
                    className="w-full h-full object-cover"
                    width={1024}
                    height={1024}
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* QUEM É VOCÊ */}
        <section className="section-padding bg-sage-light">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div {...fade}>
              <Sparkles className="w-8 h-8 mx-auto mb-5 text-olive" strokeWidth={1.5} />
              <h2 className="heading-section mb-6">
                Quem é você quando não está cuidando de alguém?
              </h2>
              <p className="text-body-lg max-w-3xl mx-auto mb-8">
                Por trás de cada papel que você exerce, existe uma mulher que também precisa de cuidado, escuta e espaço. Reencontrar essa mulher não é egoísmo — é o primeiro passo para viver, e não só resistir.
              </p>
              <p className="text-body-lg font-medium text-sage-dark max-w-2xl mx-auto">
                No processo terapêutico, esse reencontro acontece de forma guiada e segura: você aprende a reconhecer suas próprias necessidades antes de atender as de todo mundo.
              </p>
            </motion.div>
          </div>
        </section>

        {/* AMAR NÃO DEVERIA EXIGIR */}
        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-4xl">
            <motion.div {...fade} className="text-center mb-10">
              <Shield className="w-8 h-8 mx-auto mb-5 text-primary" strokeWidth={1.5} />
              <h2 className="heading-section mb-6">
                Amar não deveria exigir que você desaparecesse.
              </h2>
            </motion.div>
            <motion.div
              {...fade}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6 text-body-lg text-center max-w-3xl mx-auto"
            >
              <p>
                Quantas vezes você silenciou o que sentia para preservar uma relação, uma família, uma rotina? É possível amar — e ser amada — sem se apagar no processo. Relações saudáveis se sustentam com duas pessoas presentes, não com uma se anulando pela outra.
              </p>
              <p className="font-medium text-sage-dark">
                A terapia ajuda a identificar onde você abre mão de si por medo, culpa ou hábito — e a construir limites que preservam o amor sem custar sua identidade.
              </p>
            </motion.div>
          </div>
        </section>

        {/* EMDR */}
        <section className="section-padding bg-olive-light">
          <div className="container mx-auto max-w-5xl">
            <motion.div {...fade} className="text-center mb-12">
              <Brain className="w-8 h-8 mx-auto mb-5 text-olive" strokeWidth={1.5} />
              <h2 className="heading-section mb-4">O método — EMDR</h2>
              <p className="text-lg md:text-xl font-heading text-sage-dark max-w-3xl mx-auto">
                Quando o corpo guarda o que a mente tenta esquecer
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div {...fade} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-5 text-body-lg">
                <p>
                  Muitos dos padrões que nos fazem repetir sobrecarga, culpa ou dificuldade de colocar limites têm raiz em experiências e memórias que continuam ativas, mesmo sem percebermos.
                </p>
                <p>
                  Somos especialistas no tratamento de traumas e, para isso, utilizamos o EMDR — uma das ferramentas mais eficazes e reconhecidas internacionalmente nessa área.
                </p>
                <p>
                  O EMDR (Dessensibilização e Reprocessamento por Movimentos Oculares) é uma técnica que ajuda o cérebro a reprocessar memórias que ficaram “presas” e continuam gerando sofrimento, ansiedade ou padrões de comportamento repetitivos. Ao trabalhar essas memórias, é possível reduzir o impacto emocional que elas ainda causam no presente.
                </p>
              </motion.div>

              <motion.div
                {...fade}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid sm:grid-cols-3 gap-5"
              >
                {[
                  { icon: Eye, label: "Estimulação visual" },
                  { icon: Ear, label: "Estimulação auditiva" },
                  { icon: Hand, label: "Estimulação tátil" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl bg-background border border-border px-6 py-10 text-center"
                  >
                    <item.icon className="w-7 h-7 mx-auto mb-4 text-olive" strokeWidth={1.3} />
                    <p className="font-medium text-sage-dark">{item.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div {...fade} transition={{ duration: 0.6, delay: 0.3 }} className="mt-12 p-8 md:p-10 rounded-2xl bg-background border border-border text-center max-w-4xl mx-auto">
              <p className="text-body-lg font-medium text-sage-dark">
                Para a mulher que carrega marcas de experiências antigas — sejam elas grandes traumas ou pequenas feridas acumuladas ao longo dos anos — o EMDR abre caminho para o autoconhecimento, o empoderamento e uma vida mais leve e presente.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SOBRE EDINALDO CASTRO */}
        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-5xl">
            <motion.h2 {...fade} className="heading-section text-center mb-14">
              Sobre Edinaldo Castro
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                {...fade}
                transition={{ duration: 0.7 }}
                className="flex justify-center"
              >
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl bg-muted overflow-hidden shadow-lg">
                  <img
                    src={edinaldoPhoto}
                    alt="Edinaldo Castro - Psicólogo Clínico"
                    className="w-full h-full object-cover object-top"
                    style={{ filter: "contrast(1.05)" }}
                    loading="lazy"
                  />
                </div>
              </motion.div>

              <motion.div {...fade} transition={{ duration: 0.7, delay: 0.2 }}>
                <h3 className="font-heading text-2xl md:text-3xl font-semibold mb-2">
                  Edinaldo Castro
                </h3>
                <p className="text-muted-foreground mb-6">
                  Psicólogo clínico com mais de 20 anos de experiência.
                </p>

                <p className="text-body-lg font-medium mb-4 text-sage-dark">Especialista em:</p>
                <ul className="space-y-3 mb-8">
                  {specialties.map((s) => (
                    <li key={s} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      <span className="text-body-lg">{s}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-body-lg italic font-heading text-xl text-sage-dark">
                  Um atendimento ético, técnico e profundamente humanizado — para mulheres que, depois de tanto tempo sendo fortes por todos, decidem também ser fortes para si mesmas.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA / CONTATO */}
        <section id="contato" className="section-padding bg-primary">
          <div className="container mx-auto max-w-3xl text-center">
            <motion.h2
              {...fade}
              className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-foreground mb-4"
            >
              Você não precisa continuar carregando tudo sozinha.
            </motion.h2>
            <motion.p
              {...fade}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-primary-foreground/90 mb-10"
            >
              Agende sua sessão e comece o caminho de volta para você.
            </motion.p>

            <motion.div
              {...fade}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/80 mb-10"
            >
              <a
                href={waLink(FINAL_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                (61) 99373-0704
              </a>
              <a
                href="mailto:clinicaecs@gmail.com"
                className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                clinicaecs@gmail.com
              </a>
              <a
                href="https://instagram.com/ecspsicologia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @ecspsicologia
              </a>
            </motion.div>

            <motion.div {...fade} transition={{ duration: 0.6, delay: 0.3 }}>
              <Button
                size="lg"
                asChild
                className="bg-background text-primary hover:bg-background/90 rounded-xl px-10 py-7 text-base font-semibold"
              >
                <a href={waLink(FINAL_MSG)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Falar no WhatsApp
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-background border-t border-border py-8 px-6 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} ECS Psicologia — Todos os direitos reservados
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Atendimento realizado por psicólogo registrado no Brasil (CRP 14399), em conformidade com as normas de atendimento para brasileiros no exterior.
        </p>
      </footer>

      <a
        href={waLink(HERO_MSG)}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-whatsapp flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Contato pelo WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-primary-foreground" />
      </a>
    </div>
  );
};

export default DesafioFeminino;
