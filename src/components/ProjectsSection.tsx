import React from "react";
import { Github, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  blurb: string;
  metrics: { label: string; value: string }[];
  stack: string[];
  type: string;
  href?: string;
};

const projects: Project[] = [
  {
    title: "ATM Cash Demand Forecasting",
    blurb:
      "BSc thesis & IEEE SAMI 2026 paper. 4-semester ML pipeline predicting ATM cash depletion risk on 700K+ real transactions using GRU/LSTM networks with engineered time-series features.",
    metrics: [
      { label: "MAE reduction", value: "67%" },
      { label: "R² score", value: "0.95" },
      { label: "Records", value: "700K+" },
    ],
    stack: ["Python", "TensorFlow", "GRU/LSTM", "PACF", "Time Series"],
    type: "publication",
  },
  {
    title: "Calibrated Quantile LSTM",
    blurb:
      "Research extension at Óbuda University HPC & Applied ML group. Predicts not just demand but confidence intervals — letting banks price stockout risk vs. excess cash.",
    metrics: [
      { label: "MAE vs. paper", value: "−32%" },
      { label: "Output", value: "Quantiles" },
      { label: "Calibration", value: "✓" },
    ],
    stack: ["PyTorch", "Quantile Loss", "Calibration", "HPC"],
    type: "research",
  },
  {
    title: "Alcohol Risk Prediction (BRFSS)",
    blurb:
      "High-recall LightGBM model identifying individuals at risk of problematic alcohol use from CDC behavioral survey data, with SHAP-based feature attribution.",
    metrics: [
      { label: "AUC", value: "0.939" },
      { label: "Recall", value: "91%" },
      { label: "Source", value: "CDC" },
    ],
    stack: ["LightGBM", "SHAP", "scikit-learn", "Pandas"],
    type: "independent",
    href: "https://github.com/szabopeter-dev/brfss-alcohol-risk-analysis",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-28 bg-theme-dark text-cream">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-12 border-b border-cream/15 pb-4 flex items-baseline justify-between">
          <h2 className="font-display text-4xl md:text-5xl text-cream">
            Projects<span className="text-theme-accent">.</span>
          </h2>
          <span className="font-mono text-xs text-cream/50">// selected work</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <article
              key={i}
              className="group border border-cream/15 hover:border-theme-accent rounded-sm p-6 transition-colors flex flex-col bg-theme-dark/40"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] uppercase tracking-wider text-theme-accent">
                  // {p.type}
                </span>
                {p.href && (
                  <a href={p.href} target="_blank" rel="noreferrer" className="text-cream/60 hover:text-theme-accent">
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>

              <h3 className="font-display text-2xl md:text-3xl text-cream mb-3 leading-tight">
                {p.title}
              </h3>
              <p className="font-body text-sm text-cream/75 leading-relaxed mb-5 flex-grow">
                {p.blurb}
              </p>

              <div className="grid grid-cols-3 gap-2 mb-5 pb-5 border-b border-cream/10">
                {p.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-mono text-xl md:text-2xl text-theme-accent">{m.value}</div>
                    <div className="font-mono text-[10px] text-cream/50 uppercase tracking-wider">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="font-mono text-[10px] px-2 py-0.5 bg-cream/10 text-cream/80 rounded-sm">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
