
import React, { useEffect, useRef } from "react";
import { GraduationCap, Award, BookOpen, Calendar, Code, Database, BrainCircuit } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const educationCardsRef = useRef<HTMLDivElement>(null);

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

    // Education cards animation with sequence
    const cardsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.education-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-fade-in');
              card.classList.remove('opacity-0');
            }, 200 * index);
          });
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
      sectionRef.current.classList.add('opacity-0');
    }
    
    if (educationCardsRef.current) {
      cardsObserver.observe(educationCardsRef.current);
    }

    return () => {
      if (sectionRef.current) sectionObserver.unobserve(sectionRef.current);
      if (educationCardsRef.current) cardsObserver.unobserve(educationCardsRef.current);
    };
  }, []);

  const educationData = [
    {
      id: "university",
      institution: "University of Óbuda",
      degree: "B.S. Software Engineering, Software Design and Development",
      period: "September 2022 - February 2026",
      coursework: [
        { name: "Algorithms and Data Structures", type: "frontend" },
        { name: "Software Testing and Quality Assurance", type: "backend" },
        { name: "Data Science and Deep Learning", type: "ml" },
        { name: "Parallel and Distributed Systems Programming", type: "backend" },
        { name: "Modern Software Technologies", type: "frontend" },
        { name: "Linear Algebra", type: "ml" },
        { name: "Probability and Statistics", type: "ml" }
      ],
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
      coursework: [
        { name: "Software Development", type: "frontend" },
        { name: "Databases", type: "backend" },
        { name: "Networking", type: "backend" },
        { name: "Windows & Linux servers", type: "backend" }
      ],
      achievements: [
        "Grade: 5",
        "Cisco CCNA R&S Modules 1–3 – IP addressing, routing protocols, and basic network configuration"
      ]
    }
  ];

  const getIconForCourseType = (type: string) => {
    switch (type) {
      case "frontend": return <Code size={14} className="text-tech-frontend" />;
      case "backend": return <Database size={14} className="text-tech-backend" />;
      case "ml": return <BrainCircuit size={14} className="text-tech-ml" />;
      default: return <BookOpen size={14} className="text-theme-accent" />;
    }
  };

  const getBadgeClassForType = (type: string) => {
    switch (type) {
      case "frontend": return "tech-badge-frontend";
      case "backend": return "tech-badge-backend";
      case "ml": return "tech-badge-ml";
      default: return "";
    }
  };

  return (
    <section id="education" className="section bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 
          ref={sectionRef}
          className="section-heading text-center text-3xl md:text-4xl font-bold text-theme-dark mb-12 md:mb-16 opacity-0 transition-all duration-700"
        >
          Education
        </h2>
        
        <div ref={educationCardsRef} className="max-w-4xl mx-auto space-y-8">
          {/* Timeline visual element */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-theme-light/50 transform -translate-x-1/2"></div>
          
          {/* Education cards */}
          <div className="flex flex-col gap-8 relative">
            {educationData.map((education, index) => (
              <Card 
                key={education.id}
                className="education-card opacity-0 transition-all duration-500 hover:shadow-2xl group rounded-2xl border-theme-light/50 transform hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="p-3 rounded-full bg-theme/10 group-hover:bg-theme/20 transition-colors duration-300">
                      <GraduationCap className="h-7 w-7 text-theme group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-theme-dark group-hover:text-theme transition-colors duration-300 line-clamp-2">
                        {education.institution}
                      </h3>
                      <div className="inline-flex items-center mt-1 px-2 py-1 rounded-full bg-theme/10 text-theme group-hover:bg-theme/20 transition-colors duration-300">
                        <Calendar size={14} className="mr-1" />
                        <span className="text-xs font-medium">{education.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <p className="text-base md:text-lg font-medium text-theme">{education.degree}</p>
                  </div>
                  
                  {education.coursework && (
                    <div className="bg-theme-lightest rounded-lg p-4 mb-4 group-hover:bg-theme-light/30 transition-colors duration-300">
                      <div className="flex items-center mb-2">
                        <BookOpen className="h-4 w-4 text-theme-accent mr-2 group-hover:rotate-6 transition-transform duration-300" />
                        <h4 className="font-medium text-theme-dark text-sm">Relevant Coursework</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {education.coursework.map((course, i) => (
                          <div key={i} className={`flex items-center py-1 px-2 rounded-full text-xs ${getBadgeClassForType(course.type)}`}>
                            {getIconForCourseType(course.type)}
                            <span className="ml-1">{course.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {education.achievements && (
                    <div className="grid grid-cols-1 gap-3">
                      {education.achievements.map((item, i) => (
                        <div key={i} className="flex items-start p-3 rounded-lg bg-theme-light/50 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                          <Award className="h-5 w-5 text-theme-accent flex-shrink-0 mr-2" />
                          <p className="text-sm text-theme-dark/80">{item}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <style>
        {`
        .animate-slide-in-bottom {
          animation: slideInBottom 0.6s ease forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease forwards;
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
