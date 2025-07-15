
import React, { useEffect, useRef } from "react";
import { GraduationCap, Award, BookOpen, Calendar, MapPin, TrendingUp, Code, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const educationCardsRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  // Enhanced animations with optimized observer logic
  useEffect(() => {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in-bottom');
        }
      });
    }, { threshold: 0.1 });

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
      degree: "Bachelor of Science in Software Engineering",
      specialization: "Software Design & Development",
      period: "September 2022 - February 2026",
      location: "Budapest, Hungary",
      gpa: "8.2/10",
      status: "Final Year",
      relevantCoursework: [
        "Data Structures & Algorithms",
        "Software Testing & QA",
        "Machine Learning & Deep Learning",
        "Distributed Systems Programming",
        "Modern Software Technologies",
        "Database Systems & Design"
      ],
      achievements: [
        "Developing ML-based ATM cash prediction system for thesis",
        "Consistently ranked in top 5% of class",
        "Maintained 8.2+ GPA throughout program",
        "Active participant in software engineering projects"
      ],
      type: "university",
      techFocus: ["Python", "Machine Learning", "Full-Stack Development", "System Design"]
    },
    {
      id: "highschool",
      institution: "BMSZC Bláthy Ottó Titusz IT Technical School",
      degree: "Technical Diploma in Information Technology",
      specialization: "Software Development & Network Administration",
      period: "September 2017 - June 2022",
      location: "Budapest, Hungary",
      gpa: "5.0/5.0",
      status: "Graduated with Honors",
      relevantCoursework: [
        "Object-Oriented Programming",
        "Database Management Systems",
        "Network Security & Administration",
        "System Administration (Windows/Linux)",
        "Software Development Lifecycle"
      ],
      achievements: [
        "Graduated valedictorian with perfect 5.0/5.0 GPA",
        "Cisco CCNA R&S certification (Modules 1-3)",
        "Led technical projects in network infrastructure",
        "Specialized in enterprise-level system administration"
      ],
      type: "highschool",
      techFocus: ["Networking", "System Administration", "Database Design", "Technical Leadership"]
    }
  ];

  return (
    <section id="education" className="section bg-gradient-to-br from-white via-theme-lightest/50 to-theme-light/20 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              ref={sectionRef}
              className="text-4xl md:text-5xl font-bold text-theme-dark mb-6 opacity-0 transition-all duration-700"
            >
              Academic Excellence
            </h2>
            <p className="text-theme-dark/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Strong academic foundation in software engineering, computer science, and emerging technologies, 
              preparing for leadership roles in top-tier technology companies.
            </p>
          </div>
          
          <div ref={educationCardsRef} className="space-y-12">
            {educationData.map((education, index) => (
              <Card 
                key={education.id}
                className="education-card opacity-0 transition-all duration-500 hover:shadow-2xl group rounded-3xl border-theme-light/30 transform hover:-translate-y-2 overflow-hidden bg-white/95 backdrop-blur-sm"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row min-h-[400px]">
                    {/* Left side - Institution info with lighter theme */}
                    <div className="lg:w-2/5 bg-gradient-to-br from-theme-light/80 to-theme-light/60 p-8 lg:p-10 text-theme-dark relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-theme-accent/10 rounded-full -mr-16 -mt-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-theme/10 rounded-full -ml-12 -mb-12"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center mb-6">
                          <div className="p-4 rounded-2xl bg-white/90 shadow-lg">
                            <GraduationCap className="h-8 w-8 text-theme-accent" />
                          </div>
                          <div className="ml-4">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-theme-accent/20 text-theme-accent border border-theme-accent/30 font-medium">
                              <Calendar size={16} className="mr-2" />
                              <span className="text-sm">{education.period}</span>
                            </div>
                          </div>
                        </div>
                        
                        <h3 className="text-2xl lg:text-3xl font-bold mb-3 leading-tight text-theme-dark">
                          {education.institution}
                        </h3>
                        
                        <div className="flex items-center mb-4 text-theme-dark/80">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="text-sm">{education.location}</span>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-3 rounded-xl bg-white/60 backdrop-blur-sm">
                            <span className="text-theme-dark/80 text-sm font-medium">Academic Performance:</span>
                            <span className="font-bold text-theme-accent text-lg">{education.gpa}</span>
                          </div>
                          <div className="flex items-center justify-between p-3 rounded-xl bg-white/60 backdrop-blur-sm">
                            <span className="text-theme-dark/80 text-sm font-medium">Status:</span>
                            <span className="font-semibold text-theme-dark">{education.status}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right side - Academic details */}
                    <div className="lg:w-3/5 p-8 lg:p-10 bg-white">
                      <div className="mb-8">
                        <h4 className="text-xl lg:text-2xl font-bold text-theme-dark mb-2">
                          {education.degree}
                        </h4>
                        <p className="text-theme-accent font-medium text-lg">{education.specialization}</p>
                      </div>
                      
                      {/* Tech Focus Areas */}
                      <div className="mb-8">
                        <div className="flex items-center mb-4">
                          <Code className="h-5 w-5 text-theme-accent mr-2" />
                          <h5 className="font-semibold text-theme-dark">Technical Focus Areas</h5>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {education.techFocus.map((tech, i) => (
                            <span key={i} className="px-3 py-1 text-sm rounded-full bg-theme-accent/10 text-theme-accent border border-theme-accent/20 font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Relevant Coursework */}
                      <div className="mb-8">
                        <div className="flex items-center mb-4">
                          <BookOpen className="h-5 w-5 text-theme-accent mr-2" />
                          <h5 className="font-semibold text-theme-dark">Relevant Coursework</h5>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {education.relevantCoursework.map((course, i) => (
                            <div key={i} className="flex items-center p-3 rounded-lg bg-theme-light/30 hover:bg-theme-light/50 transition-colors duration-300">
                              <div className="w-2 h-2 rounded-full bg-theme-accent mr-3 flex-shrink-0"></div>
                              <span className="text-sm text-theme-dark/80 font-medium">{course}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Key Achievements */}
                      <div>
                        <div className="flex items-center mb-4">
                          <Award className="h-5 w-5 text-theme-accent mr-2" />
                          <h5 className="font-semibold text-theme-dark">Key Achievements & Impact</h5>
                        </div>
                        <div className="space-y-3">
                          {education.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start p-4 rounded-xl bg-gradient-to-r from-theme-light/20 to-theme-accent/5 hover:from-theme-light/30 hover:to-theme-accent/10 transition-all duration-300 border border-theme-light/30">
                              <TrendingUp className="w-4 h-4 text-theme-accent mt-0.5 mr-3 flex-shrink-0" />
                              <span className="text-sm text-theme-dark/80 leading-relaxed font-medium">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <style>
        {`
        .animate-slide-in-bottom {
          animation: slideInBottom 0.8s ease forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease forwards;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInBottom {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .education-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.98) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(63, 114, 175, 0.15);
        }
        
        .education-card:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
        }
        `}
      </style>
    </section>
  );
};

export default Education;
