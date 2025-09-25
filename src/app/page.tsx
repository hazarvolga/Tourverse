import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Bot, Compass, LineChart, ListOrdered } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  const features = [
    {
      icon: <Compass className="size-8 text-primary" />,
      title: 'Interactive Tour Planning',
      description: 'Visually build and organize your tour itineraries with our intuitive drag-and-drop dashboard.',
      image: PlaceHolderImages.find((img) => img.id === 'feature1'),
    },
    {
      icon: <ListOrdered className="size-8 text-primary" />,
      title: 'Seamless Booking Management',
      description: 'Effortlessly manage your bookings, availability, and pricing with real-time updates and notifications.',
      image: PlaceHolderImages.find((img) => img.id === 'feature2'),
    },
    {
      icon: <Bot className="size-8 text-primary" />,
      title: 'AI-Powered Itineraries',
      description: 'Generate personalized tour plans in seconds based on preferences, history, and trending spots.',
      image: PlaceHolderImages.find((img) => img.id === 'feature3'),
    },
    {
      icon: <LineChart className="size-8 text-primary" />,
      title: 'Real-Time Analytics',
      description: 'Gain valuable insights into your business with our comprehensive and interactive analytics dashboard.',
      image: PlaceHolderImages.find((img) => img.id === 'feature4'),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 p-4 text-white max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-shadow-lg">
            Craft Unforgettable Journeys with TourVerse
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-shadow">
            The all-in-one platform to plan, manage, and analyze your tours with elegance and power.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/dashboard">
                Get Started <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
              <Link href="/itinerary-generator">
                AI Itinerary Tool
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">A New Universe of Tour Management</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              TourVerse provides a suite of powerful, intuitive tools designed to elevate your tour business.
            </p>
          </div>
          <div className="grid gap-10 lg:gap-16">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`flex flex-col-reverse gap-8 md:grid md:grid-cols-2 md:items-center md:gap-12 ${
                  index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                  <div className="flex items-center gap-4 mb-4">
                    {feature.icon}
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-lg">{feature.description}</p>
                   <Button asChild variant="link" className="px-0 mt-4 text-lg text-primary">
                      <Link href="/dashboard">
                        Learn More <ArrowRight className="ml-2" />
                      </Link>
                    </Button>
                </div>
                <div className="w-full aspect-w-4 aspect-h-3">
                  {feature.image && (
                     <Image
                      src={feature.image.imageUrl}
                      alt={feature.image.description}
                      width={800}
                      height={600}
                      className="object-cover rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105"
                      data-ai-hint={feature.image.imageHint}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
       <section className="bg-card py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Elevate Your Business?</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Join TourVerse today and start creating, managing, and growing your tours like never before.
            </p>
            <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/dashboard">
                Explore The Dashboard <ArrowRight className="ml-2" />
              </Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
