import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import type { CarouselApi } from '@/components/ui/carousel';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const RecentPosts = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on('select', updateSelection);
    return () => {
      carouselApi.off('select', updateSelection);
    };
  }, [carouselApi]);
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
            Recent Posts
          </h2>
          <div className="shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              '(max-width: 768px)': {
                dragFree: true
              }
            }
          }}
        >
          <CarouselContent className="mr-[20px] ml-[20px] 2xl:mr-[calc(50vw-700px+20px)] 2xl:ml-[calc(50vw-700px+20px)]">
            <CarouselItem className="max-w-[320px] pl-[20px] lg:max-w-[360px]">
              <blockquote className="twitter-tweet">
                <p lang="en" dir="ltr">
                  ✍️ Fresh sketch from{' '}
                  <a href="https://twitter.com/hashtag/SEMANTiCS2025?src=hash&amp;ref_src=twsrc%5Etfw">
                    #SEMANTiCS2025
                  </a>
                  !<br />
                  <br />
                  Michael Färber showed how Knowledge Graphs + LLMs can unlock evidence-based
                  insights from millions of papers — paving the way for smarter, more trustworthy
                  AI. 🚀
                  <a href="https://t.co/XQpj7Yd4ko">https://t.co/XQpj7Yd4ko</a>
                  <a href="https://twitter.com/hashtag/KnowledgeGraphs?src=hash&amp;ref_src=twsrc%5Etfw">
                    #KnowledgeGraphs
                  </a>{' '}
                  <a href="https://twitter.com/hashtag/LLM?src=hash&amp;ref_src=twsrc%5Etfw">
                    #LLM
                  </a>{' '}
                  <a href="https://twitter.com/hashtag/AI?src=hash&amp;ref_src=twsrc%5Etfw">#AI</a>{' '}
                  <a href="https://twitter.com/hashtag/ScientificDiscovery?src=hash&amp;ref_src=twsrc%5Etfw">
                    #ScientificDiscovery
                  </a>{' '}
                  <a href="https://t.co/vdnoST3G54">pic.twitter.com/vdnoST3G54</a>
                </p>
                &mdash; SEMANTiCS Conference (@SemanticsConf){' '}
                <a href="https://twitter.com/SemanticsConf/status/1963978040200859905?ref_src=twsrc%5Etfw">
                  September 5, 2025
                </a>
              </blockquote>
              <script async src="https://platform.twitter.com/widgets.js"></script>
            </CarouselItem>
            <CarouselItem className="max-w-[320px] pl-[20px] lg:max-w-[360px]">
              <blockquote className="twitter-tweet">
                <p lang="en" dir="ltr">
                  🎉 That&apos;s a wrap!{' '}
                  <a href="https://twitter.com/hashtag/SEMANTiCS2025?src=hash&amp;ref_src=twsrc%5Etfw">
                    #SEMANTiCS2025
                  </a>{' '}
                  closed with inspiring talks, great networking &amp; a strong community spirit.
                  Thanks to all speakers, sponsors &amp; participants who made Vienna unforgettable!
                  🚀
                  <br />
                  <br />
                  See you next year in Ghent!
                  <a href="https://twitter.com/hashtag/KnowledgeGraphs?src=hash&amp;ref_src=twsrc%5Etfw">
                    #KnowledgeGraphs
                  </a>{' '}
                  <a href="https://twitter.com/hashtag/AI?src=hash&amp;ref_src=twsrc%5Etfw">#AI</a>{' '}
                  <a href="https://twitter.com/hashtag/SemanticWeb?src=hash&amp;ref_src=twsrc%5Etfw">
                    #SemanticWeb
                  </a>{' '}
                  <a href="https://t.co/Pv86l8MlRo">pic.twitter.com/Pv86l8MlRo</a>
                </p>
                &mdash; SEMANTiCS Conference (@SemanticsConf){' '}
                <a href="https://twitter.com/SemanticsConf/status/1963982305304645695?ref_src=twsrc%5Etfw">
                  September 5, 2025
                </a>
              </blockquote>
              <script async src="https://platform.twitter.com/widgets.js"></script>
            </CarouselItem>
            <CarouselItem className="max-w-[320px] pl-[20px] lg:max-w-[360px]">
              <blockquote className="twitter-tweet">
                <p lang="en" dir="ltr">
                  My 1-minute demo at{' '}
                  <a href="https://twitter.com/hashtag/SEMANTiCS2025?src=hash&amp;ref_src=twsrc%5Etfw">
                    #SEMANTiCS2025
                  </a>{' '}
                  of the ASIMOV personal intelligence layer unlocking and linking all the data silos
                  in your life, here showcasing some initial utility for frequent conference
                  attendance <a href="https://t.co/woEBCtGKMt">https://t.co/woEBCtGKMt</a>{' '}
                  <a href="https://t.co/ntP97Aklhb">pic.twitter.com/ntP97Aklhb</a>
                </p>
                &mdash; Arto Bendiken (@bendiken){' '}
                <a href="https://twitter.com/bendiken/status/1963903783630455042?ref_src=twsrc%5Etfw">
                  September 5, 2025
                </a>
              </blockquote>
              <script async src="https://platform.twitter.com/widgets.js"></script>
            </CarouselItem>

            <CarouselItem className="max-w-[320px] pl-[20px] lg:max-w-[360px]">
              <blockquote className="twitter-tweet">
                <p lang="en" dir="ltr">
                  Presenting{' '}
                  <a href="https://twitter.com/ASIMOV_Protocol?ref_src=twsrc%5Etfw">
                    @ASIMOV_Protocol
                  </a>{' '}
                  and{' '}
                  <a href="https://twitter.com/ASIMOV_Platform?ref_src=twsrc%5Etfw">
                    @ASIMOV_Platform
                  </a>{' '}
                  at{' '}
                  <a href="https://twitter.com/hashtag/SEMANTiCS2025?src=hash&amp;ref_src=twsrc%5Etfw">
                    #SEMANTiCS2025
                  </a>
                  : a personal intelligence layer linking all the data in your life, built on an
                  open-source platform for trustworthy neurosymbolic AI{' '}
                  <a href="https://t.co/bFMKT0JgQx">pic.twitter.com/bFMKT0JgQx</a>
                </p>
                &mdash; Arto Bendiken (@bendiken){' '}
                <a href="https://twitter.com/bendiken/status/1963848206241964277?ref_src=twsrc%5Etfw">
                  September 5, 2025
                </a>
              </blockquote>
              <script async src="https://platform.twitter.com/widgets.js"></script>
            </CarouselItem>

            <CarouselItem className="max-w-[320px] pl-[20px] lg:max-w-[360px]">
              <blockquote className="twitter-tweet">
                <p lang="en" dir="ltr">
                  Vienna, it&apos;s almost time. Kicking off the day at{' '}
                  <a href="https://twitter.com/hashtag/SEMANTiCS2025?src=hash&amp;ref_src=twsrc%5Etfw">
                    #SEMANTiCS2025
                  </a>
                  : <a href="https://twitter.com/bendiken?ref_src=twsrc%5Etfw">@bendiken</a> takes
                  the stage in 10 mins. See how ASIMOV turns symbolic knowledge into connections you
                  can see. 📍 Riverside Suite 2 | 11:00 CEST{' '}
                  <a href="https://t.co/Y0sNqs82wM">https://t.co/Y0sNqs82wM</a>
                </p>
                &mdash; ASIMOV (@ASIMOV_Protocol){' '}
                <a href="https://twitter.com/ASIMOV_Protocol/status/1963533288863334604?ref_src=twsrc%5Etfw">
                  September 4, 2025
                </a>
              </blockquote>
              <script async src="https://platform.twitter.com/widgets.js"></script>
            </CarouselItem>

            <CarouselItem className="max-w-[320px] pl-[20px] lg:max-w-[360px]">
              <blockquote className="twitter-tweet">
                <p lang="en" dir="ltr">
                  What if an app could turn the room itself into a knowledge graph?
                  <br />
                  <br />
                  At{' '}
                  <a href="https://twitter.com/SemanticsConf?ref_src=twsrc%5Etfw">@SemanticsConf</a>
                  , Arto Bendiken ({' '}
                  <a href="https://twitter.com/bendiken?ref_src=twsrc%5Etfw">@bendiken</a>
                  ) will demo how ASIMOV makes symbolic knowledge usable - from social graphs to
                  real-time connections you can see.
                  <br />
                  <br />
                  Sept 4 | 11:00 CEST | Riverside Suite 2{' '}
                  <a href="https://t.co/IooSpm6DHa">pic.twitter.com/IooSpm6DHa</a>
                </p>
                &mdash; ASIMOV (@ASIMOV_Protocol){' '}
                <a href="https://twitter.com/ASIMOV_Protocol/status/1963000668953968695?ref_src=twsrc%5Etfw">
                  September 2, 2025
                </a>
              </blockquote>
              <script async src="https://platform.twitter.com/widgets.js"></script>
            </CarouselItem>

            <CarouselItem className="max-w-[320px] pl-[20px] lg:max-w-[360px]">
              <blockquote className="twitter-tweet">
                <p lang="en" dir="ltr">
                  🔴 LIVE: ASIMOV Protocol X NEAR AI - Project Update{' '}
                  <a href="https://t.co/jvxHU6vYP1">https://t.co/jvxHU6vYP1</a>
                </p>
                &mdash; ASIMOV (@ASIMOV_Protocol){' '}
                <a href="https://twitter.com/ASIMOV_Protocol/status/1961126994097447259?ref_src=twsrc%5Etfw">
                  August 28, 2025
                </a>
              </blockquote>
              <script async src="https://platform.twitter.com/widgets.js"></script>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { RecentPosts };
