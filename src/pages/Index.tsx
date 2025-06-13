
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Waitlist />
      <Hero />
      <ProblemSolution />
      <Services />
      <Footer />
    </div>
  );
};

export default Index;
