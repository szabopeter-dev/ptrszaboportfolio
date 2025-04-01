
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-navy border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center">
          <a href="#" className="text-2xl font-display font-bold group mb-8 transition-transform hover:scale-110 duration-300">
            <span className="text-theme-accent group-hover:text-white transition-colors duration-300">P</span>
            <span className="text-white group-hover:text-theme-accent transition-colors duration-300">S</span>
          </a>
          
          <div className="flex space-x-8 mb-8">
            <a 
              href="mailto:szabo.ptr7@gmail.com"
              className="text-white/70 hover:text-theme-accent transition-all duration-300 hover:scale-125 transform relative group"
              aria-label="Email"
            >
              <span className="absolute -inset-2 scale-0 rounded-full bg-white/5 transition-all duration-300 group-hover:scale-100"></span>
              <Mail size={24} className="relative z-10" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ptrszabo7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-theme-accent transition-all duration-300 hover:scale-125 transform relative group"
              aria-label="LinkedIn"
            >
              <span className="absolute -inset-2 scale-0 rounded-full bg-white/5 transition-all duration-300 group-hover:scale-100"></span>
              <Linkedin size={24} className="relative z-10" />
            </a>
            <a 
              href="https://github.com/szabopeter-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-theme-accent transition-all duration-300 hover:scale-125 transform relative group"
              aria-label="GitHub"
            >
              <span className="absolute -inset-2 scale-0 rounded-full bg-white/5 transition-all duration-300 group-hover:scale-100"></span>
              <Github size={24} className="relative z-10" />
            </a>
          </div>
          
          <div className="text-white/50 text-sm text-center">
            <p className="mb-2">© {currentYear} Péter Szabó. All rights reserved.</p>
            <p className="text-xs text-white/30">Crafted with passion and creativity</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
