import { ItineraryGenerator } from '@/components/itinerary/itinerary-generator';
import { Bot } from 'lucide-react';

export default function ItineraryGeneratorPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <div className="text-center">
        <Bot className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          AI-Powered Itinerary Generator
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Describe your dream trip, and let our AI craft a personalized itinerary just for you. Mention your interests, budget, and desired duration.
        </p>
      </div>
      <div className="mt-10">
        <ItineraryGenerator />
      </div>
    </div>
  );
}
