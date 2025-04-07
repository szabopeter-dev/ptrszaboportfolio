
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle2, Code2, GraduationCap, Dumbbell, BrainCircuit } from "lucide-react";

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
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-theme/60 flex-shrink-0 shadow-[0_0_15px_rgba(139,92,246,0.5)] hover:shadow-[0_0_20px_rgba(139,92,246,0.7)] transition-shadow duration-300">
                <img 
                  src="9d80321a-c5f8-4a89-8497-679c687229f3.png" 
                  alt="Péter Szabó" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="tech-badge tech-badge-frontend text-xs flex items-center">
                    <Code2 size={12} className="mr-1" /> Frontend
                  </span>
                  <span className="tech-badge tech-badge-backend text-xs flex items-center">
                    Backend
                  </span>
                  <span className="tech-badge tech-badge-ml text-xs flex items-center">
                    <BrainCircuit size={12} className="mr-1" /> ML
                  </span>
                  <span className="tech-badge tech-badge-fitness text-xs flex items-center">
                    <Dumbbell size={12} className="mr-1" /> Fitness
                  </span>
                </div>
                <p className="text-xl font-medium text-theme mb-2">Software Engineer</p>
                <p className="text-white/80 mb-4 text-lg">
                  B.S. in <span className="keyword-highlight bg-theme/30 text-white">Software Engineering</span> at the University of Óbuda, 
                  focused on building solutions that solve real-world problems.
                </p>
              </div>
            </div>
            
            <div className="space-y-6 animate-item">
              <div className="flex items-start">
                <Code2 className="text-theme h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                <p className="text-lg leading-relaxed text-white/80">
                  Working at <span className="text-theme">ReComp Informatikai Zrt.</span> on modernizing legacy systems 
                  with <span className="keyword-highlight bg-theme/30 text-white">React</span>, 
                  <span className="keyword-highlight bg-theme/30 text-white ml-1">Next.js</span> and 
                  <span className="keyword-highlight bg-theme/30 text-white ml-1">Tailwind</span>. Passionate about creating clean,
                  maintainable code that delivers exceptional user experiences.
                </p>
              </div>
              
              <div className="flex items-start">
                <GraduationCap className="text-theme h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                <p className="text-lg leading-relaxed text-white/80">
                  Currently focused on <span className="keyword-highlight bg-tech-ml/30 text-white">ML-based ATM cash level prediction</span> for my thesis,
                  exploring the intersection of financial technology and 
                  <span className="keyword-highlight bg-tech-ml/30 text-white ml-1">machine learning</span>
                  to optimize cash management systems.
                </p>
              </div>
              
              <div className="flex items-start">
                <Dumbbell className="text-tech-fitness h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                <p className="text-lg leading-relaxed text-white/80">
                  As a fitness enthusiast, I bring the same <span className="keyword-highlight bg-tech-fitness/30 text-white">discipline</span>, 
                  <span className="keyword-highlight bg-tech-fitness/30 text-white ml-1">consistency</span>, and 
                  <span className="keyword-highlight bg-tech-fitness/30 text-white ml-1">growth mindset</span> from my workout routine 
                  into my professional work. The perseverance learned from training helps me tackle complex technical challenges.
                </p>
              </div>
            </div>
            
            <div className="mt-8 animate-item">
              <h3 className="text-xl font-medium text-white mb-4 flex items-center">
                <CheckCircle2 className="text-theme mr-2 h-5 w-5" />
                Technologies I've been working with recently:
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-4">
                {[
                  {name: "React.js", type: "frontend"},
                  {name: "Next.js", type: "frontend"},
                  {name: "TypeScript", type: "frontend"},
                  {name: "Tailwind CSS", type: "frontend"},
                  {name: "C# / .NET Core", type: "backend"},
                  {name: "Entity Framework", type: "backend"},
                  {name: "Jest", type: "frontend"},
                  {name: "Git / GitLab CI", type: "general"},
                  {name: "Machine Learning", type: "ml"}
                ].map((tech, index) => (
                  <div key={index} className="flex items-center group">
                    <div className={`w-2 h-2 rounded-full ${tech.type === 'frontend' ? 'bg-tech-frontend' : tech.type === 'backend' ? 'bg-tech-backend' : tech.type === 'ml' ? 'bg-tech-ml' : 'bg-theme'} mr-2 group-hover:scale-125 transition-transform duration-300`}></div>
                    <span className={`text-white/90 group-hover:${tech.type === 'frontend' ? 'text-tech-frontend' : tech.type === 'backend' ? 'text-tech-backend' : tech.type === 'ml' ? 'text-tech-ml' : 'text-theme'} transition-colors duration-300`}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 flex justify-center animate-item">
              <a href="/szabo_peter_cv_en.pdf" download="szabo_peter_cv_en.pdf">
                <Button className="bg-theme hover:bg-theme/80 text-white px-6 py-6 text-lg rounded-lg shadow-lg transition-all duration-300 flex items-center gap-2 relative overflow-hidden group">
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
