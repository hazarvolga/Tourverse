import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CreditCard } from 'lucide-react';

export default function PaymentsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Payments & Finance</h1>
        <p className="text-muted-foreground mt-1">
          Track revenue, manage invoices, and view transaction history.
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="text-primary" />
            Coming Soon
          </CardTitle>
          <CardDescription>
            This section is under construction. Detailed financial reports, transaction lists, and payment management features will be available here soon.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
