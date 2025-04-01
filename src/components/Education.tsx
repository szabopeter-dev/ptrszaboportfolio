
import React, { useEffect, useRef } from "react";
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";

const Education = () => {
  const educationRef = useRef<HTMLDivElement>(null);

  // Enhanced animation on scroll with sequential item animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate main card first
          const educationCard = entry.target;
          educationCard.classList.add('animate-fade-in');
          
          // Then animate children elements with delay
          const childElements = educationCard.querySelectorAll('.animate-item');
          childElements.forEach((item, index) => {
            setTimeout(() => {
              (item as HTMLElement).classList.add('animate-fade-in');
            }, 150 * (index + 1));
          });
        }
      });
    }, { threshold: 0.1 });

    const educationCard = educationRef.current;
    if (educationCard) {
      observer.observe(educationCard);
      // Add initial invisible class
      educationCard.classList.add('opacity-0');
      
      // Set initial opacity for child elements
      const childElements = educationCard.querySelectorAll('.animate-item');
      childElements.forEach(item => {
        (item as HTMLElement).classList.add('opacity-0');
      });
    }

    return () => {
      if (educationCard) observer.unobserve(educationCard);
    };
  }, []);

  return (
    <section id="education" className="section bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Education</h2>
        
        <div className="max-w-4xl mx-auto mt-16">
          <div 
            ref={educationRef} 
            className="education-card card p-6 md:p-8 opacity-0 transition-opacity duration-500 hover:shadow-2xl group"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex items-start">
                <div className="p-4 rounded-full bg-theme/10 group-hover:bg-theme/20 transition-colors duration-300">
                  <GraduationCap className="h-10 w-10 text-theme group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 animate-item">
                  <h3 className="text-2xl font-bold text-theme-dark group-hover:text-theme transition-colors duration-300">University of Óbuda</h3>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-theme/10 text-theme mt-2 md:mt-0 group-hover:bg-theme/20 transition-colors duration-300">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm font-medium">July 2022 - February 2026</span>
                  </div>
                </div>
                
                <p className="text-lg font-medium text-theme mb-6 animate-item">B.S. Software Engineering, Software Design and Development</p>
                
                <div className="bg-theme-lightest rounded-lg p-4 md:p-6 mb-6 group-hover:bg-theme-light/30 transition-colors duration-300 animate-item">
                  <div className="flex items-center mb-3">
                    <BookOpen className="h-5 w-5 text-theme-accent mr-2 group-hover:rotate-6 transition-transform duration-300" />
                    <h4 className="font-medium text-theme-dark">Relevant Coursework</h4>
                  </div>
                  <p className="text-theme-dark/80">
                    Algorithms and Data Structures, Software Testing and Quality Assurance, 
                    Data Science and Deep Learning, Parallel and Distributed Systems Programming, 
                    Modern Software Technologies, Linear Algebra, Probability and Statistics
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start p-4 rounded-lg bg-theme-light/50 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md animate-item">
                    <Award className="h-6 w-6 text-theme-accent flex-shrink-0 mr-3" />
                    <p className="text-theme-dark/80">Working on an ML-based ATM cash level prediction thesis</p>
                  </div>
                  <div className="flex items-start p-4 rounded-lg bg-theme-light/50 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md animate-item">
                    <Award className="h-6 w-6 text-theme-accent flex-shrink-0 mr-3" />
                    <p className="text-theme-dark/80">Ranked in the top 5 of class</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
