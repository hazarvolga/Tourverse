import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Clock, DollarSign } from 'lucide-react';
import type { Tour } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

interface TourCardProps {
  tour: Tour;
}

export function TourCard({ tour }: TourCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === tour.imageId);

  return (
    <Card className="overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
      <div className="relative">
        {image && (
          <Image
            src={image.imageUrl}
            alt={tour.name}
            width={400}
            height={250}
            className="object-cover w-full h-48"
            data-ai-hint={image.imageHint}
          />
        )}
        <Badge className="absolute top-2 right-2" variant="secondary">{tour.category}</Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-bold mb-2 truncate">{tour.name}</h3>
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{tour.destination}</span>
        </div>
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{tour.duration} days</span>
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 mr-1 text-yellow-400 fill-yellow-400" />
            <span className="font-semibold">{tour.rating}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-primary">
            <span className="text-sm font-normal text-muted-foreground">From </span>
            ${tour.price}
          </div>
          <Button asChild size="sm">
            <Link href={`/dashboard/bookings`}>Book Now</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
