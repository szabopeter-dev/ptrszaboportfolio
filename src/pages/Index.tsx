
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Péter Szabó | Software Engineer";
  }, []);

  // Optimized smooth scrolling for anchor links with improved performance
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Find the closest anchor element (handles clicking on child elements of anchors)
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.length > 1 && anchor.href.includes('#')) {
        e.preventDefault();
        const id = anchor.hash.substring(1);
        const element = document.getElementById(id);
        
        if (element) {
          // Close any open drawers before scrolling
          const drawerContent = document.querySelector('[data-state="open"]');
          if (drawerContent) {
            const closeButton = drawerContent.querySelector('button[aria-label="Close"]');
            if (closeButton) {
              (closeButton as HTMLButtonElement).click();
            }
          }
          
          // Calculate optimal offset based on viewport height and width for better spacing
          const navbarHeight = 100;
          const isMobile = window.innerWidth < 768;
          const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
          
          // Adjust offset based on device type for better positioning
          let offset;
          if (isMobile) {
            offset = navbarHeight - 20;
          } else if (isTablet) {
            offset = navbarHeight - 10;
          } else {
            offset = navbarHeight;
          }
          
          // Use requestAnimationFrame for smoother scrolling
          requestAnimationFrame(() => {
            window.scrollTo({
              top: element.offsetTop - offset,
              behavior: 'smooth',
            });
          });
        }
      }
    };

    // Timeline animation effect on scroll
    const setupTimelineAnimation = () => {
      const timeline = document.querySelector('.timeline-line');
      if (timeline) {
        const handleScroll = () => {
          const timelineSection = document.getElementById('experience');
          if (!timelineSection) return;
          
          const rect = timelineSection.getBoundingClientRect();
          const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
          
          // Check if timeline is in view
          if (!(rect.bottom< 0 || rect.top - viewHeight >= 0)) {
            // Calculate how much of the section is visible
            const sectionVisibility = (viewHeight - Math.max(0, rect.top)) / viewHeight;
            
            // Apply animation based on scroll position
            if (sectionVisibility > 0.1) {
              timeline.classList.add('timeline-animate');
            }
          }
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
      }
      
      // Skills animation on hover
      const skillCards = document.querySelectorAll('.skill-card');
      skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          card.classList.add('scale-105');
        });
        card.addEventListener('mouseleave', () => {
          card.classList.remove('scale-105');
        });
      });
    };

    document.addEventListener('click', handleAnchorClick);
    const cleanup = setupTimelineAnimation();
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <div className="min-h-screen bg-theme-lightest text-theme-dark transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <Footer />
      
      <style jsx>{`
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
        
        @keyframes collapsible-down {
          from {
            height: 0;
            opacity: 0;
          }
          to {
            height: var(--radix-collapsible-content-height);
            opacity: 1;
          }
        }
        
        @keyframes collapsible-up {
          from {
            height: var(--radix-collapsible-content-height);
            opacity: 1;
          }
          to {
            height: 0;
            opacity: 0;
          }
        }
        
        .animate-collapsible-down {
          animation: collapsible-down 0.3s ease-out;
        }
        
        .animate-collapsible-up {
          animation: collapsible-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Index;
