import { Button } from '@/components/ui/button';
import { Globe } from '@/components/magicui/globe';
import { Meteors } from '@/components/magicui/meteors';
import { idJoinWaitlistUrl } from '@/lib/consts';

const Hero = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 overflow-hidden px-4 lg:px-6">
        <p className="text-muted-foreground text-sm font-semibold tracking-wide uppercase">
          ASIMOV Systems
        </p>
        <h1 className="font-calSans max-w-3xl text-center text-3xl md:text-4xl lg:text-5xl">
          A small team building <i>context-graph AI</i> people can trust.
        </h1>
        <p className="text-foreground max-w-2xl text-center text-sm md:text-base">
          We are building Personal Intelligence and open protocol infrastructure: structured
          relationship graphs, verifiable provenance, and intelligence that belongs to the
          individual. This site is the front door for the company, the PI product, and the builder
          ecosystem.
        </p>
        <p className="text-muted-foreground mt-2 text-center text-xs tracking-wider uppercase">
          dAGI Accelerator · 8 of 500+ teams selected
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <a
              href={idJoinWaitlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Join early access
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="/product" className="inline-flex items-center gap-2">
              ASIMOV PI
            </a>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <a href="/build" className="inline-flex items-center gap-2">
              Build on Protocol
            </a>
          </Button>
        </div>

        <Meteors number={30} />

        <div className="relative h-115 w-full overflow-y-clip">
          <Globe className="translate-y-40 scale-175" />
        </div>
      </div>
    </section>
  );
};

export { Hero };
