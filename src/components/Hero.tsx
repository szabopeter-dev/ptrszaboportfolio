
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownCircle, Github, Mail, Smartphone, Linkedin } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="min-h-screen flex items-center pt-20 px-4 md:px-8 bg-gradient-to-b from-theme-lightest to-theme-light overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-theme-accent font-medium mb-4 animate-fade-in">Hi there, I'm</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in animate-delay-100 text-gradient">
              Péter Szabó
            </h1>
            <h2 className="text-3xl md:text-4xl font-display text-theme-dark/80 mb-6 animate-fade-in animate-delay-200">
              I build modern software solutions
            </h2>
            <p className="text-theme-dark/70 text-lg mb-8 max-w-xl animate-fade-in animate-delay-300">
              Software Engineer specializing in React, Next.js, .NET, and machine learning technologies.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 animate-fade-in animate-delay-400">
              <a 
                href="tel:+36306641452" 
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 shadow-md hover:bg-theme-accent/10 transition transform hover:scale-105 backdrop-blur-sm"
              >
                <Smartphone size={18} className="text-theme-accent flex-shrink-0" /> 
                <span className="text-theme-dark text-sm truncate">{isMobile ? "Phone" : "+36 30 664 1452"}</span>
              </a>
              <a 
                href="mailto:szabo.ptr7@gmail.com" 
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 shadow-md hover:bg-theme-accent/10 transition transform hover:scale-105 backdrop-blur-sm"
              >
                <Mail size={18} className="text-theme-accent flex-shrink-0" /> 
                <span className="text-theme-dark text-sm truncate">{isMobile ? "Email" : "szabo.ptr7@gmail.com"}</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/ptrszabo7/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 shadow-md hover:bg-theme-accent/10 transition transform hover:scale-105 backdrop-blur-sm"
              >
                <Linkedin size={18} className="text-theme-accent flex-shrink-0" /> 
                <span className="text-theme-dark text-sm truncate">LinkedIn</span>
              </a>
              <a 
                href="https://github.com/szabopeter-dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 shadow-md hover:bg-theme-accent/10 transition transform hover:scale-105 backdrop-blur-sm"
              >
                <Github size={18} className="text-theme-accent flex-shrink-0" /> 
                <span className="text-theme-dark text-sm truncate">GitHub</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-6 animate-fade-in animate-delay-500">
              <a href="#contact">
                <Button className="btn-primary">
                  Get in touch
                </Button>
              </a>
              <a href="#about">
                <Button variant="ghost" className="flex items-center gap-2 text-theme hover:text-theme-accent font-medium">
                  Learn more <ArrowDownCircle size={18} className="animate-bounce" />
                </Button>
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
              <div className="absolute inset-0 bg-gradient-radial rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-white/90 rounded-full shadow-xl backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl md:text-9xl font-bold text-theme">P</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-theme-accent rounded-full opacity-90 animate-pulse"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-theme rounded-full opacity-80 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
