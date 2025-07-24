
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
    'projects': 'Projects',
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
    'frontend_detail_1': 'Rebuilding legacy attorney management systems using React, Next.js, and Tailwind CSS with modern testing practices.',
    'frontend_detail_2': 'Currently applying frontend knowledge in a professional setting at Recomp Informatikai Zrt.',
    'frontend_detail_3': 'Familiar with modern frameworks and libraries, emphasizing clean UI/UX and responsive design.',
    
    'backend_detail_1': 'Started backend development during high school at BMSZC and have been building ever since.',
    'backend_detail_2': 'Created full-stack applications using ASP.NET Core, Entity Framework Core, and Web APIs.',
    'backend_detail_3': 'Developed a layered Harry Potter-themed application with integration and unit testing using NUnit and Moq.',
    'backend_detail_4': 'Currently working on modernizing legacy Delphi systems and implementing CI/CD pipelines through GitLab.',
    
    'ml_detail_1': 'Gained hands-on experience with ML during my 4-semester thesis project: a machine learning-based ATM cash forecasting system.',
    'ml_detail_2': 'Focused on time series forecasting using GRU and LSTM models, achieving up to 34% MAE reduction.',
    'ml_detail_3': 'Implemented preprocessing, feature engineering, and model evaluation using Python and TensorFlow.',
    'ml_detail_4': 'Developed LightGBM-based classifier for risk analysis achieving 91% recall on real-world health data.',
    
    'database_detail_1': 'Introduced to databases during high school and deepened my knowledge at university.',
    'database_detail_2': 'Experienced in SQL and PL/SQL for data manipulation and querying.',
    'database_detail_3': 'Passionate about database design, optimization, and Big Data concepts.',
    'database_detail_4': 'Comfortable working with relational data and large datasets for ML applications.',
    
    'devops_detail_1': 'Actively use GitLab and GitHub for version control and CI/CD pipelines in professional environment.',
    'devops_detail_2': 'Familiar with setting up automated testing and deployment processes using Jest and GitLab CI.',
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
    'about_profession': 'Software Engineer & ML Specialist',
    'about_education': 'Final-year Software Engineering student at University of Óbuda (8.2/10 GPA), specializing in machine learning and targeting top tech companies and elite MSc AI programs.',
    'about_work': 'Software Developer Intern at Recomp Informatikai Zrt., rebuilding legacy systems with React/Next.js and developing AI chatbots. Building production-ready ML systems while preparing for opportunities at leading tech companies.',
    'about_thesis': 'Developing ML-based ATM cash forecasting system achieving 34% MAE reduction. Planning to present findings at national conferences and pursue publication in IEEE venues to strengthen graduate school applications.',
    'about_technologies': 'Technologies I\'ve been working with recently:',
    'about_download_cv': 'Download CV',
    
    // Education section
    'education_title': 'Academic Excellence',
    'education_coursework': 'Relevant Coursework',
    'education_degree': 'Bachelor of Science in Software Engineering',
    'education_university': 'University of Óbuda (Óbudai Egyetem)',
    'education_period': '2021 - Present',
    'education_description': 'Comprehensive program focusing on modern software development, computer science fundamentals, and practical application of technologies in real-world scenarios.',
    'education_gpa': 'GPA: 4.2/5.0',
    'education_thesis': 'Thesis: Machine Learning-Based ATM Cash Forecasting System',
    'education_courses': 'Data Structures & Algorithms, Software Architecture, Database Systems, Machine Learning, Web Development, Software Testing, Project Management',
    'education_achievements': 'Key Achievements',
    'education_achievement_1': 'Developed ML-based ATM cash forecasting system with 34% MAE reduction',
    'education_achievement_2': 'Completed advanced coursework in software architecture and design patterns',
    'education_achievement_3': 'Participated in collaborative software development projects',
    'education_achievement_4': 'Focused on practical application of theoretical concepts',
    'technical_focus_areas': 'Technical Focus Areas',
    'key_achievements_impact': 'Key Achievements & Impact',
    'academic_performance': 'Academic Performance',
    'status': 'Status',
    'final_year': 'Final Year',
    'graduated_with_honors': 'Graduated with Honors',
    'university_of_obuda': 'University of Óbuda',
    'software_specialization': 'Software Design & Development',
    'it_specialization': 'Software Development & Network Administration',
    'technical_diploma_it': 'Technical Diploma in Information Technology (5th Year Only)',
    'bmszc_school': 'BMSZC Bláthy Ottó Titusz IT Technical School',
    
    // Contact section
    'contact_title_small': 'Get In Touch',
    'contact_title': 'Let\'s Connect',
    'contact_message': 'I\'m currently focusing on my Software Engineering studies while working as a Software Developer Intern. Based in San Sebastián, Spain and Budapest, Hungary. Feel free to reach out and I\'ll get back to you soon!',
    'contact_email': 'Email',
    'contact_phone': 'Phone',
    'contact_say_hello': 'Say Hello',
    'contact_download_cv': 'Download CV',
    'contact_location': 'Location',
    'contact_location_value': 'San Sebastián, Spain & Budapest, Hungary',
    'contact_response_time': 'Response Time',
    'contact_response_time_value': 'Within 24 hours',
    'contact_availability': 'Availability',
    'contact_availability_value': 'Open to opportunities',
    
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
    'projects': 'Projektek',
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
    'frontend_detail_1': 'Régebbi ügyvédi rendszerek újjáépítése React, Next.js és Tailwind CSS használatával modern tesztelési gyakorlatokkal.',
    'frontend_detail_2': 'Jelenleg professzionális környezetben alkalmazom frontend tudásomat a Recomp Informatikai Zrt-nél.',
    'frontend_detail_3': 'Ismerem a modern keretrendszereket és könyvtárakat, hangsúlyt fektetve a tiszta UI/UX-re és reszponzív tervezésre.',
    
    'backend_detail_1': 'A backend fejlesztést a BMSZC-ben kezdtem a középiskolában, és azóta is folyamatosan építem tudásom.',
    'backend_detail_2': 'Full-stack alkalmazásokat készítettem ASP.NET Core, Entity Framework Core és Web API-k használatával.',
    'backend_detail_3': 'Fejlesztettem egy réteges Harry Potter témájú alkalmazást integrációs és egységtesztekkel NUnit és Moq használatával.',
    'backend_detail_4': 'Jelenleg régebbi Delphi rendszerek modernizálásán dolgozom és CI/CD folyamatokat implementálok GitLab segítségével.',
    
    'ml_detail_1': 'Gyakorlati tapasztalatot szereztem a gépi tanulásban a 4 féléves szakdolgozati projektem során: egy gépi tanuláson alapuló ATM készpénz-előrejelző rendszer.',
    'ml_detail_2': 'Idősoros előrejelzésre fókuszáltam GRU és LSTM modellek használatával, 34%-os MAE csökkentést elérve.',
    'ml_detail_3': 'Előfeldolgozást, jellemző mérnöki munkát és modellértékelést valósítottam meg Python és TensorFlow segítségével.',
    'ml_detail_4': 'LightGBM-alapú osztályozót fejlesztettem kockázatelemzéshez, 91%-os visszahívást elérve valós egészségügyi adatokon.',
    
    'database_detail_1': 'Az adatbázisokkal középiskolában ismerkedtem meg, és az egyetemen mélyítettem el tudásomat.',
    'database_detail_2': 'Tapasztalt vagyok SQL és PL/SQL használatában adatmanipulációhoz és lekérdezéshez.',
    'database_detail_3': 'Szenvedélyes vagyok az adatbázistervezés, optimalizálás és Big Data koncepciók iránt.',
    'database_detail_4': 'Jól dolgozom relációs adatokkal és nagy adatkészletekkel ML alkalmazásokhoz.',
    
    'devops_detail_1': 'Aktívan használom a GitLabot és GitHubot verziókezeléshez és CI/CD folyamatokhoz professzionális környezetben.',
    'devops_detail_2': 'Ismerem az automatizált tesztelési és telepítési folyamatok beállítását Jest és GitLab CI használatával.',
    'devops_detail_3': 'Tapasztalattal rendelkezem kollaboratív környezetekben ág-alapú munkafolyamatokkal.',
    'devops_detail_4': 'Elkötelezett vagyok a karbantartható, éles rendszerekbe integrált kód írása mellett.',
    
    'systems_detail_1': 'Tanulmányoztam és dolgoztam különböző operációs rendszerekkel, beleértve a Windows és Linux rendszereket.',
    'systems_detail_2': 'Gyakorlati ismereteket szereztem az alacsony szintű programozásban x86 Assembly-n keresztül.',
    'systems_detail_3': 'Bár kezdetben kihívást jelentett, megtanultam értékelni az alacsony szintű rendszerek erejét és eleganciáját.',
    'systems_detail_4': 'Szívesen mélyedek el rendszerszintű koncepciókban, hogy megértsem, hogyan működnek a dolgok a motorháztető alatt.',
    
    // Hero section
    'hero_greeting': 'Szia, én vagyok',
    'hero_title': 'ML mérnök és szoftverfejlesztő',
    'hero_description': 'Végzős szoftverfejlesztő hallgató (8.2/10 átlag) célozva big tech gyakornokságokat és elit MSc AI programokat. Éles ML rendszerek építése 34%-os teljesítménynöveléssel és modern full-stack alkalmazások.',
    'hero_get_in_touch': 'Kapcsolatfelvétel',
    'hero_learn_more': 'Tudj meg többet',
    'hero_phone': 'Telefon',
    'hero_email': 'Email',
    
    // About section
    'about_title': 'Rólam',
    'about_profession': 'Szoftverfejlesztő és ML Specialista',
    'about_education': 'Végzős szoftverfejlesztő hallgató az Óbudai Egyetemen (8.2/10 átlag), gépi tanulásra specializálódva, célozva a vezető tech cégeket és elit MSc AI programokat.',
    'about_work': 'Szoftverfejlesztő gyakornok a Recomp Informatikai Zrt-nél, legacy rendszerek újjáépítése React/Next.js-sel és AI chatbotok fejlesztése. Éles ML rendszerek építése miközben felkészülök vezető tech cégeknél való lehetőségekre.',
    'about_thesis': 'ML-alapú ATM készpénz-előrejelző rendszer fejlesztése 34%-os MAE csökkentéssel. Tervezem az eredmények bemutatását nemzeti konferenciákon és IEEE publikálást a graduate iskola jelentkezések erősítéséhez.',
    'about_technologies': 'Technológiák, amelyekkel nemrég dolgoztam:',
    'about_download_cv': 'Önéletrajz letöltése',
    
    // Education section
    'education_title': 'Tanulmányi Kiválóság',
    'education_coursework': 'Releváns Tantárgyak',
    'education_degree': 'Szoftverfejlesztő BSc',
    'education_university': 'Óbudai Egyetem',
    'education_period': '2021 - Jelenleg',
    'education_description': 'Átfogó program, amely a modern szoftverfejlesztésre, a számítástudományi alapokra és a technológiák gyakorlati alkalmazására összpontosít valós forgatókönyvekben.',
    'education_gpa': 'Átlag: 4.2/5.0',
    'education_thesis': 'Szakdolgozat: Gépi Tanuláson Alapuló ATM Készpénz-előrejelző Rendszer',
    'education_courses': 'Adatstruktúrák és Algoritmusok, Szoftverarchitektúra, Adatbázisrendszerek, Gépi Tanulás, Webfejlesztés, Szoftvertesztelés, Projektmenedzsment',
    'education_achievements': 'Főbb Eredmények',
    'education_achievement_1': 'ML-alapú ATM készpénz-előrejelző rendszer fejlesztése 34%-os MAE csökkentéssel',
    'education_achievement_2': 'Haladó tanulmányok elvégzése szoftverarchitektúra és tervezési minták területén',
    'education_achievement_3': 'Részvétel kollaboratív szoftverfejlesztési projektekben',
    'education_achievement_4': 'Hangsúly az elméleti koncepciók gyakorlati alkalmazásán',
    'technical_focus_areas': 'Technikai Fókuszterületek',
    'key_achievements_impact': 'Főbb Eredmények és Hatás',
    'academic_performance': 'Tanulmányi Teljesítmény',
    'status': 'Státusz',
    'final_year': 'Utolsó Év',
    'graduated_with_honors': 'Kitüntetéssel Végzett',
    'university_of_obuda': 'Óbudai Egyetem',
    'software_specialization': 'Szoftvertervezés és Fejlesztés',
    'it_specialization': 'Szoftverfejlesztés és Hálózatadminisztráció',
    'technical_diploma_it': 'Informatikai Műszaki Diploma (Csak 5. Évfolyam)',
    'bmszc_school': 'BMSZC Bláthy Ottó Titusz Informatikai Szakgimnázium',
    
    // Contact section
    'contact_title_small': 'Vedd fel a kapcsolatot',
    'contact_title': 'Lépjünk kapcsolatba',
    'contact_message': 'Jelenleg a szoftverfejlesztői tanulmányaimra összpontosítok, miközben szoftverfejlesztő gyakornokként dolgozom. San Sebastiánban, Spanyolországban és Budapesten, Magyarországon élek. Nyugodtan keress meg, és hamarosan válaszolok!',
    'contact_email': 'Email',
    'contact_phone': 'Telefon',
    'contact_say_hello': 'Írj nekem',
    'contact_download_cv': 'Önéletrajz letöltése',
    'contact_location': 'Helyszín',
    'contact_location_value': 'San Sebastián, Spanyolország és Budapest, Magyarország',
    'contact_response_time': 'Válaszidő',
    'contact_response_time_value': '24 órán belül',
    'contact_availability': 'Elérhetőség',
    'contact_availability_value': 'Nyitott lehetőségekre',
    
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
