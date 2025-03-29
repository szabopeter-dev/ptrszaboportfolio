
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Calendar, Briefcase } from "lucide-react";

type Job = {
  company: string;
  title: string;
  period: string;
  description: string[];
};

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  
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

  return (
    <section id="experience" className="section bg-theme-lightest">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">Professional Experience</h2>
        
        <div className="max-w-4xl mx-auto mt-16">
          <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Tab buttons */}
            <div className="md:w-1/3 bg-theme-light">
              {jobs.map((job, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={cn(
                    "w-full px-6 py-5 text-left font-medium transition-all duration-200 flex items-center",
                    activeTab === index 
                      ? "bg-theme text-white" 
                      : "text-theme-dark hover:bg-theme-light/80"
                  )}
                >
                  <Briefcase className={cn("mr-3", activeTab === index ? "text-white" : "text-theme")} size={20} />
                  <div>
                    <span className="block">{job.company}</span>
                    <span className="text-sm opacity-80">{index === 0 ? "Junior Dev" : "Intern"}</span>
                  </div>
                </button>
              ))}
            </div>
            
            {/* Tab content */}
            <div className="md:w-2/3 p-8">
              <div className="flex items-center mb-4">
                <h3 className="text-2xl font-bold text-theme-dark">
                  {jobs[activeTab].title}
                </h3>
              </div>
              
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-theme/10 text-theme mb-6">
                <Calendar size={16} className="mr-2" />
                <span className="text-sm font-medium">{jobs[activeTab].period}</span>
              </div>
              
              <ul className="space-y-4">
                {jobs[activeTab].description.map((item, index) => (
                  <li key={index} className="flex">
                    <div className="mr-4 mt-1">
                      <div className="w-2 h-2 rounded-full bg-theme-accent"></div>
                    </div>
                    <p className="text-theme-dark/80">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
