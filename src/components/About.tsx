
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle2, Code2, GraduationCap } from "lucide-react";

const About = () => {
  const aboutContentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
          
          // Animate children elements sequentially
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
      
      // Set initial state for animated items
      const elementsToAnimate = aboutContentRef.current.querySelectorAll('.animate-item');
      elementsToAnimate.forEach(el => el.classList.add('opacity-0'));
    }
    
    return () => {
      if (aboutContentRef.current) observer.unobserve(aboutContentRef.current);
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-navy to-theme-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">About Me</h2>
          
          <div 
            ref={aboutContentRef}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 shadow-xl transition-all duration-700"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8 animate-item">
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-theme-accent/60 flex-shrink-0 shadow-[0_0_15px_rgba(0,173,181,0.5)] hover:shadow-[0_0_20px_rgba(0,173,181,0.7)] transition-shadow duration-300">
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
            
            <div className="space-y-6 animate-item">
              <div className="flex items-start">
                <Code2 className="text-theme-accent h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                <p className="text-lg leading-relaxed text-white/80">
                  Working at ReComp Informatikai Zrt. on modernizing legacy systems 
                  with React, Next.js and Tailwind. Passionate about creating clean,
                  maintainable code that delivers exceptional user experiences.
                </p>
              </div>
              
              <div className="flex items-start">
                <GraduationCap className="text-theme-accent h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                <p className="text-lg leading-relaxed text-white/80">
                  Currently focused on ML-based ATM cash level prediction for my thesis,
                  exploring the intersection of financial technology and machine learning
                  to optimize cash management systems.
                </p>
              </div>
            </div>
            
            <div className="mt-8 animate-item">
              <h3 className="text-xl font-medium text-white mb-4 flex items-center">
                <CheckCircle2 className="text-theme-accent mr-2 h-5 w-5" />
                Technologies I've been working with recently:
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-4">
                {[
                  "React.js", "Next.js", "TypeScript", "Tailwind CSS", 
                  "C# / .NET Core", "Entity Framework", "Jest", 
                  "Git / GitLab CI", "Machine Learning"
                ].map((tech, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="w-2 h-2 rounded-full bg-theme-accent mr-2 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-white/90 group-hover:text-theme-accent transition-colors duration-300">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 flex justify-center animate-item">
              <a href="/szabo_peter_cv_en.pdf" download="szabo_peter_cv_en.pdf">
                <Button className="bg-theme-accent hover:bg-theme-accent/80 text-white px-6 py-6 text-lg rounded-lg shadow-lg transition-all duration-300 flex items-center gap-2 relative overflow-hidden group">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
                  <Download size={20} />
                  Download CV
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
