
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <p className="text-accent font-mono mb-5">Hi, my name is</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-lightest mb-4">
            Péter Szabó.
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate mb-6">
            I build things that work.
          </h2>
          <p className="text-slate text-lg md:text-xl mb-8 max-w-xl">
            I'm a Software Engineer specializing in React, TypeScript, and .NET. 
            Currently, I'm focusing on redeveloping legacy applications into modern web-based 
            platforms at ReComp Informatika Zrt. while pursuing my Computer Software Engineering degree.
          </p>
          <p className="text-slate text-lg md:text-xl mb-8 max-w-xl italic">
            "I build things that work, matter, and maybe even make someone's day a bit easier. Code with a cause."
          </p>
          <div className="flex space-x-4">
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
