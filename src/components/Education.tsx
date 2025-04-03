
import React, { useEffect, useRef } from "react";
import { GraduationCap, Award, BookOpen, Calendar, Star } from "lucide-react";

const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Enhanced animations with optimized observer logic
  useEffect(() => {
    // Section title animation
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in-bottom');
        }
      });
    }, { threshold: 0.1 });

    // Timeline animation
    const timelineObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const timelineItems = entry.target.querySelectorAll('.education-item');
          
          // Progressive animation of timeline items
          timelineItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate-fade-in');
              item.classList.remove('opacity-0');
              
              // Animate the content inside each timeline item with additional delay
              const content = item.querySelector('.education-content');
              if (content) {
                setTimeout(() => {
                  content.classList.add('animate-fade-in');
                  content.classList.remove('opacity-0');
                }, 200);
              }
            }, 300 * index); // Staggered delay for each item
          });
          
          // Animate timeline line
          const timeline = entry.target.querySelector('.timeline-line');
          if (timeline) {
            timeline.classList.add('education-timeline-animate');
          }
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
      sectionRef.current.classList.add('opacity-0');
    }
    
    if (timelineRef.current) {
      timelineObserver.observe(timelineRef.current);
    }

    return () => {
      if (sectionRef.current) sectionObserver.unobserve(sectionRef.current);
      if (timelineRef.current) timelineObserver.unobserve(timelineRef.current);
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
    <section id="education" className="section bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 
          ref={sectionRef}
          className="section-heading text-center text-3xl md:text-4xl font-bold text-theme-dark mb-12 md:mb-16 opacity-0 transition-all duration-700"
        >
          Education
        </h2>
        
        <div ref={timelineRef} className="max-w-4xl mx-auto relative">
          {/* Timeline center line with unique styling different from Experience */}
          <div className="timeline-line absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-theme-light via-theme to-theme-light md:left-1/2 md:-ml-0.5 opacity-0">
            <div className="absolute top-0 left-1/2 -ml-1.5 -mt-1.5 w-4 h-4 rounded-full bg-theme-accent"></div>
            <div className="absolute bottom-0 left-1/2 -ml-1.5 -mb-1.5 w-4 h-4 rounded-full bg-theme-accent"></div>
          </div>
          
          {educationData.map((education, index) => (
            <div 
              key={education.id}
              className="education-item opacity-0 mb-12 relative z-10"
            >
              <div className="flex items-center absolute left-4 md:left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 rounded-full bg-white border-4 border-theme shadow-lg flex items-center justify-center">
                  <GraduationCap className="h-4 w-4 text-theme" />
                  <span className="animate-ping absolute h-5 w-5 rounded-full bg-theme-accent opacity-30"></span>
                </div>
              </div>
              
              <div className={`grid grid-cols-1 md:grid-cols-2 items-center ${
                index % 2 === 0 ? 'md:education-even' : 'md:education-odd'
              }`}>
                {/* Year bubble - visible only on mobile */}
                <div className="md:hidden pl-16 mb-3">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-theme-light/50 text-theme">
                    <Calendar size={14} className="mr-2" />
                    <span className="text-xs font-medium">{education.period}</span>
                  </div>
                </div>
                
                {/* Left side content (or empty for odd indices on desktop) */}
                <div className={`pl-16 md:pl-0 md:pr-10 ${
                  index % 2 === 0 ? '' : 'md:hidden'
                }`}>
                  {index % 2 === 0 && (
                    <div className="education-content opacity-0 bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                      <h3 className="text-xl font-bold text-theme">{education.institution}</h3>
                      <p className="text-theme-dark/80 mb-3">{education.degree}</p>
                      
                      {/* Year bubble - visible only on desktop for even items */}
                      <div className="hidden md:inline-flex items-center px-3 py-1 rounded-full bg-theme-light/50 text-theme mb-3">
                        <Calendar size={14} className="mr-2" />
                        <span className="text-xs font-medium">{education.period}</span>
                      </div>
                      
                      <div className="mt-4 space-y-3">
                        {education.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center space-x-2 p-2 bg-theme-lightest rounded-lg hover:bg-theme-light/30 transition-colors">
                            <Star className="h-4 w-4 text-theme-accent flex-shrink-0" />
                            <p className="text-sm text-theme-dark/80">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Right side content (or empty for even indices on desktop) */}
                <div className={`pl-16 md:pl-10 ${
                  index % 2 === 0 ? 'md:hidden' : ''
                }`}>
                  {(index % 2 !== 0 || window.innerWidth < 768) && (
                    <div className="education-content opacity-0 bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                      <h3 className="text-xl font-bold text-theme">{education.institution}</h3>
                      <p className="text-theme-dark/80 mb-3">{education.degree}</p>
                      
                      {/* Year bubble - visible only on desktop for odd items */}
                      <div className="hidden md:inline-flex items-center px-3 py-1 rounded-full bg-theme-light/50 text-theme mb-3">
                        <Calendar size={14} className="mr-2" />
                        <span className="text-xs font-medium">{education.period}</span>
                      </div>
                      
                      <div className="mt-4 space-y-3">
                        {education.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center space-x-2 p-2 bg-theme-lightest rounded-lg hover:bg-theme-light/30 transition-colors">
                            <Star className="h-4 w-4 text-theme-accent flex-shrink-0" />
                            <p className="text-sm text-theme-dark/80">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>
        {`
        .education-odd .education-content {
          transform: translateX(20px);
          transition: transform 0.3s ease;
        }
        
        .education-even .education-content {
          transform: translateX(-20px);
          transition: transform 0.3s ease;
        }
        
        .education-odd:hover .education-content,
        .education-even:hover .education-content {
          transform: translateX(0);
        }
        
        .animate-slide-in-bottom {
          animation: slideInBottom 0.6s ease forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease forwards;
        }
        
        .education-timeline-animate {
          animation: educationTimelineFill 1.8s ease-out forwards;
        }
        
        @keyframes educationTimelineFill {
          from {
            height: 0%;
            opacity: 0.3;
          }
          to {
            height: 100%;
            opacity: 1;
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInBottom {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        `}
      </style>
    </section>
  );
};

export default Education;
