import React, { useEffect, useRef } from "react";
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";

const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const universityRef = useRef<HTMLDivElement>(null);
  const highSchoolRef = useRef<HTMLDivElement>(null);

  // Enhanced animations with slide-in effect
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
          // Add delay between university and high school animations
          if (entry.target.id === 'university-card') {
            entry.target.classList.add('animate-slide-in-right');
          } else if (entry.target.id === 'highschool-card') {
            setTimeout(() => {
              entry.target.classList.add('animate-slide-in-left');
            }, 300); // Delay the high school animation
          }
        }
      });
    }, { threshold: 0.1, rootMargin: '-50px 0px -100px 0px' });

    const sectionElement = sectionRef.current;
    const universitySection = universityRef.current;
    const highSchoolSection = highSchoolRef.current;
    
    if (sectionElement) {
      sectionObserver.observe(sectionElement);
      sectionElement.classList.add('opacity-0');
    }
    
    if (universitySection) {
      cardsObserver.observe(universitySection);
      universitySection.classList.add('opacity-0', 'translate-x-8');
    }
    
    if (highSchoolSection) {
      cardsObserver.observe(highSchoolSection);
      highSchoolSection.classList.add('opacity-0', 'translate-x-8');
    }

    return () => {
      if (sectionElement) sectionObserver.unobserve(sectionElement);
      if (universitySection) cardsObserver.unobserve(universitySection);
      if (highSchoolSection) cardsObserver.unobserve(highSchoolSection);
    };
  }, []);

  return (
    <section id="education" className="section bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 
          ref={sectionRef}
          className="section-heading text-center text-3xl md:text-4xl font-bold text-theme-dark mb-12 md:mb-16 opacity-0 transition-all duration-700"
        >
          Education
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-10">
          {/* University of Óbuda */}
          <div 
            id="university-card"
            ref={universityRef} 
            className="education-card card p-5 md:p-8 opacity-0 transition-all duration-700 ease-out hover:shadow-2xl group rounded-2xl"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex items-start">
                <div className="p-3 md:p-4 rounded-full bg-theme/10 group-hover:bg-theme/20 transition-colors duration-300">
                  <GraduationCap className="h-8 w-8 md:h-10 md:w-10 text-theme group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-theme-dark group-hover:text-theme transition-colors duration-300">University of Óbuda</h3>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-theme/10 text-theme mt-2 md:mt-0 group-hover:bg-theme/20 transition-colors duration-300 whitespace-nowrap">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm font-medium">September 2022 - February 2026</span>
                  </div>
                </div>
                
                <p className="text-base md:text-lg font-medium text-theme mb-4 md:mb-6">B.S. Software Engineering, Software Design and Development</p>
                
                <div className="bg-theme-lightest rounded-lg p-4 md:p-6 mb-4 md:mb-6 group-hover:bg-theme-light/30 transition-colors duration-300">
                  <div className="flex items-center mb-2 md:mb-3">
                    <BookOpen className="h-5 w-5 text-theme-accent mr-2 group-hover:rotate-6 transition-transform duration-300" />
                    <h4 className="font-medium text-theme-dark">Relevant Coursework</h4>
                  </div>
                  <p className="text-sm md:text-base text-theme-dark/80">
                    Algorithms and Data Structures, Software Testing and Quality Assurance, 
                    Data Science and Deep Learning, Parallel and Distributed Systems Programming, 
                    Modern Software Technologies, Linear Algebra, Probability and Statistics
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div className="flex items-start p-3 md:p-4 rounded-lg bg-theme-light/50 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <Award className="h-5 w-5 md:h-6 md:w-6 text-theme-accent flex-shrink-0 mr-2 md:mr-3" />
                    <p className="text-sm md:text-base text-theme-dark/80">Working on an ML-based ATM cash level prediction thesis</p>
                  </div>
                  <div className="flex items-start p-3 md:p-4 rounded-lg bg-theme-light/50 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <Award className="h-5 w-5 md:h-6 md:w-6 text-theme-accent flex-shrink-0 mr-2 md:mr-3" />
                    <p className="text-sm md:text-base text-theme-dark/80">Ranked in the top 5 of class</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
            
          {/* High School */}
          <div 
            id="highschool-card"
            ref={highSchoolRef} 
            className="education-card card p-5 md:p-8 opacity-0 transition-all duration-700 ease-out hover:shadow-2xl group rounded-2xl"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex items-start">
                <div className="p-3 md:p-4 rounded-full bg-theme/10 group-hover:bg-theme/20 transition-colors duration-300">
                  <GraduationCap className="h-8 w-8 md:h-10 md:w-10 text-theme group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-theme-dark group-hover:text-theme transition-colors duration-300">BMSZC Bláthy Ottó Titusz Informatikai Technikum</h3>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-theme/10 text-theme mt-2 md:mt-0 group-hover:bg-theme/20 transition-colors duration-300 whitespace-nowrap">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm font-medium">September 2017 - June 2022</span>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4 md:mb-6">
                  <p className="text-base md:text-lg font-medium text-theme">High School Diploma, Information Technology</p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-theme/10 text-theme group-hover:bg-theme/20 transition-colors duration-300 w-max">
                    <Award className="h-4 w-4 text-theme-accent mr-1" />
                    <span className="text-sm font-medium">Grade: 5</span>
                  </div>
                </div>
                
                <div className="bg-theme-lightest rounded-lg p-4 md:p-6 mb-4 md:mb-6 group-hover:bg-theme-light/30 transition-colors duration-300">
                  <div className="flex items-center mb-2 md:mb-3">
                    <BookOpen className="h-5 w-5 text-theme-accent mr-2 group-hover:rotate-6 transition-transform duration-300" />
                    <h4 className="font-medium text-theme-dark">Education Highlights</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-3 md:mt-4">
                    <div className="flex items-start p-3 rounded-lg bg-white/70 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">
                      <p className="text-sm md:text-base text-theme-dark/80">IT-focused secondary school diploma – software, databases, networking, Windows & Linux servers</p>
                    </div>
                    <div className="flex items-start p-3 rounded-lg bg-white/70 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">
                      <p className="text-sm md:text-base text-theme-dark/80">Cisco CCNA R&S Modules 1–3 – IP addressing, routing protocols, and basic network configuration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add animation styles */}
      <style jsx>{`
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease forwards;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease forwards;
        }
        
        .animate-slide-in-bottom {
          animation: slideInBottom 0.6s ease forwards;
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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
      `}</style>
    </section>
  );
};

export default Education;