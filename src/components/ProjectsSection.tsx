
import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, TrendingUp, Wand2, Github, ExternalLink, Target, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type Project = {
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  icon: React.ReactNode;
  type: string;
  githubUrl?: string;
  metrics?: string[];
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
              
              const techTags = card.querySelectorAll('.tech-tag');
              techTags.forEach((tag, tagIndex) => {
                setTimeout(() => {
                  tag.classList.add('animate-scale-in');
                }, 100 + (tagIndex * 50));
              });

              const metrics = card.querySelectorAll('.metric-item');
              metrics.forEach((metric, metricIndex) => {
                setTimeout(() => {
                  metric.classList.add('animate-slide-up');
                }, 200 + (metricIndex * 100));
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
        const metrics = card.querySelectorAll('.metric-item');
        metrics.forEach(metric => {
          metric.classList.add('opacity-0', 'translate-y-4');
        });
      });
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const projects: Project[] = [
    {
      title: "ATM Cash Demands Forecasting",
      description: "BSc Thesis & IEEE Conference Paper - Developing a 4-semester machine learning pipeline to predict ATM cash depletion risk using GRU/LSTM networks on 700K+ real transaction records",
      highlights: [
        "Achieved a 67% reduction in MAE (from 550K to 181K HUF) and up to 0.95 R² through advanced time series feature engineering",
        "Demonstrated real-world applicability for optimizing ATM refill strategies comparing deep learning and traditional models"
      ],
      metrics: ["67% MAE Reduction", "0.95 R² Score", "700K+ Records"],
      technologies: ["Python", "TensorFlow", "GRU/LSTM", "Time Series", "PACF Analysis", "Feature Engineering"],
      icon: <Brain className="w-6 h-6 text-theme-accent" />,
      type: "BSc Thesis"
    },
    {
      title: "Hogwarts-Inspired Management System",
      description: "Academic Full-Stack Project - Built full-stack web application using C# (.NET Core) backend and Angular frontend with SOLID principles and RESTful API design",
      highlights: [
        "Implemented real-time updates via SignalR WebSocket connections for live data synchronization",
        "Achieved comprehensive backend testing using NUnit and Moq frameworks following software development best practices"
      ],
      metrics: ["Real-time Updates", "SOLID Principles", "Full Testing"],
      technologies: ["C#", ".NET Core", "Angular", "Entity Framework", "SignalR", "NUnit"],
      icon: <Wand2 className="w-6 h-6 text-theme-accent" />,
      type: "Academic Project",
      githubUrl: "https://github.com/szabopeter-dev/Harry-Potter-Project"
    },
    {
      title: "Alcohol Risk Prediction with Machine Learning",
      description: "Independent ML Project - Built a high-recall LightGBM model to identify individuals at risk of problematic alcohol use using healthcare survey data",
      highlights: [
        "Achieved 0.939 AUC and 91% recall by engineering a robust CDC-based target variable",
        "Selected key behavioral and health-related features, revealing strong links between alcohol misuse, smoking, age, and mental health"
      ],
      metrics: ["0.939 AUC", "91% Recall", "CDC-based"],
      technologies: ["Python", "LightGBM", "SHAP", "Pandas", "Scikit-learn", "Feature Engineering"],
      icon: <TrendingUp className="w-6 h-6 text-theme-accent" />,
      type: "Independent Project",
      githubUrl: "https://github.com/szabopeter-dev/brfss-alcohol-risk-analysis"
    }
  ];

  return (
    <section id="projects" className="section bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading text-center text-3xl md:text-4xl font-bold text-theme-dark mb-4">
          Featured Projects
        </h2>
        <p className="text-center text-theme-dark/70 mb-16 max-w-2xl mx-auto text-lg">
          Production-ready solutions demonstrating expertise in machine learning, full-stack development, and scalable system design
        </p>
        
        <div ref={sectionRef} className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="project-card opacity-0 transition-all duration-500 hover:shadow-2xl group rounded-2xl border-theme-light/50 transform hover:-translate-y-2 overflow-hidden bg-gradient-to-b from-white to-theme-lightest/30 h-full flex flex-col"
              >
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Header with icon and type - Fixed height */}
                  <div className="flex items-center justify-between mb-6 h-12">
                    <div className="p-3 rounded-full bg-theme/10 group-hover:bg-theme/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 transform">
                      {project.icon}
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-theme-accent/10 to-theme/10 text-theme-accent border border-theme-accent/20">
                      {project.type}
                    </span>
                  </div>

                  {/* Title and description - Fixed height */}
                  <div className="mb-6 h-28 md:h-32">
                    <h3 className="text-lg font-bold text-theme-dark mb-3 group-hover:text-theme transition-colors duration-300 leading-tight h-12 flex items-center">
                      {project.title}
                    </h3>
                    <p className="text-theme-dark/80 text-sm leading-relaxed line-clamp-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Metrics - Fixed height */}
                  <div className="grid grid-cols-3 gap-2 mb-6 h-16">
                    {project.metrics?.map((metric, idx) => (
                      <div key={idx} className="metric-item opacity-0 translate-y-4 transition-all duration-500 text-center p-2 rounded-lg bg-theme-accent/5 border border-theme-accent/10 flex flex-col justify-center">
                        <div className="text-xs font-bold text-theme-accent leading-tight">{metric.split(' ')[0]}</div>
                        <div className="text-xs text-theme-dark/60 leading-tight">{metric.split(' ').slice(1).join(' ')}</div>
                      </div>
                    ))}
                  </div>

                  {/* Key achievements - Fixed height */}
                  <div className="mb-6 h-20 md:h-24">
                    <h4 className="text-sm font-semibold text-theme-dark mb-3 flex items-center">
                      <Target className="w-4 h-4 mr-2 text-theme-accent" />
                      Impact & Results
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.slice(0, 2).map((highlight, idx) => (
                        <li key={idx} className="text-xs text-theme-dark/70 flex items-start">
                          <Award className="w-3 h-3 text-theme-accent mt-0.5 mr-2 flex-shrink-0" />
                          <span className="line-clamp-2">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies - Fixed height */}
                  <div className="flex flex-wrap gap-1.5 mb-6 h-14 md:h-16 overflow-hidden">
                    {project.technologies.slice(0, 6).map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="tech-tag opacity-0 scale-0 transition-all duration-300 text-xs px-2 py-1 rounded-md bg-theme-light/50 text-theme-dark hover:bg-theme-light hover:scale-105 border border-theme-light h-fit"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub link - Fixed at bottom */}
                  <div className="mt-auto">
                    {project.githubUrl ? (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-3 rounded-lg bg-theme/10 text-theme hover:bg-theme/20 transition-all duration-300 text-sm font-medium group/btn justify-center w-full"
                      >
                        <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                        View Source Code
                        <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                      </a>
                    ) : (
                      <div className="h-12 flex items-center justify-center text-theme-dark/50 text-sm italic border border-theme-light/50 rounded-lg bg-theme-light/20">
                        Proprietary Project
                      </div>
                    )}
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
        
        .animate-slide-up {
          animation: slideUp 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }
        
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        
        .line-clamp-4 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4;
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
        
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(16px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        `}
      </style>
    </section>
  );
};

export default ProjectsSection;
