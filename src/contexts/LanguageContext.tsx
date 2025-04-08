
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hu';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Comprehensive translations for all site content
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'about': 'About',
    'experience': 'Experience',
    'education': 'Education',
    'skills': 'Skills',
    'contact': 'Contact',
    'linkedin': 'LinkedIn',
    
    // Skills section
    'skills_title': 'Skills & Technologies',
    'frontend_development': 'Frontend Development',
    'frontend_desc': 'Building modern, responsive web interfaces with the latest frontend technologies',
    'backend_development': 'Backend Development',
    'backend_desc': 'Creating robust server-side applications and APIs with industry standard technologies',
    'machine_learning': 'Machine Learning',
    'machine_learning_desc': 'Developing intelligent systems using various machine learning techniques and frameworks',
    'database_data': 'Database & Data',
    'database_data_desc': 'Working with various database technologies and data processing techniques',
    'devops_tooling': 'DevOps & Tooling',
    'devops_tooling_desc': 'Implementing CI/CD pipelines and modern development workflows',
    'systems_theory': 'Systems & Theory',
    'systems_theory_desc': 'Understanding fundamental computer science concepts and systems programming',
    'click_for_details': 'Click for details',
    
    // Skill details
    'frontend_detail_1': 'Developed strong frontend skills through both self-learning and university coursework.',
    'frontend_detail_2': 'Currently applying frontend knowledge in a professional setting.',
    'frontend_detail_3': 'Familiar with modern frameworks and libraries, emphasizing clean UI/UX.',
    
    'backend_detail_1': 'Started backend development during high school at BMSZC and have been building ever since.',
    'backend_detail_2': 'Created full-stack applications using ASP.NET Core, Entity Framework Core, and Web APIs.',
    'backend_detail_3': 'Developed a layered Harry Potter-themed application with integration and unit testing using NUnit and Moq.',
    'backend_detail_4': 'Projects available on GitHub demonstrating clean architecture and robust test coverage.',
    
    'ml_detail_1': 'Gained hands-on experience with ML during my 2-year-long thesis project: a machine learning-based ATM cash-out prediction system.',
    'ml_detail_2': 'Focused on time series forecasting using GRU and LSTM models.',
    'ml_detail_3': 'Implemented preprocessing, feature engineering, and model evaluation using Python and TensorFlow.',
    'ml_detail_4': 'The project involved large-scale financial datasets and real-world application scenarios.',
    
    'database_detail_1': 'Introduced to databases during high school and deepened my knowledge at university.',
    'database_detail_2': 'Experienced in SQL and PL/SQL for data manipulation and querying.',
    'database_detail_3': 'Passionate about database design, optimization, and Big Data concepts.',
    'database_detail_4': 'Comfortable working with relational data and large datasets.',
    
    'devops_detail_1': 'Actively use GitLab and GitHub for version control and CI/CD pipelines.',
    'devops_detail_2': 'Familiar with setting up automated testing and deployment processes.',
    'devops_detail_3': 'Experience working in collaborative environments with branch-based workflows.',
    'devops_detail_4': 'Committed to writing maintainable, production-ready code integrated with CI systems.',
    
    'systems_detail_1': 'Studied and worked with various operating systems including Windows and Linux.',
    'systems_detail_2': 'Gained practical knowledge of low-level programming through x86 Assembly.',
    'systems_detail_3': 'Although initially challenging, I grew to appreciate the power and elegance of low-level systems.',
    'systems_detail_4': 'Enjoy diving deep into system-level concepts to understand how things work under the hood.',
    
    // Hero section
    'hero_greeting': 'Hi there, I\'m',
    'hero_title': 'I build modern software solutions',
    'hero_description': 'Software Engineer specializing in React, Next.js, .NET, and machine learning technologies.',
    'hero_get_in_touch': 'Get in touch',
    'hero_learn_more': 'Learn more',
    'hero_phone': 'Phone',
    'hero_email': 'Email',
    
    // About section
    'about_title': 'About Me',
    'about_profession': 'Software Engineer',
    'about_education': 'B.S. in Software Engineering at the University of Óbuda, focused on building solutions that solve real-world problems.',
    'about_work': 'Working at ReComp Informatikai Zrt. on modernizing legacy systems with React, Next.js and Tailwind. Passionate about creating clean, maintainable code that delivers exceptional user experiences.',
    'about_thesis': 'Currently focused on ML-based ATM cash level prediction for my thesis, exploring the intersection of financial technology and machine learning to optimize cash management systems.',
    'about_technologies': 'Technologies I\'ve been working with recently:',
    'about_download_cv': 'Download CV',
    
    // Education section
    'education_title': 'Education',
    'education_coursework': 'Relevant Coursework',
    
    // Contact section
    'contact_title_small': 'Get In Touch',
    'contact_title': 'Let\'s Connect',
    'contact_message': 'I\'m currently focusing on my Software Engineering studies while working as a Junior Software Developer. Feel free to reach out and I\'ll get back to you soon!',
    'contact_email': 'Email',
    'contact_phone': 'Phone',
    'contact_say_hello': 'Say Hello',
    'contact_download_cv': 'Download CV',
    
    // Footer
    'footer_rights': 'All rights reserved.',
    
    // Experience section
    'experience_title': 'Experience',
    'experience_present': 'Present',
    'experience_company': 'Company',
    'experience_position': 'Position',
    'experience_duration': 'Duration',
    'experience_description': 'Description',
    'experience_tech_stack': 'Tech Stack',
  },
  hu: {
    // Navigation
    'about': 'Rólam',
    'experience': 'Tapasztalat',
    'education': 'Tanulmányok',
    'skills': 'Készségek',
    'contact': 'Kapcsolat',
    'linkedin': 'LinkedIn',
    
    // Skills section
    'skills_title': 'Készségek és Technológiák',
    'frontend_development': 'Frontend Fejlesztés',
    'frontend_desc': 'Modern, reszponzív webes felületek építése a legújabb frontend technológiákkal',
    'backend_development': 'Backend Fejlesztés',
    'backend_desc': 'Robusztus szerveroldali alkalmazások és API-k létrehozása iparági szabványos technológiákkal',
    'machine_learning': 'Gépi Tanulás',
    'machine_learning_desc': 'Intelligens rendszerek fejlesztése különböző gépi tanulási technikák és keretrendszerek használatával',
    'database_data': 'Adatbázis és Adatok',
    'database_data_desc': 'Különböző adatbázis-technológiák és adatfeldolgozási technikák alkalmazása',
    'devops_tooling': 'DevOps és Eszközök',
    'devops_tooling_desc': 'CI/CD folyamatok és modern fejlesztési munkafolyamatok implementálása',
    'systems_theory': 'Rendszerek és Elmélet',
    'systems_theory_desc': 'Alapvető számítástudományi koncepciók és rendszerprogramozás megértése',
    'click_for_details': 'Kattints a részletekért',
    
    // Skill details
    'frontend_detail_1': 'Erős frontend készségeket fejlesztettem ki önképzés és egyetemi tanulmányok során.',
    'frontend_detail_2': 'Jelenleg professzionális környezetben alkalmazom frontend tudásomat.',
    'frontend_detail_3': 'Ismerem a modern keretrendszereket és könyvtárakat, hangsúlyt fektetve a tiszta UI/UX-re.',
    
    'backend_detail_1': 'A backend fejlesztést a BMSZC-ben kezdtem a középiskolában, és azóta is folyamatosan építem tudásom.',
    'backend_detail_2': 'Full-stack alkalmazásokat készítettem ASP.NET Core, Entity Framework Core és Web API-k használatával.',
    'backend_detail_3': 'Fejlesztettem egy réteges Harry Potter témájú alkalmazást integrációs és egységtesztekkel NUnit és Moq használatával.',
    'backend_detail_4': 'A GitHubon elérhetők a projektjeim, amelyek tiszta architektúrát és robusztus tesztlefedettséget mutatnak.',
    
    'ml_detail_1': 'Gyakorlati tapasztalatot szereztem a gépi tanulásban a 2 éves szakdolgozati projektem során: egy gépi tanuláson alapuló ATM készpénzkivételi előrejelző rendszer.',
    'ml_detail_2': 'Idősoros előrejelzésre fókuszáltam GRU és LSTM modellek használatával.',
    'ml_detail_3': 'Előfeldolgozást, jellemző mérnöki munkát és modellértékelést valósítottam meg Python és TensorFlow segítségével.',
    'ml_detail_4': 'A projekt nagyszabású pénzügyi adatkészleteket és valós alkalmazási forgatókönyveket tartalmazott.',
    
    'database_detail_1': 'Az adatbázisokkal középiskolában ismerkedtem meg, és az egyetemen mélyítettem el tudásomat.',
    'database_detail_2': 'Tapasztalt vagyok SQL és PL/SQL használatában adatmanipulációhoz és lekérdezéshez.',
    'database_detail_3': 'Szenvedélyes vagyok az adatbázistervezés, optimalizálás és Big Data koncepciók iránt.',
    'database_detail_4': 'Jól dolgozom relációs adatokkal és nagy adatkészletekkel.',
    
    'devops_detail_1': 'Aktívan használom a GitLabot és GitHubot verziókezeléshez és CI/CD folyamatokhoz.',
    'devops_detail_2': 'Ismerem az automatizált tesztelési és telepítési folyamatok beállítását.',
    'devops_detail_3': 'Tapasztalattal rendelkezem kollaboratív környezetekben ág-alapú munkafolyamatokkal.',
    'devops_detail_4': 'Elkötelezett vagyok a karbantartható, éles rendszerekbe integrált kód írása mellett.',
    
    'systems_detail_1': 'Tanulmányoztam és dolgoztam különböző operációs rendszerekkel, beleértve a Windows és Linux rendszereket.',
    'systems_detail_2': 'Gyakorlati ismereteket szereztem az alacsony szintű programozásban x86 Assembly-n keresztül.',
    'systems_detail_3': 'Bár kezdetben kihívást jelentett, megtanultam értékelni az alacsony szintű rendszerek erejét és eleganciáját.',
    'systems_detail_4': 'Szívesen mélyedek el rendszerszintű koncepciókban, hogy megértsem, hogyan működnek a dolgok a motorháztető alatt.',
    
    // Hero section
    'hero_greeting': 'Szia, én vagyok',
    'hero_title': 'Modern szoftvermegoldásokat fejlesztek',
    'hero_description': 'Szoftverfejlesztő React, Next.js, .NET és gépi tanulási technológiákra specializálódva.',
    'hero_get_in_touch': 'Kapcsolatfelvétel',
    'hero_learn_more': 'Tudj meg többet',
    'hero_phone': 'Telefon',
    'hero_email': 'Email',
    
    // About section
    'about_title': 'Rólam',
    'about_profession': 'Szoftverfejlesztő',
    'about_education': 'Szoftverfejlesztő BSc, Óbudai Egyetem, valós problémákat megoldó megoldások fejlesztésére összpontosítva.',
    'about_work': 'A ReComp Informatikai Zrt-nél dolgozom, régebbi rendszerek modernizálásán React, Next.js és Tailwind technológiákkal. Szenvedélyem a tiszta, karbantartható kód írása, amely kivételes felhasználói élményt nyújt.',
    'about_thesis': 'Jelenleg az ATM készpénzszint gépi tanuláson alapuló előrejelzésére összpontosítok a szakdolgozatomban, a pénzügyi technológia és a gépi tanulás találkozópontját kutatva a készpénzkezelési rendszerek optimalizálása érdekében.',
    'about_technologies': 'Technológiák, amelyekkel nemrég dolgoztam:',
    'about_download_cv': 'Önéletrajz letöltése',
    
    // Education section
    'education_title': 'Tanulmányok',
    'education_coursework': 'Tantárgyak',
    
    // Contact section
    'contact_title_small': 'Vedd fel a kapcsolatot',
    'contact_title': 'Lépjünk kapcsolatba',
    'contact_message': 'Jelenleg a szoftverfejlesztői tanulmányaimra összpontosítok, miközben junior szoftverfejlesztőként dolgozom. Nyugodtan keress meg, és hamarosan válaszolok!',
    'contact_email': 'Email',
    'contact_phone': 'Telefon',
    'contact_say_hello': 'Írj nekem',
    'contact_download_cv': 'Önéletrajz letöltése',
    
    // Footer
    'footer_rights': 'Minden jog fenntartva.',
    
    // Experience section
    'experience_title': 'Tapasztalat',
    'experience_present': 'Jelenleg',
    'experience_company': 'Cég',
    'experience_position': 'Pozíció',
    'experience_duration': 'Időtartam',
    'experience_description': 'Leírás',
    'experience_tech_stack': 'Technológiai Stack',
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
