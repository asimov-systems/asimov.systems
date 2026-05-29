import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { idJoinWaitlistUrl } from '@/lib/consts';

const StickyWaitlistCta = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 480);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.paddingBottom = visible ? '4.5rem' : '';
    return () => {
      document.body.style.paddingBottom = '';
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="border-border bg-background/95 supports-[backdrop-filter]:bg-background/80 fixed inset-x-0 bottom-0 z-50 border-t p-3 backdrop-blur md:p-4">
      <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 sm:flex-row lg:px-6">
        <p className="text-center text-sm font-medium sm:text-left">
          Early access for ASIMOV PI at live events
        </p>
        <Button asChild size="sm" className="w-full shrink-0 sm:w-auto">
          <a href={idJoinWaitlistUrl} target="_blank" rel="noopener noreferrer">
            Join early access
          </a>
        </Button>
      </div>
    </div>
  );
};

export { StickyWaitlistCta };
