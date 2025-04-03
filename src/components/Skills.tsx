
import React, { useEffect, useRef, useState } from "react";
import { 
  Code, 
  Server, 
  Layers, 
  Database, 
  TerminalSquare, 
  BrainCircuit,
  RotateCw
} from "lucide-react";
import {
  Card,
  CardContent
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent
} from "@/components/ui/hover-card";

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
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

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

  // Handle card flip
  const handleFlip = (skillId: string) => {
    setFlippedCard(flippedCard === skillId ? null : skillId);
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
            <div key={index} className="skill-card-wrapper h-full perspective-1000">
              <div className={`skill-card-inner relative w-full h-full transition-transform duration-700 transform-style-3d ${flippedCard === skill.category ? 'rotate-y-180' : ''}`}>
                {/* Front of card */}
                <Card className="skill-card front absolute w-full h-full backface-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
                  <div className="h-2 bg-theme-accent rounded-t-xl"></div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center">
                        <div className="p-3 bg-theme-light rounded-lg mr-3 transition-colors duration-300">
                          {skill.icon}
                        </div>
                        <h3 className="text-xl font-bold text-theme-dark">{skill.category}</h3>
                      </div>
                      
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleFlip(skill.category);
                        }}
                        className="p-2 bg-theme-light/70 rounded-full hover:bg-theme-light transition-all duration-300 group"
                        aria-label="Flip card for details"
                      >
                        <RotateCw size={16} className="text-theme group-hover:rotate-90 transition-transform duration-500" />
                      </button>
                    </div>
                    
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <div className="cursor-help mb-4">
                          <p className="text-sm text-theme-dark/80 italic">{skill.description}</p>
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80 p-0 bg-white/90 backdrop-blur-sm">
                        <div className="p-3">
                          <h4 className="font-medium text-theme">{skill.category}</h4>
                          <p className="text-xs text-theme-dark/70">{skill.description}</p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                    
                    <ul className="space-y-2">
                      {skill.items.map((item, idx) => (
                        <li key={idx} className="flex items-center text-theme-dark/80 transition-transform duration-300 hover:translate-x-1">
                          <div className="w-2 h-2 rounded-full bg-theme mr-3"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                {/* Back of card */}
                <Card className="skill-card back absolute w-full h-full backface-hidden rotate-y-180 bg-theme/5">
                  <div className="h-2 bg-theme rounded-t-xl"></div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-bold text-theme">{skill.category} Details</h3>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleFlip(skill.category);
                        }}
                        className="p-2 bg-theme-light/70 rounded-full hover:bg-theme-light transition-all duration-300 group"
                        aria-label="Flip card back"
                      >
                        <RotateCw size={16} className="text-theme group-hover:-rotate-90 transition-transform duration-500" />
                      </button>
                    </div>
                    
                    <div className="space-y-4 mt-4">
                      {skill.detailedDescription.map((para, idx) => (
                        <div key={idx} className="flex items-start mb-3">
                          <div className="w-2 h-2 rounded-full bg-theme-accent mt-2 mr-3"></div>
                          <p className="text-theme-dark/80 leading-relaxed text-sm">
                            {para}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="absolute bottom-4 right-4">
                      <div className="text-xs text-theme-accent/70 italic">Flip to return</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>
        {`
          .perspective-1000 {
            perspective: 1000px;
          }
          
          .transform-style-3d {
            transform-style: preserve-3d;
          }
          
          .backface-hidden {
            backface-visibility: hidden;
          }
          
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
          
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in {
            animation: fadeIn 0.6s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
};

export default Skills;
