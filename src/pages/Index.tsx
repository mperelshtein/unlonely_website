
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
      <Separator className="bg-border h-px opacity-100" />
      <ProblemSolution />
      <Separator className="bg-border h-px opacity-100" />
      <Services />
      <Separator className="bg-border h-px opacity-100" />
      <Tribes />
      <Separator className="bg-border h-px opacity-100" />
      <Waitlist />
      <Separator className="bg-border h-px opacity-100" />
      <Footer />
    </div>
  );
};

export default Index;
