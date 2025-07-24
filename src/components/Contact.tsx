
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Smartphone, Send, Download, MapPin, Clock, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "szabo.ptr7@gmail.com",
      href: "mailto:szabo.ptr7@gmail.com",
      gradient: "from-blue-500 to-purple-600",
      description: "Primary contact method"
    },
    {
      icon: Smartphone,
      title: "Phone",
      value: "+36 30 664 1452",
      href: "tel:+36306641452",
      gradient: "from-green-500 to-emerald-600",
      description: "Available 9 AM - 6 PM CET"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "ptrszabo7",
      href: "https://www.linkedin.com/in/ptrszabo7/",
      gradient: "from-blue-600 to-blue-800",
      description: "Professional networking"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "szabopeter-dev",
      href: "https://github.com/szabopeter-dev",
      gradient: "from-gray-700 to-gray-900",
      description: "Code repositories & projects"
    }
  ];

  const additionalInfo = [
    {
      icon: MapPin,
      title: "Location",
      value: "San Sebastián, Spain & Budapest, Hungary",
      description: "Available for remote work worldwide"
    },
    {
      icon: Clock,
      title: "Availability",
      value: "Open to opportunities",
      description: "Internships, master's programs, collaborations"
    },
    {
      icon: Globe,
      title: "Languages",
      value: "English, Hungarian, Spanish",
      description: "Fluent in multiple languages"
    }
  ];
  
  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-theme-dark via-navy to-black/90 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-theme-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-theme/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Send className="w-6 h-6 text-theme-accent mr-2 animate-pulse" />
              <span className="text-theme-accent font-semibold text-lg">Ready to Connect</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Let's Work Together
            </h2>
            <p className="text-white/80 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Open to internship opportunities, master's programs, and collaborative projects. 
              Ready to relocate for the right opportunity and contribute to innovative tech solutions.
            </p>
          </div>
          
          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <a 
                key={index}
                href={method.href} 
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group h-full"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-4 md:p-6 flex flex-col items-center transition-all duration-500 transform h-full min-h-[160px] md:min-h-[200px] justify-center relative overflow-hidden ${
                  hoveredCard === index ? 'hover:-translate-y-3 hover:bg-white/20 hover:shadow-2xl' : ''
                }`}>
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${method.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className={`p-5 rounded-2xl bg-gradient-to-r ${method.gradient} mb-4 group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-110`}>
                    <method.icon className="h-7 w-7 text-white" />
                  </div>
                  
                  <h3 className="font-bold text-white text-base md:text-lg mb-2">{method.title}</h3>
                  <p className="text-theme-accent font-medium text-xs md:text-sm mb-2 text-center">{method.value}</p>
                  <p className="text-white/60 text-xs text-center leading-tight">{method.description}</p>
                  
                  {/* Hover effect indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-theme-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </a>
            ))}
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {additionalInfo.map((info, index) => (
              <div key={index} className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="p-3 rounded-lg bg-theme-accent/20 mb-3 inline-block">
                  <info.icon className="h-5 w-5 text-theme-accent" />
                </div>
                <h4 className="font-semibold text-white mb-2">{info.title}</h4>
                <p className="text-theme-accent text-sm mb-1">{info.value}</p>
                <p className="text-white/60 text-xs">{info.description}</p>
              </div>
            ))}
          </div>
          
          {/* Action buttons */}
          <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
            <a href="mailto:szabo.ptr7@gmail.com">
              <Button className="bg-gradient-to-r from-theme-accent to-theme-accent/80 hover:from-theme-accent/90 hover:to-theme-accent/70 text-white px-6 md:px-10 py-4 md:py-6 text-base md:text-lg rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-theme-accent/25 border-0">
                <Send className="w-5 h-5 mr-2" />
                Say Hello
              </Button>
            </a>
            <a href="/szabo_peter_cv_en.pdf" download="szabo_peter_cv_en.pdf" className="inline-block">
              <Button className="bg-gradient-to-r from-theme to-theme/80 hover:from-theme/90 hover:to-theme/70 text-white px-6 md:px-10 py-4 md:py-6 text-base md:text-lg rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-white/20 hover:border-white/40">
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </a>
          </div>
          
          {/* Footer note */}
          <div className="text-center mt-12">
            <p className="text-white/60 text-sm">
              Looking forward to discussing opportunities in software engineering, machine learning, and full-stack development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
