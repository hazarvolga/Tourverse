import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, LineChart, BookCopy, Users, MapPin, Globe, Bot } from 'lucide-react';

const dashboardLinks = [
  {
    href: '/dashboard/analytics',
    title: 'Analytics',
    description: 'Visualize tour performance and revenue.',
    icon: <LineChart className="size-8 text-primary" />,
  },
  {
    href: '/dashboard/bookings',
    title: 'Bookings',
    description: 'Manage all your current and past bookings.',
    icon: <BookCopy className="size-8 text-primary" />,
  },
  {
    href: '/dashboard/customers',
    title: 'Customers',
    description: 'View and manage your customer profiles.',
    icon: <Users className="size-8 text-primary" />,
  },
  {
    href: '/dashboard/planning',
    title: 'Tour Planning',
    description: 'Create and organize tour itineraries.',
    icon: <MapPin className="size-8 text-primary" />,
  },
   {
    href: '/dashboard/destinations',
    title: 'Destination Management',
    description: 'Manage all available destinations.',
    icon: <Globe className="size-8 text-primary" />,
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-1">
          Welcome back! Here's a quick look at your tour operations.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-primary text-primary-foreground">
           <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="size-6" />
              AI Itinerary Generator
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-primary-foreground/80 mb-4">
              Create personalized tours in seconds with our AI-powered tool.
            </CardDescription>
            <Button asChild variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link href="/itinerary-generator">
                Generate Now <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Total Revenue</CardTitle>
            <CardDescription>Last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">$25,345</p>
            <p className="text-xs text-muted-foreground mt-1">+15.2% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>New Bookings</CardTitle>
            <CardDescription>Last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">+128</p>
            <p className="text-xs text-muted-foreground mt-1">+8.5% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Active Tours</CardTitle>
            <CardDescription>Currently available</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">24</p>
            <p className="text-xs text-muted-foreground mt-1">3 upcoming tours this week</p>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-bold tracking-tight">Management Sections</h2>
        <div className="grid gap-6 mt-4 sm:grid-cols-2">
          {dashboardLinks.map((link) => (
            <Card key={link.href} className="hover:bg-muted/50 transition-colors">
              <Link href={link.href} className="block h-full">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div className="space-y-1.5">
                    <CardTitle>{link.title}</CardTitle>
                    <CardDescription>{link.description}</CardDescription>
                  </div>
                  {link.icon}
                </CardHeader>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
