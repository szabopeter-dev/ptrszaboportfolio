
import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Smartphone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-theme-dark to-navy dark:from-navy dark:to-black/80">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-theme-accent font-semibold mb-4 text-lg">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Let's Work Together</h2>
          
          <p className="text-white/80 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            Open to internship opportunities, master's programs, and collaborative projects. 
            Ready to relocate for the right opportunity.
          </p>
          
          {/* Contact cards grid with consistent heights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <a href="mailto:szabo.ptr7@gmail.com" className="group h-full">
              <div className="backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl p-6 flex flex-col items-center transition-all duration-300 transform hover:-translate-y-2 hover:bg-white/20 h-full min-h-[160px] justify-center">
                <div className="p-4 rounded-full bg-theme-accent/20 mb-4 group-hover:bg-theme-accent/30 transition-colors duration-300">
                  <Mail className="h-6 w-6 text-theme-accent" />
                </div>
                <h3 className="font-semibold text-white text-lg mb-2">Email</h3>
                <p className="text-theme-accent/90 text-sm">szabo.ptr7@gmail.com</p>
              </div>
            </a>
            
            <a href="tel:+36306641452" className="group h-full">
              <div className="backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl p-6 flex flex-col items-center transition-all duration-300 transform hover:-translate-y-2 hover:bg-white/20 h-full min-h-[160px] justify-center">
                <div className="p-4 rounded-full bg-theme-accent/20 mb-4 group-hover:bg-theme-accent/30 transition-colors duration-300">
                  <Smartphone className="h-6 w-6 text-theme-accent" />
                </div>
                <h3 className="font-semibold text-white text-lg mb-2">Phone</h3>
                <p className="text-theme-accent/90 text-sm">+36 30 664 1452</p>
              </div>
            </a>
            
            <a href="https://www.linkedin.com/in/ptrszabo7/" target="_blank" rel="noopener noreferrer" className="group h-full">
              <div className="backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl p-6 flex flex-col items-center transition-all duration-300 transform hover:-translate-y-2 hover:bg-white/20 h-full min-h-[160px] justify-center">
                <div className="p-4 rounded-full bg-theme-accent/20 mb-4 group-hover:bg-theme-accent/30 transition-colors duration-300">
                  <Linkedin className="h-6 w-6 text-theme-accent" />
                </div>
                <h3 className="font-semibold text-white text-lg mb-2">LinkedIn</h3>
                <p className="text-theme-accent/90 text-sm">ptrszabo7</p>
              </div>
            </a>
            
            <a href="https://github.com/szabopeter-dev" target="_blank" rel="noopener noreferrer" className="group h-full">
              <div className="backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl p-6 flex flex-col items-center transition-all duration-300 transform hover:-translate-y-2 hover:bg-white/20 h-full min-h-[160px] justify-center">
                <div className="p-4 rounded-full bg-theme-accent/20 mb-4 group-hover:bg-theme-accent/30 transition-colors duration-300">
                  <Github className="h-6 w-6 text-theme-accent" />
                </div>
                <h3 className="font-semibold text-white text-lg mb-2">GitHub</h3>
                <p className="text-theme-accent/90 text-sm">szabopeter-dev</p>
              </div>
            </a>
          </div>
          
          {/* Action buttons with consistent styling */}
          <div className="flex justify-center gap-6 flex-wrap">
            <a href="mailto:szabo.ptr7@gmail.com">
              <Button className="bg-theme-accent hover:bg-theme-accent/80 text-white px-8 py-4 text-lg rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105">
                Say Hello
              </Button>
            </a>
            <a href="/szabo_peter_cv_en.pdf" download="szabo_peter_cv_en.pdf" className="inline-block">
              <Button className="bg-theme hover:bg-theme/80 text-white px-8 py-4 text-lg rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 border-2 border-theme-light/20">
                Download CV
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
