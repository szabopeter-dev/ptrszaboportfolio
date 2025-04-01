
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

  // Optimized smooth scrolling for anchor links
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
          
          // Calculate optimal offset based on viewport height for better spacing
          const navbarHeight = 100;
          const isMobile = window.innerWidth < 768;
          const offset = isMobile ? navbarHeight - 20 : navbarHeight;
          
          setTimeout(() => {
            window.scrollTo({
              top: element.offsetTop - offset,
              behavior: 'smooth',
            });
          }, 50); // Reduced delay for better responsiveness
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
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
    </div>
  );
};

export default Index;
