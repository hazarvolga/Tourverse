import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Award, Globe, Users } from 'lucide-react';

const stats = [
    { icon: Globe, value: '50+', label: 'Destinations Worldwide' },
    { icon: Users, value: '10,000+', label: 'Happy Travelers' },
    { icon: Award, value: '15+', label: 'Years of Experience' },
]

export default function AboutPage() {
    const aboutImage = PlaceHolderImages.find(p => p.id === 'hero-slide-2');
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-background">
        {aboutImage && (
            <Image
                src={aboutImage.imageUrl}
                alt="Group of happy travelers"
                fill
                className="object-cover"
                data-ai-hint={aboutImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4 md:px-6 h-full flex flex-col justify-center text-center items-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-shadow-lg">About TourVerse</h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl">
            Crafting unforgettable travel experiences, one journey at a time.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="text-primary font-semibold tracking-wider uppercase">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                To Inspire and Enable Meaningful Exploration
              </h2>
              <p className="text-muted-foreground text-lg">
                At TourVerse, we believe that travel is more than just visiting new places; it's about connecting with cultures, creating lasting memories, and enriching your perspective. Our mission is to provide seamless, authentic, and extraordinary travel adventures that go beyond the surface.
              </p>
              <p className="text-muted-foreground">
                From hand-picked local guides to carefully curated itineraries, every detail is designed to give you an immersive and worry-free experience. We handle the logistics, so you can focus on the magic of discovery.
              </p>
              <Button asChild size="lg" className="mt-4">
                <Link href="/tours">Explore Our Tours</Link>
              </Button>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3NTg4MDMwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Our team collaborating"
                fill
                className="object-cover"
                data-ai-hint="team collaboration"
                />
            </div>
          </div>
        </div>
      </section>

        {/* Stats Section */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-4xl font-bold">{stat.value}</p>
                <p className="text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
