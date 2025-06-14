
import { Switch } from "@/components/ui/switch";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();

  const handleLanguageChange = (checked: boolean) => {
    const newLanguage = checked ? 'ru' : 'en';
    setLanguage(newLanguage);
    
    // Navigate to appropriate page
    if (newLanguage === 'ru') {
      navigate('/ru');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border shadow-lg">
      <span className={`text-sm font-medium transition-colors ${
        language === 'en' 
          ? 'text-primary bg-primary/10 px-2 py-1 rounded-md' 
          : 'text-muted-foreground'
      }`}>
        EN
      </span>
      <Switch
        checked={language === 'ru'}
        onCheckedChange={handleLanguageChange}
      />
      <span className={`text-sm font-medium transition-colors ${
        language === 'ru' 
          ? 'text-primary bg-primary/10 px-2 py-1 rounded-md' 
          : 'text-muted-foreground'
      }`}>
        RU
      </span>
    </div>
  );
};

export default LanguageToggle;
