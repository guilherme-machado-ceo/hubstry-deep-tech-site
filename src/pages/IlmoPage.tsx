import React from 'react';
import { Language } from '../types';
import { LINKS } from '../data/translations';
import { AnimatedTitle } from '../components/AnimatedTitle';

interface PageProps {
  currentLanguage: Language;
}

export const IlmoPage: React.FC<PageProps> = ({ currentLanguage }) => {
  return (
    <div className="pt-28 pb-36 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Hero Header */}
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-neutral-900 border border-neutral-800 rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#00ffff]" />
          <span className="normative-label text-xs text-[#00ffff]">
            CRIPTOGRAFIA PÓS-QUÂNTICA
          </span>
        </div>

        <AnimatedTitle
          as="h1"
          text={
            currentLanguage === 'pt'
              ? 'ILMO — Métricas e Demarcação Criptográfica'
              : 'ILMO — Metrics & Cryptographic Demarcation'
          }
          className="text-4xl sm:text-6xl font-black text-white"
        />

        <p className="text-xl sm:text-2xl text-neutral-300 max-w-3xl leading-relaxed">
          {currentLanguage === 'pt'
            ? 'Análise atomizada de risco criptográfico elo a elo para quem decide arquiteturas de vida útil longa.'
            : 'Atomized link-by-link cryptographic risk analysis for decision-makers building long-lived architectures.'}
        </p>
      </div>

      {/* Tabela de 6 campos do ILMO */}
      <div className="space-y-6">
        <h2 className="text-2xl font-black text-white">
          {currentLanguage === 'pt' ? 'A Matriz de Avaliação ILMO' : 'The ILMO Assessment Matrix'}
        </h2>

        <div className="overflow-x-auto border border-neutral-800 rounded-2xl bg-neutral-950 p-4">
          <table className="w-full text-left text-sm text-neutral-300">
            <thead className="border-b border-neutral-800 text-xs font-bold uppercase tracking-wider text-[#00ffff]">
              <tr>
                <th className="p-4">Campo ILMO</th>
                <th className="p-4">O que avalia</th>
                <th className="p-4">Impacto Crítico</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-900">
              <tr>
                <td className="p-4 font-bold text-white">1. Algoritmo em uso</td>
                <td className="p-4">Qual família criptográfica está ativa no elo (ex: RSA, ECC, ML-KEM).</td>
                <td className="p-4 text-amber-400">Vulnerabilidade a Shors Algorithm.</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white">2. Vida útil da informação (x)</td>
                <td className="p-4">Por quantos anos o segredo precisa permanecer confidencial.</td>
                <td className="p-4 text-amber-400">Temporalidade regulatória/segredo de estado.</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white">3. Tempo de migração (y)</td>
                <td className="p-4">Quantos anos a organização leva para migrar totalmente o elo.</td>
                <td className="p-4 text-amber-400">Atrito operacional e legado de TI.</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white">4. Tempo do computador quântico (z)</td>
                <td className="p-4">Horizonte estimado para o Q-Day (computador quântico criptograficamente relevante).</td>
                <td className="p-4 text-amber-400">Horizonte de colapso criptográfico.</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white">5. Desigualdade de Mosca (x + y {'>'} z)</td>
                <td className="p-4">Cálculo da fronteira: se x + y {'>'} z, o segredo já está irremediavelmente comprometido hoje.</td>
                <td className="p-4 text-red-500 font-bold">EXPOSIÇÃO CONFIRMADA.</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white">6. Trilha de decisão e conformidade</td>
                <td className="p-4">Documentação formal exigível por auditores e reguladores (CMN, BCB, ITI).</td>
                <td className="p-4 text-emerald-400">Proteção jurídica da diretoria.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Caso prático: Infraestrutura tokenizada */}
      <div className="bg-neutral-900 border border-neutral-800 p-8 sm:p-10 rounded-2xl space-y-4">
        <span className="normative-label text-[#ff6605] text-xs">CASO DE APLICAÇÃO</span>
        <h3 className="text-2xl font-black text-white">
          Infraestrutura Tokenizada e Ledgers Imutáveis
        </h3>
        <p className="text-neutral-300 leading-relaxed">
          Ledgers públicos e privados gravam dados permanentemente. Se a troca de chaves ou a assinatura utilizar algoritmos clássicos, a imunidade hoje é ilusória. A análise ILMO mapeia cada nó de validação, contrato inteligente e ponte de custódia, demarcando quais dados já se tornaram vulneráveis ao modelo &quot;Store Now, Decrypt Later&quot;.
        </p>
        <div className="pt-4">
          <a
            href={LINKS.pqcApp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#ff6605] text-black font-black text-xs uppercase tracking-wider px-6 py-3 rounded-full"
          >
            Acessar Calculadora PQC × CPG Live →
          </a>
        </div>
      </div>

    </div>
  );
};
