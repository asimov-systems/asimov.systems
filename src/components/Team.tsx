import { Users } from 'lucide-react';
import { FaXTwitter as Twitter, FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa6';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { teamMembers } from '@/lib/members';

const founders = teamMembers.filter((member) =>
  ['Talal Thabet', 'Arto Bendiken'].includes(member.name)
);

const Team = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <div id="team" className="flex max-w-2xl flex-col gap-4">
          <Badge
            variant="outline"
            className="bg-card w-fit gap-1 px-3 text-sm font-normal tracking-tight shadow-sm"
          >
            <Users className="size-4" />
            <span>The team</span>
          </Badge>
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl">
            A small team behind a large arc
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            ASIMOV Systems is intentionally lean: commercial and technical founders plus a focused
            group across product, protocol, and operations. Capital goes to shipping PI at live
            events and hardening context-graph infrastructure, not headcount for its own sake.
          </p>
        </div>

        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          {founders.map((member) => (
            <div key={member.name} className="flex gap-5">
              <img
                src={member.image}
                alt={member.name}
                width={72}
                height={72}
                className="size-16 rounded-full object-cover brightness-100 grayscale"
              />
              <div>
                <h3 className="text-lg font-medium">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
                {member.quote && (
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed italic">
                    {member.quote}
                  </p>
                )}
                <div className="mt-3 flex gap-2">
                  {member.links.twitter && (
                    <a
                      href={member.links.twitter}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-foreground"
                      aria-label={`${member.name} on X`}
                    >
                      <Twitter className="size-4" />
                    </a>
                  )}
                  {member.links.github && (
                    <a
                      href={member.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-foreground"
                      aria-label={`${member.name} on GitHub`}
                    >
                      <Github className="size-4" />
                    </a>
                  )}
                  {member.links.linkedin && (
                    <a
                      href={member.links.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-foreground"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <Linkedin className="size-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground mt-10 max-w-xl text-sm">
          Full team and advisors on the team page. We are hiring selectively as milestones land.
        </p>
        <Button variant="link" className="mt-2 h-auto px-0" asChild>
          <a href="/team">Meet everyone →</a>
        </Button>
      </div>
    </section>
  );
};

export { Team };
