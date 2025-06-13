
import { Heart } from "lucide-react";
import { Send } from "lucide-react";

const Footer = () => {
  const handleTelegramClick = () => {
    window.open('https://t.me/unlonely_club', '_blank');
  };

  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-3 flex items-center justify-center gap-2">
            unlonely.club
            <Heart className="w-5 h-5 text-background" />
          </h3>
          <p className="text-background/70 mb-4 max-w-md mx-auto text-sm">
            Building emotional safety, meaningful connections, and practical support for everyone starting a new life in Finland.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={handleTelegramClick}
              className="flex items-center gap-2 text-sm hover:text-background/80 transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>@unlonely_club</span>
            </button>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-6 pt-4 text-center">
          <p className="text-background/70 text-sm">
            © 2024 unlonely.club. Made with <Heart className="w-4 h-4 inline text-background" /> for the Finnish expat community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
