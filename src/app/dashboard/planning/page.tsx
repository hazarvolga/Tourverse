
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlusCircle } from 'lucide-react';
import { PlanningBoard } from '@/components/planning/planning-board';

export default function PlanningPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tour Itinerary Planning</h1>
          <p className="text-muted-foreground mt-1">
            Drag, drop, and organize your tour schedules.
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          New Itinerary
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Tours</CardTitle>
          <CardDescription>
            A timeline of your upcoming tours.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <PlanningBoard />
        </CardContent>
      </Card>
    </div>
  );
}

