import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Contact } from 'lucide-react';

export default function StaffPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Staff & Guides</h1>
        <p className="text-muted-foreground mt-1">
          Manage your team, track performance, and view schedules.
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Contact className="text-primary" />
            Coming Soon
          </CardTitle>
          <CardDescription>
            This section is under construction. Features for managing staff profiles, schedules, assigned tours, and performance metrics will be available here soon.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
