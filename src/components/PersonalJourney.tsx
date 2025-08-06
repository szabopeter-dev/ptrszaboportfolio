import React from "react";
import { MapPin, Heart, Coffee, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PersonalJourney = () => {
  const { t } = useLanguage();

  const journeySteps = [
    {
      icon: BookOpen,
      title: "The Beginning",
      subtitle: "Where it all started",
      description: "Growing up in Hungary, I discovered my passion for technology during university. What started as curiosity about how things work became a deep love for creating solutions that help people.",
      year: "2019",
      color: "from-theme-primary/20 to-theme-accent/20"
    },
    {
      icon: Coffee,
      title: "Professional Growth",
      subtitle: "Learning through doing",
      description: "Joining Recomp Informatikai Zrt. opened my eyes to real-world challenges. Every project taught me something new, from React applications to AI chatbots that actually make a difference.",
      year: "2023",
      color: "from-theme-accent/20 to-theme-secondary/20"
    },
    {
      icon: Heart,
      title: "Research & Innovation",
      subtitle: "Pushing boundaries",
      description: "Diving into machine learning research, I found my calling in making AI more accessible and accurate. The 34% improvement in my thesis wasn't just a number—it was proof that persistence pays off.",
      year: "2024",
      color: "from-theme-secondary/20 to-theme-primary/20"
    },
    {
      icon: MapPin,
      title: "Looking Forward",
      subtitle: "The journey continues",
      description: "Currently based between San Sebastián and Budapest, I'm excited about the future. Each line of code, each algorithm, each problem solved brings me closer to my goal of creating meaningful technology.",
      year: "Now",
      color: "from-theme-primary/20 to-theme-accent/20"
    }
  ];

  return (
    <section id="journey" className="py-20 md:py-28 bg-theme-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-theme-primary/10 rounded-full -translate-x-16 -translate-y-16 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-theme-accent/10 rounded-full translate-x-24 translate-y-24 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-theme-text-primary mb-6">
              My Personal Journey
            </h2>
            <p className="text-lg md:text-xl text-theme-text-secondary font-serif italic max-w-2xl mx-auto">
              "Every line of code tells a story. Here's mine—a tale of curiosity, growth, and the endless pursuit of meaningful technology."
            </p>
          </div>

          <div className="space-y-16 md:space-y-20">
            {journeySteps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center group`}
              >
                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-full bg-gradient-to-br ${step.color} border border-white/20 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-6 h-6 text-theme-text-primary" />
                    </div>
                    <span className="text-sm font-medium text-theme-text-secondary bg-theme-secondary/50 px-3 py-1 rounded-full">
                      {step.year}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-display font-semibold text-theme-text-primary">
                    {step.title}
                  </h3>
                  
                  <p className="text-theme-primary font-medium text-lg">
                    {step.subtitle}
                  </p>
                  
                  <p className="text-theme-text-secondary leading-relaxed text-base md:text-lg font-serif">
                    {step.description}
                  </p>
                </div>

                {/* Visual element */}
                <div className="flex-shrink-0">
                  <div className={`w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br ${step.color} border-4 border-white/30 shadow-xl relative overflow-hidden group-hover:scale-105 transition-all duration-500`}>
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <step.icon className="w-16 h-16 md:w-20 md:h-20 text-theme-text-primary mx-auto mb-2 opacity-80" />
                        <div className="text-2xl md:text-3xl font-display font-bold text-theme-text-primary">
                          {step.year}
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating particles */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-theme-primary rounded-full animate-bounce"></div>
                    <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-theme-accent rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute top-1/2 left-4 w-1 h-1 bg-theme-primary rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalJourney;