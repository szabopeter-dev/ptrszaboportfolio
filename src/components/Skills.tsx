
import React, { useEffect, useRef, useState } from "react";
import { skillsData } from "./skills/SkillData";
import SkillsGrid from "./skills/SkillsGrid";
import FlipCardStyles from "./skills/FlipCardStyles";

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);
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
          
          // Animate timeline line
          if (timelineLineRef.current) {
            timelineLineRef.current.classList.add('timeline-animate');
          }
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

  // Toggle card flip
  const toggleCardFlip = (skillId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFlippedCard(flippedCard === skillId ? null : skillId);
  };

  return (
    <section id="skills" className="section bg-theme-lightest relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading text-center">Skills & Technologies</h2>
        
        <div className="relative max-w-6xl mx-auto mt-16">
          {/* Timeline center line */}
          <div 
            ref={timelineLineRef}
            className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-theme-accent to-transparent md:left-1/2 md:-ml-0.5 opacity-0 transition-all duration-700"
            style={{ height: '0%' }}
          ></div>

          <SkillsGrid 
            skills={skillsData} 
            flippedCard={flippedCard} 
            toggleCardFlip={toggleCardFlip}
            skillsRef={skillsRef}
          />
        </div>
      </div>
      
      <FlipCardStyles />
    </section>
  );
};

export default Skills;
