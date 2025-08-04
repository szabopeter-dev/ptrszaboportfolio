import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Brain, Server, Globe, TestTube } from "lucide-react";

const TechnicalSkills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll('.skill-category');
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
      
      const items = sectionRef.current.querySelectorAll('.skill-category');
      items.forEach(item => {
        item.classList.add('opacity-0');
      });
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6 text-blue-600" />,
      skills: [
        { name: "Python", level: "Advanced", description: "ML/AI development, data analysis" },
        { name: "C# / .NET Core", level: "Advanced", description: "Enterprise applications, web APIs" },
        { name: "TypeScript", level: "Advanced", description: "Type-safe web development" },
        { name: "JavaScript", level: "Advanced", description: "Full-stack development" },
        { name: "SQL", level: "Intermediate", description: "Database design and optimization" }
      ]
    },
    {
      title: "Machine Learning & AI",
      icon: <Brain className="w-6 h-6 text-purple-600" />,
      skills: [
        { name: "TensorFlow", level: "Advanced", description: "Deep learning models, time series" },
        { name: "Scikit-learn", level: "Advanced", description: "Classical ML algorithms" },
        { name: "Pandas & NumPy", level: "Advanced", description: "Data manipulation and analysis" },
        { name: "Statistical Analysis", level: "Intermediate", description: "Hypothesis testing, regression" },
        { name: "NLP", level: "Intermediate", description: "Text processing, spaCy" }
      ]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-6 h-6 text-green-600" />,
      skills: [
        { name: "React.js", level: "Advanced", description: "Component-based architecture" },
        { name: "Next.js", level: "Advanced", description: "Full-stack React framework" },
        { name: "Tailwind CSS", level: "Advanced", description: "Utility-first styling" },
        { name: "REST APIs", level: "Advanced", description: "API design and integration" },
        { name: "Git / GitLab CI", level: "Advanced", description: "Version control, CI/CD" }
      ]
    },
    {
      title: "Database & Backend",
      icon: <Database className="w-6 h-6 text-orange-600" />,
      skills: [
        { name: "Entity Framework", level: "Advanced", description: "ORM for .NET applications" },
        { name: "SQL Server", level: "Intermediate", description: "Database administration" },
        { name: "RESTful Services", level: "Advanced", description: "Web service architecture" },
        { name: "Microservices", level: "Intermediate", description: "Distributed system design" }
      ]
    },
    {
      title: "Development Tools",
      icon: <Server className="w-6 h-6 text-indigo-600" />,
      skills: [
        { name: "Visual Studio", level: "Advanced", description: "IDE for .NET development" },
        { name: "VS Code", level: "Advanced", description: "Cross-platform development" },
        { name: "Docker", level: "Intermediate", description: "Containerization" },
        { name: "Jupyter Notebooks", level: "Advanced", description: "Data science workflows" }
      ]
    },
    {
      title: "Testing & Quality",
      icon: <TestTube className="w-6 h-6 text-red-600" />,
      skills: [
        { name: "Jest", level: "Intermediate", description: "JavaScript unit testing" },
        { name: "Unit Testing", level: "Intermediate", description: "Test-driven development" },
        { name: "Code Review", level: "Advanced", description: "Quality assurance practices" },
        { name: "Debugging", level: "Advanced", description: "Problem-solving and optimization" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced": return "bg-green-100 text-green-700";
      case "Intermediate": return "bg-yellow-100 text-yellow-700";
      case "Beginner": return "bg-blue-100 text-blue-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <section id="skills" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="section-number font-sans">04.</p>
            <h2 className="section-heading font-display">Technical Competencies</h2>
            <p className="text-gray-600 font-serif text-lg mt-4">
              Technical skills and competencies developed through academic coursework, 
              professional experience, and continuous learning.
            </p>
          </div>
          
          <div ref={sectionRef} className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="skill-category opacity-0 transition-all duration-500 border border-gray-200 shadow-sm hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {category.icon}
                    <h3 className="text-lg font-display font-semibold text-gray-900">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-mono text-sm font-medium text-gray-900">
                              {skill.name}
                            </span>
                            <span className={`px-2 py-0.5 text-xs font-sans rounded-full ${getLevelColor(skill.level)}`}>
                              {skill.level}
                            </span>
                          </div>
                          <p className="text-xs font-serif text-gray-600">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    ))}
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

export default TechnicalSkills;