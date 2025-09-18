import { ExternalLink, Globe } from 'lucide-react';
import { FaXTwitter as Twitter, FaLinkedin as Linkedin, FaGithub as Github } from 'react-icons/fa6';
import { Fragment } from 'react';

import { Separator } from '@/components/ui/separator';
import { teamMembers, advisors } from '@/lib/members';

const TeamPage = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-5 lg:flex-row lg:gap-2">
          <div className="flex w-full max-w-56 items-center gap-3 text-sm">
            <span className="bg-primary size-2 rounded-full"></span>
            MEET THE TEAM
          </div>
          <div className="flex-1">
            <h2 className="text-3xl">
              The Minds Behind ASIMOV
              <br />
              <span className="text-primary/50">
                A diverse team of entrepreneurs, engineers, and visionaries united by a shared
                mission: building verifiable AI that serves humanity, not surveillance.
              </span>
            </h2>
          </div>
        </div>

        {/* Core Team */}
        <div className="mt-16">
          <h3 className="mb-8 text-2xl font-bold">Core Team</h3>
          <div className="grid gap-8 md:gap-12">
            {teamMembers.map((member, idx) => (
              <Fragment key={idx}>
                <div className="flex flex-col gap-8 lg:flex-row">
                  {/* Member Image */}
                  <div className="flex-shrink-0">
                    <div className="bg-muted h-48 w-48 overflow-hidden rounded-lg">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover brightness-100 grayscale"
                      />
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="flex-1">
                    <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h4 className="text-2xl font-bold">{member.name}</h4>
                        <p className="text-primary text-lg">{member.role}</p>
                      </div>

                      {/* Social Links */}
                      <div className="flex gap-3">
                        {member.links.twitter && (
                          <a
                            href={member.links.twitter}
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Twitter className="size-5" />
                          </a>
                        )}
                        {member.links.github && (
                          <a
                            href={member.links.github}
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Github className="size-5" />
                          </a>
                        )}
                        {member.links.linkedin && (
                          <a
                            href={member.links.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Linkedin className="size-5" />
                          </a>
                        )}
                        {member.links.website && (
                          <a
                            href={member.links.website}
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Globe className="size-5" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">{member.bio}</p>

                    {/* Highlights */}
                    <div>
                      <h5 className="mb-3 font-semibold">Key Highlights:</h5>
                      <ul className="space-y-2">
                        {member.highlights.map((highlight, highlightIdx) => (
                          <li key={highlightIdx} className="flex items-start gap-2">
                            <span className="bg-primary/20 mt-2 size-1.5 flex-shrink-0 rounded-full"></span>
                            <span className="text-muted-foreground text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {idx < teamMembers.length - 1 && <Separator className="my-8" />}
              </Fragment>
            ))}
          </div>
        </div>

        {/* Advisors */}
        <div className="mt-24">
          <h3 className="mb-8 text-2xl font-bold">Strategic Advisors</h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {advisors.map((advisor, idx) => (
              <div key={idx} className="group">
                <div className="bg-card/50 border-border hover:bg-card/80 h-full rounded-xl border p-6 transition-all duration-300">
                  {/* Advisor Image */}
                  <div className="bg-muted mb-4 flex h-20 w-20 items-center justify-center rounded-lg">
                    <span className="text-primary text-lg font-bold">
                      {advisor.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                  </div>

                  {/* Advisor Info */}
                  <div className="mb-4">
                    <h4 className="mb-1 text-lg font-bold">{advisor.name}</h4>
                    <p className="text-primary mb-1 text-sm font-medium">{advisor.role}</p>
                    <p className="text-primary/70 mb-3 text-xs font-medium">{advisor.title}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{advisor.bio}</p>
                  </div>

                  {/* Social Links */}
                  <div className="mt-auto flex gap-3">
                    {advisor.links.twitter && (
                      <a
                        href={advisor.links.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Twitter className="size-4" />
                      </a>
                    )}
                    {advisor.links.linkedin && (
                      <a
                        href={advisor.links.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Linkedin className="size-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-24 text-center">
          <div className="mx-auto max-w-3xl">
            <h3 className="mb-4 text-2xl font-bold">Join the Mission</h3>
            <p className="text-muted-foreground mb-8 text-lg">
              We&apos;re always looking for exceptional talent to join our team. If you&apos;re
              passionate about building the future of verifiable AI and decentralized knowledge
              systems, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 transition-colors"
              >
                Get in Touch
                <ExternalLink className="size-4" />
              </a>
              <a
                href="https://linkedin.com/company/asimov-systems"
                target="_blank"
                rel="noreferrer"
                className="border-border hover:bg-muted inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 transition-colors"
              >
                Follow on LinkedIn
                <Linkedin className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { TeamPage };
