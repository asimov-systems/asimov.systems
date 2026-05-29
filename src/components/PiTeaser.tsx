import { Camera, Scan, Users } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { idJoinWaitlistUrl } from '@/lib/consts';

const moments = [
  {
    icon: Camera,
    title: 'Selfie connect',
    body: 'Link a face to your relationship graph with context that stays yours.'
  },
  {
    icon: Scan,
    title: 'Scan the room',
    body: 'Camera context retrieval before you walk up: who is here and what matters.'
  },
  {
    icon: Users,
    title: 'Ask your graph',
    body: 'Who introduced you, what you last discussed, who to speak to next.'
  }
];

const PiTeaser = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-muted-foreground text-sm font-semibold tracking-wide uppercase">
            ASIMOV PI
          </p>
          <h2 className="font-calSans mt-2 text-3xl font-semibold md:text-4xl">
            Wow moments at live events
          </h2>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed">
            We are validating an invite-only mobile prototype at conferences and meetups. Product
            depth, reactions, and roadmap live on the PI page.
          </p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
          {moments.map(({ icon: Icon, title, body }) => (
            <li
              key={title}
              className="border-border rounded-lg border p-5 text-center sm:text-left"
            >
              <Icon className="text-primary mx-auto size-8 sm:mx-0" strokeWidth={1.5} />
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button asChild>
            <a href={idJoinWaitlistUrl} target="_blank" rel="noopener noreferrer">
              Join early access
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="/product">See ASIMOV PI</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { PiTeaser };
