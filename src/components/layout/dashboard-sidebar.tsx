'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/icons';
import {
  LayoutDashboard,
  LineChart,
  BookCopy,
  Users,
  Map,
  Bot,
  Home,
  Globe,
  MapPin,
  CreditCard,
  FileText,
  Contact,
  Settings
} from 'lucide-react';
import { usePathname as useNextPathname } from 'next/navigation';


const menuItems = [
  { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { href: '/dashboard/analytics', label: 'Analytics', icon: LineChart },
  { href: '/dashboard/bookings', label: 'Bookings', icon: BookCopy },
  { href: '/dashboard/customers', label: 'Customers', icon: Users },
  { href: '/dashboard/tours', label: 'Tours', icon: MapPin },
  { href: '/dashboard/destinations', label: 'Destinations', icon: Globe },
  { href: '/dashboard/payments', label: 'Payments', icon: CreditCard },
  { href: '/dashboard/reports', label: 'Reports', icon: FileText },
  { href: '/dashboard/staff', label: 'Staff & Guides', icon: Contact },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
];

export function DashboardSidebar() {
  const pathname = useNextPathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center justify-between">
          <Button
            asChild
            variant="ghost"
            className="h-10 w-full justify-start px-2 group-data-[collapsible=icon]:h-8 group-data-[collapsible=icon]:w-8 group-data-[collapsible=icon]:justify-center"
          >
            <Link href="/" className="flex items-center gap-2">
              <Logo className="size-6 shrink-0" />
              <span className="font-bold font-headline group-data-[collapsible=icon]:hidden">
                TourVerse
              </span>
            </Link>
          </Button>
          <SidebarTrigger className="group-data-[collapsible=icon]:hidden" />
        </div>
      </SidebarHeader>

      <SidebarMenu className="flex-1 p-2">
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.href}>
            <SidebarMenuButton
              asChild
              isActive={pathname.startsWith(item.href) && (item.href !== '/dashboard' || pathname === '/dashboard')}
              tooltip={{ children: item.label, side: 'right' }}
            >
              <Link href={item.href}>
                <item.icon />
                <span>{item.label}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>

      <div className="p-2 border-t">
         <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip={{ children: "AI Itinerary", side: 'right' }}>
              <Link href="/itinerary-generator">
                <Bot />
                <span>AI Itinerary</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip={{ children: "Homepage", side: 'right' }}>
              <Link href="/">
                <Home />
                <span>Homepage</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
      </div>
    </Sidebar>
  );
}
