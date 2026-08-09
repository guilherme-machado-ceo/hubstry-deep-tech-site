import React from 'react';
import { Language } from '../types';
import { LINKS } from '../data/translations';
import { AnimatedTitle } from '../components/AnimatedTitle';

interface PageProps {
  currentLanguage: Language;
}

export const HgcfPage: React.FC<PageProps> = ({ currentLanguage }) => {
  return (
    <div className="pt-28 pb-36 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-neutral-900 border border-neutral-800 rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#ff6605]" />
          <span className="normative-label text-xs text-[#ff6605]">
            GOVERNANÇA DE INTELIGÊNCIA ARTIFICIAL
          </span>
        </div>

        <AnimatedTitle
          as="h1"
          text="HGCF — Governance & Compliance Framework"
          className="text-4xl sm:text-6xl font-black text-white"
        />

        <p className="text-xl sm:text-2xl text-neutral-300 max-w-3xl leading-relaxed">
          Framework proprietário de governança de IA alinhado à norma ISO/IEC 42001:2023.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-neutral-950 border border-neutral-800 p-8 rounded-2xl space-y-4">
          <h3 className="text-xl font-bold text-[#00ffff]">Preservação de Decisões como Eventos</h3>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Modelos de IA tomam decisões opacas. O HGCF estabelece o protocolo de auditoria determinística, gravando eventos de inferência e entradas operacionais com rastreabilidade criptográfica inalterável.
          </p>
        </div>

        <div className="bg-neutral-950 border border-neutral-800 p-8 rounded-2xl space-y-4">
          <h3 className="text-xl font-bold text-[#ff6605]">Alinhamento ISO/IEC 42001:2023</h3>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Mapeamento direto dos 38 controles do Anexo A e cláusulas da ISO 42001. Transformamos diretrizes genéricas em políticas executáveis no pipeline de desenvolvimento de software e LLMs.
          </p>
        </div>
      </div>

      <div className="bg-neutral-900 border border-neutral-800 p-8 sm:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-black text-white">HMI — Hubstry Maturity Index</h3>
          <p className="text-xs text-neutral-400 mt-1">
            Avalie o estágio de maturidade em governança de IA da sua organização em 3 idiomas.
          </p>
        </div>
        <a
          href={LINKS.hmiApp}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#00ffff] text-black font-black text-xs uppercase tracking-wider px-6 py-3 rounded-full flex-shrink-0"
        >
          Acessar HMI Live →
        </a>
      </div>

    </div>
  );
};
