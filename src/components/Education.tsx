import React from "react";
import { FileText } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 md:py-28 bg-cream border-t border-theme-dark/10">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-12 border-b border-theme-dark/15 pb-4 flex items-baseline justify-between">
          <h2 className="font-display text-4xl md:text-5xl text-theme-dark">
            Education<span className="text-theme-accent">.</span>
          </h2>
          <span className="font-mono text-xs text-theme-dark/50">// academic</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8 mb-12">
          <div className="font-mono text-xs text-theme-dark/60 md:pt-1">
            <div className="text-theme-accent">Sept 2022 — Feb 2026</div>
            <div className="mt-1">Budapest, Hungary</div>
          </div>
          <div className="border-l-2 border-theme-dark/10 pl-5">
            <h3 className="font-display text-2xl md:text-3xl text-theme-dark leading-tight">
              BSc, Computer Science Engineering
            </h3>
            <p className="font-mono text-sm text-theme-dark/70 mt-1 mb-4">
              Óbuda University · Software Design & Development
            </p>
            <ul className="space-y-2 font-body text-sm md:text-[15px] text-theme-dark/85">
              <li className="flex gap-3"><span className="font-mono text-theme-accent">▸</span><span>GPA: <span className="font-mono">4.2 / 5</span> · State Examination: <span className="font-mono">5.0 / 5.0</span></span></li>
              <li className="flex gap-3"><span className="font-mono text-theme-accent">▸</span><span>State-Funded (Hungarian Government Scholarship)</span></li>
              <li className="flex gap-3"><span className="font-mono text-theme-accent">▸</span><span>Ranked <span className="text-theme-accent font-semibold">Top 5 of 300 students</span> (2024) — Performance Scholarship</span></li>
            </ul>
          </div>
        </div>

        {/* Publication block */}
        <div className="mb-4 border-b border-theme-dark/15 pb-4">
          <h3 className="font-display text-2xl md:text-3xl text-theme-dark">
            Publication<span className="text-theme-accent">.</span>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8">
          <div className="font-mono text-xs text-theme-dark/60 md:pt-1">
            <div className="text-theme-accent">2026</div>
            <div className="mt-1">IEEE SAMI</div>
          </div>
          <div className="border-l-2 border-theme-accent pl-5 bg-theme-accent/5 py-4 pr-4 rounded-sm">
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-theme-accent mt-1 shrink-0" />
              <div>
                <p className="font-display italic text-lg md:text-xl text-theme-dark leading-snug">
                  "Predicting ATM Cash Demand Using Machine Learning."
                </p>
                <p className="font-mono text-xs text-theme-dark/70 mt-2">
                  P. Szabó, B. Gáspár — IEEE 24th World Symposium on Applied Machine Intelligence
                  and Informatics (SAMI 2026), Stará Lesná, Slovakia. pp. 411–416.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
