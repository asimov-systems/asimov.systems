import { ArrowRight } from 'lucide-react';
import { Fragment } from 'react';

import { Separator } from '@/components/ui/separator';

const news = [
  {
    title: 'Why Too Many Apps Ruin Productivity (Harvard Business Review)',
    date: 'August 29, 2022',
    link: 'https://hbr.org/2022/08/how-much-time-and-energy-do-we-waste-toggling-between-applications'
  },
  {
    title: 'The Cost of Context Switching: Why Work Is Broken (Forbes)',
    date: 'Jun 12, 2017',
    link: 'https://www.forbes.com/sites/timfrancis/2017/06/12/the-real-cost-of-context-switching/'
  },
  {
    title: 'Bringing transparency to the data used to train artificial intelligence (MIT Sloan)',
    date: 'Mar 3, 2025',
    link: 'https://mitsloan.mit.edu/ideas-made-to-matter/bringing-transparency-to-data-used-to-train-artificial-intelligence'
  },
  {
    title: 'AI models must now set out training-data provenance (Law Society Gazette)',
    date: 'Jul 31, 2025',
    link: 'https://www.lawsociety.ie/gazette/top-stories/2025/july/ai-models-must-now-set-out-training-data-provenance/'
  },
  {
    title:
      'Addressing GDPR’s Shortcomings in AI Training Data Transparency with the AI Act (Tech Policy Press)',
    date: 'Jul 31, 2025',
    link: 'https://www.techpolicy.press/addressing-gdprs-shortcomings-in-ai-training-data-transparency-with-the-ai-act/'
  },
  {
    title: 'Are Too Many Unproductive Apps Wasting Your Resources? (Insightful.io)',
    date: 'June 3, 2025',
    link: 'https://www.insightful.io/blog/too-many-unproductive-apps-wasting-resources'
  },
  {
    title: 'Transparency on AI Provenance (Prof. Melodena Stephens)',
    date: 'Jun 12',
    link: 'https://www.melodena.com/post/transparency-on-ai-provenance'
  }
];

const Resources = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-col items-start justify-between gap-5 lg:flex-row lg:gap-2">
          <div className="flex w-full max-w-56 items-center gap-3 text-sm">
            <span className="bg-primary size-2 rounded-full"></span>
            NEWS & INSIGHTS
          </div>
          <div className="flex-1">
            <h2 className="text-3xl">
              Insights from the Frontier
              <br />
              <span className="text-primary/50">
                Stay updated on our progress, industry insights, and thought leadership from the
                ASIMOV team and contributors across technology, business, and research.
              </span>
            </h2>
            <div className="mt-14">
              <Separator />
              {news.map((item, idx) => (
                <Fragment key={idx}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="lg:hover:bg-muted group flex flex-col justify-between gap-10 py-6 transition-all duration-400 lg:flex-row lg:items-center"
                  >
                    <div className="flex items-center gap-2 text-lg transition-all duration-400 lg:group-hover:translate-x-8">
                      <p className="text-primary inline text-pretty">
                        {item.title}
                        <ArrowRight className="lg:group-hover:text-primary ml-2 inline size-4 shrink-0 opacity-0 transition-all duration-400 lg:group-hover:opacity-100" />
                      </p>
                    </div>
                    <div className="flex w-full max-w-28 items-center justify-between transition-all duration-400 lg:group-hover:-translate-x-4">
                      <div className="flex items-center gap-2">
                        <time className="text-muted-foreground text-xs">{item.date}</time>
                      </div>
                    </div>
                  </a>
                  <Separator />
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Resources };
