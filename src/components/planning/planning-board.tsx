import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { GripVertical, Clock } from 'lucide-react';

const itinerary = {
  'Day 1': [
    { time: '9:00 AM', title: 'Arrival & Hotel Check-in', type: 'logistics' },
    { time: '1:00 PM', title: 'Louvre Museum Tour', type: 'activity' },
    { time: '7:00 PM', title: 'Dinner at Le Jules Verne', type: 'dining' },
  ],
  'Day 2': [
    { time: '10:00 AM', title: 'Eiffel Tower Summit', type: 'activity' },
    { time: '1:00 PM', title: 'Seine River Cruise', type: 'activity' },
    { time: '6:00 PM', title: 'Montmartre Art Walk', type: 'activity' },
  ],
  'Day 3': [
    { time: '9:30 AM', title: 'Palace of Versailles', type: 'activity' },
    { time: '2:00 PM', title: 'Gardens of Versailles', type: 'activity' },
    { time: '8:00 PM', title: 'Moulin Rouge Show', type: 'entertainment' },
  ],
  'Day 4': [
    { time: '11:00 AM', title: 'Shopping on Champs-Élysées', type: 'leisure' },
    { time: '3:00 PM', title: 'Departure', type: 'logistics' },
  ],
};

const badgeColors: { [key: string]: string } = {
    logistics: 'bg-slate-500',
    activity: 'bg-blue-500',
    dining: 'bg-orange-500',
    entertainment: 'bg-purple-500',
    leisure: 'bg-green-500',
};

export function PlanningBoard() {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {Object.entries(itinerary).map(([day, activities]) => (
          <Card key={day} className="w-[350px] flex-shrink-0 bg-muted/40">
            <CardHeader>
              <CardTitle>{day}: Parisian Wonders</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {activities.map((activity) => (
                <Card key={activity.title} className="bg-background group cursor-grab active:cursor-grabbing">
                  <CardContent className="p-3 flex items-start gap-3">
                    <GripVertical className="h-5 w-5 text-muted-foreground mt-1 group-hover:text-foreground transition-colors" />
                    <div className="flex-1">
                      <div className="font-semibold">{activity.title}</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                         <Clock className="h-3 w-3" />
                         <span>{activity.time}</span>
                      </div>
                    </div>
                     <Badge className={`text-white ${badgeColors[activity.type]}`}>{activity.type}</Badge>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
