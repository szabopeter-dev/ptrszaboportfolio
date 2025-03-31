
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/use-theme";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
          ? "dark:bg-navy/95 bg-white/95 backdrop-blur shadow-md" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-display font-bold group">
          <span className="text-theme-accent group-hover:text-theme transition-colors duration-300">P</span>
          <span className="text-theme dark:text-white group-hover:text-theme-accent transition-colors duration-300">S</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-theme-dark dark:text-white hover:text-theme-accent transition-colors duration-300 font-medium"
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
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-theme-light dark:bg-navy hover:bg-theme-accent/20 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-theme-light dark:bg-navy hover:bg-theme-accent/20 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className="text-theme-dark dark:text-white hover:text-theme"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-white/98 dark:bg-navy/98 z-40 flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center space-y-6 text-xl">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-theme-dark dark:text-white hover:text-theme-accent transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://www.linkedin.com/in/ptrszabo7/" 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="bg-theme hover:bg-theme-accent text-white px-4 py-2 rounded-md transition-colors duration-300">
                LinkedIn
              </Button>
            </a>
          </nav>
          <button 
            className="absolute top-6 right-6 text-theme-dark dark:text-white hover:text-theme"
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
