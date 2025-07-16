
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'hu';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.experience': 'Experience', 
    'nav.projects': 'Projects',
    'nav.education': 'Education',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hi, I\'m',
    'hero.role': 'Software Engineer & ML Specialist',
    'hero.description': 'Final-year Software Engineering student passionate about machine learning and full-stack development. Currently seeking internship opportunities at big tech companies.',
    'hero.downloadCV': 'Download CV',
    'hero.viewProjects': 'View My Projects',
    
    // About
    'about.title': 'About Me',
    'about.role': 'Software Engineer & ML Specialist',
    'about.description': 'Final-year Software Engineering student at University of Óbuda with 8.2/10 GPA, specializing in machine learning and full-stack development.',
    'about.location': 'Currently based between Budapest, Hungary and learning new technologies',
    'about.experience.title': 'Professional Experience',
    'about.experience.description': 'Currently working as a Software Developer Intern at Recomp Informatikai Zrt., rebuilding legacy systems with React, Next.js, and developing AI-powered chatbots with real-time capabilities.',
    'about.academic.title': 'Academic Excellence',
    'about.academic.description': 'Developing ML-based ATM cash forecasting system for BSc thesis, achieving 34% MAE reduction. Planning to present at national conferences and publish in IEEE venues.',
    'about.interests.title': 'Special Interests',
    'about.interests.design.title': 'UI/UX Design',
    'about.interests.design.description': 'Passionate about creating intuitive user experiences',
    'about.interests.fitness.title': 'Fitness & Gym',
    'about.interests.fitness.description': 'Maintaining physical and mental well-being',
    'about.interests.handball.title': 'Handball',
    'about.interests.handball.description': 'Team sport enthusiast and strategic thinking',
    'about.expertise.title': 'Technical Expertise',
    'about.downloadCV': 'Download CV',
    
    // Experience
    'experience.title': 'Experience',
    'experience.current': 'Current',
    'experience.present': 'Present',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.viewAll': 'View All Projects',
    'projects.github': 'GitHub',
    'projects.live': 'Live Demo',
    
    // Education
    'education.title': 'Education',
    'education.gpa': 'GPA',
    'education.current': 'Current',
    'education.present': 'Present',
    
    // Skills
    'skills.title': 'Skills & Technologies',
    'skills.frontend': 'Frontend Development',
    'skills.backend': 'Backend Development',
    'skills.ml': 'Machine Learning',
    'skills.tools': 'Tools & Others',
    'skills.clickToFlip': 'Click to flip',
    'skills.proficiency': 'Proficiency',
    'skills.experience': 'Experience',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to collaborate on innovative projects',
    'contact.description': 'I\'m currently seeking internship opportunities at big tech companies. Let\'s connect and discuss how I can contribute to your team.',
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.availability': 'Availability',
    'contact.response': 'Response Time',
    'contact.sendMessage': 'Send Message',
    'contact.connect': 'Let\'s Connect',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.built': 'Built with React & TypeScript',
  },
  hu: {
    // Navigation
    'nav.about': 'Rólam',
    'nav.experience': 'Tapasztalat',
    'nav.projects': 'Projektek',
    'nav.education': 'Tanulmányok',
    'nav.skills': 'Készségek',
    'nav.contact': 'Kapcsolat',
    
    // Hero
    'hero.greeting': 'Szia, én vagyok',
    'hero.role': 'Szoftvermérnök & ML Szakértő',
    'hero.description': 'Végzős szoftvermérnök hallgató, aki szenvedélyes a gépi tanulás és a full-stack fejlesztés iránt. Jelenleg nagytech cégeknél keresek gyakornoki lehetőségeket.',
    'hero.downloadCV': 'Önéletrajz letöltése',
    'hero.viewProjects': 'Projektek megtekintése',
    
    // About
    'about.title': 'Rólam',
    'about.role': 'Szoftvermérnök & ML Szakértő',
    'about.description': 'Végzős szoftvermérnök hallgató az Óbudai Egyetemen 8.2/10 GPA-val, gépi tanulásra és full-stack fejlesztésre specializálódva.',
    'about.location': 'Jelenleg Budapest, Magyarország központtal és új technológiák tanulásával',
    'about.experience.title': 'Szakmai tapasztalat',
    'about.experience.description': 'Jelenleg szoftverfejlesztő gyakornokként dolgozom a Recomp Informatikai Zrt.-nél, legacy rendszerek újraépítésén React, Next.js segítségével, és AI-alapú chatbotok fejlesztésén valós idejű képességekkel.',
    'about.academic.title': 'Akadémiai kiválóság',
    'about.academic.description': 'ML-alapú ATM készpénz előrejelzési rendszer fejlesztése BSc szakdolgozathoz, 34%-os MAE csökkentés elérése. Tervben van nemzeti konferenciákon való előadás és IEEE publikálás.',
    'about.interests.title': 'Különleges érdeklődési körök',
    'about.interests.design.title': 'UI/UX Design',
    'about.interests.design.description': 'Intuitív felhasználói élmények létrehozása iránti szenvedély',
    'about.interests.fitness.title': 'Fitness & Edzőterem',
    'about.interests.fitness.description': 'Fizikai és mentális jólét fenntartása',
    'about.interests.handball.title': 'Kézilabda',
    'about.interests.handball.description': 'Csapatsport rajongó és stratégiai gondolkodás',
    'about.expertise.title': 'Technikai szakértelem',
    'about.downloadCV': 'Önéletrajz letöltése',
    
    // Experience
    'experience.title': 'Tapasztalat',
    'experience.current': 'Jelenlegi',
    'experience.present': 'Jelenleg',
    
    // Projects
    'projects.title': 'Kiemelt projektek',
    'projects.viewAll': 'Összes projekt megtekintése',
    'projects.github': 'GitHub',
    'projects.live': 'Élő demó',
    
    // Education
    'education.title': 'Tanulmányok',
    'education.gpa': 'GPA',
    'education.current': 'Jelenlegi',
    'education.present': 'Jelenleg',
    
    // Skills
    'skills.title': 'Készségek és technológiák',
    'skills.frontend': 'Frontend fejlesztés',
    'skills.backend': 'Backend fejlesztés',
    'skills.ml': 'Gépi tanulás',
    'skills.tools': 'Eszközök és egyéb',
    'skills.clickToFlip': 'Kattints a megfordításhoz',
    'skills.proficiency': 'Jártasság',
    'skills.experience': 'Tapasztalat',
    
    // Contact
    'contact.title': 'Vedd fel velem a kapcsolatot',
    'contact.subtitle': 'Készen állok innovatív projekteken való együttműködésre',
    'contact.description': 'Jelenleg nagytech cégeknél keresek gyakornoki lehetőségeket. Lépjünk kapcsolatba és beszéljük meg, hogyan járulhatok hozzá a csapatodhoz.',
    'contact.email': 'Email',
    'contact.location': 'Helyszín',
    'contact.availability': 'Elérhetőség',
    'contact.response': 'Válaszidő',
    'contact.sendMessage': 'Üzenet küldése',
    'contact.connect': 'Lépjünk kapcsolatba',
    
    // Footer
    'footer.rights': 'Minden jog fenntartva.',
    'footer.built': 'React & TypeScript segítségével készült',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'hu'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
