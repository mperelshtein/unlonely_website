
import { AlertCircle, CheckCircle } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    {
      icon: AlertCircle,
      title: "Feeling Isolated",
      description: "Starting life in Finland without trusted support or meaningful connections"
    },
    {
      icon: AlertCircle,
      title: "Overwhelmed by Bureaucracy",
      description: "Navigating Finnish systems and culture without guidance from experienced peers"
    }
  ];

  const solutions = [
    {
      icon: CheckCircle,
      title: "Find Your Community",
      description: "Connect with like-minded people who understand your journey and become genuine friends"
    },
    {
      icon: CheckCircle,
      title: "Get Practical Support",
      description: "Receive real help with integration, bureaucracy, and cultural navigation from experienced peers"
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
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Problems */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-center mb-8 text-destructive">
              The Struggle
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
              Your Solution
            </h3>
            {solutions.map((solution, index) => (
              <div 
                key={index} 
                className="flex gap-4 p-6 bg-card rounded-xl border border-nordic-blue/20 animate-fade-in"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
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
