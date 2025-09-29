
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlusCircle } from 'lucide-react';
import { staffData } from '@/lib/data';
import { StaffCard } from '@/components/staff/staff-card';

export default function StaffPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Staff & Guides</h1>
          <p className="text-muted-foreground mt-1">
            Manage your team, track performance, and view schedules.
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Staff Member
        </Button>
      </div>

      <div className="flex items-center">
        <Input
          placeholder="Search by name or role..."
          className="max-w-sm"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {staffData.map((staff) => (
          <StaffCard key={staff.id} staff={staff} />
        ))}
      </div>
    </div>
  );
}
