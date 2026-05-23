import React from "react";

const groups = [
  {
    label: "ml_and_ai",
    title: "ML & AI",
    items: [
      "Deep Learning (LSTM/GRU, CNNs)",
      "TensorFlow", "Keras", "PyTorch",
      "scikit-learn", "LightGBM", "Random Forest",
      "NLP", "Time-Series Forecasting",
      "LLM", "RAG", "Hugging Face Transformers",
      "Fine-tuning", "QA-pair Generation",
      "vLLM", "Chroma (vector DB)",
    ],
  },
  {
    label: "programming_web_tools",
    title: "Programming, Web & Tools",
    items: [
      "Python", "TypeScript", "JavaScript", "C#", "C++",
      "SQL", "PL/SQL",
      "React", "Next.js", "Redux",
      "Pandas", "NumPy", "ETL Pipelines",
      "Git", "ROS2", "YOLO", "Docker",
      "AWS (S3, EC2)", "LaTeX", "MCP",
    ],
  },
  {
    label: "languages",
    title: "Languages",
    items: ["Hungarian — Native", "English — C1 (IELTS 7.5)", "Spanish — Beginner"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-12 border-b border-theme-dark/15 pb-4 flex items-baseline justify-between">
          <h2 className="font-display text-4xl md:text-5xl text-theme-dark">
            Skills<span className="text-theme-accent">.</span>
          </h2>
          <span className="font-mono text-xs text-theme-dark/50">// stack</span>
        </div>

        <div className="space-y-10">
          {groups.map((g) => (
            <div key={g.label} className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8">
              <div className="font-mono text-xs text-theme-accent md:pt-1">
                // {g.label}
              </div>
              <div className="border-l-2 border-theme-dark/10 pl-5">
                <h3 className="font-display text-2xl text-theme-dark mb-4">{g.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="font-mono text-xs px-3 py-1.5 border border-theme-dark/20 text-theme-dark/80 hover:border-theme-accent hover:text-theme-accent transition-colors rounded-sm"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
