
import HeroRu from "@/components/ru/HeroRu";
import ProblemSolutionRu from "@/components/ru/ProblemSolutionRu";
import ServicesRu from "@/components/ru/ServicesRu";
import TribesRu from "@/components/ru/TribesRu";
import WaitlistRu from "@/components/ru/WaitlistRu";
import FooterRu from "@/components/ru/FooterRu";
import { Separator } from "@/components/ui/separator";

const RussianIndex = () => {
  return (
    <div className="min-h-screen">
      <HeroRu />
      <Separator className="h-[2px] opacity-100 bg-black" />
      <ProblemSolutionRu />
      <Separator className="h-[2px] opacity-100 bg-black" />
      <ServicesRu />
      <Separator className="h-[2px] opacity-100 bg-black" />
      <TribesRu />
      <Separator className="h-[2px] opacity-100 bg-black" />
      <WaitlistRu />
      <Separator className="h-[2px] opacity-100 bg-black" />
      <FooterRu />
    </div>
  );
};

export default RussianIndex;
