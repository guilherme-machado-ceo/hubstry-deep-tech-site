import React from 'react';
import { Language } from '../types';
import { LINKS } from '../data/translations';
import { AnimatedTitle } from '../components/AnimatedTitle';

interface PageProps {
  currentLanguage: Language;
}

export const CpgPage: React.FC<PageProps> = ({ currentLanguage }) => {
  return (
    <div className="pt-28 pb-36 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="space-y-6">
        <span className="normative-label text-[#00ffff]">INTELIGÊNCIA INSTITUCIONAL</span>
        <AnimatedTitle
          as="h1"
          text="CPG — Conjuração Processualista Geral"
          className="text-4xl sm:text-6xl font-black text-white"
        />
        <p className="text-xl text-neutral-300 max-w-3xl leading-relaxed">
          A arquitetura de demarcação entre domínios publicada em working papers com DOI e o atlas jurídico-regulatório Lex-IO-Graph.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-neutral-950 border border-neutral-800 p-8 rounded-2xl space-y-4">
          <h3 className="text-xl font-bold text-white">Working Papers com DOI</h3>
          <p className="text-sm text-neutral-400">
            Mais de 15 publicações acadêmicas e técnicas indexadas no Zenodo, demarcando as lacunas entre o texto da lei e o código computacional.
          </p>
          <a href={LINKS.orcid} target="_blank" rel="noopener noreferrer" className="inline-block text-xs text-[#00ffff] font-bold underline">
            Ver Corpus no ORCID →
          </a>
        </div>

        <div className="bg-neutral-950 border border-neutral-800 p-8 rounded-2xl space-y-4">
          <h3 className="text-xl font-bold text-white">Lex-IO-Graph</h3>
          <p className="text-sm text-neutral-400">
            Atlas gráfico de dependências regulatórias e scoring de atrito normativo em produção no Streamlit.
          </p>
          <a href={LINKS.lexIoGraph} target="_blank" rel="noopener noreferrer" className="inline-block text-xs text-[#00ffff] font-bold underline">
            Explorar Lex-IO-Graph Live →
          </a>
        </div>
      </div>
    </div>
  );
};
