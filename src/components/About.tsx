
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
    <section id="about" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="section-number font-sans">01.</p>
            <h2 className="section-heading font-display">Academic Profile</h2>
          </div>
          
          <div 
            ref={aboutContentRef}
            className="bg-white p-8 md:p-10 rounded-lg border border-gray-200 shadow-sm transition-all duration-700"
          >
            <div className="prose prose-gray max-w-none">
              <p className="text-lg font-serif text-gray-700 leading-relaxed mb-6">
                I am a final-year Software Engineering student at the University of Óbuda, currently maintaining 
                an 8.2/10 GPA (top 15% of cohort). My academic focus centers on machine learning applications 
                in financial technology, with particular emphasis on time series forecasting and predictive modeling.
              </p>
              
              <p className="text-base font-serif text-gray-600 leading-relaxed mb-8">
                Currently serving as a Software Developer Intern at Recomp Informatikai Zrt., where I contribute 
                to modernizing legacy systems and developing AI-powered solutions. My thesis research explores 
                machine learning-based ATM cash forecasting, achieving significant improvements over traditional methods.
              </p>
            </div>
            
            {/* Experience highlights with consistent structure */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="animate-item">
                <div className="flex items-start mb-4">
                  <Code2 className="text-theme-accent h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-white mb-2">Professional Experience</h3>
                    <p className="text-sm md:text-base text-white/80 leading-relaxed">
                      Software Developer Intern at Recomp Informatikai Zrt. (07/2024 – Present). 
                      Rebuilding legacy attorney management systems with React/Next.js, developing 
                      AI chatbots with OpenAI/Eleven Labs, and automating legal document anonymization using NLP.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="animate-item">
                <div className="flex items-start mb-4">
                  <GraduationCap className="text-theme-accent h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-white mb-2">Academic Excellence</h3>
                    <p className="text-sm md:text-base text-white/80 leading-relaxed">
                      BSc thesis: 4-semester ML pipeline for ATM cash forecasting achieving 34% MAE reduction. 
                      Presenting at Hungarian National Student Research Conference (TDK) 2025 and preparing 
                      IEEE SAMI 2026 submission.
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
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  "React.js", "Next.js", "TypeScript", "Tailwind CSS", 
                  "C# / .NET Core", "Entity Framework", "Python", "TensorFlow",
                  "Machine Learning", "Git / GitLab CI", "Jest Testing", "SQL"
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
