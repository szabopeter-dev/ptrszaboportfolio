
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <h2 className="section-heading">
          <span className="section-heading-number">01.</span> About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 text-slate">
            <p className="mb-4 text-lg">
              Hello! My name is Peter, and I enjoy using data and machine learning to solve challenging problems.
              My journey in data science started during my studies in Computer Science at the 
              Eötvös Loránd University, where I discovered my passion for applying mathematics and algorithms to extract 
              meaningful insights from complex datasets.
            </p>
            
            <p className="mb-4 text-lg">
              At StageZero Technologies, I work with cross-functional teams to develop and deploy 
              machine learning models that drive business value. My expertise spans from traditional statistical 
              methods to deep learning techniques, with a focus on creating scalable and production-ready solutions.
            </p>
            
            <p className="mb-8 text-lg">
              I've had the privilege of working with diverse industries, helping companies leverage their data 
              to make better decisions, automate processes, and create predictive models. I'm particularly 
              interested in interpretable AI and ensuring that machine learning systems are both powerful and transparent.
            </p>
            
            <p className="text-lg">
              Some technologies I've been working with recently:
            </p>
            
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4 text-slate-light">
              <li className="flex items-center">
                <span className="text-accent mr-2">▹</span> Python
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">▹</span> TensorFlow
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">▹</span> PyTorch
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">▹</span> scikit-learn
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">▹</span> pandas
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">▹</span> SQL
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">▹</span> Cloud platforms (AWS, Azure)
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">▹</span> Docker
              </li>
            </ul>
          </div>
          
          <div className="group relative max-w-xs mx-auto">
            <div className="relative rounded-md overflow-hidden">
              <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Peter Szabo" 
                className="grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="absolute -inset-0.5 rounded-lg bg-accent/30 blur opacity-50 group-hover:opacity-100 transition duration-300 -z-10 translate-x-2 translate-y-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
