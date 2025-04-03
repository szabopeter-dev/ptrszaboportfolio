
import React, { useEffect, useRef } from "react";
import { GraduationCap, Calendar, Star } from "lucide-react";

const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

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
          const items = entry.target.querySelectorAll('.education-item');
          
          // Progressive animation of items
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate-fade-in');
              item.classList.remove('opacity-0');
            }, 300 * index); // Staggered delay for each item
          });
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
      sectionRef.current.classList.add('opacity-0');
    }
    
    if (itemsRef.current) {
      itemsObserver.observe(itemsRef.current);
    }

    return () => {
      if (sectionRef.current) sectionObserver.unobserve(sectionRef.current);
      if (itemsRef.current) itemsObserver.unobserve(itemsRef.current);
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
          className="section-heading text-center text-3xl md:text-4xl font-bold text-theme-dark mb-12 md:mb-16 opacity-0"
        >
          Education
        </h2>
        
        <div ref={itemsRef} className="max-w-3xl mx-auto space-y-8">
          {educationData.map((education, index) => (
            <div 
              key={education.id}
              className="education-item opacity-0 bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ml-6 md:ml-12"
            >
              <div className="flex items-center absolute -left-3 md:-left-6 transform">
                <div className="w-10 h-10 rounded-full bg-theme-accent shadow-lg flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
              </div>
              
              <div className="ml-8">
                <h3 className="text-xl font-bold text-theme mb-1">{education.institution}</h3>
                <p className="text-theme-dark/80 mb-3">{education.degree}</p>
                
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-theme-light/50 text-theme mb-4">
                  <Calendar size={14} className="mr-2" />
                  <span className="text-xs font-medium">{education.period}</span>
                </div>
                
                <div className="space-y-3 mt-4">
                  {education.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-center space-x-2 p-2 bg-theme-lightest rounded-lg hover:bg-theme-light/30 transition-colors">
                      <Star className="h-4 w-4 text-theme-accent flex-shrink-0" />
                      <p className="text-sm text-theme-dark/80">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
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
        
        .education-item {
          position: relative;
        }
        
        .education-item:not(:last-child)::after {
          content: '';
          position: absolute;
          left: -0.5rem;
          top: 3rem;
          bottom: -3rem;
          width: 2px;
          background: linear-gradient(to bottom, var(--theme-color, #3F72AF), transparent);
        }
        `}
      </style>
    </section>
  );
};

export default Education;
