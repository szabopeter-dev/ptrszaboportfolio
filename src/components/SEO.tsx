
import { useEffect } from 'react';
import { useLanguage } from "@/contexts/LanguageContext";

const SEO = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    // Dynamic document title based on language
    document.title = language === 'en' 
      ? "Péter Szabó | Software Engineer" 
      : "Szabó Péter | Szoftverfejlesztő";
    
    // Meta tags management
    const metaTags = {
      keywords: {
        en: "software engineer, frontend developer, backend developer, full stack, react, angular, .net, machine learning, portfolio, developer, programmer, Péter Szabó",
        hu: "szoftverfejlesztő, frontend fejlesztő, backend fejlesztő, full stack, react, angular, .net, gépi tanulás, portfólió, fejlesztő, programozó, Szabó Péter"
      },
      description: {
        en: "Portfolio of Péter Szabó, a software engineer specializing in frontend, backend development and machine learning.",
        hu: "Szabó Péter szoftverfejlesztő portfóliója, aki frontend, backend fejlesztésre és gépi tanulásra specializálódott."
      }
    };

    // Update meta tags helper function
    const updateMetaTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (tag) {
        tag.setAttribute('content', content);
      } else {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        tag.setAttribute('content', content);
        document.head.appendChild(tag);
      }
    };

    // Update canonical URL
    const updateCanonicalUrl = () => {
      const url = window.location.origin;
      let link = document.querySelector('link[rel="canonical"]');
      if (link) {
        link.setAttribute('href', url);
      } else {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        link.setAttribute('href', url);
        document.head.appendChild(link);
      }
    };

    // Apply meta tags
    updateMetaTag('keywords', metaTags.keywords[language as 'en' | 'hu']);
    updateMetaTag('description', metaTags.description[language as 'en' | 'hu']);
    updateMetaTag('Content-Language', language);
    updateCanonicalUrl();
    
    // Update HTML lang attribute
    document.documentElement.lang = language;
  }, [language]);

  return null;
};

export default SEO;
