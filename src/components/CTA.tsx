import { Button } from "@/components/ui/button";

interface Cta12Props {
  heading: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
}

const Cta = ({
  heading = "Welcome",
  description = "You are officially in our investor relations contacts. We'll be in touch with updates and next steps.",
  buttons = {
    primary: {
      text: "Home",
      url: "/",
    },
    secondary: {
      text: "Contact Us",
      url: "/contact",
    },
  },
}: Cta12Props) => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="bg-accent rounded-lg p-8 md:rounded-xl lg:p-12">
          <div className="mx-auto max-w-4xl text-center">
            <h3 className="mb-4 text-3xl font-semibold md:text-5xl lg:mb-6 lg:text-6xl">
              {heading}
            </h3>
            <p className="text-muted-foreground mb-8 text-lg font-medium lg:text-xl">
              {description}
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              {buttons.primary && (
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <a href={buttons.primary.url}>{buttons.primary.text}</a>
                </Button>
              )}
              {buttons.secondary && (
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                  asChild
                >
                  <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta };
