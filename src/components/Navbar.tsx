
import React, { useState, useCallback, useEffect, memo, useMemo } from "react";
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

// Extract NavLink component for better organization
const NavLink = memo(({ name, href, t }: { name: string; href: string; t: (key: string) => string }) => (
  <a 
    key={name}
    href={href}
    className="text-theme-dark hover:text-theme-accent transition-colors duration-300 font-medium relative group"
  >
    <span className="relative z-10">{t(name)}</span>
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-theme-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
  </a>
));

NavLink.displayName = "NavLink";

// Fixed height values for navbar to prevent layout shifts
const NAVBAR_HEIGHT = {
  mobile: '60px',
  desktop: '70px'
};

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

  // Use memo for rendering the desktop navigation to avoid re-renders
  const desktopNavigation = useMemo(() => (
    <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
      {navLinks.map((link) => (
        <NavLink key={link.name} name={link.name} href={link.href} t={t} />
      ))}
      
      <div className="flex items-center space-x-3">
        <div className="w-9 h-9 flex items-center justify-center">
          <LanguageSelector />
        </div>
        
        <a 
          href="https://www.linkedin.com/in/ptrszabo7/" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex"
        >
          <Button className="bg-theme hover:bg-theme-accent text-white px-4 py-2 rounded-md transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 whitespace-nowrap">
            {t('linkedin')}
          </Button>
        </a>
      </div>
    </nav>
  ), [t]);

  const navbarHeight = isMobile ? NAVBAR_HEIGHT.mobile : NAVBAR_HEIGHT.desktop;

  return (
    <header 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 py-4 will-change-transform",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent",
        !visible && "transform -translate-y-full"
      )}
      style={{ height: navbarHeight }}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center h-full">
        <a href="#" className="text-2xl font-display font-bold group relative z-50 transition-all duration-300 hover:scale-110">
          <span className="text-theme-accent group-hover:text-theme transition-colors duration-300">P</span>
          <span className="text-theme group-hover:text-theme-accent transition-colors duration-300">S</span>
        </a>

        {/* Desktop Navigation */}
        {desktopNavigation}

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center space-x-2">
          <div className="w-8 h-8 flex items-center justify-center">
            <LanguageSelector />
          </div>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default memo(Navbar);
