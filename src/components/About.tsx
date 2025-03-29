
import React from "react";

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          <div className="md:col-span-2 text-theme-dark/80">
            <p className="mb-6 text-lg leading-relaxed">
              Hello! I'm a Software Engineer currently pursuing my B.S. in Software Engineering at the 
              University of Óbuda. I'm passionate about building software solutions that solve real-world problems 
              and enhance user experiences.
            </p>
            
            <p className="mb-6 text-lg leading-relaxed">
              At ReComp Informatikai Zrt., I contribute to modernizing legacy systems, bringing them up to 
              current technology standards with React, Next.js, and .NET. My academic focus includes 
              machine learning applications, and I'm currently working on an ML-based ATM cash level prediction thesis.
            </p>
            
            <p className="mb-8 text-lg leading-relaxed">
              Outside of my professional work, I value maintaining a healthy lifestyle and played handball competitively
              for many years, which instilled strong teamwork abilities that I apply in collaborative development environments.
              I'm also passionate about knowledge sharing and plan to work as a teaching assistant in my final semester.
            </p>
            
            <p className="text-lg font-medium text-theme-dark mb-4">
              Technologies I've been working with recently:
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3 mt-4 text-theme-dark/80">
              {[
                "React.js", "Next.js", "TypeScript", "Tailwind CSS", 
                "C# / .NET Core", "Entity Framework", "Jest", 
                "Git / GitLab CI", "Machine Learning"
              ].map((tech, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-theme-accent mr-2"></div>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-theme/10"></div>
              <img 
                src="https://images.unsplash.com/photo-1562516155-e0c1ee44059b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Péter Szabó" 
                className="w-full h-full object-cover object-center transition-all duration-300 hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 border-2 border-theme-accent rounded-lg -translate-x-4 -translate-y-4 z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
