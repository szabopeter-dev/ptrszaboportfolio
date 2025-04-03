
import React from "react";
import SkillCard from "./SkillCard";
import SkillCardBack from "./SkillCardBack";
import { Skill } from "./SkillData";

type SkillsGridProps = {
  skills: Skill[];
  flippedCard: string | null;
  toggleCardFlip: (skillId: string, e: React.MouseEvent) => void;
  skillsRef: React.RefObject<HTMLDivElement>;
};

const SkillsGrid = ({ skills, flippedCard, toggleCardFlip, skillsRef }: SkillsGridProps) => {
  return (
    <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill, index) => (
        <div key={index} className="flip-card-container relative">
          <div className={`flip-card ${flippedCard === skill.category ? 'flipped' : ''}`}>
            {/* Front of the Card */}
            <SkillCard
              skillId={skill.category}
              category={skill.category}
              icon={skill.icon}
              items={skill.items}
              isFlipped={flippedCard === skill.category}
              toggleCardFlip={toggleCardFlip}
            />
            
            {/* Back of the Card */}
            <SkillCardBack
              skillId={skill.category}
              category={skill.category}
              icon={skill.icon}
              detailedDescription={skill.detailedDescription}
              toggleCardFlip={toggleCardFlip}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;
