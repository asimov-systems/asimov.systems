import { Shield, CheckCircle, FileCheck } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Globe } from '@/components/magicui/globe';
import { Meteors } from '@/components/magicui/meteors';
import { idJoinWaitlistUrl } from '@/lib/consts';

const Highlight = ({
  children,
  className = ''
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <span className={`text-black dark:text-white ${className}`}>{children}</span>;
};

const Hero = () => {
  return (
    <>
      <section className="py-32">
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 overflow-hidden px-4 lg:px-6">
          <p className="text-muted-foreground">PERSONAL INTELLIGENCE</p>
          <h1 className="font-calSans max-w-3xl text-center text-3xl md:text-4xl">
            Own your <i>relationship graph.</i>
            <br />
            Never lose context again.
          </h1>
          <p className="text-foreground max-w-2xl text-center text-sm md:text-base">
            <strong className="text-foreground">ASIMOV Personal Intelligence (PI)</strong> is your
            built for live networking at conferences and events, with a relationship graph you
            control. The longer arc is a{' '}
            <strong className="text-foreground">decentralized marketplace</strong> for structured,
            verifiable knowledge, powered by the{' '}
            <strong className="text-foreground">ASIMOV Protocol</strong>.
          </p>
          <p className="text-muted-foreground mt-2 text-center text-xs tracking-wider uppercase">
            dAGI Accelerator · 8 of 500+ teams selected
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <Button asChild>
              <a
                href={idJoinWaitlistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Join early access
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="/product" className="inline-flex items-center gap-2">
                Explore ASIMOV PI
              </a>
            </Button>
          </div>

          <Meteors number={30} />

          <div className="relative h-115 w-full overflow-y-clip">
            <Globe className="translate-y-40 scale-175" />
          </div>
        </div>
      </section>

      <section className="overflow-hidden py-32">
        <div className="container mx-auto w-full px-4 lg:px-6">
          <h1 className="text-muted-foreground/40 mt-10 text-center text-3xl font-semibold tracking-tight md:text-4xl">
            Fragmented tools mean <Highlight className="px-1">lost context</Highlight> and{' '}
            <Highlight className="px-1">relationship decay.</Highlight> ASIMOV PI gives you{' '}
            <Highlight className="px-1">ownership of your relationship graph</Highlight>, with
            intelligence on top: who introduced you, what you last discussed, who to speak to next,
            and where they&apos;ll be.
            <br />
            <span className="text-muted-foreground/60 mt-4 block text-2xl font-normal md:text-3xl">
              Personal Intelligence will be as essential as the smartphone. We&apos;re building it
              now, starting where networks form: live events.
            </span>
          </h1>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center">
            <h2 className="mt-12 text-2xl font-bold lg:text-3xl">
              Context graphs, not just prediction.
              <br />
              Verifiable provenance. Local-first by design.
            </h2>
            <div className="mt-20 grid justify-center gap-16 lg:grid-cols-3">
              <div className="max-w-md">
                <CheckCircle className="mx-auto mb-6 size-12" strokeWidth={1.5} />
                <h3 className="mb-4 text-2xl font-medium lg:text-2xl">Context you can trace</h3>
                <p className="text-muted-foreground text-sm">
                  Every connection and insight ties back to your graph, not a black-box guess.
                </p>
              </div>
              <div className="max-w-md">
                <Shield className="mx-auto mb-6 size-12" strokeWidth={1.5} />
                <h3 className="mb-4 text-2xl font-medium lg:text-2xl">Privacy by design</h3>
                <p className="text-muted-foreground text-sm">
                  Local-first architecture. Your relationship data stays under your control.
                </p>
              </div>
              <div className="max-w-md">
                <FileCheck className="mx-auto mb-6 size-12" strokeWidth={1.5} />
                <h3 className="mb-4 text-2xl font-medium lg:text-2xl">Verifiable provenance</h3>
                <p className="text-muted-foreground text-sm">
                  Structured, auditable knowledge: the foundation for a fair data marketplace.
                </p>
              </div>
            </div>
          </div>
          <p className="text-foreground mt-12 text-xl">
            Intelligence belongs to the individual. You start with ASIMOV PI; the ASIMOV Protocol is
            the path to a decentralized marketplace where knowledge is structured, verifiable, and
            fairly attributed.
          </p>

          <p className="text-muted-foreground mt-12 text-xl">
            We&apos;re focusing first on live networking at conferences and events, where a mobile
            prototype delivers wow moments: selfie connect, scan the room, camera context retrieval,
            and discover who&apos;s in the room.
          </p>

          <p className="text-foreground mt-12 text-xl">
            ASIMOV is intelligence you can trust. You can{' '}
            <Highlight className="px-1">#BuildOnTruth</Highlight>
          </p>
        </div>
      </section>
    </>
  );
};

export { Hero };
