import React from 'react';
import { Language } from '../types';
import { LINKS } from '../data/translations';

interface FooterProps {
  currentLanguage: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLanguage }) => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 py-16 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          
          {/* Brand & Mission Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-black text-lg text-white tracking-wide">
                HUBSTRY DEEP TECH
              </span>
            </div>

            <p className="text-neutral-400 leading-relaxed max-w-md">
              {currentLanguage === 'pt'
                ? 'Hubstry Deep Tech · Rio de Janeiro · Fundada em 2023. Operating deep tech venture builder brasileiro.'
                : 'Hubstry Deep Tech · Rio de Janeiro · Founded in 2023. Operating Brazilian deep tech venture builder.'}
            </p>

            <p className="text-xs text-neutral-500 leading-relaxed max-w-md">
              {currentLanguage === 'pt'
                ? 'Consultoria fracionada (CTO, CMO e CPO on demand), governança de IA, compliance e arquitetura de dados para empresas e organizações públicas.'
                : 'Fractional consulting (CTO, CMO, and CPO on demand), AI governance, compliance, and data architecture for enterprises and public organizations.'}
            </p>
          </div>

          {/* Contact & Links Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="normative-label text-white text-xs tracking-wider">
              {currentLanguage === 'pt' ? 'CONTATO & REDES' : 'CONTACT & NETWORKS'}
            </h4>
            <div className="flex flex-col space-y-2 text-neutral-300">
              <a
                href={`mailto:${LINKS.email}`}
                className="hover:text-[#00ffff] transition-colors flex items-center gap-2"
              >
                <span className="text-xs text-[#00ffff]">✉</span> {LINKS.email}
              </a>
              <a
                href={LINKS.githubProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00ffff] transition-colors"
              >
                GitHub · @guilherme-machado-ceo
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00ffff] transition-colors"
              >
                LinkedIn · Guilherme Gonçalves Machado
              </a>
              <a
                href={LINKS.orcid}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00ffff] transition-colors"
              >
                ORCID · 0009-0008-1083-0784
              </a>
            </div>
          </div>

          {/* Ethics Clause & Legal Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="normative-label text-[#ff6605] text-xs tracking-wider">
              {currentLanguage === 'pt' ? 'CLÁUSULA ÉTICA' : 'ETHICS CLAUSE'}
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed border-l-2 border-[#ff6605] pl-3 py-1">
              {currentLanguage === 'pt'
                ? 'Nenhuma tecnologia ou método da Hubstry é licenciado para armas autônomas de inteligência artificial ou para vigilância de cidadãos.'
                : 'No Hubstry technology or method is licensed for autonomous artificial intelligence weapons or citizen surveillance.'}
            </p>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            {currentLanguage === 'pt'
              ? 'Material autoral da Conjuração Processualista Geral licenciado sob Creative Commons Attribution 4.0 International.'
              : 'Original material by Conjuração Processualista Geral licensed under Creative Commons Attribution 4.0 International.'}
          </p>
          <div className="flex items-center gap-4">
            <span className="hover:text-neutral-300 cursor-pointer">
              {currentLanguage === 'pt' ? 'Política de privacidade' : 'Privacy Policy'}
            </span>
            <span>·</span>
            <span className="hover:text-neutral-300 cursor-pointer">LGPD</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
