
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
import { memo } from "react";

export const LanguageSelector = memo(() => {
  const { language, setLanguage } = useLanguage();
  
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
    <div className="relative inline-block">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="ghost" 
            size="sm"
            className="flex items-center text-theme-dark hover:text-theme-accent p-1.5 h-9 min-w-9 w-9 rounded-full hover:bg-theme-light/10 transition-colors"
            aria-label="Change Language"
          >
            <Globe className="h-5 w-5 text-theme" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="end"
          className="min-w-[120px] bg-white/95 backdrop-blur-md border border-gray-200 shadow-lg rounded-lg"
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
                "flex items-center justify-between py-2.5 px-4 cursor-pointer transition-colors",
                language === option ? "bg-theme-light/20 font-medium" : "hover:bg-theme-light/10"
              )}
            >
              <span className="capitalize">{option}</span>
              {language === option && (
                <span className="h-2 w-2 rounded-full bg-theme-accent"></span>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
});

LanguageSelector.displayName = "LanguageSelector";
