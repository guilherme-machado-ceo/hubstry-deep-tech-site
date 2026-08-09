import { AccordionData, SolutionCard, ProofItem } from '../types';

export const LINKS = {
  calendly: "https://calendly.com/guilhermemachado-hubstry-ecosystem/30min",
  whatsapp: "https://w.app/hubstry",
  githubProfile: "https://github.com/guilherme-machado-ceo",
  githubSecurity: "https://github.com/guilherme-machado-ceo/hubstry-security",
  githubGurudev: "https://github.com/guilherme-machado-ceo/gurudev-core",
  githubNautam: "https://github.com/guilherme-machado-ceo/iot-protocol-hubstry",
  orcid: "https://orcid.org/0009-0008-1083-0784",
  zenodo: "https://zenodo.org/me/uploads?q=&f=shared_with_me%3Afalse&l=list&p=1&s=10&sort=newest",
  linkedin: "https://www.linkedin.com/in/guilhermegoncalvesmachado/",
  hgcfApp: "https://hubstry-governance-compliance-framework.vercel.app/",
  hmiApp: "https://hubstry-maturity-index.netlify.app/",
  lexIoGraph: "https://lex-io-graph-compliance-map.streamlit.app/",
  pqcApp: "https://hubstry-cripto-pos-quantica-framework.onrender.com/",
  email: "guilhermemachado.ceo@hubstry.dev"
};

export const ACCORDIONS: AccordionData[] = [
  {
    id: "acc-1",
    titlePt: "O regulador financeiro não diz qual criptografia",
    titleEn: "The financial regulator does not specify which cryptography",
    summaryPt: "A norma exige \"os mecanismos de criptografia\". Sem algoritmo, sem prazo.",
    summaryEn: "The standard requires \"cryptographic mechanisms\". No algorithm, no deadline.",
    contentPt: "As Resoluções CMN nº 5.274 e BCB nº 538, ambas de 18 de dezembro de 2025, listam catorze controles mínimos de segurança cibernética. Sobre criptografia, o texto normativo diz, integralmente: os mecanismos de criptografia. Não há algoritmo, padrão, prazo, nem menção ao risco quântico.",
    contentEn: "CMN Resolutions No. 5.274 and BCB No. 538, both dated December 18, 2025, list fourteen minimum cybersecurity controls. Regarding cryptography, the normative text states in full: cryptographic mechanisms. There is no specified algorithm, standard, timeline, or mention of quantum risk."
  },
  {
    id: "acc-2",
    titlePt: "A raiz de confiança do país permite, mas não obriga",
    titleEn: "The country's root of trust allows, but does not mandate",
    summaryPt: "ML-KEM e ML-DSA entraram na ICP Brasil ao lado do RSA-2048. Todos seguem válidos.",
    summaryEn: "ML-KEM and ML-DSA joined ICP Brasil alongside RSA-2048. All remain valid.",
    contentPt: "A Instrução Normativa nº 35, de 30 de janeiro de 2026, do Instituto Nacional de Tecnologia da Informação (ITI), incorpora ML-KEM e ML-DSA à ICP-Brasil, a raiz de confiança de toda assinatura digital com validade jurídica no país. Ambos estão entre os algoritmos pós-quânticos padronizados pelo NIST (o instituto de padrões dos EUA), ao lado do SLH-DSA. No anexo, eles figuram ao lado de RSA-2048, Curve25519 e Ed25519. Não há cláusula de depreciação, cronograma ou data de encerramento. A norma permite; não obriga.",
    contentEn: "Normative Instruction No. 35, dated January 30, 2026, from ITI, incorporates ML-KEM and ML-DSA into ICP-Brasil, the root of trust for all legally binding digital signatures in the country. Both are among the post-quantum algorithms standardized by NIST, alongside SLH-DSA. In the annex, they appear alongside RSA-2048, Curve25519, and Ed25519. There is no deprecation clause, schedule, or sunset date. The standard permits; it does not compel."
  },
  {
    id: "acc-3",
    titlePt: "O Brasil chegou antes, com outro verbo",
    titleEn: "Brazil arrived earlier, with a different verb",
    summaryPt: "Os Estados Unidos fixaram prazo em 2030 e 2031. O Brasil, nenhum.",
    summaryEn: "The United States set deadlines for 2030 and 2031. Brazil set none.",
    contentPt: "Em 22 de junho de 2026, os Estados Unidos assinaram decretos obrigando a cadeia de suprimentos federal a migrar para criptografia pós-quântica até 2030, na troca de chaves, e 2031, nas assinaturas. Cinco meses antes, o Brasil já havia incorporado os mesmos dois algoritmos à sua infraestrutura de chaves públicas. O Brasil não chegou depois: chegou com verbo permissivo, sem prazo e sem depreciação do algoritmo clássico. Quando a obrigação chegar, por pressão de cadeia de suprimentos ou decisão do regulador, o prazo será contado daquele dia em diante, não de hoje.",
    contentEn: "On June 22, 2026, the United States signed executive orders requiring federal supply chains to migrate to post-quantum cryptography by 2030 for key exchange and 2031 for signatures. Five months earlier, Brazil had already incorporated the same two algorithms into its public key infrastructure. Brazil did not arrive later: it arrived with a permissive verb, without deadline or classic algorithm deprecation. When obligation arrives via supply chain pressure or regulatory mandate, the deadline clock will run from that day forward, not from today."
  }
];

