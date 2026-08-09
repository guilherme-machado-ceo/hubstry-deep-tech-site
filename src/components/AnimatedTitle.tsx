import React, { useEffect, useRef, useState } from 'react';

interface AnimatedTitleProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
  id?: string;
}

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  text,
  as = 'h2',
  className = '',
  id,
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (titleRef.current) {
            observer.unobserve(titleRef.current);
          }
        }
      },
      { threshold: 0.15 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, [text]);

  const words = text.split(' ');
  const Component = as;

  return (
    <Component
      ref={titleRef}
      id={id}
      className={`tracking-tight ${className}`}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className={`word-reveal-span ${isVisible ? 'active' : ''}`}
          style={{
            transitionDelay: `${index * 60}ms`,
            marginRight: index < words.length - 1 ? '0.28em' : '0',
          }}
        >
          {word}
        </span>
      ))}
    </Component>
  );
};
