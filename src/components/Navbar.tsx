
import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        "fixed top-0 z-50 w-full transition-all duration-300 py-4",
        scrolled 
          ? "bg-white/95 backdrop-blur shadow-md" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-display font-bold group">
          <span className="text-theme-accent group-hover:text-theme transition-colors duration-300">P</span>
          <span className="text-theme group-hover:text-theme-accent transition-colors duration-300">S</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-theme-dark hover:text-theme-accent transition-colors duration-300 font-medium"
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
            <Button className="bg-theme hover:bg-theme-accent text-white px-4 py-2 rounded-md transition-colors duration-300">
              LinkedIn
            </Button>
          </a>
        </nav>

        {/* Mobile Menu - Using Drawer component */}
        <div className="md:hidden flex items-center">
          <Drawer>
            <DrawerTrigger asChild>
              <button 
                className="text-theme-dark hover:text-theme"
                aria-label="Toggle menu"
              >
                <Menu size={24} />
              </button>
            </DrawerTrigger>
            <DrawerContent className="p-0 h-full">
              <div className="flex flex-col h-full bg-white pt-16 pb-8 px-6">
                <DrawerClose className="absolute top-6 right-6">
                  <X size={24} className="text-theme-dark hover:text-theme" />
                </DrawerClose>
                
                <nav className="flex flex-col items-center space-y-8 text-xl mt-8">
                  {navLinks.map((link) => (
                    <a 
                      key={link.name}
                      href={link.href}
                      className="text-theme-dark hover:text-theme-accent transition-colors duration-300 w-full text-center py-2"
                    >
                      {link.name}
                    </a>
                  ))}
                  <a 
                    href="https://www.linkedin.com/in/ptrszabo7/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full flex justify-center"
                  >
                    <Button className="bg-theme hover:bg-theme-accent text-white px-4 py-2 rounded-md transition-colors duration-300 w-full max-w-xs">
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
