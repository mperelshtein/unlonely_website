
import { Heart, Users, Briefcase, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Emotional Support",
      subtitle: "Your mental wellbeing matters",
      features: [
        "Safe spaces for sharing struggles",
        "Peer counseling circles",
        "Cultural adaptation guidance",
        "Mental health resources"
      ],
      color: "warmth"
    },
    {
      icon: Users,
      title: "Social Connection",
      subtitle: "Build meaningful relationships",
      features: [
        "Curated community events",
        "Interest-based groups",
        "Local & expat networking",
        "Friendship matching"
      ],
      color: "nordic-blue"
    },
    {
      icon: Briefcase,
      title: "Practical Integration",
      subtitle: "Navigate life admin with confidence",
      features: [
        "Bureaucracy navigation help",
        "Housing and banking support",
        "Career transition guidance",
        "Cultural integration workshops"
      ],
      color: "accent"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Three Pillars of{" "}
            <span className="text-transparent bg-clip-text gradient-warmth">
              Support
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A holistic approach to making Finland feel like home, addressing every aspect of your new life journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl border p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-${service.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-7 h-7 text-${service.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.subtitle}</p>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full bg-${service.color}`}></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className={`flex items-center gap-2 text-sm font-medium text-${service.color} group-hover:gap-3 transition-all duration-300`}>
                Learn more
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
