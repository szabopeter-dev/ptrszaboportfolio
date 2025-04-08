
import React, { useEffect, useRef, useState } from "react";
import { 
  Code, 
  Server, 
  Layers, 
  Database, 
  TerminalSquare, 
  BrainCircuit,
  ArrowUpRight,
  RotateCcw
} from "lucide-react";
import {
  Card,
  CardContent
} from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

type Skill = {
  category: string;
  translationKey: string;
  descriptionKey: string;
  icon: React.ReactNode;
  items: string[];
  detailedDescriptionKeys: string[];
};

const Skills = () => {
  // Create ref container for each skill card to handle animations
  const skillsRef = useRef<HTMLDivElement>(null);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const { t } = useLanguage();

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
      translationKey: "frontend_development",
      descriptionKey: "frontend_desc",
      icon: <Code className="h-6 w-6 text-theme-accent" />,
      items: [
        "JavaScript / TypeScript",
        "React.js / Next.js",
        "Angular",
        "HTML / CSS",
        "Tailwind CSS / SASS",
        "Jest"
      ],
      detailedDescriptionKeys: [
        "frontend_detail_1",
        "frontend_detail_2",
        "frontend_detail_3"
      ]
    },
    {
      category: "Backend Development",
      translationKey: "backend_development",
      descriptionKey: "backend_desc",
      icon: <Server className="h-6 w-6 text-theme-accent" />,
      items: [
        "C# / .NET Core",
        "Entity Framework Core",
        "RESTful Web APIs",
        "NUnit",
        "JWT Authentication",
        "Microservices"
      ],
      detailedDescriptionKeys: [
        "backend_detail_1",
        "backend_detail_2",
        "backend_detail_3",
        "backend_detail_4"
      ]
    },
    {
      category: "Machine Learning",
      translationKey: "machine_learning",
      descriptionKey: "machine_learning_desc",
      icon: <BrainCircuit className="h-6 w-6 text-theme-accent" />,
      items: [
        "Python",
        "Scikit-learn",
        "TensorFlow / Keras",
        "Pandas",
        "Neural Networks",
        "LSTM / GRU"
      ],
      detailedDescriptionKeys: [
        "ml_detail_1",
        "ml_detail_2",
        "ml_detail_3",
        "ml_detail_4"
      ]
    },
    {
      category: "Database & Data",
      translationKey: "database_data",
      descriptionKey: "database_data_desc",
      icon: <Database className="h-6 w-6 text-theme-accent" />,
      items: [
        "SQL",
        "PL/SQL",
        "Data Structures",
        "Algorithms",
        "Data Science",
        "Data Analytics"
      ],
      detailedDescriptionKeys: [
        "database_detail_1",
        "database_detail_2",
        "database_detail_3",
        "database_detail_4"
      ]
    },
    {
      category: "DevOps & Tooling",
      translationKey: "devops_tooling",
      descriptionKey: "devops_tooling_desc",
      icon: <TerminalSquare className="h-6 w-6 text-theme-accent" />,
      items: [
        "Git",
        "GitHub Actions",
        "GitLab CI",
        "CI/CD Pipelines",
        "Testing",
        "Version Control"
      ],
      detailedDescriptionKeys: [
        "devops_detail_1",
        "devops_detail_2",
        "devops_detail_3",
        "devops_detail_4"
      ]
    },
    {
      category: "Systems & Theory",
      translationKey: "systems_theory",
      descriptionKey: "systems_theory_desc",
      icon: <Layers className="h-6 w-6 text-theme-accent" />,
      items: [
        "Operating Systems",
        "Assembly",
        "C++",
        "Linear Algebra",
        "Statistics",
        "Parallel Programming"
      ],
      detailedDescriptionKeys: [
        "systems_detail_1",
        "systems_detail_2",
        "systems_detail_3",
        "systems_detail_4"
      ]
    }
  ];

  return (
    <section id="skills" className="section bg-theme-lightest">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">{t('skills_title')}</h2>
        
        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`skill-card perspective-1000 h-[460px] transition-all duration-500 cursor-pointer hover:shadow-xl hover:scale-105 ${flippedCards.includes(index) ? 'flipped' : ''}`}
              onClick={() => handleCardFlip(index)}
            >
              <div className="flip-card-inner relative w-full h-full transition-all duration-700" style={{ 
                transform: flippedCards.includes(index) ? 'rotateY(180deg)' : 'rotateY(0deg)',
                transformStyle: 'preserve-3d'
              }}>
                {/* Front of Card */}
                <Card className="flip-card-front absolute w-full h-full backface-hidden rounded-xl overflow-hidden group">
                  <div className="h-2 bg-theme-accent rounded-t-xl"></div>
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-theme-light rounded-lg mr-3 transition-colors duration-300">
                        {skill.icon}
                      </div>
                      <h3 className="text-xl font-bold text-theme-dark">{t(skill.translationKey)}</h3>
                    </div>
                    
                    <p className="text-theme-dark/80 mb-4 text-sm line-clamp-2 flex-grow">{t(skill.descriptionKey)}</p>
                    
                    <ul className="space-y-2 mb-4 flex-grow">
                      {skill.items.map((item, idx) => (
                        <li key={idx} className="flex items-center text-theme-dark/80 transition-transform duration-300 hover:translate-x-1">
                          <div className="w-2 h-2 rounded-full bg-theme mr-3"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center mt-auto">
                      <div className="flex items-center gap-1 py-2 px-4 rounded-lg bg-theme/10 text-theme-dark/70 text-sm transition-all group-hover:bg-theme/20 group-hover:shadow-md">
                        <span>{t('click_for_details')}</span>
                        <ArrowUpRight className="h-4 w-4 animate-bounce" />
                      </div>
                    </div>
                    
                    {/* Card flip indicator */}
                    <div className="absolute top-2 right-2 rounded-full h-8 w-8 bg-theme-light/80 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                      <div className="rotate-y-180 text-theme-accent/70">⟳</div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Back of Card */}
                <Card className="flip-card-back absolute w-full h-full backface-hidden rounded-xl overflow-hidden" style={{ transform: 'rotateY(180deg)' }}>
                  <div className="h-2 bg-theme rounded-t-xl"></div>
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-theme-dark">{t(skill.translationKey)}</h3>
                      <div className="p-2 rounded-full bg-theme-light/80 cursor-pointer hover:bg-theme-light flex items-center justify-center animate-pulse">
                        <RotateCcw className="h-4 w-4 text-theme" />
                      </div>
                    </div>
                    
                    <div className="space-y-3 bg-theme-light/20 p-4 rounded-lg border border-theme-light/40 mb-4 overflow-y-auto max-h-[280px] flex-grow">
                      {skill.detailedDescriptionKeys.map((key, idx) => (
                        <p key={idx} className="text-theme-dark/80 leading-relaxed text-sm">
                          {t(key)}
                        </p>
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
        @keyframes rotateY180 {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(180deg); }
        }
        .rotate-y-180 {
          display: inline-block;
          animation: rotateY180 1.5s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
};

export default Skills;
