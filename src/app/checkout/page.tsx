
'use client';

import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import Image from 'next/image';

import { toursData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { bookTourAction, type BookTourFormState } from '@/actions/book-tour-action';
import { useToast } from '@/hooks/use-toast';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { formatCurrency } from '@/lib/utils';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle, ArrowLeft, CalendarCheck, CheckCircle, CreditCard, Phone, User } from 'lucide-react';
import Link from 'next/link';

const initialState: BookTourFormState = {
  message: '',
  isError: false,
};

function SubmitButton({ variant }: { variant: 'book' | 'pay' }) {
    const { pending } = useFormStatus();

    const icons = {
        book: <CalendarCheck />,
        pay: <CreditCard />,
    }

    const text = {
        book: 'Reserve Now',
        pay: 'Pay Now',
    }

    const pendingText = {
        book: 'Reserving...',
        pay: 'Processing...',
    }

    return (
        <Button 
            type="submit" 
            size="lg" 
            className="w-full" 
            name="action"
            value={variant}
            disabled={pending}
        >
            {pending ? (
                <>
                    {icons[variant]} {pendingText[variant]}
                </>
            ) : (
                <>
                    {icons[variant]} {text[variant]}
                </>
            )}
        </Button>
    )
}


export default function CheckoutPage() {
    const searchParams = useSearchParams();
    const { toast } = useToast();

    // Get tour details from search params
    const tourId = searchParams.get('tourId');
    const guests = searchParams.get('guests');
    const tourType = searchParams.get('tourType');
    const accommodation = searchParams.get('accommodation');

    const tour = toursData.find(t => t.id === tourId);
    const image = tour ? PlaceHolderImages.find(img => img.id === tour.imageId) : undefined;

    const [state, formAction] = useActionState(bookTourAction, initialState);

    React.useEffect(() => {
        if (state.message) {
            toast({
                title: state.isError ? 'Action Failed' : 'Action Successful!',
                description: state.message,
                variant: state.isError ? 'destructive' : 'default',
            });
        }
    }, [state, toast]);

    if (!tour || !guests || !tourType || !image) {
        return (
            <div className="container mx-auto py-12 text-center">
                <AlertTriangle className="mx-auto h-12 w-12 text-destructive" />
                <h1 className="mt-4 text-2xl font-bold">Invalid Booking Request</h1>
                <p className="mt-2 text-muted-foreground">The tour details are missing. Please start the booking process again.</p>
                <Button asChild className="mt-6">
                    <Link href="/tours">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Tours
                    </Link>
                </Button>
            </div>
        );
    }
    
    const totalPrice = tour.price * parseInt(guests);

    if (!state.isError && state.message && !state.message.includes('Redirecting to payment')) {
        return (
            <div className="container mx-auto max-w-2xl py-12 px-4 text-center">
                 <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
                 <h1 className="mt-4 text-3xl font-bold">Thank You!</h1>
                 <p className="mt-2 text-lg text-muted-foreground">{state.message}</p>
                 <Button asChild className="mt-6">
                    <Link href="/tours">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Book Another Tour
                    </Link>
                </Button>
            </div>
        )
    }

    return (
        <div className="container mx-auto max-w-4xl py-12 px-4">
            <div className="flex items-center gap-4 mb-8">
                 <Button asChild variant="outline" size="icon">
                    <Link href={`/tours/${tour.id}`}>
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                </Button>
                 <h1 className="text-3xl font-bold tracking-tight">Complete Your Reservation</h1>
            </div>

            <form action={formAction}>
                 <input type="hidden" name="tourId" value={tour.id} />
                 <input type="hidden" name="tourName" value={tour.name} />
                 <input type="hidden" name="tourType" value={tourType} />
                 <input type="hidden" name="guests" value={guests} />
                 <input type="hidden" name="accommodation" value={accommodation || 'none'} />
            
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left: Customer Details Form */}
                    <div>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <User className="text-primary"/>
                                    Your Details
                                </CardTitle>
                                <CardDescription>Please provide your contact information.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="customerName">Full Name</Label>
                                    <Input id="customerName" name="customerName" placeholder="John Doe" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="customerEmail">Email Address</Label>
                                    <Input id="customerEmail" name="customerEmail" type="email" placeholder="you@example.com" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="customerPhone">Phone Number</Label>
                                    <Input id="customerPhone" name="customerPhone" type="tel" placeholder="(555) 555-5555" />
                                </div>
                            </CardContent>
                             <CardFooter className="flex flex-col gap-4 items-stretch">
                                {state.isError && (
                                    <Alert variant="destructive">
                                        <AlertTriangle className="h-4 w-4" />
                                        <AlertTitle>Error</AlertTitle>
                                        <AlertDescription>{state.message}</AlertDescription>
                                    </Alert>
                                )}
                                <SubmitButton variant="pay" />
                                <SubmitButton variant="book" />
                            </CardFooter>
                        </Card>
                    </div>

                    {/* Right: Order Summary */}
                    <div>
                        <Card className="sticky top-24">
                            <CardHeader>
                                <CardTitle>Order Summary</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <Image src={image.imageUrl} alt={tour.name} width={128} height={96} className="rounded-md object-cover w-32 h-24" data-ai-hint={image.imageHint}/>
                                    <div>
                                        <h3 className="font-semibold">{tour.name}</h3>
                                        <p className="text-sm text-muted-foreground">{tour.destination}</p>
                                    </div>
                                </div>
                                <Separator />
                                <div className="space-y-2 text-muted-foreground">
                                    <div className="flex justify-between">
                                        <span>Tour Type:</span>
                                        <span className="font-medium text-foreground capitalize">{tourType.replace('-', ' ')}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Guests:</span>
                                        <span className="font-medium text-foreground">{guests}</span>
                                    </div>
                                    {tourType === 'multi-day' && accommodation && (
                                         <div className="flex justify-between">
                                            <span>Accommodation:</span>
                                            <span className="font-medium text-foreground capitalize">{accommodation}</span>
                                        </div>
                                    )}
                                     <div className="flex justify-between">
                                        <span>Price per guest:</span>
                                        <span className="font-medium text-foreground">{formatCurrency(tour.price)}</span>
                                    </div>
                                </div>
                                <Separator />
                                <div className="flex justify-between font-bold text-lg">
                                    <span>Total Price:</span>
                                    <span>{formatCurrency(totalPrice)}</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </form>
        </div>
    );
}
