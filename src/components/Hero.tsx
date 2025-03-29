
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownCircle, Github, Mail, Smartphone, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 px-4 md:px-0 bg-gradient-to-b from-navy to-navy-light">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <p className="text-accent font-mono mb-5 animate-fade-in">Hi, my name is</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-lightest mb-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Péter Szabó.
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate mb-6 animate-fade-in" style={{ animationDelay: "400ms" }}>
            I build modern software solutions.
          </h2>
          <p className="text-slate text-lg md:text-xl mb-6 max-w-xl animate-fade-in" style={{ animationDelay: "600ms" }}>
            I'm a Software Engineer specializing in React, Next.js, .NET, and machine learning technologies.
            Currently working at ReComp Informatika Zrt. while pursuing my Computer Software Engineering degree.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10 animate-fade-in" style={{ animationDelay: "800ms" }}>
            <a href="tel:+36306641452" className="flex items-center gap-2 text-slate-light hover:text-accent transition-all">
              <Smartphone size={18} /> 06 30 664 1452
            </a>
            <a href="mailto:szabo.ptr7@gmail.com" className="flex items-center gap-2 text-slate-light hover:text-accent transition-all">
              <Mail size={18} /> szabo.ptr7@gmail.com
            </a>
            <a href="https://linkedin.com/in/ptrszabo7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-light hover:text-accent transition-all">
              <Linkedin size={18} /> linkedin.com/in/ptrszabo7
            </a>
            <a href="https://github.com/szabopeter-dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-light hover:text-accent transition-all">
              <Github size={18} /> github.com/szabopeter-dev
            </a>
          </div>

          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "1000ms" }}>
            <a href="#contact">
              <Button className="bg-transparent text-accent border border-accent hover:bg-accent/10 px-6 py-4 text-lg">
                Get in touch
              </Button>
            </a>
            <a href="#about">
              <Button variant="ghost" className="text-slate-light flex items-center gap-2 hover:text-accent">
                Learn more <ArrowDownCircle size={18} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
