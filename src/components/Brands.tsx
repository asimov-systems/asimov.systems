import AutoScroll from 'embla-carousel-auto-scroll';

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const Brands = () => {
  const logos = [
    {
      id: 'logo-1',
      description: 'Solana',
      image: '/brands/solana_logo.svg',
      className: 'h-7 w-auto dark:invert'
    },
    {
      id: 'logo-2',
      description: 'NEAR',
      image: '/brands/near_logo.svg',
      className: 'h-7 w-auto dark:invert'
    },
    {
      id: 'logo-3',
      description: 'Aurora',
      image: '/brands/aurora_logo.svg',
      className: 'h-7 w-auto dark:invert'
    },
    {
      id: 'logo-4',
      description: 'Arbitrum',
      image: '/brands/arbitrum_logo.svg',
      className: 'h-7 w-auto dark:invert'
    },
    {
      id: 'logo-5',
      description: 'Protocol Labs',
      image: '/brands/protocol_labs_logo.svg',
      className: 'h-7 w-auto dark:invert'
    },
    {
      id: 'logo-6',
      description: 'Bittensor',
      image: '/brands/bittensor_logo.svg',
      className: 'h-5 w-auto dark:invert'
    },
    {
      id: 'logo-7',
      description: 'Solana',
      image: '/brands/solana_logo.svg',
      className: 'h-7 w-auto dark:invert'
    },
    {
      id: 'logo-8',
      description: 'NEAR',
      image: '/brands/near_logo.svg',
      className: 'h-7 w-auto dark:invert'
    },
    {
      id: 'logo-9',
      description: 'Aurora',
      image: '/brands/aurora_logo.svg',
      className: 'h-7 w-auto dark:invert'
    },
    {
      id: 'logo-10',
      description: 'Arbitrum',
      image: '/brands/arbitrum_logo.svg',
      className: 'h-7 w-auto dark:invert'
    },
    {
      id: 'logo-11',
      description: 'Protocol Labs',
      image: '/brands/protocol_labs_logo.svg',
      className: 'h-7 w-auto dark:invert'
    },
    {
      id: 'logo-12',
      description: 'Bittensor',
      image: '/brands/bittensor_logo.svg',
      className: 'h-5 w-auto dark:invert'
    }
  ];

  return (
    <section className="py-32">
      <div className="container mx-auto px-4 lg:px-6">
        <h1 className="text-foreground my-6 max-w-4xl text-4xl font-medium tracking-tighter md:text-6xl">
          Built by the alumni that built the{' '}
          <span className="text-muted-foreground/40">web3 landscape</span> as you know it today.
          Companies that include:
        </h1>

        <div className="bg-muted flex w-fit items-center justify-center gap-4 rounded-full px-4 py-2 tracking-tight transition-all ease-in-out hover:gap-6">
          <span className="bg-foreground inline-block size-3 rounded-full" />
          <p className="text-foreground">Checkout Our Team</p>
        </div>

        <div className="relative mx-auto flex items-center justify-center pt-8">
          <Carousel opts={{ loop: true }} plugins={[AutoScroll({ playOnInit: true })]}>
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="border-border relative flex h-35 basis-1/2 justify-center border border-r-0 pl-0 sm:basis-1/4 md:basis-1/3 lg:basis-1/6"
                >
                  <div className="flex flex-col items-center justify-center lg:mx-10">
                    {/* <p className="absolute left-2 top-2 text-xs tracking-tighter">
                      {(index + 1).toString().padStart(2, "0")}
                    </p> */}
                    <img src={logo.image} alt={logo.description} className={logo.className} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="from-background absolute inset-y-0 left-0 w-32 bg-linear-to-r to-transparent"></div>
          <div className="from-background absolute inset-y-0 right-0 w-32 bg-linear-to-l to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export { Brands };
