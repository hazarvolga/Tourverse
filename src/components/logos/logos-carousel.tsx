
'use client';

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { useInView } from 'react-intersection-observer';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import {
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Github,
} from 'lucide-react';

const logos = [
  { name: 'Twitter', icon: Twitter },
  { name: 'Facebook', icon: Facebook },
  { name: 'Instagram', icon: Instagram },
  { name: 'LinkedIn', icon: Linkedin },
  { name: 'YouTube', icon: Youtube },
  { name: 'GitHub', icon: Github },
  { name: 'Twitter', icon: Twitter },
  { name: 'Facebook', icon: Facebook },
  { name: 'Instagram', icon: Instagram },
  { name: 'LinkedIn', icon: Linkedin },
  { name: 'YouTube', icon: Youtube },
  { name: 'GitHub', icon: Github },
];

export function LogosCarousel() {
  const plugin = React.useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={cn(
            'transition-opacity duration-1000 ease-out',
            inView ? 'opacity-100' : 'opacity-0'
          )}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Trusted by Companies Worldwide
            </h2>
            <p className="text-lg text-muted-foreground mt-2">
              We are proud to partner with leading brands in the travel industry.
            </p>
          </div>
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: 'start',
              loop: true,
            }}
          >
            <CarouselContent className="-ml-1">
              {logos.map((logo, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
                >
                  <div className="p-1">
                    <div className="flex aspect-square items-center justify-center p-6 bg-muted/50 rounded-lg">
                      <logo.icon className="w-12 h-12 text-muted-foreground" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
