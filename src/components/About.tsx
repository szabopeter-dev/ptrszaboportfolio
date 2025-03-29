
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-0 bg-navy">
      <div className="container mx-auto">
        <h2 className="section-heading">
          <span className="section-heading-number">01.</span> About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 text-slate">
            <p className="mb-4 text-lg">
              Hello! I'm a Software Engineer currently pursuing my B.S. in Software Engineering at the 
              University of Óbuda. I'm passionate about building software solutions that solve real-world problems 
              and enhance user experiences.
            </p>
            
            <p className="mb-4 text-lg">
              At ReComp Informatikai Zrt., I contribute to modernizing legacy systems, bringing them up to 
              current technology standards with React, Next.js, and .NET. My academic focus includes 
              machine learning applications, and I'm currently working on an ML-based ATM cash level prediction thesis.
            </p>
            
            <p className="mb-8 text-lg">
              Outside of my professional work, I value maintaining a healthy lifestyle and played handball competitively
              for many years, which instilled strong teamwork abilities that I apply in collaborative development environments.
              I'm also passionate about knowledge sharing and plan to work as a teaching assistant in my final semester.
            </p>
            
            <p className="text-lg">
              Technologies I've been working with recently:
            </p>
            
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 mt-4 text-slate-light">
              <li className="flex items-center">
                <span className="text-accent mr-2">▹</span> React.js
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">▹</span> Next.js
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">▹</span> TypeScript
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">▹</span> Tailwind CSS
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">▹</span> C# / .NET Core
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">▹</span> Entity Framework
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">▹</span> Jest
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">▹</span> Git / GitLab CI
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">▹</span> Machine Learning
              </li>
            </ul>
          </div>
          
          <div className="group relative max-w-xs mx-auto">
            <div className="relative rounded-md overflow-hidden">
              <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1562516155-e0c1ee44059b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Péter Szabó" 
                className="grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="absolute -inset-0.5 rounded-lg bg-accent/30 blur opacity-50 group-hover:opacity-100 transition duration-300 -z-10 translate-x-2 translate-y-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
