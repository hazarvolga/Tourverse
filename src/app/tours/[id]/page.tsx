

'use client';

import * as React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { toursData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';
import { Star, MapPin, Moon, Sun, Building, Home, Tent, CalendarCheck, ArrowRight } from 'lucide-react';
import { notFound, useParams, useRouter } from 'next/navigation';
import { formatCurrency } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

type TourType = 'one-day' | 'multi-day';
type AccommodationType = 'hotel' | 'guesthouse' | 'camping';

export default function TourDetailPage() {
  const params = useParams();
  const router = useRouter();
  const tour = toursData.find((t) => t.id === params.id);
  const image = tour ? PlaceHolderImages.find((img) => img.id === tour.imageId) : undefined;

  const [tourType, setTourType] = useState<TourType>('one-day');
  const [accommodation, setAccommodation] = useState<AccommodationType>('hotel');
  const [guests, setGuests] = useState(1);

  if (!tour || !image) {
    notFound();
  }

  const handleBooking = () => {
    const queryParams = new URLSearchParams({
        tourId: tour.id,
        guests: guests.toString(),
        tourType: tourType,
    });

    if (tourType === 'multi-day') {
        queryParams.set('accommodation', accommodation);
    }
    router.push(`/checkout?${queryParams.toString()}`);
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Left Column: Tour Info */}
        <div className="lg:col-span-2">
          <div className="relative h-[450px] w-full rounded-lg overflow-hidden mb-6">
            <Image
              src={image.imageUrl}
              alt={tour.name}
              fill
              className="object-cover"
              data-ai-hint={image.imageHint}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <h1 className="text-4xl font-bold tracking-tight mb-2">{tour.name}</h1>
          <div className="flex items-center gap-4 text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{tour.destination}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 text-secondary fill-secondary" />
              <span className="font-semibold text-foreground">{tour.rating}</span>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Embark on the '{tour.name}' tour, a {tour.duration}-day {tour.category.toLowerCase()} experience in the heart of {tour.destination}. This journey is curated for those who seek {tour.category === 'Adventure' ? 'thrill and exploration' : tour.category === 'Cultural' ? 'deep cultural immersion' : 'ultimate relaxation'}.
          </p>

          <Separator className="my-8" />

          <div className="space-y-4">
              <h2 className="text-2xl font-bold">Tour Highlights</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Experience the vibrant culture and history.</li>
                <li>Visit iconic landmarks and hidden gems.</li>
                <li>Enjoy authentic local cuisine.</li>
                <li>Guided by our expert and friendly staff.</li>
              </ul>
          </div>
        </div>

        {/* Right Column: Booking Form */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24 shadow-lg">
            <CardHeader>
              <CardTitle>Book Your Adventure</CardTitle>
              <CardDescription>Select your options and get ready for an unforgettable trip.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex justify-between items-baseline">
                    <span className="text-muted-foreground">From</span>
                    <p className="text-3xl font-bold text-primary">{formatCurrency(tour.price)}</p>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                    <Label className="text-base font-semibold">Select Tour Type</Label>
                    <RadioGroup
                        value={tourType}
                        onValueChange={(value: TourType) => setTourType(value)}
                        className="grid grid-cols-2 gap-4"
                    >
                        <Label htmlFor="one-day" className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer">
                            <RadioGroupItem value="one-day" id="one-day" className="sr-only" />
                            <Sun className="mb-3 h-6 w-6" />
                            One-Day Tour
                        </Label>
                        <Label htmlFor="multi-day" className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer">
                            <RadioGroupItem value="multi-day" id="multi-day" className="sr-only" />
                             <Moon className="mb-3 h-6 w-6" />
                            Multi-Day Tour
                        </Label>
                    </RadioGroup>
                </div>

                {tourType === 'multi-day' && (
                  <div className="space-y-2 animate-in fade-in-0 duration-500">
                    <Label htmlFor="accommodation" className="text-base font-semibold">Accommodation</Label>
                     <p className="text-sm text-muted-foreground">Optional for multi-day tours.</p>
                     <RadioGroup
                        value={accommodation}
                        onValueChange={(value: AccommodationType) => setAccommodation(value)}
                        className="grid grid-cols-3 gap-2"
                    >
                         <div>
                            <RadioGroupItem value="hotel" id="hotel" className="sr-only peer" />
                            <Label htmlFor="hotel" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                               <Building className="mb-2 h-5 w-5" />
                               Hotel
                            </Label>
                        </div>
                        <div>
                            <RadioGroupItem value="guesthouse" id="guesthouse" className="sr-only peer" />
                            <Label htmlFor="guesthouse" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                               <Home className="mb-2 h-5 w-5" />
                               Guesthouse
                            </Label>
                        </div>
                         <div>
                            <RadioGroupItem value="camping" id="camping" className="sr-only peer" />
                            <Label htmlFor="camping" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                               <Tent className="mb-2 h-5 w-5" />
                               Camping
                            </Label>
                        </div>
                    </RadioGroup>
                  </div>
                )}
                
                 <div className="space-y-2">
                    <Label htmlFor="guests" className="text-base font-semibold">Number of Guests</Label>
                     <Input 
                        id="guests" 
                        name="guests"
                        type="number" 
                        min="1" 
                        max="10" 
                        value={guests} 
                        onChange={(e) => setGuests(parseInt(e.target.value, 10))}
                        className="text-base"
                    />
                </div>
                
                <Button onClick={handleBooking} size="lg" className="w-full">
                    Book Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
