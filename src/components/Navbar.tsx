
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        scrolled ? "bg-navy/90 backdrop-blur shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-slate-lightest">
          <span className="text-accent">P</span>S
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-slate-light hover:text-accent transition-colors duration-300"
            >
              <span className="text-accent font-mono mr-1">{`0${index + 1}.`}</span> {link.name}
            </a>
          ))}
          <a 
            href="https://www.linkedin.com/in/ptrszabo7/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Button className="bg-transparent text-accent border border-accent hover:bg-accent/10">
              Resume
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-light hover:text-accent"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-navy/95 z-40 flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center space-y-6 text-xl">
            {navLinks.map((link, index) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-slate-light hover:text-accent transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-accent font-mono mr-1">{`0${index + 1}.`}</span> {link.name}
              </a>
            ))}
            <a 
              href="https://www.linkedin.com/in/ptrszabo7/" 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="bg-transparent text-accent border border-accent hover:bg-accent/10">
                Resume
              </Button>
            </a>
          </nav>
          <button 
            className="absolute top-6 right-6 text-slate-light hover:text-accent"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
