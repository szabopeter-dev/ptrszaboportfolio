
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
      title: "ATM Cash Forecasting System (BSc Thesis)",
      description: "Production-ready ML pipeline for financial forecasting using advanced deep learning architectures and comprehensive feature engineering",
      highlights: [
        "Achieved 34% MAE reduction and 0.95 R² through systematic hyperparameter optimization",
        "Implemented robust time series preprocessing with seasonality decomposition and lag structures"
      ],
      metrics: ["34% MAE Reduction", "0.95 R² Score", "4-Semester Pipeline"],
      technologies: ["Python", "TensorFlow", "GRU/LSTM", "Time Series", "Feature Engineering", "MLOps"],
      icon: <Brain className="w-6 h-6 text-theme-accent" />,
      type: "Deep Learning"
    },
    {
      title: "Healthcare Risk Prediction System",
      description: "High-performance binary classifier for early detection of alcohol consumption risk patterns in healthcare survey data",
      highlights: [
        "Achieved 91% recall on severely imbalanced dataset (1:9 ratio) using advanced preprocessing",
        "Deployed gradient boosting with SHAP explainability for clinical decision support insights"
      ],
      metrics: ["91% Recall", "Imbalanced Data", "Clinical Grade"],
      technologies: ["Python", "LightGBM", "SHAP", "Pandas", "Scikit-learn", "Data Mining"],
      icon: <TrendingUp className="w-6 h-6 text-theme-accent" />,
      type: "Machine Learning",
      githubUrl: "https://github.com/szabopeter-dev/brfss-alcohol-risk-analysis"
    },
    {
      title: "Enterprise Management Platform",
      description: "Full-stack enterprise application with microservices architecture, real-time communication, and comprehensive testing suite",
      highlights: [
        "Architected scalable backend with SOLID principles and dependency injection patterns",
        "Implemented real-time bi-directional communication using SignalR WebSockets technology"
      ],
      metrics: ["90%+ Test Coverage", "Real-time Updates", "Enterprise Scale"],
      technologies: ["C#", ".NET Core", "Angular", "Entity Framework", "SignalR", "NUnit"],
      icon: <Wand2 className="w-6 h-6 text-theme-accent" />,
      type: "Full-Stack",
      githubUrl: "https://github.com/szabopeter-dev/Harry-Potter-Project"
    }
  ];

  return (
    <section id="projects" className="section bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading text-center text-3xl md:text-4xl font-bold text-theme-dark mb-4">
          Featured Projects
        </h2>
        <p className="text-center text-theme-dark/70 mb-16 max-w-2xl mx-auto text-lg">
          AI/ML research and production systems designed to impress big tech recruiters and graduate school admissions committees
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
                  <div className="mb-6 h-32">
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
                  <div className="mb-6 h-24">
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
                  <div className="flex flex-wrap gap-1.5 mb-6 h-16 overflow-hidden">
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
