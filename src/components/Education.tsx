
import React, { useEffect, useRef } from "react";
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const educationCardsRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

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
          {t('education_title')}
        </h2>
        
        <div ref={educationCardsRef} className="max-w-4xl mx-auto space-y-8">
          {/* Changed to a vertical stack layout */}
          <div className="flex flex-col gap-8">
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
                        <h4 className="font-medium text-theme-dark text-sm">{t('education_coursework')}</h4>
                      </div>
                      <p className="text-sm text-theme-dark/80">
                        {education.coursework}
                      </p>
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
