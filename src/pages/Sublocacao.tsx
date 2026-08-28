import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  MapPin,
  Sofa,
  Wind,
  Sun,
  Refrigerator,
  Droplets,
  Coffee,
  Utensils,
  Armchair,
  Lock,
  CheckCircle2,
  Eye,
  Ear,
  Hand,
  ArrowLeft,
} from "lucide-react";
import fotoSofa from "@/assets/consultorio-sofa.jpeg.asset.json";
import fotoMesa from "@/assets/consultorio-mesa.jpeg.asset.json";

const WA = "https://wa.me/5561993730704";
const waLink = (msg: string) => `${WA}?text=${encodeURIComponent(msg)}`;

const HERO_MSG =
  "Olá! Gostaria de conhecer o espaço da ECS para sublocação de horários e saber mais sobre a disponibilidade.";
const HORARIOS_MSG =
  "Olá! Gostaria de consultar os horários e a disponibilidade para sublocação do consultório da ECS.";
const FINAL_MSG =
  "Olá! Tenho interesse na sublocação do consultório da ECS e gostaria de conhecer o espaço.";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("SEPS 705/905 Edifício Montblanc Bloco C Asa Sul Brasília DF 70390-055");

const diferenciais = [
  { icon: Armchair, label: "Recepção confortável" },
  { icon: Sofa, label: "Consultório acolhedor" },
  { icon: Sofa, label: "Sofá em couro" },
  { icon: Wind, label: "Ar-condicionado" },
  { icon: Sun, label: "Ambiente iluminado" },
  { icon: Refrigerator, label: "Frigobar" },
  { icon: Droplets, label: "Filtro de água" },
  { icon: Coffee, label: "Estrutura para café" },
  { icon: Utensils, label: "Utensílios disponíveis" },
  { icon: Eye, label: "Decoração clássica contemporânea" },
  { icon: Lock, label: "Ambiente reservado" },
  { icon: CheckCircle2, label: "Estrutura pronta para atendimento" },
];

