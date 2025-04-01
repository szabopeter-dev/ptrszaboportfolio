
import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;
    
    // Determine if we should show or hide the navbar based on scroll direction
    setVisible(
      (prevScrollPos > currentScrollPos) || // Scrolling up
      currentScrollPos < 50 // At the top
    );
    
    // Update scrolled state for appearance
    setScrolled(currentScrollPos > 50);
    
    // Update the previous scroll position
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    // Add throttled scroll listener
    let scrollTimeout: number;
    
    const throttledScroll = () => {
      if (!scrollTimeout) {
        scrollTimeout = window.setTimeout(() => {
          handleScroll();
          scrollTimeout = 0;
        }, 100); // Throttle to 100ms
      }
    };
    
    window.addEventListener("scroll", throttledScroll);
    return () => {
      window.removeEventListener("scroll", throttledScroll);
      clearTimeout(scrollTimeout);
    };
  }, [handleScroll]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500 py-4",
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg" 
          : "bg-transparent",
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
              {link.name}
            </a>
          ))}
          <a 
            href="https://www.linkedin.com/in/ptrszabo7/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Button className="bg-theme hover:bg-theme-accent text-white px-5 py-2 rounded-md transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1">
              LinkedIn
            </Button>
          </a>
        </nav>

        {/* Mobile Menu - Using Drawer component with improved animations */}
        <div className="md:hidden flex items-center">
          <Drawer>
            <DrawerTrigger asChild>
              <button 
                className="text-theme-dark hover:text-theme-accent rounded-full p-2 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
                aria-label="Toggle menu"
              >
                <Menu size={24} />
              </button>
            </DrawerTrigger>
            <DrawerContent className="p-0 h-[70vh] rounded-t-3xl">
              <div className="flex flex-col h-full bg-gradient-to-b from-theme-light to-theme-lightest pt-12 pb-8 px-6 rounded-t-3xl">
                <DrawerClose className="absolute top-4 right-4">
                  <X size={24} className="text-theme-dark hover:text-theme-accent p-1 hover:bg-white/60 rounded-full transition-all duration-300" />
                </DrawerClose>
                
                <nav className="flex flex-col items-center justify-center space-y-6 text-xl mt-8 h-full">
                  {navLinks.map((link, index) => (
                    <DrawerClose asChild key={link.name}>
                      <a 
                        href={link.href}
                        className="text-theme-dark hover:text-theme-accent transition-all duration-300 w-full text-center py-3 relative overflow-hidden group font-medium"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <span className="relative z-10">{link.name}</span>
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-theme-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                      </a>
                    </DrawerClose>
                  ))}

                  <a 
                    href="https://www.linkedin.com/in/ptrszabo7/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full flex justify-center"
                  >
                    <Button className="bg-theme hover:bg-theme-accent text-white px-6 py-3 rounded-md transition-all duration-300 w-full max-w-xs shadow-md hover:shadow-lg hover:-translate-y-1">
                      LinkedIn
                    </Button>
                  </a>
                </nav>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
