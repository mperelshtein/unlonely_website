
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Mail, CheckCircle, Users, Clock } from "lucide-react";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address to join the waitlist.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      toast({
        title: "Welcome to the tribe! 🎉",
        description: "You're on the waitlist. We'll notify you when we launch!"
      });
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <section id="waitlist" className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-card rounded-3xl p-12 border shadow-xl animate-scale-in">
              <CheckCircle className="w-16 h-16 text-nordic-blue mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">You're In! 🎉</h3>
              <p className="text-muted-foreground mb-6">
                Welcome to the unlonely.club community. We'll keep you updated on our launch and exclusive early access opportunities.
              </p>
              <div className="bg-muted rounded-xl p-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Next steps:</strong> Follow us on social media and watch your inbox for updates about our private beta launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-20 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-card rounded-3xl p-12 border shadow-xl">
            <Mail className="w-16 h-16 text-warmth mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">
              Ready to Find Your{" "}
              <span className="text-transparent bg-clip-text gradient-warmth">
                Tribe?
              </span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Join our waitlist to be the first to know when we launch. Get exclusive early access and special founding member benefits.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 px-4 rounded-xl text-lg"
                  disabled={isLoading}
                />
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="bg-warmth hover:bg-warmth/90 text-warmth-foreground font-semibold px-8 h-12 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  {isLoading ? "Joining..." : "Join Waitlist"}
                </Button>
              </div>
            </form>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <Users className="w-8 h-8 text-nordic-blue mx-auto" />
                <p className="text-2xl font-bold">500+</p>
                <p className="text-sm text-muted-foreground">Already joined</p>
              </div>
              <div className="space-y-2">
                <CheckCircle className="w-8 h-8 text-warmth mx-auto" />
                <p className="text-2xl font-bold">0€</p>
                <p className="text-sm text-muted-foreground">Early access</p>
              </div>
              <div className="space-y-2">
                <Clock className="w-8 h-8 text-accent mx-auto" />
                <p className="text-2xl font-bold">Q1</p>
                <p className="text-sm text-muted-foreground">2024 Launch</p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground mt-6">
              We respect your privacy. Unsubscribe at any time. No spam, ever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
