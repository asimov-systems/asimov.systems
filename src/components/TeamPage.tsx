import { ExternalLink } from 'lucide-react';
import { FaXTwitter as Twitter, FaLinkedin as Linkedin, FaGithub as Github } from 'react-icons/fa6';
import { Fragment } from 'react';

import { Separator } from '@/components/ui/separator';
import { teamMembers, advisors } from '@/lib/members';
import { socialLinks } from '@/lib/consts';

const TeamPage = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-2xl">
          <p className="text-muted-foreground text-sm font-semibold tracking-wide uppercase">
            Team
          </p>
          <h1 className="font-calSans mt-2 text-3xl font-semibold md:text-4xl">Who we are</h1>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            A small, senior group building context-graph-based Personal Intelligence and protocol
            infrastructure. We stay lean so funding translates into product at live events and
            verifiable knowledge systems, not a bloated org chart.
          </p>
        </div>

        <div className="mt-14 space-y-12">
          {teamMembers.map((member, idx) => (
            <Fragment key={member.name}>
              <div className="flex flex-col gap-6 md:flex-row md:gap-10">
                <img
                  src={member.image}
                  alt={member.name}
                  className="size-24 shrink-0 rounded-lg object-cover brightness-100 grayscale md:size-28"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h2 className="text-xl font-semibold">{member.name}</h2>
                      <p className="text-primary text-sm font-medium">{member.role}</p>
                    </div>
                    <div className="flex gap-3">
                      {member.links.twitter && (
                        <a
                          href={member.links.twitter}
                          target="_blank"
                          rel="noreferrer"
                          className="text-muted-foreground hover:text-primary"
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
                          className="text-muted-foreground hover:text-primary"
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
                          className="text-muted-foreground hover:text-primary"
                          aria-label={`${member.name} on LinkedIn`}
                        >
                          <Linkedin className="size-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-4 text-sm leading-relaxed">{member.bio}</p>
                  {member.highlights.length > 0 && (
                    <ul className="text-muted-foreground mt-4 space-y-1.5 text-sm">
                      {member.highlights.slice(0, 3).map((highlight) => (
                        <li key={highlight} className="flex gap-2">
                          <span className="bg-primary/40 mt-2 size-1 shrink-0 rounded-full" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              {idx < teamMembers.length - 1 && <Separator />}
            </Fragment>
          ))}
        </div>

        {advisors.length > 0 && (
          <div className="mt-20">
            <h2 className="text-xl font-semibold">Advisors</h2>
            <p className="text-muted-foreground mt-2 max-w-xl text-sm">
              Strategic advisors who help on protocol, markets, and go-to-market judgment.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {advisors.map((advisor) => (
                <div key={advisor.name} className="border-border rounded-lg border p-5">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="size-14 rounded-lg object-cover brightness-100 grayscale"
                  />
                  <h3 className="mt-4 font-medium">{advisor.name}</h3>
                  <p className="text-primary text-xs font-medium">{advisor.role}</p>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {advisor.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="border-border mt-16 rounded-xl border p-6 text-center md:p-8">
          <h2 className="text-lg font-semibold">Work with us</h2>
          <p className="text-muted-foreground mx-auto mt-2 max-w-lg text-sm">
            We hire for PI, protocol, and operations when the roadmap needs it. Reach out if you
            want to build verifiable intelligence with a small team.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="/contact"
              className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium"
            >
              Contact
              <ExternalLink className="size-4" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="border-border hover:bg-muted inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium"
            >
              LinkedIn
              <Linkedin className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { TeamPage };
