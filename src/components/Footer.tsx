
import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 text-center text-slate-light text-sm">
      <div className="container mx-auto">
        <p>Designed & Built with ♥ in 2023</p>
        <p className="mt-2">
          <a 
            href="https://www.linkedin.com/in/ptrszabo7/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-accent"
          >
            Péter Szabó
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
