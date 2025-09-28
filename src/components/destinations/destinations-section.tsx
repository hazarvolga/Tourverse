'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { toursData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

// Get unique destinations from toursData
const uniqueDestinations = Array.from(new Set(toursData.map(tour => tour.destination)))
    .map(destination => {
        const tour = toursData.find(t => t.destination === destination)!;
        const image = PlaceHolderImages.find(img => img.id === tour.imageId);
        return {
            name: destination,
            image: image?.imageUrl || '',
            imageHint: image?.imageHint || 'landscape travel',
            url: `/tours?destination=${encodeURIComponent(destination)}`
        };
    })
    .slice(0, 6); // Limit to 6 destinations for the grid

export function DestinationsSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section ref={ref} className="bg-background py-20 md:py-28">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Featured Destinations
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Journey to the world's most captivating places. Where will you go next?
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
                    {uniqueDestinations.map((dest, index) => (
                        <Link 
                            href={dest.url} 
                            key={dest.name} 
                            className={cn(
                                "group relative h-64 md:h-96 rounded-lg overflow-hidden transition-all duration-700 ease-out",
                                "col-span-1",
                                index === 0 && "lg:col-span-2",
                                index === 3 && "lg:col-span-2",
                                inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            )}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <Image
                                src={dest.image}
                                alt={dest.name}
                                fill
                                className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                                data-ai-hint={dest.imageHint}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-4 md:p-6">
                                <h3 className="text-xl md:text-2xl font-bold text-white text-shadow">
                                    {dest.name}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="text-center mt-12">
                     <Button size="lg" variant="outline" asChild>
                        <Link href="/destinations">
                            Explore All Destinations <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                     </Button>
                </div>
            </div>
        </section>
    );
}
