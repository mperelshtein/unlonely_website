
import { AlertCircle, CheckCircle } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    {
      icon: AlertCircle,
      title: "Feeling Isolated",
      description: "Starting life in Finland without trusted support or meaningful connections"
    }
  ];

  const solutions = [
    {
      icon: CheckCircle,
      title: "Find Your Community",
      description: "Connect with like-minded people who understand your journey and become genuine friends"
    }
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            From Lonely to Belonging
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Problems */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center mb-6 text-foreground">
              The Struggle
            </h3>
            {problems.map((problem, index) => (
              <div 
                key={index} 
                className="flex gap-4 p-6 bg-card rounded-xl border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <problem.icon className="w-6 h-6 text-foreground mt-1" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">{problem.title}</h4>
                  <p className="text-foreground">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center mb-6 text-foreground">
              Your Solution
            </h3>
            {solutions.map((solution, index) => (
              <div 
                key={index} 
                className="flex gap-4 p-6 bg-card rounded-xl border animate-fade-in"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <solution.icon className="w-6 h-6 text-foreground mt-1" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">{solution.title}</h4>
                  <p className="text-foreground">{solution.description}</p>
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
