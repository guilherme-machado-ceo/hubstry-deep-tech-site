import React, { useState, useEffect } from 'react';
import { Language, PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CursorTrail } from './components/CursorTrail';
import { MobileFixedCta } from './components/MobileFixedCta';

import { HomePage } from './pages/HomePage';
import { IlmoPage } from './pages/IlmoPage';
import { HgcfPage } from './pages/HgcfPage';
import { CpgPage } from './pages/CpgPage';
import { LogisticaQuanticaPage } from './pages/LogisticaQuanticaPage';
import { GurudevPage } from './pages/GurudevPage';
import { NautamPage } from './pages/NautamPage';
import { InvestidoresPage } from './pages/InvestidoresPage';

export function App() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('pt');
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Handle URL hash changes or internal page navigation
  const handleNavigate = (page: PageId, targetHash?: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (targetHash) {
      setTimeout(() => {
        const el = document.getElementById(targetHash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  useEffect(() => {
    // Check initial window location hash if any
    const hash = window.location.hash.replace('#', '');
    if (hash === 'ilmo' || hash === 'hgcf' || hash === 'cpg' || hash === 'investidores') {
      setCurrentPage(hash as PageId);
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#00ffff] selection:text-black flex flex-col justify-between">
      {/* Interactive Cursor Trail for Desktop */}
      <CursorTrail />

      {/* Main Sticky/Transparent Navigation Bar */}
      <Header
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            currentLanguage={currentLanguage}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'ilmo' && (
          <IlmoPage currentLanguage={currentLanguage} />
        )}
        {currentPage === 'hgcf' && (
          <HgcfPage currentLanguage={currentLanguage} />
        )}
        {currentPage === 'cpg' && (
          <CpgPage currentLanguage={currentLanguage} />
        )}
        {currentPage === 'logistica-quantica' && (
          <LogisticaQuanticaPage currentLanguage={currentLanguage} />
        )}
        {currentPage === 'gurudev' && (
          <GurudevPage currentLanguage={currentLanguage} />
        )}
        {currentPage === 'nautam' && (
          <NautamPage currentLanguage={currentLanguage} />
        )}
        {currentPage === 'investidores' && (
          <InvestidoresPage currentLanguage={currentLanguage} />
        )}
      </main>

      {/* Universal Footer */}
      <Footer currentLanguage={currentLanguage} />

      {/* Mobile Sticky CTA Bar on Scroll */}
      <MobileFixedCta currentLanguage={currentLanguage} />
    </div>
  );
}

export default App;
