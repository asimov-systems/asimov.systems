import { Hash } from 'lucide-react';

// import { Avatar, AvatarImage } from "@/components/ui/avatar";

const InvestorIntro = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-1 text-sm font-semibold">
            <Hash className="fill-primary h-6 w-auto" />
            BuildOnTruth
          </div>
          <h2 className="text-center text-3xl font-semibold lg:text-4xl">
            Investor Form – ASIMOV Systems
          </h2>
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
            With limited space for investors in this strategic/pre-seed round, this short 2 minute
            form helps us understand your background, investment focus, and potential strategic fit.
            It ensures we can have the right conversation, with the right people, at the right time.
          </p>
          <p className="text-muted-foreground mt-6">
            Considering our privacy-first principle, your information stays explicitly private and
            confidential but helps us move faster in assessing fit and opportunity.
          </p>
          <p className="text-muted-foreground mt-6">
            The race for AI dominance is on but only a handful of companies will define the future.
            ASIMOV Systems is one of them.
          </p>
          <p className="text-muted-foreground mt-6">
            This is a chance to be part of what could become one of the most valuable intelligence
            infrastructures of the decade.
          </p>
          <p className="text-muted-foreground mt-6">
            We appreciate your time and interest—let’s #BuildOnTruth.
          </p>
          <p className="text-muted-foreground mt-6">
            Gratefully,
            <br />
            Talal Thabet - Commercial Founder
          </p>
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
