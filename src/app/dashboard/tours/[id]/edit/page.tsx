
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Upload } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { toursData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const getTourData = (id: string) => {
    const tour = toursData.find(t => t.id === id);

    if (!tour) return null;

    const image = PlaceHolderImages.find(p => p.id === tour.imageId);

    return {
        ...tour,
        image: image?.imageUrl || '',
        imageHint: image?.imageHint || 'landscape'
    };
}


export default function EditTourPage({ params }: { params: { id: string } }) {
  const tour = getTourData(params.id);

  if (!tour) {
    return (
        <div className="container mx-auto py-10">
            <h1 className="text-2xl font-bold">Tour not found</h1>
            <Button asChild variant="outline" className="mt-4">
                <Link href="/dashboard/tours">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Tours
                </Link>
            </Button>
        </div>
    );
  }

  return (
    <div className="space-y-8">
       <div className="flex items-center gap-4">
         <Button asChild variant="outline" size="icon">
           <Link href="/dashboard/tours">
             <ArrowLeft className="h-4 w-4" />
           </Link>
         </Button>
         <div>
            <h1 className="text-3xl font-bold tracking-tight">Edit Tour</h1>
            <p className="text-muted-foreground mt-1">
                Update the details for {tour.name}.
            </p>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Tour Details</CardTitle>
          <CardDescription>
            Modify the content below and click save.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="tour-name">Tour Name</Label>
                        <Input id="tour-name" defaultValue={tour.name} />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="tour-destination">Destination</Label>
                        <Input id="tour-destination" defaultValue={tour.destination} />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                         <div className="space-y-2">
                            <Label htmlFor="tour-price">Price ($)</Label>
                            <Input id="tour-price" type="number" defaultValue={tour.price} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="tour-duration">Duration (days)</Label>
                            <Input id="tour-duration" type="number" defaultValue={tour.duration} />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="tour-category">Category</Label>
                             <Select defaultValue={tour.category}>
                                <SelectTrigger id="tour-category">
                                    <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Adventure">Adventure</SelectItem>
                                    <SelectItem value="Cultural">Cultural</SelectItem>
                                    <SelectItem value="Relaxation">Relaxation</SelectItem>
                                    <SelectItem value="City Break">City Break</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="tour-rating">Rating</Label>
                            <Input id="tour-rating" type="number" step="0.1" max="5" defaultValue={tour.rating} />
                        </div>
                    </div>
                </div>
                
                <div className="md:col-span-1 space-y-4">
                    <Label>Featured Image</Label>
                    <div className="relative aspect-[4/3] w-full rounded-md overflow-hidden border">
                        <Image src={tour.image} alt={tour.name} fill className="object-cover" data-ai-hint={tour.imageHint}/>
                    </div>
                    <Button variant="outline" className="w-full">
                        <Upload className="mr-2 h-4 w-4" />
                        Change Image
                    </Button>
                </div>
            </div>
        </CardContent>
        <CardFooter className="justify-end">
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
