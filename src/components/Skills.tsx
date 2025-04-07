
import React, { useEffect, useRef, useState } from "react";
import { 
  Code, 
  Server, 
  Layers, 
  Database, 
  TerminalSquare, 
  BrainCircuit,
  ArrowUpRight,
  RotateCcw,
  Lightbulb,
  CodeSquare,
  Shield,
  BookOpen,
  Binary,
  Cloud
} from "lucide-react";
import {
  Card,
  CardContent
} from "@/components/ui/card";

type Skill = {
  category: string;
  icon: React.ReactNode;
  items: string[];
  description: string;
  detailedDescription: string[];
  additionalIcons?: React.ReactNode[];
};

const Skills = () => {
  // Create ref container for each skill card to handle animations
  const skillsRef = useRef<HTMLDivElement>(null);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

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
  const handleCardFlip = (index: number) => {
    if (flippedCards.includes(index)) {
      setFlippedCards(flippedCards.filter(cardIndex => cardIndex !== index));
    } else {
      setFlippedCards([...flippedCards, index]);
    }
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
      ],
      additionalIcons: [
        <CodeSquare key="code-square" className="h-5 w-5 text-blue-500" />,
        <Lightbulb key="lightbulb" className="h-5 w-5 text-yellow-500" />
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
      ],
      additionalIcons: [
        <Shield key="shield" className="h-5 w-5 text-green-500" />,
        <Cloud key="cloud" className="h-5 w-5 text-sky-500" />
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
      ],
      additionalIcons: [
        <Binary key="binary" className="h-5 w-5 text-purple-500" />,
        <BookOpen key="book-open" className="h-5 w-5 text-indigo-500" />
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
      ],
      additionalIcons: [
        <Database key="database-small" className="h-5 w-5 text-teal-500" />,
        <Layers key="layers-small" className="h-5 w-5 text-amber-500" />
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
      ],
      additionalIcons: [
        <TerminalSquare key="terminal-small" className="h-5 w-5 text-pink-500" />,
        <RotateCcw key="rotate-ccw" className="h-5 w-5 text-cyan-500" />
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
      ],
      additionalIcons: [
        <Code key="code-small" className="h-5 w-5 text-rose-500" />,
        <Server key="server-small" className="h-5 w-5 text-orange-500" />
      ]
    }
  ];

  return (
    <section id="skills" className="section bg-theme-lightest">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">Skills & Technologies</h2>
        
        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`skill-card perspective-1000 h-[360px] transition-all duration-500 cursor-pointer ${flippedCards.includes(index) ? 'flipped' : ''}`}
              onClick={() => handleCardFlip(index)}
            >
              <div className="flip-card-inner relative w-full h-full transition-all duration-700" style={{ 
                transform: flippedCards.includes(index) ? 'rotateY(180deg)' : 'rotateY(0deg)',
                transformStyle: 'preserve-3d'
              }}>
                {/* Front of Card */}
                <Card className="flip-card-front absolute w-full h-full backface-hidden rounded-xl overflow-hidden">
                  <div className="h-2 bg-theme-accent rounded-t-xl"></div>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-theme-light rounded-lg mr-3 transition-colors duration-300">
                        {skill.icon}
                      </div>
                      <h3 className="text-xl font-bold text-theme-dark">{skill.category}</h3>
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      {skill.items.map((item, idx) => (
                        <li key={idx} className="flex items-center text-theme-dark/80 transition-transform duration-300 hover:translate-x-1">
                          <div className="w-2 h-2 rounded-full bg-theme mr-3"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-auto pt-4 flex items-center justify-center">
                      <button className="flex items-center justify-center gap-1 py-2 px-4 rounded-lg bg-theme-light/70 text-theme-dark/70 hover:bg-theme-light text-sm transition-all">
                        <span>Click for details</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Back of Card */}
                <Card className="flip-card-back absolute w-full h-full backface-hidden rounded-xl overflow-hidden" style={{ transform: 'rotateY(180deg)' }}>
                  <div className="h-2 bg-theme rounded-t-xl"></div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-theme-dark">{skill.category}</h3>
                      <div className="p-2 rounded-full bg-theme-light/80 cursor-pointer hover:bg-theme-light">
                        <RotateCcw className="h-4 w-4 text-theme" />
                      </div>
                    </div>
                    
                    <div className="space-y-3 bg-theme-light/20 p-4 rounded-lg border border-theme-light/40 mb-4">
                      {skill.detailedDescription.map((para, idx) => (
                        <p key={idx} className="text-theme-dark/80 leading-relaxed text-sm">
                          {para}
                        </p>
                      ))}
                    </div>
                    
                    <div className="flex justify-center space-x-4 mt-4">
                      {skill.icon}
                      {skill.additionalIcons?.map((icon, idx) => (
                        <div key={idx} className="transition-transform hover:scale-110">
                          {icon}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
};

export default Skills;