export const SOLUTIONS: SolutionCard[] = [
  {
    id: 'ilmo',
    badgePt: "LANÇAMENTO",
    badgeEn: "NEW LAUNCH",
    titlePt: "ILMO — Segurança Pós-Quântica",
    titleEn: "ILMO — Post-Quantum Security",
    descPt: "Análise de risco criptográfico para quem decide arquitetura com vida útil de década.",
    descEn: "Cryptographic risk analysis for decision-makers building architectures built to last decades.",
    linkTextPt: "Saiba mais →",
    linkTextEn: "Learn more →",
    href: "/ilmo",
    tag: "ILMO"
  },
  {
    id: 'hgcf',
    badgePt: "ESTRUTURA DE GOVERNANÇA",
    badgeEn: "GOVERNANCE FRAMEWORK",
    titlePt: "HGCF — Governança e Conformidade de IA",
    titleEn: "HGCF — AI Governance & Compliance",
    descPt: "Framework proprietário de governança de inteligência artificial, alinhado à ISO/IEC 42001:2023.",
    descEn: "Proprietary artificial intelligence governance framework aligned with ISO/IEC 42001:2023.",
    linkTextPt: "Saiba mais →",
    linkTextEn: "Learn more →",
    href: "/hgcf",
    tag: "HGCF"
  },
  {
    id: 'cpg',
    badgePt: "INTELIGÊNCIA INSTITUCIONAL",
    badgeEn: "INSTITUTIONAL INTELLIGENCE",
    titlePt: "CPG — Inteligência Institucional e Regulatória",
    titleEn: "CPG — Institutional & Regulatory Intelligence",
    descPt: "A arquitetura de demarcação entre domínios, publicada em working papers com DOI, e o atlas jurídico-regulatório Lex-IO-Graph.",
    descEn: "Domain demarcation architecture published in DOI working papers and the Lex-IO-Graph legal-regulatory atlas.",
    linkTextPt: "Saiba mais →",
    linkTextEn: "Learn more →",
    href: "/cpg",
    tag: "CPG"
  },
  {
    id: 'logistica-quantica',
    badgePt: "OTIMIZAÇÃO QUÂNTICA",
    badgeEn: "QUANTUM OPTIMIZATION",
    titlePt: "Logística Quântica — Otimização QUBO-VRP",
    titleEn: "Quantum Logistics — QUBO-VRP Optimization",
    descPt: "Roteamento de frota por formulação quântica, com benchmark de 48% de redução em emissão de CO₂.",
    descEn: "Fleet routing via quantum formulation with benchmark showing 48% reduction in CO₂ emissions.",
    linkTextPt: "Saiba mais →",
    linkTextEn: "Learn more →",
    href: "/logistica-quantica",
    tag: "QUBO-VRP"
  }
];

export const PROOF_ITEMS: ProofItem[] = [
  {
    titlePt: "Estudo completo — Conformidade plena, proteção zero",
    titleEn: "Full study — Full compliance, zero protection",
    descPt: "Demarcação do risco pós-quântico em ledgers imutáveis. Licença CC BY 4.0.",
    descEn: "Post-quantum risk demarcation in immutable ledgers. CC BY 4.0 license.",
    url: LINKS.pqcApp,
    platform: "Render / Web App"
  },
  {
    titlePt: "hubstry-security — Criptografia de referência",
    titleEn: "hubstry-security — Reference cryptography",
    descPt: "Implementações de referência ML-KEM, ML-DSA e SLH-DSA.",
    descEn: "Reference implementations for ML-KEM, ML-DSA, and SLH-DSA.",
    url: LINKS.githubSecurity,
    platform: "GitHub Repository"
  },
  {
    titlePt: "Framework CPG × PQC — Aplicação pública",
    titleEn: "CPG × PQC Framework — Public application",
    descPt: "Ferramenta interativa de cálculo de risco e fronteira legal-criptográfica.",
    descEn: "Interactive calculator for risk and legal-cryptographic boundaries.",
    url: LINKS.pqcApp,
    platform: "Live Platform"
  },
  {
    titlePt: "Lex-IO-Graph — Atlas jurídico-regulatório",
    titleEn: "Lex-IO-Graph — Legal-regulatory atlas",
    descPt: "Atlas em produção com scoring e mapeamento de dependências regulatórias.",
    descEn: "Production atlas with regulatory dependency scoring.",
    url: LINKS.lexIoGraph,
    platform: "Streamlit App"
  },
  {
    titlePt: "HGCF — Framework de governança de IA",
    titleEn: "HGCF — AI governance framework",
    descPt: "Aplicação interativa de governança alinhada à ISO/IEC 42001:2023.",
    descEn: "Interactive governance application aligned with ISO/IEC 42001:2023.",
    url: LINKS.hgcfApp,
    platform: "Vercel Live"
  },
  {
    titlePt: "HMI — Hubstry Maturity Index",
    titleEn: "HMI — Hubstry Maturity Index",
    descPt: "Ferramenta de medição do estágio de maturidade em governança, disponível em 3 idiomas.",
    descEn: "Maturity measurement index available in three languages.",
    url: LINKS.hmiApp,
    platform: "Netlify Live"
  },
  {
    titlePt: "Corpus de pesquisa — 15+ publicações com DOI",
    titleEn: "Research corpus — 15+ publications with DOI",
    descPt: "Publicações indexadas no Zenodo sob o ORCID 0009-0008-1083-0784.",
    descEn: "Indexed publications in Zenodo under ORCID 0009-0008-1083-0784.",
    url: LINKS.orcid,
    platform: "ORCID / Zenodo"
  }
];
