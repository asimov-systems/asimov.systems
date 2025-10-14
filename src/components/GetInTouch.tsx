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
            Whether you&apos;re an investor, a developer, or a future user seeking cognitive
            clarity, we&apos;d love to hear from you.
          </p>
        </div>
        <div className="mt-28 grid gap-16 md:grid-cols-2">
          <div>
            <MessagesSquare className="mb-5 h-8 w-auto" />
            <p className="mb-2 font-bold md:text-xl">Contact Us</p>
            <p className="text-muted-foreground mb-6 text-sm md:text-base">
              Need help or have questions? Our support team is here for you 24/7. Feel free to reach
              out via email.
            </p>
            <a href="/contact" className="font-semibold underline">
              Contact support
            </a>
          </div>
          <div>
            <Users className="mb-5 h-8 w-auto" />
            <p className="mb-2 font-bold md:text-xl">Investor Relations</p>
            <p className="text-muted-foreground mb-6 text-sm md:text-base">
              Interested in investment opportunities or want to learn more about our token launch?
              Connect with our investor relations team for detailed information.
            </p>
            <a href="/investors" className="font-semibold underline">
              Investor portal
            </a>
          </div>
          <div>
            <Briefcase className="mb-5 h-8 w-auto" />
            <p className="mb-2 font-bold md:text-xl">Talent</p>
            <p className="text-muted-foreground mb-6 text-sm md:text-base">
              Interested in joining our team? We&apos;re always looking for talented individuals who
              share our vision for trustworthy AI. Send us your resume and let&apos;s talk.
            </p>
            <a href="mailto:talent@asimov.systems" className="font-semibold underline">
              Join our team
            </a>
          </div>
          <div>
            <Share2 className="mb-5 h-8 w-auto" />
            <p className="mb-2 font-bold md:text-xl">Follow us</p>
            <p className="text-muted-foreground mb-6 text-sm md:text-base">
              Follow us on social media to stay updated with the latest news, insights, and
              developments from ASIMOV Systems.
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
