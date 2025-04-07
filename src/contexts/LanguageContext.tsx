
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hu';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Simple translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    'about': 'About',
    'experience': 'Experience',
    'education': 'Education',
    'skills': 'Skills',
    'contact': 'Contact',
    'linkedin': 'LinkedIn',
  },
  hu: {
    'about': 'Rólam',
    'experience': 'Tapasztalat',
    'education': 'Tanulmányok',
    'skills': 'Készségek',
    'contact': 'Kapcsolat',
    'linkedin': 'LinkedIn',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Simple translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
