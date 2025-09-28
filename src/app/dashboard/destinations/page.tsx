import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlusCircle } from 'lucide-react';
import { DestinationsTable } from '@/components/dashboard/destinations-table';

export default function DestinationsDashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Destinations</h1>
          <p className="text-muted-foreground mt-1">
            Manage your tour destinations.
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          New Destination
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>All Destinations</CardTitle>
          <CardDescription>
            A list of all destinations where you offer tours.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <DestinationsTable />
        </CardContent>
      </Card>
    </div>
  );
}
