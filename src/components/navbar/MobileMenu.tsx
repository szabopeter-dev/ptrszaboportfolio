
import { Menu, X } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { memo, useState, useCallback } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const navLinks = [
  { name: 'about', href: "#about" },
  { name: 'experience', href: "#experience" },
  { name: 'education', href: "#education" },
  { name: 'skills', href: "#skills" },
  { name: 'contact', href: "#contact" }
];

export const MobileMenu = memo(() => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  // Add memoized close handler
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);
  
  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <button 
          className="w-9 h-9 rounded-full flex items-center justify-center text-theme-dark hover:text-theme-accent hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
          aria-label="Toggle menu"
        >
          <Menu size={20} />
        </button>
      </DrawerTrigger>
      <DrawerContent className="p-0 h-[70vh] rounded-t-3xl">
        <VisuallyHidden>
          <DrawerTitle>{t('navigation_menu') || 'Navigation Menu'}</DrawerTitle>
        </VisuallyHidden>
        <div className="flex flex-col h-full bg-gradient-to-b from-theme-light to-theme-lightest pt-12 pb-8 px-6 rounded-t-3xl">
          <DrawerClose className="absolute top-4 right-4" onClick={handleClose}>
            <X size={24} className="text-theme-dark hover:text-theme-accent p-1 hover:bg-white/60 rounded-full transition-all duration-300" />
          </DrawerClose>
          
          <nav className="flex flex-col items-center justify-center space-y-6 text-xl mt-8 h-full">
            {navLinks.map((link, index) => (
              <DrawerClose asChild key={link.name}>
                <a 
                  href={link.href}
                  className="text-theme-dark hover:text-theme-accent transition-all duration-300 w-full text-center py-3 relative overflow-hidden group font-medium animate-fade-in"
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                  }}
                  onClick={handleClose}
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
              className="mt-4 w-full flex justify-center animate-fade-in"
              style={{ 
                animationDelay: `${navLinks.length * 50}ms`,
              }}
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
});

MobileMenu.displayName = "MobileMenu";
