import { Hash, Zap, Shield, Layers, Rocket, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { idJoinInvestorUrl } from '@/lib/consts';

const InvestorIntro = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-col items-center gap-4">
          <p className="text-muted-foreground text-sm font-semibold tracking-wide">FOR INVESTORS</p>
          <div className="flex items-center gap-1 text-sm font-semibold">
            <Hash className="fill-primary h-6 w-auto" />
            BuildOnTruth
          </div>
          <h2 className="text-center text-3xl font-semibold lg:text-4xl">For investors</h2>
          <p className="text-foreground mt-2 max-w-2xl text-center text-base font-medium lg:text-lg">
            Personal Intelligence as a category. PI at live events. Protocol as the marketplace arc.
          </p>
          <p className="text-muted-foreground mt-2 max-w-2xl text-center text-base lg:text-lg">
            ASIMOV PI owns the relationship graph at live events, where we&apos;re focusing first.
            The ASIMOV Protocol is decentralized infrastructure for structured, verifiable
            knowledge. Vision unchanged: intelligence belongs to the individual; the marketplace
            emerges from real usage.
          </p>
        </div>

        <div className="border-border mx-auto mt-14 flex max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-4 border-y py-6">
          <span className="flex items-center gap-2 text-sm font-medium">
            <Zap className="text-primary size-4" />
            dAGI · 8 of 500+
          </span>
          <span className="flex items-center gap-2 text-sm font-medium">
            <Layers className="text-primary size-4" />
            PI + Protocol
          </span>
          <span className="flex items-center gap-2 text-sm font-medium">
            <Shield className="text-primary size-4" />
            Context graphs
          </span>
          <span className="flex items-center gap-2 text-sm font-medium">
            <Rocket className="text-primary size-4" />
            Credit → token path
          </span>
        </div>

        <div className="bg-muted mx-auto mt-14 max-w-5xl rounded-2xl p-6 md:p-20">
          <h3 className="text-foreground mb-4 text-lg font-semibold">Why we&apos;re building</h3>
          <p className="text-muted-foreground">
            Fragmented tools create lost context and relationship decay. We&apos;re building ASIMOV
            PI so professionals own their relationship graph, with intelligence on top, and a staged
            path to a decentralized data marketplace powered by the ASIMOV Protocol.
          </p>

          <blockquote className="text-foreground border-primary/30 my-8 border-l-4 pl-6 text-xl font-medium italic md:text-2xl">
            Personal Intelligence will be as essential as the smartphone. We&apos;re starting where
            networks form: live events.
          </blockquote>

          <h3 className="text-foreground mt-10 mb-4 text-lg font-semibold">
            What we&apos;ve built
          </h3>
          <p className="text-muted-foreground">
            Platform architecture, PI design, mobile prototype, event networking features, and a
            credit ledger. Selected for the dAGI Accelerator (Delphi Labs, Cyber Fund), 8 of 500+
            teams. Starting at conferences and events; invite-only validation with design partners.
          </p>

          <h3 className="text-foreground mt-10 mb-4 text-lg font-semibold">Roadmap</h3>
          <p className="text-muted-foreground">
            Product release → Traction → Institutional equity → Token economics → TGE. Token timing
            is tied to network activity and credit velocity, not a fixed calendar date.
          </p>

          <h3 className="text-foreground mt-10 mb-4 text-lg font-semibold">
            What we&apos;re looking for
          </h3>
          <p className="text-muted-foreground">
            Long-term partners who share our vision: PI at live events, Protocol as the marketplace,
            credits as the precursor to fair token economics.
          </p>

          <h3 className="text-foreground mt-10 mb-4 text-lg font-semibold">Next step</h3>
          <p className="text-muted-foreground">
            Join through our investor track. We&apos;ll know you came from this page and can reach
            out with materials. Request the deck anytime.
          </p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <div className="bg-muted-foreground/10 size-14 shrink-0 rounded-full" />
            <div>
              <p className="text-foreground font-semibold">Talal Thabet</p>
              <p className="text-muted-foreground text-sm">Commercial Founder, ASIMOV Systems</p>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="min-w-[200px]">
              <a
                href={idJoinInvestorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Join as investor
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-w-[200px]">
              <a
                href="mailto:investors@asimov.systems?subject=Investor%20deck%20request"
                className="inline-flex items-center gap-2"
              >
                <Mail className="size-4" />
                Request investor deck
              </a>
            </Button>
          </div>
          <p className="text-muted-foreground mt-4 text-center text-sm">
            We&apos;ll reach out from the investor track.
          </p>
          <p className="mt-6 text-center">
            <a
              href="/how-it-works"
              className="text-muted-foreground hover:text-foreground text-sm font-medium underline transition-colors"
            >
              See how it works →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export { InvestorIntro };
