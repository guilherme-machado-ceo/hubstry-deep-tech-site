import React from 'react';
import { Language } from '../types';
import { LINKS } from '../data/translations';
import { AnimatedTitle } from '../components/AnimatedTitle';

interface PageProps {
  currentLanguage: Language;
}

export const NautamPage: React.FC<PageProps> = ({ currentLanguage }) => {
  return (
    <div className="pt-28 pb-36 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="space-y-6">
        <span className="normative-label text-[#ff6605]">PROTOCOLOS IOT</span>
        <AnimatedTitle
          as="h1"
          text="Nautam — Protocolo IoT de Séries Harmônicas"
          className="text-4xl sm:text-6xl font-black text-white"
        />
        <p className="text-xl text-neutral-300 max-w-3xl leading-relaxed">
          Protocolo de comunicação leve para dispositivos de borda baseado em ressonância e séries harmônicas.
        </p>
      </div>

      <div className="bg-neutral-950 border border-neutral-800 p-8 rounded-2xl space-y-4">
        <h3 className="text-xl font-bold text-white">Repositório do Protocolo Nautam</h3>
        <p className="text-sm text-neutral-400">
          Implementação de referência para firmware de sensores de ultrabaixa potência.
        </p>
        <a href={LINKS.githubNautam} target="_blank" rel="noopener noreferrer" className="inline-block text-xs text-[#00ffff] font-bold underline">
          Ver repositório no GitHub →
        </a>
      </div>
    </div>
  );
};
