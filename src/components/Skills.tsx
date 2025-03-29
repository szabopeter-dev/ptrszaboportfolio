
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BrainCircuit, 
  Database, 
  LineChart, 
  Code, 
  Cloud, 
  Users
} from "lucide-react";

type Skill = {
  category: string;
  icon: React.ReactNode;
  items: string[];
};

const Skills = () => {
  const skills: Skill[] = [
    {
      category: "Machine Learning",
      icon: <BrainCircuit className="h-6 w-6 text-accent" />,
      items: [
        "Supervised Learning",
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Time Series Analysis",
        "Reinforcement Learning"
      ]
    },
    {
      category: "Data Engineering",
      icon: <Database className="h-6 w-6 text-accent" />,
      items: [
        "SQL",
        "NoSQL",
        "ETL Pipeline Development",
        "Data Warehousing",
        "Big Data Processing",
        "Data Architecture"
      ]
    },
    {
      category: "Analytics",
      icon: <LineChart className="h-6 w-6 text-accent" />,
      items: [
        "Statistical Analysis",
        "A/B Testing",
        "Business Intelligence",
        "Dashboarding",
        "KPI Development",
        "Data Visualization"
      ]
    },
    {
      category: "Programming",
      icon: <Code className="h-6 w-6 text-accent" />,
      items: [
        "Python",
        "R",
        "JavaScript",
        "Shell Scripting",
        "Git",
        "CI/CD"
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6 text-accent" />,
      items: [
        "AWS",
        "Azure",
        "Docker",
        "Kubernetes",
        "MLOps",
        "Model Deployment"
      ]
    },
    {
      category: "Soft Skills",
      icon: <Users className="h-6 w-6 text-accent" />,
      items: [
        "Project Management",
        "Team Leadership",
        "Communication",
        "Problem-solving",
        "Stakeholder Management",
        "Technical Writing"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 md:px-0 bg-navy-light">
      <div className="container mx-auto">
        <h2 className="section-heading">
          <span className="section-heading-number">03.</span> Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="bg-navy border border-navy-lightest hover:border-accent/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {skill.icon}
                  <h3 className="text-xl font-semibold ml-2 text-slate-lightest">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-slate">
                      <span className="text-accent mr-2">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
