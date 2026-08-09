import React, { useState } from 'react';

interface AccordionProps {
  id: string;
  title: string;
  summary: string;
  content: string;
  defaultOpen?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  id,
  title,
  summary,
  content,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      id={id}
      className="border-b border-neutral-800 py-6 transition-colors duration-300"
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex items-start justify-between gap-4 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ffff] rounded-md p-1"
        aria-expanded={isOpen}
      >
        <div className="space-y-2 pr-4">
          <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-[#00ffff] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm md:text-base text-neutral-400 font-medium leading-relaxed">
            {summary}
          </p>
        </div>

        {/* Cross-fade icon + / - without rotation */}
        <div className="relative w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-neutral-900 border border-neutral-800 text-white group-hover:border-[#00ffff]/50 transition-colors">
          <span
            className={`absolute text-xl font-bold transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          >
            +
          </span>
          <span
            className={`absolute text-xl font-bold transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
          >
            −
          </span>
        </div>
      </button>

      {/* Expanded Content with smooth height and opacity transition */}
      <div
        className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? 'grid-rows-[1fr] opacity-100 pt-4' : 'grid-rows-[0fr] opacity-0 pt-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-base md:text-lg text-neutral-300 leading-relaxed font-normal bg-neutral-900/40 border-l-2 border-[#ff6605] p-5 rounded-r-lg">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};
