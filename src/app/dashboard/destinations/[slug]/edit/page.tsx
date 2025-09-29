
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
import { ArrowLeft, Upload } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { toursData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

// This is a placeholder. In a real app, you'd fetch this data based on the slug.
const getDestinationData = (slug: string) => {
    const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

    // Find the tour whose destination, when slugified, matches the slug from the URL
    const tour = toursData.find(t => slugify(t.destination) === slug);

    if (!tour) return null;

    const image = PlaceHolderImages.find(p => p.id === tour.imageId);

    return {
        name: tour.destination,
        description: `Explore the vibrant culture and stunning landscapes of ${tour.destination}. From its iconic landmarks to hidden gems, it offers a unique experience for every traveler.`,
        image: image?.imageUrl || '',
        imageHint: image?.imageHint || 'landscape'
    };
}


export default function EditDestinationPage({ params }: { params: { slug: string } }) {
  const destination = getDestinationData(params.slug);

  if (!destination) {
    return (
        <div className="container mx-auto py-10">
            <h1 className="text-2xl font-bold">Destination not found</h1>
            <Button asChild variant="outline" className="mt-4">
                <Link href="/dashboard/destinations">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Destinations
                </Link>
            </Button>
        </div>
    );
  }

  return (
    <div className="space-y-8">
       <div className="flex items-center gap-4">
         <Button asChild variant="outline" size="icon">
           <Link href="/dashboard/destinations">
             <ArrowLeft className="h-4 w-4" />
           </Link>
         </Button>
         <div>
            <h1 className="text-3xl font-bold tracking-tight">Edit Destination</h1>
            <p className="text-muted-foreground mt-1">
                Update the details for {destination.name}.
            </p>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Destination Details</CardTitle>
          <CardDescription>
            Modify the content below and click save.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Column for Form Fields */}
                <div className="md:col-span-2 space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="dest-name">Destination Name</Label>
                        <Input id="dest-name" defaultValue={destination.name} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="dest-description">Description</Label>
                        <Textarea
                        id="dest-description"
                        defaultValue={destination.description}
                        className="min-h-48"
                        />
                    </div>
                </div>
                
                {/* Right Column for Image */}
                <div className="md:col-span-1 space-y-4">
                    <Label>Featured Image</Label>
                    <div className="relative aspect-[4/3] w-full rounded-md overflow-hidden border">
                        <Image src={destination.image} alt={destination.name} fill className="object-cover" data-ai-hint={destination.imageHint}/>
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
