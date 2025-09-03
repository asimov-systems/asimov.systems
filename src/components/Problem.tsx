"use client";
import { AudioLines, TrendingDown, Clock, Database, AlertTriangle, CheckCircle } from "lucide-react";

const Highlight = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <span className={`text-black dark:text-white font-semibold ${className}`}>
      {children}
    </span>
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
              THE PROBLEM – THE AI TRUST AND CLARITY GAP
            </p>
            <div className="border-muted2 mt-12 flex gap-14 border-t">
              <div className="mt-12 space-y-8">
                {/* Key Statistics */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <TrendingDown className="size-6 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-lg">
                        <Highlight>Gartner predicts 40% of enterprise</Highlight> abandoned AI due to lack of trust/auditability by 2026.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="size-6 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-lg">
                        <Highlight>&ldquo;Professionals spend 30% of their day</Highlight> verifying and searching for information.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Problem Points */}
                <div className="space-y-4 pl-4 border-l-2 border-muted">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="size-4 text-amber-500 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      AI is everywhere, but trust is rare. Black-box answers are now the norm.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <AlertTriangle className="size-4 text-amber-500 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Information overload costs billions in lost time and poor decisions.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Database className="size-4 text-amber-500 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Too many siloed apps - none unify, explain, or prove.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="mx-auto">
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
                    <div className="text-foreground text-4xl leading-none xl:text-7xl">
                      100%
                    </div>
                    <CheckCircle className="stroke-foreground h-9 w-9 xl:h-14 xl:w-14" />
                  </div>
                  <p className="text-foreground mt-3 text-xs md:text-sm xl:mt-7 xl:text-xl">
                    Verifiable{" "}
                    <span className="text-muted-2-foreground font-bold">
                      AI provenance
                    </span>{" "}
                    with ASIMOV transparency
                  </p>
                </div>
              </div>
              <div className="bg-muted col-[2/3] row-[-3/-1] flex h-full w-full items-center justify-center overflow-hidden rounded-3xl">
                <AudioLines className="stroke-foreground xl:size-27 mx-auto size-16" />
              </div>
              <div className="bg-muted relative col-[3/4] row-[2/4] rounded-3xl">
                <div className="h-full w-full overflow-hidden rounded-3xl">
                  <img
                    src="/ssscribble.svg"
                    alt=""
                    className="size-full object-cover object-center"
                  />
                </div>
                <svg
                  className="fill-muted-foreground absolute -bottom-20 -right-10 w-12 rotate-45 xl:-bottom-24 xl:-right-14 xl:w-16"
                  viewBox="0 0 90 184"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M82.3024 182.601C81.9706 183.654 80.8475 184.239 79.794 183.908C61.988 178.3 44.3459 170.161 28.8638 159.628C27.9867 159.032 27.0952 158.433 26.1953 157.829C19.3285 153.217 11.9733 148.278 6.79983 141.399C1.60997 134.499 0.117312 128.254 1.83895 122.43C2.6984 119.522 4.32632 116.846 6.49378 114.34C5.35517 113.106 4.35358 111.733 3.52901 110.202C0.650361 104.857 -0.218529 98.5344 0.0443264 92.3589C0.307769 86.1696 1.71314 79.9869 3.52802 74.7987C6.69986 65.7313 12.4429 58.6702 19.6577 53.195C12.3683 47.5787 9.48814 39.1289 10.8726 29.8393C12.4961 18.9454 20.6761 11.4583 29.4427 6.62192C30.6367 5.96323 31.853 5.36019 33.0898 4.81414C32.6941 4.2623 32.3003 3.71906 31.9081 3.18775C31.2521 2.29908 31.4407 1.04688 32.3294 0.390874C33.218 -0.265116 34.4702 -0.0765027 35.1262 0.812169C35.7502 1.65741 36.3517 2.49315 36.9405 3.3212C40.0542 2.27675 43.2795 1.57898 46.5911 1.24683C46.6891 1.237 46.7946 1.226 46.9069 1.2143C47.9181 1.10892 49.4784 0.946293 50.9907 1.06971C52.6143 1.20221 54.7929 1.707 56.0859 3.59542C57.7733 6.05985 57.6463 9.09276 56.7901 11.555C55.9341 14.0168 54.2062 16.3578 52.0068 17.5835C49.5695 18.9417 47.2092 19.1616 45.0203 18.356C42.9436 17.5916 41.279 15.9963 39.9217 14.2581C38.3955 12.3034 36.9096 10.2152 35.4536 8.1518C34.067 8.73156 32.7065 9.38967 31.3749 10.1243C23.0707 14.7056 16.1837 21.3381 14.8289 30.4289C13.5775 38.8256 16.3089 46.1012 23.1133 50.7625C25.3554 49.2979 27.7094 47.964 30.1477 46.7504C38.4925 42.5968 47.3718 40.5021 56.4215 39.4065L56.6665 39.3768C62.6119 38.6565 70.4082 37.7119 76.8537 39.8042C78.4687 40.3284 80.1229 41.2783 81.2992 42.6776C82.5177 44.1272 83.2123 46.067 82.7269 48.2956C82.2241 50.6043 80.7223 52.4194 79.1373 53.7643C77.5359 55.1229 75.6762 56.1504 74.1276 56.8586C66.8292 60.1963 58.4963 61.2743 50.803 61.3583C41.5426 61.4595 31.7569 60.2088 23.2355 55.5241C15.9695 60.7389 10.3301 67.4678 7.30368 76.1195C5.59322 81.0092 4.28448 86.8017 4.04071 92.5291C3.79633 98.2704 4.62711 103.806 7.05067 108.305C7.66677 109.449 8.41725 110.498 9.28332 111.46C10.7025 110.137 12.2604 108.858 13.9176 107.613C19.0542 103.753 25.1603 101.362 30.9 99.1141C31.9728 98.6939 33.0328 98.2788 34.0713 97.86C44.8345 93.5196 54.5514 90.7828 66.1479 90.2536C73.0985 89.9364 80.1661 91.5085 85.7372 96.3378C87.9729 98.2757 89.3101 100.449 89.7945 102.77C90.2767 105.08 89.8719 107.333 88.9817 109.369C87.2323 113.37 83.5007 116.81 79.8943 119.046C67.1806 126.927 52.1165 127.684 38.0675 125.998C32.5974 125.342 25.6204 124.358 19.2411 122.116C15.756 120.891 12.3561 119.258 9.45526 117.031C7.61589 119.173 6.33377 121.335 5.67485 123.564C4.42421 127.794 5.29376 132.742 9.99659 138.995C14.7347 145.295 21.485 149.836 28.4179 154.501C29.3147 155.104 30.2147 155.71 31.1137 156.321C46.2316 166.606 63.5108 174.586 80.9955 180.092C82.049 180.424 82.6341 181.547 82.3024 182.601ZM12.2732 114.144C14.6418 115.885 17.4723 117.254 20.5675 118.342C26.4986 120.427 33.0943 121.373 38.544 122.027C52.2124 123.667 66.1958 122.831 77.7867 115.646C81.015 113.645 84.0131 110.748 85.3166 107.767C85.9528 106.311 86.1552 104.911 85.8789 103.587C85.6048 102.274 84.8178 100.834 83.1172 99.3603C78.5409 95.3933 72.5898 93.9638 66.3302 94.2495C55.3243 94.7517 46.0648 97.3365 35.5673 101.57C34.451 102.02 33.3389 102.457 32.2355 102.89C26.491 105.145 20.9813 107.309 16.3204 110.811C14.835 111.927 13.4829 113.036 12.2732 114.144ZM27.0739 52.996C34.3044 56.4253 42.561 57.4481 50.7594 57.3586C58.1681 57.2777 65.8758 56.2339 72.4641 53.2209C73.8174 52.6021 75.3239 51.754 76.5494 50.7142C77.7911 49.6606 78.5768 48.5544 78.8186 47.4444C79.0025 46.5997 78.7792 45.8962 78.2372 45.2514C77.6531 44.5565 76.7044 43.9612 75.6187 43.6087C70.0866 41.8129 63.1142 42.6254 56.9023 43.3775C48.1375 44.4386 39.7384 46.4448 31.9301 50.3313C30.2579 51.1636 28.6366 52.0507 27.0739 52.996ZM39.3592 6.74785C40.562 8.44837 41.77 10.1257 43.0745 11.7963C44.2391 13.2879 45.3417 14.2119 46.4019 14.6021C47.3499 14.9511 48.4962 14.9607 50.0597 14.0894C51.2263 13.4392 52.4054 11.9857 53.012 10.2413C53.6183 8.4975 53.5095 6.91275 52.7854 5.85524C52.5467 5.5067 51.9551 5.16172 50.6653 5.05646C49.547 4.9652 48.3598 5.08681 47.3096 5.19439C47.2017 5.20545 47.0952 5.21636 46.9903 5.22687C44.3846 5.48822 41.8363 5.99839 39.3592 6.74785Z"
                  />
                </svg>
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
