import { Receipt, Users, Key } from 'lucide-react';

const TGE = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto flex flex-col gap-28 px-4 lg:px-6">
        <div className="flex flex-col gap-7">
          <h1 className="text-4xl font-semibold lg:text-7xl">
            Aligning Incentives for Verifiable Intelligence
          </h1>
          <p className="max-w-xl text-lg">
            Your data is now monetizable to you, not just big tech.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <img
            src="/tge/tge_image.jpg"
            alt="placeholder"
            className="size-full max-h-96 rounded-2xl object-cover"
          />
          <div className="bg-muted flex flex-col justify-between gap-10 rounded-2xl p-10">
            <p className="text-muted-foreground text-sm">TGE</p>
            <p className="text-lg font-medium">
              The ASIMOV Token is a utility token designed to power participation and alignment
              within the ASIMOV ecosystem. It is pre-TGE (Token Generation Event) and exists solely
              to enable utility, access, and engagement across our platform. ASIMOV Systems is not
              issuing securities, nor does the company assume any liability or risk under SEC
              frameworks.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-20">
          <div className="max-w-xl">
            <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">What the Token Enables</h2>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="flex flex-col">
              <div className="bg-accent mb-5 flex size-12 items-center justify-center rounded-2xl">
                <Receipt className="size-5" />
              </div>
              <h3 className="mt-2 mb-3 text-lg font-semibold">Traceable Rewards</h3>
              <p className="text-muted-foreground">
                Every verified contribution is credited and compensated.{' '}
                <b>Provenance is immutably tracked</b>, ensuring recognition and accountability
                across the network.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="bg-accent mb-5 flex size-12 items-center justify-center rounded-2xl">
                <Users className="size-5" />
              </div>
              <h3 className="mt-2 mb-3 text-lg font-semibold">Aligned Governance</h3>
              <p className="text-muted-foreground">
                Token holders shape ecosystem priorities.{' '}
                <b>Transparency, integrity, and user control</b> aren&apos;t optional—they&apos;re
                hard-coded into governance.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="bg-accent mb-5 flex size-12 items-center justify-center rounded-2xl">
                <Key className="size-5" />
              </div>
              <h3 className="mt-2 mb-3 text-lg font-semibold">True Access</h3>
              <p className="text-muted-foreground">
                The token isn&apos;t just for consumption. It <b>unlocks participation</b> —
                empowering users, contributors, and enterprises to build and steer trustworthy AI
                together.
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-muted-foreground mb-10 text-sm font-medium">OUR COMMUNITY</p>
            <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">Join the community</h2>
            <p className="text-muted-foreground">
              Be first to know when the world&apos;s first provenance-driven AI token launches.
            </p>
          </div>
          <div>
            <img
              src="/tge/community_image.jpg"
              alt="placeholder"
              className="mb-6 max-h-36 w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { TGE };
