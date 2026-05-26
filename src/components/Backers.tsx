import AutoScroll from 'embla-carousel-auto-scroll';

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

const Backers = () => {
  const logos = [
    {
      id: 'logo-1',
      description: 'dAGI Accelerator',
      image: '/backers/dagi_accelerator.svg',
      className: 'w-52 h-7'
    },
    {
      id: 'logo-2',
      description: 'Delphi Labs',
      image: '/backers/delphi_labs.svg',
      className: 'h-7 w-auto'
    },
    {
      id: 'logo-3',
      description: 'Delphi Ventures',
      image: '/backers/delphi_ventures.svg',
      className: 'h-7 w-auto'
    },
    {
      id: 'logo-4',
      description: 'Cyberfund',
      image: '/backers/cyber_fund.svg',
      className: 'h-7 w-auto'
    },
    {
      id: 'logo-5',
      description: 'Layer Zero',
      image: '/backers/layer_zero.svg',
      className: 'h-7 w-auto'
    },
    {
      id: 'logo-6',
      description: 'Gitcoin',
      image: '/backers/gitcoin.svg',
      className: 'h-7 w-auto'
    },
    {
      id: 'logo-7',
      description: 'Republic',
      image: '/backers/republic_bw.svg',
      className: 'h-7 w-auto'
    },
    {
      id: 'logo-8',
      description: 'zksync',
      image: '/backers/zksync.svg',
      className: 'h-7 w-auto'
    },
    {
      id: 'logo-9',
      description: 'Bryan Pellegrino',
      className: 'h-7 w-auto'
    },
    {
      id: 'logo-10',
      description: 'Alex Ye',
      className: 'h-7 w-auto'
    },
    {
      id: 'logo-11',
      description: 'Matt Henderson',
      className: 'h-7 w-auto'
    },
    {
      id: 'logo-12',
      description: 'Azeem Khan',
      className: 'h-7 w-auto'
    },
    {
      id: 'logo-13',
      description: 'Vinay Gupta',
      className: 'h-7 w-auto'
    },
    {
      id: 'logo-14',
      description: 'Gaurav Dubey',
      className: 'h-7 w-auto'
    },
    {
      id: 'logo-15',
      description: 'Angel Tank',
      className: 'h-7 w-auto'
    }
  ];
  return (
    <section className="py-32">
      <div className="container mx-auto flex flex-col items-center px-4 text-center lg:px-6">
        <p className="text-muted-foreground my-6 text-sm font-semibold tracking-wide">
          BACKERS &amp; VALIDATION
        </p>

        <h2 className="my-6 text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl">
          Selected by dAGI. Backed by visionaries.
        </h2>

        <p className="text-muted-foreground max-w-[600px] tracking-[-0.32px]">
          ASIMOV was selected for the dAGI Accelerator (Delphi Labs, Cyber Fund), 8 of 500+ teams.
          Strategic investors and advisors who share our vision for Personal Intelligence, context
          graphs, and a decentralized marketplace for verifiable knowledge.
        </p>
      </div>

      <div className="relative mx-auto flex items-center justify-center overflow-hidden pt-8 lg:max-w-5xl">
        <Carousel opts={{ loop: true }} plugins={[AutoScroll({ playOnInit: true })]}>
          <CarouselContent className="ml-0">
            {logos.map((logo) => (
              <CarouselItem
                key={logo.id}
                className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
              >
                <div className="flex shrink-0 items-center justify-center lg:mx-10">
                  <div>
                    {logo.image ? (
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={cn(logo.className, 'grayscale')}
                      />
                    ) : (
                      <p className="text-muted-foreground font-semibold">{logo.description}</p>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="from-background absolute inset-y-0 left-0 w-12 bg-linear-to-r to-transparent"></div>
        <div className="from-background absolute inset-y-0 right-0 w-12 bg-linear-to-l to-transparent"></div>
      </div>
    </section>
  );
};

export { Backers };
