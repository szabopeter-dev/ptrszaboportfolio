
import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Smartphone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section bg-gradient-main text-white">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-theme-accent font-medium mb-4">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Let's Connect</h2>
          
          <p className="text-white/80 text-lg mb-12">
            I'm currently focusing on my Software Engineering studies while working as a Junior Software Developer. 
            Whether you have a question, want to collaborate on a project, or just want to say hi, 
            feel free to reach out and I'll get back to you soon!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <a href="mailto:szabo.ptr7@gmail.com" className="card flex items-center p-6 hover:bg-theme-light/5">
              <div className="p-3 rounded-full bg-theme-accent/20 mr-4">
                <Mail className="h-6 w-6 text-theme-accent" />
              </div>
              <div className="text-left">
                <h3 className="font-medium text-white">Email</h3>
                <p className="text-white/80">szabo.ptr7@gmail.com</p>
              </div>
            </a>
            
            <a href="tel:+36306641452" className="card flex items-center p-6 hover:bg-theme-light/5">
              <div className="p-3 rounded-full bg-theme-accent/20 mr-4">
                <Smartphone className="h-6 w-6 text-theme-accent" />
              </div>
              <div className="text-left">
                <h3 className="font-medium text-white">Phone</h3>
                <p className="text-white/80">06 30 664 1452</p>
              </div>
            </a>
            
            <a href="https://www.linkedin.com/in/ptrszabo7/" target="_blank" rel="noopener noreferrer" className="card flex items-center p-6 hover:bg-theme-light/5">
              <div className="p-3 rounded-full bg-theme-accent/20 mr-4">
                <Linkedin className="h-6 w-6 text-theme-accent" />
              </div>
              <div className="text-left">
                <h3 className="font-medium text-white">LinkedIn</h3>
                <p className="text-white/80">linkedin.com/in/ptrszabo7</p>
              </div>
            </a>
            
            <a href="https://github.com/szabopeter-dev" target="_blank" rel="noopener noreferrer" className="card flex items-center p-6 hover:bg-theme-light/5">
              <div className="p-3 rounded-full bg-theme-accent/20 mr-4">
                <Github className="h-6 w-6 text-theme-accent" />
              </div>
              <div className="text-left">
                <h3 className="font-medium text-white">GitHub</h3>
                <p className="text-white/80">github.com/szabopeter-dev</p>
              </div>
            </a>
          </div>
          
          <div className="flex justify-center">
            <a href="mailto:szabo.ptr7@gmail.com">
              <Button className="btn-accent text-lg px-8 py-6">
                Say Hello
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
