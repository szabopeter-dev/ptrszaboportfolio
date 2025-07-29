
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
  Sparkles,
  TrendingUp
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
  gradient: string;
  iconColor: string;
};

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const skillCards = entry.target.querySelectorAll('.skill-card');
          skillCards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-fade-in', 'animate-scale-in');
              setVisibleCards(prev => [...prev, index]);
            }, 150 * index);
          });
        }
      });
    }, { threshold: 0.1 });

    const skillsContainer = skillsRef.current;
    if (skillsContainer) {
      observer.observe(skillsContainer);
      
      const skillCards = skillsContainer.querySelectorAll('.skill-card');
      skillCards.forEach(card => {
        card.classList.add('opacity-0', 'translate-y-8');
      });
    }

    return () => {
      if (skillsContainer) observer.unobserve(skillsContainer);
    };
  }, []);

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
      icon: <Code className="h-6 w-6" />,
      gradient: "from-blue-500 to-purple-600",
      iconColor: "text-blue-500",
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
      icon: <Server className="h-6 w-6" />,
      gradient: "from-green-500 to-emerald-600",
      iconColor: "text-green-500",
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
      icon: <BrainCircuit className="h-6 w-6" />,
      gradient: "from-pink-500 to-rose-600",
      iconColor: "text-pink-500",
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
      icon: <Database className="h-6 w-6" />,
      gradient: "from-orange-500 to-amber-600",
      iconColor: "text-orange-500",
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
      icon: <TerminalSquare className="h-6 w-6" />,
      gradient: "from-teal-500 to-cyan-600",
      iconColor: "text-teal-500",
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
      icon: <Layers className="h-6 w-6" />,
      gradient: "from-indigo-500 to-purple-600",
      iconColor: "text-indigo-500",
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
    <section id="skills" className="section bg-gradient-to-b from-theme-lightest to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-theme-accent mr-2 animate-pulse" />
            <span className="text-theme-accent font-semibold text-lg">Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-theme-dark mb-6">{t('skills_title')}</h2>
          <p className="text-theme-dark/70 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise areas, from frontend development to machine learning.
          </p>
        </div>
        
        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`skill-card perspective-1000 h-[400px] md:h-[500px] transition-all duration-500 cursor-pointer ${
                visibleCards.includes(index) ? 'hover:shadow-2xl hover:scale-105' : ''
              } ${flippedCards.includes(index) ? 'flipped' : ''}`}
              onClick={() => handleCardFlip(index)}
            >
              <div className="flip-card-inner relative w-full h-full transition-all duration-700" style={{ 
                transform: flippedCards.includes(index) ? 'rotateY(180deg)' : 'rotateY(0deg)',
                transformStyle: 'preserve-3d'
              }}>
                {/* Front of Card */}
                <Card className="flip-card-front absolute w-full h-full backface-hidden rounded-2xl overflow-hidden group border-0 shadow-lg">
                  <div className={`h-3 bg-gradient-to-r ${skill.gradient} rounded-t-2xl`}></div>
                  <CardContent className="p-8 flex flex-col h-full relative">
                    <div className="flex items-center mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${skill.gradient} mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                        <div className="text-white">
                          {skill.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-theme-dark mb-1">{t(skill.translationKey)}</h3>
                        <TrendingUp className="w-4 h-4 text-theme-accent" />
                      </div>
                    </div>
                    
                    <p className="text-theme-dark/70 mb-6 text-sm leading-relaxed flex-grow">{t(skill.descriptionKey)}</p>
                    
                    <div className="space-y-3 mb-6 flex-grow">
                      {skill.items.map((item, idx) => (
                        <div key={idx} className="flex items-center text-theme-dark/80 transition-all duration-300 hover:translate-x-2 hover:text-theme-dark group/item">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.gradient} mr-3 group-hover/item:scale-125 transition-transform duration-300`}></div>
                          <span className="font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-auto">
                      <div className="flex items-center justify-center py-3 px-4 rounded-xl bg-gradient-to-r from-theme-light/50 to-theme-accent/10 text-theme-dark/70 text-sm transition-all group-hover:from-theme-accent/20 group-hover:to-theme-light/50 group-hover:shadow-md">
                        <span className="font-medium">Click for details</span>
                        <ArrowUpRight className="h-4 w-4 ml-2 animate-bounce" />
                      </div>
                    </div>
                    
                    <div className="absolute top-4 right-4 rounded-full h-10 w-10 bg-white/80 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                      <div className="rotate-y-180 text-theme-accent animate-spin-slow">⟳</div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Back of Card */}
                <Card className="flip-card-back absolute w-full h-full backface-hidden rounded-2xl overflow-hidden border-0 shadow-lg" style={{ transform: 'rotateY(180deg)' }}>
                  <div className={`h-3 bg-gradient-to-r ${skill.gradient} rounded-t-2xl`}></div>
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.gradient} mr-3 shadow-lg`}>
                          <div className="text-white">
                            {skill.icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-theme-dark">{t(skill.translationKey)}</h3>
                      </div>
                      <div className="p-3 rounded-full bg-theme-light/50 cursor-pointer hover:bg-theme-light transition-colors duration-300 shadow-md">
                        <RotateCcw className="h-4 w-4 text-theme animate-pulse" />
                      </div>
                    </div>
                    
                    <div className="space-y-4 bg-gradient-to-br from-theme-light/20 to-white/50 p-6 rounded-xl border border-theme-light/40 overflow-y-auto max-h-[320px] flex-grow shadow-inner">
                      {skill.detailedDescriptionKeys.map((key, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.gradient} mt-2 flex-shrink-0`}></div>
                          <p className="text-theme-dark/80 leading-relaxed text-sm">
                            {t(key)}
                          </p>
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
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        @keyframes rotateY180 {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(180deg); }
        }
        .rotate-y-180 {
          display: inline-block;
          animation: rotateY180 2s ease-in-out infinite alternate;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
