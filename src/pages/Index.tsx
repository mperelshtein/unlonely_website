
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <Services />
      <Testimonials />
      <Waitlist />
      <Footer />
    </div>
  );
};

export default Index;
