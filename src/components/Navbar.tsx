
import React, { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSelector } from "./navbar/LanguageSelector";
import { MobileMenu } from "./navbar/MobileMenu";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const navLinks = [
  { name: 'about', href: "#about" },
  { name: 'experience', href: "#experience" },
  { name: 'education', href: "#education" },
  { name: 'skills', href: "#skills" },
  { name: 'contact', href: "#contact" }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  // Optimized scroll handler with throttling and memoization
  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;
    setVisible((prevScrollPos > currentScrollPos) || currentScrollPos < 50);
    setScrolled(currentScrollPos > 50);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    let scrollTimeout: number;
    
    const throttledScroll = () => {
      if (!scrollTimeout) {
        scrollTimeout = window.setTimeout(() => {
          handleScroll();
          scrollTimeout = 0;
        }, 100);
      }
    };
    
    window.addEventListener("scroll", throttledScroll);
    return () => {
      window.removeEventListener("scroll", throttledScroll);
      clearTimeout(scrollTimeout);
    };
  }, [handleScroll]);

  return (
    <header 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500 py-4",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent",
        !visible && "transform -translate-y-full"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-display font-bold group relative z-50 transition-all duration-300 hover:scale-110">
          <span className="text-theme-accent group-hover:text-theme transition-colors duration-300">P</span>
          <span className="text-theme group-hover:text-theme-accent transition-colors duration-300">S</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-theme-dark hover:text-theme-accent transition-colors duration-300 font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-theme-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {t(link.name)}
            </a>
          ))}
          
          <LanguageSelector />
          
          <a 
            href="https://www.linkedin.com/in/ptrszabo7/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Button className="bg-theme hover:bg-theme-accent text-white px-5 py-2 rounded-md transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1">
              {t('linkedin')}
            </Button>
          </a>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center space-x-2">
          <LanguageSelector />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
