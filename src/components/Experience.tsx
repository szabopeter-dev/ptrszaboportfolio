
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

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
      observer.observe(item);
      // Add initial invisible class
      item.classList.add('opacity-0');
    });

    return () => {
      timelineItems.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="experience" className="section bg-theme-lightest py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Professional Experience</h2>
        
        <div className="max-w-4xl mx-auto mt-16">
          <div ref={timelineRef} className="relative">
            {/* Timeline center line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-theme-light md:left-1/2 md:-ml-0.5"></div>
            
            {jobs.map((job, index) => (
              <div key={index} className="timeline-item mb-12 opacity-0 transition-opacity duration-500">
                <div className={cn(
                  "relative flex flex-col md:flex-row items-start",
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                )}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 w-8 h-8 rounded-full bg-white border-4 border-theme-accent z-10 transform -translate-x-1/2 md:left-1/2">
                    <Briefcase className="w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-theme-accent" />
                  </div>
                  
                  {/* Content */}
                  <div className={cn(
                    "ml-12 md:ml-0 md:w-[calc(50%-2rem)] p-6",
                    index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                  )}>
                    <div className="bg-white rounded-xl shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                      <h3 className="text-xl font-bold text-theme-dark">{job.title}</h3>
                      <p className="text-theme-accent font-medium mb-2">{job.company}</p>
                      
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-theme/10 text-theme mb-4">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm font-medium">{job.period}</span>
                      </div>
                      
                      <ul className="space-y-3">
                        {job.description.map((item, idx) => (
                          <li key={idx} className="flex">
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
