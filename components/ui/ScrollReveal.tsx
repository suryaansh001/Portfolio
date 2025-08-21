"use client"
import React, { useEffect, useRef, ReactNode, RefObject } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  staggerDelay?: number;
  threshold?: number;
  rootMargin?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  staggerDelay = 50,
  threshold = 0.1,
  rootMargin = "0px 0px -20% 0px"
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const processChildren = (children: ReactNode): ReactNode => {
    return React.Children.map(children, (child) => {
      if (typeof child === 'string') {
        // Split text into words and wrap each word
        return child.split(/(\s+)/).map((word, index) => {
          if (word.match(/^\s+$/)) return word;
          return (
            <span 
              className="scroll-word" 
              key={index} 
              style={{
                display: 'inline-block',
                opacity: baseOpacity,
                filter: enableBlur ? `blur(${blurStrength}px)` : 'none',
                transform: `rotate(${baseRotation}deg)`,
                transformOrigin: '0% 50%',
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                willChange: 'opacity, filter, transform'
              }}
            >
              {word}
            </span>
          );
        });
      } else if (React.isValidElement(child)) {
        // Recursively process child elements
        return React.cloneElement(child as React.ReactElement, {
          ...child.props,
          children: processChildren(child.props.children)
        });
      }
      return child;
    });
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const words = el.querySelectorAll<HTMLElement>('.scroll-word');
          
          if (entry.isIntersecting) {
            // Animate words in with staggered timing
            words.forEach((word, index) => {
              setTimeout(() => {
                word.style.opacity = '1';
                word.style.filter = 'blur(0px)';
                word.style.transform = 'rotate(0deg)';
              }, index * staggerDelay);
            });
          } else {
            // Reset words when out of view (optional)
            words.forEach((word) => {
              word.style.opacity = baseOpacity.toString();
              word.style.filter = enableBlur ? `blur(${blurStrength}px)` : 'none';
              word.style.transform = `rotate(${baseRotation}deg)`;
            });
          }
        });
      },
      {
        threshold,
        rootMargin,
        root: scrollContainerRef?.current || null
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [
    baseOpacity, 
    baseRotation, 
    blurStrength, 
    enableBlur, 
    staggerDelay, 
    threshold, 
    rootMargin,
    scrollContainerRef
  ]);

  return (
    <div 
      ref={containerRef} 
      className={`scroll-reveal ${containerClassName}`}
      style={{
        transformOrigin: '0% 50%'
      }}
    >
      <div className={`scroll-reveal-text ${textClassName}`}>
        {processChildren(children)}
      </div>
    </div>
  );
};

export default ScrollReveal;