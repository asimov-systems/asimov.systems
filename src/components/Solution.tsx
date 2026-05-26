import { Network, Shield, Workflow } from 'lucide-react';

import { Separator } from '@/components/ui/separator';

const integrartions = [
  {
    title: 'Context Graphs',
    description:
      'Not just statistical prediction: structured relationship and knowledge graphs that preserve who, what, when, and where. The intelligence layer on top of your network.',
    icon: Network
  },
  {
    title: 'Verifiable Provenance',
    description:
      'Every connection and contribution traceable. Cryptographic integrity for structured knowledge, the substrate for a fair data marketplace.',
    icon: Shield
  },
  {
    title: 'Local-First Privacy',
    description:
      'Privacy by design. Your relationship graph and personal context stay under your control while the Protocol powers shared, verifiable public knowledge.',
    icon: Workflow
  }
];

const Solution = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid place-items-center items-center gap-4 lg:grid-cols-4 lg:gap-16">
          <h1 className="text-center text-4xl font-semibold text-balance lg:col-span-2 lg:text-left lg:text-5xl">
            The Solution:
            <br />
            PI Today, Marketplace Tomorrow
          </h1>
          <p className="text-muted-foreground text-center text-lg lg:col-span-2 lg:text-left">
            The marketplace emerges from real usage.{' '}
            <strong className="text-foreground font-medium">ASIMOV PI</strong> is built first for
            live event networking, with a relationship graph you own. The{' '}
            <strong className="text-foreground font-medium">ASIMOV Protocol</strong> is the longer
            arc: decentralized infrastructure for structured, verifiable knowledge where
            intelligence belongs to the individual.
          </p>
        </div>
        <Separator className="mt-8 mb-12" />
        <ul className="grid grid-cols-1 gap-10 md:grid-cols-1 lg:grid-cols-3 lg:gap-20">
          {integrartions.map((integration, i) => {
            const IconComponent = integration.icon;
            return (
              <li key={i}>
                <div>
                  <IconComponent className="text-primary mb-4 h-16 w-16" strokeWidth={1.5} />
                  <h3 className="my-2 text-2xl font-bold">{integration.title}</h3>
                  <p className="text-muted-foreground text-sm">{integration.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export { Solution };
