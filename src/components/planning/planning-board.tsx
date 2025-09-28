import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { GripVertical, Clock, Edit, Trash2 } from 'lucide-react';
import { toursData } from '@/lib/data';
import { Button } from '../ui/button';

const badgeColors: { [key: string]: string } = {
    logistics: 'bg-slate-500',
    activity: 'bg-blue-500',
    dining: 'bg-orange-500',
    entertainment: 'bg-purple-500',
    leisure: 'bg-green-500',
    Adventure: 'bg-accent',
    Cultural: 'bg-primary',
    Relaxation: 'bg-green-500',
    "City Break": 'bg-purple-500',
};

export function PlanningBoard() {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {toursData.map((tour) => (
          <Card key={tour.id} className="w-[350px] flex-shrink-0 bg-muted/40 flex flex-col">
            <CardHeader>
              <CardTitle className="truncate">{tour.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 flex-grow">
                <div className="font-semibold text-lg">${tour.price}</div>
                <div className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                    <Clock className="h-4 w-4" />
                    <span>{tour.duration} days</span>
                </div>
                 <Badge className={`text-white ${badgeColors[tour.category]}`}>{tour.category}</Badge>
            </CardContent>
            <div className="p-4 border-t flex justify-end gap-2">
                <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                </Button>
                <Button variant="destructive" size="sm">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                </Button>
            </div>
          </Card>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
