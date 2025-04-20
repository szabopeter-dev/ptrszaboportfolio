
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

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  
  // Prevent scroll position change when toggling language
  const toggleLanguage = (newLang: 'en' | 'hu') => {
    if (language === newLang) return;
    const currentScrollPos = window.scrollY;
    setLanguage(newLang);
    setTimeout(() => window.scrollTo(0, currentScrollPos), 0);
  };

  return (
    <div className="relative inline-block">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="ghost" 
            size="sm"
            className="flex items-center text-theme-dark hover:text-theme-accent p-1.5 h-9 min-w-0 rounded-full hover:bg-theme-light/10 transition-colors"
          >
            <Globe className="h-5 w-5 text-theme" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="end"
          className="min-w-[120px] bg-white/95 backdrop-blur-md border border-gray-200 shadow-lg rounded-lg"
          avoidCollisions={true}
          collisionPadding={16}
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
};
