import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 bg-theme-dark border-t border-cream/10">
      <div className="container mx-auto max-w-5xl px-4 flex flex-col md:flex-row justify-between items-center gap-3 font-mono text-xs text-cream/50">
        <span>© {year} Péter Szabó</span>
        <span>~ built with care · last updated {year}</span>
      </div>
    </footer>
  );
};

export default Footer;
