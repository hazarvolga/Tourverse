import { PlanningBoard } from '@/components/planning/planning-board';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

export default function PlanningPage() {
  return (
    <div className="space-y-8 h-full flex flex-col">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tour Itinerary Planner</h1>
          <p className="text-muted-foreground mt-1">
            Drag and drop to build, organize, and visualize your tour schedules.
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          New Itinerary
        </Button>
      </div>
      <div className="flex-grow">
        <PlanningBoard />
      </div>
    </div>
  );
}
