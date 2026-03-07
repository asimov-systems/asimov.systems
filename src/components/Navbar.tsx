import { useEffect, useState } from 'react';
import { LogOut, Menu, User } from 'lucide-react';
import { FaXTwitter, FaLinkedin, FaGithub } from 'react-icons/fa6';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { socialLinks, idAsimovSystemsUrl, idJoinWaitlistUrl } from '@/lib/consts';

interface MenuItem {
  title: string;
  url: string;
  target?: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
  };
  menu?: MenuItem[];
  isSignedIn?: boolean;
  userName?: string;
  userImageUrl?: string;
}

const Navbar = ({
  logo = {
    url: '/',
    src: '/logo.svg',
    alt: 'logo'
  },
  menu = [
    {
      title: 'ASIMOV PI',
      url: '/product',
      items: [
        { title: 'Overview', url: '/product' },
        { title: 'Why ASIMOV', url: '/why-asimov' },
        { title: 'How it works', url: '/how-it-works' }
      ]
    },
    { title: 'Build on ASIMOV', url: '/build' },
    { title: 'Blog', url: 'https://asimov.blog', target: '_blank' },
    { title: 'For investors', url: '/investors' },
    { title: 'Join waitlist', url: idJoinWaitlistUrl, target: '_blank' }
  ],
  isSignedIn = false,
  userName,
  userImageUrl
}: Navbar1Props) => {
  const [creditBalance, setCreditBalance] = useState<number | null | 'loading'>('loading');

  useEffect(() => {
    if (!isSignedIn) {
      setCreditBalance(null);
      return;
    }
    fetch('/api/credit-balance')
      .then((res) => res.json())
      .then((data: { balance: number | null }) =>
        setCreditBalance(typeof data.balance === 'number' ? data.balance : null)
      )
      .catch(() => setCreditBalance(null));
  }, [isSignedIn]);

  const dashboardUrl = `${idAsimovSystemsUrl}/dashboard`;

  return (
    <section className="py-4">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="max-h-8 dark:invert" alt={logo.alt} />
            </a>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>{menu.map((item) => renderMenuItem(item))}</NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="size-4" />
              </a>
            </Button>
            {!isSignedIn ? (
              <Button variant="outline" size="sm" asChild>
                <a href="/sign-in">
                  <User className="mr-1 size-4" />
                  Sign In
                </a>
              </Button>
            ) : (
              <>
                {creditBalance !== 'loading' && creditBalance !== null && (
                  <span className="text-muted-foreground hidden text-sm sm:inline">
                    {creditBalance} credits
                  </span>
                )}
                <NavigationMenu>
                  <NavigationMenuList className="gap-0">
                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                        className="data-[state=open]:bg-accent flex h-9 items-center gap-1.5 bg-transparent px-2"
                        aria-label="Account menu"
                      >
                        {userImageUrl ? (
                          <img
                            src={userImageUrl}
                            alt=""
                            className="size-6 rounded-full"
                            width={24}
                            height={24}
                          />
                        ) : (
                          <User className="size-5" />
                        )}
                        {userName && (
                          <span className="hidden text-sm font-medium sm:inline">{userName}</span>
                        )}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="min-w-[10rem]">
                        <ul className="flex flex-col gap-0 p-1">
                          <li>
                            <NavigationMenuLink asChild>
                              <a
                                href={dashboardUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:bg-accent focus:bg-accent flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm outline-none"
                              >
                                Dashboard
                              </a>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <a
                                href="/sign-out"
                                className="hover:bg-accent focus:bg-accent flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm outline-none"
                              >
                                <LogOut className="size-4" />
                                Sign out
                              </a>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </>
            )}
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="max-h-8 dark:invert" alt={logo.alt} />
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <img src={logo.src} className="max-h-8 dark:invert" alt={logo.alt} />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion type="single" collapsible className="flex w-full flex-col gap-4">
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-center gap-3">
                      {[
                        { icon: FaXTwitter, link: socialLinks.twitter },
                        { icon: FaGithub, link: socialLinks.github },
                        { icon: FaLinkedin, link: socialLinks.linkedin }
                      ].map(({ icon: Icon, link }) => (
                        <Button variant="ghost" size="sm" asChild key={`navbar_link_${link}`}>
                          <a href={link} target="_blank" rel="noopener noreferrer">
                            <Icon className="size-4" />
                          </a>
                        </Button>
                      ))}
                    </div>
                    {!isSignedIn ? (
                      <Button variant="outline" asChild>
                        <a href="/sign-in">
                          <User className="mr-1 size-4" />
                          Sign In
                        </a>
                      </Button>
                    ) : (
                      <>
                        {userName && (
                          <div className="flex items-center gap-2">
                            {userImageUrl ? (
                              <img
                                src={userImageUrl}
                                alt=""
                                className="size-6 rounded-full"
                                width={24}
                                height={24}
                              />
                            ) : null}
                            <span className="text-foreground text-sm font-medium">{userName}</span>
                          </div>
                        )}
                        {creditBalance !== 'loading' && creditBalance !== null && (
                          <p className="text-muted-foreground text-sm">{creditBalance} credits</p>
                        )}
                        <div className="flex flex-col gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="w-full justify-center"
                          >
                            <a href={dashboardUrl} target="_blank" rel="noopener noreferrer">
                              Dashboard
                            </a>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            asChild
                            className="w-full justify-center gap-2"
                          >
                            <a href="/sign-out" className="text-muted-foreground">
                              <LogOut className="size-4" />
                              Sign out
                            </a>
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        target={item.target}
        className="bg-background hover:bg-muted hover:text-accent-foreground group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="hover:bg-muted hover:text-accent-foreground flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-muted-foreground text-sm leading-snug">{item.description}</p>
        )}
      </div>
    </a>
  );
};

export { Navbar };
