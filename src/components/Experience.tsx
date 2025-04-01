
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Briefcase, Calendar } from "lucide-react";

type Job = {
  company: string;
  title: string;
  period: string;
  description: string[];
};

const Experience = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const jobs: Job[] = [
    {
      company: "ReComp Informatikai Zrt.",
      title: "Junior Software Developer",
      period: "September 2024 - Present",
      description: [
        "Modernizing legacy attorney management platform with React, Next.js and Tailwind",
        "Implementing CI/CD pipelines through GitLab and testing with Jest",
        "Shipping production-ready features in a professional software engineering environment"
      ]
    },
    {
      company: "ReComp Informatikai Zrt.",
      title: "Software Developer Intern",
      period: "June 2024 - September 2024",
      description: [
        "Updated legacy Delphi code to modern programming standards",
        "Developed reporting solutions for business analytics",
        "Collaborated with dev team on company requirements"
      ]
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
            }, 300 * index); // Staggered delay for each item
          });
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
      });
    }

    return () => {
      if (timelineContainer) observer.unobserve(timelineContainer);
    };
  }, []);

  return (
    <section id="experience" className="section bg-theme-lightest py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Professional Experience</h2>
        
        <div className="max-w-4xl mx-auto mt-16">
          <div ref={timelineRef} className="relative">
            {/* Timeline center line with animation */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-theme-light md:left-1/2 md:-ml-0.5 timeline-line"></div>
            
            {jobs.map((job, index) => (
              <div key={index} className="timeline-item mb-12 opacity-0 transition-all duration-500">
                <div className={cn(
                  "relative flex flex-col md:flex-row items-start",
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                )}>
                  {/* Timeline dot with pulse effect */}
                  <div className="absolute left-4 w-8 h-8 rounded-full bg-white border-4 border-theme-accent z-10 transform -translate-x-1/2 md:left-1/2 pulse-dot">
                    <Briefcase className="w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-theme-accent" />
                    <span className="absolute w-full h-full rounded-full bg-theme-accent/30 animate-ping"></span>
                  </div>
                  
                  {/* Content with enhanced animations */}
                  <div className={cn(
                    "ml-12 md:ml-0 md:w-[calc(50%-2rem)] p-6",
                    index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                  )}>
                    <div className="timeline-content bg-white rounded-xl shadow-lg p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                      <h3 className="text-xl font-bold text-theme-dark">{job.title}</h3>
                      <p className="text-theme-accent font-medium mb-2">{job.company}</p>
                      
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-theme/10 text-theme mb-4 hover:bg-theme/20 transition-colors duration-300">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm font-medium">{job.period}</span>
                      </div>
                      
                      <ul className="space-y-3">
                        {job.description.map((item, idx) => (
                          <li key={idx} className="flex hover:translate-x-1 transition-transform duration-300">
                            <div className="mr-3 mt-1.5">
                              <div className="w-2 h-2 rounded-full bg-theme-accent"></div>
                            </div>
                            <p className="text-theme-dark/80 text-sm">{item}</p>
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
    </section>
  );
};

export default Experience;
