'use client';

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

export function HeroSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const parallaxRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const yOffset = window.pageYOffset;
        parallaxRef.current.style.transform = `translateY(${yOffset * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuredImage = PlaceHolderImages.find(img => img.id === 'hero-slide-1');

  return (
    <section ref={ref} className="relative min-h-[80vh] w-full overflow-hidden bg-background py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 h-full flex items-center">
        {/* Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-5 z-10 text-center lg:text-left">
            <h1 
              className={cn(
                "text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-foreground transition-all duration-700 ease-out",
                inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              )}
            >
              Discover Unforgettable Journeys
            </h1>
            <p 
              className={cn(
                "mt-6 text-lg md:text-xl text-muted-foreground max-w-md mx-auto lg:mx-0 transition-all duration-700 ease-out delay-200",
                 inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              )}
            >
              Explore curated tours to the world's most breathtaking destinations. Your next great story is out there.
            </p>
            <div 
              className={cn(
                "mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 ease-out delay-300",
                inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              )}
            >
              <Button size="lg" asChild>
                <Link href="/dashboard/bookings">
                  Book Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="#">
                  Explore Destinations
                </Link>
              </Button>
            </div>
          </div>

          {/* Image Content */}
          <div className="lg:col-span-7 relative flex items-center justify-center lg:justify-end h-full">
            <div 
              className={cn(
                "relative w-[90vw] h-[60vh] max-w-4xl rounded-lg overflow-hidden shadow-2xl transition-all duration-1000 ease-in-out",
                inView ? "scale-100 opacity-100" : "scale-90 opacity-0"
              )}
            >
                {featuredImage && (
                  <div ref={parallaxRef} className="absolute inset-[-15%] w-[130%] h-[130%]">
                    <Image
                      src={featuredImage.imageUrl}
                      alt="Featured Destination"
                      fill
                      className="object-cover"
                      priority
                      data-ai-hint={featuredImage.imageHint}
                    />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
