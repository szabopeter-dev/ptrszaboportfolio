
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
            Peter Szabo.
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate mb-6">
            I build things with data.
          </h2>
          <p className="text-slate text-lg md:text-xl mb-8 max-w-xl">
            I'm a Senior Data Scientist at StageZero Technologies with expertise in applying 
            artificial intelligence and machine learning to solve complex business problems. 
            Currently, I'm focusing on developing innovative ML solutions for different 
            industries.
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
