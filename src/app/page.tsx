import { HeroSection } from '@/components/hero/hero-section';
import { TourCard } from '@/components/tours/tour-card';
import { TourFilter } from '@/components/tours/tour-filter';
import { toursData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  const featuredTours = toursData.slice(0, 5); // Example: Show first 5 tours

  return (
    <>
      <HeroSection />
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <header className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Find Your Next Adventure</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the world with our hand-picked tours, crafted for the modern adventurer.
          </p>
        </header>

        <TourFilter />

        <main className="mt-12">
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {featuredTours.map((tour, index) => {
              // Asymmetrical layout logic
              let colSpan = 'col-span-12 md:col-span-6 lg:col-span-4'; // Default
              if (index === 0) colSpan = 'col-span-12 lg:col-span-8'; // First item is larger
              if (index === 3) colSpan = 'col-span-12 md:col-span-7'; // Asymmetrical item
              if (index === 4) colSpan = 'col-span-12 md:col-span-5'; // Asymmetrical item
              
              return (
                <div key={tour.id} className={colSpan}>
                  <TourCard tour={tour} />
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
             <Button size="lg" asChild>
                <Link href="/dashboard/bookings">View All Tours</Link>
             </Button>
          </div>
        </main>
      </div>
    </>
  );
}
