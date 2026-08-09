import React from 'react';
import { Language } from '../types';
import { AnimatedTitle } from '../components/AnimatedTitle';

interface PageProps {
  currentLanguage: Language;
}

export const LogisticaQuanticaPage: React.FC<PageProps> = ({ currentLanguage }) => {
  return (
    <div className="pt-28 pb-36 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="space-y-6">
        <span className="normative-label text-[#ff6605]">OTIMIZAÇÃO QUÂNTICA</span>
        <AnimatedTitle
          as="h1"
          text="Logística Quântica — QUBO-VRP"
          className="text-4xl sm:text-6xl font-black text-white"
        />
        <p className="text-xl text-neutral-300 max-w-3xl leading-relaxed">
          Roteamento de frotas e otimização combinatória por formulação quântica QUBO.
        </p>
      </div>

      <div className="bg-neutral-900 border border-neutral-800 p-8 sm:p-12 rounded-3xl space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-black rounded-2xl border border-neutral-800">
            <span className="text-4xl font-black text-[#00ffff]">48%</span>
            <p className="text-xs text-neutral-400 mt-2">Redução em emissões de CO₂ em simulação benchmark</p>
          </div>
          <div className="p-6 bg-black rounded-2xl border border-neutral-800">
            <span className="text-4xl font-black text-[#ff6605]">TRL 4→5</span>
            <p className="text-xs text-neutral-400 mt-2">Maturidade tecnológica em ambiente validado</p>
          </div>
          <div className="p-6 bg-black rounded-2xl border border-neutral-800">
            <span className="text-4xl font-black text-white">QUBO</span>
            <p className="text-xs text-neutral-400 mt-2">Quadratic Unconstrained Binary Optimization</p>
          </div>
        </div>

        <p className="text-sm text-neutral-300 leading-relaxed pt-4">
          Resolução do problema de roteamento de veículos com janelas de tempo (VRPTW) mapeado diretamente para matrizes de Ising em processadores quânticos e recozimento simulado.
        </p>
      </div>
    </div>
  );
};
