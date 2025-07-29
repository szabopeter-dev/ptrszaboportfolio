
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Briefcase, Calendar, Bot, Zap, Code2, Cpu } from "lucide-react";

type Job = {
  company: string;
  title: string;
  period: string;
  description: string[];
  highlights?: string[];
};

const Experience = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);
  
  const jobs: Job[] = [
    {
      company: "Recomp Informatikai Zrt.",
      title: "Software Developer Intern (Part-Time)",
      period: "July 2024 - Present",
      description: [
        "Rebuilding a legacy attorney management system using React, Next.js, and Tailwind CSS, with testing implemented in Jest and CI/CD pipelines managed through GitLab",
        "Developing a real-time AI-based chatbot using Generative AI components, powered by OpenAI's real-time API and Eleven Labs, designed for integration with a Unitree Go2 EDU robot for voice-activated interaction and physical response synchronization",
        "Updated legacy Delphi code to align with modern programming standards, enhancing code maintainability and performance"
      ],
      highlights: ["AI Chatbot Development", "Legacy System Modernization", "Robot Integration"]
    }
  ];

  // Enhanced animation on scroll with progressive reveal
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const timelineItems = entry.target.querySelectorAll('.timeline-item');
          
          // Progressive animation of timeline items
          timelineItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate-fade-in');
              
              // Animate the content inside each timeline item with additional delay
              const content = item.querySelector('.timeline-content');
              if (content) {
                setTimeout(() => {
                  content.classList.add('animate-fade-in');
                }, 200);
              }

              // Animate individual icons with staggered delays
              const icons = item.querySelectorAll('.highlight-icon');
              icons.forEach((icon, iconIndex) => {
                setTimeout(() => {
                  icon.classList.add('animate-bounce-in');
                }, 300 + (iconIndex * 100));
              });
            }, 300 * index);
          });
          
          // Animate timeline line
          if (timelineLineRef.current) {
            timelineLineRef.current.classList.add('timeline-animate');
          }
        }
      });
    }, { threshold: 0.1 });

    const timelineContainer = timelineRef.current;
    if (timelineContainer) {
      observer.observe(timelineContainer);
      
      // Set initial state for timeline items and their content
      const timelineItems = timelineContainer.querySelectorAll('.timeline-item');
      timelineItems.forEach(item => {
        item.classList.add('opacity-0');
        
        const content = item.querySelector('.timeline-content');
        if (content) {
          content.classList.add('opacity-0');
        }

        // Set initial state for highlight icons
        const icons = item.querySelectorAll('.highlight-icon');
        icons.forEach(icon => {
          icon.classList.add('opacity-0', 'scale-0');
        });
      });
    }

    // Scroll-based timeline animation
    const handleScroll = () => {
      if (!timelineLineRef.current) return;
      
      const rect = timelineRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
      
      // Check if timeline is in view
      if (rect && !(rect.bottom < 0 || rect.top - viewHeight >= 0)) {
        // Calculate how much to fill the timeline based on scroll position
        const scrollPercentage = Math.min(
          1, 
          (viewHeight - rect.top) / (viewHeight + rect.height)
        );
        
        if (scrollPercentage > 0) {
          const fillAmount = Math.max(0, Math.min(100, scrollPercentage * 150));
          timelineLineRef.current.style.height = `${fillAmount}%`;
          timelineLineRef.current.style.opacity = `${Math.min(1, scrollPercentage * 2)}`;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (timelineContainer) observer.unobserve(timelineContainer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getHighlightIcon = (highlight: string) => {
    if (highlight.includes('AI') || highlight.includes('Chatbot')) {
      return <Bot className="w-4 h-4 text-theme-accent" />;
    }
    if (highlight.includes('Robot')) {
      return <Cpu className="w-4 h-4 text-theme-accent" />;
    }
    if (highlight.includes('Legacy') || highlight.includes('Modernization')) {
      return <Code2 className="w-4 h-4 text-theme-accent" />;
    }
    return <Zap className="w-4 h-4 text-theme-accent" />;
  };

  return (
    <section id="experience" className="section bg-theme-lightest py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Professional Experience</h2>
        
        <div className="max-w-4xl mx-auto mt-16">
          <div ref={timelineRef} className="relative">
            {/* Timeline center line with scroll-based animation */}
            <div 
              ref={timelineLineRef}
              className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-theme-accent to-transparent md:left-1/2 md:-ml-0.5 opacity-0 transition-all duration-700"
              style={{ height: '0%' }}
            ></div>
            
            {jobs.map((job, index) => (
              <div key={index} className="timeline-item mb-12 opacity-0 transition-all duration-500">
                <div className={cn(
                  "relative flex flex-col md:flex-row items-start",
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                )}>
                  {/* Timeline dot with enhanced pulse effect */}
                  <div className="absolute left-4 w-10 h-10 rounded-full bg-white border-4 border-theme-accent z-10 transform -translate-x-1/2 md:left-1/2 pulse-dot">
                    <Briefcase className="w-5 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-theme-accent animate-pulse" />
                    <span className="absolute w-full h-full rounded-full bg-theme-accent/30 animate-ping"></span>
                  </div>
                  
                  {/* Content with enhanced animations */}
                  <div className={cn(
                    "ml-12 md:ml-0 md:w-[calc(50%-2rem)] p-6",
                    index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                  )}>
                    <div className="timeline-content bg-white rounded-xl shadow-lg p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-white hover:to-theme-light/20">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-theme-dark mb-1">{job.title}</h3>
                          <p className="text-theme-accent font-medium">{job.company}</p>
                        </div>
                        <div className="text-right">
                          <div className="inline-flex items-center px-3 py-1 rounded-full bg-theme/10 text-theme mb-2 hover:bg-theme/20 transition-colors duration-300">
                            <Calendar size={14} className="mr-2 animate-pulse" />
                            <span className="text-sm font-medium">{job.period}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Highlights section with animated icons */}
                      {job.highlights && (
                        <div className="mb-4 p-3 rounded-lg bg-gradient-to-r from-theme-accent/5 to-theme/5 border border-theme-light/30">
                          <h4 className="text-sm font-semibold text-theme-dark mb-2 flex items-center">
                            <Zap className="w-4 h-4 mr-2 text-theme-accent animate-pulse" />
                            Key Focus Areas
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {job.highlights.map((highlight, idx) => (
                              <div 
                                key={idx} 
                                className="highlight-icon opacity-0 scale-0 transition-all duration-500 flex items-center px-2 py-1 rounded-full bg-white/80 shadow-sm hover:shadow-md hover:scale-105"
                              >
                                {getHighlightIcon(highlight)}
                                <span className="text-xs font-medium text-theme-dark ml-1">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <ul className="space-y-3">
                        {job.description.map((item, idx) => (
                          <li key={idx} className="flex group hover:translate-x-2 transition-transform duration-300">
                            <div className="mr-3 mt-1.5">
                              <div className="w-2.5 h-2.5 rounded-full bg-theme-accent group-hover:scale-125 transition-transform duration-300"></div>
                            </div>
                            <p className="text-theme-dark/80 text-sm leading-relaxed group-hover:text-theme-dark transition-colors duration-300">{item}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>
      {`
        .pulse-dot::after {
          content: '';
          position: absolute;
          width: 120%;
          height: 120%;
          border-radius: 50%;
          background: linear-gradient(45deg, rgba(0, 173, 181, 0.3), rgba(63, 114, 175, 0.2));
          z-index: -1;
          animation: advancedPulse 3s ease-in-out infinite;
          top: -10%;
          left: -10%;
        }
        
        .animate-bounce-in {
          animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }
        
        @keyframes advancedPulse {
          0% {
            transform: scale(1) rotate(0deg);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.2) rotate(180deg);
            opacity: 0.4;
          }
          100% {
            transform: scale(1) rotate(360deg);
            opacity: 0.8;
          }
        }
        
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}
      </style>
    </section>
  );
};

export default Experience;
