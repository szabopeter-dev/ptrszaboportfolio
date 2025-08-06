
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownCircle, Github, Mail, Smartphone, Linkedin, MapPin, Download, Heart } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const isMobile = useIsMobile();
  const { t } = useLanguage();
  
  return (
    <section className="min-h-screen flex items-center pt-20 px-4 md:px-8 bg-gradient-to-b from-theme-background to-theme-light overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-4 h-4 bg-theme-primary rounded-full animate-bounce opacity-60"></div>
      <div className="absolute bottom-32 left-10 w-3 h-3 bg-theme-accent rounded-full animate-bounce opacity-60" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-theme-primary rounded-full animate-pulse opacity-40"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-theme-accent font-medium mb-4 animate-fade-in flex items-center">
              <Heart className="w-4 h-4 mr-2 animate-pulse text-theme-accent" />
              {t('hero_greeting')}
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold mb-4 animate-fade-in animate-delay-100 text-theme-text-primary">
              Péter Szabó
            </h1>
            <h2 className="text-2xl md:text-4xl font-serif italic text-theme-text-secondary mb-4 animate-fade-in animate-delay-200">
              Software Engineer
            </h2>
            
            {/* Location info with animated icon */}
            <div className="flex items-center mb-6 animate-fade-in animate-delay-250">
              <MapPin className="w-4 h-4 text-theme-accent mr-2 animate-bounce" />
              <span className="text-theme-text-secondary text-sm font-serif">
                Based between San Sebastián & Budapest
              </span>
            </div>
            
            <p className="text-base md:text-lg text-theme-text-secondary mb-6 md:mb-8 max-w-xl animate-fade-in animate-delay-300 font-serif leading-relaxed">
              MSc Computer Engineering student (8.2/10 GPA) with experience in React, AI/ML, and full-stack development. Seeking Big Tech internship opportunities.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-8 md:mb-10 animate-fade-in animate-delay-400">
              <a 
                href="tel:+36306641452" 
                className="contact-card flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 shadow-md hover:bg-theme-accent/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm group"
              >
                <Smartphone size={18} className="text-theme-accent flex-shrink-0 group-hover:animate-pulse" /> 
                <span className="text-theme-dark text-xs sm:text-sm truncate">{isMobile ? "Phone" : "+36 30 664 1452"}</span>
              </a>
              <a 
                href="mailto:szabo.ptr7@gmail.com" 
                className="contact-card flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 shadow-md hover:bg-theme-accent/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm group"
              >
                <Mail size={18} className="text-theme-accent flex-shrink-0 group-hover:animate-bounce" /> 
                <span className="text-theme-dark text-xs sm:text-sm truncate">{isMobile ? "Email" : "szabo.ptr7@gmail.com"}</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/ptrszabo7/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-card flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 shadow-md hover:bg-theme-accent/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm group"
              >
                <Linkedin size={18} className="text-theme-accent flex-shrink-0 group-hover:rotate-12 transition-transform duration-300" /> 
                <span className="text-theme-dark text-sm truncate">LinkedIn</span>
              </a>
              <a 
                href="https://github.com/szabopeter-dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-card flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 shadow-md hover:bg-theme-accent/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm group"
              >
                <Github size={18} className="text-theme-accent flex-shrink-0 group-hover:rotate-12 transition-transform duration-300" /> 
                <span className="text-theme-dark text-sm truncate">GitHub</span>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 animate-fade-in animate-delay-500">
              <a href="#contact">
                <Button className="btn-primary group">
                  {t('hero_get_in_touch')}
                  <Mail className="w-4 h-4 ml-2 group-hover:animate-bounce" />
                </Button>
              </a>
              <a href="/szabo_peter_cv_en.pdf" download="szabo_peter_cv_en.pdf">
                <Button variant="outline" className="flex items-center gap-2 text-theme hover:text-theme-accent font-medium border-theme/20 hover:border-theme-accent/50 group">
                  <Download size={18} className="group-hover:animate-bounce" />
                  Download CV
                </Button>
              </a>
              <a href="#about">
                <Button variant="ghost" className="flex items-center gap-2 text-theme hover:text-theme-accent font-medium group">
                  {t('hero_learn_more')} 
                  <ArrowDownCircle size={18} className="group-hover:animate-bounce" />
                </Button>
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
              <div className="absolute inset-0 bg-gradient-radial rounded-full opacity-20 animate-glow"></div>
              <div className="absolute inset-4 bg-white/90 rounded-full shadow-xl backdrop-blur-sm animate-pulse-glow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl md:text-9xl font-bold text-theme animate-bounce-in">P</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-theme-accent rounded-full opacity-90 animate-pulse-glow"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-theme rounded-full opacity-80 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -left-8 w-8 h-8 bg-theme-accent/60 rounded-full animate-ping"></div>
              <div className="absolute top-1/4 -right-6 w-6 h-6 bg-theme/60 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-theme/50 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-theme-accent/50 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      <style>
      {`
        .contact-card {
          animation: cardFloat 6s ease-in-out infinite;
        }
        
        .contact-card:nth-child(2) {
          animation-delay: -1.5s;
        }
        
        .contact-card:nth-child(3) {
          animation-delay: -3s;
        }
        
        .contact-card:nth-child(4) {
          animation-delay: -4.5s;
        }
        
        @keyframes cardFloat {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-2px) scale(1.02);
          }
        }
        
        @keyframes subtlePulse {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.7;
          }
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
        }
        
        .animate-subtle-pulse {
          animation: subtlePulse 3s ease-in-out infinite;
        }
      `}
      </style>
    </section>
  );
};

export default Hero;
