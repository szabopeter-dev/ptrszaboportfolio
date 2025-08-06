
import React, { useEffect, useCallback, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ProjectsSection from "@/components/ProjectsSection";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { language } = useLanguage();
  
  // Optimized scroll handler with debouncing
  const handleAnchorClick = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a');
    
    if (anchor?.hash && anchor.hash.length > 1 && anchor.href.includes('#')) {
      e.preventDefault();
      const targetId = anchor.hash.substring(1);
      const element = targetId ? document.getElementById(targetId) : null;
      
      if (element) {
        // Close mobile menu if open
        const drawerContent = document.querySelector('[data-state="open"]');
        if (drawerContent) {
          const closeButton = drawerContent.querySelector('button[aria-label="Close"]');
          if (closeButton) {
            (closeButton as HTMLButtonElement).click();
          }
        }
        
        // Enhanced scroll calculation with better offset
        const navbarHeight = 80;
        const isMobile = window.innerWidth < 768;
        const offset = isMobile ? navbarHeight - 10 : navbarHeight + 20;
        
        window.scrollTo({
          top: element.offsetTop - offset,
          behavior: 'smooth',
        });
      }
    }
  }, []);

  // Enhanced intersection observer for better performance
  useEffect(() => {
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target;
            
            // Add staggered animations for better visual flow
            if (element.classList.contains('section')) {
              setTimeout(() => {
                element.classList.add('animate-fade-in');
                
                // Animate child elements with delay
                const childElements = element.querySelectorAll('.animate-item');
                childElements.forEach((child, index) => {
                  setTimeout(() => {
                    child.classList.add('animate-fade-in', 'animate-scale-in');
                  }, index * 100);
                });
              }, 100);
            }
            
            // Timeline animations
            if (element.classList.contains('timeline-section')) {
              const timeline = element.querySelector('.timeline-line');
              if (timeline) {
                timeline.classList.add('timeline-animate');
              }
            }
            
            // Skill card animations
            if (element.classList.contains('skill-card')) {
              element.classList.add('animate-fade-in', 'animate-scale-in');
            }
            
            // Observe each element only once for performance
            animationObserver.unobserve(element);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Setup observers for different sections
    const observeElements = () => {
      // Timeline sections
      const timelineSection = document.getElementById('experience');
      if (timelineSection) {
        timelineSection.classList.add('timeline-section');
        animationObserver.observe(timelineSection);
      }

      // Skill cards
      const skillCards = document.querySelectorAll('.skill-card');
      skillCards.forEach((card) => animationObserver.observe(card));

      // General sections
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        section.classList.add('section');
        animationObserver.observe(section);
      });
    };

    // Delay observer setup to ensure DOM is ready
    setTimeout(observeElements, 100);

    // Event listener for smooth scrolling
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      animationObserver.disconnect();
    };
  }, [handleAnchorClick, language]);

  // Optimized animation styles with better performance
  const animationStyles = useMemo(() => `
    .timeline-animate {
      animation: timelineFill 2s ease-out forwards;
    }
    
    @keyframes timelineFill {
      0% {
        height: 0%;
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        height: 100%;
        background: linear-gradient(to bottom, transparent, var(--theme-color, #3F72AF), transparent);
      }
    }
    
    .animate-scale-in {
      animation: scaleIn 0.5s ease-out forwards;
    }
    
    @keyframes scaleIn {
      0% {
        transform: scale(0.9);
        opacity: 0;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }
    
    .section {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.6s ease-out;
    }
    
    .section.animate-fade-in {
      opacity: 1;
      transform: translateY(0);
    }
    
    .animate-item {
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.4s ease-out;
    }
    
    .animate-item.animate-fade-in {
      opacity: 1;
      transform: translateY(0);
    }
    
    /* Smooth scroll behavior */
    html {
      scroll-behavior: smooth;
    }
    
    /* Enhanced loading animations */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(40px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .animate-fade-in-up {
      animation: fadeInUp 0.6s ease-out forwards;
    }
  `, []);

  return (
    <div className="min-h-screen bg-theme-lightest text-theme-dark transition-colors duration-300">
      <SEO />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <ProjectsSection />
      <WorkExperience />
      <Education />
      <Contact />
      <Footer />
      
      <style>{animationStyles}</style>
    </div>
  );
};

export default Index;
