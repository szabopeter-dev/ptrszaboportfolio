
import React from "react";
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">Education</h2>
        
        <div className="max-w-4xl mx-auto mt-16">
          <div className="card p-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex items-start">
                <div className="p-4 rounded-full bg-theme/10">
                  <GraduationCap className="h-10 w-10 text-theme" />
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-theme-dark">University of Óbuda</h3>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-theme/10 text-theme">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm font-medium">July 2022 - February 2026</span>
                  </div>
                </div>
                
                <p className="text-lg font-medium text-theme mb-6">B.S. Software Engineering, Software Design and Development</p>
                
                <div className="bg-theme-lightest rounded-lg p-6 mb-6">
                  <div className="flex items-center mb-3">
                    <BookOpen className="h-5 w-5 text-theme-accent mr-2" />
                    <h4 className="font-medium text-theme-dark">Relevant Coursework</h4>
                  </div>
                  <p className="text-theme-dark/80">
                    Algorithms and Data Structures, Software Testing and Quality Assurance, 
                    Data Science and Deep Learning, Parallel and Distributed Systems Programming, 
                    Modern Software Technologies, Linear Algebra, Probability and Statistics
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start p-4 rounded-lg bg-theme-light/50">
                    <Award className="h-6 w-6 text-theme-accent flex-shrink-0 mr-3" />
                    <p className="text-theme-dark/80">Working on an ML-based ATM cash level prediction thesis</p>
                  </div>
                  <div className="flex items-start p-4 rounded-lg bg-theme-light/50">
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
