import Image from 'next/image';
import Link from 'next/link';
import { toursData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

// Get unique destinations from toursData
const uniqueDestinations = Array.from(new Set(toursData.map(tour => tour.destination)))
    .map(destination => {
        const tour = toursData.find(t => t.destination === destination)!;
        const image = PlaceHolderImages.find(img => img.id === tour.imageId);
        const tourCount = toursData.filter(t => t.destination === destination).length;
        return {
            name: destination,
            image: image?.imageUrl || '',
            imageHint: image?.imageHint || 'landscape travel',
            url: `/tours?destination=${encodeURIComponent(destination)}`,
            tourCount: tourCount,
        };
    });

export default function DestinationsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
       <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Destinations</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover the amazing places you can visit with us. Your next adventure is just a click away.
        </p>
      </header>
      
      <main>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {uniqueDestinations.map((dest) => (
            <Card key={dest.name} className="overflow-hidden group">
              <Link href={dest.url} className="block">
                <div className="relative h-60">
                    <Image
                        src={dest.image}
                        alt={dest.name}
                        fill
                        className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                        data-ai-hint={dest.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardContent className="p-4">
                    <h3 className="text-xl font-bold">{dest.name}</h3>
                    <p className="text-sm text-muted-foreground">{dest.tourCount} tours available</p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
