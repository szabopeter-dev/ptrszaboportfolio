
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

  // Smooth scrolling for anchor links with improved behavior
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target && target.tagName === 'A' && target.href.includes('#')) {
        const id = target.getAttribute('href');
        if (id && id.startsWith('#') && id.length > 1) {
          e.preventDefault();
          const element = document.getElementById(id.substring(1));
          if (element) {
            // Close any open drawers before scrolling
            const drawerContent = document.querySelector('[data-state="open"]');
            if (drawerContent) {
              const closeButton = drawerContent.querySelector('button[aria-label="Close"]');
              if (closeButton) {
                (closeButton as HTMLButtonElement).click();
              }
            }
            
            // Calculate offset based on viewport height for better spacing
            const navbarHeight = 100;
            const isMobile = window.innerWidth < 768;
            const offset = isMobile ? navbarHeight : navbarHeight;
            
            setTimeout(() => {
              window.scrollTo({
                top: element.offsetTop - offset,
                behavior: 'smooth',
              });
            }, 100); // Small delay for better UX, especially after drawer closing
          }
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
