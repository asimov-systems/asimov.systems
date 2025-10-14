import { Users } from 'lucide-react';
import { FaLinkedin, FaXTwitter, FaTelegram } from 'react-icons/fa6';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { socialLinks } from '@/lib/consts';

const Social = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-col items-start pb-10 md:items-center md:pb-14 xl:pb-[60px]">
          <Badge>
            <Users className="h-4 w-4" />
            Community
          </Badge>

          <h4 className="text-foreground mt-4 text-[28px] leading-[36px] font-semibold tracking-tight md:text-center md:text-3xl xl:text-[48px] xl:leading-[56px]">
            Join the Ecosystem
          </h4>

          <div className="mt-6 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:mt-12 xl:gap-6">
            {[
              {
                icon: FaXTwitter,
                link: socialLinks.twitter,
                title: 'Twitter',
                text: 'Follow @ASIMOV_Protocol'
              },
              {
                icon: FaTelegram,
                link: socialLinks.telegram,
                title: 'Telegram',
                text: 'Join our Telegram community'
              },
              { icon: FaLinkedin, link: socialLinks.linkedin, title: 'LinkedIn', text: 'Connect' }
            ].map(({ icon: Icon, link, title, text }) => (
              <Card
                key={`social_card_${link}`}
                className="rounded-2xl transition-all hover:shadow-md"
              >
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-full flex-col items-center p-6 md:p-8 xl:p-10"
                >
                  <Icon className="mb-4 h-8 w-8 md:h-12 md:w-12 xl:h-16 xl:w-16" />
                  <div className="space-y-2 text-center">
                    <h5 className="text-sm font-medium md:text-lg">{title}</h5>
                    <p className="text-muted-foreground text-sm text-balance">{text}</p>
                  </div>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Social };
