import { Logo, LogoImage } from '@/components/shadcnblocks/logo';
import { socialLinks, calendarLinks } from '@/lib/consts';

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
    target?: string;
  }[];
}

interface FooterProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer = ({
  logo = {
    src: '/logo.svg',
    alt: 'ASIMOV.SYSTEMS logo',
    url: '/'
  },
  tagline = '#BuildOnTruth',
  menuItems = [
    {
      title: 'Product',
      links: [
        { text: 'Overview', url: 'https://getasimov.ai', target: '_blank' }
        // { text: 'Pricing', url: '#' },
        // { text: 'Marketplace', url: '#' },
        // { text: 'Features', url: '#' },
        // { text: 'Integrations', url: '#' },
        // { text: 'Pricing', url: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        // { text: 'About', url: 'https://www.asimovprotocol.org/about', target: '_blank' },
        // { text: 'Team', url: '#' },
        { text: 'Blog', url: 'https://asimov.blog', target: '_blank' },
        // { text: 'Careers', url: '#' },
        { text: 'Contact', url: '/contact' },
        { text: 'Events', url: calendarLinks.sfEvents, target: '_blank' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { text: 'Docs', url: 'https://asimov-specs.github.io', target: '_blank' }
        // { text: 'Sales', url: '#' },
        // { text: 'Advertise', url: '#' }
      ]
    },
    {
      title: 'Social',
      links: [
        { text: 'Twitter', url: socialLinks.twitter, target: '_blank' },
        { text: 'GitHub', url: socialLinks.github, target: '_blank' },
        { text: 'LinkedIn', url: socialLinks.linkedin, target: '_blank' }
      ]
    }
  ],
  copyright = '© 2025 ASIMOV Systems Inc.',
  bottomLinks = [{ text: 'Privacy Policy', url: '/privacy' }]
}: FooterProps) => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 lg:px-6">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <Logo url="/">
                  <LogoImage src={logo.src} alt={logo.alt} className="h-10" />
                </Logo>
              </div>
              <p className="mt-4 font-bold">{tagline}</p>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="text-muted-foreground space-y-4">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="hover:text-primary font-medium">
                      <a href={link.url} target={link.target}>
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-muted-foreground mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="hover:text-primary underline">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer };
