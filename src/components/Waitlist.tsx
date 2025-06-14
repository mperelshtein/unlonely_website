
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

const Waitlist = () => {
  const handleJoinWaitlist = () => {
    window.open('https://t.me/unlonely_waitlist_bot', '_blank');
  };

  const handleFeedback = () => {
    window.open('https://tally.so/r/woaYEN', '_blank');
  };

  return (
    <section id="waitlist" className="py-8 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-card rounded-3xl p-8 border shadow-xl">
            <Users className="w-12 h-12 text-black mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-black">
              Ready to Find Your Tribe?
            </h3>
            <p className="text-base text-black mb-6">
              Join our waitlist to be the first to know when we launch.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleJoinWaitlist}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12 rounded-xl"
              >
                Join Waitlist
              </Button>
              
              <Button 
                onClick={handleFeedback}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 h-12 rounded-xl"
              >
                Give your feedback
              </Button>
            </div>

            <p className="text-xs text-black mt-4">
              We respect your privacy. No spam, ever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
