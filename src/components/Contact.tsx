
import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-0">
      <div className="container mx-auto text-center max-w-2xl">
        <p className="text-accent font-mono mb-2">04. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-lightest mb-6">Get In Touch</h2>
        
        <p className="text-slate text-lg mb-8">
          I'm currently open to new opportunities where I can leverage my data science expertise.
          Whether you have a question, want to collaborate, or just want to say hi, 
          feel free to reach out and I'll get back to you soon!
        </p>
        
        <div className="flex justify-center mb-10">
          <a href="mailto:contact@peterszabo.ai">
            <Button className="bg-transparent text-accent border border-accent hover:bg-accent/10 px-6 py-4 text-lg">
              Say Hello
            </Button>
          </a>
        </div>
        
        <div className="flex justify-center space-x-6">
          <a 
            href="mailto:contact@peterszabo.ai"
            className="text-slate-light hover:text-accent transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/ptrszabo7/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-light hover:text-accent transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-light hover:text-accent transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
