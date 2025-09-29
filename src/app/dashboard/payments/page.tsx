
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DollarSign,
  CreditCard,
  Download,
  Activity,
  CircleHelp,
} from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import { cn } from '@/lib/utils';

type Transaction = {
  id: string;
  date: string;
  description: string;
  amount: number;
  status: 'Completed' | 'Pending' | 'Failed';
  type: 'Booking' | 'Refund' | 'Payout';
};

const transactionsData: Transaction[] = [
  {
    id: 'TRN001',
    date: '2024-07-28',
    description: 'Booking: Parisian Wonders - Alice J.',
    amount: 1200,
    status: 'Completed',
    type: 'Booking',
  },
  {
    id: 'TRN002',
    date: '2024-07-27',
    description: 'Booking: Roman Holiday - Bob W.',
    amount: 1500,
    status: 'Completed',
    type: 'Booking',
  },
  {
    id: 'TRN003',
    date: '2024-07-26',
    description: 'Refund: Parisian Wonders - Ethan H.',
    amount: -1150,
    status: 'Completed',
    type: 'Refund',
  },
  {
    id: 'TRN004',
    date: '2024-07-25',
    description: 'Booking: Tokyo Express - Charlie B.',
    amount: 2200,
    status: 'Pending',
    type: 'Booking',
  },
  {
    id: 'TRN005',
    date: '2024-07-24',
    description: 'Payout: July Guide Payments',
    amount: -5500,
    status: 'Completed',
    type: 'Payout',
  },
];

const statusStyles = {
  Completed: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
  Pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300',
  Failed: 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300',
};

export default function PaymentsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Payments & Finance
          </h1>
          <p className="text-muted-foreground mt-1">
            Track revenue, manage invoices, and view transaction history.
          </p>
        </div>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Gross Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$125,843.10</div>
            <p className="text-xs text-muted-foreground">
              +18.2% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Refunds</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">-$3,451.20</div>
            <p className="text-xs text-muted-foreground">
              -5.4% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
            <CircleHelp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,200.00</div>
            <p className="text-xs text-muted-foreground">2 pending transactions</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Net Revenue</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">$122,391.90</div>
            <p className="text-xs text-muted-foreground">
              +19.1% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>
            A log of the most recent financial activities.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactionsData.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-mono text-xs text-muted-foreground">
                    {transaction.id}
                  </TableCell>
                  <TableCell className="text-muted-foreground">{transaction.date}</TableCell>
                  <TableCell className="font-medium">
                    {transaction.description}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={cn("font-semibold", statusStyles[transaction.status])}
                    >
                      {transaction.status}
                    </Badge>
                  </TableCell>
                  <TableCell
                    className={cn(
                      'text-right font-semibold',
                      transaction.amount > 0 ? 'text-green-600' : 'text-destructive'
                    )}
                  >
                    {formatCurrency(transaction.amount)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
