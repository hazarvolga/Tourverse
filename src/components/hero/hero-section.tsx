'use client';

import * as React from 'react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import Link from 'next/link';

const heroSlides = [
  {
    id: 'hero-slide-1',
    title: 'Discover Unforgettable Journeys',
    description: 'Explore curated tours to the world\'s most breathtaking destinations.',
    imageId: 'hero-slide-1',
  },
  {
    id: 'hero-slide-2',
    title: 'Adventure Awaits',
    description: 'From mountain peaks to ocean depths, your next great story is out there.',
    imageId: 'hero-slide-2',
  },
  {
    id: 'hero-slide-3',
    title: 'Experience Cultures',
    description: 'Immerse yourself in new traditions, flavors, and ways of life.',
    imageId: 'hero-slide-3',
  },
];

export function HeroSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  return (
    <section className="w-full">
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: true,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {heroSlides.map((slide, index) => {
            const image = PlaceHolderImages.find(img => img.id === slide.imageId);
            return (
              <CarouselItem key={slide.id}>
                <div className="relative h-[60vh] min-h-[400px] w-full">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      data-ai-hint={image.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                    <div className="overflow-hidden">
                      <h1
                        className={cn(
                          'text-4xl font-bold tracking-tight text-shadow-lg sm:text-5xl md:text-6xl transition-all duration-1000',
                          current === index
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-full opacity-0'
                        )}
                        style={{ transitionDelay: current === index ? '200ms' : '0ms' }}
                      >
                        {slide.title}
                      </h1>
    
                    </div>
                    <div className="overflow-hidden mt-4">
                        <p
                            className={cn(
                                'mt-3 max-w-md text-lg text-shadow-md sm:max-w-xl transition-all duration-1000',
                                current === index
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-full opacity-0'
                            )}
                            style={{ transitionDelay: current === index ? '400ms' : '0ms' }}
                        >
                            {slide.description}
                        </p>
                    </div>
                    <div className="overflow-hidden mt-8">
                        <div
                             className={cn(
                                'transition-all duration-1000',
                                current === index
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-full opacity-0'
                            )}
                            style={{ transitionDelay: current === index ? '600ms' : '0ms' }}
                        >
                            <Button asChild size="lg" className='bg-primary hover:bg-primary/90'>
                                <Link href="/dashboard/bookings">Explore Tours</Link>
                            </Button>
                        </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
