import { ArrowRight } from 'lucide-react';

import { Globe } from '@/components/magicui/globe';
import { Meteors } from '@/components/magicui/meteors';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 overflow-hidden px-4 lg:px-6">
        <p className="text-muted-foreground">
          Built for people who want more clarity — and less chaos.
        </p>
        <h1 className="font-calSans max-w-3xl text-center text-6xl md:text-7xl">
          AI Tools for Thinking Better & Working Faster
        </h1>

        <Meteors number={30} />

        <Button
          variant="secondary"
          className="group text-md mt-10 flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
        >
          Get Started
          <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
        </Button>
        <div className="relative h-115 w-full overflow-y-clip">
          <Globe className="translate-y-40 scale-175" />
        </div>
      </div>
    </section>
  );
};

export { Hero };
