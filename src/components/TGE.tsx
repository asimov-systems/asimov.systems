import { Receipt, Users, Key } from 'lucide-react';

const TGE = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto flex flex-col gap-28 px-4 lg:px-6">
        <div className="flex flex-col gap-7">
          <h1 className="text-4xl font-semibold lg:text-7xl">
            Credit Economy First. Token When the Network Is Ready.
          </h1>
          <p className="max-w-xl text-lg">
            Introductions, attention, and connections have value. Our credit ledger rewards real
            network activity today, and will inform token economics when usage and velocity justify
            a TGE. No fixed token launch date.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <img
            src="/tge/tge_image.jpg"
            alt="ASIMOV credit economy and token roadmap"
            className="size-full max-h-96 rounded-2xl object-cover"
          />
          <div className="bg-muted flex flex-col justify-between gap-10 rounded-2xl p-10">
            <p className="text-muted-foreground text-sm">TOKEN &amp; CREDITS</p>
            <p className="text-lg font-medium">
              Credits compensate introductions and reward connections: a centralized ledger in early
              phases that maps to future token design. The ASIMOV Token will align incentives across
              Protocol and PI when network activity, credit velocity, and lead-investor readiness
              converge. ASIMOV Systems is not issuing securities; this is utility and ecosystem
              alignment, subject to applicable law.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-20">
          <div className="max-w-xl">
            <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">What Credits Enable Now</h2>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="flex flex-col">
              <div className="bg-accent mb-5 flex size-12 items-center justify-center rounded-2xl">
                <Receipt className="size-5" />
              </div>
              <h3 className="mt-2 mb-3 text-lg font-semibold">Reward Connections</h3>
              <p className="text-muted-foreground">
                Introductions and attention earn credits.{' '}
                <b>Compensate the people who move your network forward</b>, not platforms that
                harvest your graph.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="bg-accent mb-5 flex size-12 items-center justify-center rounded-2xl">
                <Users className="size-5" />
              </div>
              <h3 className="mt-2 mb-3 text-lg font-semibold">Informed Token Design</h3>
              <p className="text-muted-foreground">
                Real usage data from the credit ledger shapes token economics.{' '}
                <b>TGE follows traction</b>: product release, network effects, institutional equity,
                then token economics.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="bg-accent mb-5 flex size-12 items-center justify-center rounded-2xl">
                <Key className="size-5" />
              </div>
              <h3 className="mt-2 mb-3 text-lg font-semibold">Path to Marketplace</h3>
              <p className="text-muted-foreground">
                Live events → traction → PI expansion → network effects →{' '}
                <b>decentralized data marketplace</b> for structured, verifiable knowledge.
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-muted-foreground mb-10 text-sm font-medium">ROADMAP</p>
            <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">Staged, not rushed</h2>
            <p className="text-muted-foreground">
              Product release → Traction → Institutional equity → Token economics → TGE. Join early
              access to participate in the credit economy as we build.
            </p>
          </div>
          <div>
            <img
              src="/tge/community_image.jpg"
              alt="ASIMOV community"
              className="mb-6 max-h-36 w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { TGE };
