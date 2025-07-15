
import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, TrendingUp, Wand2, Github, ExternalLink, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type Project = {
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  icon: React.ReactNode;
  type: string;
};

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.project-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-fade-in');
              
              // Animate tech tags with additional delay
              const techTags = card.querySelectorAll('.tech-tag');
              techTags.forEach((tag, tagIndex) => {
                setTimeout(() => {
                  tag.classList.add('animate-scale-in');
                }, 100 + (tagIndex * 50));
              });
            }, 150 * index);
          });
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      
      const cards = sectionRef.current.querySelectorAll('.project-card');
      cards.forEach(card => {
        card.classList.add('opacity-0');
        const techTags = card.querySelectorAll('.tech-tag');
        techTags.forEach(tag => {
          tag.classList.add('opacity-0', 'scale-0');
        });
      });
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const projects: Project[] = [
    {
      title: "ATM Cash Forecasting (BSc Thesis)",
      description: "Developed a 4-semester machine learning pipeline predicting ATM cash depletion risk using GRU/LSTM and traditional models",
      highlights: [
        "Achieved up to 34% MAE reduction and 0.95 R² with optimized feature engineering",
        "Compared neural and statistical models across horizons",
        "Results support real-world use in refill strategy planning"
      ],
      technologies: ["Python", "TensorFlow", "GRU/LSTM", "Time Series", "Feature Engineering"],
      icon: <Brain className="w-6 h-6 text-theme-accent" />,
      type: "Machine Learning"
    },
    {
      title: "Risk Analysis with BRFSS Data",
      description: "Designed a LightGBM-based classifier to detect high-risk alcohol consumption patterns",
      highlights: [
        "Achieved 91% recall on imbalanced real-world health survey data",
        "Advanced data preprocessing and feature selection",
        "Healthcare analytics application"
      ],
      technologies: ["Python", "LightGBM", "Pandas", "Scikit-learn", "Data Analysis"],
      icon: <TrendingUp className="w-6 h-6 text-theme-accent" />,
      type: "Data Science"
    },
    {
      title: "Wizarding World Management System",
      description: "Developed a C# and Angular application with SOLID principles, Entity Framework Core, and RESTful architecture",
      highlights: [
        "Implemented async updates via SignalR",
        "High backend test coverage using NUnit and Moq",
        "Modern full-stack architecture"
      ],
      technologies: ["C#", "Angular", "Entity Framework", "SignalR", "NUnit", "RESTful APIs"],
      icon: <Wand2 className="w-6 h-6 text-theme-accent" />,
      type: "Full-Stack"
    }
  ];

  return (
    <section id="projects" className="section bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading text-center text-3xl md:text-4xl font-bold text-theme-dark mb-12 md:mb-16">
          Featured Projects
        </h2>
        
        <div ref={sectionRef} className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="project-card opacity-0 transition-all duration-500 hover:shadow-2xl group rounded-2xl border-theme-light/50 transform hover:-translate-y-2 overflow-hidden"
              >
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Header with icon and type */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-full bg-theme/10 group-hover:bg-theme/20 transition-colors duration-300 group-hover:scale-110 transform">
                      {project.icon}
                    </div>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-theme-accent/10 text-theme-accent">
                      {project.type}
                    </span>
                  </div>

                  {/* Title and description */}
                  <h3 className="text-xl font-bold text-theme-dark mb-3 group-hover:text-theme transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-theme-dark/80 text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-theme-dark mb-2 flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-theme-accent animate-pulse" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-xs text-theme-dark/70 flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-theme-accent mt-1.5 mr-2 flex-shrink-0"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="tech-tag opacity-0 scale-0 transition-all duration-300 text-xs px-2 py-1 rounded-full bg-theme-light/50 text-theme-dark hover:bg-theme-light hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2 mt-auto pt-4 border-t border-theme-light/30">
                    <button className="flex items-center gap-1 px-3 py-2 rounded-lg bg-theme/10 text-theme hover:bg-theme/20 transition-colors duration-300 text-sm font-medium group/btn">
                      <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                      View Code
                    </button>
                    <button className="flex items-center gap-1 px-3 py-2 rounded-lg bg-theme-accent/10 text-theme-accent hover:bg-theme-accent/20 transition-colors duration-300 text-sm font-medium group/btn">
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                      Details
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <style>
        {`
        .animate-scale-in {
          animation: scaleIn 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }
        
        @keyframes scaleIn {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        `}
      </style>
    </section>
  );
};

export default ProjectsSection;
