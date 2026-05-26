import { Network, Eye, Award, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react';

const WhyGraphs = () => {
  const features = [
    {
      icon: <Network />,
      title: 'Context Graphs',
      description: 'Relationship and knowledge graphs, not flat predictions'
    },
    {
      icon: <Eye />,
      title: 'Transparent Reasoning',
      description: 'See how connections and insights are derived'
    },
    {
      icon: <Award />,
      title: 'Fair Attribution',
      description: 'Credit introductions and compensate attention'
    },
    {
      icon: <ShieldCheck />,
      title: 'Verifiable Knowledge',
      description: 'Structured data with cryptographic provenance'
    },
    {
      icon: <TrendingUp />,
      title: 'Network Effects',
      description: 'Usage compounds into a decentralized marketplace'
    },
    {
      icon: <Sparkles />,
      title: 'Personal Intelligence',
      description: 'A category as essential as the smartphone'
    }
  ];

  return (
    <section className="bg-background py-32">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
            Why Context Graphs?
          </h2>
          <p className="text-muted-foreground max-w-prose text-base md:text-lg">
            These pillars power the ASIMOV Protocol and the Personal Context Graph behind ASIMOV PI.
            Context graphs are how we move beyond black-box AI to intelligence you own: who
            introduced you, what you discussed, and where your network is heading next.
          </p>
        </div>

        <div className="border-border bg-card/50 mt-8 rounded-xl border px-6 py-8 md:px-10 md:py-12">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              return (
                <li key={index} className="flex items-start gap-3">
                  <div className="bg-primary/10 flex size-10 shrink-0 items-center justify-center rounded-sm p-2">
                    {feature.icon}
                  </div>
                  <div>
                    <p className="font-medium">{feature.title}</p>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { WhyGraphs };
