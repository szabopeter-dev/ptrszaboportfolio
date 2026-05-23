import React from "react";
import { ExternalLink } from "lucide-react";

type WorkItem = {
  company: string;
  position: string;
  period: string;
  location: string;
  highlights: string[];
  tags?: string[];
};

const work: WorkItem[] = [
  {
    company: "Multiverse Computing",
    position: "Machine Learning Engineer (Contract)",
    period: "Apr 2026 — Present",
    location: "Zaragoza, Spain",
    tags: ["LLM", "Fine-tuning", "GraphRAG"],
    highlights: [
      "Fine-tuning HyperNova 60B (compressed GPT-OSS-120B) on Turkish via knowledge distillation and QA-pair generation for a major banking client; benchmarking retained capability on MMLU-Pro.",
      "Built a GraphRAG pipeline (nano-graphrag) for an energy-sector client to validate compressed-model performance — 92% local retrieval accuracy across 5 domain documents.",
      "Authored YOLOv8 model clarifications on training data, benchmarks and deployment fit for a Singapore-based defence & engineering client.",
    ],
  },
  {
    company: "Óbuda University — HPC & Applied ML Research Groups",
    position: "Research Assistant",
    period: "Feb 2026 — Apr 2026",
    location: "Budapest, Hungary",
    tags: ["Research", "Quantile LSTM"],
    highlights: [
      "Built a calibrated quantile LSTM achieving 32% MAE reduction vs. the prior publication, predicting demand with confidence intervals so banks can price the tradeoff between stockout risk and excess cash.",
    ],
  },
  {
    company: "Recomp Informatika Zrt.",
    position: "AI Engineer Intern",
    period: "Jul 2024 — Apr 2026",
    location: "Budapest, Hungary",
    tags: ["NLP", "LLM", "ROS2"],
    highlights: [
      "Modernized legacy Nettime attorney management system (Delphi → React 19 / Next.js 15) for 100+ legal professionals — time tracking, i18n, case management.",
      "Designed and deployed a spaCy NER pipeline in Nettime to flag personal data in contracts — turning hours-long reviews into minute-scale checks.",
      "Built an LLM-powered (Mistral) offline invoice extractor: 90% field accuracy on 80+ real Hungarian PDF invoices, cutting manual entry from ~25s to <3s per doc (~10× speedup).",
      "Built an LLM-assisted billboard recommender for NetMaster Media (Ollama / Llama 3.2), used by 10+ advertising clients.",
      "Deployed an LLM-to-ROS2 bridge (MCP protocol) on a Unitree Go2 quadruped for natural-language robot control and camera-based visual reasoning — demoed at BKIK.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-12 border-b border-theme-dark/15 pb-4 flex items-baseline justify-between">
          <h2 className="font-display text-4xl md:text-5xl text-theme-dark">
            Experience<span className="text-theme-accent">.</span>
          </h2>
          <span className="font-mono text-xs text-theme-dark/50">// 03 roles</span>
        </div>

        <div className="space-y-12">
          {work.map((w, i) => (
            <article key={i} className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8 group">
              <div className="font-mono text-xs text-theme-dark/60 md:pt-1">
                <div className="text-theme-accent">{w.period}</div>
                <div className="mt-1">{w.location}</div>
              </div>

              <div className="border-l-2 border-theme-dark/10 group-hover:border-theme-accent transition-colors pl-5">
                <h3 className="font-display text-2xl md:text-3xl text-theme-dark leading-tight">
                  {w.position}
                </h3>
                <p className="font-mono text-sm text-theme-dark/70 mt-1 mb-4 flex items-center gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5 text-theme-accent" /> {w.company}
                </p>

                {w.tags && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {w.tags.map((t) => (
                      <span key={t} className="font-mono text-[10px] px-2 py-0.5 bg-theme-accent/10 text-theme-accent rounded-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <ul className="space-y-2 font-body text-sm md:text-[15px] text-theme-dark/85 leading-relaxed">
                  {w.highlights.map((h, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="font-mono text-theme-accent shrink-0">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
