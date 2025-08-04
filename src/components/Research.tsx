import React, { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, FileText, Calendar, TrendingUp, Award } from "lucide-react";

const Research = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          
          const items = entry.target.querySelectorAll('.research-item');
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate-fade-in');
            }, 150 * index);
          });
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      
      const items = sectionRef.current.querySelectorAll('.research-item');
      items.forEach(item => {
        item.classList.add('opacity-0');
      });
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="research" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="section-number font-sans">02.</p>
            <h2 className="section-heading font-display">Research & Publications</h2>
          </div>
          
          <div ref={sectionRef} className="space-y-8">
            {/* Main Thesis Research */}
            <Card className="research-item opacity-0 transition-all duration-500 border border-gray-200 shadow-sm hover:shadow-md">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                    <div>
                      <CardTitle className="text-xl font-display text-gray-900">BSc Thesis Research</CardTitle>
                      <p className="text-sm text-gray-500 font-sans mt-1">September 2023 – Present</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 text-xs font-sans bg-blue-100 text-blue-700 rounded-full">
                    In Progress
                  </span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <h3 className="text-lg font-serif font-semibold text-gray-900 mb-3">
                  Machine Learning-Based ATM Cash Forecasting: A 4-Semester Research Project
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-sans font-semibold text-gray-700 uppercase tracking-wider mb-2">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2 text-sm font-serif text-gray-600">
                      <li className="flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        34% reduction in Mean Absolute Error vs. baseline models
                      </li>
                      <li className="flex items-start gap-2">
                        <FileText className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        Comprehensive 80+ page thesis with statistical analysis
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        Selected for Hungarian National Student Research Conference (TDK) 2025
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-sans font-semibold text-gray-700 uppercase tracking-wider mb-2">
                      Technical Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'Statistical Analysis', 'Time Series'].map((tech) => (
                        <span key={tech} className="px-2 py-1 text-xs font-mono bg-gray-100 text-gray-700 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-serif text-gray-700 leading-relaxed">
                    <strong>Abstract:</strong> This research develops a comprehensive machine learning pipeline 
                    for predicting ATM cash demand using historical transaction data and external economic indicators. 
                    The study compares traditional statistical methods with modern ML approaches, demonstrating 
                    significant improvements in forecasting accuracy and practical applicability for financial institutions.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Publications */}
            <Card className="research-item opacity-0 transition-all duration-500 border border-gray-200 shadow-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-green-600" />
                  <div>
                    <CardTitle className="text-xl font-display text-gray-900">Upcoming Publications</CardTitle>
                    <p className="text-sm text-gray-500 font-sans mt-1">2025 – 2026</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-serif font-semibold text-gray-900 mb-1">
                      Hungarian National Student Research Conference (TDK) 2025
                    </h4>
                    <p className="text-sm text-gray-600 font-serif mb-2">
                      Presentation of thesis findings to academic panel and peer researchers
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500 font-sans">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        Spring 2025
                      </span>
                      <span>Peer-reviewed presentation</span>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-purple-600 pl-4">
                    <h4 className="font-serif font-semibold text-gray-900 mb-1">
                      IEEE SAMI 2026 Conference Submission
                    </h4>
                    <p className="text-sm text-gray-600 font-serif mb-2">
                      "Machine Learning Approaches for Financial Time Series Forecasting in Banking Applications"
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500 font-sans">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        Submission: Fall 2025
                      </span>
                      <span>International conference</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Research Interests */}
            <Card className="research-item opacity-0 transition-all duration-500 border border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-display text-gray-900">Research Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-sans font-semibold text-gray-700 uppercase tracking-wider mb-3">
                      Primary Areas
                    </h4>
                    <ul className="space-y-2 text-sm font-serif text-gray-600">
                      <li>• Machine Learning in Financial Technology</li>
                      <li>• Time Series Forecasting & Predictive Modeling</li>
                      <li>• Statistical Learning & Data Analysis</li>
                      <li>• AI-Driven Business Process Optimization</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-sans font-semibold text-gray-700 uppercase tracking-wider mb-3">
                      Future Directions
                    </h4>
                    <ul className="space-y-2 text-sm font-serif text-gray-600">
                      <li>• Deep Learning for Financial Markets</li>
                      <li>• Explainable AI in Banking Systems</li>
                      <li>• Real-time ML Pipeline Architecture</li>
                      <li>• Computational Finance & Risk Modeling</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;