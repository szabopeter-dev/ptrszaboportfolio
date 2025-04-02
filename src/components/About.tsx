
import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-navy to-theme-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">About Me</h2>
          
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 shadow-xl">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-theme-accent/60 flex-shrink-0">
                <img 
                  src="9d80321a-c5f8-4a89-8497-679c687229f3.png" 
                  alt="Péter Szabó" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <p className="text-xl font-medium text-theme-accent mb-2">Software Engineer</p>
                <p className="text-white/80 mb-4 text-lg">
                  B.S. in Software Engineering at the University of Óbuda, 
                  focused on building solutions that solve real-world problems.
                </p>
              </div>
            </div>
            
            <div className="space-y-4 text-white/80">
              <p className="text-lg leading-relaxed">
                Working at ReComp Informatikai Zrt. on modernizing legacy systems 
                with React, Next.js and Tailwind. Currently focused on ML-based ATM cash 
                level prediction for my thesis.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-medium text-white mb-4">
                Technologies I've been working with recently:
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "React.js", "Next.js", "TypeScript", "Tailwind CSS", 
                  "C# / .NET Core", "Entity Framework", "Jest", 
                  "Git / GitLab CI", "Machine Learning"
                ].map((tech, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-theme-accent mr-2"></div>
                    <span className="text-white/90">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <a href="/szabo_peter_cv_en.pdf" download="szabo_peter_cv_en.pdf">
                <Button className="bg-theme-accent hover:bg-theme-accent/80 text-white px-6 py-6 text-lg rounded-lg shadow-lg transition-all duration-300 flex items-center gap-2">
                  <Download size={20} />
                  Download CV
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
