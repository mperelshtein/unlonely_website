
import { Heart, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Emotional Support",
      subtitle: "Your mental wellbeing matters",
      features: [
        "Safe spaces for sharing",
        "Peer support circles",
        "Cultural adaptation guidance"
      ],
      color: "warmth"
    },
    {
      icon: Users,
      title: "Community & Integration",
      subtitle: "Build connections and navigate life",
      features: [
        "Curated community events",
        "Bureaucracy navigation help",
        "Local networking opportunities"
      ],
      color: "nordic-blue"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            How We{" "}
            <span className="text-transparent bg-clip-text gradient-warmth">
              Support You
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full bg-${service.color}`}></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
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
