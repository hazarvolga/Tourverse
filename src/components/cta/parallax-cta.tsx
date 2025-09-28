'use client';

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import Link from 'next/link';

export function ParallaxCta() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const parallaxRef = React.useRef<HTMLDivElement>(null);
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current && sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        const scrollPosition = window.pageYOffset;
        
        // Check if the section is in view
        if (scrollPosition + window.innerHeight > sectionTop && scrollPosition < sectionTop + sectionHeight) {
          const yOffset = scrollPosition - sectionTop;
          parallaxRef.current.style.transform = `translateY(${yOffset * 0.2}px)`;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backgroundImage = PlaceHolderImages.find(img => img.id === 'hero-slide-2');

  return (
    <section ref={sectionRef} className="relative h-[70vh] w-full overflow-hidden bg-background">
      {backgroundImage && (
        <div ref={parallaxRef} className="absolute inset-[-20%] w-[140%] h-[140%]">
          <Image
            src={backgroundImage.imageUrl}
            alt="Adventure Awaits"
            fill
            className="object-cover"
            data-ai-hint={backgroundImage.imageHint}
          />
        </div>
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div 
        ref={ref}
        className="relative container mx-auto px-4 md:px-6 h-full flex flex-col justify-center items-center text-center z-10"
      >
        <h2 
          className={cn(
            "text-sm font-bold uppercase tracking-widest text-secondary transition-all duration-700 ease-out",
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          The World is Waiting
        </h2>
        <p 
          className={cn(
            "mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-white max-w-3xl text-shadow-lg transition-all duration-700 ease-out delay-200",
             inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          Your Story Is Out There
        </p>
        <p
            className={cn(
                "mt-6 text-lg text-white/80 max-w-2xl transition-all duration-700 ease-out delay-300",
                inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
        >
            Don't just dream about your next adventure—live it. We handle the details so you can focus on making memories. From towering peaks to ancient ruins, your journey starts with a single click.
        </p>
        <div
            className={cn(
                "mt-8 transition-all duration-700 ease-out delay-[400ms]",
                inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
        >
            <Button size="lg" asChild variant="secondary">
                <Link href="/tours">
                    Start Planning
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
