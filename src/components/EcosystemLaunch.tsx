import { ArrowRight, Blocks, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';

const EcosystemLaunch = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-muted-foreground text-sm font-semibold tracking-wide uppercase">
            One company, two doors in
          </p>
          <h2 className="font-calSans mt-2 text-3xl font-semibold md:text-4xl">
            Product today. Protocol for builders.
          </h2>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed">
            ASIMOV Systems is the launch point: the team, the thesis, and context-graph-based AI. Go
            deeper on the product, or join the ecosystem building on open protocol primitives.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="border-border bg-card/50 flex flex-col rounded-xl border p-6 md:p-8">
            <Sparkles className="text-primary mb-4 size-8" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold">ASIMOV PI</h3>
            <p className="text-muted-foreground mt-3 flex-1 text-sm leading-relaxed">
              Personal Intelligence for live events: own your relationship graph, selfie connect,
              scan the room, and context retrieval when networks form in the room.
            </p>
            <Button asChild variant="outline" className="mt-6 w-fit">
              <a href="/product" className="inline-flex items-center gap-2">
                Explore the product
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>

          <div className="border-border bg-card/50 flex flex-col rounded-xl border p-6 md:p-8">
            <Blocks className="text-primary mb-4 size-8" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold">ASIMOV Protocol</h3>
            <p className="text-muted-foreground mt-3 flex-1 text-sm leading-relaxed">
              Decentralized infrastructure for structured, verifiable knowledge. APIs, provenance,
              OSS repos, and a path to a marketplace where intelligence belongs to the individual.
            </p>
            <Button asChild variant="outline" className="mt-6 w-fit">
              <a href="/build" className="inline-flex items-center gap-2">
                Build on ASIMOV
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { EcosystemLaunch };
