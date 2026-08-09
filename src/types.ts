export type Language = 'pt' | 'en';

export type PageId = 
  | 'home' 
  | 'ilmo' 
  | 'hgcf' 
  | 'cpg' 
  | 'logistica-quantica' 
  | 'gurudev' 
  | 'nautam' 
  | 'investidores';

export interface NavItem {
  id: PageId | 'solucoes' | 'quem-somos' | 'contato';
  labelPt: string;
  labelEn: string;
  href: string;
  isExternal?: boolean;
}

export interface AccordionData {
  id: string;
  titlePt: string;
  titleEn: string;
  summaryPt: string;
  summaryEn: string;
  contentPt: string;
  contentEn: string;
}

export interface SolutionCard {
  id: PageId;
  badgePt: string;
  badgeEn: string;
  titlePt: string;
  titleEn: string;
  descPt: string;
  descEn: string;
  linkTextPt: string;
  linkTextEn: string;
  href: string;
  tag?: string;
}

export interface ProofItem {
  titlePt: string;
  titleEn: string;
  descPt: string;
  descEn: string;
  url: string;
  platform: string;
}
