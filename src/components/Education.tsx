
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
      gpa: "8.2/10 (6 completed semesters out of 7)",
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
        "Developing 4-semester ML-based ATM cash forecasting system achieving 34% MAE reduction",
        "Presenting thesis at Hungarian National Student Research Conference (TDK) in late 2025",
        "Preparing paper for submission to IEEE SAMI 2026 (Slovakia) based on thesis results",
        "Currently reading 'An Introduction to Statistical Learning' to strengthen ML theory foundation"
      ],
      type: "university",
      techFocus: ["Python", "Machine Learning", "Full-Stack Development", "System Design"]
    },
    {
      id: "highschool",
      institution: "BMSZC Szabó József Szakgimnázium", 
      degree: "IT Technical High School Diploma (5th Year Only)",
      specialization: "Information Technology",
      period: "September 2021 - June 2022",
      location: "Budapest, Hungary", 
      gpa: "5.0/5.0 (5th year only)",
      status: "Graduated with Honors",
      relevantCoursework: [
        "Object-Oriented Programming",
        "Database Management Systems",
        "Network Security & Administration",
        "System Administration (Windows/Linux)",
        "Software Development Lifecycle"
      ],
      achievements: [
        "Achieved perfect 5.0/5.0 GPA in final year (5th grade only)",
        "Specialized in software development and IT systems",
        "Focused on programming fundamentals and system administration",
        "Built strong foundation for university-level software engineering studies"
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
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-theme-dark mb-6 opacity-0 transition-all duration-700"
            >
              {t('education_title')}
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
                    <div className="lg:w-2/5 bg-gradient-to-br from-theme-light/80 to-theme-light/60 p-6 lg:p-10 text-theme-dark relative overflow-hidden">
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
                        
                        <h3 className="text-lg lg:text-2xl xl:text-3xl font-bold mb-3 leading-tight text-theme-dark">
                          {education.id === "university" ? t('university_of_obuda') : t('bmszc_school')}
                        </h3>
                        
                        <div className="flex items-center mb-4 text-theme-dark/80">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="text-sm">{education.location}</span>
                        </div>
                        
                        <div className="space-y-3 lg:space-y-4">
                          <div className="flex items-center justify-between p-2 lg:p-3 rounded-xl bg-white/60 backdrop-blur-sm">
                            <span className="text-theme-dark/80 text-xs lg:text-sm font-medium">{t('academic_performance')}:</span>
                            <span className="font-bold text-theme-accent text-sm lg:text-lg">{education.gpa}</span>
                          </div>
                          <div className="flex items-center justify-between p-2 lg:p-3 rounded-xl bg-white/60 backdrop-blur-sm">
                            <span className="text-theme-dark/80 text-xs lg:text-sm font-medium">{t('status')}:</span>
                            <span className="font-semibold text-theme-dark text-xs lg:text-sm">
                              {education.id === "university" ? t('final_year') : t('graduated_with_honors')}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right side - Academic details */}
                    <div className="lg:w-3/5 p-6 lg:p-10 bg-white">
                      <div className="mb-6 lg:mb-8">
                        <h4 className="text-lg lg:text-xl xl:text-2xl font-bold text-theme-dark mb-2">
                          {education.id === "university" ? t('education_degree') : t('technical_diploma_it')}
                        </h4>
                        <p className="text-theme-accent font-medium text-sm lg:text-base xl:text-lg">
                          {education.id === "university" ? t('software_specialization') : t('it_specialization')}
                        </p>
                      </div>
                      
                      {/* Tech Focus Areas */}
                      <div className="mb-6 lg:mb-8">
                        <div className="flex items-center mb-3 lg:mb-4">
                          <Code className="h-4 w-4 lg:h-5 lg:w-5 text-theme-accent mr-2" />
                          <h5 className="font-semibold text-theme-dark text-sm lg:text-base">{t('technical_focus_areas')}</h5>
                        </div>
                        <div className="flex flex-wrap gap-1 lg:gap-2">
                          {education.techFocus.map((tech, i) => (
                            <span key={i} className="px-2 lg:px-3 py-1 text-xs lg:text-sm rounded-full bg-theme-accent/10 text-theme-accent border border-theme-accent/20 font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Relevant Coursework */}
                      <div className="mb-6 lg:mb-8">
                        <div className="flex items-center mb-3 lg:mb-4">
                          <BookOpen className="h-4 w-4 lg:h-5 lg:w-5 text-theme-accent mr-2" />
                          <h5 className="font-semibold text-theme-dark text-sm lg:text-base">{t('education_coursework')}</h5>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3">
                          {education.relevantCoursework.map((course, i) => (
                            <div key={i} className="flex items-center p-2 lg:p-3 rounded-lg bg-theme-light/30 hover:bg-theme-light/50 transition-colors duration-300">
                              <div className="w-2 h-2 rounded-full bg-theme-accent mr-2 lg:mr-3 flex-shrink-0"></div>
                              <span className="text-xs lg:text-sm text-theme-dark/80 font-medium">{course}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Key Achievements */}
                      <div>
                        <div className="flex items-center mb-3 lg:mb-4">
                          <Award className="h-4 w-4 lg:h-5 lg:w-5 text-theme-accent mr-2" />
                          <h5 className="font-semibold text-theme-dark text-sm lg:text-base">{t('key_achievements_impact')}</h5>
                        </div>
                        <div className="space-y-2 lg:space-y-3">
                          {education.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start p-3 lg:p-4 rounded-xl bg-gradient-to-r from-theme-light/20 to-theme-accent/5 hover:from-theme-light/30 hover:to-theme-accent/10 transition-all duration-300 border border-theme-light/30">
                              <TrendingUp className="w-3 h-3 lg:w-4 lg:h-4 text-theme-accent mt-0.5 mr-2 lg:mr-3 flex-shrink-0" />
                              <span className="text-xs lg:text-sm text-theme-dark/80 leading-relaxed font-medium">{achievement}</span>
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
