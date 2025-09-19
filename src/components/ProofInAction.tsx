import { cn } from '@/lib/utils';

const topItems = [
  {
    title: 'Your favorite AI now sees the whole picture:',
    description:
      'ASIMOV’s PI enriches answers by supplying verified, cross-app context and source links.',
    images: [
      {
        src: '/proof-in-action/favorite-ai.jpg',
        alt: 'Issue template interface',
        className: 'aspect-495/186 max-w-lg rounded-xl grayscale'
      }
    ],
    className:
      'flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2',
    fade: [''] as string[]
  },
  {
    title: 'Connects all your siloed apps - ',
    description:
      'such as email, Telegram, Slack, CRM’s, note takers, calendars -  and even paywalled external sources (e.g. Crunchbase) - for unified context.',
    images: [
      {
        src: '/icons/gmail_logo.svg',
        alt: 'Gmail logo'
      },
      {
        src: '/icons/telegram_logo.svg',
        alt: 'Telegram logo'
      },
      {
        src: '/icons/slack_logo.svg',
        alt: 'Slack logo'
      },
      {
        src: '/icons/salesforce_logo.svg',
        alt: 'Salesforce logo'
      },
      {
        src: '/icons/obsidian_logo.svg',
        alt: 'Obsidian logo'
      },
      {
        src: '/icons/outlook_logo.svg',
        alt: 'Figma logo'
      },
      {
        src: '/icons/dropbox_logo.svg',
        alt: 'Dropbox logo'
      },
      {
        src: '/icons/google_drive_logo.svg',
        alt: 'GoogleDrive logo'
      }
    ],
    className:
      'flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 md:[&>.title-container]:translate-x-2 xl:[&>.title-container]:translate-x-4 [&>.title-container]:translate-x-0',
    fade: []
  }
];

const bottomItems = [
  {
    title: 'No cloud uploads:',
    description: 'Privacy is built-in.',
    images: [
      {
        src: '/proof-in-action/no-cloud-uploads.jpg',
        alt: 'Graveyard interface',
        className: 'aspect-305/280 rounded-t-xl max-w-[305px]'
      }
    ],
    className:
      '[&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2',
    fade: ['bottom'] as string[]
  },
  {
    title: 'Works instantly - ',
    description: 'no setup headaches, just sync, connect, and go.',
    images: [
      {
        src: '/proof-in-action/works-instantly.jpg',
        alt: 'Task discussions interface',
        className: 'aspect-320/153 rounded-xl'
      }
    ],
    className:
      'justify-normal [&>.title-container]:mb-5 md:[&>.title-container]:mb-0 [&>.image-container]:flex-1 md:[&>.image-container]:place-items-center md:[&>.image-container]:-translate-y-3',
    fade: ['']
  },
  {
    title: 'Real clarity, not just automation:',
    description: 'See exactly where facts came from, in your chosen AI’s interface.',
    images: [
      {
        src: '/proof-in-action/real-clarity.jpg',
        alt: 'Notifications interface',
        className: 'aspect-305/280 rounded-t-xl max-w-[305px]'
      }
    ],
    className:
      '[&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2',
    fade: ['bottom']
  }
];

function ProofInAction() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 lg:px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
          Proof in Action: ASIMOV&apos;s Personal Intelligence
        </h2>

        <p className="text-muted-foreground mt-8 text-center text-lg md:mt-12 lg:mt-20">
          Our first flagship product, available for waitlist now.
        </p>

        <h2 className="mt-8 text-center text-xl font-semibold tracking-tight text-balance sm:text-2xl md:mt-12 md:text-3xl lg:mt-20 lg:text-4xl">
          ASIMOV&apos;s PI enhances the AI you already use - no need to switch assistants.
        </h2>

        <div className="mt-8 md:mt-12 lg:mt-20">
          <DashedLine orientation="horizontal" className="scale-x-105" />

          {/* Top Features Grid - 2 items */}
          <div className="relative flex max-md:flex-col">
            {topItems.map((item, i) => (
              <Item key={i} item={item} isLast={i === topItems.length - 1} />
            ))}
          </div>
          <DashedLine orientation="horizontal" className="max-w-7xl scale-x-110" />

          {/* Bottom Features Grid - 3 items */}
          <div className="relative grid max-w-7xl md:grid-cols-3">
            {bottomItems.map((item, i) => (
              <Item key={i} item={item} isLast={i === bottomItems.length - 1} className="md:pb-0" />
            ))}
          </div>
        </div>
        <DashedLine orientation="horizontal" className="max-w-7xl scale-x-110" />
      </div>
    </section>
  );
}

interface ItemProps {
  item: {
    title: string;
    description: string;
    images: { src: string; alt: string; className?: string }[];
    className?: string;
    fade: string[];
  };
  isLast?: boolean;
  className?: string;
}

const Item = ({ item, isLast, className }: ItemProps) => {
  return (
    <div
      className={cn('relative flex flex-col px-0 py-6 md:px-6 md:py-8', className, item.className)}
    >
      <div className="title-container max-w-md text-balance">
        <h3 className="inline font-semibold">{item.title} </h3>
        <span className="text-muted-foreground font-medium"> {item.description}</span>
      </div>

      {item.fade.includes('bottom') && (
        <div className="from-background/80 absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent md:hidden" />
      )}
      {item.images.length > 4 ? (
        <div className="relative overflow-hidden">
          <div className="flex flex-col gap-5">
            {/* First row - right aligned */}
            <div className="flex translate-x-4 justify-end gap-5">
              {item.images.slice(0, 4).map((image, j) => (
                <div
                  key={j}
                  className="bg-muted/40 grid aspect-square size-16 place-items-center rounded-xl p-2 lg:size-20"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="size-8 object-contain object-top-left lg:size-12"
                  />
                  <div className="from-background/80 absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l to-transparent" />
                </div>
              ))}
            </div>
            {/* Second row - left aligned */}
            <div className="flex -translate-x-4 gap-5">
              {item.images.slice(4).map((image, j) => (
                <div
                  key={j}
                  className="bg-muted/40 grid aspect-square size-16 place-items-center rounded-xl lg:size-20"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="size-8 object-contain object-top-left lg:size-12"
                  />
                  <div className="from-background/80 absolute inset-y-0 bottom-0 left-0 z-10 w-14 bg-linear-to-r to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="image-container grid grid-cols-1 gap-4">
          {item.images.map((image, j) => (
            <img
              key={j}
              src={image.src}
              alt={image.alt}
              className={cn('w-full overflow-hidden object-cover', image.className)}
            />
          ))}
        </div>
      )}

      {!isLast && (
        <>
          <DashedLine orientation="vertical" className="absolute top-0 right-0 max-md:hidden" />
          <DashedLine orientation="horizontal" className="absolute inset-x-0 bottom-0 md:hidden" />
        </>
      )}
    </div>
  );
};

interface DashedLineProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

const DashedLine = ({ orientation = 'horizontal', className }: DashedLineProps) => {
  const isHorizontal = orientation === 'horizontal';

  return (
    <div
      className={cn(
        'text-muted-foreground relative',
        isHorizontal ? 'h-px w-full' : 'h-full w-px',
        className
      )}
    >
      <div
        className={cn(
          isHorizontal
            ? [
                'h-px w-full',
                'bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)]',
                '[mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]'
              ]
            : [
                'h-full w-px',
                'bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,currentColor_4px,currentColor_8px)]',
                '[mask-image:linear-gradient(180deg,transparent,black_25%,black_75%,transparent)]'
              ]
        )}
      />
    </div>
  );
};

export { ProofInAction };
