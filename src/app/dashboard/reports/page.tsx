
'use client';

import * as React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FileText, Download, Trash2, FileUp, Calendar as CalendarIcon } from 'lucide-react';
import { DateRangePicker } from '@/components/ui/date-range-picker';
import { DateRange } from 'react-day-picker';

type RecentReport = {
  id: string;
  type: string;
  dateRange: string;
  generatedAt: string;
  format: 'CSV' | 'PDF';
};

const recentReportsData: RecentReport[] = [
    { id: 'REP001', type: 'Revenue', dateRange: 'Jun 1, 2024 - Jun 30, 2024', generatedAt: 'Jul 1, 2024', format: 'PDF' },
    { id: 'REP002', type: 'Bookings', dateRange: 'Jun 1, 2024 - Jun 30, 2024', generatedAt: 'Jul 1, 2024', format: 'CSV' },
    { id: 'REP003', type: 'Customer List', dateRange: 'N/A', generatedAt: 'Jun 28, 2024', format: 'CSV' },
];

export default function ReportsPage() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2024, 5, 1),
    to: new Date(2024, 5, 30),
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
        <p className="text-muted-foreground mt-1">
          Generate and download custom reports for your business.
        </p>
      </div>
      
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Report Generator */}
        <div className="lg:col-span-1">
            <Card>
                <CardHeader>
                <CardTitle>Generate a New Report</CardTitle>
                <CardDescription>
                    Select your criteria to generate a custom report.
                </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Report Type</label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a report type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="revenue">Revenue Report</SelectItem>
                                <SelectItem value="bookings">Bookings Report</SelectItem>
                                <SelectItem value="customers">Customer List</SelectItem>
                                <SelectItem value="performance">Tour Performance</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                     <div className="space-y-2">
                        <label className="text-sm font-medium">Date Range</label>
                        <DateRangePicker date={date} onDateChange={setDate} />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Export Format</label>
                        <Select defaultValue="pdf">
                            <SelectTrigger>
                                <SelectValue placeholder="Select a format" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="pdf">PDF</SelectItem>
                                <SelectItem value="csv">CSV</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full">
                        <FileUp className="mr-2 h-4 w-4" />
                        Generate Report
                    </Button>
                </CardFooter>
            </Card>
        </div>

        {/* Recent Reports */}
        <div className="lg:col-span-2">
            <Card>
                <CardHeader>
                <CardTitle>Recent Reports</CardTitle>
                <CardDescription>
                    Download or manage your recently generated reports.
                </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Report Type</TableHead>
                                <TableHead>Date Range</TableHead>
                                <TableHead>Format</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {recentReportsData.map((report) => (
                                <TableRow key={report.id}>
                                    <TableCell className="font-medium flex items-center gap-2">
                                        <FileText className="h-4 w-4 text-muted-foreground" />
                                        {report.type}
                                    </TableCell>
                                    <TableCell className="text-muted-foreground">{report.dateRange}</TableCell>
                                    <TableCell className="text-muted-foreground">{report.format}</TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="icon" className="mr-2">
                                            <Download className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="text-destructive hover:bg-destructive/10">
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