const paraQuem = [
  "Para quem está iniciando a prática clínica",
  "Para quem atende em modelo híbrido",
  "Para quem precisa de horários específicos",
  "Para quem deseja ampliar os atendimentos presenciais",
  "Para quem busca um ambiente diferenciado para seus pacientes",
  "Para profissionais que utilizam EMDR",
];

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const Sublocacao = () => {
  useEffect(() => {
    const title =
      "Sublocação de Consultório para Psicólogos em Brasília | ECS Psicologia";
    const desc =
      "Consultório para sublocação de horários na Asa Sul, Brasília. Espaço acolhedor, elegante e completo, com estrutura para profissionais que utilizam EMDR.";
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
    <div className="bg-[hsl(40_30%_98%)]">
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[hsl(40_30%_98%)]/85 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="font-heading text-xl md:text-2xl font-bold text-olive">
            ECS Psicologia
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-olive transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao site
          </Link>
        </div>
      </header>

      <main className="pt-16">
        {/* HERO */}
        <section className="relative min-h-[92vh] flex items-center">
          <img
            src={fotoSofa.url}
            alt="Consultório da ECS Psicologia com sofá em couro preto e parede verde oliva"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(82_25%_18%)]/90 via-[hsl(82_25%_18%)]/70 to-[hsl(82_25%_18%)]/30" />
          <div className="relative z-10 container mx-auto px-6 py-24 md:px-12 lg:px-20 max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs md:text-sm tracking-[0.25em] uppercase text-[hsl(40_45%_78%)] mb-6"
            >
              Sublocação de Consultório
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight !text-[hsl(40_40%_97%)] mb-6"
            >
              Seu consultório, em um espaço pensado para acolher.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-base md:text-lg leading-relaxed !text-[hsl(40_25%_90%)] max-w-2xl mb-10"
            >
              Uma estrutura completa, elegante e acolhedora para você atender seus pacientes
              com conforto, privacidade e profissionalismo.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                size="lg"
                asChild
                className="bg-olive hover:bg-[hsl(82_22%_34%)] text-white rounded-xl px-8 py-7 text-sm md:text-base tracking-wide uppercase"
              >
                <a href={waLink(HERO_MSG)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Quero conhecer o espaço
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* O ESPAÇO */}
        <section className="section-padding">
          <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl">
            <motion.div {...fade}>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-[hsl(82_25%_22%)] mb-6">
                Um espaço pronto para a sua prática clínica.
              </h2>
              <div className="w-16 h-px bg-[hsl(35_35%_55%)] mb-8" />
              <div className="space-y-5 text-body-lg">
                <p>
                  Na ECS Clínica de Psicologia, você encontra um ambiente cuidadosamente
                  preparado para proporcionar conforto, privacidade e uma experiência
                  profissional diferenciada.
                </p>
                <p>
                  Cada detalhe foi pensado para que você possa se concentrar no que realmente
                  importa: o atendimento aos seus pacientes.
                </p>
                <p>
                  Um espaço que combina acolhimento, funcionalidade e uma decoração clássica
                  contemporânea.
                </p>
              </div>
            </motion.div>
            <motion.div {...fade} transition={{ duration: 0.7, delay: 0.15 }}>
              <div className="relative">
                <div className="absolute -inset-3 border border-[hsl(82_18%_70%)] rounded-2xl -z-10 translate-x-3 translate-y-3" />
                <img
                  src={fotoMesa.url}
                  alt="Mesa de atendimento em vidro e poltrona no consultório da ECS Psicologia"
                  loading="lazy"
                  className="w-full rounded-2xl object-cover aspect-[4/5] shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="section-padding bg-olive">
          <div className="container mx-auto max-w-6xl">
            <motion.h2
              {...fade}
              className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold !text-[hsl(40_40%_97%)] text-center mb-4"
            >
              Uma estrutura pensada nos detalhes.
            </motion.h2>
            <div className="w-16 h-px bg-[hsl(40_45%_80%)] mx-auto mb-14" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {diferenciais.map((d, i) => (
                <motion.div
                  key={d.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                  className="flex items-center gap-4 rounded-xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-sm"
                >
                  <d.icon className="w-5 h-5 shrink-0 text-[hsl(40_45%_82%)]" strokeWidth={1.5} />
                  <span className="!text-[hsl(40_30%_95%)] text-sm md:text-base">{d.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* GALERIA */}
        <section className="section-padding">
          <div className="container mx-auto max-w-6xl">
            <motion.div {...fade} className="text-center mb-14">
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-[hsl(82_25%_22%)] mb-4">
                Um ambiente que acolhe.
              </h2>
              <p className="text-body-lg max-w-2xl mx-auto">
                Conheça alguns detalhes do espaço preparado para receber você e seus pacientes.
              </p>
            </motion.div>
            <div className="grid lg:grid-cols-5 gap-6">
              <motion.div {...fade} className="lg:col-span-3">
                <img
                  src={fotoSofa.url}
                  alt="Sala de espera da ECS com sofá em couro, quadros e aparador"
                  loading="lazy"
                  className="w-full h-full rounded-2xl object-cover aspect-[4/3] shadow-md"
                />
              </motion.div>
              <motion.div
                {...fade}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="lg:col-span-2 lg:mt-12"
              >
                <img
                  src={fotoMesa.url}
                  alt="Consultório da ECS com mesa de vidro, poltrona e parede verde oliva"
                  loading="lazy"
                  className="w-full h-full rounded-2xl object-cover aspect-[4/3] lg:aspect-[3/4] shadow-md"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* EMDR */}
        <section className="section-padding bg-[hsl(40_25%_94%)]">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.h2
              {...fade}
              className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-[hsl(82_25%_22%)] mb-6"
            >
              Estrutura preparada para EMDR.
            </motion.h2>
            <motion.p {...fade} transition={{ duration: 0.6, delay: 0.1 }} className="text-body-lg mb-12">
              A ECS também dispõe de recursos para estimulação visual, auditiva e tátil,
              oferecendo uma estrutura preparada para profissionais habilitados que utilizam
              EMDR em sua prática clínica.
            </motion.p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: Eye, label: "Estimulação visual" },
                { icon: Ear, label: "Estimulação auditiva" },
                { icon: Hand, label: "Estimulação tátil" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl bg-card border border-[hsl(82_18%_82%)] px-6 py-10"
                >
                  <item.icon className="w-7 h-7 mx-auto mb-4 text-olive" strokeWidth={1.3} />
                  <p className="font-medium text-[hsl(82_25%_25%)]">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PARA QUEM É */}
        <section className="section-padding">
          <div className="container mx-auto max-w-6xl">
            <motion.div {...fade} className="max-w-3xl mb-14">
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-[hsl(82_25%_22%)] mb-6">
                Para profissionais que valorizam sua prática.
              </h2>
              <p className="text-body-lg">
                A sublocação é uma alternativa para profissionais que desejam atender
                presencialmente em um espaço profissional, acolhedor e estruturado, sem
                precisar manter um consultório próprio em período integral.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paraQuem.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                  className="rounded-2xl border border-[hsl(82_18%_84%)] bg-card p-8 hover:border-olive transition-colors"
                >
                  <div className="w-10 h-px bg-[hsl(35_35%_55%)] mb-5" />
                  <p className="text-[hsl(150_10%_28%)] leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PRATICIDADE */}
        <section className="section-padding bg-[hsl(82_25%_18%)]">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.h2
              {...fade}
              className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold !text-[hsl(40_40%_97%)] mb-8"
            >
              Você cuida do paciente. Nós cuidamos da estrutura.
            </motion.h2>
            <motion.div {...fade} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-5 mb-12">
              <p className="!text-[hsl(40_20%_88%)] text-base md:text-lg leading-relaxed">
                Utilize o consultório nos horários contratados e conte com uma estrutura pronta
                para seus atendimentos.
              </p>
              <p className="!text-[hsl(40_20%_88%)] text-base md:text-lg leading-relaxed">
                Sem a necessidade de montar um espaço do zero, adquirir mobiliário ou assumir
                todos os custos de manutenção de um consultório próprio.
              </p>
            </motion.div>
            <motion.p
              {...fade}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading text-xl md:text-3xl tracking-[0.2em] !text-[hsl(40_45%_78%)] uppercase mb-12"
            >
              Chegue. Atenda. Acolha.
            </motion.p>
            <motion.div {...fade} transition={{ duration: 0.6, delay: 0.3 }}>
              <Button
                size="lg"
                asChild
                className="bg-[hsl(40_45%_78%)] hover:bg-[hsl(40_45%_70%)] text-[hsl(82_25%_18%)] rounded-xl px-8 py-7 text-sm md:text-base tracking-wide uppercase"
              >
                <a href={waLink(HORARIOS_MSG)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Consultar horários e disponibilidade
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* LOCALIZAÇÃO */}
        <section className="section-padding">
          <div className="container mx-auto max-w-3xl text-center">
            <motion.h2
              {...fade}
              className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-[hsl(82_25%_22%)] mb-10"
            >
              Estamos na Asa Sul, em Brasília.
            </motion.h2>
            <motion.address
              {...fade}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="not-italic rounded-2xl border border-[hsl(82_18%_84%)] bg-card p-8 md:p-10 mb-10"
            >
              <MapPin className="w-6 h-6 mx-auto mb-5 text-olive" strokeWidth={1.4} />
              <p className="font-heading text-xl text-[hsl(82_25%_22%)] mb-3">
                ECS Clínica de Psicologia
              </p>
              <p className="leading-relaxed text-base">
                SEPS 705/905 — Edifício Montblanc
                <br />
                Bloco C — Sala 215
                <br />
                Asa Sul — Brasília/DF
                <br />
                CEP 70390-055
              </p>
              <p className="mt-4 text-base">WhatsApp: (61) 99373-0704</p>
            </motion.address>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-olive hover:bg-[hsl(82_22%_34%)] text-white rounded-xl px-8 py-7 uppercase tracking-wide text-sm"
              >
                <a href={WA} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Falar pelo WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-olive text-olive hover:bg-olive-light rounded-xl px-8 py-7 uppercase tracking-wide text-sm"
              >
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                  <MapPin className="mr-2 w-5 h-5" />
                  Como chegar
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="section-padding bg-olive">
          <div className="container mx-auto max-w-3xl text-center">
            <motion.h2
              {...fade}
              className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold !text-[hsl(40_40%_97%)] mb-6"
            >
              Seu próximo consultório pode estar aqui.
            </motion.h2>
            <motion.p
              {...fade}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="!text-[hsl(40_20%_90%)] text-base md:text-lg leading-relaxed mb-10"
            >
              Conheça a estrutura da ECS e encontre um espaço pensado para proporcionar
              conforto, acolhimento e profissionalismo aos seus atendimentos.
            </motion.p>
            <motion.div {...fade} transition={{ duration: 0.6, delay: 0.2 }}>
              <Button
                size="lg"
                asChild
                className="bg-[hsl(40_40%_97%)] hover:bg-[hsl(40_30%_92%)] text-[hsl(82_25%_22%)] rounded-xl px-10 py-7 uppercase tracking-wide text-sm md:text-base"
              >
                <a href={waLink(FINAL_MSG)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Quero conhecer a ECS
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
        <Link to="/" className="text-sm text-olive hover:underline mt-2 inline-block">
          Voltar para a página inicial
        </Link>
      </footer>

      {/* WhatsApp flutuante */}
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

export default Sublocacao;
