
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 text-center text-slate-light bg-navy border-t border-navy-lightest/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-6">
          <a 
            href="mailto:szabo.ptr7@gmail.com"
            className="text-slate-light hover:text-accent transition-colors duration-300 transform hover:-translate-y-1"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/ptrszabo7/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-light hover:text-accent transition-colors duration-300 transform hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://github.com/szabopeter-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-light hover:text-accent transition-colors duration-300 transform hover:-translate-y-1"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </div>
        
        <p className="text-sm font-mono">Designed & Built with <span className="text-accent">♥</span> in {currentYear}</p>
        
        <div className="mt-4 flex flex-col items-center justify-center">
          <a 
            href="#"
            className="group inline-flex items-center text-xs text-slate hover:text-accent transition-colors duration-300"
          >
            <span className="relative after:absolute after:bg-accent after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:transition-all after:duration-300 group-hover:after:w-full">
              Péter Szabó
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
