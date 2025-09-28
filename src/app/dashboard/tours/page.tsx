import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlusCircle } from 'lucide-react';
import { ToursTable } from '@/components/dashboard/tours-table';

export default function ToursDashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tours</h1>
          <p className="text-muted-foreground mt-1">
            Create, view, edit, and manage all tours.
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          New Tour
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>All Tours</CardTitle>
          <CardDescription>
            A list of all tours available in your system.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ToursTable />
        </CardContent>
      </Card>
    </div>
  );
}
