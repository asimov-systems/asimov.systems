import { Github, Twitter, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const teamMembers = [
  {
    name: "Talal Thabet",
    role: "Commercial Founder",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",

    bio: "“I’ve seen how noise and hype derail great ideas. For me, commercial success isn’t just about big vision - but about turning it into real-world, trusted, actionable clarity and credibility.”",
    social: {
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Arto Bendiken",
    role: "Tech Founder",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",

    bio: "“For 25 years, I've built systems that respect knowledge, privacy, and agency. I'm building ASIMOV because intelligence without provenance is propaganda.”",
    social: {
      twitter: "#",
    },
  },
  {
    name: "Renan Khoury",
    role: "Head of HR & Talent",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",

    bio: "“I believe teams thrive when every person’s skill and story are valued. I’m here so the next wave of AI is built with human purpose, not just code.”",
    social: {
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Emma Rymer",
    role: "Head of Comms",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",

    bio: "“I’ve shaped stories across three continents and dozens of industries - if people can’t understand it or trust it, it doesn’t matter how clever your tech is.”",
    social: {
      twitter: "#",
    },
  },
  {
    name: "Reid Fletcher",
    role: "Head of Community",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",

    bio: "“Community is more than a KPI; it’s how ideas are stress-tested, improved, and made inclusive. That’s how real adoption happens.”",
    social: {
      twitter: "#",
    },
  },
  {
    name: "Stephen Cobb",
    role: "Senior AI Ethicist",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",

    bio: "“My career in safety and governance taught me: if you can't explain and defend a system, it will never serve everyone fairly.”",
    social: {
      twitter: "#",
    },
  },
];

const Team = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-col gap-6 py-4 lg:py-8">
          <Badge
            variant="outline"
            className="w-fit gap-1 bg-card px-3 text-sm font-normal tracking-tight shadow-sm"
          >
            <Users className="size-4" />
            <span>THE TEAM: Architects of Tomorrow</span>
          </Badge>
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl">
            Building the Future, Together
          </h2>
          <p className="max-w-[600px] tracking-[-0.32px] text-muted-foreground">
            Engineering Web3/AI protocols into tangible products for the next leap in clarity and trust. We are united by a common mission: to accelerate human insight through groundbreaking, human-centric technology. We are passionate about what we build, and we&apos;re building it today.
          </p>
        </div>

        <div className="mt-10 grid gap-x-12 gap-y-16 sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="group flex flex-col">
              <img
                src={member.image}
                alt={member.name}
                width={80}
                height={80}
                className="rounded-full object-contain"
              />
              <div className="mt-6 flex flex-col tracking-[-0.32px]">
                <h3 className="text-lg">{member.name}</h3>
                <p className="text-muted-foreground-subtle">{member.role}</p>
                <p className="mt-4 text-sm tracking-[-0.36px] text-muted-foreground italic">
                  {member.bio}
                </p>
                <div className="mt-6 flex gap-2">
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="hover:text-foreground"
                    >
                      <Twitter />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="hover:text-foreground"
                    >
                      <Github />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="py-32">
          <p className="text-center text-sm">Ready to build the future with us?</p>
          <div className="mt-4 flex items-center justify-between gap-4">
            <Separator className="shrink" />
            <Button size="lg" asChild>
              <a
                href="#top"
                // target="_blank"
                // rel="noreferrer"
              >
                Meet the Full Team
              </a>
            </Button>
            <Separator className="shrink" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Team };
