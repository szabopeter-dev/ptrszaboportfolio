
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
      company: "StageZero",
      title: "Senior Data Scientist",
      period: "January 2023 - Present",
      description: [
        "Leading end-to-end machine learning projects from problem definition to model deployment",
        "Developing advanced AI solutions for text classification, recommendation systems, and predictive analytics",
        "Collaborating with cross-functional teams to integrate ML models into production systems",
        "Mentoring junior data scientists and establishing best practices for the data science team"
      ]
    },
    {
      company: "Docler",
      title: "Senior Data Scientist",
      period: "2017 - 2022",
      description: [
        "Developed and implemented machine learning models for user behavior prediction and personalization",
        "Created and maintained ETL pipelines for large-scale data processing",
        "Conducted A/B testing to evaluate model performance and business impact",
        "Collaborated with product teams to translate business requirements into data science solutions"
      ]
    },
    {
      company: "KPMG",
      title: "Data Scientist",
      period: "2016 - 2017",
      description: [
        "Built predictive models to identify patterns in financial data",
        "Implemented anomaly detection systems for fraud identification",
        "Created dashboards and visualizations to communicate insights to stakeholders",
        "Collaborated with audit teams to enhance their processes with data-driven approaches"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 md:px-0">
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
                {job.company}
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
