
import React, { useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { language } = useLanguage();
  
  // Memoized scroll handler for better performance
  const handleAnchorClick = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a');
    
    if (anchor?.hash && anchor.hash.length > 1 && anchor.href.includes('#')) {
      e.preventDefault();
      const element = document.getElementById(anchor.hash.substring(1));
      
      if (element) {
        const drawerContent = document.querySelector('[data-state="open"]');
        if (drawerContent) {
          const closeButton = drawerContent.querySelector('button[aria-label="Close"]');
          if (closeButton) {
            (closeButton as HTMLButtonElement).click();
          }
        }
        
        // Optimized scroll calculation
        const navbarHeight = 100;
        const isMobile = window.innerWidth < 768;
        const offset = isMobile ? navbarHeight - 20 : navbarHeight;
        
        window.scrollTo({
          top: element.offsetTop - offset,
          behavior: 'smooth',
        });
      }
    }
  }, []);

  // Optimized timeline animation with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timeline = entry.target.querySelector('.timeline-line');
            if (timeline) {
              timeline.classList.add('timeline-animate');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const timelineSection = document.getElementById('experience');
    if (timelineSection) {
      observer.observe(timelineSection);
    }

    // Optimized skill cards animation
    const skillCards = document.querySelectorAll('.skill-card');
    const skillCardsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scale-105');
            skillCardsObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    skillCards.forEach((card) => skillCardsObserver.observe(card));

    // Event listener cleanup
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      observer.disconnect();
      skillCardsObserver.disconnect();
    };
  }, [handleAnchorClick]);

  return (
    <div className="min-h-screen bg-theme-lightest text-theme-dark transition-colors duration-300">
      <SEO />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <Footer />
      
      <style>
        {`
          .timeline-animate {
            animation: timelineFill 1.5s ease-out forwards;
          }
          
          @keyframes timelineFill {
            from {
              height: 0%;
            }
            to {
              height: 100%;
              background: linear-gradient(to bottom, transparent, var(--theme-color, #3F72AF), transparent);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Index;
