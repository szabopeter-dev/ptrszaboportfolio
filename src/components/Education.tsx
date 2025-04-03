import React, { useEffect, useRef } from "react";
import { GraduationCap, Calendar, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const Education = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);
  
  // Animation setup
  useEffect(() => {
    // Section title animation
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in-bottom');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, { threshold: 0.1 });

    // Education items animation
    const itemsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll('.timeline-item');
          
          // Progressive animation of items
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate-fade-in');
              item.classList.remove('opacity-0');
              
              // Animate the content inside each timeline item with additional delay
              const content = item.querySelector('.timeline-content');
              if (content) {
                setTimeout(() => {
                  content.classList.add('animate-fade-in');
                  content.classList.remove('opacity-0');
                }, 200);
              }
            }, 300 * index); // Staggered delay for each item
          });
          
          // Animate timeline line
          if (timelineLineRef.current) {
            timelineLineRef.current.classList.add('timeline-animate');
          }
        }
      });
    }, { threshold: 0.1 });

    if (timelineRef.current) {
      itemsObserver.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) itemsObserver.unobserve(timelineRef.current);
    };
  }, []);

  const educationData = [
    {
      id: "university",
      institution: "University of Óbuda",
      degree: "B.S. Software Engineering, Software Design and Development",
      period: "September 2022 - February 2026",
      coursework: "Algorithms and Data Structures, Software Testing and Quality Assurance, Data Science and Deep Learning, Parallel and Distributed Systems Programming, Modern Software Technologies, Linear Algebra, Probability and Statistics",
      achievements: [
        "Working on an ML-based ATM cash level prediction thesis",
        "Ranked in the top 5 of class"
      ]
    },
    {
      id: "highschool",
      institution: "BMSZC Bláthy Ottó Titusz Informatikai Technikum",
      degree: "High School Diploma, Information Technology",
      period: "September 2017 - June 2022",
      coursework: "IT-focused secondary school curriculum, software development, databases, networking, Windows & Linux servers",
      achievements: [
        "Grade: 5",
        "Cisco CCNA R&S Modules 1–3 – IP addressing, routing protocols, and basic network configuration"
      ]
    }
  ];

  return (
    <section id="education" className="section bg-white py-16 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading text-center text-3xl md:text-4xl font-bold text-theme-dark mb-12 md:mb-16">
          Education
        </h2>
        
        <div className="max-w-4xl mx-auto mt-16">
          <div ref={timelineRef} className="relative">
            {/* Timeline center line */}
            <div 
              ref={timelineLineRef}
              className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-theme-accent to-transparent md:left-1/2 md:-ml-0.5 opacity-0 transition-all duration-700"
              style={{ height: '0%' }}
            ></div>
            
            {educationData.map((education, index) => (
              <div key={education.id} className="timeline-item mb-12 opacity-0">
                <div className={cn(
                  "relative flex flex-col md:flex-row items-start",
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                )}>
                  {/* Timeline dot with pulse effect */}
                  <div className="absolute left-4 w-8 h-8 rounded-full bg-white border-4 border-theme-accent z-10 transform -translate-x-1/2 md:left-1/2 pulse-dot">
                    <GraduationCap className="w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-theme-accent" />
                    <span className="absolute w-full h-full rounded-full bg-theme-accent/30 animate-ping"></span>
                  </div>
                  
                  {/* Content */}
                  <div className={cn(
                    "ml-12 md:ml-0 md:w-[calc(50%-2rem)] p-6",
                    index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                  )}>
                    <div className="timeline-content bg-white rounded-xl shadow-lg p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                      <h3 className="text-xl font-bold text-theme-dark">{education.degree}</h3>
                      <p className="text-theme-accent font-medium mb-2">{education.institution}</p>
                      
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-theme/10 text-theme mb-4 hover:bg-theme/20 transition-colors duration-300">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm font-medium">{education.period}</span>
                      </div>
                      
                      <div className="space-y-3">
                        {education.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center space-x-2 p-2 bg-theme-lightest rounded-lg">
                            <Star className="h-4 w-4 text-theme-accent flex-shrink-0" />
                            <p className="text-sm text-theme-dark/80">{achievement}</p>
                          </div>
                        ))}
                      </div>
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

export default Education;
