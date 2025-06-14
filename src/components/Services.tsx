
import { Heart, Users, Home } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Emotional Support",
      subtitle: "Your mental wellbeing matters",
      features: [
        "Peer support tribes",
        "Curated 1:1 intros with fellow immigrants",
        "Matching system to meet people with your interests"
      ],
    },
    {
      icon: Users,
      title: "Community & Integration",
      subtitle: "Build connections and navigate life",
      features: [
        "Referrals to events from various communities",
        "Local networking opportunities",
        "Tribes for growth, energy and emotional support"
      ],
    },
    {
      icon: Home,
      title: "Solution of the Everyday Problems",
      subtitle: "Practical help for daily life",
      features: [
        "Housing assistance",
        "Family support services",
        "Investment guidance",
        "Administrative help"
      ],
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            How We Support You
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl border p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-foreground/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-foreground" />
              </div>
              
              <h3 className="text-lg font-semibold mb-2 text-foreground">{service.title}</h3>
              <p className="text-foreground mb-4 text-sm">{service.subtitle}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
