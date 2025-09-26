import { Users, Globe } from 'lucide-react';
import { FaXTwitter as Twitter, FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa6';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { teamMembers } from '@/lib/members';

const members = teamMembers.filter((member) => member?.quote);

const Team = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 lg:px-6">
        <div id="team" className="flex flex-col gap-6 py-4 lg:py-8">
          <Badge
            variant="outline"
            className="bg-card w-fit gap-1 px-3 text-sm font-normal tracking-tight shadow-sm"
          >
            <Users className="size-4" />
            <span>THE TEAM: Architects of Tomorrow</span>
          </Badge>
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl">
            Building the Future, Together
          </h2>
          <p className="text-muted-foreground max-w-[600px] tracking-[-0.32px]">
            Engineering Web3/AI protocols into tangible products for the next leap in clarity and
            trust. We are united by a common mission: to accelerate human insight through
            groundbreaking, human-centric technology. We are passionate about what we build, and
            we&apos;re building it today.
          </p>
        </div>

        <div className="mt-10 grid gap-x-12 gap-y-16 sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
          {members.map((member) => (
            <div key={member.name} className="group flex flex-col">
              <img
                src={member.image}
                alt={member.name}
                width={80}
                height={80}
                className="rounded-full object-contain brightness-100 grayscale"
              />
              <div className="mt-6 flex flex-col tracking-[-0.32px]">
                <h3 className="text-lg">{member.name}</h3>
                <p className="text-muted-foreground-subtle">{member.role}</p>
                <p className="text-muted-foreground mt-4 text-sm tracking-[-0.36px] italic">
                  {member.quote}
                </p>
                <div className="mt-6 flex gap-2">
                  {member.links.twitter && (
                    <a
                      href={member.links.twitter}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-foreground"
                    >
                      <Twitter className="size-5" />
                    </a>
                  )}
                  {member.links.github && (
                    <a
                      href={member.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-foreground"
                    >
                      <Github className="size-5" />
                    </a>
                  )}
                  {member.links.linkedin && (
                    <a
                      href={member.links.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-foreground"
                    >
                      <Linkedin className="size-5" />
                    </a>
                  )}
                  {member.links.website && (
                    <a
                      href={member.links.website}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-foreground"
                    >
                      <Globe className="size-5" />
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
              <a href="/team">Meet the Full Team</a>
            </Button>
            <Separator className="shrink" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Team };
