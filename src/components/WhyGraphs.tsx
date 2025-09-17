import { Network, Eye, Award, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react';

const WhyGraphs = () => {
  const features = [
    {
      icon: <Network />,
      title: 'Structured Data',
      description: 'Structures data for real context and meaning'
    },
    {
      icon: <Eye />,
      title: 'Transparent AI',
      description: 'Makes AI reasoning transparent'
    },
    {
      icon: <Award />,
      title: 'Fair Attribution',
      description: 'Enables attribution and fair rewards'
    },
    {
      icon: <ShieldCheck />,
      title: 'Error Reduction',
      description: 'Reduces hallucinations and errors'
    },
    {
      icon: <TrendingUp />,
      title: 'Verifiable Markets',
      description: 'Unlocks new markets for verifiable AI'
    },
    {
      icon: <Sparkles />,
      title: 'Next-Gen Innovation',
      description: 'For the next wave of AI innovation.'
    }
  ];

  return (
    <section className="bg-background py-32">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
            Why Knowledge Graphs?
          </h2>
          <p className="text-muted-foreground max-w-prose text-base md:text-lg">
            These tech pillars make verifiable knowledge possible. But what do we really mean by a
            &lsquo;knowledge graph&rsquo; - and why does it matter?
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
