
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, MapPin } from "lucide-react";

const Hero = () => {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    waitlistSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden gradient-hero">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <div className="flex justify-center items-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-foreground" />
            <span className="text-sm font-medium text-foreground tracking-wide uppercase">
              Starting life in Finland
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
            Find Your Tribe in Finland
          </h1>
          
          <p className="text-xl lg:text-2xl text-foreground mb-8 leading-relaxed">
            We handle the social, practical, and emotional chaos of starting a life in Finland — so you don't have to
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
              <Heart className="w-4 h-4 text-foreground" />
              <span className="text-sm font-medium text-foreground">Emotional Safety</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
              <Users className="w-4 h-4 text-foreground" />
              <span className="text-sm font-medium text-foreground">Real Community</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
              <MapPin className="w-4 h-4 text-foreground" />
              <span className="text-sm font-medium text-foreground">Integration Support</span>
            </div>
          </div>
          
          <Button 
            onClick={scrollToWaitlist}
            size="lg" 
            className="bg-foreground hover:bg-foreground/90 text-background font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl"
          >
            Join the Waitlist
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <p className="text-sm text-foreground mt-4">
            Be the first to know when we launch • No spam, ever
          </p>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-50 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-foreground/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-foreground/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-foreground/10 rounded-full blur-xl"></div>
      </div>
    </section>
  );
};

export default Hero;
