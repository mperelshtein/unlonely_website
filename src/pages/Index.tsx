
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
import Tribes from "@/components/Tribes";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Separator className="bg-border/50" />
      <ProblemSolution />
      <Separator className="bg-border/50" />
      <Services />
      <Separator className="bg-border/50" />
      <Tribes />
      <Separator className="bg-border/50" />
      <Waitlist />
      <Separator className="bg-border/50" />
      <Footer />
    </div>
  );
};

export default Index;
