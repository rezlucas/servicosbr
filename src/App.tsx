import { useState, useEffect } from "react";
import {
  Shield,
  CheckCircle,
  Clock,
  Phone,
  MessageCircle,
  Star,
  Users,
  TrendingUp,
  ChevronDown,
  ArrowRight,
  Scale,
  FileText,
  Heart,
  Briefcase,
  Award,
  RefreshCw,
  AlertCircle,
  Menu,
  X,
  MapPin,
  Mail,
  Minus,
} from "lucide-react";

const WA_LINK =
  "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20fazer%20minha%20an%C3%A1lise%20gratuita";

const ORANGE = "#F59E0B";
const DARK = "#111827";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Início", id: "" },
    { label: "Como Funciona", id: "como-funciona" },
    { label: "Serviços", id: "servicos" },
    { label: "Depoimentos", id: "depoimentos" },
    { label: "FAQ", id: "faq" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between gap-8 py-4">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 flex-shrink-0"
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: ORANGE }}
          >
            <Scale className="w-5 h-5 text-white" />
          </div>
          <div className="text-left">
            <p className="font-extrabold text-sm leading-tight" style={{ color: DARK }}>
              Serviços Brasil
            </p>
            <p className="text-[10px] text-stone-400 leading-tight">Advocacia Previdenciária</p>
          </div>
        </button>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => l.id ? scrollTo(l.id) : window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full text-white transition-all hover:opacity-90 hover:scale-[1.02]"
          style={{ backgroundColor: DARK }}
        >
          Consulta Gratuita
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-stone-700">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-stone-100">
          <nav className="flex flex-col p-4 gap-1">
            {links.map((l) => (
              <button
                key={l.label}
                onClick={() => { l.id ? scrollTo(l.id) : window.scrollTo({ top: 0, behavior: "smooth" }); setOpen(false); }}
                className="text-left text-stone-700 font-medium py-3 px-3 rounded-xl hover:bg-stone-50 transition-colors"
              >
                {l.label}
              </button>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 text-white font-semibold py-3.5 px-4 rounded-full"
              style={{ backgroundColor: DARK }}
            >
              <MessageCircle className="w-4 h-4" />
              Consulta Gratuita
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "92vh", backgroundColor: DARK }}>

      {/* ── DESKTOP: full-bleed background photo ── */}
      <div className="hidden md:block absolute inset-0">
        <img
          src="/imagens/hero-img.webp"
          alt="Cliente satisfeita com benefício INSS"
          className="w-full h-full object-cover object-center select-none"
          draggable={false}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(17,24,39,0.88) 0%, rgba(17,24,39,0.65) 50%, rgba(17,24,39,0.15) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(17,24,39,0.3) 0%, transparent 30%)",
          }}
        />
      </div>

      {/* ── DESKTOP content ── */}
      <div className="hidden md:flex relative h-full max-w-6xl mx-auto px-6 flex-col justify-center" style={{ minHeight: "92vh" }}>
        <div className="max-w-xl py-24">
          <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: ORANGE }}>
            Advocacia Previdenciária · OAB/SP 123.456
          </p>
          <h1 className="text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] mb-4 tracking-tight">
            Conquiste seu<br />benefício do INSS<br />
            <span style={{ color: ORANGE }}>sem pagar nada</span><br />adiantado.
          </h1>
          <p className="text-stone-300 text-base leading-relaxed mb-10 max-w-md">
            Analisamos seu caso gratuitamente. Cuidamos de toda a burocracia e
            você só paga quando ganhar o benefício.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-bold px-8 py-4 rounded-full text-white text-sm transition-all hover:opacity-90 hover:scale-[1.02] shadow-xl"
            style={{ backgroundColor: ORANGE }}
          >
            <MessageCircle className="w-4 h-4" />
            Análise Gratuita pelo WhatsApp
          </a>
        </div>
      </div>

      {/* ── MOBILE: solid background, image between paragraph and CTA ── */}
      <div className="md:hidden flex flex-col px-6 pt-12 pb-10" style={{ backgroundColor: DARK }}>
        <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: ORANGE }}>
          Advocacia Previdenciária · OAB/SP 123.456
        </p>
        <h1 className="text-4xl font-extrabold text-white leading-[1.15] mb-4 tracking-tight">
          Conquiste seu benefício do INSS{" "}
          <span style={{ color: ORANGE }}>sem pagar nada</span> adiantado.
        </h1>
        <p className="text-stone-400 text-sm leading-relaxed mb-6">
          Analisamos seu caso gratuitamente. Cuidamos de toda a burocracia e
          você só paga quando ganhar o benefício.
        </p>

        {/* Hero image */}
        <div className="rounded-2xl overflow-hidden mb-6 w-full" style={{ height: 300 }}>
          <img
            src="/imagens/hero-img.webp"
            alt="Cliente satisfeita com benefício INSS"
            className="w-full h-full object-cover object-center select-none"
            draggable={false}
          />
        </div>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 font-bold px-8 py-4 rounded-full text-white text-sm transition-all hover:opacity-90 shadow-xl"
          style={{ backgroundColor: ORANGE }}
        >
          <MessageCircle className="w-4 h-4" />
          Análise Gratuita pelo WhatsApp
        </a>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-16" fill="white">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}

