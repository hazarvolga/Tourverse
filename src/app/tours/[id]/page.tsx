

'use client';

import * as React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { toursData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Star, MapPin, Clock, Users, Sun, Moon, Building, Home, Tent, Info, CheckCircle, AlertTriangle } from 'lucide-react';
import { notFound, useParams } from 'next/navigation';
import { formatCurrency } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { useFormState, useFormStatus } from 'react-dom';
import { bookTourAction, type BookTourFormState } from '@/actions/book-tour-action';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';


type TourType = 'one-day' | 'multi-day';
type AccommodationType = 'hotel' | 'guesthouse' | 'camping';

const initialState: BookTourFormState = {
  message: '',
  isError: false,
};

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" size="lg" className="w-full" disabled={pending}>
            {pending ? 'Booking...' : 'Book Now'}
        </Button>
    )
}

export default function TourDetailPage() {
  const params = useParams();
  const tour = toursData.find((t) => t.id === params.id);
  const image = tour ? PlaceHolderImages.find((img) => img.id === tour.imageId) : undefined;

  const [tourType, setTourType] = useState<TourType>('one-day');
  const [accommodation, setAccommodation] = useState<AccommodationType>('hotel');
  const [guests, setGuests] = useState(1);

  const [state, formAction] = useFormState(bookTourAction, initialState);
  const { toast } = useToast();

  React.useEffect(() => {
    if (state.message) {
      toast({
        title: state.isError ? 'Booking Failed' : 'Booking Successful!',
        description: state.message,
        variant: state.isError ? 'destructive' : 'default',
      });
    }
  }, [state, toast]);


  if (!tour || !image) {
    notFound();
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
            <form action={formAction}>
              <CardContent className="space-y-6">
                <input type="hidden" name="tourId" value={tour.id} />
                <input type="hidden" name="tourName" value={tour.name} />

                <div className="flex justify-between items-baseline">
                    <span className="text-muted-foreground">From</span>
                    <p className="text-3xl font-bold text-primary">{formatCurrency(tour.price)}</p>
                </div>
                
                <Separator />
                
                {/* Tour Type Selection */}
                <div className="space-y-2">
                    <Label className="text-base font-semibold">Select Tour Type</Label>
                    <RadioGroup
                        name="tourType"
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

                {/* Accommodation - Conditional */}
                {tourType === 'multi-day' && (
                  <div className="space-y-2 animate-in fade-in-0 duration-500">
                    <Label htmlFor="accommodation" className="text-base font-semibold">Accommodation Preferences</Label>
                     <p className="text-sm text-muted-foreground">This option is only available for multi-day tours.</p>
                    <Select name="accommodation" onValueChange={(value: AccommodationType) => setAccommodation(value)} defaultValue={accommodation}>
                      <SelectTrigger id="accommodation">
                        <SelectValue placeholder="Select accommodation..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hotel"><div className="flex items-center gap-2"><Building className="h-4 w-4" /> Hotel (Comfort)</div></SelectItem>
                        <SelectItem value="guesthouse"><div className="flex items-center gap-2"><Home className="h-4 w-4" /> Guesthouse (Local Experience)</div></SelectItem>
                        <SelectItem value="camping"><div className="flex items-center gap-2"><Tent className="h-4 w-4" /> Camping (Adventure)</div></SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
                
                {/* Guests */}
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

              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <SubmitButton />
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
