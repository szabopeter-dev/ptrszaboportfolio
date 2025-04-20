
import { Menu, X } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const navLinks = [
  { name: 'about', href: "#about" },
  { name: 'experience', href: "#experience" },
  { name: 'education', href: "#education" },
  { name: 'skills', href: "#skills" },
  { name: 'contact', href: "#contact" }
];

export const MobileMenu = () => {
  const { t } = useLanguage();

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button 
          className="text-theme-dark hover:text-theme-accent rounded-full p-2 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </DrawerTrigger>
      <DrawerContent className="p-0 h-[70vh] rounded-t-3xl">
        <div className="flex flex-col h-full bg-gradient-to-b from-theme-light to-theme-lightest pt-12 pb-8 px-6 rounded-t-3xl">
          <DrawerClose className="absolute top-4 right-4">
            <X size={24} className="text-theme-dark hover:text-theme-accent p-1 hover:bg-white/60 rounded-full transition-all duration-300" />
          </DrawerClose>
          
          <nav className="flex flex-col items-center justify-center space-y-6 text-xl mt-8 h-full">
            {navLinks.map((link, index) => (
              <DrawerClose asChild key={link.name}>
                <a 
                  href={link.href}
                  className="text-theme-dark hover:text-theme-accent transition-all duration-300 w-full text-center py-3 relative overflow-hidden group font-medium"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="relative z-10">{t(link.name)}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-theme-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              </DrawerClose>
            ))}

            <a 
              href="https://www.linkedin.com/in/ptrszabo7/" 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full flex justify-center"
            >
              <Button className="bg-theme hover:bg-theme-accent text-white px-6 py-3 rounded-md transition-all duration-300 w-full max-w-xs shadow-md hover:shadow-lg hover:-translate-y-1">
                {t('linkedin')}
              </Button>
            </a>
          </nav>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
