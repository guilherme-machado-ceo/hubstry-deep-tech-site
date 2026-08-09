import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { LINKS } from '../data/translations';

interface MobileFixedCtaProps {
  currentLanguage: Language;
}

export const MobileFixedCta: React.FC<MobileFixedCtaProps> = ({ currentLanguage }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past banner (approx 500px)
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-black/90 backdrop-blur-lg border-t border-neutral-800 z-40 md:hidden animate-in slide-in-from-bottom duration-300">
      <a
        href={LINKS.calendly}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-2 bg-[#ff6605] text-black font-black text-sm uppercase tracking-wider py-3.5 rounded-xl shadow-lg shadow-[#ff6605]/30 cursor-pointer active:scale-[0.98] transition-transform"
      >
        <span>{currentLanguage === 'pt' ? 'Agendar conversa' : 'Book a Call'}</span>
        <span className="text-base">→</span>
      </a>
    </div>
  );
};
