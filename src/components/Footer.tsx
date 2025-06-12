
import { Heart, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              unlonely.club
              <Heart className="w-6 h-6 text-warmth" />
            </h3>
            <p className="text-background/70 mb-6 max-w-md">
              Building emotional safety, meaningful connections, and practical support for everyone starting a new life in Finland.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4" />
                <span>hello@unlonely.club</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/70 text-sm">
            © 2024 unlonely.club. Made with <Heart className="w-4 h-4 inline text-warmth" /> for the Finnish expat community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
