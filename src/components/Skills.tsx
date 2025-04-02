
import React, { useEffect, useRef, useState } from "react";
import { 
  Code, 
  Server, 
  Layers, 
  Database, 
  TerminalSquare, 
  BrainCircuit,
  ChevronDown,
  ChevronUp,
  X
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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

type Skill = {
  category: string;
  icon: React.ReactNode;
  items: string[];
  description: string;
  detailedDescription: string[];
};

const Skills = () => {
  // Create ref container for each skill card to handle animations
  const skillsRef = useRef<HTMLDivElement>(null);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [openStates, setOpenStates] = useState<Record<string, boolean>>({});

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

  // Toggle collapsible state for a skill
  const toggleOpenState = (skillId: string) => {
    setOpenStates(prev => ({
      ...prev,
      [skillId]: !prev[skillId]
    }));
  };

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
      ],
      detailedDescription: [
        "Developed strong frontend skills through both self-learning and university coursework.",
        "Currently applying frontend knowledge in a professional setting.",
        "Familiar with modern frameworks and libraries, emphasizing clean UI/UX."
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
      ],
      detailedDescription: [
        "Started backend development during high school at BMSZC and have been building ever since.",
        "Created full-stack applications using ASP.NET Core, Entity Framework Core, and Web APIs.",
        "Developed a layered Harry Potter-themed application with integration and unit testing using NUnit and Moq.",
        "Projects available on GitHub demonstrating clean architecture and robust test coverage."
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
      ],
      detailedDescription: [
        "Gained hands-on experience with ML during my 2-year-long thesis project: a machine learning-based ATM cash-out prediction system.",
        "Focused on time series forecasting using GRU and LSTM models.",
        "Implemented preprocessing, feature engineering, and model evaluation using Python and TensorFlow.",
        "The project involved large-scale financial datasets and real-world application scenarios."
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
      ],
      detailedDescription: [
        "Introduced to databases during high school and deepened my knowledge at university.",
        "Experienced in SQL and PL/SQL for data manipulation and querying.",
        "Passionate about database design, optimization, and Big Data concepts.",
        "Comfortable working with relational data and large datasets."
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
      ],
      detailedDescription: [
        "Actively use GitLab and GitHub for version control and CI/CD pipelines.",
        "Familiar with setting up automated testing and deployment processes.",
        "Experience working in collaborative environments with branch-based workflows.",
        "Committed to writing maintainable, production-ready code integrated with CI systems."
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
      ],
      detailedDescription: [
        "Studied and worked with various operating systems including Windows and Linux.",
        "Gained practical knowledge of low-level programming through x86 Assembly.",
        "Although initially challenging, I grew to appreciate the power and elegance of low-level systems.",
        "Enjoy diving deep into system-level concepts to understand how things work under the hood."
      ]
    }
  ];

  return (
    <section id="skills" className="section bg-theme-lightest">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">Skills & Technologies</h2>
        
        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {skills.map((skill, index) => (
            <Collapsible
              key={index}
              open={openStates[skill.category]}
              onOpenChange={() => toggleOpenState(skill.category)}
              className="w-full"
            >
              <Card 
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
                  
                  <CollapsibleTrigger asChild>
                    <div className="mt-4 text-xs text-theme/70 flex items-center justify-end cursor-pointer hover:text-theme transition-colors">
                      <span>{openStates[skill.category] ? 'Hide details' : 'Click for details'}</span>
                      {openStates[skill.category] ? 
                        <ChevronUp size={14} className="ml-1" /> : 
                        <ChevronDown size={14} className="ml-1" />
                      }
                    </div>
                  </CollapsibleTrigger>
                </CardContent>
              </Card>
              
              <CollapsibleContent>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-b-xl shadow-lg border border-theme-light/50 mt-1 transform transition-all duration-300">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-theme-dark">{skill.category} Details</h3>
                    <CollapsibleTrigger asChild>
                      <button className="p-1 hover:bg-theme-light/50 rounded-full transition-colors">
                        <X size={16} className="text-theme-dark/70" />
                      </button>
                    </CollapsibleTrigger>
                  </div>
                  <div className="space-y-3">
                    {skill.detailedDescription.map((para, idx) => (
                      <p key={idx} className="text-theme-dark/80 leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
