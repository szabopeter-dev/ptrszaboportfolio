
import React, { useEffect, useRef } from "react";
import { GraduationCap, Award, BookOpen, Calendar, ExternalLink } from "lucide-react";
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
      degree: "B.S. Software Engineering, Software Design and Development",
      period: "September 2022 - February 2026",
      location: "Budapest, Hungary",
      gpa: "8.2/10",
      status: "Final Year",
      coursework: [
        "Algorithms and Data Structures",
        "Software Testing and Quality Assurance", 
        "Data Science and Deep Learning",
        "Parallel and Distributed Systems Programming",
        "Modern Software Technologies",
        "Linear Algebra",
        "Probability and Statistics"
      ],
      achievements: [
        "Working on an ML-based ATM cash level prediction thesis",
        "Ranked in the top 5 of class",
        "Maintained consistent high academic performance"
      ],
      type: "university"
    },
    {
      id: "highschool",
      institution: "BMSZC Bláthy Ottó Titusz Informatikai Technikum",
      degree: "High School Diploma, Information Technology",
      period: "September 2017 - June 2022",
      location: "Budapest, Hungary",
      gpa: "5/5",
      status: "Graduated",
      coursework: [
        "IT-focused secondary school curriculum",
        "Software development fundamentals",
        "Database management systems",
        "Computer networking",
        "Windows & Linux server administration"
      ],
      achievements: [
        "Graduated with highest honors (Grade: 5/5)",
        "Cisco CCNA R&S Modules 1–3 certification",
        "Specialized in IP addressing and routing protocols"
      ],
      type: "highschool"
    }
  ];

  return (
    <section id="education" className="section bg-gradient-to-br from-theme-lightest via-white to-theme-light/30 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 
            ref={sectionRef}
            className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-theme-dark mb-4 opacity-0 transition-all duration-700"
          >
            {t('education_title')}
          </h2>
          
          <p className="text-center text-theme-dark/70 text-lg md:text-xl mb-12 md:mb-16 max-w-2xl mx-auto">
            Academic foundation building expertise in software engineering and technology
          </p>
          
          <div ref={educationCardsRef} className="space-y-8">
            {educationData.map((education, index) => (
              <Card 
                key={education.id}
                className="education-card opacity-0 transition-all duration-500 hover:shadow-2xl group rounded-2xl border-theme-light/50 transform hover:-translate-y-1 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    {/* Left side - Institution info */}
                    <div className="lg:w-1/3 bg-gradient-to-br from-theme to-theme-dark p-6 lg:p-8 text-white">
                      <div className="flex items-center mb-4">
                        <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm">
                          <GraduationCap className="h-8 w-8 text-white" />
                        </div>
                        <div className="ml-4">
                          <div className="inline-flex items-center px-3 py-1 rounded-full bg-theme-accent/20 text-theme-accent border border-theme-accent/30">
                            <Calendar size={14} className="mr-2" />
                            <span className="text-sm font-medium">{education.period}</span>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl lg:text-2xl font-bold mb-2 leading-tight">
                        {education.institution}
                      </h3>
                      
                      <p className="text-white/90 text-sm mb-3">{education.location}</p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-white/80 text-sm">GPA:</span>
                          <span className="font-semibold text-theme-accent">{education.gpa}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white/80 text-sm">Status:</span>
                          <span className="font-semibold text-white">{education.status}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right side - Details */}
                    <div className="lg:w-2/3 p-6 lg:p-8">
                      <div className="mb-6">
                        <h4 className="text-lg lg:text-xl font-semibold text-theme-dark mb-3">
                          {education.degree}
                        </h4>
                      </div>
                      
                      {/* Coursework */}
                      <div className="mb-6">
                        <div className="flex items-center mb-3">
                          <BookOpen className="h-5 w-5 text-theme-accent mr-2" />
                          <h5 className="font-semibold text-theme-dark">Key Coursework</h5>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {education.coursework.map((course, i) => (
                            <div key={i} className="flex items-start">
                              <div className="w-2 h-2 rounded-full bg-theme-accent mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-sm text-theme-dark/80">{course}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Achievements */}
                      <div>
                        <div className="flex items-center mb-3">
                          <Award className="h-5 w-5 text-theme-accent mr-2" />
                          <h5 className="font-semibold text-theme-dark">Key Achievements</h5>
                        </div>
                        <div className="space-y-3">
                          {education.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start p-3 rounded-lg bg-theme-light/30 hover:bg-theme-light/50 transition-colors duration-300">
                              <div className="w-2 h-2 rounded-full bg-theme-accent mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-sm text-theme-dark/80">{achievement}</span>
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
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(63, 114, 175, 0.1);
        }
        
        .education-card:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
        }
        `}
      </style>
    </section>
  );
};

export default Education;
