import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownCircle, Github, Mail, Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="min-h-screen flex items-center pt-20 px-4 md:px-8 bg-white overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <div className="mb-8">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-4 font-sans">Academic Portfolio</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold mb-4 text-gray-900">
              Péter Szabó
            </h1>
            <div className="w-24 h-px bg-blue-600 mx-auto mb-6"></div>
            <h2 className="text-xl md:text-2xl font-serif text-gray-700 mb-2">
              Software Engineering Student & Research Assistant
            </h2>
            <p className="text-lg text-gray-600 font-serif mb-8">
              BSc Thesis: Machine Learning-Based ATM Cash Forecasting
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12 text-left">
            <div className="space-y-2">
              <h3 className="text-sm font-sans font-semibold text-gray-900 uppercase tracking-wider">Location</h3>
              <p className="text-gray-600 font-serif">San Sebastián, Spain<br/>Budapest, Hungary</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-sans font-semibold text-gray-900 uppercase tracking-wider">Institution</h3>
              <p className="text-gray-600 font-serif">University of Óbuda<br/>Software Engineering BSc</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-sans font-semibold text-gray-900 uppercase tracking-wider">GPA</h3>
              <p className="text-gray-600 font-serif">8.2/10 (Top 15%)</p>
            </div>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="mailto:szabo.ptr7@gmail.com" 
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-sans text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Mail size={16} />
              szabo.ptr7@gmail.com
            </a>
            <a 
              href="https://www.linkedin.com/in/ptrszabo7/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-sans text-gray-600 hover:text-blue-600 transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/szabopeter-dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-sans text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>

          <div className="flex justify-center gap-4">
            <a href="/szabo_peter_cv_en.pdf" download="szabo_peter_cv_en.pdf">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 font-sans">
                <Download size={16} className="mr-2" />
                Download CV
              </Button>
            </a>
            <a href="#research">
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 font-sans">
                View Research
                <ArrowDownCircle size={16} className="ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;