import { TrendingUp, Zap, Heart } from "lucide-react";
const Tribes = () => {
  const tribes = [{
    name: "Tribe.growth",
    description: "Do not stop your growth because you moved to a new country",
    icon: TrendingUp,
    color: "bg-emerald-100 border-emerald-200",
    iconColor: "text-emerald-600",
    testimonial: "I joined the growth tribe and got a warm intro into Supercell!"
  }, {
    name: "Tribe.energy",
    description: "Find new sports and continue old hobbies",
    icon: Zap,
    color: "bg-orange-100 border-orange-200",
    iconColor: "text-orange-600",
    testimonial: "I joined the energy tribe and finally got enrolled in tennis lessons!"
  }, {
    name: "Tribe.support",
    description: "Get the community support as families or individuals",
    icon: Heart,
    color: "bg-rose-100 border-rose-200",
    iconColor: "text-rose-600",
    testimonial: "I joined the support tribe and found the perfect kindergarten!"
  }];
  return <section className="bg-white py-[30px]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6 text-black lg:text-4xl">
            Find Your{" "}
            <span className="bg-clip-text gradient-warmth text-transparent">
              Tribe
            </span>
          </h2>
          <p className="text-black leading-relaxed text-lg">
            Connect with like-minded people who share your goals and interests
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tribes.map((tribe, index) => <div key={index} className="flex flex-col items-center animate-fade-in" style={{
          animationDelay: `${index * 0.2}s`
        }}>
              {/* Floating Tribe Card */}
              <div className="">
                <div className="text-center my-0 py-[10px] rounded-xl bg-[#f6f3ef]">
                  <div className={`w-16 h-16 ${tribe.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-inner`}>
                    <tribe.icon className={`w-8 h-8 ${tribe.iconColor}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-black">
                    {tribe.name}
                  </h3>
                  
                  <p className="text-black leading-relaxed">
                    {tribe.description}
                  </p>
                </div>
              </div>

              {/* Testimonial Bubble */}
              <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-coral-accent max-w-sm relative">
                <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-l border-t border-coral-accent transform rotate-45"></div>
                <p className="text-black italic text-sm leading-relaxed">
                  "{tribe.testimonial}"
                </p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Tribes;