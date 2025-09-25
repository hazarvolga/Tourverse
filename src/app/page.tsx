import { TourCard } from '@/components/tours/tour-card';
import { TourFilter } from '@/components/tours/tour-filter';
import { toursData } from '@/lib/data';

export default function Home() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Find Your Next Adventure</h1>
        <p className="text-xl text-muted-foreground">Explore the world with our hand-picked tours.</p>
      </header>

      <TourFilter />

      <main>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {toursData.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </main>
    </div>
  );
}
