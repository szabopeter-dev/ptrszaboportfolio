
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-navy dark:bg-black border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-display font-bold group">
              <span className="text-theme-accent group-hover:text-white transition-colors duration-300">P</span>
              <span className="text-white group-hover:text-theme-accent transition-colors duration-300">S</span>
            </a>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="mailto:szabo.ptr7@gmail.com"
              className="text-white/70 hover:text-theme-accent transition-colors duration-300 hover:scale-110 transform"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
            <a 
              href="https://www.linkedin.com/in/ptrszabo7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-theme-accent transition-colors duration-300 hover:scale-110 transform"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a 
              href="https://github.com/szabopeter-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-theme-accent transition-colors duration-300 hover:scale-110 transform"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
          </div>
          
          <div className="text-white/50 text-sm">
            <p>© {currentYear} Péter Szabó. All rights reserved.</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-white/40 text-sm">
            Designed & Built with <span className="text-theme-accent">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
