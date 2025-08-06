
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle2, Code2, GraduationCap, Lightbulb, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const aboutContentRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
          
          const elementsToAnimate = entry.target.querySelectorAll('.animate-item');
          elementsToAnimate.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('animate-fade-in');
              el.classList.remove('opacity-0');
            }, 200 * index);
          });
        }
      });
    }, { threshold: 0.1 });
    
    if (aboutContentRef.current) {
      observer.observe(aboutContentRef.current);
      aboutContentRef.current.classList.add('opacity-0');
      
      const elementsToAnimate = aboutContentRef.current.querySelectorAll('.animate-item');
      elementsToAnimate.forEach(el => el.classList.add('opacity-0'));
    }
    
    return () => {
      if (aboutContentRef.current) observer.unobserve(aboutContentRef.current);
    };
  }, []);

  return (
    <section id="about" className="py-20 md:py-28 bg-theme-background relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-theme-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-theme-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-semibold text-theme-text-primary mb-6">About</h2>
              <p className="text-lg text-theme-text-secondary font-serif italic">
                Computer Engineering student with professional experience and research achievements.
              </p>
            </div>
          
          <div 
            ref={aboutContentRef}
            className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-theme-primary/10 shadow-2xl transition-all duration-700"
          >
            {/* Personal story intro */}
            <div className="text-center mb-12 animate-item">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-theme-primary/30 shadow-xl">
                <img 
                  src="9d80321a-c5f8-4a89-8497-679c687229f3.png" 
                  alt="Péter Szabó" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <p className="text-lg md:text-xl font-serif text-theme-text-secondary leading-relaxed max-w-3xl mx-auto">
                MSc Computer Engineering student with 1+ year professional experience at Recomp Informatikai Zrt. 
                Developed React applications, AI chatbots, and achieved 34% ML accuracy improvement in thesis research.
              </p>
            </div>
            
            {/* Story highlights */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="animate-item text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-theme-primary to-theme-accent rounded-full flex items-center justify-center shadow-lg">
                  <Lightbulb className="text-white h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-theme-text-primary mb-3 font-display">Research</h3>
                <p className="text-theme-text-secondary font-serif leading-relaxed">
                  Thesis research achieved 34% ML accuracy improvement. Experience with TensorFlow, Python, and data analysis.
                </p>
              </div>
              
              <div className="animate-item text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-theme-accent to-theme-secondary rounded-full flex items-center justify-center shadow-lg">
                  <Code2 className="text-white h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-theme-text-primary mb-3 font-display">Development</h3>
                <p className="text-theme-text-secondary font-serif leading-relaxed">
                  1+ year at Recomp developing React applications, AI chatbots, and full-stack solutions with C#/.NET.
                </p>
              </div>
              
              <div className="animate-item text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-theme-secondary to-theme-primary rounded-full flex items-center justify-center shadow-lg">
                  <Target className="text-white h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-theme-text-primary mb-3 font-display">Education</h3>
                <p className="text-theme-text-secondary font-serif leading-relaxed">
                  MSc Computer Engineering, 8.2/10 GPA. Strong foundation in algorithms, data structures, and software architecture.
                </p>
              </div>
            </div>
            
            {/* Technologies showcase */}
            <div className="animate-item mb-12">
              <h3 className="text-xl font-semibold text-theme-text-primary mb-6 text-center font-display">
                Tech Stack
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {[
                  "React.js", "Next.js", "TypeScript", "Tailwind CSS", 
                  "C# / .NET Core", "Entity Framework", "Python", "TensorFlow",
                  "Machine Learning", "Git / GitLab CI", "Jest Testing", "SQL"
                ].map((tech, index) => (
                  <div key={index} className="flex items-center group p-3 rounded-lg bg-theme-light/50 hover:bg-theme-primary/10 transition-all duration-300 border border-theme-primary/10">
                    <div className="w-2 h-2 rounded-full bg-theme-primary mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-theme-text-primary group-hover:text-theme-primary transition-colors duration-300 font-medium text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Call to action */}
            <div className="text-center animate-item">
              <p className="text-theme-text-secondary font-serif mb-6 italic">
                Download CV for detailed experience and project information.
              </p>
              <a href="/szabo_peter_cv_en.pdf" download="szabo_peter_cv_en.pdf">
                <Button className="bg-gradient-to-r from-theme-primary to-theme-accent hover:from-theme-accent hover:to-theme-primary text-white px-8 py-4 text-lg rounded-xl shadow-lg transition-all duration-300 flex items-center gap-3 relative overflow-hidden group mx-auto">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
                  <Download size={20} />
                  Download My CV
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <style>
      {`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .group:hover .animate-shimmer {
          animation: shimmer 1.5s ease infinite;
        }
      `}
      </style>
    </section>
  );
};

export default About;
