import React from "react";
import { Mail, Phone, Github, Linkedin, Download } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-theme-dark text-cream">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-12 border-b border-cream/15 pb-4 flex items-baseline justify-between">
          <h2 className="font-display text-4xl md:text-5xl text-cream">
            Contact<span className="text-theme-accent">.</span>
          </h2>
          <span className="font-mono text-xs text-cream/50">// say hi</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8 mb-10">
          <div className="font-mono text-xs text-theme-accent md:pt-1">// reach_me</div>
          <div className="border-l-2 border-cream/15 pl-5 space-y-3 font-mono text-sm">
            <a href="mailto:szabo.ptr7@gmail.com" className="flex items-center gap-3 text-cream hover:text-theme-accent transition-colors">
              <Mail className="w-4 h-4 text-theme-accent" /> szabo.ptr7@gmail.com
            </a>
            <a href="tel:+36306641452" className="flex items-center gap-3 text-cream hover:text-theme-accent transition-colors">
              <Phone className="w-4 h-4 text-theme-accent" /> +36 30 664 1452
            </a>
            <a href="https://github.com/szabopeter-dev" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-cream hover:text-theme-accent transition-colors">
              <Github className="w-4 h-4 text-theme-accent" /> github.com/szabopeter-dev
            </a>
            <a href="https://linkedin.com/in/ptrszabo7" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-cream hover:text-theme-accent transition-colors">
              <Linkedin className="w-4 h-4 text-theme-accent" /> linkedin.com/in/ptrszabo7
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a href="mailto:szabo.ptr7@gmail.com" className="font-mono text-sm px-5 py-2.5 bg-theme-accent text-cream hover:bg-theme-accent/90 transition-colors rounded-sm flex items-center gap-2">
            <Mail className="w-4 h-4" /> send email
          </a>
          <a href="/szabo_peter_cv_en.pdf" download className="font-mono text-sm px-5 py-2.5 border border-cream/30 text-cream hover:border-theme-accent hover:text-theme-accent transition-colors rounded-sm flex items-center gap-2">
            <Download className="w-4 h-4" /> download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
