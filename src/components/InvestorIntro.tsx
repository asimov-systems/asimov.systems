import { Hash } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { idJoinInvestorUrl } from '@/lib/consts';

const InvestorIntro = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-1 text-sm font-semibold">
            <Hash className="fill-primary h-6 w-auto" />
            BuildOnTruth
          </div>
          <h2 className="text-center text-3xl font-semibold lg:text-4xl">For investors</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl text-center text-base lg:text-lg">
            &quot;Palantir in your pocket&quot;—privacy-first personal intelligence. ASIMOV Personal
            Intelligence (PI) is our first product on the ASIMOV Protocol and our revenue driver;
            the Protocol is the infrastructure.
          </p>
          {/* <p className="text-center text-muted-foreground lg:text-lg">
            Join a global network of thought leaders, product developers,
          </p> */}
        </div>
        <div className="bg-muted mx-auto mt-20 max-w-5xl rounded-2xl p-6 md:p-20">
          {/* <div className="mb-6 flex gap-1">
            <Star className="size-5 fill-amber-500 text-amber-500" />
            <Star className="size-5 fill-amber-500 text-amber-500" />
            <Star className="size-5 fill-amber-500 text-amber-500" />
            <Star className="size-5 fill-amber-500 text-amber-500" />
            <Star className="size-5 fill-amber-500 text-amber-500" />
          </div> */}
          {/* <q className="text-2xl font-semibold md:text-4xl">
            Thank you for your interest in ASIMOV’s Personal Intelligence layer, built by the venture ASIMOV Systems Inc. We're building something ambitious which will meet market needs. If Palantir and OpenAI had a child born into Web3, it would be ASIMOV!
          </q> */}
          <p className="text-muted-foreground">
            Thank you for your interest in ASIMOV&apos;s Personal Intelligence layer, built by the
            venture ASIMOV Systems Inc. We&apos;re building something ambitious which will meet
            market needs. If Palantir and OpenAI had a child born into Web3, it would be ASIMOV!
          </p>
          <p className="text-muted-foreground mt-6">
            We&apos;re looking to partner with investors who share our long-term vision and values.
          </p>
          <p className="text-muted-foreground mt-6">
            Sign up through our join system below—same flow as the main waitlist, but we&apos;ll
            know you came from the investor page so we have what we need to reach out. If we need
            any extra details from investors, we may collect them there.
          </p>
          <p className="text-muted-foreground mt-6">
            The race for AI dominance is on but only a handful of companies will define the future.
            ASIMOV Systems is one of them. We appreciate your time and interest—let&apos;s
            #BuildOnTruth.
          </p>
          <p className="text-muted-foreground mt-6">
            Gratefully,
            <br />
            Talal Thabet - Commercial Founder
          </p>
          <div className="mt-10 flex justify-center">
            <Button asChild size="lg">
              <a
                href={idJoinInvestorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Join as investor
              </a>
            </Button>
          </div>
          {/* <div className="mt-6 flex gap-4">
            <Avatar className="size-14 rounded-full ring-1 ring-input">
              <AvatarImage
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                alt="placeholder"
              />
            </Avatar>
            <div>
              <p className="font-medium">Emily Johnson</p>
              <p className="text-sm text-muted-foreground">CEO at @company</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export { InvestorIntro };
