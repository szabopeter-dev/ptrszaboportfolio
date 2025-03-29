
import React, { useState } from "react";
import { cn } from "@/lib/utils";

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
    <section id="experience" className="py-20 px-4 md:px-0 bg-gradient-to-b from-navy to-navy-light">
      <div className="container mx-auto">
        <h2 className="section-heading">
          <span className="section-heading-number">02.</span> Where I've Worked
        </h2>
        
        <div className="flex flex-col md:flex-row max-w-4xl">
          {/* Tab buttons */}
          <div className="flex md:flex-col overflow-x-auto mb-6 md:mb-0 md:mr-8 border-b md:border-b-0 md:border-l border-navy-lightest">
            {jobs.map((job, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "px-4 py-3 text-left font-mono whitespace-nowrap transition-all duration-200",
                  activeTab === index 
                    ? "text-accent border-accent md:border-l-2 border-b-2 md:border-b-0 bg-navy-light/30" 
                    : "text-slate hover:text-accent hover:bg-navy-light/10"
                )}
              >
                {job.company} {index === 0 ? "" : "(Intern)"}
              </button>
            ))}
          </div>
          
          {/* Tab content */}
          <div className="py-2 md:py-0 md:pl-4">
            <h3 className="text-xl text-slate-lightest">
              <span>{jobs[activeTab].title}</span>
              <span className="text-accent"> @ {jobs[activeTab].company}</span>
            </h3>
            <p className="text-sm font-mono text-slate-light mb-4">{jobs[activeTab].period}</p>
            
            <ul className="space-y-3">
              {jobs[activeTab].description.map((item, index) => (
                <li key={index} className="flex text-slate">
                  <span className="text-accent mr-2 flex-shrink-0 mt-1.5">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
