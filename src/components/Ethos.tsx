// import { ArrowRight } from "lucide-react";
import React from 'react';

import { Globe } from '@/components/magicui/globe';
// import { Button } from "@/components/ui/button";

const Ethos = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="bg-muted relative flex h-92 w-full flex-col justify-between overflow-hidden rounded-4xl border p-8 md:flex-row">
          <div className="flex h-full max-w-lg flex-col justify-center gap-4">
            <h1 className="text-4xl font-medium tracking-tighter md:text-6xl">ETHOS</h1>
            <h4 className="text-lg font-medium tracking-tighter md:text-xl">
              We believe technology should amplify, not replace, humanity.
            </h4>

            <p className="text-muted-foreground/70">
              ASIMOV is built by and for humans: a culture where intellectual honesty, openness, and
              real-world impact matter most. We champion diverse perspectives because we believe the
              best technology always serves and empowers people first.
            </p>
            {/* <Button
              variant="default"
              className="group relative z-99 w-fit !rounded-full border border-none bg-background px-10 tracking-tighter text-foreground !shadow-none hover:bg-background"
            >
              Join Today
              <ArrowRight className="ml-2 -rotate-45 rounded-full bg-foreground p-px text-background transition-all ease-in-out group-hover:rotate-0" />
            </Button> */}
          </div>
          <div className="relative size-full">
            <Globe className="absolute top-0 md:top-10 md:-right-100 md:scale-150" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Ethos };
