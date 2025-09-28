import { PlanningBoard } from '@/components/planning/planning-board';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

export default function PlanningPage() {
  return (
    <div className="space-y-8 h-full flex flex-col">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tour Management</h1>
          <p className="text-muted-foreground mt-1">
            Create, view, edit, and manage all tours.
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          New Tour
        </Button>
      </div>
      <div className="flex-grow">
        <PlanningBoard />
      </div>
    </div>
  );
}
