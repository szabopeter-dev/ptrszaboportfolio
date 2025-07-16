
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { memo, useRef } from "react";

export const LanguageSelector = memo(() => {
  const { language, setLanguage } = useLanguage();
  const triggerRef = useRef<HTMLButtonElement>(null);
  
  // Enhanced method to prevent layout shifts when changing language
  const toggleLanguage = (newLang: 'en' | 'hu') => {
    if (language === newLang) return;
    
    // Save scroll position and document height before language change
    const scrollPosition = window.scrollY;
    const documentHeight = document.body.scrollHeight;
    
    // Apply language change
    setLanguage(newLang);
    
    // Maintain scroll position after render
    window.requestAnimationFrame(() => {
      // Check if document height changed and adjust scroll position proportionally
      const newDocumentHeight = document.body.scrollHeight;
      if (documentHeight !== newDocumentHeight && documentHeight > 0) {
        const scrollRatio = scrollPosition / documentHeight;
        window.scrollTo(0, scrollRatio * newDocumentHeight);
      } else {
        window.scrollTo(0, scrollPosition);
      }
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          ref={triggerRef}
          variant="ghost" 
          size="sm"
          className="w-9 h-9 p-0 rounded-full flex items-center justify-center text-theme-dark hover:text-theme-accent hover:bg-theme-light/10 transition-colors duration-300"
          aria-label="Change Language"
        >
          <Globe className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end"
        className="min-w-[100px] bg-white/95 backdrop-blur-md border border-gray-200 shadow-lg rounded-lg"
        avoidCollisions={true}
        collisionPadding={16}
        sideOffset={8}
        forceMount
      >
        {['en', 'hu'].map((option) => (
          <DropdownMenuItem 
            key={option}
            onClick={() => toggleLanguage(option as 'en' | 'hu')}
            className={cn(
              "flex items-center justify-between py-2 px-3 cursor-pointer transition-colors text-sm",
              language === option ? "bg-theme-light/20 font-medium text-theme" : "hover:bg-theme-light/10"
            )}
          >
            <span className="capitalize">{option === 'en' ? 'English' : 'Magyar'}</span>
            {language === option && (
              <span className="h-2 w-2 rounded-full bg-theme-accent ml-2"></span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
});

LanguageSelector.displayName = "LanguageSelector";
