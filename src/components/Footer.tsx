
import { Heart, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
            unlonely.club
            <Heart className="w-6 h-6 text-background" />
          </h3>
          <p className="text-background/70 mb-6 max-w-md mx-auto">
            Building emotional safety, meaningful connections, and practical support for everyone starting a new life in Finland.
          </p>
          <div className="flex justify-center">
            <div className="flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4" />
              <span>hello@unlonely.club</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/70 text-sm">
            © 2024 unlonely.club. Made with <Heart className="w-4 h-4 inline text-background" /> for the Finnish expat community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
