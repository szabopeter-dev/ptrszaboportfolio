
import React from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 md:px-0 bg-navy-light">
      <div className="container mx-auto">
        <h2 className="section-heading">
          <span className="section-heading-number">04.</span> Education
        </h2>
        
        <div className="max-w-4xl">
          <div className="bg-navy-light border border-navy-lightest p-6 rounded-lg mb-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="p-3 bg-navy rounded-full">
                <GraduationCap className="h-7 w-7 text-accent" />
              </div>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <h3 className="text-xl font-semibold text-slate-lightest">University of Óbuda</h3>
                  <p className="text-sm font-mono text-accent">July 2022 - February 2026</p>
                </div>
                <p className="text-slate-light">B.S. Software Engineering, Software Design and Development</p>
                <div className="mt-4">
                  <p className="text-slate mb-2">
                    <span className="inline-flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-accent" /> Relevant Coursework:
                    </span>
                  </p>
                  <p className="text-slate">
                    Algorithms and Data Structures, Software Testing and Quality Assurance, 
                    Data Science and Deep Learning, Parallel and Distributed Systems Programming, 
                    Modern Software Technologies, Linear Algebra, Probability and Statistics
                  </p>
                  <div className="flex flex-col md:flex-row gap-4 mt-4">
                    <div className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-slate">Working on an ML-based ATM cash level prediction thesis</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-slate">Ranked in the top 5 of class</p>
                    </div>
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
