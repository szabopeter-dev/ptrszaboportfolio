
import React from "react";
import { RotateCw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type SkillCardBackProps = {
  skillId: string;
  category: string;
  icon: React.ReactNode;
  detailedDescription: string[];
  toggleCardFlip: (skillId: string, e: React.MouseEvent) => void;
};

const SkillCardBack = ({
  skillId,
  category,
  icon,
  detailedDescription,
  toggleCardFlip
}: SkillCardBackProps) => {
  return (
    <Card className="flip-card-back h-full bg-theme-light/30">
      <div className="h-2 bg-theme rounded-t-xl"></div>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="p-3 bg-white rounded-lg mr-3">
              {icon}
            </div>
            <h3 className="text-xl font-bold text-theme">{category} Details</h3>
          </div>
          <button 
            onClick={(e) => toggleCardFlip(skillId, e)} 
            className="h-8 w-8 rounded-full flex items-center justify-center bg-white hover:bg-theme-dark hover:text-white transition-all duration-300"
            title="Flip back"
          >
            <RotateCw className="h-4 w-4" />
          </button>
        </div>
        
        <div className="space-y-4">
          {detailedDescription.map((para, idx) => (
            <div 
              key={idx} 
              className="p-3 bg-white rounded-lg"
            >
              <p className="text-theme-dark/80 leading-relaxed text-sm">{para}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillCardBack;