// ─── Stats Bar ────────────────────────────────────────────────────────────────
function StatsBar() {
  const stats = [
    { icon: <Users className="w-5 h-5" />, value: "+500", label: "Clientes atendidos" },
    { icon: <CheckCircle className="w-5 h-5" />, value: "95%", label: "Taxa de sucesso" },
    { icon: <TrendingUp className="w-5 h-5" />, value: "90%", label: "Aprovação pós-negativa" },
    { icon: <Clock className="w-5 h-5" />, value: "24h", label: "Resposta média" },
  ];

  return (
    <div className="bg-white border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 ${i > 0 ? "lg:border-l border-stone-100 lg:pl-8" : ""}`}
            >
              <div className="flex-shrink-0 hidden sm:block" style={{ color: ORANGE }}>{s.icon}</div>
              <div>
                <p className="font-extrabold text-3xl" style={{ color: DARK }}>{s.value}</p>
                <p className="text-stone-500 text-sm mt-0.5">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Sobre / About ─────────────────────────────────────────────────────────────
function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <div>
            <h2 className="text-4xl font-extrabold mb-2" style={{ color: DARK }}>
              Você merece o que<br />é seu por direito.
            </h2>
            <p className="font-bold uppercase tracking-widest text-xs mb-6" style={{ color: ORANGE }}>
              Nosso compromisso com você
            </p>

            <div className="w-10 h-0.5 mb-8" style={{ backgroundColor: ORANGE }} />

            <p className="text-stone-500 text-base leading-relaxed mb-6">
              Fundado pelo Dr. Ricardo Alves, o Serviços Brasil nasceu da indignação com a
              quantidade de brasileiros que têm seus benefícios negados ou mal calculados pelo
              INSS. Nossa missão é simples: garantir que você receba o que é seu.
            </p>

            <div className="w-10 h-0.5 mb-8" style={{ backgroundColor: ORANGE }} />

            <p className="text-stone-500 text-base leading-relaxed mb-10">
              Combinamos inteligência jurídica com atendimento humanizado para analisar seu caso
              em tempo real, gratuitamente pelo WhatsApp — e só cobramos quando você vencer. Sem
              risco para você, sem letras miúdas.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { label: "Anos de experiência", value: "12+" },
                { label: "Clientes atendidos", value: "500+" },
                { label: "Aprovação pós-negativa", value: "90%" },
                { label: "Recuperado em 2024", value: "R$2,8M" },
              ].map((s, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Minus className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: ORANGE }} />
                  <div>
                    <p className="font-extrabold text-xl" style={{ color: DARK }}>{s.value}</p>
                    <p className="text-stone-500 text-xs">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="font-bold text-xs uppercase tracking-widest mb-3" style={{ color: ORANGE }}>
                Credencial verificável
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-full text-white text-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: ORANGE }}
              >
                Verificar OAB/SP 123.456
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: photo grid */}
          <div className="grid grid-cols-2 gap-4 w-full">
            {/* Col 1: tall photo */}
            <div className="rounded-2xl overflow-hidden" style={{ height: 480 }}>
              <img
                src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=600&q=80"
                alt="Advogado"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Col 2: badge + stat + photo stacked */}
            <div className="flex flex-col gap-4">
              {/* Badge */}
              <div
                className="rounded-2xl flex items-center justify-center py-6"
                style={{ backgroundColor: ORANGE }}
              >
                <div className="text-center text-white">
                  <Scale className="w-10 h-10 mx-auto mb-2" />
                  <p className="text-xs font-bold uppercase tracking-widest leading-tight">
                    Serviços<br />Brasil
                  </p>
                </div>
              </div>

              {/* Stat */}
              <div
                className="rounded-2xl flex items-center justify-center p-5 text-center"
                style={{ backgroundColor: DARK }}
              >
                <div>
                  <p className="text-white text-3xl font-extrabold">95%</p>
                  <p className="text-stone-400 text-xs mt-1">taxa de sucesso</p>
                </div>
              </div>

              {/* Photo */}
              <div className="rounded-2xl overflow-hidden flex-1 min-h-0" style={{ height: 200 }}>
                <img
                  src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=600&q=80"
                  alt="Idosa sorrindo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Como Funciona ────────────────────────────────────────────────────────────
