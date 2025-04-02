
import React, { useEffect, useRef, useState } from "react";
import { 
  Code, 
  Server, 
  Layers, 
  Database, 
  TerminalSquare, 
  BrainCircuit,
  ChevronRight
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Card,
  CardContent
} from "@/components/ui/card";

type Skill = {
  category: string;
  icon: React.ReactNode;
  items: string[];
  description: string;
};

const Skills = () => {
  // Create ref container for each skill card to handle animations
  const skillsRef = useRef<HTMLDivElement>(null);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  // Enhanced animation with sequential card reveals
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const skillCards = entry.target.querySelectorAll('.skill-card');
          skillCards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-fade-in');
            }, 150 * index); // Staggered animation timing
          });
        }
      });
    }, { threshold: 0.1 });

    const skillsContainer = skillsRef.current;
    if (skillsContainer) {
      observer.observe(skillsContainer);
      
      // Set initial state for skill cards
      const skillCards = skillsContainer.querySelectorAll('.skill-card');
      skillCards.forEach(card => {
        card.classList.add('opacity-0');
      });
    }

    return () => {
      if (skillsContainer) observer.unobserve(skillsContainer);
    };
  }, []);

  // Handle skill hover or click for mobile
  const handleSkillInteraction = (skillId: string) => {
    setActiveSkill(activeSkill === skillId ? null : skillId);
  };

  const skills: Skill[] = [
    {
      category: "Frontend Development",
      icon: <Code className="h-6 w-6 text-theme-accent" />,
      description: "Building modern, responsive web interfaces with the latest frontend technologies",
      items: [
        "JavaScript / TypeScript",
        "React.js / Next.js",
        "Angular",
        "HTML / CSS",
        "Tailwind CSS / SASS",
        "Jest"
      ]
    },
    {
      category: "Backend Development",
      icon: <Server className="h-6 w-6 text-theme-accent" />,
      description: "Creating robust server-side applications and APIs with industry standard technologies",
      items: [
        "C# / .NET Core",
        "Entity Framework Core",
        "RESTful Web APIs",
        "NUnit",
        "JWT Authentication",
        "Microservices"
      ]
    },
    {
      category: "Machine Learning",
      icon: <BrainCircuit className="h-6 w-6 text-theme-accent" />,
      description: "Developing intelligent systems using various machine learning techniques and frameworks",
      items: [
        "Python",
        "Scikit-learn",
        "TensorFlow / Keras",
        "Pandas",
        "Neural Networks",
        "LSTM / GRU"
      ]
    },
    {
      category: "Database & Data",
      icon: <Database className="h-6 w-6 text-theme-accent" />,
      description: "Working with various database technologies and data processing techniques",
      items: [
        "SQL",
        "PL/SQL",
        "Data Structures",
        "Algorithms",
        "Data Science",
        "Data Analytics"
      ]
    },
    {
      category: "DevOps & Tooling",
      icon: <TerminalSquare className="h-6 w-6 text-theme-accent" />,
      description: "Implementing CI/CD pipelines and modern development workflows",
      items: [
        "Git",
        "GitHub Actions",
        "GitLab CI",
        "CI/CD Pipelines",
        "Testing",
        "Version Control"
      ]
    },
    {
      category: "Systems & Theory",
      icon: <Layers className="h-6 w-6 text-theme-accent" />,
      description: "Understanding fundamental computer science concepts and systems programming",
      items: [
        "Operating Systems",
        "Assembly",
        "C++",
        "Linear Algebra",
        "Statistics",
        "Parallel Programming"
      ]
    }
  ];

  return (
    <section id="skills" className="section bg-theme-lightest">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">Skills & Technologies</h2>
        
        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className={`skill-card hover:-translate-y-2 transition-all duration-300 hover:shadow-xl ${
                activeSkill === skill.category ? 'ring-2 ring-theme-accent/50 shadow-lg' : ''
              }`}
              onClick={() => handleSkillInteraction(skill.category)}
            >
              <div className="h-2 bg-theme-accent rounded-t-xl"></div>
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="p-3 bg-theme-light rounded-lg mr-3 group-hover:bg-theme-accent/20 transition-colors duration-300 cursor-pointer">
                          {skill.icon}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="max-w-xs bg-theme-dark text-white p-3 text-sm">
                        <p>{skill.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <h3 className="text-xl font-bold text-theme-dark">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-theme-dark/80 transition-transform duration-300 hover:translate-x-1">
                      <div className="w-2 h-2 rounded-full bg-theme mr-3"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-4 text-xs text-theme/70 flex items-center justify-end">
                  <span>Click for details</span>
                  <ChevronRight size={14} className="ml-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
