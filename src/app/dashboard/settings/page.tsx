
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlusCircle, Upload, Palette, Bell, Users, Trash2 } from 'lucide-react';

const teamMembers = [
    { name: 'Alice Johnson', email: 'alice@tourverse.com', role: 'Admin', avatar: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=100&h=100&fit=crop' },
    { name: 'Bob Williams', email: 'bob@tourverse.com', role: 'Tour Manager', avatar: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=100&h=100&fit=crop' },
    { name: 'Diana Prince', email: 'diana@tourverse.com', role: 'Guide', avatar: 'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?w=100&h=100&fit=crop' },
];


export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-1">
          Configure your system, manage integrations, and set preferences.
        </p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList>
          <TabsTrigger value="general">
            <Palette className="mr-2 h-4 w-4" /> General
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="mr-2 h-4 w-4" /> Notifications
          </TabsTrigger>
          <TabsTrigger value="team">
            <Users className="mr-2 h-4 w-4" /> Team Management
          </TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>
                Update your site's basic information and branding.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="site-name">Site Name</Label>
                <Input id="site-name" defaultValue="TourVerse" />
              </div>
               <div className="space-y-2">
                <Label htmlFor="logo">Logo</Label>
                 <div className="flex items-center gap-4">
                    <div className="w-24 h-24 bg-muted rounded-md flex items-center justify-center">
                        <Palette className="w-10 h-10 text-muted-foreground" />
                    </div>
                    <Button variant="outline">
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Logo
                    </Button>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger id="language">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Español</SelectItem>
                      <SelectItem value="fr">Français</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Currency</Label>
                  <Select defaultValue="usd">
                    <SelectTrigger id="currency">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD ($)</SelectItem>
                      <SelectItem value="eur">EUR (€)</SelectItem>
                      <SelectItem value="gbp">GBP (£)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
               <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Settings */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>
                Manage how you receive notifications from the system.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="notification-email">Notification Email</Label>
                    <Input id="notification-email" type="email" defaultValue="admin@tourverse.com" />
                </div>
                <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-lg border p-4">
                        <div>
                            <Label htmlFor="new-booking-notif">New Bookings</Label>
                            <p className="text-sm text-muted-foreground">
                                Receive an email for every new booking.
                            </p>
                        </div>
                        <Switch id="new-booking-notif" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between rounded-lg border p-4">
                        <div>
                            <Label htmlFor="cancellation-notif">Cancellations</Label>
                             <p className="text-sm text-muted-foreground">
                                Get notified when a customer cancels a booking.
                            </p>
                        </div>
                        <Switch id="cancellation-notif" defaultChecked />
                    </div>
                     <div className="flex items-center justify-between rounded-lg border p-4">
                        <div>
                            <Label htmlFor="inquiry-notif">Customer Inquiries</Label>
                             <p className="text-sm text-muted-foreground">
                                Receive an email when a new customer inquiry is submitted.
                            </p>
                        </div>
                        <Switch id="inquiry-notif" />
                    </div>
                </div>
                <div className="flex justify-end">
                    <Button>Save Changes</Button>
                </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Team Management */}
        <TabsContent value="team">
            <Card>
                <CardHeader>
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle>Team Management</CardTitle>
                        <CardDescription>
                            Manage roles and invite new members to your team.
                        </CardDescription>
                    </div>
                     <Button>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Invite Member
                    </Button>
                </div>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {teamMembers.map(member => (
                            <li key={member.email} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                                <div className="flex items-center gap-4">
                                    <Avatar>
                                        <AvatarImage src={member.avatar} />
                                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold">{member.name}</p>
                                        <p className="text-sm text-muted-foreground">{member.email}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                     <Select defaultValue={member.role}>
                                        <SelectTrigger className="w-48">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Admin">Admin</SelectItem>
                                            <SelectItem value="Tour Manager">Tour Manager</SelectItem>
                                            <SelectItem value="Guide">Guide</SelectItem>
                                            <SelectItem value="Support">Support</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Button variant="ghost" size="icon" className="text-destructive hover:bg-destructive/10">
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </TabsContent>

      </Tabs>
    </div>
  );
}
