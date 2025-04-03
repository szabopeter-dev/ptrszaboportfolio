
import React from "react";
import { 
  Code, 
  Server, 
  Layers, 
  Database, 
  TerminalSquare, 
  BrainCircuit
} from "lucide-react";

export type Skill = {
  category: string;
  icon: React.ReactNode;
  items: string[];
  description: string;
  detailedDescription: string[];
};

export const skillsData: Skill[] = [
  {
    category: "Frontend Development",
    icon: <Code className="h-6 w-6 text-theme-accent" />,
    description: "Building modern, responsive web interfaces with the latest frontend technologies",
    items: [
      "JavaScript / TypeScript",
      "React.js / Next.js",
      "Angular",
      "HTML / CSS",
      "Tailwind CSS / SASS",
      "Jest"
    ],
    detailedDescription: [
      "Developed strong frontend skills through both self-learning and university coursework.",
      "Currently applying frontend knowledge in a professional setting.",
      "Familiar with modern frameworks and libraries, emphasizing clean UI/UX."
    ]
  },
  {
    category: "Backend Development",
    icon: <Server className="h-6 w-6 text-theme-accent" />,
    description: "Creating robust server-side applications and APIs with industry standard technologies",
    items: [
      "C# / .NET Core",
      "Entity Framework Core",
      "RESTful Web APIs",
      "NUnit",
      "JWT Authentication",
      "Microservices"
    ],
    detailedDescription: [
      "Started backend development during high school at BMSZC and have been building ever since.",
      "Created full-stack applications using ASP.NET Core, Entity Framework Core, and Web APIs.",
      "Developed a layered Harry Potter-themed application with integration and unit testing using NUnit and Moq.",
      "Projects available on GitHub demonstrating clean architecture and robust test coverage."
    ]
  },
  {
    category: "Machine Learning",
    icon: <BrainCircuit className="h-6 w-6 text-theme-accent" />,
    description: "Developing intelligent systems using various machine learning techniques and frameworks",
    items: [
      "Python",
      "Scikit-learn",
      "TensorFlow / Keras",
      "Pandas",
      "Neural Networks",
      "LSTM / GRU"
    ],
    detailedDescription: [
      "Gained hands-on experience with ML during my 2-year-long thesis project: a machine learning-based ATM cash-out prediction system.",
      "Focused on time series forecasting using GRU and LSTM models.",
      "Implemented preprocessing, feature engineering, and model evaluation using Python and TensorFlow.",
      "The project involved large-scale financial datasets and real-world application scenarios."
    ]
  },
  {
    category: "Database & Data",
    icon: <Database className="h-6 w-6 text-theme-accent" />,
    description: "Working with various database technologies and data processing techniques",
    items: [
      "SQL",
      "PL/SQL",
      "Data Structures",
      "Algorithms",
      "Data Science",
      "Data Analytics"
    ],
    detailedDescription: [
      "Introduced to databases during high school and deepened my knowledge at university.",
      "Experienced in SQL and PL/SQL for data manipulation and querying.",
      "Passionate about database design, optimization, and Big Data concepts.",
      "Comfortable working with relational data and large datasets."
    ]
  },
  {
    category: "DevOps & Tooling",
    icon: <TerminalSquare className="h-6 w-6 text-theme-accent" />,
    description: "Implementing CI/CD pipelines and modern development workflows",
    items: [
      "Git",
      "GitHub Actions",
      "GitLab CI",
      "CI/CD Pipelines",
      "Testing",
      "Version Control"
    ],
    detailedDescription: [
      "Actively use GitLab and GitHub for version control and CI/CD pipelines.",
      "Familiar with setting up automated testing and deployment processes.",
      "Experience working in collaborative environments with branch-based workflows.",
      "Committed to writing maintainable, production-ready code integrated with CI systems."
    ]
  },
  {
    category: "Systems & Theory",
    icon: <Layers className="h-6 w-6 text-theme-accent" />,
    description: "Understanding fundamental computer science concepts and systems programming",
    items: [
      "Operating Systems",
      "Assembly",
      "C++",
      "Linear Algebra",
      "Statistics",
      "Parallel Programming"
    ],
    detailedDescription: [
      "Studied and worked with various operating systems including Windows and Linux.",
      "Gained practical knowledge of low-level programming through x86 Assembly.",
      "Although initially challenging, I grew to appreciate the power and elegance of low-level systems.",
      "Enjoy diving deep into system-level concepts to understand how things work under the hood."
    ]
  }
];
