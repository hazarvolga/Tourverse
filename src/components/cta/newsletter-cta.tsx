
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

export function NewsletterCta() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

  return (
    <section ref={ref} className="bg-muted/50 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div 
            className={cn(
                "max-w-3xl mx-auto text-center transition-all duration-700 ease-out",
                inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Don't Miss Out!
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to our newsletter to get the latest travel news, exclusive deals, and destination inspiration delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="h-12 text-base flex-grow"
              aria-label="Email address"
            />
            <Button type="submit" size="lg" className="h-12">
              <Send className="mr-2 h-5 w-5" />
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
