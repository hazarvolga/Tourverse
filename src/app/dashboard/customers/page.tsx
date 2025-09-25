import { CustomerCard } from '@/components/customers/customer-card';
import { customersData } from '@/lib/data';
import { Input } from '@/components/ui/input';

export default function CustomersPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Customer Management</h1>
        <p className="text-muted-foreground mt-1">
          Browse and manage your customer profiles, preferences, and history.
        </p>
      </div>
      
      {/* Client component for filtering would go here */}
      <div className="flex items-center">
        <Input
          placeholder="Search customers..."
          className="max-w-sm"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {customersData.map((customer) => (
          <CustomerCard key={customer.id} customer={customer} />
        ))}
      </div>
    </div>
  );
}
