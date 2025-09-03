const Contact = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center">
          <h1 className="mb-3 text-5xl font-bold">Contact</h1>
          <p className="text-muted-foreground text-lg">Find the right solution</p>
        </div>
        <div className="mx-auto mt-24 grid max-w-7xl gap-4 md:grid-cols-2">
          <img
            src="/logo-square.svg"
            alt="placeholder"
            className="bg-accent h-full rounded-lg object-cover"
          />
          <div className="bg-accent flex flex-col gap-2 rounded-lg p-2">
            <div className="bg-background flex h-full flex-col justify-between gap-6 rounded-lg p-6">
              <p className="text-2xl">Email</p>
              <div className="flex flex-col">
                <a href="mailto:access@asimov.systems">access@asimov.systems</a>
                <a href="mailto:talal@asimov.systems">talal@asimov.systems</a>
              </div>
            </div>
            <div className="bg-background flex h-full flex-col justify-between gap-6 rounded-md p-6">
              <p className="text-2xl">Office</p>
              <div className="grid gap-8 md:grid-cols-2 md:gap-4">
                <div>
                  <p className="text-muted-foreground mb-2 text-xl md:mb-4">Newark</p>
                  <p>131 Continental Dr, Suite 305, Newark, DE 19713, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact };
