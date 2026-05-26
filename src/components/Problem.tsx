'use client';
import { Users, Link2, Clock, Database, AlertTriangle, CheckCircle } from 'lucide-react';

const Highlight = ({
  children,
  className = ''
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span className={`font-semibold text-black dark:text-white ${className}`}>{children}</span>
  );
};

const Problem = () => {
  return (
    <section className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-col items-center gap-20 lg:flex-row lg:items-start">
          <div className="max-w-[28.125rem]">
            <h1 className="text-foreground text-6xl font-medium lg:text-7xl">
              Why the World Needs ASIMOV
            </h1>
            <p className="text-muted-foreground mt-6 text-lg">
              THE PROBLEM: FRAGMENTED TOOLS, LOST CONTEXT
            </p>
            <div className="border-muted2 mt-12 flex gap-14 border-t">
              <div className="mt-12 space-y-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Users className="text-destructive mt-1 size-6 flex-shrink-0" />
                    <div>
                      <p className="text-lg">
                        <Highlight>Relationship decay:</Highlight> introductions, meetings, and
                        follow-ups scatter across email, chat, and CRM. None of them own your graph.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="text-destructive mt-1 size-6 flex-shrink-0" />
                    <div>
                      <p className="text-lg">
                        <Highlight>Context is lost</Highlight> between events. Who did you meet?
                        What did you discuss? Who should you talk to next?
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-muted space-y-4 border-l-2 pl-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="mt-1 size-4 flex-shrink-0 text-amber-500" />
                    <p className="text-muted-foreground">
                      AI predicts, but doesn&apos;t remember your network. Black-box answers without
                      your relationship graph.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Link2 className="mt-1 size-4 flex-shrink-0 text-amber-500" />
                    <p className="text-muted-foreground">
                      Too many siloed apps. None unify, explain, or prove who you know and why it
                      matters.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Database className="mt-1 size-4 flex-shrink-0 text-amber-500" />
                    <p className="text-muted-foreground">
                      Big tech monetizes your attention. Intelligence should belong to the
                      individual, not platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto overflow-hidden md:overflow-visible">
            <div className="grid grid-cols-[4.8rem_5.625rem_10.75rem] grid-rows-[9.3rem_8.68rem_1.125rem_3.875rem] gap-[0.625rem] sm:grid-cols-[5.3rem_6.25rem_12rem] sm:grid-rows-[10.3rem_9.625rem_1.25rem_4.3rem] sm:gap-[0.8rem] xl:grid-cols-[8.5rem_10rem_19.3rem] xl:grid-rows-[16.625rem_15.5rem_1.375rem_6.9rem] xl:gap-[1.25rem]">
              <div className="col-[2/-1] overflow-hidden rounded-3xl bg-blue-200">
                <img
                  src="/asimov-1200x1200.svg"
                  alt=""
                  className="size-full object-cover object-center"
                />
              </div>
              <div className="col-[1/2] row-[1/2] self-end">
                <svg
                  className="fill-muted-foreground w-[4.375rem] xl:w-[8rem]"
                  viewBox="0 0 131 174"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M123.385 5.96661C123.548 6.77895 123.021 7.56919 122.209 7.73166C115.896 8.99415 109.63 9.96037 103.486 10.9077C99.0811 11.5869 94.7393 12.2564 90.4886 13.0183C80.1979 14.8631 70.1037 17.2952 59.8744 21.8151C41.5635 29.906 25.0024 41.8876 14.0337 58.7365C8.37592 67.4273 4.29836 78.5442 3.60483 89.504C2.91206 100.452 5.59556 111.123 13.2956 119.15C17.2013 123.222 22.165 126.554 27.7033 129.043C26.3041 123.491 25.7088 117.6 26.1196 111.355C27.0927 96.5641 39.1649 88.8778 52.0447 87.6439C64.8739 86.4148 79.2577 91.4779 85.4762 102.943C88.8209 109.11 89.0032 115.236 86.7021 120.549C84.4187 125.822 79.7615 130.137 73.7 132.917C63.9444 137.39 51.9845 138.282 40.6769 136.184C37.8771 135.664 35.1075 134.96 32.412 134.076C37.8412 148.683 49.141 160.796 61.9724 170.755C62.6268 171.263 62.7456 172.205 62.2377 172.86C61.7298 173.514 60.7875 173.633 60.133 173.125C46.4556 162.51 34.1037 149.186 28.7723 132.754C22.0105 130.053 15.8772 126.176 11.1305 121.227C2.69861 112.436 -0.119486 100.855 0.610818 89.3145C1.34036 77.7856 5.61055 66.1764 11.5195 57.0997C22.8909 39.6323 39.9827 27.3247 58.6619 19.071C69.1997 14.4148 79.5552 11.9305 89.9592 10.0654C94.3905 9.27105 98.7725 8.59677 103.176 7.91915C109.222 6.98883 115.309 6.05221 121.62 4.78992C122.433 4.62745 123.223 5.15427 123.385 5.96661ZM31.2114 130.479C34.4288 131.674 37.7946 132.598 41.2243 133.234C52.0581 135.245 63.3684 134.354 72.4495 130.19C77.9974 127.646 82.0229 123.805 83.9492 119.357C85.8579 114.95 85.7769 109.79 82.8391 104.373C77.3783 94.3052 64.3988 89.4741 52.3308 90.6302C40.3135 91.7815 29.9547 98.7598 29.1131 111.552C28.6714 118.266 29.4591 124.568 31.2114 130.479Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M114.056 1.72566C114.207 0.911209 114.99 0.373802 115.805 0.525328C115.89 0.541148 116.012 0.563426 116.166 0.591592C117.344 0.806885 120.403 1.36614 123.271 2.01411C124.885 2.37873 126.488 2.78252 127.676 3.18084C128.255 3.37485 128.823 3.59596 129.256 3.84814C129.46 3.96696 129.753 4.15933 129.988 4.44833C130.241 4.75995 130.578 5.40289 130.28 6.16935C129.856 7.25995 128.921 8.03458 128.094 8.58288C127.232 9.15452 126.215 9.65136 125.335 10.0779L125.264 10.1127C124.363 10.5492 123.633 10.9033 123.11 11.2487C122.902 11.386 122.778 11.4897 122.71 11.5572C122.597 12.2744 121.977 12.8231 121.228 12.8231C120.4 12.8231 119.728 12.1516 119.728 11.3231C119.728 10.6196 120.043 10.064 120.366 9.67844C120.683 9.29947 121.082 8.99272 121.457 8.745C122.152 8.28613 123.048 7.85224 123.862 7.45814C123.917 7.43145 123.972 7.40493 124.026 7.3786C124.936 6.93764 125.77 6.52466 126.436 6.08262C126.489 6.04781 126.539 6.01368 126.587 5.98025C125.557 5.64496 124.135 5.28497 122.61 4.94034C119.811 4.30799 116.823 3.76151 115.632 3.54375C115.473 3.5147 115.346 3.49149 115.256 3.47472C114.442 3.32319 113.904 2.54011 114.056 1.72566ZM127.788 6.46672C127.788 6.46675 127.785 6.46476 127.779 6.46068C127.785 6.46465 127.788 6.46669 127.788 6.46672Z"
                  />
                </svg>
              </div>
              <div className="bg-muted col-[1/3] overflow-hidden rounded-3xl">
                <div className="p-5 xl:p-7">
                  <div className="flex gap-7">
                    <div className="text-foreground text-4xl leading-none xl:text-7xl">PI</div>
                    <CheckCircle className="stroke-foreground h-9 w-9 xl:h-14 xl:w-14" />
                  </div>
                  <p className="text-foreground mt-3 text-xs md:text-sm xl:mt-7 xl:text-xl">
                    <span className="text-muted-2-foreground font-bold">Personal Intelligence</span>{' '}
                    : own your relationship graph
                  </p>
                </div>
              </div>
              <div className="bg-muted col-[2/3] row-[-3/-1] flex h-full w-full items-center justify-center overflow-hidden rounded-3xl">
                <Users className="stroke-foreground mx-auto size-16 xl:size-27" />
              </div>
              <div className="bg-muted relative col-[3/4] row-[2/4] rounded-3xl">
                <div className="h-full w-full overflow-hidden rounded-3xl">
                  <img
                    src="/ssscribble.svg"
                    alt=""
                    className="size-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="col-[-2/-1] row-[-1/-2]">
                <div className="flex w-full items-center gap-3">
                  <div className="bg-muted h-12 w-12 shrink-0 rounded-full"></div>
                  <div className="flex w-full flex-col gap-1">
                    <div className="bg-muted h-6 w-[70%] rounded-lg"></div>
                    <div className="bg-muted h-3 w-[40%] rounded-lg"></div>
                  </div>
                </div>
                <div className="mt-3 flex w-full items-center gap-3">
                  <div className="bg-muted h-12 w-12 shrink-0 rounded-full"></div>
                  <div className="flex w-full flex-col gap-1">
                    <div className="bg-muted h-6 w-[70%] rounded-lg"></div>
                    <div className="bg-muted h-3 w-[40%] rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Problem };
