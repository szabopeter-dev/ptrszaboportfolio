import React from "react";
import { Mail, Github, Linkedin, MapPin, Download, ArrowDown } from "lucide-react";
import photo from "@/assets/peter-szabo.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 px-4 md:px-8 bg-cream">
      <div className="container mx-auto max-w-5xl">
        {/* Terminal-style header */}
        <div className="font-mono text-xs md:text-sm text-theme-dark/50 mb-8 flex items-center gap-2 animate-fade-in">
          <span className="inline-block w-2 h-2 rounded-full bg-theme-accent"></span>
          <span>~/peter-szabo</span>
          <span className="text-theme-accent">$</span>
          <span className="typing">whoami</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-start">
          <div className="order-2 md:order-1">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-theme-dark mb-4 leading-[1.05] animate-fade-in animate-delay-100">
              Péter Szabó<span className="text-theme-accent">.</span>
            </h1>

            <p className="font-mono text-sm md:text-base text-theme-dark/70 mb-6 animate-fade-in animate-delay-200">
              <span className="text-theme-accent">&gt;</span> ML Engineer · LLM Fine-tuning · Applied AI Research
            </p>

            <div className="flex items-center gap-2 font-mono text-xs text-theme-dark/60 mb-8 animate-fade-in animate-delay-300">
              <MapPin className="w-3.5 h-3.5 text-theme-accent" />
              <span>Zaragoza, ES → Budapest, HU</span>
            </div>

            <div className="border-l-2 border-theme-accent pl-4 mb-10 max-w-xl animate-fade-in animate-delay-300">
              <p className="font-body text-theme-dark/80 leading-relaxed text-sm md:text-base">
                Currently fine-tuning <span className="font-mono text-theme-accent">HyperNova&nbsp;60B</span> at
                Multiverse Computing. BSc in Computer Science Engineering, Óbuda University.
                Published author at IEEE SAMI 2026.
              </p>
            </div>

            {/* Contact chips */}
            <div className="flex flex-wrap gap-2 mb-10 font-mono text-xs animate-fade-in animate-delay-400">
              <a href="mailto:szabo.ptr7@gmail.com" className="px-3 py-1.5 border border-theme-dark/20 hover:border-theme-accent hover:text-theme-accent transition-colors rounded-sm flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" /> szabo.ptr7@gmail.com
              </a>
              <a href="https://github.com/szabopeter-dev" target="_blank" rel="noreferrer" className="px-3 py-1.5 border border-theme-dark/20 hover:border-theme-accent hover:text-theme-accent transition-colors rounded-sm flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5" /> szabopeter-dev
              </a>
              <a href="https://linkedin.com/in/ptrszabo7" target="_blank" rel="noreferrer" className="px-3 py-1.5 border border-theme-dark/20 hover:border-theme-accent hover:text-theme-accent transition-colors rounded-sm flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5" /> ptrszabo7
              </a>
            </div>

            <div className="flex flex-wrap gap-3 animate-fade-in animate-delay-500">
              <a href="#experience" className="font-mono text-sm px-5 py-2.5 bg-theme-dark text-cream hover:bg-theme-accent transition-colors rounded-sm flex items-center gap-2">
                view experience <ArrowDown className="w-4 h-4" />
              </a>
              <a href="/szabo_peter_cv_en.pdf" download className="font-mono text-sm px-5 py-2.5 border border-theme-dark/30 text-theme-dark hover:border-theme-accent hover:text-theme-accent transition-colors rounded-sm flex items-center gap-2">
                <Download className="w-4 h-4" /> download CV
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-2 bg-theme-accent/20 rounded-sm"></div>
              <img
                src={photo}
                alt="Péter Szabó portrait"
                className="relative w-44 h-44 md:w-56 md:h-56 object-cover rounded-sm border-2 border-theme-dark grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute -bottom-3 -right-3 font-mono text-[10px] bg-theme-dark text-cream px-2 py-1 rounded-sm">
                ./peter.png
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .typing::after {
          content: '_';
          animation: blink 1s steps(1) infinite;
          color: hsl(16, 65%, 55%);
        }
        @keyframes blink { 50% { opacity: 0; } }
      `}</style>
    </section>
  );
};

export default Hero;
