import { TourCard } from '@/components/tours/tour-card';
import { TourFilter } from '@/components/tours/tour-filter';
import { toursData } from '@/lib/data';

export default function ToursPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Explore All Tours</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Find your perfect journey from our collection of handcrafted adventures.
        </p>
      </header>

      <TourFilter />

      <main className="mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {toursData.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </main>
    </div>
  );
}
