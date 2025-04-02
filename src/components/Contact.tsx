
import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Smartphone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-theme-dark to-navy dark:from-navy dark:to-black/80">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-theme-accent font-medium mb-4">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Let's Connect</h2>
          
          <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
            I'm currently focusing on my Software Engineering studies while working as a Junior Software Developer. 
            Feel free to reach out and I'll get back to you soon!
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <a href="mailto:szabo.ptr7@gmail.com" className="group">
              <div className="backdrop-blur-md bg-white/10 border border-white/10 rounded-xl p-6 flex flex-col items-center transition-all duration-300 transform hover:-translate-y-2 hover:bg-white/20 h-full">
                <div className="p-4 rounded-full bg-theme-accent/20 mb-4">
                  <Mail className="h-6 w-6 text-theme-accent" />
                </div>
                <h3 className="font-medium text-white text-lg mb-2">Email</h3>
                <p className="text-theme-accent/90">szabo.ptr7@gmail.com</p>
              </div>
            </a>
            
            <a href="tel:+36306641452" className="group">
              <div className="backdrop-blur-md bg-white/10 border border-white/10 rounded-xl p-6 flex flex-col items-center transition-all duration-300 transform hover:-translate-y-2 hover:bg-white/20 h-full">
                <div className="p-4 rounded-full bg-theme-accent/20 mb-4">
                  <Smartphone className="h-6 w-6 text-theme-accent" />
                </div>
                <h3 className="font-medium text-white text-lg mb-2">Phone</h3>
                <p className="text-theme-accent/90">06 30 664 1452</p>
              </div>
            </a>
            
            <a href="https://www.linkedin.com/in/ptrszabo7/" target="_blank" rel="noopener noreferrer" className="group">
              <div className="backdrop-blur-md bg-white/10 border border-white/10 rounded-xl p-6 flex flex-col items-center transition-all duration-300 transform hover:-translate-y-2 hover:bg-white/20 h-full">
                <div className="p-4 rounded-full bg-theme-accent/20 mb-4">
                  <Linkedin className="h-6 w-6 text-theme-accent" />
                </div>
                <h3 className="font-medium text-white text-lg mb-2">LinkedIn</h3>
                <p className="text-theme-accent/90">ptrszabo7</p>
              </div>
            </a>
            
            <a href="https://github.com/szabopeter-dev" target="_blank" rel="noopener noreferrer" className="group">
              <div className="backdrop-blur-md bg-white/10 border border-white/10 rounded-xl p-6 flex flex-col items-center transition-all duration-300 transform hover:-translate-y-2 hover:bg-white/20 h-full">
                <div className="p-4 rounded-full bg-theme-accent/20 mb-4">
                  <Github className="h-6 w-6 text-theme-accent" />
                </div>
                <h3 className="font-medium text-white text-lg mb-2">GitHub</h3>
                <p className="text-theme-accent/90">szabopeter-dev</p>
              </div>
            </a>
          </div>
          
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="mailto:szabo.ptr7@gmail.com">
              <Button className="bg-theme-accent hover:bg-theme-accent/80 text-white px-8 py-6 text-lg rounded-lg shadow-lg transition-all duration-300">
                Say Hello
              </Button>
            </a>
            <a href="/szabo_peter_cv_en.pdf" download="szabo_peter_cv_en.pdf" className="inline-block">
              <Button className="bg-theme hover:bg-theme/80 text-white px-8 py-6 text-lg rounded-lg shadow-lg transition-all duration-300">
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
