import React from 'react';
import { Language } from '../types';
import { LINKS } from '../data/translations';
import { AnimatedTitle } from '../components/AnimatedTitle';

interface PageProps {
  currentLanguage: Language;
}

export const InvestidoresPage: React.FC<PageProps> = ({ currentLanguage }) => {
  return (
    <div className="pt-28 pb-36 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

      {/* Header */}
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-neutral-900 border border-neutral-800 rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#00ffff]" />
          <span className="normative-label text-xs text-[#00ffff]">
            RELAÇÕES COM INVESTIDORES & TESE
          </span>
        </div>

        <AnimatedTitle
          as="h1"
          text={
            currentLanguage === 'pt'
              ? 'Tese de Investimento — Hubstry Deep Tech'
              : 'Investment Thesis — Hubstry Deep Tech'
          }
          className="text-4xl sm:text-6xl font-black text-white"
        />

        <p className="text-xl sm:text-2xl text-neutral-300 max-w-4xl leading-relaxed">
          {currentLanguage === 'pt'
            ? 'Monetizando a fronteira inevitável entre o colapso da criptografia clássica, a exigência de governança de IA e a atualização de infraestruturas críticas.'
            : 'Monetizing the inevitable boundary between classic cryptography collapse, AI governance requirements, and critical infrastructure upgrades.'}
        </p>
      </div>

      {/* Relógios de Risco */}
      <div className="space-y-6">
        <h2 className="text-2xl font-black text-white">
          Os Três Relógios de Risco Sistêmico
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-neutral-950 border border-neutral-800 p-8 rounded-2xl space-y-3">
            <span className="normative-label text-[#ff6605] text-xs">RELÓGIO 1</span>
            <h3 className="text-xl font-bold text-white">Criptográfico (Q-Day)</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              O colapso da criptografia assimétrica (RSA/ECC) por computadores quânticos. O ataque Harvest Now Decrypt Later ocorre hoje.
            </p>
          </div>

          <div className="bg-neutral-950 border border-neutral-800 p-8 rounded-2xl space-y-3">
            <span className="normative-label text-[#00ffff] text-xs">RELÓGIO 2</span>
            <h3 className="text-xl font-bold text-white">Regulatório (ISO 42001)</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Resoluções CMN/BCB, normas do ITI e requerimentos da UE e EUA forçando rastreabilidade e governança compulsória de IA.
            </p>
          </div>

          <div className="bg-neutral-950 border border-neutral-800 p-8 rounded-2xl space-y-3">
            <span className="normative-label text-[#ff6605] text-xs">RELÓGIO 3</span>
            <h3 className="text-xl font-bold text-white">Infraestrutura</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Sistemas legados bancários e estatais operando sem camadas de transição para chaves híbridas pós-quânticas.
            </p>
          </div>
        </div>
      </div>

      {/* Barreira de Entrada & Moats */}
      <div className="bg-neutral-900 border border-neutral-800 p-8 sm:p-12 rounded-3xl space-y-6">
        <h2 className="text-2xl font-black text-white">
          Moat & Barreira de Entrada
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-neutral-300 text-sm leading-relaxed">
          <div className="space-y-2">
            <h4 className="font-bold text-white text-base">1. Corpus Autoral com DOI e Indexação</h4>
            <p>
              Anos de pesquisa com publicações registradas garantem autoridade técnica e precedência teórica rara no mercado latino-americano.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-white text-base">2. Método ILMO e Atlas Lex-IO-Graph</h4>
            <p>
              Ativos de software em produção que transformam diagnósticos complexos em pontuações acionáveis em tempo real.
            </p>
          </div>
        </div>
      </div>

      {/* Modelo de Negócios */}
      <div className="space-y-6">
        <h2 className="text-2xl font-black text-white">
          Modelo de Negócios (B2B / B2G)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-neutral-950 border border-neutral-800 p-6 rounded-2xl">
            <h4 className="font-bold text-[#00ffff] mb-2">Licenciamento de Ativos</h4>
            <p className="text-xs text-neutral-400">Recorrência SaaS/Enterprise para frameworks HGCF, Lex-IO-Graph e bibliotecas PQC.</p>
          </div>
          <div className="bg-neutral-950 border border-neutral-800 p-6 rounded-2xl">
            <h4 className="font-bold text-[#ff6605] mb-2">Consultoria Fracionada</h4>
            <p className="text-xs text-neutral-400">Atuação executiva como CTO, CMO e CPO on demand para grandes organizações.</p>
          </div>
          <div className="bg-neutral-950 border border-neutral-800 p-6 rounded-2xl">
            <h4 className="font-bold text-white mb-2">Projetos de Arquitetura</h4>
            <p className="text-xs text-neutral-400">Implementação customizada de migração pós-quântica e governança de IA.</p>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="bg-neutral-950 border border-neutral-800 p-8 rounded-2xl text-center space-y-4">
        <h3 className="text-xl font-bold text-white">Agende uma reunião privada com o fundador</h3>
        <p className="text-xs text-neutral-400">Apresentação detalhada de tese, roadmap e materiais sob NDA.</p>
        <div>
          <a
            href={LINKS.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#ff6605] text-black font-black text-xs uppercase tracking-wider px-8 py-3.5 rounded-full"
          >
            Agendar Reunião de Relações com Investidores →
          </a>
        </div>
      </div>

    </div>
  );
};
