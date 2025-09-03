import { Network, Shield, Workflow } from "lucide-react";

import { Separator } from "@/components/ui/separator";

const integrartions = [
  {
    title: "Verifiable Knowledge Graphs",
    description:
      "Grounding AI in facts, not hallucinations. Every response is rooted in structured, provable data, delivering clarity and context you can trust.",
    icon: Network,
  },
  {
    title: "Cryptographic Provenance",
    description:
      "On-chain proof of reasoning and source integrity. Every step, every reference is transparent, audit-ready, and tamper-proof.",
    icon: Shield,
  },
  {
    title: "Modular Agent Workflows",
    description:
      "Flexible systems that orchestrate tasks with logic and oversight. Automation is powerful—but humans stay in command.",
    icon: Workflow,
  },
];

const Solution = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid place-items-center items-center gap-4 lg:grid-cols-4 lg:gap-16">
          <h1 className="text-center text-4xl font-semibold text-balance lg:col-span-2 lg:text-left lg:text-5xl">
            The Solution:
            <br />
            Built for Speed, Trust, and Clarity
          </h1>
          <p className="text-center text-lg text-muted-foreground lg:col-span-2 lg:text-left">
            ASIMOV isn&apos;t another black-box AI. We&apos;re engineering intelligence that is fast, verifiable, and always under human control.
          </p>
        </div>
        <Separator className="mt-8 mb-12" />
        <ul className="grid grid-cols-1 gap-10 md:grid-cols-1 lg:grid-cols-3 lg:gap-20">
          {integrartions.map((integration, i) => {
            const IconComponent = integration.icon;
            return (
              <li key={i}>
                <div>
                  <IconComponent className="h-16 w-16 mb-4 text-primary" strokeWidth={1.5} />
                  <h3 className="my-2 text-2xl font-bold">{integration.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {integration.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export { Solution };