function ComoFunciona() {
  const steps = [
    {
      num: "01",
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Fale conosco pelo WhatsApp",
      desc: "Em poucos minutos analisamos seu caso e verificamos se você tem direito ao benefício — completamente gratuito.",
    },
    {
      num: "02",
      icon: <FileText className="w-6 h-6" />,
      title: "Cuidamos de tudo",
      desc: "Nossa equipe reúne documentos, dá entrada no processo e acompanha cada etapa. Sem burocracia para você.",
    },
    {
      num: "03",
      icon: <Award className="w-6 h-6" />,
      title: "Você recebe — e só então paga",
      desc: "Cobramos apenas uma porcentagem do benefício conquistado. Se não ganhar, não deve nada.",
    },
  ];

  return (
    <section id="como-funciona" className="py-24" style={{ backgroundColor: "#FFFBEB" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-4xl font-extrabold mb-2" style={{ color: DARK }}>
              Como funciona
            </h2>
            <p className="font-bold uppercase tracking-widest text-xs" style={{ color: ORANGE }}>
              Simples, transparente e sem risco para você
            </p>
          </div>
          <div className="w-12 h-0.5" style={{ backgroundColor: ORANGE }} />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 border border-stone-100 hover:shadow-xl transition-all group">
              <div className="flex items-start justify-between mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                  style={{ backgroundColor: ORANGE }}
                >
                  {s.icon}
                </div>
                <span className="text-6xl font-extrabold leading-none select-none" style={{ color: "#FEF3C7" }}>
                  {s.num}
                </span>
              </div>
              <h3 className="font-bold text-lg mb-3" style={{ color: DARK }}>{s.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full text-white transition-all hover:opacity-90"
            style={{ backgroundColor: ORANGE }}
          >
            Quero saber se tenho direito
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Serviços ─────────────────────────────────────────────────────────────────
function Servicos() {
  const items = [
    { icon: <Users className="w-5 h-5" />, title: "Aposentadoria por Idade", desc: "Garanta seu direito quando atingir a idade legal." },
    { icon: <Clock className="w-5 h-5" />, title: "Aposentadoria por Tempo", desc: "Reconhecimento integral do tempo de contribuição." },
    { icon: <Award className="w-5 h-5" />, title: "Aposentadoria Especial", desc: "Para quem trabalhou em condições insalubres." },
    { icon: <Heart className="w-5 h-5" />, title: "Auxílio-Doença", desc: "Benefício por incapacidade temporária para o trabalho." },
    { icon: <AlertCircle className="w-5 h-5" />, title: "Pensão por Morte", desc: "Suporte financeiro garantido para dependentes." },
    { icon: <Briefcase className="w-5 h-5" />, title: "BPC/LOAS", desc: "Benefício assistencial para quem mais precisa." },
    { icon: <RefreshCw className="w-5 h-5" />, title: "Revisão de Benefícios", desc: "Corrija valores calculados incorretamente pelo INSS." },
    { icon: <Scale className="w-5 h-5" />, title: "Recursos e Contestações", desc: "Revertemos negativas administrativas e judiciais." },
  ];

  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <h2 className="text-4xl font-extrabold mb-2" style={{ color: DARK }}>
            Benefícios que conquistamos<br />para você.
          </h2>
          <p className="font-bold uppercase tracking-widest text-xs mb-4" style={{ color: ORANGE }}>
            Nossos serviços
          </p>
          <div className="w-10 h-0.5" style={{ backgroundColor: ORANGE }} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl p-6 border border-stone-100 hover:border-amber-200 hover:shadow-lg transition-all cursor-default"
              style={{ backgroundColor: "#FAFAFA" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-white flex-shrink-0"
                style={{ backgroundColor: ORANGE }}
              >
                {item.icon}
              </div>
              <h3 className="font-bold text-stone-900 text-sm mb-1.5">{item.title}</h3>
              <p className="text-stone-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Photo Banner ─────────────────────────────────────────────────────────────
function PhotoBanner() {
  return (
    <section className="relative h-80 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1600&q=80"
        alt="Equipe Serviços Brasil"
        className="w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to right, rgba(17,24,39,0.85) 40%, rgba(17,24,39,0.4) 100%)" }}
      />
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>
            12+ anos de experiência
          </p>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white max-w-lg leading-tight">
            Mais de 5.000 casos ganhos em todo o Brasil.
          </h3>
        </div>
      </div>
    </section>
  );
}

// ─── Depoimentos ──────────────────────────────────────────────────────────────
const DEPOIMENTOS = [
  { nome: "Maria Helena S.", cidade: "São Paulo, SP", beneficio: "Aposentadoria por Tempo", tempo: "8 meses", texto: "Tentei sozinha por 2 anos e nada. Com o Serviços Brasil, em 8 meses recebi minha aposentadoria. Profissionais incríveis!", iniciais: "MH" },
  { nome: "Carlos Alberto M.", cidade: "Rio de Janeiro, RJ", beneficio: "Auxílio-Doença", tempo: "4 meses", texto: "O INSS negou meu auxílio-doença duas vezes. A equipe entrou com recurso e conseguimos reverter. Sem eles não teria conseguido.", iniciais: "CA" },
  { nome: "Ana Paula R.", cidade: "Belo Horizonte, MG", beneficio: "Revisão de Benefício", tempo: "6 meses", texto: "A revisão aumentou meu benefício em 40%! Eu nem sabia que tinha esse direito. Gratidão enorme por toda a dedicação.", iniciais: "AP" },
  { nome: "José Ferreira L.", cidade: "Fortaleza, CE", beneficio: "BPC/LOAS", tempo: "5 meses", texto: "Achei que nunca conseguiria o BPC. A equipe encontrou o caminho jurídico certo. Recomendo muito para todos!", iniciais: "JF" },
  { nome: "Rosangela T.", cidade: "Curitiba, PR", beneficio: "Aposentadoria por Idade", tempo: "3 meses", texto: "Pesquisei o número da OAB, é tudo verdadeiro. Atendimento impecável do começo ao fim. Me senti muito segura.", iniciais: "RT" },
  { nome: "Francisco N.", cidade: "Salvador, BA", beneficio: "Pensão por Morte", tempo: "7 meses", texto: "Precisava da pensão para cuidar dos filhos após perder minha esposa. A equipe foi extremamente humana e eficiente.", iniciais: "FN" },
];

function Depoimentos() {
  return (
    <section id="depoimentos" className="py-24" style={{ backgroundColor: "#FFFBEB" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <h2 className="text-4xl font-extrabold mb-2" style={{ color: DARK }}>
              Histórias reais.<br />Vidas transformadas.
            </h2>
            <p className="font-bold uppercase tracking-widest text-xs" style={{ color: ORANGE }}>
              Depoimentos de clientes
            </p>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 font-semibold px-5 py-2.5 rounded-full border text-sm hover:bg-stone-50 transition-colors"
            style={{ borderColor: ORANGE, color: ORANGE }}
          >
            Começar agora
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DEPOIMENTOS.map((d, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-stone-100 flex flex-col gap-4 hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-stone-700 text-sm leading-relaxed flex-1">"{d.texto}"</p>
              <div className="flex items-center gap-3 pt-3 border-t border-stone-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xs"
                  style={{ backgroundColor: DARK }}
                >
                  {d.iniciais}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-stone-900 text-sm">{d.nome}</p>
                  <p className="text-stone-400 text-xs">{d.cidade}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span
                    className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full text-white"
                    style={{ backgroundColor: ORANGE }}
                  >
                    {d.beneficio}
                  </span>
                  <p className="text-stone-400 text-[10px] mt-0.5">{d.tempo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section className="relative overflow-hidden py-24" style={{ backgroundColor: DARK }}>
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5"
        style={{ backgroundColor: ORANGE, transform: "translate(30%, -30%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5"
        style={{ backgroundColor: ORANGE, transform: "translate(-30%, 30%)" }}
      />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: ORANGE }}>
          Análise gratuita · sem compromisso
        </p>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Descubra se você tem<br />direito a um benefício.
        </h2>
        <p className="text-stone-400 text-lg mb-10">Em 2 minutos pelo WhatsApp.</p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 font-bold px-10 py-5 rounded-full text-white text-lg transition-all hover:scale-105 hover:opacity-90"
          style={{ backgroundColor: ORANGE }}
        >
          <MessageCircle className="w-6 h-6" />
          Começar Análise Agora
        </a>
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-stone-500 text-sm">
          {[
            { icon: <Shield className="w-4 h-4" />, label: "OAB/SP 123.456" },
            { icon: <CheckCircle className="w-4 h-4" />, label: "100% gratuito" },
            { icon: <Award className="w-4 h-4" />, label: "Dados protegidos" },
          ].map((b, i) => (
            <div key={i} className="flex items-center gap-2">
              <span style={{ color: ORANGE }}>{b.icon}</span>
              {b.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  { q: "Não é golpe?", a: "Somos inscritos na OAB sob o número OAB/SP 123.456, verificável em oab.org.br por qualquer pessoa. Nosso CNPJ 12.345.678/0001-90 é público na Receita Federal. Transparência total." },
  { q: "Como vocês ganham dinheiro?", a: "Cobramos apenas honorários de êxito — uma porcentagem do benefício conquistado. Se não ganharmos, você não paga absolutamente nada." },
  { q: "Quanto tempo demora?", a: "Processos administrativos levam em média 3 a 8 meses. Processos judiciais podem levar mais. Mantemos você informado a cada movimentação pelo WhatsApp." },
  { q: "Preciso ir ao escritório?", a: "Não. Todo o atendimento, análise de documentos e acompanhamento é feito 100% online pelo WhatsApp e e-mail. Você não precisa sair de casa." },
  { q: "Quais documentos preciso?", a: "Em geral: RG, CPF, carteira de trabalho e extrato do CNIS. Nossa equipe te orienta exatamente o que é necessário para o seu caso." },
  { q: "O que acontece se eu perder?", a: "Você não paga nada. Nenhum honorário, taxa ou custo de qualquer tipo. Só ganhamos quando você ganha." },
  { q: "Meu benefício foi negado há anos, ainda dá tempo?", a: "Em muitos casos, sim. Existe prazo decadencial de 10 anos para revisão de benefícios já concedidos." },
  { q: "Posso acompanhar meu caso?", a: "Sim. Você recebe atualizações pelo WhatsApp a cada movimentação. Nossa equipe está disponível para tirar dúvidas durante todo o processo." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <h2 className="text-4xl font-extrabold mb-2" style={{ color: DARK }}>
              Tire suas dúvidas<br />antes de começar.
            </h2>
            <p className="font-bold uppercase tracking-widest text-xs mb-4" style={{ color: ORANGE }}>
              Dúvidas frequentes
            </p>
            <div className="w-10 h-0.5 mb-8" style={{ backgroundColor: ORANGE }} />
            <p className="text-stone-500 leading-relaxed mb-8">
              Sabemos que o público do INSS tem muitas dúvidas e desconfianças. Aqui respondemos
              as principais com total transparência.
            </p>
            <div className="rounded-2xl p-6 border border-stone-100" style={{ backgroundColor: "#FFFBEB" }}>
              <p className="font-bold text-stone-900 mb-1">Ainda tem dúvidas?</p>
              <p className="text-stone-500 text-sm mb-4">
                Fale com nossa equipe agora pelo WhatsApp.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold px-5 py-3 rounded-full text-white text-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: ORANGE }}
              >
                <MessageCircle className="w-4 h-4" />
                Falar no WhatsApp
              </a>
            </div>
          </div>

          <div className="space-y-2">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="border border-stone-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-stone-50 transition-colors"
                >
                  <span className="font-semibold text-stone-900 text-sm pr-4">{item.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                    style={{ color: open === i ? ORANGE : "#A8A29E" }}
                  />
                </button>
                {open === i && (
                  <div className="px-5 pb-5 bg-stone-50 border-t border-stone-100">
                    <p className="text-stone-600 text-sm leading-relaxed pt-4">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const servicos = ["Aposentadoria por Idade", "Aposentadoria por Tempo", "Aposentadoria Especial", "Auxílio-Doença", "BPC/LOAS", "Revisão de Benefícios"];
  const empresa = [
    { label: "Como Funciona", id: "como-funciona" },
    { label: "Depoimentos", id: "depoimentos" },
    { label: "FAQ", id: "faq" },
  ];

  return (
    <footer className="text-stone-400" style={{ backgroundColor: DARK }}>
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: ORANGE }}>
                <Scale className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-white text-base">Serviços Brasil</span>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed mb-5">
              Advocacia especializada em benefícios previdenciários. Análise gratuita, pagamento só no sucesso.
            </p>
            <div className="flex items-center gap-2 text-xs">
              <Shield className="w-3.5 h-3.5" style={{ color: ORANGE }} />
              <span style={{ color: ORANGE }} className="font-semibold">OAB/SP 123.456</span>
              <span className="text-stone-600">· Dr. Ricardo Alves</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Serviços</h4>
            <ul className="space-y-2.5">
              {servicos.map((s) => (
                <li key={s}>
                  <button onClick={() => scrollTo("servicos")} className="text-sm hover:text-white transition-colors text-left">{s}</button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Empresa</h4>
            <ul className="space-y-2.5">
              {empresa.map((e) => (
                <li key={e.id}>
                  <button onClick={() => scrollTo(e.id)} className="text-sm hover:text-white transition-colors text-left">{e.label}</button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm hover:text-white transition-colors">
                  <MessageCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:contato@servicosbr.online" className="flex items-start gap-2 text-sm hover:text-white transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />contato@servicosbr.online
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Av. Paulista, 1000<br />São Paulo – SP</span>
                </div>
              </li>
              <li>
                <a href="tel:+5511999999999" className="flex items-start gap-2 text-sm hover:text-white transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />(11) 99999-9999
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-600">
          <p>© {new Date().getFullYear()} Serviços Brasil. Todos os direitos reservados.</p>
          <p>CNPJ 12.345.678/0001-90 · Inscrição OAB/SP 123.456</p>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => { document.documentElement.style.scrollBehavior = ""; };
  }, []);

  return (
    <div className="min-h-screen font-sans antialiased">
      <Navbar />
      <Hero />
      <StatsBar />
      <Sobre />
      <ComoFunciona />
      <Servicos />
      <PhotoBanner />
      <Depoimentos />
      <CTABanner />
      <FAQ />
      <Footer />
    </div>
  );
}
