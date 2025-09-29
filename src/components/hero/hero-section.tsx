
'use client';

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { toursData } from '@/lib/data';
import { Tour } from '@/lib/types';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

const featuredTours = toursData.slice(0, 3); // Use first 3 tours for the hero carousel

function HeroSlide({ tour, inView }: { tour: Tour, inView: boolean }) {
  const image = PlaceHolderImages.find((img) => img.id === tour.imageId);

  return (
    <div className="relative w-full h-full min-h-[80vh] flex items-center justify-center">
      {image && (
        <Image
          src={image.imageUrl}
          alt={tour.name}
          fill
          className="object-cover"
          priority
          data-ai-hint={image.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center text-white p-4">
        <h1 
            className={cn(
                "text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-shadow-lg transition-all duration-700 ease-out",
                inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
        >
          {tour.name}
        </h1>
        <p 
            className={cn(
                "mt-4 text-lg md:text-xl max-w-3xl mx-auto text-shadow transition-all duration-700 ease-out delay-200",
                inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
        >
          Embark on a {tour.duration}-day {tour.category.toLowerCase()} experience in beautiful {tour.destination}.
        </p>
        <div 
            className={cn(
                "mt-8 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ease-out delay-300",
                inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
        >
          <Button size="lg" asChild>
            <Link href={`/tours/${tour.id}`}>
              Explore Tour <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/tours">View All Tours</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}


export function HeroSection() {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    );

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

  return (
     <section ref={ref} className="relative w-full overflow-hidden bg-background">
        <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
                loop: true,
            }}
        >
            <CarouselContent>
                {featuredTours.map((tour) => (
                    <CarouselItem key={tour.id}>
                        <HeroSlide tour={tour} inView={inView} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 z-20 hidden md:flex" />
            <CarouselNext className="absolute right-4 z-20 hidden md:flex" />
        </Carousel>
     </section>
  );
}
