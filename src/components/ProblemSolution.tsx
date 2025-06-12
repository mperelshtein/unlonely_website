
import { AlertCircle, CheckCircle, Shield, Users, Heart } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    {
      icon: AlertCircle,
      title: "No Emotional Safety",
      description: "Feeling isolated and vulnerable in a new country without trusted support systems"
    },
    {
      icon: Users,
      title: "No Tribe",
      description: "Struggling to find genuine connections and meaningful relationships with locals and fellow expats"
    },
    {
      icon: Heart,
      title: "No Peer Support",
      description: "Missing practical guidance and emotional understanding from people who've been through the same journey"
    }
  ];

  const solutions = [
    {
      icon: Shield,
      title: "Emotional Safety Network",
      description: "Create safe spaces where you can be vulnerable, share struggles, and receive genuine support"
    },
    {
      icon: Users,
      title: "Meaningful Community",
      description: "Connect with like-minded individuals who understand your journey and become lifelong friends"
    },
    {
      icon: CheckCircle,
      title: "Practical Integration",
      description: "Get real help with bureaucracy, cultural navigation, and practical life setup from experienced peers"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            From Lonely to{" "}
            <span className="text-transparent bg-clip-text gradient-warmth">
              Belonging
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We understand the unique challenges of starting over in Finland. Here's how we transform your experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Problems */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-center mb-8 text-destructive">
              The Struggle is Real
            </h3>
            {problems.map((problem, index) => (
              <div 
                key={index} 
                className="flex gap-4 p-6 bg-card rounded-xl border border-destructive/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <problem.icon className="w-6 h-6 text-destructive mt-1" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-destructive">{problem.title}</h4>
                  <p className="text-muted-foreground">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Solutions */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-center mb-8 text-nordic-blue">
              Your New Reality
            </h3>
            {solutions.map((solution, index) => (
              <div 
                key={index} 
                className="flex gap-4 p-6 bg-card rounded-xl border border-nordic-blue/20 animate-fade-in"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <solution.icon className="w-6 h-6 text-nordic-blue mt-1" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-nordic-blue">{solution.title}</h4>
                  <p className="text-muted-foreground">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
