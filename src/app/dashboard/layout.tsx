import { DashboardSidebar } from '@/components/layout/dashboard-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <DashboardSidebar />
        <main className="flex-1 p-4 sm:p-6 md:p-8">{children}</main>
      </div>
    </SidebarProvider>
  );
}
