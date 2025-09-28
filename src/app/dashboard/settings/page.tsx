import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Settings } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-1">
          Configure your system, manage integrations, and set preferences.
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="text-primary" />
            Coming Soon
          </CardTitle>
          <CardDescription>
            This section is under construction. System configuration options, including role-based access control, notification preferences, and payment gateway integrations, will be available here soon.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
