import { MessagesSquare, Users, Briefcase, Share2 } from 'lucide-react';
import { FaXTwitter, FaLinkedin, FaGithub } from 'react-icons/fa6';

import { socialLinks } from '@/lib/consts';

const GetInTouch = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center">
          <h1 className="mb-7 text-4xl font-bold md:text-6xl">Join Us on the Journey</h1>
          <p className="text-muted-foreground mt-4 text-sm">
            Investing in PI, building on Protocol, or joining early access at live events? We&apos;d
            love to hear from you.
          </p>
        </div>
        <div className="mt-28 grid gap-16 md:grid-cols-2">
          <div>
            <MessagesSquare className="mb-5 h-8 w-auto" />
            <p className="mb-2 font-bold md:text-xl">Contact Us</p>
            <p className="text-muted-foreground mb-6 text-sm md:text-base">
              Questions about early access, events, or the product? Our team is here to help.
            </p>
            <a href="/contact" className="font-semibold underline">
              Contact support
            </a>
          </div>
          <div>
            <Users className="mb-5 h-8 w-auto" />
            <p className="mb-2 font-bold md:text-xl">Investor Relations</p>
            <p className="text-muted-foreground mb-6 text-sm md:text-base">
              PI at live events, Protocol marketplace arc, credit economy, and staged roadmap. Join
              the investor track or request the deck.
            </p>
            <a href="/investors" className="font-semibold underline">
              Investor portal
            </a>
          </div>
          <div>
            <Briefcase className="mb-5 h-8 w-auto" />
            <p className="mb-2 font-bold md:text-xl">Talent</p>
            <p className="text-muted-foreground mb-6 text-sm md:text-base">
              Building Personal Intelligence and verifiable knowledge infrastructure. Send your
              resume if you share our vision.
            </p>
            <a href="mailto:talent@asimov.systems" className="font-semibold underline">
              Join our team
            </a>
          </div>
          <div>
            <Share2 className="mb-5 h-8 w-auto" />
            <p className="mb-2 font-bold md:text-xl">Follow us</p>
            <p className="text-muted-foreground mb-6 text-sm md:text-base">
              News on PI, event launches, and Protocol updates from ASIMOV Systems.
            </p>
            <div className="flex gap-4">
              {[
                { icon: FaXTwitter, link: socialLinks.twitter },
                { icon: FaLinkedin, link: socialLinks.linkedin },
                { icon: FaGithub, link: socialLinks.github }
              ].map(({ icon: Icon, link }) => (
                <a
                  key={link}
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { GetInTouch };
