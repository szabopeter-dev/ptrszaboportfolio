
import React from "react";
import { RotateCw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type SkillCardProps = {
  skillId: string;
  category: string;
  icon: React.ReactNode;
  items: string[];
  isFlipped: boolean;
  toggleCardFlip: (skillId: string, e: React.MouseEvent) => void;
};

const SkillCard = ({
  skillId,
  category,
  icon,
  items,
  isFlipped,
  toggleCardFlip
}: SkillCardProps) => {
  return (
    <div className="flip-card-container relative">
      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
        {/* Front of the Card */}
        <Card className="flip-card-front skill-card h-full hover:shadow-xl transition-shadow">
          <div className="h-2 bg-theme-accent rounded-t-xl"></div>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="p-3 bg-theme-light rounded-lg mr-3">
                  {icon}
                </div>
                <h3 className="text-xl font-bold text-theme-dark">{category}</h3>
              </div>
              <button 
                onClick={(e) => toggleCardFlip(skillId, e)} 
                className="h-8 w-8 rounded-full flex items-center justify-center bg-theme-light hover:bg-theme hover:text-white transition-all duration-300"
                title="Flip for details"
              >
                <RotateCw className="h-4 w-4" />
              </button>
            </div>
            <ul className="space-y-2">
              {items.map((item, idx) => (
                <li key={idx} className="flex items-center text-theme-dark/80">
                  <div className="w-2 h-2 rounded-full bg-theme mr-3"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SkillCard;
