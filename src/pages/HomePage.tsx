import React, { useState } from 'react';
import { Language, PageId } from '../types';
import { LINKS, ACCORDIONS, SOLUTIONS, PROOF_ITEMS } from '../data/translations';
import { AnimatedTitle } from '../components/AnimatedTitle';
import { Accordion } from '../components/Accordion';

interface HomePageProps {
  currentLanguage: Language;
  onNavigate: (page: PageId, targetHash?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ currentLanguage, onNavigate }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    organizacao: '',
    cargo: '',
    mensagem: '',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="w-full">
      
      {/* ==========================================
          BLOCO 1 — BANNER HERO (Fundo Escuro)
      ========================================== */}
      <section
        id="hero-banner"
        className="relative min-h-screen flex flex-col justify-center bg-black text-white px-4 sm:px-6 lg:px-8 pt-32 pb-36 overflow-hidden border-b border-neutral-900"
      >
        {/* Subtle background gradient ambient mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-900/60 via-black to-black -z-10" />
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#00ffff]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#ff6605]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto w-full space-y-8">
          
          {/* Badge Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-neutral-900 border border-neutral-800 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#ff6605] animate-pulse" />
            <span className="normative-label text-xs text-[#00ffff] tracking-widest">
              {currentLanguage === 'pt' ? 'LANÇAMENTO · ILMO' : 'LAUNCH · ILMO'}
            </span>
          </div>

          {/* Main Hero Animated Title */}
          <AnimatedTitle
            as="h1"
            text={
              currentLanguage === 'pt'
                ? 'Conformidade plena. Proteção zero.'
                : 'Full compliance. Zero protection.'
            }
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.98]"
          />

          {/* Body Description */}
          <div className="max-w-3xl space-y-4">
            <p className="text-xl sm:text-2xl text-neutral-300 font-normal leading-relaxed">
              {currentLanguage === 'pt'
                ? 'Sua instituição pode passar em toda auditoria, satisfazer o regulador, usar apenas algoritmos permitidos — e estar inteiramente exposta.'
                : 'Your institution can pass every audit, satisfy the regulator, use only allowed algorithms — and be entirely exposed.'}
            </p>
            <p className="text-lg sm:text-xl font-bold text-[#00ffff]">
              {currentLanguage === 'pt'
                ? 'ILMO mede essa distância.'
                : 'ILMO measures that gap.'}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href={LINKS.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#ff6605] hover:bg-[#ff7a20] text-black font-black text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow-xl shadow-[#ff6605]/20 hover:-translate-y-0.5 transition-all duration-250 cursor-pointer"
            >
              {currentLanguage === 'pt' ? 'Agendar diagnóstico' : 'Schedule Diagnostic'}
            </a>

            <a
              href={LINKS.pqcApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white font-bold text-sm px-8 py-4 rounded-full hover:border-[#00ffff]/50 transition-all duration-250"
            >
              {currentLanguage === 'pt' ? 'Ler o estudo' : 'Read the Study'} →
            </a>
          </div>

        </div>
      </section>

      {/* ==========================================
          BLOCO 2 — O PROBLEMA (Fundo Claro + Layer Overlap)
      ========================================== */}
      <section
        id="o-problema"
        className="relative z-10 bg-[#f8f9fb] text-[#0a0b0e] px-4 sm:px-6 lg:px-8 py-24 md:py-36 layer-overlap"
      >
        <div className="max-w-3xl mx-auto space-y-8">
          
          <AnimatedTitle
            as="h2"
            text={
              currentLanguage === 'pt'
                ? 'Existe um ataque em curso que não dispara nenhum alarme.'
                : 'There is an ongoing attack that triggers no alarm.'
            }
            className="text-3xl sm:text-5xl font-black text-[#0a0b0e] leading-[1.05]"
          />

          <div className="space-y-6 text-lg sm:text-xl text-neutral-800 leading-[1.65] font-normal">
            <p>
              {currentLanguage === 'pt'
                ? 'Chama-se colher agora, decifrar depois. O adversário não tenta quebrar a sua criptografia hoje. Ele captura o tráfego cifrado e guarda, à espera do computador quântico que vai abri-lo.'
                : 'It is called store now, decrypt later. The adversary does not attempt to break your encryption today. They capture your encrypted traffic and store it, awaiting the quantum computer that will unlock it.'}
            </p>
            <p>
              {currentLanguage === 'pt'
                ? 'O dado que sai da sua instituição amanhã de manhã já está, a partir daquele instante, fora do seu controle. Mesmo cifrado. Mesmo com todos os controles implantados.'
                : 'The data leaving your institution tomorrow morning is already, from that very moment, outside your control. Even if encrypted. Even with all controls implemented.'}
            </p>
            <p className="font-bold text-[#0a0b0e] border-l-4 border-[#ff6605] pl-4 py-1">
              {currentLanguage === 'pt'
                ? 'Não há incidente. Não há notificação. Não há item no comitê de risco. A exposição só se materializa anos depois, quando a correção já não existe.'
                : 'There is no incident. No notification. No agenda item in the risk committee. Exposure only materializes years later, when remediation no longer exists.'}
            </p>
          </div>

        </div>
      </section>

      {/* ==========================================
          BLOCO 3 — POR QUE A CONFORMIDADE NÃO PROTEGE (Fundo Escuro)
      ========================================== */}
      <section
        id="conformidade"
        className="bg-black text-white section-padding px-4 sm:px-6 lg:px-8 border-t border-neutral-900"
      >
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="space-y-4">
            <span className="normative-label text-[#00ffff]">
              {currentLanguage === 'pt' ? 'DIAGNÓSTICO NORMATIVO' : 'NORMATIVE DIAGNOSIS'}
            </span>
            <AnimatedTitle
              as="h2"
              text={
                currentLanguage === 'pt'
                  ? 'Por que a conformidade não protege'
                  : 'Why compliance does not protect'
              }
              className="text-3xl sm:text-5xl font-black text-white"
            />
          </div>

          {/* Three Accordions */}
          <div className="divide-y divide-neutral-800 border-t border-b border-neutral-800">
            {ACCORDIONS.map((acc, index) => (
              <Accordion
                key={acc.id}
                id={acc.id}
                title={currentLanguage === 'pt' ? acc.titlePt : acc.titleEn}
                summary={currentLanguage === 'pt' ? acc.summaryPt : acc.summaryEn}
                content={currentLanguage === 'pt' ? acc.contentPt : acc.contentEn}
                defaultOpen={index === 0}
              />
            ))}
          </div>

          {/* Large Typographic Callout Quote */}
          <div className="bg-neutral-950 border border-neutral-800 p-8 sm:p-12 rounded-2xl space-y-6">
            <blockquote className="text-xl sm:text-2xl font-normal leading-relaxed text-neutral-200">
              {currentLanguage === 'pt'
                ? '“Uma instituição pode satisfazer o Banco Central, satisfazer a ICP-Brasil, passar em auditoria e operar inteiramente em criptografia clássica. Nenhuma norma falhou. O que falta é a fronteira.”'
                : '“An institution can satisfy the Central Bank, satisfy ICP-Brasil, pass audits, and operate entirely on classical cryptography. No standard failed. What is missing is the frontier.”'}
            </blockquote>
          </div>

        </div>
      </section>

      {/* ==========================================
          BLOCO 4 — AS TRÊS FASES DO ILMO (Fundo Claro)
      ========================================== */}
      <section
        id="fases-ilmo"
        className="bg-[#f8f9fb] text-[#0a0b0e] section-padding px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="space-y-3">
            <span className="normative-label text-[#ff6605]">
              {currentLanguage === 'pt' ? 'METODOLOGIA PROPRIETÁRIA' : 'PROPRIETARY METHODOLOGY'}
            </span>
            <AnimatedTitle
              as="h2"
              text={
                currentLanguage === 'pt'
                  ? 'Um percurso em três fases.'
                  : 'A roadmap in three phases.'
              }
              className="text-3xl sm:text-5xl font-black text-[#0a0b0e]"
            />
            <p className="text-lg text-neutral-600">
              {currentLanguage === 'pt'
                ? 'Cada fase entrega valor sozinha e habilita a seguinte.'
                : 'Each phase delivers standalone value and enables the next.'}
            </p>
          </div>

          {/* 3 Cards Linked by Line */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Card 1 (Highlighted) */}
            <div className="bg-white border-2 border-[#ff6605] p-8 rounded-2xl shadow-lg space-y-4 relative">
              <span className="normative-label text-[#ff6605] text-xs">
                {currentLanguage === 'pt' ? 'PONTO DE ENTRADA' : 'ENTRY POINT'}
              </span>
              <h3 className="text-2xl font-black text-[#0a0b0e]">
                01 · ILMO Análise
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {currentLanguage === 'pt'
                  ? 'Análise de risco criptográfico. Mapeamento elo a elo da sua exposição, com a separação entre o que já se perdeu e o que ainda é demarcável.'
                  : 'Cryptographic risk analysis. Link-by-link mapping of your exposure, separating what is already lost from what remains demarcable.'}
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-neutral-300 p-8 rounded-2xl shadow-sm space-y-4">
              <span className="normative-label text-neutral-500 text-xs">
                02 · IMPLEMENTAÇÃO
              </span>
              <h3 className="text-2xl font-black text-[#0a0b0e]">
                02 · ILMO Implementação
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {currentLanguage === 'pt'
                  ? 'Migração dos elos priorizados na Fase 1, com trilha de decisão documentada para o regulador e para o auditor.'
                  : 'Migration of prioritized links from Phase 1, with documented decision trail for regulator and auditor.'}
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-neutral-300 p-8 rounded-2xl shadow-sm space-y-4">
              <span className="normative-label text-neutral-500 text-xs">
                03 · TECNOLOGIA
              </span>
              <h3 className="text-2xl font-black text-[#0a0b0e]">
                03 · ILMO Tecnologia
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {currentLanguage === 'pt'
                  ? 'Implementações de referência em ML-KEM, ML-DSA e SLH-DSA, mais a camada proprietária de autenticação harmônica.'
                  : 'Reference implementations in ML-KEM, ML-DSA, and SLH-DSA, plus proprietary harmonic authentication layer.'}
              </p>
            </div>

          </div>

          {/* Banner link below cards */}
          <div className="bg-neutral-900 text-white p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-neutral-800">
            <p className="text-sm sm:text-base leading-relaxed max-w-2xl text-neutral-300">
              <strong className="text-white font-bold">Método ILMO</strong> — {currentLanguage === 'pt' 
                ? 'a metodologia proprietária que sustenta as três fases. Taxonomia pública, procedimento de levantamento e demarcação reservado.'
                : 'the proprietary methodology underlying all three phases. Public taxonomy, reserved assessment and demarcation procedures.'}
            </p>
            <button
              type="button"
              onClick={() => onNavigate('ilmo')}
              className="bg-[#00ffff] hover:bg-[#33ffff] text-black font-black text-xs uppercase tracking-wider px-6 py-3 rounded-full flex-shrink-0 cursor-pointer"
            >
              {currentLanguage === 'pt' ? 'Conhecer o ILMO →' : 'Discover ILMO →'}
            </button>
          </div>

        </div>
      </section>

      {/* ==========================================
          BLOCO 5 — QUEM SOMOS (Fundo Escuro)
      ========================================== */}
      <section
        id="quem-somos"
        className="bg-black text-white section-padding px-4 sm:px-6 lg:px-8 border-t border-neutral-900"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Left Title */}
          <div className="md:col-span-5 space-y-4">
            <span className="normative-label text-[#00ffff]">
              {currentLanguage === 'pt' ? 'VENTURE BUILDER DEEP TECH' : 'DEEP TECH VENTURE BUILDER'}
            </span>
            <AnimatedTitle
              as="h2"
              text="Hubstry Deep Tech"
              className="text-4xl sm:text-6xl font-black text-white"
            />
            <p className="text-xl text-neutral-400 font-medium">
              Um operating deep tech venture builder.
            </p>
          </div>

          {/* Right Text */}
          <div className="md:col-span-7 space-y-6 text-base sm:text-lg text-neutral-300 leading-relaxed">
            <p>
              {currentLanguage === 'pt'
                ? 'Pesquisamos, desenvolvemos e operamos ativos tecnológicos proprietários, e os aplicamos a problemas que atravessam Direito, Tecnologia e Capital ao mesmo tempo.'
                : 'We research, develop, and operate proprietary tech assets, applying them to problems intersecting Law, Technology, and Capital simultaneously.'}
            </p>
            <p>
              {currentLanguage === 'pt'
                ? 'Trabalhamos onde o risco não pertence a nenhuma área isoladamente. É ali que ele se aloja, e é ali que ninguém está olhando.'
                : 'We work where risk belongs to no single isolated domain. That is where risk lodges, and that is where nobody is looking.'}
            </p>
            <p>
              {currentLanguage === 'pt'
                ? 'Não partimos de ferramenta. Partimos de demarcação: identificar onde um mesmo termo governa simultaneamente uma relação jurídica, um sistema técnico e uma alocação econômica, e onde as três leituras divergem sem que nenhuma fronteira as traduza.'
                : 'We do not start from tools. We start from demarcation: identifying where the same term simultaneously governs a legal relationship, a technical system, and an economic allocation, and where the three readings diverge without any boundary translating them.'}
            </p>
            <p className="text-sm text-neutral-400 pt-2">
              {currentLanguage === 'pt'
                ? 'Fundada em 2023, no Rio de Janeiro. Núcleo pequeno, inteligência federada, execução glocal.'
                : 'Founded in 2023, in Rio de Janeiro. Small core, federated intelligence, glocal execution.'}
            </p>

            {/* Ethics Badge */}
            <div className="bg-neutral-950 border border-[#ff6605]/40 p-6 rounded-2xl space-y-2">
              <span className="normative-label text-[#ff6605] text-xs">
                {currentLanguage === 'pt' ? 'CLÁUSULA ÉTICA INEGOCIÁVEL' : 'NON-NEGOTIABLE ETHICS CLAUSE'}
              </span>
              <p className="text-sm text-neutral-200">
                {currentLanguage === 'pt'
                  ? 'Nenhuma tecnologia ou método da Hubstry é licenciado para armas autônomas de inteligência artificial ou para vigilância de cidadãos.'
                  : 'No Hubstry technology or method is licensed for autonomous artificial intelligence weapons or citizen surveillance.'}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          BLOCO 6 — SOLUÇÕES (Fundo Claro Grid 2x2)
      ========================================== */}
      <section
        id="solucoes"
        className="bg-[#f8f9fb] text-[#0a0b0e] section-padding px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="space-y-3">
            <span className="normative-label text-[#00ffff] bg-black px-3 py-1 rounded-md">
              {currentLanguage === 'pt' ? 'VERTICAIS & PRODUTOS' : 'VERTICALS & PRODUCTS'}
            </span>
            <AnimatedTitle
              as="h2"
              text={
                currentLanguage === 'pt'
                  ? 'Quatro frentes. Uma arquitetura por baixo de todas.'
                  : 'Four fronts. One architecture beneath them all.'
              }
              className="text-3xl sm:text-5xl font-black text-[#0a0b0e]"
            />
          </div>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SOLUTIONS.map((sol) => (
              <div
                key={sol.id}
                className="bg-white border border-neutral-300 p-8 sm:p-10 rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 space-y-6"
              >
                <div className="space-y-4">
                  <span className="normative-label text-xs text-[#ff6605] bg-neutral-100 px-3 py-1 rounded-full">
                    {sol.tag}
                  </span>
                  <h3 className="text-2xl font-black text-[#0a0b0e]">
                    {currentLanguage === 'pt' ? sol.titlePt : sol.titleEn}
                  </h3>
                  <p className="text-base text-neutral-700 leading-relaxed">
                    {currentLanguage === 'pt' ? sol.descPt : sol.descEn}
                  </p>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => onNavigate(sol.id)}
                    className="inline-flex items-center gap-2 font-black text-sm text-black hover:text-[#ff6605] transition-colors cursor-pointer"
                  >
                    <span>{currentLanguage === 'pt' ? sol.linkTextPt : sol.linkTextEn}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Discrete Base Research Links */}
          <div className="pt-6 border-t border-neutral-300 flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-700 font-bold">
            <span>{currentLanguage === 'pt' ? 'Pesquisa de base:' : 'Foundational research:'}</span>
            <button
              type="button"
              onClick={() => onNavigate('gurudev')}
              className="text-black hover:text-[#ff6605] underline cursor-pointer"
            >
              GuruDev® →
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={() => onNavigate('nautam')}
              className="text-black hover:text-[#ff6605] underline cursor-pointer"
            >
              Nautam IoT Protocol →
            </button>
          </div>

        </div>
      </section>

      {/* ==========================================
          BLOCO 7 — PROVA (Fundo Escuro Links Verificáveis)
      ========================================== */}
      <section
        id="prova"
        className="bg-black text-white section-padding px-4 sm:px-6 lg:px-8 border-t border-neutral-900"
      >
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="space-y-3">
            <span className="normative-label text-[#00ffff]">
              {currentLanguage === 'pt' ? 'CORPUS PÚBLICO' : 'PUBLIC CORPUS'}
            </span>
            <AnimatedTitle
              as="h2"
              text={
                currentLanguage === 'pt'
                  ? 'Não é apresentação. Está no ar.'
                  : 'Not a deck. It is live.'
              }
              className="text-3xl sm:text-5xl font-black text-white"
            />
          </div>

          {/* 2-column Verifiable Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROOF_ITEMS.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-neutral-950 border border-neutral-800 p-6 rounded-2xl hover:border-[#00ffff]/60 transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="normative-label text-[11px] text-[#00ffff]">
                      {item.platform}
                    </span>
                    <span className="text-neutral-500 group-hover:text-[#00ffff] transition-colors">↗</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#00ffff] transition-colors">
                    {currentLanguage === 'pt' ? item.titlePt : item.titleEn}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {currentLanguage === 'pt' ? item.descPt : item.descEn}
                  </p>
                </div>
                <span className="text-xs font-bold text-[#00ffff] underline">
                  {currentLanguage === 'pt' ? 'Acessar recurso' : 'Access resource'} →
                </span>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================
          BLOCO 8 — CONTATO (Fundo Claro Formulário)
      ========================================== */}
      <section
        id="contato"
        className="bg-[#f8f9fb] text-[#0a0b0e] section-padding px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Form Side */}
          <div className="md:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-neutral-300 shadow-md space-y-6">
            <div className="space-y-2">
              <span className="normative-label text-[#ff6605]">
                {currentLanguage === 'pt' ? 'INICIE O DIÁLOGO' : 'START DIALOGUE'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a0b0e]">
                {currentLanguage === 'pt'
                  ? 'Comece por uma conversa de 45 minutos.'
                  : 'Start with a 45-minute conversation.'}
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {currentLanguage === 'pt'
                  ? 'Sem apresentação institucional. Você traz a sua arquitetura, nós trazemos as perguntas que ninguém está fazendo. Ao final você sabe se há trabalho a fazer — e, se não houver, dizemos isso.'
                  : 'No deck. You bring your architecture, we bring the questions nobody is asking. In the end, you know if there is work to be done — and if not, we tell you.'}
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-300 p-6 rounded-2xl text-emerald-900 space-y-2">
                <h3 className="font-bold text-lg">
                  {currentLanguage === 'pt' ? 'Mensagem enviada com sucesso!' : 'Message sent successfully!'}
                </h3>
                <p className="text-sm">
                  {currentLanguage === 'pt'
                    ? 'Recebemos seu contato. Guilherme Gonçalves Machado retornará em breve.'
                    : 'We received your request. Guilherme Gonçalves Machado will reach out shortly.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      {currentLanguage === 'pt' ? 'Nome completo *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00ffff] text-sm text-black"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      {currentLanguage === 'pt' ? 'E-mail corporativo *' : 'Corporate Email *'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00ffff] text-sm text-black"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      {currentLanguage === 'pt' ? 'Organização / Empresa' : 'Organization / Company'}
                    </label>
                    <input
                      type="text"
                      value={formData.organizacao}
                      onChange={(e) => setFormData({ ...formData, organizacao: e.target.value })}
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00ffff] text-sm text-black"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      {currentLanguage === 'pt' ? 'Cargo / Função' : 'Title / Role'}
                    </label>
                    <input
                      type="text"
                      value={formData.cargo}
                      onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00ffff] text-sm text-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    {currentLanguage === 'pt' ? 'Mensagem / Contexto' : 'Message / Context'}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00ffff] text-sm text-black"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0a0b0e] hover:bg-black text-white font-black text-sm uppercase tracking-wider py-4 rounded-xl shadow-lg cursor-pointer transition-colors"
                >
                  {currentLanguage === 'pt' ? 'Enviar mensagem' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Quick Schedule & Direct Contacts Side */}
          <div className="md:col-span-5 space-y-8 pt-4">

            <div className="bg-black text-white p-8 rounded-3xl space-y-6 shadow-xl border border-neutral-800">
              <span className="normative-label text-[#00ffff] text-xs">
                {currentLanguage === 'pt' ? 'AGENDA DIRETA' : 'DIRECT CALENDAR'}
              </span>
              <h3 className="text-2xl font-black text-white">
                {currentLanguage === 'pt' ? 'Agendamento imediato' : 'Immediate Booking'}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {currentLanguage === 'pt'
                  ? 'Escolha o melhor horário na agenda do fundador:'
                  : 'Select the best time on the founder’s calendar:'}
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href={LINKS.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between bg-[#ff6605] text-black font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md cursor-pointer hover:bg-[#ff7a20] transition-colors"
                >
                  <span>{currentLanguage === 'pt' ? 'Agendar no Calendly' : 'Schedule on Calendly'}</span>
                  <span>→</span>
                </a>

                <a
                  href={LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between bg-neutral-900 border border-neutral-800 hover:border-[#00ffff] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-colors"
                >
                  <span>{currentLanguage === 'pt' ? 'Falar no WhatsApp' : 'Chat on WhatsApp'}</span>
                  <span className="text-[#00ffff]">💬</span>
                </a>
              </div>
            </div>

            <div className="space-y-2 text-sm text-neutral-800">
              <p className="font-black text-base text-black">
                Guilherme Gonçalves Machado
              </p>
              <p className="text-xs text-neutral-600">Fundador & CEO · Hubstry Deep Tech</p>
              <p className="text-xs text-neutral-600 font-mono pt-1">
                guihermemachado.ceo@hubstry.dev
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
