import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Calendar, MapPin, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type WorkItem = {
  company: string;
  position: string;
  period: string;
  location: string;
  type: string;
  responsibilities: string[];
};

const WorkExperience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll('.work-item');
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate-fade-in');
            }, 150 * index);
          });
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      
      const items = sectionRef.current.querySelectorAll('.work-item');
      items.forEach(item => {
        item.classList.add('opacity-0');
      });
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const workExperience: WorkItem[] = [
    {
      company: "Recomp Informatikai Zrt.",
      position: "Software Developer Intern",
      period: "July 2024 - Present",
      location: "Budapest, Hungary",
      type: "Internship",
      responsibilities: [
        "Modernizing attorney management system serving 100+ legal professionals (Hogan Lovells, Oppenheim) - migrated Delphi desktop application to React/Next.js with GitLab CI/CD pipeline",
        "Automated sensitive data redaction in legal documents by developing an NLP pipeline using spaCy and regex",
        "Built an offline LLM-based billboard recommender with Ollama models for secure, AI-driven campaign planning",
        "Built Gen AI agent using LLMs for Unitree Go2 robot integration with real-time conversation capabilities",
        "Updated legacy Delphi code to align with modern programming standards enhancing code maintainability"
      ]
    }
  ];

  return (
    <section id="experience" className="section bg-theme-lightest py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading text-center text-2xl md:text-4xl font-bold text-theme-dark mb-4">
          {t('workExperience')}
        </h2>
        <p className="text-center text-theme-dark/70 mb-12 md:mb-16 max-w-2xl mx-auto text-base md:text-lg">
          🚀 Building the future with AI & modern tech
        </p>
        
        <div ref={sectionRef} className="max-w-4xl mx-auto">
          {workExperience.map((work, index) => (
            <Card 
              key={index}
              className="work-item opacity-0 transition-all duration-500 mb-6 md:mb-8 rounded-xl border-theme-light/50 bg-white shadow-lg hover:shadow-xl"
            >
              <CardContent className="p-4 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 md:mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 md:gap-3 mb-2">
                      <Building2 className="w-5 h-5 md:w-6 md:h-6 text-theme-accent" />
                      <h3 className="text-lg md:text-xl font-bold text-theme-dark">{work.company}</h3>
                    </div>
                    <h4 className="text-base md:text-lg font-semibold text-theme mb-1">{work.position}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm md:text-base text-theme-dark/70">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-theme-accent" />
                        <span>{work.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-theme-accent" />
                        <span>{work.location}</span>
                      </div>
                    </div>
                  </div>
                  <span className="inline-block mt-2 md:mt-0 text-xs font-semibold px-3 py-1 rounded-full bg-theme-accent/10 text-theme-accent border border-theme-accent/20">
                    {work.type}
                  </span>
                </div>

                <div className="space-y-2 md:space-y-3">
                  {work.responsibilities.map((responsibility, idx) => (
                    <div key={idx} className="flex items-start gap-2 md:gap-3">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-theme-accent mt-0.5 flex-shrink-0" />
                      <p className="text-sm md:text-base text-theme-dark/80 leading-relaxed">{responsibility}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;