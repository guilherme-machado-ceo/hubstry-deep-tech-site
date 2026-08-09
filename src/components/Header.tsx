import React, { useState, useEffect } from 'react';
import { Language, PageId } from '../types';
import { LINKS } from '../data/translations';

interface HeaderProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  currentPage: PageId;
  onNavigate: (page: PageId, targetHash?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLanguage,
  onLanguageChange,
  currentPage,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home' as PageId, pt: 'Início', en: 'Home', hash: '' },
    { id: 'ilmo' as PageId, pt: 'ILMO', en: 'ILMO', hash: '' },
    { id: 'solucoes', pt: 'Soluções', en: 'Solutions', page: 'home' as PageId, hash: 'solucoes' },
    { id: 'quem-somos', pt: 'Quem somos', en: 'About Us', page: 'home' as PageId, hash: 'quem-somos' },
    { id: 'investidores' as PageId, pt: 'Investidores', en: 'Investors', hash: '' },
    { id: 'contato', pt: 'Contato', en: 'Contact', page: 'home' as PageId, hash: 'contato' },
  ];

  const handleLinkClick = (link: typeof navLinks[0]) => {
    setMobileMenuOpen(false);
    if ('page' in link && link.page) {
      onNavigate(link.page, link.hash);
    } else {
      onNavigate(link.id as PageId, link.hash);
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-neutral-800/80 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Text Header */}
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ffff] rounded"
        >
          <span className="font-black text-xl tracking-wider text-white hover:text-[#00ffff] transition-colors">
            HUBSTRY DEEP TECH
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive =
              currentPage === link.id ||
              ('page' in link && currentPage === link.page);
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => handleLinkClick(link)}
                className={`text-sm font-bold tracking-wide transition-colors relative py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#00ffff] ${
                  isActive
                    ? 'text-[#00ffff]'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                {currentLanguage === 'pt' ? link.pt : link.en}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00ffff] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Language Toggle + CTA */}
        <div className="hidden sm:flex items-center gap-4">
          {/* PT/EN Toggle Button */}
          <div className="flex items-center bg-neutral-900 border border-neutral-800 rounded-full p-1">
            <button
              type="button"
              onClick={() => onLanguageChange('pt')}
              className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all ${
                currentLanguage === 'pt'
                  ? 'bg-neutral-800 text-[#00ffff] shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              PT
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all ${
                currentLanguage === 'en'
                  ? 'bg-neutral-800 text-[#00ffff] shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* Book Call CTA Button */}
          <a
            href={LINKS.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#ff6605] hover:bg-[#ff7a20] text-black font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-lg shadow-[#ff6605]/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-250 cursor-pointer"
          >
            {currentLanguage === 'pt' ? 'Agendar conversa' : 'Book a Call'}
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-3 lg:hidden">
          {/* Mobile Language Switcher */}
          <button
            type="button"
            onClick={() => onLanguageChange(currentLanguage === 'pt' ? 'en' : 'pt')}
            className="px-2.5 py-1 text-xs font-bold border border-neutral-800 bg-neutral-900 text-[#00ffff] rounded-full"
          >
            {currentLanguage.toUpperCase()}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ffff]"
            aria-label="Abrir Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-black/95 backdrop-blur-xl z-40 lg:hidden flex flex-col justify-between p-6 border-t border-neutral-800 animate-in fade-in duration-300">
          <nav className="flex flex-col gap-6 pt-4">
            {navLinks.map((link, idx) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleLinkClick(link)}
                className="text-2xl font-black text-left text-white hover:text-[#00ffff] transition-colors py-1 flex items-center justify-between border-b border-neutral-900"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <span>{currentLanguage === 'pt' ? link.pt : link.en}</span>
                <span className="text-neutral-600 text-sm">→</span>
              </button>
            ))}
          </nav>

          <div className="space-y-4 pt-6 border-t border-neutral-900">
            <a
              href={LINKS.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center bg-[#ff6605] text-black font-black text-sm uppercase tracking-wider py-4 rounded-xl shadow-lg shadow-[#ff6605]/20"
            >
              {currentLanguage === 'pt' ? 'Agendar conversa (30 min)' : 'Book a Call (30 min)'}
            </a>

            <div className="flex items-center justify-center gap-6 text-xs text-neutral-400 font-bold pt-2">
              <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-[#00ffff]">
                WhatsApp
              </a>
              <span>·</span>
              <a href={LINKS.githubProfile} target="_blank" rel="noopener noreferrer" className="hover:text-[#00ffff]">
                GitHub
              </a>
              <span>·</span>
              <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#00ffff]">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
