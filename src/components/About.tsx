
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle2, Code2, GraduationCap } from "lucide-react";
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
    <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-navy to-theme-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">About Me</h2>
          
          <div 
            ref={aboutContentRef}
            className="bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl transition-all duration-700"
          >
            {/* Profile section with consistent height */}
            <div className="flex flex-col md:flex-row gap-8 items-center mb-10 animate-item">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-theme-accent/60 flex-shrink-0 shadow-[0_0_20px_rgba(0,173,181,0.5)] hover:shadow-[0_0_30px_rgba(0,173,181,0.7)] transition-shadow duration-300">
                <img 
                  src="9d80321a-c5f8-4a89-8497-679c687229f3.png" 
                  alt="Péter Szabó" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <p className="text-2xl font-semibold text-theme-accent mb-3">Software Engineer & ML Specialist</p>
                <p className="text-white/90 text-lg leading-relaxed mb-4">
                  Final-year Software Engineering student (8.2/10 GPA) targeting elite MSc AI programs 
                  and internships at leading tech companies like Google, Microsoft, and Meta.
                </p>
                <p className="text-white/80 text-base">
                  Based between San Sebastián, Spain and Budapest, Hungary
                </p>
              </div>
            </div>
            
            {/* Experience highlights with consistent structure */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="animate-item">
                <div className="flex items-start mb-4">
                  <Code2 className="text-theme-accent h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Big Tech Preparation</h3>
                    <p className="text-white/80 leading-relaxed">
                      Building production-grade ML systems and full-stack applications at Recomp Informatikai Zrt. 
                      Gaining enterprise-level experience with React, Next.js, and AI technologies to prepare 
                      for software engineering roles at top-tier technology companies.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="animate-item">
                <div className="flex items-start mb-4">
                  <GraduationCap className="text-theme-accent h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Graduate School Pipeline</h3>
                    <p className="text-white/80 leading-relaxed">
                      Developing award-worthy ML research (34% MAE improvement in financial forecasting). 
                      Building strong academic portfolio for admission to top MSc AI programs at 
                      ETH Zurich, TU Munich, and other elite European institutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Technologies grid with consistent layout */}
            <div className="animate-item mb-10">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <CheckCircle2 className="text-theme-accent mr-3 h-6 w-6" />
                Technical Expertise
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  "Python", "TensorFlow", "Machine Learning", "Deep Learning",
                  "React.js", "Next.js", "TypeScript", "Node.js", 
                  "C# / .NET Core", "System Design", "Algorithms", "Git"
                ].map((tech, index) => (
                  <div key={index} className="flex items-center group p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
                    <div className="w-2 h-2 rounded-full bg-theme-accent mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-white/90 group-hover:text-theme-accent transition-colors duration-300 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* CTA section with consistent styling */}
            <div className="text-center animate-item">
              <a href="/szabo_peter_cv_en.pdf" download="szabo_peter_cv_en.pdf">
                <Button className="bg-theme-accent hover:bg-theme-accent/80 text-white px-8 py-4 text-lg rounded-xl shadow-lg transition-all duration-300 flex items-center gap-3 relative overflow-hidden group mx-auto">
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
