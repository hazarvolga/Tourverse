import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function ReportsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
        <p className="text-muted-foreground mt-1">
          Generate and download custom reports for your business.
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="text-primary" />
            Coming Soon
          </CardTitle>
          <CardDescription>
            This section is under construction. You will soon be able to generate custom reports on bookings, revenue, customers, and more, with export options to CSV and PDF.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
