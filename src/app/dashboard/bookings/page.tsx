import { BookingsTable } from '@/components/bookings/bookings-table';
import { bookingsData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function BookingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Booking Management</h1>
        <p className="text-muted-foreground mt-1">
          View, manage, and track all tour bookings.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Bookings</CardTitle>
          <CardDescription>
            A list of all bookings in the system.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <BookingsTable data={bookingsData} />
        </CardContent>
      </Card>
    </div>
  );
}
