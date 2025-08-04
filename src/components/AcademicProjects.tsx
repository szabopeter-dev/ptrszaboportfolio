import React, { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, Database, Github, ExternalLink, Award } from "lucide-react";

const AcademicProjects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll('.project-item');
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate-fade-in');
            }, 150 * index);
          });
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      
      const items = sectionRef.current.querySelectorAll('.project-item');
      items.forEach(item => {
        item.classList.add('opacity-0');
      });
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const projects = [
    {
      title: "ATM Cash Forecasting ML Pipeline",
      subtitle: "BSc Thesis Project",
      period: "2023 – 2025",
      description: "Comprehensive machine learning system for predicting ATM cash demand using historical transaction data and economic indicators.",
      achievements: [
        "34% reduction in Mean Absolute Error compared to baseline models",
        "Implementation of LSTM, ARIMA, and ensemble methods",
        "Statistical validation with 95% confidence intervals",
        "Real-world dataset analysis of 50,000+ transactions"
      ],
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "Statistical Analysis"],
      icon: <Brain className="w-6 h-6 text-blue-600" />,
      status: "Thesis Defense: Spring 2025"
    },
    {
      title: "Attorney Management System Modernization",
      subtitle: "Industry Collaboration Project",
      period: "2024 – Present",
      description: "Full-stack modernization of legacy Delphi system using React, Next.js, and .NET Core architecture.",
      achievements: [
        "Migrated 15+ legacy modules to modern React architecture",
        "Implemented CI/CD pipeline with GitLab and Jest testing",
        "Developed real-time document processing features",
        "Enhanced system performance by 60%"
      ],
      technologies: ["React", "Next.js", "TypeScript", "C# .NET Core", "Entity Framework"],
      icon: <Code className="w-6 h-6 text-green-600" />,
      status: "Production Deployment: Q1 2025"
    },
    {
      title: "AI-Powered Legal Document Anonymization",
      subtitle: "Research & Development",
      period: "2024",
      description: "NLP pipeline for automated anonymization of sensitive data in legal documents using advanced text processing.",
      achievements: [
        "Automated detection of personal identifiers with 95% accuracy",
        "Integration with HuSpaCy for Hungarian language processing",
        "Compliance with GDPR data protection requirements",
        "Processing speed: 1000+ documents per hour"
      ],
      technologies: ["Python", "spaCy", "HuSpaCy", "Regex", "NLP"],
      icon: <Database className="w-6 h-6 text-purple-600" />,
      status: "Production Ready"
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="section-number font-sans">03.</p>
            <h2 className="section-heading font-display">Selected Projects</h2>
            <p className="text-gray-600 font-serif text-lg mt-4">
              A curated selection of academic and professional projects demonstrating technical expertise 
              in machine learning, software engineering, and system modernization.
            </p>
          </div>
          
          <div ref={sectionRef} className="space-y-8">
            {projects.map((project, index) => (
              <Card key={index} className="project-item opacity-0 transition-all duration-500 border border-gray-200 shadow-sm hover:shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      {project.icon}
                      <div>
                        <CardTitle className="text-xl font-display text-gray-900">{project.title}</CardTitle>
                        <p className="text-sm text-gray-500 font-sans mt-1">{project.subtitle} • {project.period}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 text-xs font-sans bg-blue-100 text-blue-700 rounded-full">
                      {project.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-700 font-serif mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-sm font-sans font-semibold text-gray-700 uppercase tracking-wider mb-3">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm font-serif text-gray-600">
                            <Award className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-sans font-semibold text-gray-700 uppercase tracking-wider mb-3">
                        Technical Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-2 py-1 text-xs font-mono bg-gray-100 text-gray-700 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicProjects;