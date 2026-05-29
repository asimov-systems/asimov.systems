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
          <h1 className="text-center text-3xl font-semibold lg:text-4xl">Investor introduction</h1>
          <p className="text-foreground mt-2 max-w-2xl text-center text-base font-medium lg:text-lg">
            Personal Intelligence at live events. Context graphs and provenance. A Protocol arc
            toward a decentralized marketplace.
          </p>
          <p className="text-muted-foreground mt-2 max-w-2xl text-center text-base lg:text-lg">
            This page reflects the tone of our materials. It is not the full deck: we do not publish
            detailed GTM, business model, or product roadmap on the open web. Serious partners reach
            the commercial founder for the complete story.
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
            Credits → token
          </span>
        </div>

        <div className="border-primary/25 bg-muted relative mx-auto mt-14 max-w-5xl overflow-hidden rounded-2xl border-2 p-6 shadow-[0_0_0_1px_rgba(243,112,33,0.08)] md:p-16">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#f37021] to-transparent"
            aria-hidden
          />
          <p className="text-primary text-center text-xs font-semibold tracking-[0.2em] uppercase">
            Teaser · request full deck
          </p>

          <h2 className="text-foreground mt-8 text-center text-2xl font-semibold md:text-3xl">
            Why now
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-center leading-relaxed">
            Fragmented tools create lost context and relationship decay. We are building ASIMOV PI
            so professionals own their relationship graph at live events, with context-graph
            intelligence on top and a staged path to a decentralized marketplace on the Protocol.
          </p>

          <blockquote className="text-foreground border-primary/40 mx-auto my-10 max-w-2xl border-l-4 pl-6 text-lg font-medium italic md:text-xl">
            Personal Intelligence will be as essential as the smartphone. We are starting where
            networks form: live events.
          </blockquote>

          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-foreground mb-3 text-lg font-semibold">What we have today</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Platform architecture, PI design, mobile prototype, event networking features, and a
                credit ledger. Selected for dAGI Accelerator (Delphi Labs, Cyber Fund), 8 of 500+
                teams. Invite-only validation with design partners at conferences and meetups.
              </p>
            </div>
            <div>
              <h3 className="text-foreground mb-3 text-lg font-semibold">
                What we share privately
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Full GTM detail, economics, and milestone planning live in the investor deck and
                data room, available on request. Publicly we confirm the staged arc: traction at
                events, institutional equity, token economics informed by credit velocity, and no
                fixed TGE date.
              </p>
            </div>
          </div>

          <h3 className="text-foreground mt-12 mb-3 text-center text-lg font-semibold">
            Staged arc (high level)
          </h3>
          <p className="text-muted-foreground mx-auto max-w-xl text-center text-sm">
            Product release → Traction → Institutional equity → Token economics → TGE. Timing
            follows network activity and lead investor alignment, not a calendar headline.
          </p>

          <div className="mt-12 flex flex-col items-center gap-4 border-t pt-10 sm:flex-row sm:justify-center">
            <div className="text-center sm:text-left">
              <p className="text-foreground font-semibold">Talal Thabet</p>
              <p className="text-muted-foreground text-sm">Commercial Founder, ASIMOV Systems</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="min-w-[200px]">
              <a
                href={idJoinInvestorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Join investor track
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
            Prefer email?{' '}
            <a href="mailto:investors@asimov.systems" className="text-primary hover:underline">
              investors@asimov.systems
            </a>
          </p>
          <p className="mt-6 text-center">
            <a
              href="/how-it-works"
              className="text-muted-foreground hover:text-foreground text-sm font-medium underline transition-colors"
            >
              See how it works (public overview)
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export { InvestorIntro };
