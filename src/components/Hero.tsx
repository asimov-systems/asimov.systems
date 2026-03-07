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
          <p className="text-muted-foreground">THE MISSION & PROMISE</p>
          <h1 className="font-calSans max-w-3xl text-center text-3xl md:text-4xl">
            Our mission is to take our customers from <br />
            <i>cognitive overload to cognitive clarity.</i>
          </h1>
          <p className="text-muted-foreground max-w-2xl text-center text-sm md:text-base">
            <strong className="text-foreground">ASIMOV Personal Intelligence (PI)</strong>
            —privacy-first personal intelligence over your data—powered by the{' '}
            <strong className="text-foreground">ASIMOV Protocol</strong>.
          </p>
          <Button asChild className="mt-4">
            <a
              href={idJoinWaitlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Join early access
            </a>
          </Button>

          <Meteors number={30} />

          <div className="relative h-115 w-full overflow-y-clip">
            <Globe className="translate-y-40 scale-175" />
          </div>
        </div>
      </section>

      <section className="overflow-hidden py-32">
        <div className="container mx-auto w-full px-4 lg:px-6">
          <h1 className="text-muted-foreground/40 mt-10 text-center text-3xl font-semibold tracking-tight md:text-4xl">
            If you are anything like us, <Highlight className="px-1">tired</Highlight> of the{' '}
            <Highlight className="px-1">broken promises of AI</Highlight>, tired of the{' '}
            <Highlight className="px-1">lack of trust</Highlight>, and the data breaches, then you
            will be glad to know that <Highlight className="px-1">ASIMOV Systems</Highlight> has{' '}
            <Highlight className="px-1">redefined intelligence for the digital age.</Highlight>
            <br />
            We build breakthrough AI and Web3 solutions that cut through the noise, so human
            insight, context, and <Highlight className="px-1">confidence are never lost.</Highlight>
          </h1>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center">
            <h2 className="mt-12 text-2xl font-bold lg:text-3xl">
              In a world drowning in misinformation, we deliver what matters:
              <br />
              privacy, reliability, and truth.
            </h2>
            <div className="mt-20 grid justify-center gap-16 lg:grid-cols-3">
              <div className="max-w-md">
                <CheckCircle className="mx-auto mb-6 size-12" strokeWidth={1.5} />
                <h3 className="mb-4 text-2xl font-medium lg:text-2xl">No hallucinations</h3>
              </div>
              <div className="max-w-md">
                <Shield className="mx-auto mb-6 size-12" strokeWidth={1.5} />
                <h3 className="mb-4 text-2xl font-medium lg:text-2xl">No data leaks</h3>
              </div>
              <div className="max-w-md">
                <FileCheck className="mx-auto mb-6 size-12" strokeWidth={1.5} />
                <h3 className="mb-4 text-2xl font-medium lg:text-2xl">
                  Every insight backed by verifiable provenance
                </h3>
              </div>
            </div>
          </div>
          <p className="text-muted-foreground mt-12 text-xl">
            For individuals, ASIMOV puts the power of a personal intelligence agency right in their
            pocket.
          </p>

          <p className="text-muted-foreground mt-12 text-xl">
            For enterprise, we deploy proven companion tools that sharpen employee insight,
            supercharge productivity, and give leaders the confidence to act on trusted knowledge
            with cognitive clarity.
          </p>

          <p className="text-muted-foreground mt-12 text-xl">
            ASIMOV is intelligence you can trust. You can{' '}
            <Highlight className="px-1">#BuildOnTruth</Highlight>
          </p>
        </div>
      </section>
    </>
  );
};

export { Hero };
