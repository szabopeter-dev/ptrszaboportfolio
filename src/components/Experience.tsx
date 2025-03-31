
import React from "react";
import { cn } from "@/lib/utils";
import { Calendar, Briefcase, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Job = {
  company: string;
  title: string;
  period: string;
  description: string[];
};

const Experience = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  
  const jobs: Job[] = [
    {
      company: "ReComp Informatikai Zrt.",
      title: "Junior Software Developer",
      period: "September 2024 - Present",
      description: [
        "Contributing to the modernization of a legacy attorney management platform, originally built in Delphi, as part of a full-stack redevelopment effort",
        "Rebuilding the system using React, Next.js, and Tailwind CSS, with testing implemented in Jest and CI/CD pipelines managed through GitLab",
        "Actively developing and shipping production-ready features, gaining hands-on experience while delivering real business value in a professional software engineering environment"
      ]
    },
    {
      company: "ReComp Informatikai Zrt.",
      title: "Software Developer Intern",
      period: "June 2024 - September 2024",
      description: [
        "Updated legacy Delphi code to align with modern programming standards, enhancing code maintainability and performance",
        "Contributed to the development of detailed reporting solutions that supported business analytics and decision-making",
        "Collaborated closely with the development team to ensure updates and reports were functional, accurate, and aligned with company requirements"
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === jobs.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? jobs.length - 1 : prev - 1));
  };

  return (
    <section id="experience" className="section bg-theme-lightest dark:bg-navy">
      <div className="container mx-auto">
        <h2 className="section-heading text-center dark:text-white dark:after:bg-theme-accent">Professional Experience</h2>
        
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-white dark:bg-navy/50 rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 relative min-h-[400px]">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className={cn(
                    "transition-opacity duration-300 absolute inset-0 p-8",
                    currentSlide === index ? "opacity-100 z-10" : "opacity-0 -z-10"
                  )}
                >
                  <div className="flex items-center mb-4">
                    <h3 className="text-2xl font-bold text-theme-dark dark:text-white flex items-center">
                      <Briefcase size={24} className="mr-3 text-theme-accent" />
                      {job.title} <span className="ml-2 text-theme-accent">@{job.company}</span>
                    </h3>
                  </div>
                  
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-theme/10 dark:bg-theme-accent/20 text-theme dark:text-theme-accent mb-6">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm font-medium">{job.period}</span>
                  </div>
                  
                  <ul className="space-y-4">
                    {job.description.map((item, idx) => (
                      <li key={idx} className="flex">
                        <div className="mr-4 mt-1">
                          <div className="w-2 h-2 rounded-full bg-theme-accent"></div>
                        </div>
                        <p className="text-theme-dark/80 dark:text-white/80">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={prevSlide}
                  className="hover:bg-theme-accent/10 border-theme-accent/20 dark:border-theme-accent/30"
                >
                  <ArrowLeft className="h-4 w-4 text-theme-accent" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={nextSlide}
                  className="hover:bg-theme-accent/10 border-theme-accent/20 dark:border-theme-accent/30"
                >
                  <ArrowRight className="h-4 w-4 text-theme-accent" />
                </Button>
              </div>
              
              <div className="absolute bottom-4 left-4 flex space-x-2">
                {jobs.map((_, idx) => (
                  <button
                    key={idx}
                    className={cn(
                      "w-2 h-2 rounded-full transition-colors",
                      currentSlide === idx ? "bg-theme-accent" : "bg-gray-300 dark:bg-gray-600"
                    )}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
