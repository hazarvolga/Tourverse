import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Clock, ArrowRight } from 'lucide-react';
import type { Tour } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface TourCardProps {
  tour: Tour;
}

export function TourCard({ tour }: TourCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === tour.imageId);

  return (
    <Card className="overflow-hidden group h-full transition-shadow duration-300 hover:shadow-2xl flex flex-col">
      <div className="relative overflow-hidden">
        {image && (
          <Image
            src={image.imageUrl}
            alt={tour.name}
            width={800}
            height={600}
            className="object-cover w-full h-60 transition-transform duration-500 ease-in-out group-hover:scale-110"
            data-ai-hint={image.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4">
            <h3 className="text-2xl font-bold text-white tracking-tight text-shadow-md">{tour.name}</h3>
             <div className="flex items-center text-sm text-white/90 mt-1 text-shadow-sm">
                <MapPin className="w-4 h-4 mr-1.5" />
                <span>{tour.destination}</span>
            </div>
        </div>
         <Badge 
            variant="secondary" 
            className={cn("absolute top-4 right-4 text-sm py-1 px-3", 
                tour.category === 'Adventure' && 'bg-accent text-accent-foreground',
                tour.category === 'Cultural' && 'bg-primary text-primary-foreground'
            )}
        >
            {tour.category}
        </Badge>
      </div>
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between text-base text-muted-foreground mb-4">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            <span>{tour.duration} days</span>
          </div>
          <div className="flex items-center">
            <Star className="w-5 h-5 mr-1 text-secondary fill-secondary" />
            <span className="font-semibold text-foreground">{tour.rating}</span>
          </div>
        </div>
        
        <p className="flex-grow text-muted-foreground mb-6">Embark on the '{tour.name}' tour, a {tour.duration}-day {tour.category.toLowerCase()} experience in {tour.destination}.</p>

        <div className="flex items-center justify-between mt-auto">
          <div className="text-2xl font-bold text-primary">
            <span className="text-sm font-normal text-muted-foreground mr-1">From</span>
            ${tour.price}
          </div>
          <Button asChild>
            <Link href={`/tours/${tour.id}`} className="group-hover:pl-5 transition-all">
              Details <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
